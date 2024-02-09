import { ADD_TASK, TOGGLE_TASK } from './actions';

// Initialisation de l'état avec des tâches de base
const initialState = {
  tasks: [
    { id: '1', description: 'Terminer Noobflix', isDone: false },
    { id: '2', description: 'Continuer ZekideLuxe', isDone: false },
    { id: '3', description: 'Ignorer les deux premières tasks', isDone: true }
  ]
};

// Reducer pour gérer les actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Ajout d'une nouvelle tâche à la liste des tâches
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case TOGGLE_TASK:
      // Basculement de l'état d'une tâche spécifique
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        )
      };
    default:
      return state;
  }
};

export default reducer;
