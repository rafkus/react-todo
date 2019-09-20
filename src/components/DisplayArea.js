import React from 'react'

const DisplayArea = (props) => {
    let todo = <p>select todo to show full description</p>
    
    if(props.todo) {
        todo = <React.Fragment>
            <h2>{props.todo.title}</h2>
            <p>{props.todo.description}</p>
        </React.Fragment>

    }

    return (
        <div>
            {todo}
        </div>
    )
}

export default DisplayArea
