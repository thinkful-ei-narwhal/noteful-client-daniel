import React, { Component } from 'react'
import Folder from './Folder'

export default class FolderList extends Component {
  render() {

     const foldersList = this.props.folders.map(folder => {

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


