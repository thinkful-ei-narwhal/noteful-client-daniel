import React, { Component } from 'react';
import FolderList from "./FolderList";
import NoteList from './NoteList';
import '../App.css';

export default class NotePage extends Component {
  render() {

    const shownFolder = this.props.folders.find(folder => folder.id === this.props.match.params.folderId);
 
    console.log(shownFolder);
    
    const folderNoteList = this.props.notes.filter(notes => notes.folderId === this.props.match.params.folderId);
    
     return (
       <main>
         <section className="folderList">
         <FolderList 
         folders={shownFolder}
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