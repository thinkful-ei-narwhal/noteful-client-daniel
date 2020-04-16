import React, { Component } from 'react';
import NotFound from './components/NotFound';
import MainPage from './components/MainPage';
import FolderPage from './components/FolderPage';
import NotePage from './components/NotePage';
import AddFolder from './components/AddFolder';
import AddNote from './components/AddNote';
import ErrorPage from './components/ErrorPage';
import {Route, Switch, Link, withRouter} from 'react-router-dom';
import UserContext from './UserContext';



export default class App extends Component {

  state = {
    folders: [],
    notes: [],
    folderName: {value: '', touched: false},
    noteName: {value: '', touched: false},
    noteContent: {value: '', touched: false},
    folderTo: {value: '', touched: false},
  }

  componentDidMount() {
    let error;
    fetch('http://localhost:9090/folders')
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }

        return data})
      .then(folders => this.setState({folders: folders}))
      .catch((err) => {
        console.log(err);
      });

    fetch('http://localhost:9090/notes')
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }

        return data})
      .then(notes => this.setState({notes: notes}))
      .catch((err) => {
        console.log(err);
      });

  }

  // State Input Update functions

  setFolderName = folderName => {
    this.setState({folderName: {value: folderName, touched: true}});
  };

  setNoteName = noteName => {
    this.setState({noteName: {value: noteName, touched: true}});
  };

  setNoteContent = noteContent => {
    this.setState({noteContent: {value: noteContent, touched: true}});
  };

  setFolderTo = folderTo => {
    this.setState({folderTo: {value: folderTo, touched: true}});
  };

  // Validate State functions

  validateFolderName = () => {
    let folderName= this.state.folderName.value;
    folderName = folderName.toString().trim();
    if (folderName.length < 3) {
      // Check if it's at least 3 characters long
      return 'Note name must be at least 3 characters long';
    }
  }

  validateNoteName = () => {
    let noteName= this.state.noteName.value;
    noteName = noteName.toString().trim();
    if (noteName.length < 3) {
        // Check if it's at least 3 characters long
        return 'Note name must be at least 3 characters long';
    }
  }

  validateNoteContent = () => {
    let noteContent= this.state.noteContent.value;
    noteContent = noteContent.toString().trim();
    if (noteContent.length < 3) {
        // Check if it's at least 3 characters long
        return 'Note content must be at least 3 characters long';
    }
  }

  validateFolderTo = () => {
    let folderTo= this.state.folderTo.value;
    folderTo = folderTo.toString().trim();
    if (!this.state.folders.includes({name: folderTo})) {
      return `
      Folder name must match an existing folder!
      Current list of folders: ${this.state.folders.forEach(folder => `${folder.name}`)}
      `;
    }
  }


  // Event Handlers/API calls

  handleDeleteItem = (id) => {

    const options = {
      method: 'DELETE',
    };
    fetch(`http://localhost:9090/notes/${id}`, options)
      .then(res => res.json())
      .then(() => this.setState({notes: this.state.notes.filter(note => note.id !== id)}));
  }


  render() { // so we made context.  When we use component={component}, that automatically creates render props.  they are still props.

    return (
      <UserContext.Provider value = {{
        folders: this.state.folders,
        notes: this.state.notes,
        folderName: this.state.folderName,
        noteName: this.state.noteName,
        noteContent: this.state.noteContent,
        folderTo: this.state.folderTo,
        setFolderName: this.setFolderName,
        setNoteName: this.setNoteName,
        setNoteContent: this.setNoteContent,
        setFolderTo: this.setFolderTo,
        validateFolderName: this.validateFolderName,
        validateNoteName: this.validateNoteName,
        validateNoteContent: this.validateNoteContent,
        validateFolderTo: this.validateFolderTo,
        onDelete: this.handleDeleteItem,
      }}>
      <div>
        <Link to="/"><h1>Noteful</h1></Link>
        <ErrorPage>
        <Switch>
          <Route exact path='/' 
            component={MainPage} 
            />
          <Route exact path='/FolderLists/:folderId' 
            component={FolderPage}
            />
          <Route exact path='/Notes/:noteId' 
            component={NotePage}
            />
          <Route exact path='/NoteForm' 
            component={AddNote}
            />
          <Route exact path='/FolderForm' 
            component={AddFolder}
            />
          <Route component={NotFound} />
        </Switch>
        </ErrorPage>
    </div>
    </UserContext.Provider>
    )
  }
}


