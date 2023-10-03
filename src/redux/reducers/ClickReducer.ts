import { AnyAction } from 'redux';
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
};

const ClickReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default ClickReducer;
