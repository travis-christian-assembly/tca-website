import _ from 'lodash'
import queryString from 'query-string'
import config from 'root/config'

/**
 * Parse the page number from the query parameters and return it. It defaults to '1' if the page number is not specified in the query parameters.
 *
 * @param {Location} location An instance of the Location interface that represents the location (URL) of the object it is linked to.
 * @returns {number} The desired page number, defaulting to 1 if nothing is specified. Page number always starts from 1.
 */
export function getPageNumber(location) {
  const queryParams = queryString.parse(location.search)
  const page = Object.keys(queryParams).includes('page') ? queryParams['page'] : '1'
  return parseInt(page)
}

/**
 * Calculate and return the page number of the last page, based on the given list of elements.
 *
 * @param {Array} elements A list of elements to calculate the last page for.
 * @returns {number} Page number of the last page, defaulting to 1 if nothing is specified. Page number always starts from 1.
 */
export function getLastPageNumber(elements) {
  return Math.ceil(elements.length / config.siteMaxPageSize)
}

/**
 * Given a list of elements and the desired page number, return the elements for the desired page.
 *
 * Note: The list of elements is assumed sorted, thus the calculated page honors the order of the specified list.
 *
 * @param {Array} elements A sorted list of elements. The list order will be honored when calculating the desired page of elements.
 * @param {number} pageNumber A number representing the desired page for display. Page number always starts from 1.
 * @returns {Array} The desired page of elements.
 */
export function calculateSinglePageFromAll(elements, pageNumber) {
  const maxPages = getLastPageNumber(elements)
  const pageIndex = Math.min(maxPages, pageNumber) - 1  // If specified 'pageNumber' does not exist, return content of the last page.
  const result = _.chunk(elements, config.siteMaxPageSize)[pageIndex]
  return result
}

/**
 * Given a page number representing the current page, and a page number representing the last page, return a list of page numbers that should be displayed for
 * page navigation.
 *
 * Note: The result also takes care of rendering the indicator of go-to-previous (as 'Previous'), go-to-next (as 'Next'), go-to-first (as 'First') and go-to-last
 *       (as 'Last').
 *
 * @param {array} elements A sorted list of elements. The list order will be honored when calculating the desired page of elements.
 * @param {number} lastPageNumber The known page number of the last page.
 * @returns {Array} The list of page numbers to display for page navigation. The result also takes care of rendering the indicator of go-to-previous (as
 *                  'Previous'), go-to-next (as 'Next'), go-to-first (as 'First') and go-to-last (as 'Last').
 */
export function calculatePageNumbersForNav(currentPageNumber, lastPageNumber) {
  const guessedStart = currentPageNumber - config.siteMaxPageNavRange / 2
  const hasReachedFirst = guessedStart <= 1
  const realStart = hasReachedFirst ? 1 : guessedStart

  const guessedEnd = realStart + config.siteMaxPageNavRange - 1
  const hasReachedLast = guessedEnd >= lastPageNumber ? true : false
  const realEnd = hasReachedLast ? lastPageNumber : guessedEnd

  var result = _.range(realStart, realEnd + 1)
  result = hasReachedFirst ? result : _.concat('First', 'Previous', result)  // Indicate to render a go-to-first and a go-to-previous.
  result = hasReachedLast ? result : _.concat(result, 'Next', 'Last')  // // Indicate to render a go-to-next and a go-to-last.

  return result
}
