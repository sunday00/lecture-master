import {fromEvent} from "rxjs";
import {useEffect, useRef} from "react";

export default function Observer01 () {
  const btnRef = useRef(null)

  useEffect(() => {
    const observable = {
      next (value: unknown) {
        console.log(value)
      },
      error(err: Error) {
        console.log(err)
      },
      complete() {
        console.log('complete')
      }
    }

    const src$ = fromEvent(btnRef.current!, 'click')

    const piped = src$.pipe()

    const subscription = piped.subscribe(observable)

    return () => subscription.unsubscribe()
  }, [])

  return (<>
    <button ref={btnRef}>Click</button>
  </>)
}
