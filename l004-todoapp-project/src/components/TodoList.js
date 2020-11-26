import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoItem from './TodoItem';
import '../resources/TodoList.scss';

const TodoList = (props, ref) => {
  const rewRenderer = useCallback(
    ({ index, key, style }) => {
      return (
        <TodoItem
          todo={props.todos[index]}
          key={key}
          onToggle={props.onToggle}
          onRemove={props.onRemove}
          style={style}
        />
      );
    },
    [props],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={props.todos.length}
      rowHeight={57}
      rowRenderer={rewRenderer}
      list={props.todos}
      style={{ outline: 'none' }}
      ref={ref}
      // scrollToIndex={2000}
    ></List>
  );
};

export default React.memo(React.forwardRef(TodoList));
