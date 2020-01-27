const config = require('./config');
const path = require('path')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.siteAuthor,
    description: 'Travis Christian Assembly',
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Layouts',
        link: '#',
        items: [
          {
            name: 'Left Sidebar',
            link: '/left-sidebar'
          },
          {
            name: 'Right Sidebar',
            link: '/right-sidebar'
          },
          {
            name: 'No Sidebar',
            link: '/no-sidebar'
          },
          {
            name: 'SubMenu',
            link: '#',
            items: [
              {
                name: 'Option 1',
                link: '#'
              },
              {
                name: 'Option 2',
                link: '#'
              },
              {
                name: 'Option 3',
                link: '#'
              },
              {
                name: 'Option 4',
                link: '#'
              }
            ]
          }
        ]
      },
      {
        name: 'Elements',
        link: '/elements'
      },
      {
        name: 'Sign Up',
        link: '#',
        cl: 'button primary'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, '.'),
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        pages: path.join(__dirname, 'src/pages')
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    'gatsby-plugin-offline'
  ]
}
