import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer, { history } from './reducers';
import rootSaga from './sagas';
import { routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware, routerMiddleware(history))))

sagaMiddleware.run(rootSaga)