import React, { useState } from "react";
import { IPriority, TodoListItemProps } from "../../utils/interface";
import TodoFormFields from "../TodoFormFields";
import TodoItemCard from "../TodoItemCard";
import { motion } from "framer-motion";

function TodoItem({ task, removeTodo, editTodo }: TodoListItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: task?.title,
    description: task?.description,
    priority: task?.priority,
    completed: task?.completed || false,
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
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-2 flex flex-col rounded shadow my-4"
    >
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
    </motion.div>
  );
}

export default TodoItem;
