import React from 'react';
import {List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'
import './Todo.css';

function Todo(props) {
    return (
        <div>
            <List className="todo__list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.text} secondary="Dummy deadline"></ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
