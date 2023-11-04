import {debounceTime, distinctUntilChanged, fromEvent} from "rxjs";
import React, {useEffect, useRef} from "react";

const Debounce01 = () => {
  const inp = useRef(null)

  useEffect(() => {
    const observable = fromEvent(inp.current!, 'input')

    const piped$ = observable.pipe(
      debounceTime(500),
      distinctUntilChanged()
    )

    const sub$ = piped$.subscribe({
      next(evt) {
        console.log((evt as unknown as React.ChangeEvent<HTMLInputElement>).target.value)
      }
    })

    return () => sub$.unsubscribe()
  }, [])

  return (<>
    <h1>Debounce01...</h1>

    <input ref={inp} type="text" />
  </>)
}

export default Debounce01
