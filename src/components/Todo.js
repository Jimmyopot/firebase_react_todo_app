import React, { useState } from 'react';

import db from '../firebase';
import './Todo.css'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { List, Button, Modal, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTodo = () => {
        db.collection('react-todo-app-7641e-default-rtdb').doc(props.todo.id).set({
            todo: input
        }, { merge: true });
        
        setOpen(false)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <h1>Modal here</h1>
                    <input 
                        placeholder={props.todo.todo}
                        value={input} 
                        onChange={event => setInput(event.target.value)}
                    />
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>
            <List className="todo_list">
                <ListItem>
                    <ListItemAvatar>         
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Efficiency is key" />
                </ListItem>
                <button onClick={e => handleOpen(true)}>Edit</button>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</DeleteForeverIcon>
            </List>
        </>
    )
}

export default Todo
