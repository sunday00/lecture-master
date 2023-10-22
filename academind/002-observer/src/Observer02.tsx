import {useEffect} from "react";
import {Observable} from "rxjs";

const Observer02 = () => {
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

      obs.error('oops')

      obs.next('d value') // not execute, cause above err
      obs.next('e value') // not execute
    })

    const subscription = src$.subscribe(observer)

    return () => subscription.unsubscribe()
  }, [])

  return (<>

  </>)
}

export default Observer02
