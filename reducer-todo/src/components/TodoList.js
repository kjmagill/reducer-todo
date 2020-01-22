import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    let sortedTodos = props.todos.sort((a, b) => {
        return b.important - a.important;
    })
    let completedSortedTodos = sortedTodos.sort((a, b) => {
        return a.completed - b.completed;
    })

    return (
        <div className="todo-list">
            {completedSortedTodos.map(todo => {
                return <Todo 
                    todo={todo} 
                    key={todo.id} 
                    toggleTodo={props.toggleTodo}
                    toggleImportant={props.toggleImportant} 
                />
            })}
        </div>
    );
}

export default TodoList;