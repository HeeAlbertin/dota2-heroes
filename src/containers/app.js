import React, { Component } from 'react'

/* REDUX IMPORTS */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
/* END REDUX IMPORTS */

/* COMPONENTS IMPORTS */
import Header from '../components/header'
import HeroesAttr from '../components/heroes-attr'
/* END COMPONENTS IMPORTS */

/* ACTIONS IMPORTS */
import * as heroesActionCreators from '../redux/actions/heroes'
/* END ACTIONS IMPORTS */

const actionCreators = {
  ...heroesActionCreators
}

class App extends Component {
  componentDidMount() {
    this.props.fetchHeroes()
  }

  render() {
    return (
      <div className="container">
        <Header />
        <HeroesAttr heroes={this.props.heroes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App) // chama duas vezes, na segunda chamada passa o App
