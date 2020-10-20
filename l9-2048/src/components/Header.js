import React from 'react';

export default function Header({score, best})
{
    return (
        <div className="heading">
            <h1 className="title">2048</h1>
            <div className="scores-container">
                <div className="score-container">{score}</div>
                <div className="best-container">{best}</div>
            </div>
        </div>
    );
}