import React from 'react';
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import CompletedItems from "./components/CompletedItems";
import {useSelector} from "react-redux";

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';


const App = () => {
    const todos = useSelector((state) => state.todos);
    return (
        <Box
            margin='0 auto '
            marginTop='100px'
            backgroundColor='white'
            width='25%'
            padding='20px'
        >
            <Box>
                <Typography variant="h2" component="h2" align={"center"} color={'darkgray'}
                            style={{fontWeight: "bold"}}>Tasks to do</Typography>
                <Box m={4} p={3} color={"black"} style={{fontWeight: "bold"}}>
                    <AddTodoForm/>
                    {todos.map((todo) => (
                        <TodoList key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>))}
                    <CompletedItems/>
                </Box>
            </Box>
        </Box>
    );
};

export default App;