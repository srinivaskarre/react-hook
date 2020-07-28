import React, { Component } from 'react'

export class CounterClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }

    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('Updating document title')
            document.title = `You clicked ${this.state.count} times`
        }
    }
    
    render() {
        return (
            <div>
                <input type='text' onChange={(e)=> this.setState({name: e.target.value})} />
                <button onClick={()=> this.setState({count: this.state.count+1})}> Class Comp Click Me </button>
            </div>
        )
    }
}

export default CounterClass
