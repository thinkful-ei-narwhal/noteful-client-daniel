import React, { Component } from 'react';
import UserContext from '../UserContext';
import "./AddFolder.css";

export default class AddFolder extends Component {

  static contextType = UserContext;

  render() {

    const {
      folderName,
      setFolderName,
      validateFolderName,
      onPostFolder,
     } = this.context;


    return (
      <div className="add-folder">
        <form name="folder-form" id ="folder-form">
          <label htmlFor="folder-name">Name of New Folder:</label><br />
          {folderName.touched && <p className="error">{validateFolderName()}</p>}
          <input 
          type="text" 
          id="folder-name" 
          name="folder-name"
          aria-label="folder-name"
          aria-required="true"
          value={folderName.value} onChange={e => setFolderName(e.target.value)}/><br />
          <button className="submit-form"
          disabled={
            validateFolderName()
            }
            onClick={() => {
            this.props.history.push('/');
            onPostFolder()}}>Submit</button> 
          </form>
        <button onClick={() => this.props.history.goBack()}><h2>BACK</h2></button>
      </div>
    )
  }
}
