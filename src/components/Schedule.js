import React from 'react'
import BgSchedule from 'assets/images/bg_schedule.jpg'
import Fade from 'react-reveal/Fade'

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
          <h2>主日聚会时间安排</h2>
        </header>
        <p>
          主日掰饼聚会：10:00 ~ 10:20<br/>
          主日学及小组学习：10:20 ~ 10:50<br/>
          主日敬拜和信息：11:00 ~ 12:30<br/>
          爱宴：12:30 ~ 13:30
        </p>
        <ul className="actions">
          <li>
            <a href="/" className="button">
              了解更多
            </a>
          </li>
        </ul>
      </div>
    </Fade>
  </section>
)

export default Schedule
