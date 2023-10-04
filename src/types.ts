import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ST = {
  v: boolean,
  id: number,
  img: string,
};

export type GlobalState = {
  ClickReducer: {
    game: { v: boolean, id: number, img: string }[],
    user1: { mark: boolean }
    user2: { mark: boolean }
    choseP: { player: boolean }
  }
};

export type GetState = () => GlobalState;

export type Dispatch = ThunkDispatch<GlobalState, null, AnyAction>;
