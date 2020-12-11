//How to useEffect with cleanup aka How to mimic componentWillUnmount using useEffect & useState.
import React, { useState, useEffect } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={e => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer
