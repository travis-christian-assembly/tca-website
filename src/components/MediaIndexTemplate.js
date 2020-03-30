import { lang } from 'components/lang'
import Layout from 'components/layout'
import media_categories from 'data/media/categories.json'
import { Link } from 'gatsby'
import Moment from 'moment'
import React from 'react'
import Helmet from 'react-helmet'
import config from 'root/config'

export default class MediaIndexTemplate extends React.Component {
  render() {
    const language = lang[config.siteDisplayLang]

    const nodes = this.props.edges
    nodes.sort(
      function(a, b) {
        return Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date);
      }
    )

    return (
      <Layout>
        <Helmet>
          <title>{language.pageTitleMedia}</title>
        </Helmet>

        <div id="main" className="wrapper style1">
          <div className="container">
            <header className="major">
              <h2>{language.pageTitleMedia}{this.props.category === undefined ? '' : ` — ${this.props.category}`}</h2>
            </header>
            <div className="row gtr-150">
              <div className="col-8 col-12-medium">
                <section id="content">
                  <ul className="alt">
                    {
                      nodes.map(
                        n => <li key={n.node.id}>
                          {this.props.category === undefined ? `${getTranslatedSortedCategories(n.node.frontmatter.categories)} — ` : ''}{Moment(n.node.frontmatter.date, 'YYYYMMDD').format('MM/DD/YYYY')}
                          <br/>
                            <Link to={`/media/${n.node.frontmatter.date}_${n.node.frontmatter.title}`}>
                              {n.node.frontmatter.title}
                            </Link>
                        </li>
                      )
                    }
                    <li></li>  {/* Render the line separator for the last item in the list*/}
                  </ul>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                <section id="sidebar">
                  <h3>{language.pageHeaderMediaCategories}</h3>
                  <ul className="alt">
                    {
                      media_categories.map(
                        c => <li key={c.id}>
                          <Link to={`/media/${c.pageSubPath}`}>
                            {c.lang[config.siteDisplayLang]}
                          </Link>
                        </li>
                      )
                    }
                    <li></li>  {/* Render the line separator for the last item in the list*/}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

function getTranslatedSortedCategories(categories) {
  const copy = categories
  copy.sort()

  const categoryIdToTranslation = {}
  media_categories.forEach(e => categoryIdToTranslation[e.id] = e.lang[config.siteDisplayLang])

  return copy.map(c => categoryIdToTranslation[c]).join(' / ')
}
