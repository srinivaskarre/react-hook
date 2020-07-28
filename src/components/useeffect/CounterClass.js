import React, { Component } from 'react'

export class CounterClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate(){
        document.title = `You clicked ${this.state.count} times`
    }
    
    render() {
        return (
            <div>
                <button onClick={()=> this.setState({count: this.state.count+1})}> Class Comp Click Me </button>
            </div>
        )
    }
}

export default CounterClass
