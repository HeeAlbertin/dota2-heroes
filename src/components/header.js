import React, { Component } from 'react'

import Header from '../components/header'

import '../styles/components/header.css'

class App extends Component {
  render() {
    return (
      <header className="header">
          <img src="/images/logo.png" />
          <span className="header__title main-color">DOTA 2</span>
      </header>
    )
  }
}

export default App
