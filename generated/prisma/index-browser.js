
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AgentsScalarFieldEnum = {
  id: 'id',
  agent_name: 'agent_name',
  password: 'password',
  role: 'role'
};

exports.Prisma.ClientsScalarFieldEnum = {
  id: 'id',
  client_name: 'client_name',
  password: 'password',
  phone_number: 'phone_number',
  city: 'city'
};

exports.Prisma.MaterialsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  date_added: 'date_added',
  agent_id: 'agent_id'
};

exports.Prisma.CategoriesOfMaterialsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  image: 'image',
  material_id: 'material_id',
  parent_id: 'parent_id'
};

exports.Prisma.CategoriesDetailsScalarFieldEnum = {
  id: 'id',
  It_detail_name: 'It_detail_name',
  code: 'code',
  dimensions: 'dimensions',
  total: 'total',
  rest: 'rest',
  remaining: 'remaining',
  category_material_id: 'category_material_id'
};

exports.Prisma.OrdersScalarFieldEnum = {
  id: 'id',
  client_id: 'client_id',
  agent_id: 'agent_id',
  order_date: 'order_date',
  order_status: 'order_status',
  order: 'order'
};

exports.Prisma.OrderDetailsScalarFieldEnum = {
  id: 'id',
  categories_detail_id: 'categories_detail_id',
  count: 'count',
  price: 'price',
  order_id: 'order_id'
};

exports.Prisma.NotificationsAndNotesScalarFieldEnum = {
  id: 'id',
  client_id: 'client_id',
  agent_id: 'agent_id',
  title: 'title',
  body: 'body',
  Notice_Date: 'Notice_Date'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.AgentsOrderByRelevanceFieldEnum = {
  agent_name: 'agent_name',
  password: 'password',
  role: 'role'
};

exports.Prisma.ClientsOrderByRelevanceFieldEnum = {
  client_name: 'client_name',
  password: 'password',
  phone_number: 'phone_number',
  city: 'city'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.MaterialsOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.CategoriesOfMaterialsOrderByRelevanceFieldEnum = {
  name: 'name',
  image: 'image'
};

exports.Prisma.CategoriesDetailsOrderByRelevanceFieldEnum = {
  It_detail_name: 'It_detail_name',
  code: 'code',
  dimensions: 'dimensions'
};

exports.Prisma.OrdersOrderByRelevanceFieldEnum = {
  order_status: 'order_status',
  order: 'order'
};

exports.Prisma.NotificationsAndNotesOrderByRelevanceFieldEnum = {
  title: 'title',
  body: 'body'
};


exports.Prisma.ModelName = {
  Agents: 'Agents',
  Clients: 'Clients',
  Materials: 'Materials',
  CategoriesOfMaterials: 'CategoriesOfMaterials',
  CategoriesDetails: 'CategoriesDetails',
  Orders: 'Orders',
  OrderDetails: 'OrderDetails',
  NotificationsAndNotes: 'NotificationsAndNotes'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
