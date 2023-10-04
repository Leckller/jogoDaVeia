import { AnyAction } from 'redux';
import { CHANGE_PLAYER, CLICK_ACTION, START_GAME } from '../actions/ClickAction';
import { ST } from '../../types';
// import { CLICK_ACTION } from '../actions/ClickAction';
const game = [{
  v: false,
  id: 1,
  img: '',
}, {
  v: false,
  id: 2,
  img: '',
}, {
  v: false,
  id: 3,
  img: '',
}, {
  v: false,
  id: 4,
  img: '',
}, {
  v: false,
  id: 5,
  img: '',
}, {
  v: false,
  id: 6,
  img: '',
}, {
  v: false,
  id: 7,
  img: '',
}, {
  v: false,
  id: 8,
  img: '',
}, {
  v: false,
  id: 9,
  img: '',
}];

const INITIAL_STATE = {
  game,
  user1: { mark: false },
  user2: { mark: false },
  choseP: { player: false },
};

export function velha(
  state: { ClickReducer: { game: ST[] } },
  idAR: number[],
) {
  /// 123 / 456 / 789 / lado
  /// 147 / 258 / 369 / topo
  /// 159 / 357 / diagonal
  function verifyById(id:number[]) {
    const s1 = state.ClickReducer.game.find((e) => e.id === id[0]);
    const s2 = state.ClickReducer.game.find((e) => e.id === id[1]);
    const s3 = state.ClickReducer.game.find((e) => e.id === id[2]);
    const test = (s1?.img === s2?.img && s1?.img === s3?.img
      && s2?.img === s3?.img && s1?.v && s2?.v && s3?.v);
    return { test, winner: s1?.img };
  }
  const arrays = [1, 2, 3, 4, 5, 6, 7, 8];
  function verifyVelha(id: number[]) {
    const s1 = state.ClickReducer.game.find((e) => e.id === id[0]);
    const s2 = state.ClickReducer.game.find((e) => e.id === id[1]);
    const s3 = state.ClickReducer.game.find((e) => e.id === id[2]);
    const s4 = state.ClickReducer.game.find((e) => e.id === id[3]);
    const s5 = state.ClickReducer.game.find((e) => e.id === id[4]);
    const s6 = state.ClickReducer.game.find((e) => e.id === id[5]);
    const s7 = state.ClickReducer.game.find((e) => e.id === id[6]);
    const s8 = state.ClickReducer.game.find((e) => e.id === id[7]);
    const test = (s1?.v && s2?.v && s3?.v && s4?.v && s5?.v && s6?.v && s7?.v && s8?.v);
    return test;
  }
  return { vId: verifyById(idAR), vV: verifyVelha(arrays) };
}

const ClickReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_PLAYER: {
      const local = action.payload.id;
      const { img } = action.payload;
      return {
        ...state,
        game: [...state.game.filter((e) => e.id !== local), {
          v: true,
          id: local,
          img,
        }],
      };
    }
    case CLICK_ACTION: {
      return { ...state, choseP: { player: action.payload } };
    }
    case START_GAME: {
      return { ...state, game };
    }
    default: {
      return { ...state };
    }
  }
};

export default ClickReducer;
