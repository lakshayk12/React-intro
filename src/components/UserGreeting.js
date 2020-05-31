import React, { Component } from 'react'

//Conditional Rendering
class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    //gonna return Lakshay! if logged in, else Guest
    render() {
        //Method 1: General if-else: Note: if-else statements are of js, they don't work inside of JSX.
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <h1>Welcome Lakshay!</h1>
        //         </div>
        //     )
        // }
        // else{            
        //     return (
        //         <div>
        //             <h1>Welcome Guest!</h1>
        //         </div>
        //     )
        // }

        //Method 2: Element Variable
        // let message
        // if(this.state.isLoggedIn){
        //     message = <h1>Welcome Lakshay!</h1>
        // }
        // else{
        //     message = <h1>Welcome Guest!</h1>
        // }
        // return <div>{message}</div>

        //Method 3: Ternary operator, can be used inside JSX
        // return (
        //     this.state.isLoggedIn ? <h1>Welcome Lakshay!</h1> : <h1>Welcome Guest!</h1>
        // )

        //Method 4: Short-circuit operator approach (specific case of method 3) | When to render something OR nothing
        return this.state.isLoggedIn && <h1>Welcome Lakshay!</h1>
    }
}

export default UserGreeting
