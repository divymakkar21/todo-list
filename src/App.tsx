import React, { useEffect, useState } from "react";
import "./App.css";
import { ITodo, ITodoItem } from "./utils/interface";
import TaskForm from "./components/TodoForm";
import TaskList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import useTodoFilter from "./hooks/useTodoFilter";
import { priorityToNumber } from "./utils/constants";

function App() {
  const savedTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState<ITodo[]>(() => {
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const {
    filterPriority,
    setFilterPriority,
    showCompleted,
    setShowCompleted,
    filteredTodos,
  } = useTodoFilter(todos);

  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task: ITodoItem) => {
    setTodos([...todos, { ...task, id: Date.now(), completed: false }]);
    setIsSorted(false);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setIsSorted(false);
  };

  const editTodo = (id: number, updatedTask: ITodoItem) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTask } : todo))
    );
    setIsSorted(false);
  };

  const sortTodos = () => {
    if (isSorted) {
      const sortedByDate = [...todos].sort((a, b) => a.id - b.id);
      setTodos(sortedByDate);
      setIsSorted(false);
      return;
    }
  
    const sortedByPriority = [...todos].sort(
      (a, b) => priorityToNumber(b.priority) - priorityToNumber(a.priority)
    );
    
    setTodos(sortedByPriority);
    setIsSorted(true);
  };

  return (
    <div className="App max-w-lg mx-auto p-5">
      <h1 className="text-center text-2xl font-bold mb-3">Todo List</h1>
      <TaskForm addTask={addTodo} />
      <TodoFilter
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
        sortTodos={sortTodos}
        isSorted={isSorted}
      />
      <TaskList
        todos={filteredTodos}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
