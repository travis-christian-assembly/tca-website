import aboutUsJonAndTanya from 'assets/images/about_us_jon_and_tanya.png'
import aboutUsRayAndRuth from 'assets/images/about_us_ray_and_ruth.jpg'
import { language } from 'components/Language'
import Layout from 'components/layout'
import React from 'react'
import Helmet from 'react-helmet'

const AboutUs = props => (
  <Layout>
    <Helmet>
      <title>{language().aboutUsTitle}</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>{language().aboutUsPasterIntroTitle}</h2>
        </header>

        <section id="content">
          <span className="image left">
            <img src={aboutUsRayAndRuth} alt="" />
          </span>
          <h3>{language().aboutUsPasterIntroSeniorPasterTitle}</h3>
          <p>{language().aboutUsPasterIntroSeniorPasterDescription}</p>
          <p>
            {language().aboutUsPasterIntroSeniorPasterContactText}<a href="mailto:raychen2@gmail.com">raychen2@gmail.com</a>
          </p>

          <h3>{language().aboutUsPasterIntroChinesePasterTitle}</h3>
          <p>{language().aboutUsPasterIntroChinesePasterDescription}</p>
          <p>
            {language().aboutUsPasterIntroChinesePasterContactText}<a href="mailto:xhlu77@gmail.com">xhlu77@gmail.com</a>
          </p>

          <hr/>

          <span className="image right">
            <img src={aboutUsJonAndTanya} alt="" />
          </span>
          <h3>{language().aboutUsPasterIntroEnglishPasterTitle}</h3>
          <p>{language().aboutUsPasterIntroEnglishPasterDescription}</p>
        </section>
      </div>
    </div>
  </Layout>
)

export default AboutUs
