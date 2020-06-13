export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  fieldsets: [{name: 'attributes', title: 'Attributes',}],
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
      title: 'Product ID',
      name: 'id',
      type: 'slug',
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
    },
    {
      title: 'Additional images',
      name: 'productImages',
      type: 'array',
      of: [
        {
          type: 'image',
        }
      ]
    },
    {
      title: 'Active?',
      name: 'active',
      type: 'boolean',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.positive().precision(2)
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
      title: 'Board type',
      name: 'boardType',
      type: 'string',
      options: {
        list: [
          {title: 'Box board', value: 'box'},
          {title: 'Corrigated: single face', value: 'singleFace'},
          {title: 'Corrigated: single wall', value: 'singleWall'},
          {title: 'Corrigated: double wall', value: 'doubleWall'},
          {title: 'Corrigated: triple wall', value: 'tripleWall'},
        ]
      }
    },
    {
      title: 'Inside Length (cm)',
      name: 'insideLength',
      type: 'number',
      fieldset: 'attributes',
      validation: Rule => Rule.positive().precision(1)
    },
    {
      title: 'Inside Width (cm)',
      name: 'insideWidth',
      type: 'number',
      fieldset: 'attributes',
      validation: Rule => Rule.positive().precision(1)
    },
    {
      title: 'Inside height (cm)',
      name: 'insideHeight',
      type: 'number',
      fieldset: 'attributes',
      validation: Rule => Rule.positive().precision(1)
    },
    {
      title: 'Product weight (gm)',
      name: 'productWeight',
      type: 'number',
      fieldset: 'attributes',
      validation: Rule => Rule.positive()
    },
    {
      title: 'Holding weight capacity (kg)',
      name: 'holdingWeight',
      type: 'number',
      fieldset: 'attributes',
      validation: Rule => Rule.positive().precision(1)
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