import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({ number: state.counter.number });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     // console.log('increase');
//     dispatch(increase());
//   },
//   decrease: () => {
//     // console.log('decrease');
//     dispatch(decrease());
//   },
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//     },
//     dispatch,
//   );

const mapDispatchToProps = {
  increase,
  decrease,
};

// export default CounterContainer;
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
