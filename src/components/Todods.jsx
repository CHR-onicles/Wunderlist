import React from 'react'
import TodoItem from './Todoitem'
export default function Todods(prop) {
    
    return (
        <div className="container">
            <h1 className="mt-0 pt-2 mb-3 text-center">Todos List</h1>
            {prop.todos.length === 0 ? <h6 className="text-center notodo p-3 ">Sorry, You don't have any todos right now</h6> : prop.todos.map(
                (todo) => {return <TodoItem todo = {todo} key = {todo.sno} onDelete = {prop.onDelete}/>}
            )}
            {/* {editId===todo.sno ? (<input type="text" value = {inputValue} 
            onChange={(e)=>setInputValue(e.target.value)}/>) } */}
            
        </div>
    )
}

