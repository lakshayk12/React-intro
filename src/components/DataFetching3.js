import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post: {},
    err: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                err: ''
            }
        case 'FETCH_ERR':
            return {
                loading: false,
                post: {},
                err: 'Oops!'
            }
        default:
            return state
    }
}

function DataFetching3() {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_ERR' })
            })
    }, [])

    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.err ? state.err : null}
        </div>
    )
}

export default DataFetching3

// WHEN TO USE useState & useReducer:
// see: useStateVSuseReducer.png in /public/useStateVSuseReducer.png
