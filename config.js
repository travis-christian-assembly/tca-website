const media_categories = require('./data/media/categories.json')

const siteDisplayLang = 'zh-Hans'

const siteMenuLinks = {}
siteMenuLinks[siteDisplayLang] = [
  {
    name: '主页',
    link: '/'
  },
  {
    name: '影音资料',
    link: '/media',
    items: media_categories.map(c => ({ name: c.lang[siteDisplayLang], link: `/media/${c.pageSubPath}` }))
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

module.exports = {
  // Global
  siteTitle: '传福基督徒聚会',
  siteAuthor: 'Travis Christian Assembly',
  siteUrl: 'https://tcaweb.org',
  siteDescription: '传福基督徒聚会',
  siteDisplayLang: siteDisplayLang,
  siteMenuLinks: siteMenuLinks,

  // CMS
  cmsSiteTitle: 'Content Management System - Travis Christian Assembly',

  // Church Info
  churchName: 'Travis Christian Assembly',
  churchAddress: '8304 US-290, Austin, TX 78724',
  churchAddressMapLink: 'https://goo.gl/maps/apCQZS7abKt4ba2g9',

  // Bible Display
  bibleDataLang: 'en',  // Use Engligh in raw data for referencing bible verses, e.g. in Markdown pages
  bibleDisplayLang: `${siteDisplayLang}`,
  bibleDisplayVersion: 'NCV'
}
