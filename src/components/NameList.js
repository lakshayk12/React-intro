import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Lakshay', 'Rishi']
    // // return (
    // //     <div>
    // //         {
    // //             names.map(name => <h1>{name}</h1>)
    // //         }
    // //     </div>
    // // )

    // //Concise one
    // const nameList = names.map(name => <h1>{name}</h1>)
    // return <div>{nameList}</div>

    //Complicated object list rendering
    const persons = [
        {
            id: 1,
            name: "Lakshay",
            age: 23,
            skill: "Gamer"
        },
        {
            id: 2,
            name: "Kumar",
            age: 23,
            skill: "Gamer"
        }
    ]
    // const personList = persons.map(person => 
    //         <h1>Hi, i'm {person.name}, {person.age} years old with "{person.skill}" skill.</h1>
    // )

    //Clean method
    const personList = persons.map(person => <Person person={person}/>)

    return <div>{personList}</div>
}

export default NameList
