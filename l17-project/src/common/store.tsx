import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import searchReducer from '../services/Search/states';
import searchSaga from '../services/Search/states/saga';

const reducer = combineReducers({
    search: searchReducer
});

const sagaMiddleware = createSagaMiddleware();

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers( applyMiddleware(sagaMiddleware) )
);

function* rootSaga(){
    yield all([searchSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;