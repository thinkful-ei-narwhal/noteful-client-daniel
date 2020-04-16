import React, { Component } from 'react';
import UserContext from '../UserContext';

export default class AddNote extends Component {

  static contextType = UserContext;

  render() {

    const {
      noteName, 
      folderTo, 
      noteContent,
      setNoteName,
      setNoteContent,
      setFolderTo,
      validateNoteName,
      validateFolderTo,
      validateNoteContent,
     } = this.context;

    return (
      <div>
        <form name="note-form" id ="note-form">
        <label for="note-name">Name of Note:</label><br />
        {noteName.touched && <p className="error">{validateNoteName()}</p>}
        <input type="text" id="note-name" name="note-name" value={noteName.value} onChange={e => setNoteName(e.target.value)}/><br />
        <label for="for-folder">For Folder:</label><br />
        {folderTo.touched && <p className="error">{validateFolderTo()}</p>}
        <input type="text" id="for-folder" name="for-folder" value={folderTo.value} onChange={e => setFolderTo(e.target.value)}/><br />
        <label for="note-content">Content:</label><br />
        {noteContent.touched && <p className="error">{validateNoteContent()}</p>}
        <textarea id="note-content" name="note-content" rows="4" cols="50" value={noteContent.value} onChange={e => setNoteContent(e.target.value)}/><br />
        <button>Submit</button> {/* an onSubmit goes here!*/}
        </form>
        <button onClick={() => this.props.history.goBack()}><h2>BACK</h2></button>
      </div>
    )
  }
}

