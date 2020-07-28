import React, { Component } from 'react'

export class ClassMouse extends Component {

    constructor(){
        super()

        this.state = {
            x: 0,
            y: 0
        }
    }

    eventListener = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount(){
        console.log("adding event listener")
        window.addEventListener('mousemove',this.eventListener )
    }
    render() {
        return (
            <div>
                Class Comp X- {this.state.x} , Y = {this.state.y}
            </div>
        )
    }
}

export default ClassMouse
