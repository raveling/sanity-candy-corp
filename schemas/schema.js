// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import Documents
import article from './documents/article'
import category from './documents/category'
import department from './documents/department'
import location from './documents/location'
import page from './documents/page'
import person from './documents/person'
import pet from './documents/pet'
import product from './documents/product'
import productFeature from './documents/productFeature'

// Import Objects
import contact from './objects/contact'
import companion from './objects/companion'
import portableText from './objects/portableText'
import seo from './objects/seo'
import socialMedia from './objects/socialMedia'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Carton Co.',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    
    // Documents
    article,
    category,
    department,
    location,
    page,
    person,
    pet,
    product,
    productFeature,

    // Objects
    companion,
    contact,
    portableText,
    seo,
    socialMedia,
  ])
})
