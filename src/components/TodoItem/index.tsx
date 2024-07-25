import React, { useState } from "react";
import { IPriority, TodoListItemProps } from "../../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import TodoFormFields from "../TodoFormFields";
import TodoItemCard from "../TodoItemCard";

function TodoItem({ task, removeTodo, editTodo }: TodoListItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: task?.title,
    description: task?.description,
    priority: task?.priority,
    completed: task?.completed || false
  });

  const handleChange = (attr: string, value: string | IPriority) => {
    setEditedTodo((prevTodo) => ({
      ...prevTodo,
      [attr]: value,
    }));
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(task.id, editedTodo);
    setIsEditing(false);
  };

  const handleComplete = () => {
    editTodo(task.id, { ...task, completed: !task?.completed });
  }

  return (
    <div className="border-2 flex flex-col rounded shadow my-4">
      {isEditing ? (
        <TodoFormFields
          todo={editedTodo}
          handleChange={handleChange}
          handleSubmit={handleEdit}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <TodoItemCard
          todo={task}
          onComplete={handleComplete}
          onEdit={() => setIsEditing(true)}
          onRemove={() => removeTodo(task.id)}
        />
      )}
    </div>
  );
}

export default TodoItem;
