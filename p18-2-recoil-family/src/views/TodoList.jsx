import { useRecoilValue } from 'recoil';
import { loggedTodoListState, todoListState } from '@/store/todo.store.jsx';
import TodoItemCreator from '@c/todoItemCreator.jsx';
import TodoItem from '@c/todoItem.jsx';
import TodoCounts from '@c/todoCounts.jsx';
import TodoListFilter from '@c/todoListFilter.jsx';

export default () => {
  const todoList = useRecoilValue(loggedTodoListState)
  // const todoList = useRecoilValue(filteredTodoListState)

  return (<section>
    <TodoCounts />
    <TodoListFilter />
    <TodoItemCreator />

    <div className="mt-6 p-4 overflow-y-scroll max-h-[80vh]
      scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {todoList.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  </section>)
}
