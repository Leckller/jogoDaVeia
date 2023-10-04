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
    if (velha(store, [1, 2, 3]).vId.test) {
      setTimeout(() => {
        window.alert(`Vitória do ${velha(store, [1, 2, 3]).vId.winner?.slice(12, 13)}`);
        dispatch(startGame()); return '';
      }, 200);
    }
    if (velha(store, [4, 5, 6]).vId.test) {
      setTimeout(() => {
        window.alert(`Vitória do ${velha(store, [4, 5, 6]).vId.winner?.slice(12, 13)}`);
        dispatch(startGame()); return '';
      }, 200);
    }
    if (velha(store, [7, 8, 9]).vId.test) {
      setTimeout(() => {
        window.alert(`Vitória do ${velha(store, [7, 8, 9]).vId.winner?.slice(12, 13)}`);
        dispatch(startGame()); return '';
      }, 200);
    }
    if (velha(store, [1, 4, 5]).vId.test) {
      setTimeout(() => {
        window.alert(`Vitória do ${velha(store, [1, 4, 5]).vId.winner?.slice(12, 13)}`);
        dispatch(startGame()); return '';
      }, 200);
    }
    if (velha(store, [2, 5, 8]).vId.test) {
      setTimeout(() => {
        window.alert(`Vitória do ${velha(store, [2, 5, 8]).vId.winner?.slice(12, 13)}`);
        dispatch(startGame()); return '';
      }, 200);
    }
    if (velha(store, [3, 6, 9]).vId.test) {
      setTimeout(() => {
        window.alert(`Vitória do ${velha(store, [3, 6, 9]).vId.winner?.slice(12, 13)}`);
        dispatch(startGame()); return '';
      }, 200);
    }
    if (velha(store, [1, 5, 9]).vId.test) {
      setTimeout(() => {
        window.alert(`Vitória do ${velha(store, [1, 5, 9]).vId.winner?.slice(12, 13)}`);
        dispatch(startGame()); return '';
      }, 200);
    }
    if (velha(store, [3, 5, 7]).vId.test) {
      setTimeout(() => {
        window.alert(`Vitória do ${velha(store, [3, 5, 7]).vId.winner?.slice(12, 13)}`);
        dispatch(startGame()); return '';
      }, 200);
    } if (velha(store, [9, 90, 9]).vV) {
      window.alert('velha!'); dispatch(startGame());
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
          if (a.id > b.id) return 1;
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
