import { Game } from '../../types';

export const CLICK_ACTION = 'CLICK_ACTION';
export const START_GAME = 'START_GAME';
export const CHANGE_PLAYER = 'CHANGE_PLAYER';
export const SAVE_GAME = 'SAVE_GAME';

export const startGame = () => ({
  type: START_GAME,
});

export const clickAction = (player: boolean) => ({
  type: CLICK_ACTION,
  payload: !(player),
});

export const changePlayer = (img: string, id: number) => (
  {
    type: CHANGE_PLAYER,
    payload: {
      img,
      id,
    },
  }
);

export const saveGame = (lastGame: Game) => ({
  type: SAVE_GAME,
  payload: lastGame,
});
