import {Subject} from "rxjs";

const Subject01 = () => {
  const subject = new Subject()

  subject.subscribe({
    next(v) {
      console.log(v, 'subscribe 01')
    },
    error(err) {
      console.error(err, 'from 01')
    },
    complete() {
      console.log('done!', '01')
    }
  })

  subject.subscribe({
    next(v) {
      console.log(v, 'subscribe 02')
    },
  })

  subject.subscribe({
    next(v) {
      console.log(v, 'subscribe 03')
    },
    complete() {
      console.log('done!', '03')
    }
  })

  subject.next('Hello subscriber?')
  subject.complete()

  return (<>
    <h1>Subject01...</h1>
  </>)
}

export default Subject01
