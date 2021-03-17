import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import firebase from 'firebase';

import Todo from './components/Todo';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // fetching data from database
  useEffect(() => {
    // this code fires once app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // eslint-disable-next-line no-lone-blocks
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    // this will fire off once we click button
    event.preventDefault()

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>    
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input 
            value={input} 
            onChange={event => setInput(event.target.value)} 
          />
        </FormControl>

        <Button  type="submit" onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>

    </div>
  );
}

export default App;
