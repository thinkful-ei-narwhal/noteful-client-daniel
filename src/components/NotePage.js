import React, { Component } from 'react';
import NoteList from './NoteList';
import UserContext from '../UserContext';
import '../App.css';

export default class NotePage extends Component {

  static contextType = UserContext;

  render() {

    const {folders, notes} = this.context;

    const shownNote = notes.find(note => note.id === Number(this.props.match.params.noteId));

    const shownFolder = folders.find(folder => folder.id === shownNote.folderid);
    
     return (
       <main>
         <section className="folderList">
         <button onClick={() => this.props.history.goBack()}><h2>BACK</h2></button>
         <h2>{shownFolder.name}</h2>
         </section>
         <section className="noteList">
         <NoteList 
         notes={[shownNote]}
         history={this.props.history}
         />
         <p>{shownNote.content}</p>
         </section>
       </main>
     )
   }
 }
 