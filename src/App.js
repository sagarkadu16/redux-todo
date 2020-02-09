import React from 'react'
import Todo from './Components/Todo'
import DoneTodo from './Components/DoneTodo'
import ShowCompleted from './Components/ShowCompleted'
import {connect} from 'react-redux' 
import {toggleShow} from './actionCreators'

function App(props) {
    return (
        <div className='container'>
            <Todo />
            <DoneTodo />
            <br />
            <button className='btn btn-sm btn-info m-3' onClick={props.toggle}>Show Completed</button>
            {props.istoggle && <ShowCompleted />}
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        istoggle:state.toggle
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        toggle:() => dispatch(toggleShow())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)