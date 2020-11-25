import React from 'react';
import '../resources/Sassed.scss';

const Sassed = () => {
    return (
        <div className="Sassed-div">
            <h1>Hello sass</h1>
            <p>Scss file can read naturally</p>
            <article className="boxes">
                <div className="box red"></div>
                <div className="box orange"></div>
                <div className="box yellow"></div>
                <div className="box green"></div>
                <div className="box blue"></div>
                <div className="box indigo"></div>
                <div className="box violet"></div>
            </article>
        </div>
    );
};

export default Sassed;
