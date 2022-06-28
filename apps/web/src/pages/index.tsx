import { sanityClient } from '@/lib/sanity.server';
import { homePageQuery } from '@/lib/queries';

function HomePage({ games }) {
  return (
    <section>
      {games.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
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
