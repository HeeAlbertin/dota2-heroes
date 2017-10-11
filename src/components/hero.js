import React from 'react'

import '../styles/components/hero.css'

const IMG_BASE_URL = "http://cdn.dota2.com/apps/dota2/images/heroes/";

const Hero = (hero) => {
  // remove the sufix "npc_dota_hero_", to get the correct image, using substr
  return (
    <div className="hero">
      <img
          className="img-responsive"
          alt=""
          src={IMG_BASE_URL + hero.name.substr(14, hero.name.length) + '_sb.png'}
      />
      <div className="hero__info">
        <p className="hero__name">
          { hero.localized_name }
        </p>
      </div>
    </div>
  )
}

export default Hero
