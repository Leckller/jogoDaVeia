import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import ClickReducer from './reducers/ClickReducer';

const rootReducer = combineReducers({
  ClickReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
