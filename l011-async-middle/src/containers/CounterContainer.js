import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { increase_async, decrease_async } from '../modules/counter';

const CounterContainer = (props) => {
  return (
    <div>
      <Counter
        number={props.number}
        // onIncrease={props.increase}
        // onDecrease={props.decrease}
        onIncrease={props.increase_async}
        onDecrease={props.decrease_async}
      ></Counter>
    </div>
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    // increase,
    // decrease,
    increase_async,
    decrease_async,
  },
)(CounterContainer);
