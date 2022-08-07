import TodoItem from '@c/TodoItem.jsx';

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  const onSubmit = e => {
    e.preventDefault()

    onInsert(input)
    onChangeInput('')
  }

  const onChange = e => onChangeInput(e.target.value)

  return (<div className="p-4">
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
      <div className="input-group w-full justify-center">
        <input type="text" placeholder="input here" onChange={onChange} value={input}
          className="input input-bordered input-md w-full max-w-md" />
        <button className="btn w-20">
          submit
        </button>
      </div>
    </form>
    <div className="my-4 w-full max-w-md mx-auto">
      {todos.map((todo) => (<TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />))}
    </div>
  </div>)
}

export default Todos
