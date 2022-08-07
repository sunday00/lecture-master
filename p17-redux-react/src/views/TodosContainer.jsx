import { connect } from 'react-redux'
import { change_input, insert, toggle, remove } from '@s/modules/todos'
import Todos from '@c/Todos.jsx'

const TodosContainer = ({input, todos, change_input, insert, toggle, remove}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={change_input}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    >
    </Todos>
  )
}

export default connect(({ todos }) => ({
  input: todos.input,
  todos: todos.todos,
}), {
  change_input,
  insert,
  toggle,
  remove,
})(TodosContainer)
