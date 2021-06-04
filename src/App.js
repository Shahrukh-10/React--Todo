import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import { Todos } from './myComponents/Todos';
import { Footer } from './myComponents/Footer';
import React, { useState } from 'react';
import { AddTodo } from './myComponents/AddTodo';

function App() {
  const onDelete = (todo) => {
    console.log('I am on Delete', todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState([]);
  let no;
  const addTodo = (title, desc) => {
    if (todos.length === 0) {
      let no = 0;
    }
    else {
      no = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: no,
      title: title,
      des: desc,
    }
    setTodos([...todos, mytodo]);
  }

  return (
    <>
      <Header title="My Todo List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
