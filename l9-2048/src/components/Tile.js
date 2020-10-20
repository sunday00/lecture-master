import React from 'react';
import cn from 'classnames';

export default function Tile({tile})
{
    return (
        <div className={cn(`tile tile-${tile.value} tile-position-${tile.x}-${tile.y}`, {
            'tile-merged' : tile.isMerged,
            'tile-new' : tile.isNew,
            })} key={`${tile.id}`}>
            <div className="tile-inner">{tile.value}</div>
        </div> 
    );
}