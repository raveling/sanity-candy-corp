export default {
  title: 'Newsletter',
  name: 'newsletter',
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
      title: 'Subscription issue',
      name: 'relatedItems',
      type: 'reference',
      to: [
        {type: 'subscriptionIssue'},
      ]
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
  ]
}