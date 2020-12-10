// const { Component } = require("react")

// -   The Effect hook lets to perform side effects in functional Component.
// -   It is close replacement for 3 different fn(s) componentDidMount, componentDidUpdate & componentWillUnmount.
// -   that Means, three life cycle methods can be handled by the useEffect.
import React, { useEffect, useState } from 'react'

function HookCounter1() {
    const [count, setCount] = useState(0);

    // CONDITIONALLY run Effects:
    // -   useEffect hook runs after every single render.
    // -   it may cause our application to be slow.
    // -   We need a way to conditionally run an Effect from the functional component
    const [name, setName] = useState("");

    // its a function, it takes a fn as an argument & executes it after every render.
    useEffect(() => {
        console.log("In useEffect");
        document.title = `Clicked ${count} times`;
    }, [count])
    //conditionally run an Effect, put a second parameter to the useEffect(), that is an array of values
    //that specifies props or state to watch for.
    //only if those props or state changes the Effect will be executed.

    //Advantage of useEffect: cool.., we dont need to use 3 different fn(s) to achieve this unlike see ClassCounter1.js

    return (
        <div>
            <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            >
            </input>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Clicked {count} times
            </button>
            <h1>{name}</h1>
        </div>
    )
}

export default HookCounter1
