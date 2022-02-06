import {useDispatch} from 'react-redux';
import {addTodo} from "../redux/todoSlice";
import {useRef} from "react";

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

    const inputRef = useRef();
    const dispatch = useDispatch();


    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({
            title: inputRef.current.value
        }));
        inputRef.current.value = '';
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
                           ref={inputRef}
                           InputProps={{
                               endAdornment: <Button type='submit'>
                                   Add
                               </Button>
                           }}
                />
            </Box>
        </form>
    );
};

export default AddTodoForm;