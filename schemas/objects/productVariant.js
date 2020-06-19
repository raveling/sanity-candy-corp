export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Size',
      name: 'size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'small'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
          {title: 'Jumbo', value: 'Jumbo'},
        ]
      }
    },
    {
      title: 'Weight (gm)',
      name: 'productWeight',
      type: 'number',
      validation: Rule => Rule.positive()
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.positive().precision(2)
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string'
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Other images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    // {
    //   title: 'Bar code',
    //   name: 'barcode',
    //   type: 'barcode'
    // }
  ]
}
