export default {
  title: 'Contact Info',
  name: 'contact',
  type: 'object',
  fieldsets: [{name: 'address', title: 'Address',}],
  fields: [
    {
      title: 'Email ',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Mobile phone',
      name: 'mobilePhone',
      type: 'string',
    },
    {
      title: 'Office phone',
      name: 'officePhone',
      type: 'string',
    },
    {
      title: 'Social Media',
      name: 'socialMedia',
      type: 'socialMedia',
    },
    {
      title: 'Street + Number ',
      name: 'street',
      type: 'string',
      fieldset: 'address',
    },
    {
      title: 'City ',
      name: 'city',
      type: 'string',
      fieldset: 'address',
    },
    {
      title: 'State / Province ',
      name: 'state',
      type: 'string',
      fieldset: 'address',
    },
    {
      title: 'Postcode / Zip',
      name: 'postcode',
      type: 'string',
      fieldset: 'address',
    },
    {
      title: 'Country',
      name: 'country',
      type: 'string',
      fieldset: 'address',
      options: {
        list: [
          {title: 'United Kingdom', value: 'uk'},
          {title: 'France', value: 'fr'},
          {title: 'Norway', value: 'no'},
          {title: 'Germany', value: 'de'},
        ]
      }
    },
  ]
}