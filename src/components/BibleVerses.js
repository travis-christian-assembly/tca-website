import { bibleIndex, bibleVerses, nonConsecutiveBibleVersesDisplayText } from 'components/bible'
import config from 'root/config'

const dataLang = config.bibleDataLang
const displayLang = config.bibleDisplayLang
const displayVersion = config.bibleDisplayVersion

const bookEngNameToId = {}
Object.keys(bibleIndex[dataLang]).forEach(
  id => bookEngNameToId[bibleIndex[dataLang][id]] = id
)

/**
 * Return text that has verses which follow the inline-style specification within a single line. It supports multiple inline-style verses specified at different
 * locations within the line.
 *
 * @param {String} line A line of text that is to be rendered with inlined verses. The verse specification must follow this regex pattern: /bible_verses book='([a-zA-Z1-3 ]*)', chapter='([\d,-]*)', verses='([\d,-]*)'/.
 * @returns {String} A line of text with inlined verses rendered.
 */
export function renderInlineBibleVerses(line) {
  const regex = /bible_verses book='([a-zA-Z1-3 ]*)', chapter='([\d,-]*)', verses='([\d,-]*)'/
  var result = ''

  line.split(config.bibleInlineVerseSeparator)
    .forEach(
      split => {
        const match = split.match(regex)

        if (match) {
          const book = match[1]
          const chapter = match[2]
          const verseScope = match[3]

          const translatedBookName = bibleIndex[displayLang][bookEngNameToId[book]]
          const verseIds = validateAndCalculateVerseIds(bookEngNameToId[book], chapter, verseScope)
          const versesInMarkdown = getVersesByIds(bookEngNameToId[book], chapter, verseIds)

          result += `<span style='color:${config.bibleInlineVerseDisplayColor}'>*${versesInMarkdown}（${translatedBookName} ${chapter}: ${verseScope}）*</span>`
        } else {
          result += split
        }
      }
    )

  return result
}

/**
 * Return text that has verses which follow the inline-style specification within a single line. It supports multiple inline-style verses specified at different
 * locations within the line.
 *
 * @param {String} line A line of text that is to be rendered as a standalone block of verses. The verse specification must follow this regex pattern: /^\$bible_verses book='([a-zA-Z1-3 ]*)', chapter='([\d,-]*)', verses='([\d,-]*)'\$$/.
 * @returns {String} A line of text with inlined verses rendered.
 */
export function renderBibleVerses(line) {
  const match = line.match(/^\$bible_verses book='([a-zA-Z1-3 ]*)', chapter='([\d,-]*)', verses='([\d,-]*)'\$$/)
  var result = line

  if (match) {
    const book = match[1]
    const chapter = match[2]
    const verseScope = match[3]

    const translatedBookName = bibleIndex[displayLang][bookEngNameToId[book]]
    const verseIds = validateAndCalculateVerseIds(bookEngNameToId[book], chapter, verseScope)
    const versesInMarkdown = getVersesByIds(bookEngNameToId[book], chapter, verseIds)

    if (translatedBookName && chapter !== 'undefined') {
      result = `> <u>${translatedBookName} ${chapter}</u>\n>\n> ${versesInMarkdown}\n`
    } else {
      result = '> <span style="color:red">**(Please select a Book and a Chapter)**</span>'
    }
  }

  return result
}

/**
 * Return text that has both inline-style verses and block-style verses rendered.
 *
 * @param {String} body Multiple lines (separated by '\n') of text with muultiple inline-style/block-style verse specifications.
 * @returns {String} Multiple lines (separated by '\n') with verses rendered.
 */
export function renderAll(body) {
  return body.split('\n')
    .map(e => renderBibleVerses(e))
    .map(e => renderInlineBibleVerses(e))
    .join('\n')
}

/*
  'verseScope' supports '0' as the end index for specifying the last verse in the specified book and chapter.
*/
function validateAndCalculateVerseIds(bookId, chapter, verseScope) {
  const result = []

  verseScope.split(',').forEach(
    e => {
      const expression = e.trim()
      const multiVersesMatch = expression.match(/^([0-9]*)-([0-9]*)$/)  // e.g. '3-22', and '3' will be in group 1 and '22' will be in group 2

      if (multiVersesMatch) {
        const start = parseInt(multiVersesMatch[1])
        var end = parseInt(multiVersesMatch[2])
        end = end === 0 ? getIdOfLastVerse(bookId, chapter) : end

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

/*
  VerseId starts from 1, not 0.
*/
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

function getIdOfLastVerse(bookId, chapter) {
  return Object.keys(bibleVerses[displayLang][displayVersion][bookId][chapter]).length
}
