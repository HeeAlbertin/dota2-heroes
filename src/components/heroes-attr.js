import React from 'react'

import HeroesList from './heroes-list'

import { Container, Row, Col } from 'reactstrap';

import '../styles/components/heroes-attr.css'

const ICON = "http://cdn.dota2.com/apps/dota2/images/heropedia/overviewicon_"

const ATTRIBUTES = [{"attr_id": 'agi', "attr_name": "AGILITY"},
                    {"attr_id": 'str', "attr_name": "STRENGTH"},
                    {"attr_id": 'int', "attr_name": "INTELLIGENCE"}] // main heroes's primary attributes

const RenderList = (heroes) => {
    return ATTRIBUTES.map((attr) => {
        return (
          <Col key={ "heroes-attr__" + attr.attr_id }>
            <div className="heroes-attr__info">
                <img
                  id={ attr.attr_id }
                  alt={ attr.attr_name }
                  src={ ICON + attr.attr_id + '.png' }
                  />
                <span className="heroes-attr__name">
                  { attr.attr_name }
                </span>
            </div>

            <HeroesList heroes={ heroes.filter(
                function (hero) {
                  return hero.primary_attr === attr.attr_id
                }
              ) } />
          </Col>
        )
    })
}

const HeroesAttr = (props) => {
  return (
    <div className="heroes-attr text-center">
      <Container>
        <Row>
            { RenderList(props.heroes) }
        </Row>
      </Container>
    </div>
  )
}

export default HeroesAttr
