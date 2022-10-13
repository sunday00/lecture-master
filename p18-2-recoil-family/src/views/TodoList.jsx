import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from '@/store/todo.store.jsx';
import TodoItemCreator from '@c/todoItemCreator.jsx';
import TodoItem from '@c/todoItem.jsx';
import TodoListFilter from '@c/todoListFilter.jsx';
import TodoCounts from '@c/todoCounts.jsx';

export default () => {
  // const todoList = useRecoilValue(todoListState)
  const todoList = useRecoilValue(filteredTodoListState)

  return (<section>
    <TodoCounts />
    <TodoListFilter />
    <TodoItemCreator />

    <div className="mt-6 p-4 overflow-y-scroll max-h-[80vh]
      scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  </section>)
}
