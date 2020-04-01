import { lang } from 'components/lang'
import config from 'root/config'

export function language() {
  return lang[config.siteDisplayLang]
}
