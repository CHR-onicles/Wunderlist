import React, { useState } from 'react'


export default function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            window.alert("Title or desc cannot be blank")
            
            // <div class="alert alert-success">
            //     <strong>Success!</strong> Indicates a successful or positive action.
            // </div>
        }
        else {
            props.addTodo(title, desc)
            setTitle("")
            setDesc("")
        }
    }


    return (
        <div class="main_cont">
            <div className="container mt-2  addtodoform" >
            <h1 className="addtotformh1 pt-2 ">Add a Todo</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder="Hey...what's your plan for today?" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder="Can you tell me in brief?" />
                </div>
                <button type="submit" className="btn btn-success btn-sm mb-3">Add Todo</button>
            </form>
        </div>
        </div>
    )
}
