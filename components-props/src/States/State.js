import React, { Component } from 'react'

class State extends Component {
    state={
        name:'vijaya sri',
        age:22,
        job:'web developer'
    }
  render() {
    return (
      <>
        <h1>we are discussing about states..</h1>
        <h3> {this.state.age} {this.state.job} </h3>
      </>
    )
  }
}

export default State
