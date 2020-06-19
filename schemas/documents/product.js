export default {
  title: 'Product',
  name: 'product',
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
      title: 'Categories',
      name: 'category',
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
      title: 'Default variation',
      name: 'defaultProductVariant',
      type: 'productVariant'
    },
    {
      title: 'Other variations',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant'
        }
      ]
    },
    {
      title: 'Other variations 2',
      name: 'variants2',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVar'
        }
      ]
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'productFeature'},
          ]
        }
      ]
    }
  ]
}