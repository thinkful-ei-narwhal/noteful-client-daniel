import React, { Component } from 'react'
import UserContext from '../UserContext';
import Folder from './Folder'

export default class FolderList extends Component {

  static contextType = UserContext;

  render() {

    const {folders} = this.context;

     const foldersList = folders.map(folder => {

      return <Folder id={folder.id} name={folder.name}/>
    })
    

    return (
      <div>
        {foldersList}
        <button>add folder</button>
      </div>
    )
  }
}


