import React from 'react';

const Todo = props => {
    return (
        <div
            className={props.todo.completed ? 'todo-strikethrough' : 'todo'}
            onClick={e => {
                e.preventDefault();
                props.toggleTodo(props.todo.id)
            }}
        >
            <p className={props.todo.completed ? 'todo-completed' : 'todo-text'}>
                {props.todo.item}
            </p>
            <button 
                className={props.todo.important ? 'marked-important-btn' : 'important-btn'}
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    props.toggleImportant(props.todo.id);
                }}
            >
                Important!
            </button>
        </div>
    );
}

export default Todo;