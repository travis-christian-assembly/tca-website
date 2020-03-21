module.exports = {
  bibleIndex: {
    'en': require('assets/bible/index/en.json'),
    'zh-Hans': require('assets/bible/index/zh-Hans.json'),
  },
  bibleVerses: {
    'zh-Hans': {
      'NCV': require('assets/bible/verses/zh-Hans/ncv/data.json')
    }
  },
  nonConsecutiveBibleVersesDisplayText: {
    'zh-Hans': '（部分经文省略）'
  }
}
