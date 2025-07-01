import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList';

function App() {

  const [todos , setTodos] = useState([]);//main task list
  //To add in to do list
  function addTodo(text){
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos,newTodo]);
  }
  //to toggle todo list
  function toggleTodo(id){
    const updated = todos.map((todo)=> todo.id===id ? {...todo, completed:!todo.completed} : todo);
    setTodos(updated);
  }
  function deleteTodo(id){
    const updated = todos.filter((todo)=> todo.id !== id);
    setTodos(updated);
  }
  function editTodo(id, newText){
    const updated = todos.map((todo)=> todo.id === id ? {...todo, text: newText} : todo);
    setTodos(updated);
  }
  return(
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-center text-2xl mb-5 font-bold">My To-Do list</h1>
      <Header onAdd={addTodo} />
      <ToDoList todos={todos} toggle={toggleTodo} deleteTodo={deleteTodo} edit={editTodo}/>
    </div>
  );
}

export default App
