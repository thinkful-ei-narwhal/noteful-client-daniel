import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';
import "./Note.css"

export default class Note extends Component {

  static contextType = UserContext;

  render() {

    const {onDelete} = this.context;

    const modified= new Date(this.props.modified);
    return (
      <div key={this.props.id} className= "note">
        <Link to= {`/Notes/${this.props.id}`}>
          <h2>{this.props.note_name}</h2>
        </Link>
        <p>modified on:{modified.getDate()}/{modified.getMonth()}/{modified.getFullYear()}</p>
          <button onClick={() => {
            onDelete(this.props.id)
            this.props.history.push('/');
            }
          }>Delete Note</button>
      </div> 
    )
  }
}

Note.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  modified: PropTypes.string,
  folderID: PropTypes.string,
  content: PropTypes.string,
  history: PropTypes.object,
}
