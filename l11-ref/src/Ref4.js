import React, { useRef } from 'react'

export default function Ref4(props)
{
    const boxRef = useRef({});

    console.log( boxRef );

    function onClick(e){
        for(let box of boxList){
            const ref = boxRef.current[box.id];
            const rect = ref.getBoundingClientRect();
            console.log(rect);
        }
    }

    return (
        <>
            <div style={{
                width: '100vw',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {boxList.map((box) => (
                    <div
                        key={box.id}
                        style={{
                            width: box.width,
                            height: '100px',
                            backgroundColor: 'tomato',
                            margin: '1px'
                        }}
                        ref={ ref => ( boxRef.current[box.id] = ref ) }
                    ></div>
                ))}
            </div>
            <button onClick={onClick}>log</button>
        </>
    );
}

const boxList = [
    {id:1, width:100},
    {id:2, width:200},
    {id:3, width:300},
    {id:4, width:400},
];