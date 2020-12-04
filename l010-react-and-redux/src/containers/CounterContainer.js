import React, { useCallback } from 'react';
// import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = (props) => {
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    // <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    <Counter
      number={useSelector((state) => state.counter.number)}
      // onIncrease={() => dispatch(increase())}
      // onDecrease={() => dispatch(decrease())}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

// const mapStateToProps = (state) => ({ number: state.counter.number });
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

// const mapDispatchToProps = {
//   increase,
//   decrease,
// };

export default CounterContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
