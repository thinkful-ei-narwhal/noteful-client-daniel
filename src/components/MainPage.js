import React, { Component } from 'react'
import FolderList from "./FolderList";
import NoteList from './NoteList';
import '../App.css';

export default class MainPage extends Component {
  render() {
    return (
      <main>
        <section className="folderList">
        <FolderList 
        folders={this.props.folders}
        />
        </section>
        <section className="noteList ">
        <NoteList 
        notes={this.props.notes}
        />
        <button>Add notes</button>
        </section>
      </main>
    )
  }
}

