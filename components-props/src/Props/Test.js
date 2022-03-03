import React, { Component } from 'react'
import Prop from './Prop'

class Test extends Component {
    state={
        name:'preethi',
        age:22,
        job:'Front end developer'
    }

  render() {
    return (
      <>
        <Prop name={this.state.name} age={this.state.age} />
      </>
    )
  }
}


export default Test