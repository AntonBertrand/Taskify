import React from 'react'
import './inputField.css'
import { useRef } from 'react';

interface Props {
    todo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setToDo, handleAdd}: Props) => {
 
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
    }}>
        <input type="input" value={todo} ref={inputRef} onChange={(e) => setToDo(e.target.value)} placeholder='Enter a task' className='input__box'/>
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField