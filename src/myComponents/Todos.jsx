import React from 'react'
import { TodoItem } from './TodoItem'


export const Todos = (props) => {
    return (
        <div className="container">
            <h2 className='my-5'>Todo List</h2>
            {props.todos.length === 0 ? <h4 className="text-center">No Todos to display.</h4> : props.todos.map((todo) => {
                return (
                    <>
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr />
                    </>)
            }
            )}
            <br />
        </div>
    )
}
