import 'assets/css/netlify-cms-preview.css'
import BibleVersesEditorComponent from 'cms/editor-components/BibleVersesEditorComponent'
import MediaAuthorPreview from 'cms/previews/MediaAuthorPreview'
import CMS from 'netlify-cms-app'

CMS.registerEditorComponent(BibleVersesEditorComponent)
CMS.registerPreviewTemplate('media', MediaAuthorPreview)
