import BibleVersesEditorComponent from 'cms/editor-components/BibleVersesEditorComponent'
import MediaAuthorPreview from 'cms/previews/MediaAuthorPreview'
import CMS from 'netlify-cms-app'
import 'assets/css/netlify-cms-preview.css'

CMS.registerEditorComponent(BibleVersesEditorComponent)
CMS.registerPreviewTemplate('media', MediaAuthorPreview)
