import React, { Component } from 'react'

export default class ErrorPage extends Component {
  state = {error: null};

  static getDerivedStateFormError(error) {
    return (error)
  }
  render() {
    if (this.state.error) {
      return (
        <main className="error-page">
          <h1>Something seems to have gone wrong</h1>
          <p>Try refreshing the page or returning to HOME</p>
        </main>
      )
    }
    //otherwise render the children
    return this.props.children
  }
}
