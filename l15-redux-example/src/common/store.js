import { createStore, combineReducers } from "redux";


const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer
});

const store = createStore(reducer);

export default store;