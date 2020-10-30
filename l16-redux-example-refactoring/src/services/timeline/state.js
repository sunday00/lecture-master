import { createReducer, createSetValueAction, setValueReducer } from '../../common/redux-helper';
import { FILTER } from '../../common/mockData';

// const ADD = 'timeline/Add';
// const REMOVE = 'timeline/REMOVE';
// const EDIT = 'timeline/EDIT';
// const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE';

// const SET_FILTER = 'timeline/SET_FILTER';

// const SET_VALUE = 'timeline/SET_VALUE';

export const types = {
    ADD: 'timeline/Add',
    REMOVE: 'timeline/REMOVE',
    EDIT: 'timeline/EDIT',
    INCREASE_NEXT_PAGE: 'timeline/INCREASE_NEXT_PAGE',

    SET_FILTER: 'timeline/SET_FILTER',
    REQUEST_LIKES: 'timeline/REQUEST_LIKES',
    ADD_LIKE: 'timeline/like',
    SET_LOADING: 'timeline/SET_LOADING',

    SET_VALUE: 'timeline/SET_VALUE',

    
}

// export const addTimeline = timeline => ({ type: ADD, timeline });
// export const removeTimeline = timeline => ({ type: REMOVE, timeline });
// export const editTimeline = timeline => ({ type: EDIT, timeline});
// export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

// export const setFilter = filter => { 
//     return { type: SET_FILTER, filter } 
// };

// export const setValue = createSetValueAction(SET_VALUE);

export const actions = {
    addTimeline : timeline => ({ type: types.ADD, timeline }),
    removeTimeline : timeline => ({ type: types.REMOVE, timeline }),
    editTimeline : timeline => ({ type: types.EDIT, timeline}),
    increaseNextPage : () => ({ type: types.INCREASE_NEXT_PAGE }),

    setFilter : filter => { 
        return { type: types.SET_FILTER, filter } 
    },
    requestLikes: timeline => ({ type: types.REQUEST_LIKES, timeline }),
    addLike: ( timelineId, value ) => ({ type: types.ADD_LIKE, timelineId, value }),
    setLoading: isLoading => ({ type: types.SET_LOADING, isLoading }),

    setValue : createSetValueAction( types.SET_VALUE )
}



const INITIAL_STATE = { timelines: [], nextPage: 0, filter: FILTER, cnt: 0, isLoading: false }

const reducer = createReducer(INITIAL_STATE, {
    [types.ADD] : (state, action) => state.timelines.push(action.timeline),
    [types.REMOVE] : (state, action) => state.timelines = state.timelines.filter(t => t.id !== action.timeline.id),
    [types.EDIT] : (state, action) => {
        const index = state.timelines.findIndex( t => t.id === action.timeline.id );
        if( index >= 0 ) state.timelines[index] = action.timeline;
    },
    [types.INCREASE_NEXT_PAGE] : (state, action) => ( state.nextPage += 1 ),
    [types.SET_FILTER] : (state, action) => { state.filter = action.filter; },
    [types.SET_VALUE] : setValueReducer,
    [types.ADD_LIKE] : (state, action) => {
        const timeline = state.timelines.find( i => i.id === action.timelineId );
        if (timeline) { timeline.likes += action.value; }
    }
});

export default reducer;