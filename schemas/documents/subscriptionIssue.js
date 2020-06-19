export default {
  title: 'Subscription issue',
  name: 'subscriptionIssue',
  type: 'document',
  fields: [
    {
      title: 'Month',
      name: 'month',
      type: 'string',
      options: {
        list: [
          {title: 'January', value: 'jan'},
          {title: 'February', value: 'feb'},
        ]
      }
    },
    {
      title: 'Year',
      name: 'year',
      type: 'string',
      options: {
        list: [
          {title: '2020', value: '2020'},
          {title: '2021', value: '2021'},
        ]
      }
    },
    {
      title: 'Variations',
      name: 'variations',
      type: 'array',
      of: [
        {
          title: 'Issue variation',
          type: 'issueVariant'
        }
      ]
    },
  ]
}