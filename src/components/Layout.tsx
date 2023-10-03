import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header><h1>Jogo da Velha</h1></header>
      <Outlet />
    </div>
  );
}

export default Layout;
