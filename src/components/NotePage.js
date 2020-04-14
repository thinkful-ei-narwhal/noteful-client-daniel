import React, { Component } from 'react';
import BackButton from "./BackButton";
import NoteList from './NoteList';
import '../App.css';

export default class NotePage extends Component {
  render() {

    

    const shownNote = this.props.notes.find(note => note.id === this.props.match.params.noteId);

    const shownFolder = this.props.folders.find(folder => folder.id === shownNote.folderId);
    
    console.log(shownNote);
    
     return (
       <main>
         <section className="folderList">
         <BackButton props={this.props}/>
         <h2>{shownFolder.name}</h2>
         </section>
         <section className="noteList">
         <NoteList 
         notes={[shownNote]}
         />
         <p>{shownNote.content}</p>
         </section>
       </main>
     )
   }
 }