import React, { useState, useEffect } from 'react';
import {Button, Input, FormControl, InputLabel} from '@material-ui/core'
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the upload we need to listen to the database and fetch new todos as they get added/remove
  useEffect(() => {
    ////this code here fires when the app.js loads
    db
    .collection('todos')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().text})))
    })
  }, []);

  const addTodo = (event) => {
    //fungsi yang menghandle saat button di click
    event.preventDefault(); //mencegah refresh
    //
    db.collection('todos').add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput(''); //set input kosong setelah klik button
  }

  return (
    <div className="App">
      <h1>Hello World </h1>

      <form>
      <FormControl>
        <InputLabel>write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary" >Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          // <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
