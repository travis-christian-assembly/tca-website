import speakers from 'data/speakers.json'
import mediaCategories from 'data/media/categories.json'
import newsCategories from 'data/news/categories.json'
import config from 'root/config'

const speakerOptions = speakers.map(e => ({ label: e.name, value: e.id }))
const mediaCategoryOptions = mediaCategories.map(e => ({ label: e.lang[config.siteDisplayLang], value: e.id }))
const newsCategoryOptions = newsCategories.map(e => ({ label: e.lang[config.siteDisplayLang], value: e.id }))

export const netlifyCmsConfig = {
  config: {
    load_config_file: false,
    locale: 'en',
    media_folder: 'static/assets',
    public_folder: '/assets',
    slug: { sanitize_replacement: '_' },
    backend: {
      name: 'github',
      repo: config.cmsBackendGitHubRepo
    },
    collections: [
      {
        create: true,
        folder: 'data/media',
        label: 'Media',
        name: 'media',
        slug: '{{year}}{{month}}{{day}}_{{title}}',
        fields: [
          {
            default: 'media',
            label: 'Type',
            name: 'type',
            widget: 'hidden'
          },
          {
            label: 'Title',
            name: 'title'
          },
          {
            dateFormat: 'MM/DD/YYYY',
            format: 'YYYYMMDD',
            label: 'Event Date',
            name: 'date',
            timeFormat: false,
            widget: 'datetime'
          },
          {
            hint: '* Supports multiple selections',
            label: 'Categories',
            min: 1,
            multiple: true,
            name: 'categories',
            widget: 'select',
            options: mediaCategoryOptions
          },
          {
            hint: '* Supports multiple selections',
            label: 'Speakers',
            min: 1,
            multiple: true,
            name: 'speakers',
            options: speakerOptions,
            widget: 'select'
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'markdown'
          }
        ]
      },
      {
        create: true,
        folder: 'data/news',
        label: 'News',
        name: 'news',
        slug: '{{year}}{{month}}{{day}}_{{title}}',
        fields: [
          {
            default: 'news',
            label: 'Type',
            name: 'type',
            widget: 'hidden'
          },
          {
            label: 'Title',
            name: 'title'
          },
          {
            dateFormat: 'MM/DD/YYYY',
            format: 'YYYYMMDD',
            label: 'News Date',
            name: 'date',
            timeFormat: false,
            widget: 'datetime'
          },
          {
            hint: '* Supports multiple selections',
            label: 'Categories',
            min: 1,
            multiple: true,
            name: 'categories',
            widget: 'select',
            options: newsCategoryOptions
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'markdown'
          }
        ]
      }
    ]
  }
}
