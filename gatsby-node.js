const dateFormat = require('dateformat')
const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              type
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    var pagePath

    switch (node.frontmatter.type) {
      case 'media':
        pagePath = `media/${dateFormat(Date.parse(node.frontmatter.date), 'yyyymmdd')}_${node.frontmatter.title}`
        break;
      default:
        throw `Unrecognized Markdown node type: ${node.frontmatter.type}`
    }

    console.log(`Creating '${node.frontmatter.type}' page for '${node.frontmatter.title}' at: ${pagePath}`)

    createPage(
      {
        path: pagePath,
        component: getTemplateByType(node.frontmatter.type),
        context: {
          title: node.frontmatter.title
        }
      }
    )
  })
}

function getTemplateByType(type) {
  switch (type) {
    case 'media':
      return path.resolve('src/templates/MediaPageTemplate.js')
    default:
      throw `Unrecognized template type: ${type}`
  }
}
