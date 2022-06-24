// First, we must import the schema creator
// @ts-ignore
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
// @ts-ignore
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import developer from './documents/developer';
import plan from './documents/plan';
import game from './documents/game';

// Module types

// We don't have any modules at this point. See this for inspiration:
// https://github.com/ndimatteo/HULL/tree/main/studio/schemas/modules

// Object types
import portableComplex from './objects/portableComplex';
import price from './objects/price';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    developer,
    plan,
    game,
    price,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    portableComplex,
  ]),
});
