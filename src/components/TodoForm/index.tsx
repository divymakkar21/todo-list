import React, { useState } from 'react';
import { TodoFormProps } from '../../utils/interface';

function TodoForm({ addTask }: TodoFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex mb-5 flex-col'>
      <input
        type="text"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className='border rounded mb-3 p-2'
      />
      <textarea
        placeholder="Todo description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='border rounded mb-3 p-2'
      />
      <button className='btn bg-blue-600 py-2 rounded-lg text-white font-bold' type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;