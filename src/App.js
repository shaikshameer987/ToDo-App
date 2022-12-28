import React from 'react'
import "./App.css"
import ToDoForm from  "../src/components/ToDoForm/ToDoForm"
import ToDoItem from './components/ToDoItem/ToDoItem'
import { useToDoList } from './Context/ToDoContext'

function App() {
    const {todoList} = useToDoList()
    
    return (
        <div className='App'>
            <header>
                <p className='heading'>ToDo List</p>
            </header>
            <ToDoForm />
            <div className='todo__list__items'>
            {
               todoList.map((item,index) => (
                    <div className='todo__item' key={index}>
                        <ToDoItem item = {item} parentIndex = {index}/>
                    </div>
               )) 
            }
            </div>
        </div>
    )
}

export default App
