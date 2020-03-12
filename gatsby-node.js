const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const sermonTemplate = path.resolve('src/templates/SermonTemplate.js')

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              id
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
    const pagePath = `media/sermons/${node.frontmatter.id}`
    console.log(`Creating page for sermon '${node.frontmatter.title}' at: ${pagePath}`);

    createPage(
      {
        path: pagePath,
        component: sermonTemplate,
        context: {
          id: node.frontmatter.id
        }
      }
    )
  })
}
