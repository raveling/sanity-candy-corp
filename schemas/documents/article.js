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
      title: 'Subtitle',
      name: 'subTitle',
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
      title: 'Hidden?',
      name: 'hidden',
      type: 'boolean',
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
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'category'},
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