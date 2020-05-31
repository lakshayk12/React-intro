import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello Lakshay!'
        }
        // Method 3: Official one, Binding in Constructor.
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({message: 'Goodbye Lakshay!'})
    // }

    // Method 4: Class Property as an Arrow function
    clickHandler = () => {
        this.setState({
            message: 'Goodbye Lakshay!'
        })
    }

    //'this' is undefined in an event handler, so we need to bind 'this'
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* Method 1: but every update to state will cause re-render, may cause performance impact */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* Method 2: Arrow function */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
