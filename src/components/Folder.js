import React, { Component } from 'react'
import "./Folder.css"

export default class Folder extends Component {
  render() {
    return (
      <button key={this.props.id} className="buttonFolder">
        <a href= {`/FolderLists/${this.props.id}`}><h3>{this.props.name}</h3></a>
      </button>
    )
  }
}


