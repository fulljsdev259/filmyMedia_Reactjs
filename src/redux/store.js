import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;

// then run the saga
sagaMiddleware.run(rootSaga);
// render the application
