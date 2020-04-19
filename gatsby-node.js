const config = require('./config')
const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              type
            }
            id
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
    var shouldProcessNode = false
    var pagePath

    switch (node.frontmatter.type) {
      case 'media':
        pagePath = `media/${node.frontmatter.date}_${node.frontmatter.title}`
        shouldProcessNode = true
        break
      case 'speaker':
        // Speaker nodes do not have corresponding pages to be created
        shouldProcessNode = false
        break
      case 'programSheet':
        pagePath = 'program-sheet'
        shouldProcessNode = true
        break
      default:
        throw `Unrecognized Markdown node type: ${node.frontmatter.type}`
    }

    if (shouldProcessNode) {
      console.log(`Creating '${node.frontmatter.type}' page for '${node.frontmatter.title}' with additional context at: ${pagePath}`)

      createPage(
        {
          path: pagePath,
          component: getTemplateByType(node.frontmatter.type),
          context: {
            id: node.id
          }
        }
      )
    }
  })
}

function getTemplateByType(type) {
  switch (type) {
    case 'media':
      return path.resolve('src/templates/MediaPageTemplate.js')
    case 'programSheet':
      return path.resolve('src/templates/ProgramSheetTemplate.js')
    default:
      throw `Unrecognized template type: ${type}`
  }
}
