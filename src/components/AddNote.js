import React, { Component } from 'react'

export default class AddNote extends Component {
  render() {
    return (
      <div>
        <form name="note-form" id ="note-form">
        <label for="note-name">Name of Note:</label><br />
        <input type="text" id="note-name" name="note-name" /><br />
        <label for="for-folder">For Folder:</label><br />
        <input type="text" id="for-folder" name="for-folder" /><br />
        <label for="note-content">Content:</label><br />
        <textarea id="note-content" name="note-content" rows="4" cols="50"/><br />
        <button>Submit</button>
        </form>
        <button onClick={() => this.props.history.goBack()}><h2>BACK</h2></button>
      </div>
    )
  }
}

