import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import friendReducer from "../services/friends/state";
import timelineReducer from "../services/timeline/state";
import timelineSaga from "../services/timeline/state";
import  createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer
});

const sagaMiddleWare = createSagaMiddleware();
// @ts-ignore
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));

function* rootSaga(){
    yield all([timelineSaga()]);
}
sagaMiddleWare.run(rootSaga);

export default store;