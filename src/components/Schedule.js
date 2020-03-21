import BgSchedule from 'assets/images/bg_schedule.jpg'
import { lang } from 'components/lang'
import React from 'react'
import Fade from 'react-reveal/Fade'
import config from 'root/config'

const language = lang[config.siteDisplayLang]

const Schedule = props => (
  <section
    id="card-schedule"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${BgSchedule})` }}
  >
    <span className="image fit main">
      <img src={BgSchedule} alt=""/>
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>{language.sundayScheduleHeader}</h2>
        </header>
        <p>
          {language.sundayScheduleTextLine1}<br/>
          {language.sundayScheduleTextLine2}<br/>
          {language.sundayScheduleTextLine3}<br/>
          {language.sundayScheduleTextLine4}
        </p>
        <ul className="actions">
          <li>
            <a href="/" className="button">
              {language.sundayScheduleTextKnowMore}
            </a>
          </li>
        </ul>
      </div>
    </Fade>
  </section>
)

export default Schedule
