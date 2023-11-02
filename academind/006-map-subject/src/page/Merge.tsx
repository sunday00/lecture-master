import React, {useEffect, useRef, useState} from "react";
import {fromEvent, map, mergeMap} from "rxjs";

const Merge = () => {
  const iR1 = useRef(null)
  const iR2 = useRef(null)

  const [value, setValue] = useState('')

  useEffect(() => {
    const observer1$ = fromEvent(iR1.current!, 'input')
    const observer2$ = fromEvent(iR2.current!, 'input')

    const piped$ = observer1$.pipe(
      map((e) => (e as React.ChangeEvent<HTMLInputElement>).target.value),
      mergeMap((v) => observer2$.pipe(
        map((e) => v + ' ' + (e as React.ChangeEvent<HTMLInputElement>).target.value),

      )),
    )

    const sub$ = piped$.subscribe({
      next(v){
        setValue(v)
      }
    })

    return () => sub$.unsubscribe()
  }, [])

  return (<>
    <h1>Merge...</h1>
    <input type="text" ref={iR1} />
    <input type="text" ref={iR2} />

    <p>{value}</p>
  </>)
}

export default Merge
