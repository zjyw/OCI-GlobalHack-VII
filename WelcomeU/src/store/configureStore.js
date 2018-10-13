import { createStore, compose } from 'redux';
import reducer from '../reducers';

const setUpStore = () => {
  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        maxAge: 999
      })) ||
    compose;
  /* eslint-enable no-underscore-dangle */
  const store = createStore(
    reducer,
    composeEnhancers()
  );

  return store;
};

export default setUpStore;