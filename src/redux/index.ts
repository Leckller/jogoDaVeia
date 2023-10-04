import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
