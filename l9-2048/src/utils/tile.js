import { MAX_POS } from "../constant";
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
            x: getRandomInteger(1, MAX_POS),
            y: getRandomInteger(1, MAX_POS),
            isNew: null,
            isMerged: null
        }
    }

    return tile;
}

export function moveTile({ tileList, x, y }) {
    const isMoveY = y !== 0;
    const isMinus = x + y < 0;
    const sorted = tileList
      .map(item => ({ ...item, isMerged: false, isNew: false }))
      .filter(item => !item.isDisabled)
      .sort((a, b) => {
        const res = isMoveY ? a.x - b.x : a.y - b.y;
        if (res) {
          return res;
        } else {
          if (isMoveY) {
            return isMinus ? a.y - b.y : b.y - a.y;
          } else {
            return isMinus ? a.x - b.x : b.x - a.x;
          }
        }
      });
    const initialPos = isMinus ? 1 : MAX_POS;
    let pos = initialPos;
    for (let i = 0; i < sorted.length; i++) {
      if (isMoveY) {
        sorted[i].y = pos;
        pos = isMinus ? pos + 1 : pos - 1;
        if (sorted[i].x !== sorted[i + 1]?.x) {
          pos = initialPos;
        }
      } else {
        sorted[i].x = pos;
        pos = isMinus ? pos + 1 : pos - 1;
        if (sorted[i].y !== sorted[i + 1]?.y) {
          pos = initialPos;
        }
      }
    }
  
    let nextPos = 0;
    const newTileList = [...sorted];
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].isDisabled) {
        continue;
      }
  
      if (
        nextPos &&
        (isMoveY
          ? sorted[i].x === sorted[i - 1]?.x
          : sorted[i].y === sorted[i - 1]?.y)
      ) {
        if (isMoveY) {
          sorted[i].y = nextPos;
        } else {
          sorted[i].x = nextPos;
        }
        nextPos += isMinus ? 1 : -1;
      } else {
        nextPos = 0;
      }
  
      if (
        (isMoveY
          ? sorted[i].x === sorted[i + 1]?.x
          : sorted[i].y === sorted[i + 1]?.y) &&
        sorted[i].value === sorted[i + 1]?.value
      ) {
        const tile = makeTile(tileList);
        tile.x = sorted[i].x;
        tile.y = sorted[i].y;
        tile.isMerged = true;
        tile.value = sorted[i].value * 2;
        newTileList.push(tile);
        sorted[i].isDisabled = true;
        sorted[i + 1].isDisabled = true;
        if (isMoveY) {
          nextPos = sorted[i + 1].y;
          sorted[i + 1].y = sorted[i].y;
        } else {
          nextPos = sorted[i + 1].x;
          sorted[i + 1].x = sorted[i].x;
        }
      }
    }
    return newTileList;
  }
