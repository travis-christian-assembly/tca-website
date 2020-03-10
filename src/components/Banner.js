import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Slider from 'components/SlideShow'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>预备基督的新妇，迎接基督的再临</h2>
        <p>
          回到起初，回到圣经，回到身体，回到圣灵掌权。
        </p>
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
