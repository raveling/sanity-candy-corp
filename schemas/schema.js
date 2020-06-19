// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import Documents
import article from './documents/article'
import category from './documents/category'
import department from './documents/department'
import location from './documents/location'
import newsletter from './documents/newsletter'
import page from './documents/page'
import person from './documents/person'
import pet from './documents/pet'
import product from './documents/product'
import productVar from './documents/productVar'
import productFeature from './documents/productFeature'
import role from './documents/role'
import subscriptionIssue from './documents/subscriptionIssue'
import subscriptionPlan from './documents/subscriptionPlan'

// Import Objects
import contact from './objects/contact'
import companion from './objects/companion'
import issueVariant from './objects/issueVariant'
import planSize from './objects/planSize'
import portableText from './objects/portableText'
import productVariant from './objects/productVariant'
import seo from './objects/seo'
import socialMedia from './objects/socialMedia'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Candy Corp.',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    
    // Documents
    article,
    category,
    department,
    location,
    newsletter,
    page,
    person,
    pet,
    product,
    productVar,
    productFeature,
    role,
    subscriptionIssue,
    subscriptionPlan,

    // Objects
    companion,
    contact,
    issueVariant,
    planSize,
    portableText,
    productVariant,
    seo,
    socialMedia,
  ])
})
