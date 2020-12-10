// const { Component } = require("react")

// -   The Effect hook lets to perform side effects in functional Component.
// -   It is close replacement for componentDidMount, componentDidUpdate & componentWillUnmount.
// -   that Means, three life cycle methods can be handled by the useEffect.
import React, { useEffect, useState } from 'react'

function HookCounter1() {
    const [count, setCount] = useState(0);

    // its a function, it takes a fn as an argument & executes it after every render.
    useEffect(() => {
        document.title = `Clicked ${count} times`;
    })
    //cool right?, we dont need to use three different fn(s) to achieve this unlike see ClassCounter1.js

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Clicked {count} times
            </button>
        </div>
    )
}

export default HookCounter1
