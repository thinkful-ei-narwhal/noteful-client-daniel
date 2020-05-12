import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

export default class NoteList extends Component {

  render() {

    const notesList = this.props.notes.map((note, i) => {

      return (<Note 
      key={i}
      id={note.id} 
      note_name={note.note_name} 
      modified={note.modified}
      folderid={note.folderid}
      content={note.content}
      history={this.props.history}/>
      )
    })

    return (
      <div className="notesList">
        {notesList}
      </div>
    )
  }
}

NoteList.propTypes = {
  notes: PropTypes.array,
  history: PropTypes.object
}
