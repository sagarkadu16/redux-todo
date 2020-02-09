import React from 'react'
import {connect} from 'react-redux'
import {CompletedTodo,DeleteTodo,EditTodo} from '../actionCreators'

function DoneTodo(props) {
    return (
        <div className='container m-3'>
            <ol>
                {props.todo.map(item =>
                    <div className='d-flex' key={item.id}>
                        <button className='mx-2 btn btn-sm bg-white p-0' onClick={()=>props.delete(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
                        <button className='mx-2 btn btn-sm bg-white p-0' onClick={()=>props.edit(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
                        <input type='checkbox' onClick={()=>props.done(item.id)}/>     
                        <li className='mx-4'>
                             {item.value}
                             {item.isDone && <span className="badge badge-success ml-2">Done</span>}
                         </li>
                     </div>
                    )}
            </ol>    
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo:state.todo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        done:(id)=>dispatch(CompletedTodo(id)),
        delete:(id)=>dispatch(DeleteTodo(id)),
        edit:(id)=>dispatch(EditTodo(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DoneTodo)