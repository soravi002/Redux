// Définition des types d'actions
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

// Action creator pour ajouter une tâche
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Math.random().toString(36).substring(7), // Génération d'un identifiant unique
    description,
    isDone: false // Par défaut, la tâche est non terminée
  }
});

// Action creator pour basculer l'état d'une tâche
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});
