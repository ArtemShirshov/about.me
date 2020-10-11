import { applyMiddleware, compose, createStore } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import axiosMiddleware from 'redux-axios-middleware';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { instance } from 'services/instance';

import { mainSaga } from './sagas';
import { createRootReducer } from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = CreateSagaMiddleware();

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        axiosMiddleware(instance),
        sagaMiddleware,
        routerMiddleware(history),
      ),
    ),
  );

  sagaMiddleware.run(mainSaga);

  return store;
}
