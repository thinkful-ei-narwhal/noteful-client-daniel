import React, { Component } from 'react';
import NotFound from './components/NotFound';
import MainPage from './components/MainPage';
import FolderPage from './components/FolderPage';
import NotePage from './components/NotePage';
import {Route, Switch, Link} from 'react-router-dom';
import UserContext from './UserContext';



export default class App extends Component {

  state = {
    folders: [],
    notes: [],
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(res => res.json())
      .then(folders => this.setState({folders: folders}));

    fetch('http://localhost:9090/notes')
      .then(res => res.json())
      .then(notes => this.setState({notes: notes}));

  }

  handleDeleteItem = (id) => {

    console.log(id);

    const options = {
      method: 'DELETE',
    };
    fetch(`http://localhost:9090/notes/${id}`, options)
      .then(res => res.json())
      .then(notes => this.setState({notes: this.state.notes.filter(note => note.id !== id)}));
  }

  render() { // so we made context.  When we use component={component}, that automatically creates render props.  they are still props.
    return (
      <UserContext.Provider value = {{
        folders: this.state.folders,
        notes: this.state.notes,
        onDelete: this.handleDeleteItem,
      }}>
      <div>
        <Link to="/"><h1>Noteful</h1></Link>
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
          <Route component={NotFound} />
        </Switch>
    </div>
    </UserContext.Provider>
    )
  }
}


