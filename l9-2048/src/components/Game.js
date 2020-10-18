import React, { useState } from 'react';
import times from 'lodash/times';
import { Max_POS } from '../constant';
import { getInitialTileList } from '../utils/tile';
import useMoveTile from '../hooks/useMoveTile';

export default function Game ()
{

    const [tileList, setTileList] = useState(getInitialTileList);

    useMoveTile();

    return (
        <div className="game-container">
            <div className="grid-container">
                { times(Max_POS, (i) => (
                    <div className="grid-row" key={`${i} `}>
                        { times(Max_POS, (y) => (
                            <div className="grid-cell" key={`${y}`}></div>
                        )) }
                    </div>
                )) }
            </div>

            <div className="tile-container">
                { tileList.map(tile => (
                    <div className={`tile tile-${tile.value} tile-position-${tile.x}-${tile.y} tile-new`} key={`${tile.id}`}>
                        <div className="tile-inner">{tile.value}</div>
                    </div> 
                )) }
            </div>

        </div>
    );
}