import { renderAll } from 'components/BibleVerses'
import Layout from 'components/layout'
import { renderSpeakers } from 'components/Speakers'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import showdown from 'showdown'

export default function ProgramSheetTemplate({ data }) {
  const { programSheet } = data
  const { frontmatter, rawMarkdownBody } = programSheet

  const renderedSpeakers = renderSpeakers(frontmatter.speakers)
  const renderedBody = renderAll(rawMarkdownBody)

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
            <p>{renderedSpeakers}</p>
          </header>

          <section id="content">
            <div dangerouslySetInnerHTML={{ __html: new showdown.Converter().makeHtml(renderedBody) }}/>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    programSheet: markdownRemark(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MM/DD/YYYY")
        speakers
        title
        type
      }
      rawMarkdownBody
    }
  }
`
