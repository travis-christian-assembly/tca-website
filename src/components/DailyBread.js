import audioIndex from 'assets/daily-bread/audio_index.json'
import scriptureIndex from 'assets/daily-bread/scriptures.json'
import { renderAll } from 'components/BibleVerses'
import Moment from 'moment'
import config from 'root/config'

/**
 * Given a date, return the index (as for which day in a 365-day year) of the desired Daily Bread entry.
 *
 * Notes:
 *   * The returned index starts from 0.
 *   * There are exactly 365 entries of Daily Bread. For a year with 366 days, when the specified date is Februrary 29th, the returned result is -1.
 *
 * @param {Date} date A Date instance.
 * @returns {number} The index (as for which day in a 365-day year) of the desired Daily Bread entry. The returned index starts from 0, and will be -1 if the
 *                   specified date is Februrary 29th.
 */
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

/**
 * Return the scripture in Markdown for the specified day in a 365-day year.
 *
 * @param {number} dayIndex The index (as for which day in a 365-day year) of the desired Daily Bread entry.
 * @returns {String} Scripture (in Markdown) for the specified day.
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

/**
 * Return the URL to the audio file for the specified day in a 365-day year.
 *
 * @param {number} dayIndex The index (as for which day in a 365-day year) of the desired Daily Bread entry.
 * @returns {String} URL to the audio file for the specified day.
 */
export function getAudioUrl(dayIndex) {
  return `${config.dailyBreadContentDomain}${audioIndex['by_day'][dayIndex]}`
}
