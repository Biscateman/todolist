import './App.css'

import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  const [todo,setTodo] = useState('')

  const [todoList,settodoList] = useState([])
  return (
    <div className="App">
        <h1>Todo List</h1>
        <Form todo={todo} setTodo={setTodo} todoList={todoList} settodoList={settodoList}/>
        <br></br>
        <TodoList settodoList={settodoList}  todoList={todoList} />
    </div>
  );
}

export default App;
