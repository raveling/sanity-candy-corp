export default {
  title: 'Issue variant',
  name: 'issueVariant',
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
      type: 'planSize',
    },
    {
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'productVar'},
          ]
        }
      ]
    },
  ]
}
