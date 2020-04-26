import { language } from 'components/Language'
import Layout from 'components/layout'
import _ from 'lodash'
import React from 'react'
import Helmet from 'react-helmet'

class Fellowship extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>{language().fellowshipTitle}</title>
        </Helmet>

        <div id="main" className="wrapper style1">
          <div className="container">
            <header className="major">
              <h2>{language().fellowshipTitle}</h2>
            </header>

            <section id="content">
              <h3>{language().fellowshipFamilyFellowshipTitle}</h3>
              {toFellowshipGroups(language().fellowshipGroups.familyFellowship)}

              <hr/>

              <h3>{language().fellowshipCampusFellowshipTitle}</h3>
              {toFellowshipGroups(language().fellowshipGroups.campusFellowship)}
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}

function toFellowshipGroups(groups) {
  const groupIds = Object.keys(groups)

  return groupIds.map(
    id => {
      const entry = groups[id]
      return (
        <div>
          <h5>{entry.name}</h5>
          <p>
            {language().fellowshipTimeText}{entry.time}<br/>
            {language().fellowshipLocationText}{entry.location}<br/>
            {language().fellowshipLeadersText}
            {
              entry.leaders.map(
                e => <li key={e.name}>{e.name} {_.isEmpty(e.email) ? '' : <a href={`mailto:${e.email}`}><span className="fas fa-envelope"></span></a>}</li>
              )
            }
          </p>
        </div>
      )
    }
  )
}

export default Fellowship
