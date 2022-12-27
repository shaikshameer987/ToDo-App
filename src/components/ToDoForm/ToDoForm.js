import React, {useState} from 'react'
import "./ToDoForm.css"
import { useToDoList } from "../../Context/ToDoContext"

function ToDoForm() {
    const [text, setText] = useState("")
    const {todoList, settodoList} = useToDoList()
    return (
        <div className='todo__form'>
            <form className='add__todo'>
                <input 
                    type="text" 
                    value= {text}
                    className='add__input'
                    onChange = {(e) => {
                        setText(e.target.value)
                    }}
                />
                <button 
                    className='add__button'
                    type="submit"
                    onClick = {(e) => {
                        e.preventDefault()
                        if(text.length === 0) return
                        settodoList([...todoList, text])
                        setText("")
                    }}  
                >ADD</button>
            </form>
        </div>
    )
}

export default ToDoForm
