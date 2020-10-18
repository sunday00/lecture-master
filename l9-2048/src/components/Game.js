import React, { useState } from 'react';
import times from 'lodash/times';
import { Max_POS } from '../constant';
import { getInitialTileList } from '../utils/tile';

export default function Game ()
{

    const [tileList, setTileList] = useState(getInitialTileList);

    return (
        <div className="game-container">
            <div className="grid-container">
                { times(Max_POS, (i) => (
                    <div className="grid-row" key={`${i} `}>
                        { times(Max_POS, (y) => (
                            <div className="grid-cell" key={`${i}-${y}`}></div>
                        )) }
                    </div>
                )) }
                
                <div className="grid-row">
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                </div>
                <div className="grid-row">
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                </div>
                <div className="grid-row">
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                    <div className="grid-cell"></div>
                </div>
            </div>

            <div className="tile-container">
                { tileList.map(tile => (
                    <div className={`tile tile-${tile.value} tile-position-${tile.x}-${tile.y} tile-new`} key={`${tile.x}-${tile.y}`}>
                        <div className="tile-inner">{tile.value}</div>
                    </div> 
                )) }
            </div>

        </div>
    );
}