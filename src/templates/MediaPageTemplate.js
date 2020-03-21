import { renderAll } from 'components/BibleVerses'
import { lang } from 'components/lang'
import Layout from 'components/layout'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import config from 'root/config'

const language = lang[config.siteDisplayLang]
const _ = require('lodash')
const showdown = require('showdown')

export default function MediaTemplate({ data }) {
  const { media, speakers } = data
  const { frontmatter, rawMarkdownBody } = media

  const speakerMap = {}
  speakers.edges.forEach(e => speakerMap[e.node.frontmatter['name']] = e.node.frontmatter['title'])

  var renderedSpeakers = ''
  if (!_.isEmpty(frontmatter.speakers)) {
    renderedSpeakers = `${language.speakerLinePrefix}${frontmatter.speakers.map(s => `${s}${speakerMap[s]}`).join(language.speakerDelimiter)}`
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
    speakers: allMarkdownRemark(filter: {frontmatter: {type: {eq: "speaker"}}}) {
      edges {
        node {
          frontmatter {
            name
            title
          }
        }
      }
    }
  }
`
