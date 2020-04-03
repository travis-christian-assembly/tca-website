import { language } from 'components/Language'
import Layout from 'components/layout'
import { calculatePageNumbersForNav, calculateSinglePageFromAll, getLastPageNumber } from 'components/Pagination'
import media_categories from 'data/media/categories.json'
import { Link } from 'gatsby'
import Moment from 'moment'
import React from 'react'
import Helmet from 'react-helmet'
import config from 'root/config'

const categoryIdToTranslation = {}
media_categories.forEach(e => categoryIdToTranslation[e.id] = e.lang[config.siteDisplayLang])

export default class MediaIndexTemplate extends React.Component {
  render() {
    const page = this.props.page

    const allNodes = this.props.edges
    allNodes.sort(
      function(a, b) {
        return toEpoch(b.node.frontmatter.date) - toEpoch(a.node.frontmatter.date)
      }
    )

    const lastPageNumber = getLastPageNumber(allNodes)
    const nodesOnCurrentPage = calculateSinglePageFromAll(allNodes, page)

    return (
      <Layout>
        <Helmet>
          <title>{language().pageTitleMedia}</title>
        </Helmet>

        <div id="main" className="wrapper style1">
          <div className="container">
            <header className="major">
              <h2>{language().pageTitleMedia}{this.props.category === undefined ? '' : ` — ${categoryIdToTranslation[this.props.category]}`}</h2>
            </header>

            <div className="row gtr-150">
              <div className="col-8 col-12-medium">
                <section id="content">
                  <ul className="alt">
                    {
                      nodesOnCurrentPage.map(
                        n => (
                          <li key={n.node.id}>
                            {toEntryHeader(this.props.category, n)}
                            <br/>
                            <Link to={`/media/${n.node.frontmatter.date}_${n.node.frontmatter.title}`}>
                              {n.node.frontmatter.title}
                            </Link>
                          </li>
                        )
                      )
                    }
                    <li></li>  {/* Render the line separator for the last item in the list */}
                  </ul>
                </section>

                {/* Page Nav */}
                {
                  calculatePageNumbersForNav(page, lastPageNumber).map(
                    p => {
                      if (p === 'Previous') {
                        return (
                          <a key="Previous" href={`?page=${page - 1}`} className="fa-stack">
                            <span className="far fa-square fa-stack-2x"></span>
                            <strong className="fa-stack-1x"><i className="fa fa-angle-left"></i></strong>
                          </a>
                        )
                      } else if (p === 'Next') {
                        return (
                          <a key="Next" href={`?page=${page + 1}`} className="fa-stack">
                            <span className="far fa-square fa-stack-2x"></span>
                            <strong className="fa-stack-1x"><i className="fa fa-angle-right"></i></strong>
                          </a>
                        )
                      } else if (p === 'First') {
                        return (
                          <a key="First" href="?page=1" className="fa-stack">
                            <span className="far fa-square fa-stack-2x"></span>
                            <strong className="fa-stack-1x"><i className="fa fa-angle-double-left"></i></strong>
                          </a>
                        )
                      } else if (p === 'Last') {
                        return (
                          <a key="Last" href={`?page=${lastPageNumber}`} className="fa-stack">
                            <span className="far fa-square fa-stack-2x"></span>
                            <strong className="fa-stack-1x"><i className="fa fa-angle-double-right"></i></strong>
                          </a>
                        )
                      } else {
                        return (
                          <a key={p} href={`?page=${p}`} className="fa-stack">
                            <span className="far fa-square fa-stack-2x"></span>
                            <strong className="fa-stack-1x">{p}</strong>
                          </a>
                        )
                      }
                    }
                  )
                }

                <br/>
                <br/>
                <br/>
              </div>

              <div className="col-4 col-12-medium">
                <section id="sidebar">
                  <h3>{language().pageHeaderMediaCategories}</h3>
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
                    <li></li>  {/* Render the line separator for the last item in the list */}
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

function toEntryHeader(category, node) {
  // Remove the categories from the header display if a category is specified, keep them otherwise, e.g. entries on /media/sermons will not have categories
  // displayed but entries on /media will.
  const prefix = category === undefined ? `${getTranslatedSortedCategories(node.node.frontmatter.categories)} — ` : ''
  const date = Moment(node.node.frontmatter.date, config.cmsDataFormatDatePersistence).format(config.cmsDataFormatDateDisplay)
  return `${prefix}${date}`
}

function toEpoch(frontmatterDate) {
  return Moment(frontmatterDate, 'YYYYMMDD')
}

function getTranslatedSortedCategories(categories) {
  const copy = categories
  copy.sort()

  return copy.map(c => categoryIdToTranslation[c]).join(' / ')
}
