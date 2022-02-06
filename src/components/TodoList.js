import React from 'react';
import TodoItem from './TodoItem';
import {useDispatch} from 'react-redux';

import List from '@mui/material/List';
import {deleteTodo, toggleComplete} from "../redux/todoSlice";

const TodoList = ({id, title, completed}) => {


    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(
            toggleComplete({id: id, completed: !completed})
        )
    }

    const handleDeleteClick = () => {
        dispatch(
            deleteTodo({id: id})
        )
    }
    return (
        <List sx={{width: '100%', maxWidth: 360}}>
            <TodoItem key={id} id={id} title={title} completed={completed} handleCompleteClick={handleCompleteClick}
                      handleDeleteClick={handleDeleteClick}/>
        </List>
    );
};

export default TodoList;