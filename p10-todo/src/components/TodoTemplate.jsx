import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Todo List</div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default TodoTemplate;
