import {useSelector} from "react-redux";

import Typography from "@mui/material/Typography";

const CompletedItems = () => {
    const todos = useSelector((state) =>
        state.todos.filter((todo) => todo.completed === true)
    );

    return <Typography variant="h5" component="h2" align='center' color={"darkgreen"}
                       style={{fontWeight: "600", marginTop: '20px'}}>
        Number of completed items: {todos.length}
    </Typography>
}


export default CompletedItems