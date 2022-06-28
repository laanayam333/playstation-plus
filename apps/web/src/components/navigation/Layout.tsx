import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="py-12 max-w-7xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
