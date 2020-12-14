import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching2() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [err, setErr] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                setLoading(false)
                setPost(res.data)
                setErr('')
            })
            .catch((err) => {
                setLoading(false)
                setPost({})
                setErr('Oops!')
            })
    }, [])
    return (
        <div>
            {loading ? 'Loading...' : post.title}
            {err ? err : null}
        </div>
    )
}

export default DataFetching2
