import {useEffect} from "react";
import {Observable} from "rxjs";

const ObserverAsync = () => {
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
      obs.next('a value')
      obs.next('b value')
      obs.next('c value')

      setTimeout(() => {
        obs.next('d value')
        obs.complete()
      }, 2000)

      obs.next('e value')
      obs.next('f value')
    })

    const subscription = src$.subscribe(observer)

    return () => subscription.unsubscribe()
  }, [])

  return (<>

  </>)
}

export default ObserverAsync
