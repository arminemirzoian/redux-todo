import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux";


import Image from "./background.jpg";
import Paper from '@mui/material/Paper';


const styles = {
    paperContainer: {
        minHeight: '100%',
        minWidth: '100%',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'fixed'
    }
};
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Paper style={styles.paperContainer}>
            <App />
            </Paper>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);