//Stateful Class Components
import React, {Component} from 'react'

class Welcome extends Component{
    render(){//render method which returns some HTML
        // return <h1>My Class Component</h1>

        //De-structuring props
        const {name, surname} = this.props
        // return <h1>Welcome {this.props.name} {this.props.surname}</h1> //props accessed via "this"
        return <h1>Welcome {name} {surname}</h1> //{props accessed via "this"}
                                                                        //using De-structured props
    }
}

export default Welcome