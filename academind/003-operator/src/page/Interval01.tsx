import {interval, map, throttleTime} from "rxjs";
import {useEffect} from "react";

const Interval01 = () => {
  const observable = interval(1000)
  const observer = {
    next(v: any) {
      console.log(v)
    }
  }

  let piped$ = observable.pipe(
    map((v) => {
        return v*2
      }
    ),
    throttleTime(2000)
  )

  const s$ = piped$.subscribe(observer)

  useEffect(() => {
    return () => s$.unsubscribe()
  }, [])

  return (<>
    <h1>Interval01...</h1>
  </>)
}

export default Interval01
