import { useRecoilValue } from 'recoil';
import { todoListState } from '@/store/todo.store.jsx';
import TodoItemCreator from '@c/todoItemCreator.jsx';
import TodoItem from '@c/todoItem.jsx';

export default () => {
  const todoList = useRecoilValue(todoListState)

  return (<section>
    <TodoItemCreator />

    <div className="mt-6 overflow-scroll max-h-[80vh]">
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  </section>)
}
