import {connect} from 'react-redux'


const Add = 'Add'
const Write = 'write'
const Completed = 'completed'
const toggle = 'toggle'
const Delete = 'delete'
const Edit = 'edit'


const AddTodo = () =>{
    return {
        type:Add
    }
}

const WriteTodo = (value) =>{
    return {
        type:Write,
        value
    }
}

const CompletedTodo = (id) =>{
    return {
        type:Completed,
        id
    }
}

const toggleShow = () =>{
    return {
        type:toggle
    }
}

const DeleteTodo = (id) =>{
    return {
        type:Delete,
        id
    }
}

const EditTodo = (id) =>{
    return {
        type:Edit,
        id
    }
}

export {Add,AddTodo,Write,WriteTodo,CompletedTodo,Completed,toggle,toggleShow,Delete,DeleteTodo,EditTodo,Edit}