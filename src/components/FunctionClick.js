//rfce snippit for functional component
import React from 'react'

function FunctionClick() {
    
    //event handler is a function and not a function call.
    function clickHandler(){
        console.log("Click Logged.")
    }

    return (
        <div>
            {/* <button onClick={clickHandler()}>Click</button> */} {/*if we use this line "Click logged" will be there already, even we haven't clicked.*/}
            <button onClick={clickHandler}>Click</button> {/*this is write thing, logged after click.*/}
        </div>
    )
}

export default FunctionClick
