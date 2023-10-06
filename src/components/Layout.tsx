import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LayoutDiv, { ButtonBot, Footer, Header, SecLastGames } from '../styles/HomeStyled';
import { Dispatch, GlobalState } from '../types';
import { startBot } from '../redux/actions/ClickAction';

function Layout() {
  const store = useSelector((state:GlobalState) => state);
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <LayoutDiv id="secGame">
      <Header>
        <h1>Jogo da Velha - Beta1.3</h1>
        <div>
          <ButtonBot
            onClick={ () => dispatch(startBot(store.ClickReducer.bot)) }
          >
            {store.ClickReducer.bot ? 'Desativar Bot' : 'Ativar Bot'}
          </ButtonBot>
          <ButtonBot onClick={ () => navigate('/novidades') }>Novidades</ButtonBot>
        </div>
      </Header>
      <Outlet />
      <SecLastGames>
        <h3>Últimos Jogos</h3>
        <div>
          {store.ClickReducer.lastGame[0]
          && store.ClickReducer.lastGame[store.ClickReducer.lastGame.length - 1]
            .map((e) => (
              (e.v
                ? <img src={ e.img } alt="" key={ e.id } /> : <div key={ e.id } />)
            ))}

        </div>
        <div>
          {store.ClickReducer.lastGame[1]
          && store.ClickReducer.lastGame[store.ClickReducer.lastGame.length - 2]
            .map((e) => (
              (e.v
                ? <img src={ e.img } alt="" key={ e.id } /> : <div key={ e.id } />)
            ))}
        </div>
        <div>
          {store.ClickReducer.lastGame[2]
          && store.ClickReducer.lastGame[store.ClickReducer.lastGame.length - 3]
            .map((e) => (
              (e.v
                ? <img src={ e.img } alt="" key={ e.id } /> : <div key={ e.id } />)
            ))}
        </div>
      </SecLastGames>
      <Footer>feat by ruy</Footer>
    </LayoutDiv>
  );
}

export default Layout;
