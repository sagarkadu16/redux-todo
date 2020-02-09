import {Add,Write,Completed,toggle,Delete,Edit} from './actionCreators'
import { act } from 'react-dom/test-utils'


const initialObject = {
    todo : [],
    userInput : '',
    toggle:false,
    isEdit:false,
    editingId:0,
    btnText:'Add'
}

let count = 0
let updatedTodo = []
const reducer = (state = initialObject,action) =>{
    switch(action.type){
        case Add:
            count++
            if(state.isEdit){
                console.log('inside isEdit')
                console.log(state.userInput)
                updatedTodo = state.todo
                for(let i = 0; i < updatedTodo.length;i++){
                    if(updatedTodo[i].id === state.editingId){
                        updatedTodo[i]['value'] = state.userInput
                        console.log(updatedTodo[i])
                    }
                }
                return {
                    ...state,
                    todo:[...updatedTodo],
                    isEdit:!state.isEdit,
                    btnText:'Add',
                    userInput:''
                }
            }else{
                let newItem = {
                    id:Math.random()+count,
                    value: state.userInput,
                    isDone:false
                }
                console.log(newItem)
                updatedTodo = [...state.todo,newItem]
                return {
                    ...state,
                    todo:[...updatedTodo],
                    userInput:''
                }
            }
        case Write:
            return {
                ...state,
                userInput:action.value
            }
        case Completed:
            updatedTodo = state.todo
            for(let i = 0; i < updatedTodo.length;i++){
                if(updatedTodo[i].id === action.id){
                    updatedTodo[i]['isDone'] = !updatedTodo[i].isDone
                    console.log(updatedTodo[i])
                }
            }
            return {
                ...state,
                todo:[...updatedTodo],
                userInput:''
            }
        case toggle:
            console.log('entered in tooggle')
            return {
                ...state,
                toggle:!state.toggle
            }
        case Delete:
            console.log('coming in delete')
            updatedTodo = state.todo.filter(item => item.id !== action.id)
            return {
                ...state,
                todo:[...updatedTodo]
            }
        case Edit:
            let editClickedTodo = state.todo.find(item => item.id === action.id)
            return {
                ...state,
                isEdit:!state.isEdit,
                userInput:editClickedTodo.value,
                btnText:'Edit',
                editingId:action.id,
            }
        default:
            return state
    }
}

export default reducer