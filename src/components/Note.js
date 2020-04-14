import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Note.css"

export default class Note extends Component {
  render() {
    return (
      <div key={this.props.id} className= "note">
      <Link to= {`/Notes/${this.props.id}`}>
        <h2>{this.props.name}</h2>
        </Link>
        <p>{this.props.modified}</p><button>Delete Note</button>
        {/* <p>{this.props.content}</p> we will work on this later*/}
      </div>

      
    )
  }
}

