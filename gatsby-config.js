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
            link: '/media/1'
          },
          {
            name: '福音专题',
            link: '/media/2'
          },
          {
            name: '特会专题',
            link: '/media/3'
          },
          {
            name: '青少年聚会',
            link: '/media/4'
          },
          {
            name: '美南秋令会',
            link: '/media/5'
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
    'gatsby-plugin-netlify-cms',
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
        name: 'sermons',
        path: `${__dirname}/sermons/`
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
