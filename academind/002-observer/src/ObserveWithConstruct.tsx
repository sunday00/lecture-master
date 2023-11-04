import {Observable} from "rxjs";
import {useEffect, useRef} from "react";

export const ObserveWithConstruct = () => {
  const btnRef = useRef(null)

  useEffect(() => {
    const observer = {
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

    const src$ = new Observable((obs) => {
      (btnRef.current! as HTMLButtonElement).onclick = (evt) => {
        obs.next(evt)
      }
    })

    const subscription = src$.subscribe(observer)

    return () => subscription.unsubscribe()
  }, [])

  return (<>
    <button ref={btnRef}>Click</button>
  </>)
}

export default ObserveWithConstruct
