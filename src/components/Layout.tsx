import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../styles/HomeStyled';

function Layout() {
  return (
    <div>
      <Header><h1>Jogo da Velha</h1></Header>
      <Outlet />
      <Footer>feat by ruy</Footer>
    </div>
  );
}

export default Layout;
