import React from 'react'
import store from '../../common/store';
import { addTimeline } from '../../services/timeline/state';
import { getNextTimeline } from '../../common/mockData';

import TimelineList from './TimelineList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export default function TimelineMain(props)
{
    
    // const timelines = useSelector( state => {
    //     console.log(state);
    //     // @ts-ignore
    //     return state.timeline.timelines;
    // } );

    // @ts-ignore
    const [timelines, timelines2] = useSelector( state => [ state.timeline.timelines, state.timeline.timelines2 ], shallowEqual );

    const dispatch = useDispatch();

    function onAdd () {
        let prevTimeline = store.getState().timeline.timelines;
        const timeline = getNextTimeline();

        if( prevTimeline != timeline ){
            dispatch( addTimeline(timeline) );
        }
        
        prevTimeline = timeline;
    }

    console.log( 'added' );

    return (
        <div>
            <button onClick={onAdd}>add</button>
            <TimelineList timelines={timelines} />
        </div>
    );
}
