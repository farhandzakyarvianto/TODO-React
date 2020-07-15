import React from 'react'

function Todo(props) {
    return (
        <div>
            <li key={props.text}>{props.text}</li>
        </div>
    )
}

export default Todo
