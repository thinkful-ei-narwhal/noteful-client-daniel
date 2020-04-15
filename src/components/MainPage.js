import React, { Component } from 'react'
import FolderList from "./FolderList";
import NoteList from './NoteList';
import UserContext from '../UserContext';
import '../App.css';

export default class MainPage extends Component {

  static contextType = UserContext;

  render() {
   
    const {notes} = this.context;
    return (
      <main>
        <section className="folderList">
        <FolderList/>
        </section>
        <section className="noteList ">
        <NoteList 
        history={this.props.history}
        notes={notes}/>
        <button>Add notes</button>
        </section>
      </main>
    )
  }
}

