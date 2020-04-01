import { getAudioUrl, getDayIndexByDate, renderScriptures } from 'components/DailyBread'
import { language } from 'components/Language'
import Layout from 'components/layout'
import Moment from 'moment'
import Calendar from 'rc-calendar'
import 'rc-calendar/assets/index.css'
import enUS from 'rc-calendar/lib/locale/en_US'
import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Helmet from 'react-helmet'
import config from 'root/config'
import showdown from 'showdown'

class DailyBread extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  onChange = date => this.setState({ date })

  render() {
    const date = this.state.date
    const dayIndex = getDayIndexByDate(date)

    var rendered
    if (dayIndex === -1) {
      rendered = (
        <div>
          <h3>{language().dailyBreadNoContent}</h3>
        </div>
      )
    } else {
      const audioUrl = `${config.dailyBreadContentDomain}${getAudioUrl(dayIndex)}`
      const markdown = renderScriptures(dayIndex)

      rendered = (
        <div>
          <h3>{language().dailyBreadHeaderAudio}</h3>
          <AudioPlayer
            src={audioUrl}
          />
          <br/>
          <br/>
          <h3>{language().dailyBreadHeaderTodaysScripture}</h3>
          <div dangerouslySetInnerHTML={{ __html: new showdown.Converter().makeHtml(markdown) }}/>
        </div>
      )
    }

    return (
      <Layout>
        <Helmet>
          <title>{language().dailyBreadTitle}</title>
          <meta name="description" content="Daily Bread" />
        </Helmet>

        <div id="main" className="wrapper style1">
          <div className="container">
            <header className="major">
              <h2>{language().dailyBreadTitle}</h2>
              <p>
                {Moment(date).format('MM/DD/YYYY')}
              </p>
            </header>
            <div className="row gtr-150">
              <div className="col-8 col-12-medium">
                <section id="content">
                  {rendered}
                </section>
              </div>
              <div className="col-4 col-12-medium">
                <section id="sidebar">
                  <section>
                    <Calendar
                      locale={enUS}
                      style={{ zIndex: 1001, width: '100%' }}
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DailyBread
