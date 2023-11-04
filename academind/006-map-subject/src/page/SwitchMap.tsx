import {useEffect, useRef} from "react";
import {fromEvent, interval, switchMap} from "rxjs";

const SwitchMap = () => {
  const ref = useRef(null)

  useEffect(() => {
    const $observable1 = fromEvent(ref.current!, 'click')
    const $observable2 = interval(1000)

    const $piped = $observable1.pipe(
      switchMap(() => $observable2)
    )

    // const $sub = $piped.subscribe((e) => $observable2.subscribe(
    //   v => console.log(v)
    // ))

    const $sub = $piped.subscribe({
      next(v) {
        console.log(v)
      }
    })

    return  () => $sub.unsubscribe()
  })

  return (<>
    <h1>SwitchMap...</h1>
    <button ref={ref}>Click</button>
  </>)
}

export default SwitchMap
