export default {
  title: 'Companion',
  name: 'companion',
  type: 'object',
  fields: [
    {
      title: 'Companion',
      name: 'companion',
      type: 'reference',
      to: [
        {type: 'person'},
        {type: 'pet'},
      ],
    },
    {
      title: 'Relationship',
      name: 'relationship',
      type: 'string',
    }
  ]
}