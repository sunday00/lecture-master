import React, { useEffect, useReducer } from 'react'
import store from '../../common/store';
import { addTimeline } from '../../services/timeline/state';
import { getNextTimeline } from '../../common/mockData';

import TimelineList from './TimelineList'

export default function TimelineMain(props)
{
    const [, forceUpdate] = useReducer(v => v + 1, 0);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => forceUpdate());
        return () => unsubscribe();
    }, []);

    function onAdd () {
        let prevTimeline = store.getState().timeline.timelines;
        const timeline = getNextTimeline();

        if( prevTimeline != timeline ){
            store.dispatch( addTimeline(timeline) );
        }
        
        prevTimeline = timeline;
    }

    const timelines = store.getState().timeline.timelines;

    console.log( 'added' );

    return (
        <div>
            <button onClick={onAdd}>add</button>
            <TimelineList timelines={timelines} />
        </div>
    );
}
