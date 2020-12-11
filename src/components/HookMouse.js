//How to run Effect only once aka How to mimic componentDidMount using useEffect & useState.
import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        console.log("dd")
        window.addEventListener('mousemove', logMousePosition)
    }, [])
    //add empty array to call the Effect only once. this works as componentDidMount.
    //we are telling React, hey this particular Effect doesn't depend on any props or state.
    //So, called only once.

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
