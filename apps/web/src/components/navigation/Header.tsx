import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-gradient-to-br from-blue-700 to-blue-300">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-24">
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
            {/* <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-red-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="text-red-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-red-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calendar
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
