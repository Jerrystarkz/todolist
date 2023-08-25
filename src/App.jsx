import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

function App() {
  // destructuring using javascript concept

 // keeping the stored information  so that everytime you refresh the page the informatoion
 // from loacl storage is gotten
  const[todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  // storing our information in local storage using a different hook
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos(()=>{
      return  [
        ...todos, {id: crypto.randomUUID(),
          title, completed: false },
      ]

    })
  }

 
// function to toggle my todos and check if the current id is the one i want to toggle
  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

// function to delete todo list
  function  deleteTodo (id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !==id)
    })
  }

  return (
  <>
  <NewTodoForm  onSubmit={ addTodo }/>

<h1 className="header"> Todo list</h1>
  <TodoList todos={ todos } toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  
  )
 
}

export default App
