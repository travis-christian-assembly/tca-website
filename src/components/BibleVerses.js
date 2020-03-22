import { bibleIndex, bibleVerses, nonConsecutiveBibleVersesDisplayText } from 'components/bible'
import config from 'root/config'

const _ = require('lodash')

const dataLang = config.bibleDataLang
const displayLang = config.bibleDisplayLang
const displayVersion = config.bibleDisplayVersion

const bookEngNameToId = {}
Object.keys(bibleIndex[dataLang]).forEach(
  id => bookEngNameToId[bibleIndex[dataLang][id]] = id
)

export function renderBibleVerses(line) {
  const match = line.match(/^\$bible_verses book='(.*)', chapter='(.*)', verses='(.*)'\$$/)
  var result = line

  if (match) {
    const book = match[1]
    const chapter = match[2]
    const verseScope = match[3]

    const bookChsName = bibleIndex[displayLang][bookEngNameToId[book]]
    const verseIds = validateAndCalculateVerseIds(verseScope)
    const versesInMarkdown = getVersesByIds(bookEngNameToId[book], chapter, verseIds)

    if (bookChsName && chapter !== 'undefined') {
      result = `> <u>${bookChsName} ${chapter}</u>\n>\n> ${versesInMarkdown}\n`
    } else {
      result = '> <span style="color:red">**(Please select a Book and a Chapter)**</span>'
    }
  }

  return result
}

export function renderAll(body) {
  return _.map(body.split('\n'), renderBibleVerses).join('\n')
}

function validateAndCalculateVerseIds(verseScope) {
  const result = []

  verseScope.split(',').forEach(
    e => {
      const expression = e.trim()
      const multiVersesMatch = expression.match(/^([0-9]*)-([0-9]*)$/)

      if (multiVersesMatch) {
        const start = parseInt(multiVersesMatch[1])
        const end = parseInt(multiVersesMatch[2])

        for (var i = start; i <= end; i++) {
          result.push(`${i}`)
        }
      } else if (expression.match(/^[0-9]*$/)) {
        result.push(expression)
      } else {
        console.log(`Unable to handle verse selection expression: '${expression}'. Verse selection expression should look like '\${num}-\${num}' or '\${num}'.`)
      }
    }
  )

  return result
}

function getVersesByIds(bookId, chapter, verseIds) {
  var result = ''

  for (var i = 0; i < verseIds.length; i++) {
    // Add indication for non-consecutive verse quotes
    if (i > 0 && verseIds[i] - verseIds[i-1] > 1) {
      result += `\n>\n> ${nonConsecutiveBibleVersesDisplayText[displayLang]}\n>\n>`
    }

    if (bibleVerses[displayLang][displayVersion][bookId][chapter][verseIds[i]] === undefined) {
      return `<span style="color:red">**Verse ${verseIds[i]} in Chapter ${chapter} does not exist!**</span>`
    }

    result += ` <sup>${verseIds[i]}</sup>${bibleVerses[displayLang][displayVersion][bookId][chapter][verseIds[i]]}`
  }

  return result.trim()
}
