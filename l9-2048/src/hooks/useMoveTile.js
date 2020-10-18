import { useEffect } from "react";
import { addKeyObserver, removeKeyObserver } from "../utils/keyborad";

export default function useMoveTile()
{
    function moveAndAddOne({x,y}){

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