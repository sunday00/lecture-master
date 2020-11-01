import React from 'react'
import store from '../../common/store';
import { actions } from '../../services/timeline/state';
import { FILTER, getNextTimeline } from '../../common/mockData';

import TimelineList from './TimelineList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Select from '../numbers/Select';
import { getFilter, getFilteredTimelines, getIsLoading } from '../../services/timeline/Selector';

export default function TimelineMain(props)
{
    
    // const timelines = useSelector( state => {
    //     console.log(state);
    //     // @ts-ignore
    //     return state.timeline.timelines;
    // } );

    // @ts-ignore
    // const [timelines, timelines2] = useSelector( state => [ state.timeline.timelines, state.timeline.timelines2 ], shallowEqual );
    // const [
    //     filter,
    //     filteredTimelines
    // ] = useSelector( state => {
    //     // @ts-ignore
    //     const {filter, timelines} = state.timeline;
    //     const filteredTimelines = timelines.filter(t => {
    //         if( filter === '' ) return t;
    //         return t.subject === filter
    //     });
    //     return [filter, filteredTimelines];
    // }, shallowEqual );

    const [
        filter,
        filteredTimelines,
        isLoading
    ] = useSelector( state => [
        getFilter(state),
        getFilteredTimelines(state),
        getIsLoading(state),
    ], shallowEqual );

    const dispatch = useDispatch();

    function onAdd () {
        dispatch( actions.setValue('cnt', store.getState().timeline.cnt + 1) );
        console.log(store.getState().timeline.cnt);

        let prevTimeline = store.getState().timeline.timelines;
        const timeline = getNextTimeline();

        if( prevTimeline !== timeline ){
            dispatch( actions.addTimeline(timeline) );
        }
        
        prevTimeline = timeline;
    }

    function onLike(e){
        const id = Number(e.target.dataset.id);
        const timeline = filteredTimelines.find(item => item.id === id);

        dispatch(actions.requestLikes(timeline));
    }

    // console.log( 'added' );
    return (
        <div>
            <button onClick={onAdd}>add</button>
            {/* <TimelineList timelines={timelines} /> */}
            <Select options={FILTER_OPTIONS}
                value={filter}
                postfix={'filter subject'} 
                onChange={v => dispatch(actions.setFilter(v)) } />
            {/* <TimelineList timelines={timelines} /> */}
            <TimelineList timelines={filteredTimelines} onLike={onLike} />
            <p>{isLoading && 'LOADING'}</p>
        </div>
    );
}

const FILTER_OPTIONS = [FILTER, 'sports', 'cartoon', 'detective', ];
