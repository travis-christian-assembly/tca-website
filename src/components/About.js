import React from 'react'
import BgAbout from 'assets/images/bg_about.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

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
                <h2>教会介绍</h2>
              </header>
            </div>
            <div className="col-3 col-12-medium">
              <h3>我们的目标</h3>
              <p>
                预备基督的新妇，<br/>
                迎接基督的再临
              </p>
            </div>
            <div className="col-3 col-12-medium">
              <h3>我们的道路</h3>
              <p>
                回到起初<br/>
                回到圣经<br/>
                回到身体<br/>
                回到圣灵掌权
              </p>
            </div>
            <div className="col-3 col-12-medium">
              <h3>我们的策略</h3>
              <p>
                借福音的传扬领人归主<br/>
                借小组带进全民的事奉<br/>
                借圣灵的恩膏带进全人的医治，建立基督身体<br/>
                借宣教得著未得之民
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
