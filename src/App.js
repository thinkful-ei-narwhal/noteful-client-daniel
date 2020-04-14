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
        <Switch>
        <Route exact path='/folder/:folder-id' render={() => <FolderList 
          folders={this.state.folders} />} />
        <Route exact path='/note/:note-id' render={() => <NoteList 
          notes={this.state.notes} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}


