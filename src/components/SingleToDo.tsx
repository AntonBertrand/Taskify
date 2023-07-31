import React, { useEffect, useRef, useState } from 'react'
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

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setToDos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    );
  };

  const handleDelete = (id: number) => {
    setToDos(todos.filter((todo) => todo.id !== id))
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setToDos(todos.map((todo) => (
      todo.id === id? {...todo, todo:editTodo} : todo
    )));

    setEdit(false);
  }

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>

      { edit ? (
          <input value={editTodo} ref={inputRef} onChange={(e) => setEditTodo(e.target.value)} className='todos__single__text'/>
        ) : todo.isDone ? (
          <s className='todos__single__text'> {todo.todo}</s>
         ) : (
          <span className='todos__single__text'>{todo.todo}</span>
         )
      }

      <div>
        <span className='icon' onClick={ () =>
          {if (!edit && !todo.isDone) {
            setEdit(!edit)
          }}
        }>
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