import { Outlet } from 'react-router-dom';
import { Header } from '../styles/HomeStyled';

function Layout() {
  return (
    <div>
      <Header><h1>Jogo da Velha</h1></Header>
      <Outlet />
    </div>
  );
}

export default Layout;
