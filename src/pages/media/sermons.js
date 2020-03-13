import { graphql } from 'gatsby'
import React from 'react'
import MediaIndexTemplate from 'components/MediaIndexTemplate'

const MediaSermonsIndex = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <MediaIndexTemplate category='主日信息' edges={edges} />
  )
}

export default MediaSermonsIndex

export const sermonQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "media"}, categories: {in: "主日信息"}}}) {
      edges {
        node {
          frontmatter {
            categories
            date(formatString: "MM/DD/YYYY")
            id
            title
            type
          }
          id
        }
      }
    }
  }
`
