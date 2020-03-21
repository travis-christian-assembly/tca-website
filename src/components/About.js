import BgAbout from 'assets/images/bg_about.jpg'
import { lang } from 'components/lang'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import config from 'root/config'

const language = lang[config.siteDisplayLang]

const About = props => (
  <section
    id="card-about"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${BgAbout})` }}
  >
    <span className="image fit main">
      <img src={BgAbout} alt=""/>
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-3 col-12-medium">
              <header>
                <h2>{language.aboutHeader}</h2>
              </header>
            </div>
            <div className="col-3 col-12-medium">
              <h3>{language.aboutSubHeaderGoal}</h3>
              <p>
                {language.aboutTextGoalLine1}<br/>
                {language.aboutTextGoalLine2}
              </p>
            </div>
            <div className="col-3 col-12-medium">
              <h3>{language.aboutSubHeaderApproach}</h3>
              <p>
                {language.aboutTextApproachLine1}<br/>
                {language.aboutTextApproachLine2}<br/>
                {language.aboutTextApproachLine3}<br/>
                {language.aboutTextApproachLine4}
              </p>
            </div>
            <div className="col-3 col-12-medium">
              <h3>{language.aboutSubHeaderStrategy}</h3>
              <p>
                {language.aboutTextStrategyLine1}<br/>
                {language.aboutTextStrategyLine2}<br/>
                {language.aboutTextStrategyLine3}<br/>
                {language.aboutTextStrategyLine4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="card-schedule"
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
export default About
