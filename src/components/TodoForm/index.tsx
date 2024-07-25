import React, { useState } from 'react';
import { IPriority, TodoFormProps } from '../../utils/interface';
import TodoFormFields from '../TodoFormFields';


function TodoForm({ addTask }: TodoFormProps) {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    priority: IPriority.LOW
  });

  const handleChange = (attr: string, value: string | IPriority) => {
    setTodo(prevTodo => ({
      ...prevTodo,
      [attr]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.title.trim()) return;
    addTask(todo);
    setTodo({
      title: '',
      description: '',
      priority: IPriority.LOW
    });
  };

  return <TodoFormFields todo={todo} handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default TodoForm;
