import React, { useState } from 'react';

const Form = props => {

    const [todo, setTodo] = useState('');
    
    const handleChanges = e => {
        setTodo([e.target.name] = e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo('');
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add task here"
                    name="todo"
                    value={todo}
                    onChange={handleChanges}
                    autoComplete="off"
                />
                <button className="modal-btn">
                    Add
                </button>
            </form>
            <button
                className="modal-btn cancel-btn"
                onClick={props.closeModal}
            >
                Close
            </button>
        </div>
    );
}


export default Form;