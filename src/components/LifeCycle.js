import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild';

class LifeCycle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "lakshay"
        }
        console.log("LifeCycle const.");
    }

    //has to return a new state or null. since it is a static method, "this" is NA.
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle getDerivedStateFromProps.");
        return null;
    }

    shouldComponentUpdate() {
        console.log("LifeCycle shouldComponentUpdate.")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycle getSnapshotBeforeUpdate.");
        return null;
    }

    componentDidUpdate() {
        console.log("LifeCycle componentDidUpdate.")
    }

    componentDidMount() {
        console.log("LifeCycle componentDidMount.");
    }

    componentWillUnmount() {
        console.log("LifeCycle componentWillUnmount.");
    }

    changeState = () => {
        this.setState({
            name: "Lakshay 2.0"
        })
    }

    render() {
        console.log("LifeCycle render.")
        return (
            <div>
                <h1>LifeCycle Parent H1 Tag</h1>
                <button onClick={this.changeState}>Click</button>
                {/* <LifeCycleChild /> */}
            </div>
        )
    }
}

export default LifeCycle
