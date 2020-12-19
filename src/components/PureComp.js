import React, { PureComponent } from 'react'
import RegularComp from './RegularComp';

class PureComp extends PureComponent {
    render() {
        console.log("***************************Pure Comp Render*******************************")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp

//Shallow Comparison (SC) in JS (===)
//1. Primitive Types: string, boolean, numbers -> a (SC) b returns true iff a and b have same value and type.
//2. Complex Types: objects, arrays etc -> a (SC) b returns true iff a and b reference the exact same object.
//
//A Pure component implements shouldComponentUpdate with a shallow prop & state comparison.
// SC of prevState with currentState
// SC of prevProps with currentProps
// iff (SC) returns false the component re-renders.
//
//In our example, props is a string, prevProps name: "Lakshay" is no diff from current according to Primitive
//Types SC Theory. So, PureComp do not re-renders after every interval like RegularComp do.