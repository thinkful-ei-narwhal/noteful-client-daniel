import React, { Component } from 'react'
import "./Note.css"

export default class Note extends Component {
  render() {
    return (
      <div key={this.props.id} className= "note">
        <h2>{this.props.name}</h2>
        <p>{this.props.modified}</p><button>Delete Note</button>
        <p>{this.props.content}</p> {/* we will work on this later*/}
      </div>
    )
  }
}

