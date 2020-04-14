import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "./Folder.css"

export default class Folder extends Component {
  render() {
    return (
      <button key={this.props.id} className="buttonFolder">
        <Link to= {`/FolderLists/${this.props.id}`}><h3>{this.props.name}</h3></Link>
      </button>
    )
  }
}


