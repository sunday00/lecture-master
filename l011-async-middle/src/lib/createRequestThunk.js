export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type });

    await request(params)
      .then((res) => {
        dispatch({
          type: SUCCESS,
          payload: res.data,
        });
      })
      .catch((res) => {
        dispatch({
          type: FAILURE,
          payload: res,
          error: true,
        });
      });
  };
}
