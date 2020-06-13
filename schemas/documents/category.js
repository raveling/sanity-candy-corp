export default {
  title: 'Category',
  name: 'category',
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
      title: 'Availability',
      name: 'availability',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Article', value: 'article'},
          {title: 'Product', value: 'product'}
        ]
      }
    },
    {
      title: 'Content',
      name: 'content',
      type: 'portableText',
    }
  ]
}