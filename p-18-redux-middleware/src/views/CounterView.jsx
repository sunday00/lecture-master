import {connect} from "react-redux"
import {increase, decrease} from "@s/modules/counter.js"
import Counter from '@c/Counter.jsx'

const CounterView = ({number, increase, decrease}) => {
  return <Counter number={number} onIncrease={() => increase()} onDecrease={() => decrease()} />
}

export default connect(
  state => ({ number: state.reducer }),
  { increase, decrease }
)(CounterView)
