import { bibleIndex } from 'components/bible'
import config from 'root/config'

const bibleBookOptions = Object.keys(bibleIndex[config.bibleDataLang]).map(
  function (id) {
    return { label: bibleIndex[config.bibleDisplayLang][id], value: bibleIndex[config.bibleDataLang][id] }
  }
)

const BibleVersesEditorComponent = {
  id: 'bible_verses',
  label: 'Bible Verses',
  fields: [
    {
      name: 'book',
      label: 'Book',
      widget: 'select',
      options: bibleBookOptions
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
  pattern: /^\$bible_verses book='(.*)', chapter='(.*)', verses='(.*)'\$$/,
  fromBlock: function(match) {
    return {
      book: match[1],
      chapter: match[2],
      verses: match[3],
    }
  },
  toBlock: function(obj) {
    return `$bible_verses book='${obj.book}', chapter='${obj.chapter}', verses='${obj.verses}'$`
  }
}

export default BibleVersesEditorComponent
