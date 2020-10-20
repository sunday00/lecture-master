import { useEffect } from "react";
import { addKeyObserver, removeKeyObserver } from "../utils/keyborad";
import { makeTile, moveTile } from "../utils/tile";

export default function useMoveTile({ tileList, setTileList, setScore })
{
    function moveAndAddOne({x,y}){
        const newTileList = moveTile({tileList, x, y});

        const score = newTileList.reduce((acc, item) => (
            item.isMerged ? acc + item.value : acc
        ), 0);
        setScore(s => s + score);
        const newTile = makeTile(newTileList);
        newTile.isNew = true;
        newTileList.push(newTile);
        setTileList(newTileList);
    }

    function moveUp(){
        moveAndAddOne({x:0, y:-1});
    }
    function moveDown(){
        moveAndAddOne({x:0, y:1});
    }
    function moveLeft(){
        moveAndAddOne({x:-1, y:0});
    }
    function moveRight(){
        moveAndAddOne({x:1, y:0});
    }

    useEffect(() => {
        addKeyObserver('up', moveUp);
        addKeyObserver('down', moveDown);
        addKeyObserver('left', moveLeft);
        addKeyObserver('right', moveRight);

        return () => {
            removeKeyObserver('up', moveUp);
            removeKeyObserver('down', moveDown);
            removeKeyObserver('left', moveLeft);
            removeKeyObserver('right', moveRight);
        }
    });
}