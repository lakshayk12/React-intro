//used to describe state, better than props
import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome'
        }
    }

    changeMessage(){
        this.setState({
                message: 'Thank you for Subscribing :)'
        })
    }

    render(){
    // const {message} = this.State //De-structuring state
    return (
        <div>
            <h1>{this.state.message} {this.props.name}!</h1>
            <button onClick = {() => this.changeMessage()}>Subscribe</button>
        </div>
    )
    }
}

export default Message