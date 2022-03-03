import React, { Component } from 'react'

class Prop extends Component {
  render() {
    return (
      <>
            <div> {this.props.name} {this.props.age} </div>
      </>
    )
  }
}

export default Prop