import React from 'react';

import { TodoListProps } from '../../utils/interface';
import TodoItem from '../TodoItem';

function TodoList({ todos, removeTodo, editTodo }: TodoListProps ) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          task={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;