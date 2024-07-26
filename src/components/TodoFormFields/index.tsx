import React from 'react';
import { IPriority, TodoFormFieldsProps } from '../../utils/interface';

const TodoFormFields = ({ todo, handleChange, handleSubmit, isEditing, setIsEditing }: TodoFormFieldsProps) => {
  return (
    <form onSubmit={handleSubmit} className='flex mb-5 p-5 flex-col'>
      <input
        type="text"
        placeholder="Todo title"
        value={todo?.title}
        onChange={(e) => handleChange('title', e.target.value as IPriority)}
        required
        className='border rounded mb-3 p-2'
      />
      <textarea
        placeholder="Todo description (optional)"
        value={todo?.description}
        onChange={(e) => handleChange('description', e.target.value as IPriority)}
        className='border rounded mb-3 p-2'
      />
      <select
        value={todo?.priority}
        className='border rounded mb-3 p-2'
        onChange={(e) => handleChange('priority', e.target.value as IPriority)}
      >
        <option value={IPriority.LOW}>Low</option>
        <option value={IPriority.MEDIUM}>Medium</option>
        <option value={IPriority.HIGH}>High</option>
      </select>
      {isEditing ? (
        <div>
          <button className='btn bg-blue-600 rounded text-white py-2 px-6' type="submit">Save</button>
          {setIsEditing && <button className='btn rounded border py-2 px-6 ml-2' onClick={() => setIsEditing(false)}>Cancel</button>}
        </div>
      ) : (
        <button className='btn bg-blue-600 py-2 rounded-lg text-white font-bold' type="submit">Add Todo</button>
      )}
    </form>
  );
};

export default TodoFormFields;
