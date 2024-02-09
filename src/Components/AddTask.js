import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

// Composant pour ajouter une nouvelle tâche
const AddTask = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState('');

  // Gestion de la saisie utilisateur
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Soumission du formulaire pour ajouter une tâche
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Vérification que la saisie n'est pas vide
    dispatch(addTask(inputValue)); // Dispatch de l'action pour ajouter la tâche
    setInputValue(''); // Réinitialisation de la valeur de l'entrée
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default connect()(AddTask);
