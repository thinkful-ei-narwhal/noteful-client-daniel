import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';
import UserContext from '../UserContext';
import Folder from './Folder'

export default class FolderList extends Component {

  static contextType = UserContext;

  render() {

    const {folders} = this.context;

     const foldersList = folders.map((folder, i) => {

      return <Folder key={i} id={folder.id} folder_name={folder.folder_name}/>
    })
    

    return (
      <Fragment>
        {foldersList}
        <button><Link to="/FolderForm">Add A Folder</Link></button>
      </Fragment>
    )
  }
}


