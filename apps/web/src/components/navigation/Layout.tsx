import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-4xl py-6 px-6 text-xs lg:px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
