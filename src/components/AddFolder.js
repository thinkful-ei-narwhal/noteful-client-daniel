import React, { Component } from 'react';
import UserContext from '../UserContext';

export default class AddFolder extends Component {

  static contextType = UserContext;

  render() {

    const {
      folderName,
      setFolderName
     } = this.context;


    return (
      <div>
        <form name="folder-form" id ="folder-form">
        <label for="folder-name">Name of New Folder:</label><br />
        <input type="text" id="folder-name" name="folder-name" value={folderName.value} onChange={e => setFolderName(e.target.value)}/><br />
        <button>Submit</button> {/* an onSubmit goes here!*/}
        </form>
        <button onClick={() => this.props.history.goBack()}><h2>BACK</h2></button>
      </div>
    )
  }
}
