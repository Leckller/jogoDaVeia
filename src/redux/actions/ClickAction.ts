export const CLICK_ACTION = 'CLICK_ACTION';
export const START_GAME = 'START_GAME';
export const CHANGE_PLAYER = 'CHANGE_PLAYER';

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
