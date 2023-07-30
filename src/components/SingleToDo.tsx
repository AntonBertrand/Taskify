import React from 'react'
import { Todo } from '../model'
import {AiFillEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './singleToDo.css'
import ToDoList from './ToDoList'

type Props = {
    todo: Todo,
    todos: Todo[],
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleToDo = ({todo, todos, setToDos}: Props) => {

  const handleDone = (id: number) => {
    setToDos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    );
  };

  const handleDelete = (id: number) => {
    setToDos(todos.filter((todo) => todo.id !== id))
  };

  return (
    <form className='todos__single'>

    {todo.isDone ? (
        <s className='todos__single__text'>{todo.todo}</s>
      ) : (
        <span className='todos__single__text'>{todo.todo}</span>
      )}

      <div>
        <span className='icon'>
          <AiFillEdit/>
        </span>

        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <AiFillDelete/>
        </span>

        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdDone/>
        </span>
      </div>

    </form>
  )
}

export default SingleToDo

// AiFillEdit
// AiFillDelete