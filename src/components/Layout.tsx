import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Footer, Header, SecLastGames } from '../styles/HomeStyled';
import { GlobalState } from '../types';

function Layout() {
  const store = useSelector((state:GlobalState) => state);
  return (
    <div>
      <Header><h1>Jogo da Velha</h1></Header>
      <Outlet />
      <SecLastGames>
        <h3>Últimos Jogos</h3>
        <div>
          {store.ClickReducer.lastGame[0]
          && store.ClickReducer.lastGame[store.ClickReducer.lastGame.length - 1]
            .map((e) => (
              <img src={ e.img } alt="" key={ e.id } />
            ))}

        </div>
        <div>
          {store.ClickReducer.lastGame[1]
          && store.ClickReducer.lastGame[store.ClickReducer.lastGame.length - 2]
            .map((e) => (
              <img src={ e.img } alt="" key={ e.id } />
            ))}
        </div>
        <div>
          {store.ClickReducer.lastGame[2]
          && store.ClickReducer.lastGame[store.ClickReducer.lastGame.length - 3]
            .map((e) => (
              <img src={ e.img } alt="" key={ e.id } />
            ))}
        </div>
      </SecLastGames>
      <Footer>feat by ruy</Footer>
    </div>
  );
}

export default Layout;
