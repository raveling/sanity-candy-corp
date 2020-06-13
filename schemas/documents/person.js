export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
    },
    {
      title: 'Department',
      name: 'department',
      type: 'reference',
      to: [
        {type: 'department'},
      ]
    },
    {
      title: 'Location',
      name: 'location',
      type: 'reference',
      to: [
        {type: 'location'},
      ]
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
    },
    {
      title: 'Active?',
      name: 'active',
      type: 'boolean',
    },
    {
      title: 'Contact details',
      name: 'contact',
      type: 'contact',
    }
  ]
}