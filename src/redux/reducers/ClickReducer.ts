import { AnyAction } from 'redux';
import { CHANGE_PLAYER, CLICK_ACTION } from '../actions/ClickAction';
import { ST } from '../../types';
// import { CLICK_ACTION } from '../actions/ClickAction';

const INITIAL_STATE = {
  game: [{
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
  }],
  user1: { mark: false },
  user2: { mark: false },
  choseP: { player: false },
};

export function velha(state: { ClickReducer: { game: ST[] } }) {
  /// 123 / 456 / 789 / lado
  /// 147 / 258 / 369 / topo
  /// 159 / 357 / diagonal
  function verifyById(id:number[]) {
    const s1 = state.ClickReducer.game.find((e) => e.id === id[0]);
    const s2 = state.ClickReducer.game.find((e) => e.id === id[1]);
    const s3 = state.ClickReducer.game.find((e) => e.id === id[2]);
    const test = (s1?.img === s2?.img && s1?.img === s3?.img
      && s2?.img === s3?.img && s1?.v && s2?.v && s3?.v);
    return test;
  }
  console.log(verifyById([1, 2, 3]));
  return verifyById([1, 2, 3]);
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
    default: {
      return { ...state };
    }
  }
};

export default ClickReducer;
