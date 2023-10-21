import './App.css'
import { fromEvent, throttleTime, map } from "rxjs";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    const button = document.querySelector('button')

    const src$ = fromEvent(button!, 'click')

    const piped = src$.pipe(throttleTime(1000))
      .pipe(map((data) => data.target))

    piped.subscribe((coordinate) => {
        console.log(coordinate)
      })
  }, [])

  return (
    <>
      <div>
        <button>Click</button>
      </div>
    </>
  )
}

export default App
