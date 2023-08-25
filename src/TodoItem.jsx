export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }){
    return(
        <li>
        <label htmlFor="">
          <input type="checkbox" checked={completed}
          onChange={e=> toggleTodo(id, e.target.checked)} id=""/>{title}
          <button onClick={()=> deleteTodo(id)} className="btn btn-danger">Delete</button>
        </label>
      </li>
    )
}