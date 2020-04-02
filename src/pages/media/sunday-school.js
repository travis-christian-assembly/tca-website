import { getPageNumber } from 'components/Pagination'
import { graphql } from 'gatsby'
import React from 'react'
import MediaIndexTemplate from 'templates/MediaIndexTemplate'

const MediaSundaySchoolIndex = ({
  data: {
    allMarkdownRemark: { edges }
  },
  location
}) => {
  return (
    <MediaIndexTemplate category='sunday_school' edges={edges} page={getPageNumber(location)}/>
  )
}

export default MediaSundaySchoolIndex

export const sermonQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "media"}, categories: {in: "sunday_school"}}}) {
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
