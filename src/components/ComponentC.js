//Context: they provided a way to pass data through component tree w/o having to pass props down
//manually @each level.
//Solves a big problem: in class component we have to pass props from parent to the deepest child component
//through its ancestors.
import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
    return (
        <div>
            <ComponentE />
        </div>
    )
}

export default ComponentC
