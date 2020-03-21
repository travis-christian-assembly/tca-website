import { lang } from 'components/lang'
import Slider from 'components/SlideShow'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import config from 'root/config'

const language = lang[config.siteDisplayLang]

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>{language.bannerHeader}</h2>
        <p>{language.bannerText}</p>
      </header>
      <br/>
      <br/>
      <Slider/>
    </div>
    <ScrollLink
      to="card-about"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
