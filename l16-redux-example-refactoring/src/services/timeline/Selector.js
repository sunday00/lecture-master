import { createSelector } from 'reselect';

const getTimeline = state => state.timeline.timelines;
export const getFilter = state => state.timeline.filter;

// @ts-ignore
export const getFilteredTimelines = createSelector([getTimeline, getFilter], (timelines, filter) => timelines.filter(t => {
    if( filter === '' ) return t;
    return t.subject === filter
}));