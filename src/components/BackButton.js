import React, { Component } from 'react'

export default class BackButton extends Component {
  render() {
    console.log(this.props);
    return (
      
      <button onClick={() => this.props.history.goBack}><h2>Back</h2></button>
      
    )
  }
}


