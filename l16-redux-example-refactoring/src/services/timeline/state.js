import createReducer from '../../common/createReducer';
import { FILTER } from '../../common/mockData';

const ADD = 'timeline/Add';
const REMOVE = 'timeline/REMOVE';
const EDIT = 'timeline/EDIT';
const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE';

const SET_FILTER = 'timeline/SET_FILTER';


export const addTimeline = timeline => ({ type: ADD, timeline });
export const removeTimeline = timeline => ({ type: REMOVE, timeline });
export const editTimeline = timeline => ({ type: EDIT, timeline});
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

export const setFilter = filter => { 
    return { type: SET_FILTER, filter } 
};

const INITIAL_STATE = { timelines: [], nextPage: 0, filter: FILTER }

const reducer = createReducer(INITIAL_STATE, {
    [ADD] : (state, action) => state.timelines.push(action.timeline),
    [REMOVE] : (state, action) => state.timelines = state.timelines.filter(t => t.id !== action.timeline.id),
    [EDIT] : (state, action) => {
        const index = state.timelines.findIndex( t => t.id === action.timeline.id );
        if( index >= 0 ) state.timelines[index] = action.timeline;
    },
    [INCREASE_NEXT_PAGE] : (state, action) => ( state.nextPage += 1 ),
    [SET_FILTER] : (state, action) => { state.filter = action.filter; }
});

export default reducer;