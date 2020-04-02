import { getPageNumber } from 'components/Pagination'
import MediaIndexTemplate from 'templates/MediaIndexTemplate'
import { graphql } from 'gatsby'
import React from 'react'

const MediaIndex = ({
  data: {
    allMarkdownRemark: { edges }
  },
  location
}) => {
  return (
    <MediaIndexTemplate edges={edges} page={getPageNumber(location)}/>
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
          id
        }
      }
    }
  }
`
