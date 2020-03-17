import { graphql } from 'gatsby'
import React from 'react'
import MediaIndexTemplate from 'components/MediaIndexTemplate'

const MediaSundaySchoolIndex = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <MediaIndexTemplate category='主日学' edges={edges} />
  )
}

export default MediaSundaySchoolIndex

export const sermonQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "media"}, categories: {in: "主日学"}}}) {
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
