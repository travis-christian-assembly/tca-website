import Layout from 'components/layout'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

export default function SermonTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <div id="main" className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.date}</p>
          </header>

          <section id="content">
            <div dangerouslySetInnerHTML={{ __html: html }}/>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {id: {eq: $id}}) {
      html
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        type
      }
    }
  }
`
