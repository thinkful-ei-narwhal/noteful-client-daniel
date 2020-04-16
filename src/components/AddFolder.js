import React, { Component } from 'react'

export default class AddFolder extends Component {
  render() {
    return (
      <div>
        <form name="folder-form" id ="folder-form">
        <label for="folder-name">Name of New Folder:</label><br />
        <input type="text" id="folder-name" name="folder-name" /><br />
        <button>Submit</button>
        </form>
        <button onClick={() => this.props.history.goBack()}><h2>BACK</h2></button>
      </div>
    )
  }
}
