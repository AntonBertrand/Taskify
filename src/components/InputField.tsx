import React from 'react'
import './inputField.css'

interface Props {
    todo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setToDo, handleAdd}: Props) => {
  return (
    <form className='input'>
        <input type="input" value={todo} onChange={(e) => setToDo(e.target.value)} placeholder='Enter a task' className='input__box'/>
        <button className='input__submit' type='submit' onSubmit={handleAdd}>Go</button>
    </form>
  )
}

export default InputField