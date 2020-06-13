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
          {title: 'Safety', value: 'safety'},
          {title: 'Shipping', value: 'shipping'},
        ]
      }
    }
  ]
}