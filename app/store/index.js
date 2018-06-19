import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise-middleware';
import { persistStore, autoRehydrate } from 'redux-persist'

const middleWares = [thunk, promise()];
if (__DEV__ === true) {
  middleWares.push(logger);
}

const enhancer = compose(applyMiddleware(...middleWares), autoRehydrate());

export default (onComplete) => {
  const store = createStore(
    reducers,
    {},
    enhancer,
  );
  persistStore(store, { blacklist: [], storage: AsyncStorage }, onComplete(store));
  return store;
};
