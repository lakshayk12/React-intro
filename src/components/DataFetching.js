import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClicked, setIdFromButtonClicked] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClicked])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button onClick={() => { setIdFromButtonClicked(id) }}>Fetch Post</button>
            <h1>{post.title}</h1>
            {/* <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
