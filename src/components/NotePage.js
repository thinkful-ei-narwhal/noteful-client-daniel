import React, { Component } from 'react';
import FolderList from "./FolderList";
import NoteList from './NoteList';
import '../App.css';

export default class NotePage extends Component {
  render() {

    

    const shownNote= this.props.notes.find(note => note.id === this.props.match.params.noteId);
    
    console.log(shownNote);
    
     return (
       <main>
         <section className="folderList">
         <FolderList 
         folders={this.props.folders}
         />
         </section>
         <section className="noteList ">
         <NoteList 
         notes={[shownNote]}
         />
         <p>{shownNote.content}</p>
         </section>
       </main>
     )
   }
 }