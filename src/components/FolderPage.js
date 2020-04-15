import React, { Component } from 'react'
import FolderList from "./FolderList";
import NoteList from './NoteList';
import UserContext from '../UserContext';
import '../App.css';

export default class FolderPage extends Component {

  static contextType = UserContext;

  render() {

  const {notes} = this.context;

   const folderNoteList = notes.filter(notes => notes.folderId === this.props.match.params.folderId)

    return (
      <main>
        <section className="folderList">
        <FolderList />
        </section>
        <section className="noteList ">
        <NoteList 
        notes={folderNoteList}
        />
        <button>Add notes</button>
        </section>
      </main>
    )
  }
}