import React from 'react';
import './toDoList.css';
import { Todo } from '../model';
import SingleToDo from './SingleToDo';

interface Props {
    todos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({todos, setToDos}: Props) => {
  return (
    <div className='todos'>
        {todos.map(todo => (
            <SingleToDo todo={todo} todos={todos} setToDos={setToDos}/>
        ))}
    </div>
  )
}

export default ToDoList