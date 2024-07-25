import React from 'react';
import { TodoFilterProps } from '../../utils/interface';

const TodoFilter = ({ filterPriority, setFilterPriority, showCompleted, setShowCompleted, sortTodos, isSorted }: TodoFilterProps) => {
  return (
    <div className="border-b pb-2 mb-4 flex items-center">
      <button
        className={`btn p-2 border px-3 text-sm rounded ${showCompleted ? 'bg-blue-500 text-white' : ''}`}
        onClick={() => setShowCompleted(!showCompleted)}
      >
         Completed
      </button>
      <select
        className='border rounded ml-2 text-sm p-2'
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        className={`btn p-2 border text-sm rounded ml-2 px-5 ${isSorted ? 'bg-blue-500 text-white' : 'bg-white'}`}
        onClick={sortTodos}
        
      >
        Sort
      </button>
    </div>
  );
};

export default TodoFilter;
