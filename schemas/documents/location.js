export default {
  title: 'Location',
  name: 'location',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Location roles',
      name: 'locationRole',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Administration', value: 'administration'},
          {title: 'Warehouse', value: 'warehouse'},
        ]
      }
    },
    {
      title: 'Contact details',
      name: 'contact',
      type: 'contact',
    }
  ]
}