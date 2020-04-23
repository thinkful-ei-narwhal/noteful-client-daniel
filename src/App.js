import React, { Component, Fragment } from 'react';
import NotFound from './components/NotFound';
import MainPage from './components/MainPage';
import FolderPage from './components/FolderPage';
import NotePage from './components/NotePage';
import AddFolder from './components/AddFolder';
import AddNote from './components/AddNote';
import ErrorPage from './components/ErrorPage';
import {Route, Switch, Link} from 'react-router-dom';
import UserContext from './UserContext';



export default class App extends Component {

  state = {
    folders: [],
    notes: [],
    folderName: {value: '', touched: false},
    noteName: {value: '', touched: false},
    noteContent: {value: '', touched: false},
    folderTo: {value: '', touched: false},
    error: null,
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
        this.setState({error: err});
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
        this.setState({error: err});
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
    } else if (/<|>|[/]/.test(folderName)) {
      //checking to see if someone tried to put in script tags
      return 'How DARE you try to put HTML/script tags in my form!!!';
    }
  }

  validateNoteName = () => {
    let noteName= this.state.noteName.value;
    noteName = noteName.toString().trim();
    if (noteName.length < 3) {
        // Check if it's at least 3 characters long
        return 'Note name must be at least 3 characters long';
    } else if (/<|>|[/]/.test(noteName)) {
        //checking to see if someone tried to put in script tags
        return 'How DARE you try to put HTML/script tags in my form!!!';
      }
  }

  validateNoteContent = () => {
    let noteContent= this.state.noteContent.value;
    noteContent = noteContent.toString().trim();
    if (noteContent.length < 3) {
        // Check if it's at least 3 characters long
        return 'Note content must be at least 3 characters long';
    } else if (/<|>|[/]/.test(noteContent)) {
        //checking to see if someone tried to put in script tags
        return 'How DARE you try to put HTML/script tags in my form!!!';
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

  handlePostNote = () => {
    const name = this.state.noteName.value;
    const content = this.state.noteContent.value;
    const folderName = this.state.folderTo.value;
    const folderId = this.state.folders.find(folder => folder.name === folderName).id;
    const date = new Date();
    const modified = date.toString();
    const post = JSON.stringify({name, content, modified, folderId});

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: post,
    };
    fetch(`http://localhost:9090/notes/`, options)
      .then(res => res.json())
      .then((note) => this.setState({notes: [...this.state.notes, note]}));
      
  }

  handlePostFolder = () => {
    let name = this.state.folderName.value;
    let newname = JSON.stringify({name});
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: newname,
    };
    fetch(`http://localhost:9090/folders/`, options)
      .then(res => res.json())
      .then((folder) => this.setState({folders: [...this.state.folders, folder]}));
      
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
        onPostNote: this.handlePostNote,
        onPostFolder: this.handlePostFolder,
        onDelete: this.handleDeleteItem,
      }}>
      <Fragment>
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
    </Fragment>
    </UserContext.Provider>
    )
  }
}


