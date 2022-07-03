import Image from 'next/image';
import classNames from 'classnames';

import { urlForImage } from '@/lib/sanity';
import { sanityClient } from '@/lib/sanity.server';
import { homePageQuery } from '@/lib/queries';

function HomePage({ games }) {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {games.map((game) => (
          <li key={game.id}>
            <div className="mt-2 grid grid-cols-4">
              {game.console.map((elm, idx) => (
                <div
                  key={idx}
                  className={classNames(
                    elm === 'ps4'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white-500 border-2 border-black text-black',
                    'px-1 py-0.5 text-center text-xs font-semibold uppercase lg:px-2 lg:py-1.5 lg:text-sm',
                  )}
                >
                  {elm}
                </div>
              ))}
            </div>
            <Image
              src={urlForImage(game.image).url()}
              alt={game.name}
              layout="responsive"
              width={3}
              height={4}
            />
            {game?.plan?.name && (
              <h3 className="mt-2 text-xs font-medium">PS+ {game.plan.name}</h3>
            )}
            <h2 className="text-sm font-bold uppercase">{game.name}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HomePage;

export async function getStaticProps() {
  const data = await sanityClient.fetch(homePageQuery);
  return {
    props: {
      games: data.games,
    },
    revalidate: 10,
  };
}
