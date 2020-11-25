import React, { useState, useMemo, useCallback, useRef } from 'react';

function getAverage(list) {
    console.log('check');
    if (list.length === 0) return 0;
    return list.reduce((sum, cur) => sum + cur) / list.length;
}

const Average = () => {
    const [number, setNumber] = useState(0);
    const [list, setList] = useState([]);

    const getMemoAverage = useMemo(() => getAverage(list), [list]);

    // const onChange = (e) => {
    //     setNumber(e.target.value);
    // };

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);

    // const onKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         console.log('function is re-rendering too');
    //         setList([...list, parseInt(number)]);
    //         setNumber('');
    //         window.scrollTo(0, window.scrollMaxY);
    //     }
    // };

    const notRe_rendered_var = useRef(1);

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === 'Enter') {
                const n =
                    parseInt(number) === 10
                        ? notRe_rendered_var.current
                        : number;
                setList([...list, parseInt(n)]);
                setNumber('');
                window.scrollTo(0, window.scrollMaxY);
            }
        },
        [number, list]
    );

    return (
        <div>
            <h2>Average</h2>
            <input
                type="number"
                value={number}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <ul>
                {list.map((l, i) => (
                    <li key={i}>{l}</li>
                ))}
            </ul>
            <p>{getMemoAverage}</p>
        </div>
    );
};

export default Average;
