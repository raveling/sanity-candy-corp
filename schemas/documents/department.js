export default {
  title: 'Department',
  name: 'department',
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
      title: 'Department Head',
      name: 'departmentHead',
      type: 'reference',
      to: [
        {type: 'person'},
      ]
    },
    {
      title: 'Parent Department',
      name: 'parentDepartment',
      type: 'reference',
      to: [
        {type: 'department'},
      ]
    }
  ]
}