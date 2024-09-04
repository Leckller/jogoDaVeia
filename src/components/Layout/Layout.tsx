import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
