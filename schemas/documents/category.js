export default {
  title: 'Category',
  name: 'category',
  type: 'document',
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
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      title: 'Description',
      name: 'description',
      type: 'portableText',
    }
  ]
}