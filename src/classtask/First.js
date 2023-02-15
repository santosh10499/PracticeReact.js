import React, { Component } from 'react'

export default class First extends Component {
  render() {
    return (
      <div style={{marginLeft:"27%"}}>
        <h2>{this.props.email}</h2>
      </div>
    )
  }
}
