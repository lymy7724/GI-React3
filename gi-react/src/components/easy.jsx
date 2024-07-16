import React, { Component } from 'react'

export default class easy extends Component {
    constructor (props){
      super(props);
      this.state = {
        count: 0
      }
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
    }

    increment(){
      this.setState(previousValue => ({
        count: previousValue.count + 1,
      }))
    }


    decrement(){
      this.setState(previousValue => ({
        count: previousValue.count - 1,
      }))
    }


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
