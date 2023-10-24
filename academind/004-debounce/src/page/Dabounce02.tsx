import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";
import React, {useEffect, useRef} from "react";

const Debounce02 = () => {
  const inp = useRef(null)

  useEffect(() => {
    const observable = fromEvent(inp.current!, 'input')

    const piped$ = observable.pipe(
      map((evt) => (evt as unknown as React.ChangeEvent<HTMLInputElement>).target.value),
      debounceTime(500),
      distinctUntilChanged()
    )

    const sub$ = piped$.subscribe({
      next(v) {
        console.log(v)
      }
    })

    return () => sub$.unsubscribe()
  }, [])

  return (<>
    <h1>Debounce02...</h1>

    <input ref={inp} type="text" />
  </>)
}

export default Debounce02
