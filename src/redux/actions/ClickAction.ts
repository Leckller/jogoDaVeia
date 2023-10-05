import { Game } from '../../types';

export const CLICK_ACTION = 'CLICK_ACTION';
export const START_GAME = 'START_GAME';
export const CHANGE_PLAYER = 'CHANGE_PLAYER';
export const SAVE_GAME = 'SAVE_GAME';
export const PC_BRAIN = 'PC_BRAIN';
export const START_BOT = 'START_BOT';

export const pcBrain = (id: number | undefined, img: string) => ({
  type: PC_BRAIN,
  payload: { id, img },
});

export const startGame = () => ({
  type: START_GAME,
});

export const startBot = (boo: boolean) => ({
  type: START_BOT,
  payload: !boo,
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
