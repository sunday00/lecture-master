import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import Counter from '@c/Counter.jsx'
import { increase, decrease } from '@s/modules/counter.js';

const CounterContainer = ({number, increase, decrease}) => {
  return <Counter number={number} increase={increase} decrease={decrease} />
}

const mapStateToProps = state => ({
  number: state.counter.number,
})

const mapDispatchToProps = {
  increase,
  decrease,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)