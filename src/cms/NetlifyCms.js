import CMS from 'netlify-cms-app'

CMS.registerEditorComponent(
  {
    id: 'bible_verses',
    label: 'Bible Verses',
    fields: [
      {
        name: 'book',
        label: 'Book',
        widget: 'select',
        options: [
          { label: '创世记', value: '創' },
          { label: '出埃及记', value: '出' },
          { label: '利未记', value: '利' },
          { label: '民数记', value: '民' },
          { label: '申命记', value: '申' },
          { label: '约书亚记', value: '書' },
          { label: '士师记', value: '士' },
          { label: '路得记', value: '得' },
          { label: '撒母耳记上', value: '撒上' },
          { label: '撒母耳记下', value: '撒下' },
          { label: '列王纪上', value: '王上' },
          { label: '列王纪下', value: '王下' },
          { label: '历代志上', value: '代上' },
          { label: '历代志下', value: '代下' },
          { label: '以斯拉记', value: '拉' },
          { label: '尼希米记', value: '尼' },
          { label: '以斯帖记', value: '斯' },
          { label: '约伯记', value: '伯' },
          { label: '诗篇', value: '詩' },
          { label: '箴言', value: '箴' },
          { label: '传道书', value: '傳' },
          { label: '雅歌', value: '歌' },
          { label: '以赛亚书', value: '賽' },
          { label: '耶利米书', value: '耶' },
          { label: '耶利米哀歌', value: '哀' },
          { label: '以西结书', value: '結' },
          { label: '但以理书', value: '但' },
          { label: '何西阿书', value: '何' },
          { label: '约珥书', value: '珥' },
          { label: '阿摩司书', value: '摩' },
          { label: '俄巴底亚书', value: '俄' },
          { label: '约拿书', value: '拿' },
          { label: '弥迦书', value: '彌' },
          { label: '那鸿书', value: '鴻' },
          { label: '哈巴谷书', value: '哈' },
          { label: '西番雅书', value: '番' },
          { label: '哈该书', value: '該' },
          { label: '撒迦利亚书', value: '亞' },
          { label: '玛拉基书', value: '瑪' },
          { label: '马太福音', value: '太' },
          { label: '马可福音', value: '可' },
          { label: '路加福音', value: '路' },
          { label: '约翰福音', value: '約' },
          { label: '使徒行传', value: '徒' },
          { label: '罗马书', value: '羅' },
          { label: '哥林多前书', value: '林前' },
          { label: '哥林多后书', value: '林後' },
          { label: '加拉太书', value: '加' },
          { label: '以弗所书', value: '弗' },
          { label: '腓利比书', value: '腓' },
          { label: '歌罗西书', value: '西' },
          { label: '帖撒罗尼迦前书', value: '帖前' },
          { label: '帖撒罗尼迦后书', value: '帖後' },
          { label: '提摩太前书', value: '提前' },
          { label: '提摩太后书', value: '提後' },
          { label: '提多书', value: '多' },
          { label: '腓利门书', value: '門' },
          { label: '希伯来书', value: '來' },
          { label: '雅各书', value: '雅' },
          { label: '彼得前书', value: '彼前' },
          { label: '彼得后书', value: '彼後' },
          { label: '约翰一书', value: '約壹' },
          { label: '约翰二书', value: '約貳' },
          { label: '约翰三书', value: '約參' },
          { label: '犹大书', value: '猶' },
          { label: '启示录', value: '啟' }
        ]
      },
      {
        name: 'chapter',
        label: 'Chapter',
        widget: 'number',
        hint: 'Example: 1',
        valueType: 'int',
        min: 1,
        max: 150
      },
      {
        name: 'verses',
        label: 'Verses',
        widget: 'string',
        hint: `Example: '1-4,6,9' will select verse 1, 2, 3, 4, 6 and 9`
      }
    ],
    pattern: /^bible_verses book='(.*)', chapter='(.*)', verses='(.*)'$/,
    fromBlock: function(match) {
      return {
        book: match[1],
        chapter: match[2],
        verses: match[3],
      }
    },
    toBlock: function(obj) {
      return `bible_verses book='${obj.book}', chapter='${obj.chapter}', verses='${obj.verses}'`
    },
    toPreview: function(obj) {
      return (
        `<p>${obj.book} ${obj.chapter}: ${obj.verses}</p>`
      )
    }
  }
)
