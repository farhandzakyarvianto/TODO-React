import React, { useState } from 'react';
import {Button} from '@material-ui/core'
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dog for a walk', 'Take the rubbish out', 'testing']);
  const [input, setInput] = useState('');
  console.log(input);

  const addTodo = (event) => {
    //fungsi yang menghandle saat button di click
    event.preventDefault(); //mencegah refresh
    console.log('Im working');
    setTodos([...todos, input]);
    setInput(''); //set input kosong setelah klik button
  }

  return (
    <div className="App">
      <h1>Hello World </h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary" >Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
