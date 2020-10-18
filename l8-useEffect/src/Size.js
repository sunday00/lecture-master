import React, { useEffect, useState } from 'react';

export default function Size () {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => { 
            setWidth(window.innerWidth);
        });
        console.log('call');
    }, []);

    return (<>{width}</>);
}