import React, { useState } from 'react'

function HookCounter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1); //this wont work, it will only increment by 1. use below two methods based on prevous Count.

            // setCount((prevCount) => { return prevCount + 1 });
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            Count: {count}
            {/* <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button> */}
            {/* all above methods are very unsafe to use. Cant use use for incrementBy5*/}

            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={incrementBy5}>IncrementBy5</button>
        </div>
    )
}

export default HookCounter2
