import React, { useState } from 'react';

const EnterAndExit = () => {
    const [msg, setMsg] = useState('');

    const onEnter = () => {
        setMsg('HI');
    };
    const onExit = () => {
        setMsg('Bye');
    };

    return (
        <div>
            <button onClick={onEnter}>Enter</button>
            <button onClick={onExit}>Exit</button>
            <h2>{msg}</h2>
        </div>
    );
};

export default EnterAndExit;
