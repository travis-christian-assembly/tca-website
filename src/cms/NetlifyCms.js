import { netlifyCmsConfig } from 'cms/config'
import 'assets/css/netlify-cms-preview.css'
import BibleVersesEditorComponent from 'cms/editor-components/BibleVersesEditorComponent'
import MediaAuthorPreview from 'cms/previews/MediaAuthorPreview'
import CMS, { init } from 'netlify-cms-app'

init(netlifyCmsConfig)

CMS.registerEditorComponent(BibleVersesEditorComponent)
CMS.registerPreviewTemplate('media', MediaAuthorPreview)
