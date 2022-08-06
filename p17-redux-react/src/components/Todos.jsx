import TodoItem from '@c/TodoItem.jsx';

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  const onSubmit = e => {
    e.preventDefault()

  }

  return (<div>
    <form onSubmit={onSubmit}>
      <input type='text' />
      <button type="submit">Submit</button>
    </form>
    <div>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </div>
  </div>)
}

export default Todos
