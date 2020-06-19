export default {
  title: 'Plan size',
  name: 'planSize',
  type: 'object',
  fields: [
    {
      title: 'Size',
      name: 'size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'medium'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
        ]
      }
    }
  ]
}