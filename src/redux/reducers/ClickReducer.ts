import { AnyAction } from 'redux';
import { CHANGE_PLAYER, CLICK_ACTION, PC_BRAIN, SAVE_GAME,
  START_GAME } from '../actions/ClickAction';

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
  lastGame: [localStorage.getItem('lastGames')],
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
      return { ...state, game, choseP: { player: true } };
    }
    case SAVE_GAME: {
      if (state.lastGame[0] === null) return { ...state, lastGame: [action.payload] };
      return { ...state, lastGame: [...state.lastGame, action.payload] };
    }
    case PC_BRAIN: {
      if (state.game.filter((e) => e.v === true).length === 9) {
        return { ...state };
      }
      return { ...state,
        game: [...state.game
          .filter((e) => e.id !== action.payload.id),
        { id: action.payload.id, v: true, img: action.payload.img, player: 2 }] };
    }
    default: {
      return { ...state };
    }
  }
};

export default ClickReducer;
