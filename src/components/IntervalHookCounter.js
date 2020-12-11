import React, { useEffect, useState } from 'react'
import IntervalClassCounter from './IntervalClassCounter';

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default IntervalHookCounter

//TIP: We can use multiple useEffect to get our code more organized.
