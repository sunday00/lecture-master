import {filter, finalize, interval, tap} from "rxjs";

const Filter = () => {
  const observable = interval(1000)

  const piped$ = observable
    .pipe(
      filter((v) => v % 2 === 0),
    )

  const s$ = piped$.subscribe({
    next(v) {
      console.log(v)
    },
    error(err) {
      console.error(err)
    },
    complete() {
      console.log('done')
    }
  })

  return (<>
    <h1>Filter...</h1>
  </>)
}

export default Filter
