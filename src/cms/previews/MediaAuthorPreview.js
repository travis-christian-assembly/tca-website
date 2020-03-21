import { renderAll } from 'components/BibleVerses'
import React from 'react'

const MediaAuthorPreview = ({ entry, fieldsMetaData, widgetFor }) => {
  const showdown = require('showdown')

  const rawMarkdownBody = entry.getIn(['data', 'body'])
  const renderedBody = renderAll(rawMarkdownBody)

  return (
    <div>
      <h2 style={{ 'text-align': 'center' }}>Preview</h2>

      <hr class="solid"/>

      <div dangerouslySetInnerHTML={{ __html: new showdown.Converter().makeHtml(renderedBody) }}/>
    </div>
  )
}

export default MediaAuthorPreview
