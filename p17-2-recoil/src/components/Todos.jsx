import TodoItem from '@c/TodoItem.jsx';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '@/stores/todo.jsx';
import TodoInput from '@c/TodoInput.jsx';
import TodoListFilter from '@c/TodoListFilter.jsx';
import TodoListState from '@c/TodoListState.jsx';

const Todos = () => {
  const todos = useRecoilValue(filteredTodoListState)

  return (<div className="p-4">
    <TodoListState />
    <TodoListFilter />
    <TodoInput />
    <div className="my-4 w-full max-w-md mx-auto">
      {todos.map((todo) => (<TodoItem item={todo} key={todo.id} />))}
    </div>
  </div>)
}

export default Todos