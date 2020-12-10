import React, { Component } from 'react'

class ClassCounter1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>
                    Clicked {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounter1
