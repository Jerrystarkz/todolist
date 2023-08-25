import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo}){
    return( <ul className="list">
    
    {todos.length === 0 && "No Todos"} 
    {todos.map(todo =>{
      // using  key as a unique key prop for each todo item
      return(
        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      )
    })}
    
  </ul>
  )
}