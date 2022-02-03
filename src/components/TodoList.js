import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

import List from '@mui/material/List';

const TodoList = () => {

    const todos = useSelector((state) => state.todos);

    return (
            <List sx={{ width: '100%', maxWidth: 360 }}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}  />
            ))}
        </List>
    );
};

export default TodoList;