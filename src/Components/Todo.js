import React from 'react'
import {connect} from 'react-redux'
import {AddTodo,WriteTodo} from '../actionCreators'

function Todo(props) {
    return (
        <div className='container mt-3'>
            <h1 className='text-center w-75'>What Todo ?</h1>
            <div className='input-group w-75'>
                    <input type="text" className="form-control w-25" value={props.input} onChange={(e)=>props.write(e.target.value)}  placeholder="Add todo" aria-label="todo" aria-describedby="basic-addon1" />
                    <button className='btn ml-2 btn-sm btn-primary' onClick={props.add}>{props.btnText}</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo:state.todo,
        input:state.userInput,
        btnText:state.btnText
    }
}

const mapDispatchToProps = dispatch => {
    console.log('dispatch called')
    return ({
        add: ()=>dispatch(AddTodo()),
        write:(value)=>dispatch(WriteTodo(value))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)


