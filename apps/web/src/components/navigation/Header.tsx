import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-gradient-to-br from-blue-700 to-blue-300">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="w-24 flex-shrink-0">
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/logo.png"
                    alt="Workflow"
                    layout="responsive"
                    width={5}
                    height={3}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
