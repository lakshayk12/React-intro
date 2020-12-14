import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
            break
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
            break
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
            break
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
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
            <h1>Counter1 Count: {count.firstCounter}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>decrement5</button>

            <h1>Counter2 Count: {count.secondCounter}</h1>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>increment5</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>decrement5</button>

            <br />
            <br />
            <br />
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default Counter2
