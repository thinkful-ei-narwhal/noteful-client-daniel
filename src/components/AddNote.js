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
     } = this.context;

    return (
      <div>
        <form name="note-form" id ="note-form">
        <label for="note-name">Name of Note:</label><br />
        <input type="text" id="note-name" name="note-name" value={noteName.value} onChange={e => setNoteName(e.target.value)}/><br />
        <label for="for-folder">For Folder:</label><br />
        <input type="text" id="for-folder" name="for-folder" value={folderTo.value} onChange={e => setFolderTo(e.target.value)}/><br />
        <label for="note-content">Content:</label><br />
        <textarea id="note-content" name="note-content" rows="4" cols="50" value={noteContent.value} onChange={e => setNoteContent(e.target.value)}/><br />
        <button>Submit</button> {/* an onSubmit goes here!*/}
        </form>
        <button onClick={() => this.props.history.goBack()}><h2>BACK</h2></button>
      </div>
    )
  }
}

