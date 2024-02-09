import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTask } from '../actions';

// Composant pour représenter une tâche individuelle
const Task = ({ task, dispatch }) => {
  const [editing, setEditing] = useState(false); // État pour le mode édition
  const [description, setDescription] = useState(task.description); // État pour stocker la description modifiée

  // Gestion du basculement de l'état de la tâche
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  // Activation du mode édition
  const handleEdit = () => {
    setEditing(true);
  };

  // Mise à jour de la description modifiée
  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  // Enregistrement de la tâche modifiée
  const handleSave = () => {
    dispatch({
      type: 'EDIT_TASK', // Action pour modifier la tâche
      payload: {
        id: task.id,
        description: description
      }
    });
    setEditing(false); // Désactivation du mode édition
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {editing ? (
        <input type="text" value={description} onChange={handleChange} onBlur={handleSave} autoFocus />
      ) : (
        <span onClick={handleEdit} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          {task.description}
        </span>
      )}
    </div>
  );
};

export default connect()(Task);
