import { renderAll } from 'components/BibleVerses'
import { language } from 'components/Language'
import Layout from 'components/layout'
import speakers from 'data/speakers.json'
import { graphql } from 'gatsby'
import _ from 'lodash'
import React from 'react'
import Helmet from 'react-helmet'
import showdown from 'showdown'

export default function MediaTemplate({ data }) {
  const { media } = data
  const { frontmatter, rawMarkdownBody } = media

  const speakerMap = {}
  speakers.forEach(e => { speakerMap[e.id] = `${e.name}${e.title}` })

  var renderedSpeakers = ''
  if (!_.isEmpty(frontmatter.speakers)) {
    renderedSpeakers = `${language().speakerLinePrefix}${frontmatter.speakers.map(s => speakerMap[s]).join(language().speakerDelimiter)}`
  }

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
    media: markdownRemark(id: {eq: $id}) {
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
