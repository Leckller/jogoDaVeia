/* eslint-disable array-callback-return */
import { useDispatch, useSelector } from 'react-redux';
import { SecGame, Main } from '../styles/HomeStyled';
import { Dispatch, GlobalState } from '../types';
import { changePlayer, clickAction } from '../redux/actions/ClickAction';
import x from '../assets/x.png';
import o from '../assets/o.png';
import { velha } from '../redux/reducers/ClickReducer';

function Home() {
  const dispatch: Dispatch = useDispatch();
  const store = useSelector((state: GlobalState) => state);
  const img = store.ClickReducer.choseP.player === true ? x : o;
  return (
    <Main>
      tic tac toy valeu .beleza.
      <SecGame>
        {store.ClickReducer.game.sort((a, b) => {
          if (a.id > b.id) return 1;
        }).map((e) => {
          return (
            <button
              onClick={
              () => {
                velha(store);
                dispatch(clickAction(store.ClickReducer.choseP.player));
                if (store.ClickReducer.game
                  .find((e2) => e2.id === e.id)?.v) {
                  return console.log('Já foi marcado!');
                }
                dispatch(changePlayer(img, e.id));
              }
}
              key={ e.id }
            >
              <img src={ e.img } alt="" />
            </button>
          );
        })}
      </SecGame>
    </Main>
  );
}

export default Home;
