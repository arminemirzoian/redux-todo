import { createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: Math.random(), title: 'Study JavaScript', completed: false},
        {id: Math.random(), title: 'Study React', completed: false},
        {id: Math.random(), title: 'Go to yoga', completed: false}
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Math.random(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id )
            
        }
    },
})

export const { addTodo, toggleComplete, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
