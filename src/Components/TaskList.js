import React, { useState } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

// Composant pour afficher la liste des tâches
const TaskList = ({ tasks }) => {
  const [filter, setFilter] = useState('all'); // État pour le filtre des tâches

  // Fonction pour afficher toutes les tâches
  const showAll = () => {
    setFilter('all');
  };

  // Fonction pour afficher les tâches terminées
  const showDone = () => {
    setFilter('done');
  };

  // Fonction pour afficher les tâches non terminées
  const showUndone = () => {
    setFilter('undone');
  };

  return (
    <div>
      <div className='btns'>
        <button onClick={showAll} className='btn1' >Toutes les tâches</button>
        <button onClick={showDone} className='btn2' >Tâches faites</button>
        <button onClick={showUndone} className='btn3' >Tâches non faites</button>
      </div>
      {tasks.map(task => (
        (filter === 'all' || (filter === 'done' && task.isDone) || (filter === 'undone' && !task.isDone)) && 
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

// Liaison du composant à l'état Redux
const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(TaskList);
