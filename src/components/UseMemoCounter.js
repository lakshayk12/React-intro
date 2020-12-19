import React, { useState, useMemo } from 'react'

function UseMemoCounter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // const isEven = (n) => {
    //     let i = 0
    //     while (i < 2000000000) i++
    //     return count1 % 2 === 0
    // }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return count1 % 2 === 0
    }, [count1])
    //Now, only clicking button1 will cause computational delay
    //not button2.

    return (
        <div>
            <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
            {/* <span>{isEven(count1) ? " Even" : "Odd"}</span> */}
            <span>{isEven ? " Even" : "Odd"}</span>
            <br />
            <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
        </div>
    )
}

export default UseMemoCounter
