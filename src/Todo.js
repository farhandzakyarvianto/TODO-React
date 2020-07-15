import React, { useState } from 'react';
import {List, ListItem, ListItemText, ListItemAvatar, Modal, Button} from '@material-ui/core'
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const updateTodo = () => {
        //update the todo

        db
        .collection('todos')
        .doc(props.text.id)
        .set({
            text: input
        }, {merge: true})
        setOpen(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <input placeholder={props.text.todo} value={input} onChange={event => setInput(event.target.value)}/>
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.text.todo} secondary="Dummy deadline"></ListItemText>
                </ListItem> 
                <button onClick={e => setOpen(true)}>Edit</button>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.text.id).delete()} />
            </List>
        </div>
    )
}

export default Todo
