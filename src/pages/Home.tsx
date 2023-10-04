/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { SecGame, Main, ImgPlayers, ImgsDiv } from '../styles/HomeStyled';
import { Dispatch, GlobalState } from '../types';
import { changePlayer, clickAction, startGame } from '../redux/actions/ClickAction';
import x from '../assets/x.png';
import o from '../assets/o.png';
import { velha } from '../utils/velha';

function Home() {
  const dispatch: Dispatch = useDispatch();
  const store = useSelector((state: GlobalState) => state);
  const img = store.ClickReducer.choseP.player === true ? x : o;
  const [player, setPlayer] = useState(true);
  useEffect(() => {
    if (!(velha(store).victory) && store.ClickReducer.game
      .filter((e) => e.v === true).length === 9) {
      setTimeout(() => {
        window.alert('Velha!');
        dispatch(startGame());
      }, 200);
    }
    if (velha(store).victory && velha(store).winner !== 'draw') {
      setTimeout(() => {
        console.log(velha(store).winner);
        alert(`Vitória do ${velha(store).winner === 1 ? 'Player 1' : 'Player 2'}`);
        dispatch(startGame());
      }, 200);
    }
  }, [store]);
  return (
    <Main>
      <ImgsDiv>
        <ImgPlayers
          imgP={
           { opacity: player ? '100%' : '10%' }
}
          src={ x }
          alt=""
        />
        <div><h2>{`Vez do Player ${player ? '1' : '2'}`}</h2></div>
        <ImgPlayers
          imgP={
          { opacity: player ? '10%' : '100%' }
}
          src={ o }
          alt=""
        />
      </ImgsDiv>
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
