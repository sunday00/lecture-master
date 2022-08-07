import TodoItem from '@c/TodoItem.jsx';

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  const onSubmit = e => {
    e.preventDefault()

  }

  return (<div className="p-4">
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
      <div className="input-group w-full justify-center">
        <input type="text" placeholder="input here"
          className="input input-bordered input-md w-full max-w-md" />
        <button className="btn w-20">
          submit
        </button>
      </div>
    </form>
    <div className="my-4 w-full max-w-md mx-auto">
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </div>
  </div>)
}

export default Todos
