import React, { useState } from 'react';
import times from 'lodash/times';
import { MAX_POS } from '../constant';
import { getInitialTileList } from '../utils/tile';
import useMoveTile from '../hooks/useMoveTile';
import Tile from './Tile';

export default function Game ({setScore})
{

    const [tileList, setTileList] = useState(getInitialTileList);

    useMoveTile({tileList, setTileList, setScore});

    return (
        <div className="game-container">
            <div className="grid-container">
                { times(MAX_POS, (i) => (
                    <div className="grid-row" key={`${i} `}>
                        { times(MAX_POS, (y) => (
                            <div className="grid-cell" key={`${y}`}></div>
                        )) }
                    </div>
                )) }
            </div>

            <div className="tile-container">
                { tileList.map(tile => {
                    return(
                        <Tile tile={tile} key={tile.id}></Tile>
                    )
                    
                }) }
            </div>

        </div>
    );
}