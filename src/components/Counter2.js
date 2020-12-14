import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value }
            break
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value }
            break
        case 'reset':
            return initialState
            break
        default:
            return state
            break
    }
}

function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count: {count.firstCounter}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>decrement5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default Counter2
