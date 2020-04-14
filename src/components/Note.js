import React, { Component } from 'react'

export class Note extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.modified}</p><button>Delete Note</button>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Note
