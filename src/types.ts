import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type GlobalState = {
  ClickReducer: {
    game: { v: boolean, id: number, img: string }[]
  }
};

export type GetState = () => GlobalState;

export type Dispatch = ThunkDispatch<GlobalState, null, AnyAction>;
