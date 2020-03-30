import audioIndex from 'assets/daily-bread/audio_index.json'
import scriptureIndex from 'assets/daily-bread/scriptures.json'
import { renderAll } from 'components/BibleVerses'
import Moment from 'moment'

export function getDayIndexByDate(date) {
  const moment = Moment(date)
  const monthOfYear = moment.month()
  const dayOfMonth = moment.date()

  // If it's Februrary 29th, return -1 as there is no Daily Bread content for 02/29.
  if (monthOfYear === 1 && dayOfMonth === 29) {
    // 'monthOfYear' starts from 0 whilst 'dayOfMonth' starts from 1
    return -1
  }

  // Use any year that does not have Februrary 29th to calculate the normalized day of year
  const normalizedDayOfYear = Moment().year(2001).month(monthOfYear).date(dayOfMonth).dayOfYear() - 1

  return normalizedDayOfYear
}

/*
  'dayIndex' specifies which day of the year it is, for rendering the scriptures for Daily Bread.

  Note: 'dayIndex' starts from 0.
*/
export function renderScriptures(dayIndex) {
  const scriptures = scriptureIndex['by_day'][dayIndex]
    .map(
      e => {
        const verseStartIndex = e[2] === null ? 1 : e[2]
        const verseEndIndex = e[3] === null ? 0 : e[3]
        return `$bible_verses book='${e[0]}', chapter='${e[1]}', verses='${verseStartIndex}-${verseEndIndex}'$`
      }
    )
    .join('\n')

  const result = renderAll(scriptures)

  return result
}

export function getAudioUrl(dayIndex) {
  return audioIndex['by_day'][dayIndex]
}
