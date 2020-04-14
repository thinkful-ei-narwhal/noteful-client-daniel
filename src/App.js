import React, { Component } from 'react';
import FolderList from "./components/FolderList";
import NoteList from './components/NoteList';
import NotFound from './components/NotFound';
import {Route, Switch} from 'react-router-dom';
import STORE from './dummy-store';
import './App.css';



export default class App extends Component {

  state = {
    folders: STORE.folders,
    notes: STORE.notes,
  }

  render() {
    return (
      <div>
        <h1>Noteful</h1>
        <main>
        <section className="folderList">
        <FolderList 
        folders={this.state.folders}
        />
        </section>
        <section className="noteList ">
        <NoteList 
        notes={this.state.notes}
      />
      </section>
      </main>
    </div>
    )
  }
}


