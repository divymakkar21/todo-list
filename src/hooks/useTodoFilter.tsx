import { useState, useEffect } from 'react';
import { ITodo } from '../utils/interface';


const useTodoFilter = (todos: ITodo[]) => {
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [showCompleted, setShowCompleted] = useState<boolean>(false);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todos);

  useEffect(() => {
    let filtered = [...todos];
    if (filterPriority !== 'all') {
      filtered = filtered.filter(todo => todo.priority === filterPriority);
    }
    if (showCompleted) {
      filtered = filtered.filter(todo => todo.completed);
    }
    setFilteredTodos(filtered);
  }, [todos, filterPriority, showCompleted]);

  return {
    filterPriority,
    setFilterPriority,
    showCompleted,
    setShowCompleted,
    filteredTodos,
  };
};

export default useTodoFilter;
