import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: 0, title: 'Study JavaScript', completed: false},
        {id: 1, title: 'Study React', completed: false},
        {id: 2, title: 'Go to yoga', completed: false}
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },

        toggleComplete: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id)
            todo.completed = !todo.completed;
        },

        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        }
    },
})

export const {addTodo, toggleComplete, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
