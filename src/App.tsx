import React from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';

const App: React.FC = () => {

const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

  if (todo) {
    setTodos([...todos, {id: Date.now(), todo: todo, isDone: false} ])
  }

}

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setToDo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
