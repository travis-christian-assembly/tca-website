module.exports = {
  bibleIndex: {
    'en': require('assets/bible/index/en.json'),
    'zh-Hans': require('assets/bible/index/zh-Hans.json'),
  },
  bibleVerses: {
    'zh-Hans': {
      'CUVS': require('assets/bible/verses/zh-Hans/cuvs/data.json')
    }
  },
  nonConsecutiveBibleVersesDisplayText: {
    'zh-Hans': '（部分经文省略）'
  }
}
