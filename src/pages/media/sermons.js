import { getPageNumber } from 'components/Pagination'
import { graphql } from 'gatsby'
import React from 'react'
import MediaIndexTemplate from 'templates/MediaIndexTemplate'

const MediaSermonsIndex = ({
  data: {
    allMarkdownRemark: { edges }
  },
  location
}) => {
  return (
    <MediaIndexTemplate category='sermons' edges={edges} page={getPageNumber(location)}/>
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
