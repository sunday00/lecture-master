import React from 'react';

import './app.css';
import Border from './app.module.css';
import './app.scss';

console.log(Border);

export default function Box ({size}){
    return <div className={`box ${size} ${Border.border} ${Border.indigo}`}>{size} box</div>;
}