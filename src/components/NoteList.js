import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

export default class NoteList extends Component {

  render() {

    const notesList = this.props.notes.map((note, i) => {

      return (<Note 
      key={i}
      id={note.id} 
      name={note.name} 
      modified={note.modified}
      folderID={note.folderID}
      content={note.content}
      history={this.props.history}/>
      )
    })

    return (
      <Fragment className="notesList">
        {notesList}
      </Fragment>
    )
  }
}

NoteList.propTypes = {
  notes: PropTypes.array,
  history: PropTypes.object
}
