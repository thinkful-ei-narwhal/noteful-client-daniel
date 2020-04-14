import React, { Component } from 'react'
import "./Folder.css"

export default class Folder extends Component {
  render() {
    return (
      <button key={this.props.id} className="buttonFolder">
        <h3>{this.props.name}</h3>
      </button>
    )
  }
}


