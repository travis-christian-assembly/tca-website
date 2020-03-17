import { bibleIndex, bibleVerses, nonConsecutiveBibleVersesDisplayText } from 'components/bible'
import config from 'root/config'

const displayLang = config.bibleVersesDisplayLang

// Book names for the verse quotes are persisted in English names instead of BookId for readability
const bookEngNameToId = {}
Object.keys(bibleIndex['en']).forEach(
  id => bookEngNameToId[bibleIndex['en'][id]] = id
)

export default function renderBibleVerses(line) {
  const match = line.match(/^\$bible_verses book='(.*)', chapter='(.*)', verses='(.*)'\$$/)
  var result = line

  if (match) {
    const book = match[1]
    const chapter = match[2]
    const verseScope = match[3]

    const bookChsName = bibleIndex[displayLang][bookEngNameToId[book]]
    const verseIds = validateAndCalculateVerseIds(verseScope)
    const versesInMarkdown = getVersesByIds(bookEngNameToId[book], chapter, verseIds)

    result = `> <u>${bookChsName} ${chapter}</u>\n>\n> ${versesInMarkdown}\n`
  }

  return result
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
        throw new Error(`Unable to handle verse selection expression: '${expression}'. Verse selection expression should look like '\${num}-\${num}' or '\${num}'.`)
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

    result += ` <sup>${verseIds[i]}</sup>${bibleVerses[displayLang][bookId][chapter][verseIds[i]]}`
  }

  return result.trim()
}
