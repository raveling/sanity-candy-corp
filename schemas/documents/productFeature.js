export default {
  title: 'Product Feature',
  name: 'productFeature',
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
      title: 'Summary',
      name: 'summary',
      type: 'string',
    },
    {
      title: 'Feature type',
      name: 'featureType',
      type: 'string',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Health', value: 'health'},
          {title: 'Warning', value: 'warning'},
          {title: 'Promotion', value: 'promotion'},
        ]
      }
    }
  ]
}