import React from 'react'

export default function TodoItem({todo , onDelete,editId, editTodo,handleEditChange,
    inputValue,setInputValue}) {
    return (
        <>
        <div className="todoitem  p-3 mb-4">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick= {()=>{onDelete(todo)}} >Delete</button>
            {/* <button className="btn but btn-warning btn-sm" onClick= {()=>{handleEditChange(todo.sno,todo.title, todo.desc)}} >Edit</button> */}
        </div>
        </>
    )
}
