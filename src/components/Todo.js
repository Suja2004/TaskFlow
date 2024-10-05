import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteTodo(task.id);
    }, 300); // Match this timeout with the CSS transition duration
  };

  return (
    <div className={`Todo ${isDeleting ? 'slide-out' : ''}`}>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </div>
    </div>
  );
};
