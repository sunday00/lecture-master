import {useEffect, useRef} from "react";
import {fromEvent} from "rxjs";

function App() {
  const btnRef = useRef(null)

  useEffect(() => {
    const src$ = fromEvent(btnRef.current!, 'click')
    const piped = src$.pipe()

    const subscription = piped.subscribe((coordinate) => {
      console.log(coordinate)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
      <main>
        <button ref={btnRef}>Click</button>
      </main>
    </>
  )
}

export default App
