import React from 'react'

export default function TimelineList({timelines, onLike})
{
    return (
        <ul>
            {
                timelines.map(timeline => ( 
                    <li key={timeline.id}>
                        {timeline.desc} {timeline.subject} 
                        <button data-id={timeline.id} onClick={onLike}>like: {timeline.likes}</button>
                    </li> 
                ))
            }
        </ul>
    );
}
