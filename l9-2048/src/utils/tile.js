import { Max_POS } from "../constant";
import { getRandomInteger } from "./numbers";

export function getInitialTileList ()
{
    const tileList = [];

    tileList.push(
        makeTile(tileList)
    );
    tileList.push(
        makeTile(tileList)
    );
    
    return tileList;
}

function isDuplicatedTile(tileList, tile){
    return tileList.some(item => item.x === tile.x && item.y === tile.y);
}

let id = 0;
export function makeTile(tileList)
{
    let tile;
    
    while(!tile || isDuplicatedTile(tileList, tile)){
        tile = {
            id: id++,
            value: getRandomInteger(1,10) > 8 ? 4 : 2,
            x: getRandomInteger(1, Max_POS),
            y: getRandomInteger(1, Max_POS),
        }
    }

    return tile;
}