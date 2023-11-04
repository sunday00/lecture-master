import {useEffect, useRef, useState} from "react";
import {BehaviorSubject, fromEvent, Subject} from "rxjs";
const BehaviorSubjectComponent = () => {
  const ref = useRef(null)
  const [div, setDiv] = useState('')

  useEffect(() => {
    const emitter$ = new BehaviorSubject('First')

    const observable$ = fromEvent(ref.current!, 'click')
    const piped$ = observable$.pipe(

    )

    const sub$ = piped$.subscribe({
      next() {
        emitter$.next('click?!')
      }
    })

    emitter$.subscribe((v) => setDiv(v as string))

    return () => sub$.unsubscribe()
  }, [])

  return (<>
    <h1>BehaviorSubject...</h1>
    <button ref={ref}>Click?</button>

    <div>{div}</div>
  </>)
}

export default BehaviorSubjectComponent
