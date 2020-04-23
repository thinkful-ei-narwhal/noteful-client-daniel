import React, { Component, Fragment } from 'react';
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
      <Fragment key={this.props.id} className= "note">
        <Link to= {`/Notes/${this.props.id}`}>
          <h2>{this.props.name}</h2>
        </Link>
        <p>modified on:{modified.getDate()}/{modified.getMonth()}/{modified.getFullYear()}</p>
          <button onClick={() => {
            this.props.history.push('/');
            onDelete(this.props.id)}
          }>Delete Note</button>
      </Fragment> 
    )
  }
}

Note.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  modified: PropTypes.string,
  folderID: PropTypes.string,
  content: PropTypes.string,
  history: PropTypes.object,
}
