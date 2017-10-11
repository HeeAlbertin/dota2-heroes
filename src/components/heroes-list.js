import React from 'react'

import Hero from './hero'

import { Container, Row } from 'reactstrap';

import '../styles/components/heroes-list.css'

const RenderList = (heroes) => {
    return heroes.map((hero) => {
        return (
          <div key={hero.id}>
            <Hero { ...hero } />
          </div>
        )
    })
}

const HeroesList = (props) => {
  return (
    <div className="heroes-list">
      <Container>
        <Row>
          { RenderList(props.heroes) }
        </Row>
      </Container>
    </div>
  )
}

export default HeroesList
