// - useReducer is a hook used for state management.
// - alternative of useState.
// - useState is build using useReducer.
// - useReduce(reducer, initialState)
// - newState = reducer(currentState, action)
// - useReducer returns [newState, dispatch], dispatch is to specify the action.
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

function Counter1() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
    )
}

export default Counter1
