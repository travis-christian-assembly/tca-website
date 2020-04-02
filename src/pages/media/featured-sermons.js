import { getPageNumber } from 'components/Pagination'
import { graphql } from 'gatsby'
import React from 'react'
import MediaIndexTemplate from 'templates/MediaIndexTemplate'

const MediaFeaturedSermonsIndex = ({
  data: {
    allMarkdownRemark: { edges }
  },
  location
}) => {
  return (
    <MediaIndexTemplate category='featured_sermons' edges={edges} page={getPageNumber(location)}/>
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
