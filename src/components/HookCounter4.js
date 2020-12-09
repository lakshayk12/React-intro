import React, { Component, useState } from 'react'
import HookCounter2 from './HookCounter2'

function HookCounter4() {
    //working with array of objects.
    const [items, setItems] = useState([])
    const addItem = () => {
        //make a copy using a spread op, append the new item and pass it
        //as an argument to the setItems fn.
        setItems([...items, {
            id: items.length,
            value: Math.random()
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number </button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookCounter4

// This is the end of useState hook:
// 1.  useState hook lets u add state to the functional Component.
// 2.  In classes, the state has to be an Object, but with useState hook, it can be an Array, number, boolean, string, object etc.
// 3.  useState hook returns an array with 2 Elements.
//     first value is the current value of the state & second is the state setter function.
// 4.  if the new state value depends on the previous state value, u can pass a function to the setter function (as in HookCounter2.js)
// 5.  When dealing with objects or array, always remember to spread ur state variable & then call the setter function.