import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

export const configureStore = () => {
  const storeWithMiddlewares = applyMiddleware(
    thunk,
    promise,
  );
  return createStore(reducer, storeWithMiddlewares);
};