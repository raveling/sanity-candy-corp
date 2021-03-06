export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        auto: true
      }
    },
    {
      title: 'Publication date',
      name: 'publishDate',
      type: 'datetime',
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    },
    {
      title: 'Authors',
      name: 'authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'},
          ]
        }
      ]
    },
    {
      title: 'Content',
      name: 'content',
      type: 'portableText',
    },
    {
      title: 'Related Items',
      name: 'relatedItems',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'article'},
            {type: 'product'},
          ]
        }
      ]
    },
  ]
}