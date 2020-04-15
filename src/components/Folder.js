import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import "./Folder.css"

export default class Folder extends Component {

  render() {
    return (
        <NavLink className= "link" to= {`/FolderLists/${this.props.id}`}><h3>{this.props.name}</h3></NavLink>
    )
  }
}


