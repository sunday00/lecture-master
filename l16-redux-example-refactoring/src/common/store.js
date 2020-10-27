import { createStore, combineReducers } from "redux";
import friendReducer from "../services/friends/state";
import timelineReducer from "../services/timeline/state";

const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export default store;