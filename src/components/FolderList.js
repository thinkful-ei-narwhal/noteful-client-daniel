import React, { Component } from 'react'
import Folder from './NoteList'

export default class FolderList extends Component {
  render() {

     const foldersList = this.props.folders.map(folder => {

      return <Folder key={folder.id} name={folder.name}/>
    })
    

    return (
      <div>
        {foldersList}
      </div>
    )
  }
}


