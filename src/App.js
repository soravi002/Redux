import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import './CSS/App.css';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
