import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="py-6 max-w-4xl mx-auto text-xs	">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
