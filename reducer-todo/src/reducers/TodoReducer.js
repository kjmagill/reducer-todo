export const initialState = {
    todos: [
        {
            item: 'Eat',
            completed: false,
            important: false,
            id: 1579634750
        },
        {
            item: 'Code',
            completed: false,
            important: false,
            id: 1579635200
        },
        {
            item: 'Sleep',
            completed: false,
            important: false,
            id: 1579636000
        }
    ]
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const TOGGLE_IMPORTANT = 'TOGGLE_IMPORTANT';


export const TodoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                important: false,
                id: Date.now()
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(action.payload === todo.id){
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return !todo.completed;
                })
            };
        case 'TOGGLE_IMPORTANT':
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        if(action.payload === todo.id){
                            return {
                                ...todo,
                                important: !todo.important
                            };
                        } else {
                            return todo;
                        }
                    })
                };
        default:
            return state;
    }
}