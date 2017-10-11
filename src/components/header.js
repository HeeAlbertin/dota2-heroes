import React, { Component } from 'react'

import '../styles/components/header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img alt="Logo Dota2" src="/images/logo.png" />
        <span className="header__title main-color">DOTA 2</span>
      </header>
    )
  }
}

export default Header
