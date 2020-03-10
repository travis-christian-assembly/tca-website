import Layout from 'components/layout'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

const Media = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const sermons = edges.filter(e => e.node.frontmatter.type === 'Sermon')
  sermons.sort(
    function(a, b) {
      return Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date);
    }
  )

  return (
    <Layout>
      <Helmet>
        <title>影音资料</title>
      </Helmet>

      { console.log(sermons) }

      <div id="main" className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>影音资料</h2>
          </header>
          <div className="row gtr-150">
            <div className="col-8 col-12-medium">
              <section id="content">
                <ul className="alt">
                  {
                    sermons.map(
                      s => <li key={s.node.id}>
                             <Link to={`media/sermons/${s.node.frontmatter.id}`}>
                               [{s.node.frontmatter.date}] {s.node.frontmatter.title}
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
                <h3>分类</h3>
                <ul className="alt">
                  <li>主日信息</li>
                  <li>主日学</li>
                  <li>福音专题</li>
                  <li>特会专题</li>
                  <li>青少年聚会</li>
                  <li>美南秋令会</li>
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

export default Media

export const sermonQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            id
            date(formatString: "MM/DD/YYYY")
            title
            type
          }
        }
      }
    }
  }
`
