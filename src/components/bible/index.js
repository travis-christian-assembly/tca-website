module.exports = {
  bibleIndex: {
    'en': require('assets/bible/index/en.json'),
    'zh-Hant': require('assets/bible/index/zh-Hant.json')
  },
  bibleVerses: {
    'zh-Hant': {
      'CUV': require('assets/bible/verses/zh-Hant/cuv/data.json')
    }
  },
  nonConsecutiveBibleVersesDisplayText: {
    'zh-Hant': '（部分經文省略）'
  }
}
