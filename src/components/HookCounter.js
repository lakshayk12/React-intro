import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count} </button>
        </div>
    )
}

export default HookCounter

//1. Only call hooks at the top level of the functional component. Dont call inside loops, conditions & nested functions.
//2. Only call hooks from react functions. call them from react functional components, not from regular js components.