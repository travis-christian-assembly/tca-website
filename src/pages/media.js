import MediaIndexTemplate from 'components/MediaIndexTemplate'
import { graphql } from 'gatsby'
import React from 'react'

const MediaIndex = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <MediaIndexTemplate edges={edges} />
  )
}

export default MediaIndex

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "media"}}}) {
      edges {
        node {
          frontmatter {
            categories
            date
            title
            type
          }
        }
      }
    }
  }
`
