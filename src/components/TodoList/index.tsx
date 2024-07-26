import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { TodoListProps } from '../../utils/interface';
import TodoItem from '../TodoItem';

function TodoList({ todos, removeTodo, editTodo }: TodoListProps ) {

  if(todos?.length === 0) {
    return <div className='text-center text-base mt-24 font-semibold'>No todos found</div>
  }

  return (
    <AnimatePresence>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          task={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </AnimatePresence>
  );
}

export default TodoList;