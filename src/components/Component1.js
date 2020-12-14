import React, { useContext } from 'react'
import { CountContext } from '../App'

function Component1() {
    const countContext = useContext(CountContext)
    const { count, dispatch } = countContext
    return (
        <div>
            Component1
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
    )
}

export default Component1
