export default {
  title: 'Subscription plan',
  name: 'subscriptionPlan',
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
        maxLength: 96,
        auto: true
      }
    },
    {
      title: 'Active?',
      name: 'active',
      type: 'boolean',
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'text',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
    },
    {
      title: 'Size',
      name: 'size',
      type: 'planSize',
    },
    {
      title: 'Frequency',
      name: 'frequency',
      type: 'string',
      options: {
        list: [
          {title: 'Monthly', value: 'monthly'},
          {title: 'Quarterly', value: 'quarterly'},
        ]
      }
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.positive().precision(2)
    }
  ]
}