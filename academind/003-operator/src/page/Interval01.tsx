import {interval, map, throttleTime} from "rxjs";

const Interval01 = () => {
  const observable = interval(1000)
  const observer = {
    next(v) {
      console.log(v)
    }
  }

  let piped$ = observable.pipe(map((v) => {
    return v*2
  }))

    .pipe(throttleTime(2000))

  const s$ = piped$.subscribe(observer)

  return (<>
    <h1>Interval01...</h1>
  </>)
}

export default Interval01
