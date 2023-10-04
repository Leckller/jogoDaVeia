import { AnyAction } from 'redux';
import { CHANGE_PLAYER, CLICK_ACTION, START_GAME } from '../actions/ClickAction';

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
  choseP: { player: true },
};

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
          player: !state.choseP.player ? 1 : 2,
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
