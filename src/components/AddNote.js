import React, { Component } from 'react';
import UserContext from '../UserContext';
import "./AddNote.css"

export default class AddNote extends Component {

  static contextType = UserContext;

  render() {

    const {
      folders,
      noteName, 
      folderTo, 
      noteContent,
      setNoteName,
      setNoteContent,
      setFolderTo,
      validateNoteName,
      validateNoteContent,
      onPostNote,
     } = this.context;

     const options = folders.map(folder => {

        return (<option value={folder.name}>{folder.name}</option>)
     })

     console.log(options);

    return (
      <div className="add-note">
        <form name="note-form" id ="note-form">
          <label htmlFor="note-name">Name of Note:</label><br />
          {noteName.touched && <p className="error">{validateNoteName()}</p>}
          <input type="text" id="note-name" name="note-name" value={noteName.value} onChange={e => setNoteName(e.target.value)}/><br />
          <label htmlFor="for-folder">For Folder:</label><br />
          <select name="for-folder" id="for-folder" value={folderTo.value} onChange={e => setFolderTo(e.target.value)}> 
       			{options}
					</select> 
          <label htmlFor="note-content">Content:</label><br />
          {noteContent.touched && <p className="error">{validateNoteContent()}</p>}
          <textarea id="note-content" name="note-content" value={noteContent.value} onChange={e => setNoteContent(e.target.value)}/><br />
          <button className="submit-form"
            disabled={
            validateNoteName() ||
            validateNoteContent()
            }
            onClick={() => {
            this.props.history.push('/');
            onPostNote()}}>Submit</button>
        </form>
        <button onClick={() => this.props.history.goBack()}><h2>BACK</h2></button>
      </div>
    )
  }
}

