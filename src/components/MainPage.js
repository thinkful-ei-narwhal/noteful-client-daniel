import React, { Component } from 'react'
import FolderList from "./FolderList";
import NoteList from './NoteList';
import '../App.css';

export default class MainPage extends Component {


  render() {
   
    return (
      <main>
        <section className="folderList">
        <FolderList/>
        </section>
        <section className="noteList ">
        <NoteList/>
        <button>Add notes</button>
        </section>
      </main>
    )
  }
}

