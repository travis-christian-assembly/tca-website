const config = require('./config');
const path = require('path')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.siteAuthor,
    description: config.siteDescription,
    menuLinks: [
      {
        name: '主页',
        link: '/'
      },
      {
        name: '影音资料',
        link: '/media',
        items: [
          {
            name: '主日信息',
            link: '/media/sermons'
          },
          {
            name: '主日学',
            link: '/media/sunday-school'
          },
          {
            name: '福音专题',
            link: '/media/gospel'
          },
          {
            name: '特会专题',
            link: '/media/conference'
          },
          {
            name: '美南秋令会',
            link: '/media/southern-us-fall-retreat'
          }
        ]
      },
      {
        name: '元素',
        link: '/elements'
      },
      {
        name: '直播',
        link: 'https://www.youtube.com/channel/UC3Qa1Q7VrghRxxeavIdF1gw/live',
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
        cms: path.join(__dirname, 'src/cms'),
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
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/NetlifyCms.js`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'media',
        path: `${__dirname}/media/`
      }
    },
    'gatsby-transformer-remark',
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
