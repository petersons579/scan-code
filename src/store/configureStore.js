import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSaga();

const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;