import React, { useState, useReducer } from 'react';
import './App.css';

// Components
import TodoList from './components/TodoList';
import Form from './components/Form';

// Reducers
import { TodoReducer, initialState, ADD_TODO, TOGGLE_TODO, TOGGLE_IMPORTANT, CLEAR_COMPLETED } from './reducers/TodoReducer';


function App() {

  const [state, dispatch] = useReducer(TodoReducer, initialState)
  const [showModal, setShowModal] = useState(false);
  
  const addTodo = todo => {
    dispatch({ type: ADD_TODO, payload: todo })
  }

  const toggleTodo = id => {
    dispatch({ type: TOGGLE_TODO, payload: id })
  }

  const toggleImportant = id => {
    dispatch({ type: TOGGLE_IMPORTANT, payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED })
  }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App-container">
      <div className="header">
        <h2>Todo List</h2>
        <div className="btn-container">
          <div
            className="btn"
            onClick={()=> setShowModal(!showModal)}
          >
            Add Task
          </div>
          <div
            className="btn"
            onClick={e => {
              e.preventDefault();
              clearCompleted();
            }}
          >
            Clear Completed
          </div>
        </div>
      </div>
      <div className="todo-container">
          <div>
            { showModal ? <Form addTodo={addTodo} closeModal={closeModal} /> : null}
          </div>
          <TodoList 
            todos={state.todos}
            toggleTodo={toggleTodo}
            toggleImportant={toggleImportant}
          />
      </div>
    </div>
  );
}

export default App;