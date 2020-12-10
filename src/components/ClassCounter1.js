import React, { Component } from 'react'

class ClassCounter1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ""
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        //conditionally updating the title when the appropriate variable changes.
        //else, title was updating as soon as i start writing in input field.
        if (prevState.count != this.state.count) {
            console.log("In componentDidUpdate");
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }}
                >
                </input>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>
                    Clicked {this.state.count} times
                </button>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default ClassCounter1
