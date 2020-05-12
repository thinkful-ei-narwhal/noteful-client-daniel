import React, { Component, Fragment } from 'react';
import NotFound from './components/NotFound';
import MainPage from './components/MainPage';
import FolderPage from './components/FolderPage';
import NotePage from './components/NotePage';
import AddFolder from './components/AddFolder';
import AddNote from './components/AddNote';
import ErrorPage from './components/ErrorPage';
import config from './config';
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
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
      })
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

      fetch(`${config.API_ENDPOINT}/notes`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
        })
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

  validateFolderTo = () => {
    let folderTo = this.state.folderTo.value;
    if (!folderTo) {
      return 'you gotta choose a folder!'
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
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
      };
    fetch(`${config.API_ENDPOINT}/notes/${id}`, options)
      .then(res => res.json())
      .then(() => this.setState({notes: this.state.notes.filter(note => note.id !== id)}));
  }

  handlePostNote = () => {
    const note_name = this.state.noteName.value;
    const content = this.state.noteContent.value;
    const folderName = this.state.folderTo.value;
    const folderid = this.state.folders.find(folder => folder.folder_name === folderName).id;
    const date = new Date();
    const time = date.toISOString();
    const modified = time.toString();
    const post = JSON.stringify({note_name, content, modified, folderid});

    console.log(post);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
        },
      body: post,
    };
    fetch(`${config.API_ENDPOINT}/notes`, options)
      .then(res => res.json())
      .then((note) => this.setState({notes: [...this.state.notes, note]}));
      
  }

  handlePostFolder = () => {
    let folder_name = this.state.folderName.value;
    let newname = JSON.stringify({folder_name});
    console.log(newname);
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
      },
      body: newname,
    };
    fetch(`${config.API_ENDPOINT}/folders`, options)
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
        validateFolderTo: this.validateFolderTo,
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


