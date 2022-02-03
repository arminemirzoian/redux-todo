import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo} from "../redux/todoSlice";


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const Button = styled.button`
  background: darkgreen;
  border-radius: 3px;
  border: 2px solid darkgreen;
  color: white;
  margin: 0 1em;
  padding: 0.8em 2em;
`


const AddTodoForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({
            title: value
        }),
        setValue(''));
    };

    return (

        <form onSubmit={onSubmit}>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}>

                <TextField id="outlined-basic" variant="outlined"
                           placeholder='Add todo...'
                           size="normal"
                           color='success'
                           value={value}
                           InputProps={{
                               endAdornment: <Button type='submit'>
                                   Add
                               </Button>
                           }}
                           onChange={(event) => setValue(event.target.value)}/>
            </Box>
        </form>
    );
};

export default AddTodoForm;