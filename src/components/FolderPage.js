import React, { Component } from 'react'
import FolderList from "./FolderList";
import NoteList from './NoteList';
import '../App.css';

export default class MainPage extends Component {
  render() {

    const folderNoteList = this.props.notes.filter(notes => notes.folderId === this.props.match.params.folderId)

    return (
      <main>
        <section className="folderList">
        <FolderList 
        folders={this.props.folders}
        />
        </section>
        <section className="noteList ">
        <NoteList 
        notes={folderNoteList}
        />
        </section>
      </main>
    )
  }
}