import React, { Component } from 'react'

class LifeCycleChild extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "lakshay"
        }
        console.log("LifeCycleChild const.");
    }

    //has to return a new state or null
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleChild getDerivedStateFromProps.");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleChild componentDidMount.");
    }

    render() {
        console.log("LifeCycleChild render.")
        return (
            <div>
                <h1>LifeCycle Child H1 Tag</h1>
            </div>
        )
    }
}

export default LifeCycleChild
