/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { SecGame, Main, ImgPlayers, ImgsDiv } from '../styles/HomeStyled';
import { Dispatch, GlobalState } from '../types';
import { changePlayer, clickAction, pcBrain, saveGame,
  startGame } from '../redux/actions/ClickAction';
import x from '../assets/x.png';
import o from '../assets/o.png';
import { velha } from '../utils/velha';
import { analises, brainDEFESA } from '../utils/Claudia';

function Home() {
  const dispatch: Dispatch = useDispatch();
  const store = useSelector((state: GlobalState) => state);
  const img = store.ClickReducer.choseP.player === true ? x : o;
  const [player, setPlayer] = useState(true);
  function reestart() {
    setPlayer(true);
    dispatch(saveGame(store.ClickReducer.game));
    dispatch(startGame());
  }
  function winner() {
    Swal.fire({
      title: store.ClickReducer.bot ? `Vitória do 
      ${velha(store).winner === 1 ? 'Player 1' : 'Bot Cláudia'}`
        : `Vitória do ${velha(store).winner === 1 ? 'Player 1' : 'Player 2'}`,
      text: store.ClickReducer.bot ? `${velha(store).winner === 1
        ? 'Mandou bem!!'
        : 'A Bot Cláudia tá dominando a parada!!'}`
        : `Não foi dessa vez ${velha(store).winner === 1 ? 'Player 2' : 'Player 1'}`,
    });
  }
  function draw() {
    Swal.fire({
      title: 'Velha!',
      text: 'São 2 idosos jogando?',
    });
  }
  useEffect(() => {
    console.log(analises(brainDEFESA(store.ClickReducer.game)));
    console.log(brainDEFESA(store.ClickReducer.game));
    const claudia = analises(brainDEFESA(store.ClickReducer.game));
    if (store.ClickReducer.game.length === 10) {
      reestart();
    }
    if (velha(store).victory || !velha(store).victory) {
      if (velha(store).victory && velha(store).winner !== 'draw') {
        winner();
        reestart();
        console.log('win 1');
      } else if (store.ClickReducer.game
        .filter((e) => e.v === true).length === 9) {
        draw();
        reestart();
        console.log('draw');
      }
    }
    if (!store.ClickReducer.choseP.player && store.ClickReducer.bot) {
      setPlayer(true);
      setTimeout(async () => {
        const whereS = store.ClickReducer.game.filter((e3) => e3.v === false);
        const random = Math.floor(Math.random() * whereS.length);
        const where = whereS.find((_eiii, i) => i === random)?.id;
        dispatch(
          pcBrain(claudia.get ? claudia.id : where, o),
        );
      }, 200);
      console.log('brain');
      dispatch(clickAction(store.ClickReducer.choseP.player));
    }
  }, [store.ClickReducer.game]);
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
          return a.id > b.id ? 1 : -1;
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
