import React, {useRef, useState, useEffect} from 'react'
import "./ToDoItem.css"
import { useToDoList } from '../../Context/ToDoContext'

function ToDoItem({item,parentIndex}) {
    const editInputRef = useRef()
    const [editMode, setEditMode] = useState(false)
    const {todoList, settodoList} = useToDoList()

    useEffect(() => {
        if(editMode) editInputRef.current.focus()
    })
    return (
        <>
            <div className='text__container'>
                {
                    editMode 
                    ?
                    <input 
                        type="text" 
                        value={item} 
                        className="edit__input" 
                        ref={editInputRef}
                        onChange={(e) => {
                            todoList[parentIndex] = e.target.value
                            settodoList([...todoList])
                        }}
                    />
                    :
                    <p className='font'>{item}</p>
                } 
            </div>
            <div className='buttons__container' style={{alignItems: editMode ? "center" : "flex-start"}}>
                <button 
                    className='button'
                    onClick={() => {
                        setEditMode(!editMode)
                    }}
                >
                    {
                        editMode 
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000080" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                        </svg>
                        :           
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#DAA520" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    }
                </button>
                <button 
                    className='button'
                    onClick={() => {
                        let updatedList = todoList.filter((item,index) => index !== parentIndex)
                        settodoList(updatedList)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#8B0000" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default ToDoItem
