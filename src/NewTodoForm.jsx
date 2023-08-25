import { useState } from "react"

export function NewTodoForm({ onSubmit }){

    const[newItem, setNewItem]= useState("")
     
    function handleSubmit(e){
        e.preventDefault()

        if(newItem === "") return
       
        onSubmit(newItem)
        //set the new ityem to an empty array so that each time you click the input refreshes 
        setNewItem("")
      
      }

    return (
    <form  onSubmit={handleSubmit} action="" className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New item</label>
      <input value={newItem} 
      onChange={e =>setNewItem(e.target.value)}
      type="text"  id="item"/>
      <button className="btn">Add</button>
    </div>
    
  
  </form>)
}