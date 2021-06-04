import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title,setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('Title or Desc cant be empty');
        }else{    
            props.addTodo(title,desc);
        }
    }

    return (
        <div className="container">
        <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Descreption</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Descreption" />
                </div>
                <br />
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
