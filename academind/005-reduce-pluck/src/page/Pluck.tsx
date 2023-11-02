import React, {useEffect, useRef} from "react";
import {debounceTime, distinctUntilChanged, fromEvent, pluck} from "rxjs";

const Pluck = () => {
  const iRef = useRef(null)

  useEffect(() => {
    const observable = fromEvent(iRef.current!, 'input')

    const piped = observable.pipe(
      // map((e) => (e as React.ChangeEvent<HTMLInputElement>).target.value),
      pluck('target', 'value'),
      debounceTime(500),
      distinctUntilChanged(),
    )

    const subs$ = piped.subscribe({
      next(v) {
        console.log(v)
      }
    })

    return () => subs$.unsubscribe()
  }, [])

  return (<>
    <h1>Pluck...</h1>
    <input type="text" ref={iRef}/>
  </>)
}

export default Pluck
