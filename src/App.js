import React, { Component } from 'react';
import NotFound from './components/NotFound';
import MainPage from './components/MainPage';
import {Route, Switch} from 'react-router-dom';
import STORE from './dummy-store';



export default class App extends Component {

  state = {
    folders: STORE.folders,
    notes: STORE.notes,
  }

  render() {
    return (
      <div>
        <h1>Noteful</h1>
        <Switch>
          <Route exact path='/' render={() =>
             <MainPage
             folders={this.state.folders}
             notes={this.state.notes}
            />} />
          <Route component={NotFound} />
        </Switch>
    </div>
    )
  }
}


