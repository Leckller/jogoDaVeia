import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ST = {
  v: boolean,
  id: number,
  img: string,
  player: number
};

export type Game = { v: boolean, id: number, img: string, player: number }[];

export type GlobalState = {
  ClickReducer: {
    game: Game,
    user1: { mark: boolean },
    user2: { mark: boolean },
    choseP: { player: boolean },
    lastGame: Game[],
    bot: boolean,
  }
};

export type GetState = () => GlobalState;

export type Dispatch = ThunkDispatch<GlobalState, null, AnyAction>;
