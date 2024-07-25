import React, { useState } from "react";
import { TodoListItemProps } from "../../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
function TodoItem({ task, removeTodo, editTodo }: TodoListItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    editTodo(task.id, { title: editedTitle, description: editedDescription });
    setIsEditing(false);
  };

  return (
    <div className="border-2 flex flex-col rounded p-3 shadow">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border rounded mb-3 p-2"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            className="border rounded mb-3 p-2"
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <div>
            <button className='btn bg-blue-600 rounded text-white py-2 px-6' onClick={handleEdit}>Save</button>
            <button className='btn rounded border py-2 px-6 ml-2' onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
            </div>
            <div>
              <FontAwesomeIcon
                onClick={() => setIsEditing(true)}
                icon={faEdit}
                width={24}
                height={24}
                color="#2463EB"
              />
              <FontAwesomeIcon
                onClick={() => removeTodo(task.id)}
                icon={faTrash}
                width={24}
                height={24}
                color="#FF2E2E"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
