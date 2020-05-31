import React, { Component } from 'react'

//snippet rce to create class component
class Counter extends Component {
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment(){
        //below line will update the count in state but not re-render in UI.
        // this.state.count += 1
        // console.log(this.state.count)

        //good way is to change it by setstate
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     }
        //     , () => {console.log(this.state.count)}
        // )
        // console.log(this.state.count) //if we use this then UI may show one incremented value than in console
                                        //because this line is called before the state is actually set.
                                        //to get rid of this and to call it just after increment pass second function as arrow function

        this.setState(prevState => ({count: prevState.count + 1})) //special: when we call update multiple times in one row
                                                                    //update based on PREVIOUS state.
                                                                    //props can also be used here as (prevState, props) => ...
    }   

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick = {() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
