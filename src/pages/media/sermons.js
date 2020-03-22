import { graphql } from 'gatsby'
import React from 'react'
import MediaIndexTemplate from 'components/MediaIndexTemplate'

const MediaSermonsIndex = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <MediaIndexTemplate category='sermons' edges={edges} />
  )
}

export default MediaSermonsIndex

export const sermonQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "media"}, categories: {in: "sermons"}}}) {
      edges {
        node {
          frontmatter {
            categories
            date
            title
            type
          }
          id
        }
      }
    }
  }
`
