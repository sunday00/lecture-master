import { handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const change_input = input => ({ type: CHANGE_INPUT, payload: input });

let id = 3;
export const insert = text => ({
  type: INSERT, todo: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = id => ({ type: TOGGLE, payload: id });

export const remove = id => ({ type: REMOVE, payload: id });

const initialState = {
  input: '',
  todos: [
    { id: 1, text: 'learn nestJS', done: false },
    { id: 2, text: 'learn ReactJS', done: true }
  ]
};

const todos = handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    input: action.payload
  }),
  [INSERT]: (state, action) => ({
    ...state,
    todos: state.todos.concat(action.payload)
  }),
  [TOGGLE]: (state, action) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === action.payload ? {
      ...todo,
      done: !todo.done
    } : todo)
  }),
  [REMOVE]: (state, action) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.payload)
  })
}, initialState);

export default todos;
