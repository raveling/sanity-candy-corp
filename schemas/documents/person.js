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
    //
    // Need to figure out whether or not person contains customers and staff
    //
    {
      title: 'Role',
      name: 'role',
      type: 'reference',
      to: [
        {type: 'role'},
      ]
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