import React from 'react'
import Hello from './Hello'


//Stateless Functional Components

// //Old JS style
// function Greet(){
//     return <h1>Hello Lakshay!</h1>
// }

//Arrow syntax of ES6
// export const Greet = () => <h1>Hello Lakshay!</h1> //name export
//you must be wondering React is not used anywhere, but it is used by JSX to call React.createElement
// const Greet = () => <h1>Hello Lakshay!</h1>

//props: making Greet dynamic
// const Greet = (props) => { // 1. normal method
const Greet = ({name, surname, children}) => { // 2. De-structuring props
    // console.log(props)
// return <h1>Hello {props.name} {props.surname}!</h1>
// const {name, surname, children} = props //Method 3 for Destructuring inside function body
return (
    <div>
        {/* <h1>Hello {props.name} {props.surname}!</h1> */}
        <h1>Hello {name} {surname}!</h1>
        {/* {props.children} */}
        {children}
    </div>
)//enclosed in one wrapper div, this is currently limitation of react, only one html element can be returned.
}

//export as any name, can be imported by other file with any other name too like import mycomponent from './components/Greet'
export default Greet 