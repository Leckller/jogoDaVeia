/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { SecGame, Main, ImgPlayers } from '../styles/HomeStyled';
import { Dispatch, GlobalState } from '../types';
import { changePlayer, clickAction, startGame } from '../redux/actions/ClickAction';
import x from '../assets/x.png';
import o from '../assets/o.png';
import { velha } from '../redux/reducers/ClickReducer';

function Home() {
  const dispatch: Dispatch = useDispatch();
  const store = useSelector((state: GlobalState) => state);
  const img = store.ClickReducer.choseP.player === true ? x : o;
  const [player, setPlayer] = useState(false);
  useEffect(() => {
    console.log(store.ClickReducer.game
      .filter((e) => e.v === true));
    if (!(velha(store).victory) && store.ClickReducer.game
      .filter((e) => e.v === true).length === 9) {
      setTimeout(() => {
        window.alert('Velha!');
        dispatch(startGame());
      }, 200);
    }
    if (velha(store).victory && velha(store).winner !== 'draw') {
      setTimeout(() => {
        alert(`Vitória do ${velha(store).winner?.slice(12, 13)}`);
        dispatch(startGame());
      }, 200);
    }
  }, [store]);
  return (
    <Main>
      <div>
        <ImgPlayers
          imgP={
           { opacity: player ? '100%' : '10%' }
}
          src={ x }
          alt=""
        />
        <ImgPlayers
          imgP={
          { opacity: player ? '10%' : '100%' }
}
          src={ o }
          alt=""
        />
      </div>
      <SecGame>
        {store.ClickReducer.game.sort((a, b) => {
          return a.id > b.id ? -1 : 1;
        }).map((e) => {
          return (
            <button
              onClick={
              () => {
                if (store.ClickReducer.game
                  .find((e2) => e2.id === e.id)?.v) {
                  return console.log('Já foi marcado!');
                }
                dispatch(clickAction(store.ClickReducer.choseP.player));
                dispatch(changePlayer(img, e.id));
                setPlayer(!player);
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
