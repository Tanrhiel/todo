import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  //status stuff
  const [ inputText, setInputText ] = useState("")
  const [ todos, setTodos ] = useState([])
  const [ status, setStatus ] = useState('all')
  const [ filterTodos, setFilterTodos ] = useState([])
  
  //functions
  const filterHandler = () =>{
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true))
      break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
        setFilterTodos(todos)
      break;
    }
  }


  //use effect
  useEffect(() => {
    filterHandler();
   }, [todos, status])

  return (
    <div className="App">
      <header className="App-header">
        <h1>My todo list</h1>
      </header>
      <Form 
        todos = {todos} 
        setTodos = {setTodos} 
        inputText = {inputText} 
        setInputText = {setInputText}
        status = {status}
        setStatus = {setStatus}
      />
      <TodoList 
        todos = {todos} 
        setTodos = {setTodos} 
        filterTodos = {filterTodos}
      />
    </div>
  );
}

export default App;
