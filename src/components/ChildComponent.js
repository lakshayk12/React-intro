import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* Passing Argument */}
            <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
