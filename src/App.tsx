import React from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {

const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

  if (todo) {
    setTodos([...todos, {id: Date.now(), todo: todo, isDone: false} ])
    setTodo("");
  }

  console.log(todos)
};


  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setToDo={setTodo} handleAdd={handleAdd}/>
      <ToDoList todos={todos} setToDos={setTodos}/>
    </div>
  );
}

export default App;
