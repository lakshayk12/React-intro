import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    let newState = state
    switch (action) {
        case 'increment':
            newState = state + 1
            break
        case 'decrement':
            newState = state - 1
            break
        case 'reset':
            newState = initialState
            break
        default:
            newState = state
            break
    }
    return newState
}

function Counter3() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Counter1 Count: {count}</h1>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>

            <h1>Counter2 Count: {count2}</h1>
            <button onClick={() => dispatch2('increment')}>increment</button>
            <button onClick={() => dispatch2('decrement')}>decrement</button>
            <button onClick={() => dispatch2('reset')}>reset</button>
        </div>
    )
}

export default Counter3
