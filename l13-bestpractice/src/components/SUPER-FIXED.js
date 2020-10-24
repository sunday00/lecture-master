import React, { useEffect, useState } from 'react'
import useOnMounted from '../hooks/useOnMounted'

export default function SuperFixed(props)
{
    const [month, setMonth] = useState(0);
    console.log('super-fixed render:', props.p);

    // useEffect(() => {
    //     setMonth((new Date).getMonth() + 1);
    //     console.log('call use effect', props.p);
    // }, []);
    useOnMounted(() => {
        setMonth((new Date).getMonth() + 1);
        console.log('call use effect', props.p);
    });


    return (
        <>
            <div style={{marginTop:'25px'}}>
                Current Month : {month}
            </div>
        </>
    );
}
