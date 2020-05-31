import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>Hi, i'm {person.name}, {person.age} years old with "{person.skill}" skill.</h1>
        </div>
    )
}

export default Person
