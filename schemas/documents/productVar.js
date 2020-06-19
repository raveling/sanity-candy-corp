export default {
  title: 'Product Var',
  name: 'productVar',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Parent',
      name: 'parent',
      type: 'reference',
      to: [
        {type: 'product'},
      ]
    }
  ]
}