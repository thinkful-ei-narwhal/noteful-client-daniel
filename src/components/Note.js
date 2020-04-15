import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../UserContext';
import "./Note.css"

export default class Note extends Component {

  static contextType = UserContext;

  render() {

    console.log(this.props.id);

    const {onDelete} = this.context;

    const modified= new Date(this.props.modified);
    return (
      <div key={this.props.id} className= "note">
      <Link to= {`/Notes/${this.props.id}`}>
        <h2>{this.props.name}</h2>
      </Link>
      <p>modified on:{modified.getDate()}/{modified.getMonth()}/{modified.getFullYear()}</p>
        <button onClick={() => onDelete(this.props.id)}>Delete Note</button>
      </div> 
    )
  }
}

