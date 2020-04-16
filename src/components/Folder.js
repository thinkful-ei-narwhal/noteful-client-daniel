import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Folder.css"

export default class Folder extends Component {

  render() {
    return (
        <NavLink className= "link" to= {`/FolderLists/${this.props.id}`}><h3>{this.props.name}</h3></NavLink>
    )
  }
}

Folder.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}
