import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';
const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USER_FAILURE';

// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   await api
//     .getPost(id)
//     .then((res) => {
//       dispatch({ type: GET_POST_SUCCESS, payload: res.data });
//     })
//     .catch((res) => {
//       dispatch({ type: GET_POST_FAILURE, payload: res, error: true });
//     });
// };

// export const getUsers = (id) => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   await api
//     .getUsers(id)
//     .then((res) => {
//       dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
//     })
//     .catch((res) => {
//       dispatch({ type: GET_USERS_FAILURE, payload: res, error: true });
//     });
// };

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initial_state = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true,
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
    [GET_USERS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true,
      },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
    }),
  },
  initial_state,
);

export default sample;
