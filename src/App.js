import React, { Component } from 'react';
import FolderList from "./components/FolderList";
import NoteList from './components/NoteList';
import STORE from './dummy-store';



export default class App extends Component {

  state = {
    folders: STORE.folders,
    notes: STORE.notes,
  }

  render() {
    return (
      <div>
        <h1>Noteful</h1>
        <FolderList 
        folders={this.state.folders}
        />
        <NoteList 
        notes={this.state.notes}
        />
      </div>
    )
  }
}


