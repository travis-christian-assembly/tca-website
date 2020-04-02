import { graphql } from 'gatsby'
import React from 'react'
import MediaIndexTemplate from 'components/MediaIndexTemplate'

const MediaFeaturedSermonsIndex = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <MediaIndexTemplate category='featured_sermons' edges={edges} />
  )
}

export default MediaFeaturedSermonsIndex

export const sermonQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "media"}, categories: {in: "featured_sermons"}}}) {
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
