import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reduxApp } from './reducers';
import sagas from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware);

  if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }

  const store = createStore(reduxApp, middleware);
  sagaMiddleware.run(sagas);

  return store;
}
