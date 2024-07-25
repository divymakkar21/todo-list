import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { EditTodoProps, ITodo, ITodoItem } from './utils/interface';
import TaskForm from './components/TodoForm';
import TaskList from './components/TodoList';

function App() {
  const savedTodos = localStorage.getItem('todos');
  const [todos, setTodos] = useState<ITodo[]>(() => {
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task: ITodoItem) => {
    setTodos([...todos, { ...task, id: Date.now() }]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, updatedTask: ITodoItem) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, ...updatedTask } : todo));
  };

  return (
    <div className="App max-w-lg mx-auto p-5">
      <h1 className='text-center text-2xl font-bold mb-3'>Todo List</h1>
      <TaskForm addTask={addTodo} />
      <TaskList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
