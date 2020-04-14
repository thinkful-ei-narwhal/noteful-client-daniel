import React, { Component } from 'react'

export default class Folder extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}


