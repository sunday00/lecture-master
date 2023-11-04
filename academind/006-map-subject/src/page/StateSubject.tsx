import {useEffect, useRef, useState} from "react";
import {fromEvent, Subject} from "rxjs";
const StateSubject = () => {
  const ref = useRef(null)
  const [div, setDiv] = useState('')

  useEffect(() => {
    const emitter$ = new Subject()

    const observable$ = fromEvent(ref.current!, 'click')
    const piped$ = observable$.pipe(

    )

    const sub$ = piped$.subscribe({
      next() {
        emitter$.next('click?!')
      }
    })

    emitter$.subscribe((v) => setDiv(v as string))

    emitter$.next('first')

    return () => sub$.unsubscribe()
  }, [])

  return (<>
    <h1>StateSubject...</h1>
    <button ref={ref}>Click?</button>

    <div>{div}</div>
  </>)
}

export default StateSubject
