import { language } from 'components/Language'
import speakers from 'data/speakers.json'
import _ from 'lodash'

/**
 * Given a list of speakers (identified by SpeakerId), return the rendered display text.
 *
 * @param {Array} input A list of speakers by ID's.
 * @returns {String} The rendered display text for the specified Speakers.
 */
export function renderSpeakers(input) {
  const speakerMap = {}
  speakers.forEach(e => { speakerMap[e.id] = `${e.name}${e.title}` })

  var renderedSpeakers = ''
  if (!_.isEmpty(input)) {
    renderedSpeakers = `${language().speakerLinePrefix}${input.map(s => speakerMap[s]).join(language().speakerDelimiter)}`
  }

  return renderedSpeakers
}
