import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Lakshay'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'Lakshay' })
        }, 2000);
    }
    render() {
        console.log("***************************Parent Comp Render*******************************")
        return (
            <div>
                Parent Component
                {/* <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
