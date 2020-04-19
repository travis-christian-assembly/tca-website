import { netlifyCmsConfig } from 'cms/config'
import 'assets/css/netlify-cms-preview.css'
import BibleVersesEditorComponent from 'cms/editor-components/BibleVersesEditorComponent'
import DefaultAuthorPreview from 'cms/previews/DefaultAuthorPreview'
import CMS, { init } from 'netlify-cms-app'

init(netlifyCmsConfig)

CMS.registerEditorComponent(BibleVersesEditorComponent)
CMS.registerPreviewTemplate('media', DefaultAuthorPreview)
CMS.registerPreviewTemplate('news', DefaultAuthorPreview)
CMS.registerPreviewTemplate('programSheet', DefaultAuthorPreview)
