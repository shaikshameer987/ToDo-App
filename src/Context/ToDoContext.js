import {createContext, useContext, useState} from "react"

const todoContext = createContext()

export const ToDoProvider = ({children}) => {
    const [todoList, settodoList] = useState([])

    return  <todoContext.Provider value={{todoList, settodoList}}>
            {children}
            </todoContext.Provider>
}

export const useToDoList = () => useContext(todoContext)