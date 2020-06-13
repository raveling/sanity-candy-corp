export default {
  title: 'Pet',
  name: 'pet',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Species',
      name: 'species',
      type: 'string',
    },
    {
      title: 'Special ability',
      name: 'specialAbility',
      type: 'text',
    },
    {
      title: 'Companions',
      name: 'companions',
      type: 'array',
      of: [
        {type: 'companion',}
      ]
    },
    {
      title: 'Favorite product',
      name: 'favoriteProduct',
      type: 'reference',
      to: [
        {type: 'product'},
      ],
    },
  ]
}