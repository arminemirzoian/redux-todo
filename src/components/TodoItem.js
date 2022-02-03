import {useDispatch} from "react-redux";
import {toggleComplete, deleteTodo} from "../redux/todoSlice";
import {useState} from "react";


import {Checkbox} from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem = ({id, title, completed}) => {
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

    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <ListItem>
            <ListItemButton role={undefined} onClick={handleToggle(title)} dense>
                <Checkbox
                    checked={completed}
                    onChange={handleCompleteClick}
                   color="success"
                    sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                />
                <ListItemText primary={title}/>
                <Button variant="outlined" color='success' startIcon={<DeleteIcon/>}
                        onClick={handleDeleteClick}>Delete</Button>
            </ListItemButton>
        </ListItem>
    );
};

export default TodoItem;

