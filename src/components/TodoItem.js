import {Checkbox} from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem = ({id, title, completed, handleCompleteClick, handleDeleteClick}) => {

    return (
        <ListItem key={id}>
            <ListItemButton role={undefined} dense>
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

