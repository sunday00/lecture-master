import {useEffect, useRef} from "react";
import {of, reduce} from "rxjs";

const Reduce = () => {
  const iRef = useRef(null)

  useEffect(() => {
    // const observable = fromEvent(iRef.current!, 'input')
    const observable = of(1,2,3,4,5)

    const piped = observable.pipe(
      reduce((acc, cur) => acc + cur, 0)
    )

    const subs$ = piped.subscribe({
      next(v) {
        console.log(v)
      }
    })

    return () => subs$.unsubscribe()
  }, [])

  return (<>
    <h1>Foo...</h1>
    <input type="text" ref={iRef}/>
  </>)
}

export default Reduce
