import { useSelector } from 'react-redux';
import { SecGame, Main } from '../styles/HomeStyled';
import { GlobalState } from '../types';
// import x from '../assets/marca-x.png';
// import o from '../assets/contorno-de-forma-de-circulo.png';

function Home() {
  const store = useSelector((state: GlobalState) => state);
  return (
    <Main>
      tic tac toy valeu .beleza.
      <SecGame>
        {store.ClickReducer.game.map((e) => {
          return (
            <button key={ e.id }>
              <img src={ e.img } alt="" />
            </button>
          );
        })}
      </SecGame>
    </Main>
  );
}

export default Home;
