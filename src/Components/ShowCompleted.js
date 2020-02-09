import React from 'react'
import {connect} from 'react-redux'

function ShowCompleted(props) {
    console.log('show complete',props.todo)
    return (
        <div className='container m-3'>
            <ol>
                {props.todo.filter(item => item.isDone).map(item =>
                    <div key={item.id}>
                        <li className='mx-4'>
                             {item.value}
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


export default connect(mapStateToProps)(ShowCompleted)