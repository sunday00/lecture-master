import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));

    await request(params)
      .then((res) => {
        dispatch({
          type: SUCCESS,
          payload: res.data,
        });
        dispatch(finishLoading(type));
      })
      .catch((res) => {
        dispatch({
          type: FAILURE,
          payload: res,
          error: true,
        });
        dispatch(finishLoading(type));
      });
  };
}
