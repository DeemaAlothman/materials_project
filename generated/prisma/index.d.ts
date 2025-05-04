
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Agents
 * 
 */
export type Agents = $Result.DefaultSelection<Prisma.$AgentsPayload>
/**
 * Model Clients
 * 
 */
export type Clients = $Result.DefaultSelection<Prisma.$ClientsPayload>
/**
 * Model Materials
 * 
 */
export type Materials = $Result.DefaultSelection<Prisma.$MaterialsPayload>
/**
 * Model CategoriesOfMaterials
 * 
 */
export type CategoriesOfMaterials = $Result.DefaultSelection<Prisma.$CategoriesOfMaterialsPayload>
/**
 * Model CategoriesDetails
 * 
 */
export type CategoriesDetails = $Result.DefaultSelection<Prisma.$CategoriesDetailsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderDetails
 * 
 */
export type OrderDetails = $Result.DefaultSelection<Prisma.$OrderDetailsPayload>
/**
 * Model NotificationsAndNotes
 * 
 */
export type NotificationsAndNotes = $Result.DefaultSelection<Prisma.$NotificationsAndNotesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agents
 * const agents = await prisma.agents.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agents
   * const agents = await prisma.agents.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.agents`: Exposes CRUD operations for the **Agents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agents.findMany()
    * ```
    */
  get agents(): Prisma.AgentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **Clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.ClientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materials`: Exposes CRUD operations for the **Materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.materials.findMany()
    * ```
    */
  get materials(): Prisma.MaterialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoriesOfMaterials`: Exposes CRUD operations for the **CategoriesOfMaterials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriesOfMaterials
    * const categoriesOfMaterials = await prisma.categoriesOfMaterials.findMany()
    * ```
    */
  get categoriesOfMaterials(): Prisma.CategoriesOfMaterialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoriesDetails`: Exposes CRUD operations for the **CategoriesDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriesDetails
    * const categoriesDetails = await prisma.categoriesDetails.findMany()
    * ```
    */
  get categoriesDetails(): Prisma.CategoriesDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDetails`: Exposes CRUD operations for the **OrderDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetails.findMany()
    * ```
    */
  get orderDetails(): Prisma.OrderDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationsAndNotes`: Exposes CRUD operations for the **NotificationsAndNotes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationsAndNotes
    * const notificationsAndNotes = await prisma.notificationsAndNotes.findMany()
    * ```
    */
  get notificationsAndNotes(): Prisma.NotificationsAndNotesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Agents: 'Agents',
    Clients: 'Clients',
    Materials: 'Materials',
    CategoriesOfMaterials: 'CategoriesOfMaterials',
    CategoriesDetails: 'CategoriesDetails',
    Orders: 'Orders',
    OrderDetails: 'OrderDetails',
    NotificationsAndNotes: 'NotificationsAndNotes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "agents" | "clients" | "materials" | "categoriesOfMaterials" | "categoriesDetails" | "orders" | "orderDetails" | "notificationsAndNotes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Agents: {
        payload: Prisma.$AgentsPayload<ExtArgs>
        fields: Prisma.AgentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          findFirst: {
            args: Prisma.AgentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          findMany: {
            args: Prisma.AgentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>[]
          }
          create: {
            args: Prisma.AgentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          createMany: {
            args: Prisma.AgentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AgentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          update: {
            args: Prisma.AgentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          deleteMany: {
            args: Prisma.AgentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentsPayload>
          }
          aggregate: {
            args: Prisma.AgentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgents>
          }
          groupBy: {
            args: Prisma.AgentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentsCountArgs<ExtArgs>
            result: $Utils.Optional<AgentsCountAggregateOutputType> | number
          }
        }
      }
      Clients: {
        payload: Prisma.$ClientsPayload<ExtArgs>
        fields: Prisma.ClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findFirst: {
            args: Prisma.ClientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findMany: {
            args: Prisma.ClientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          create: {
            args: Prisma.ClientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          createMany: {
            args: Prisma.ClientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          update: {
            args: Prisma.ClientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.ClientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      Materials: {
        payload: Prisma.$MaterialsPayload<ExtArgs>
        fields: Prisma.MaterialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          findFirst: {
            args: Prisma.MaterialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          findMany: {
            args: Prisma.MaterialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>[]
          }
          create: {
            args: Prisma.MaterialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          createMany: {
            args: Prisma.MaterialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaterialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          update: {
            args: Prisma.MaterialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          deleteMany: {
            args: Prisma.MaterialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          aggregate: {
            args: Prisma.MaterialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterials>
          }
          groupBy: {
            args: Prisma.MaterialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialsCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialsCountAggregateOutputType> | number
          }
        }
      }
      CategoriesOfMaterials: {
        payload: Prisma.$CategoriesOfMaterialsPayload<ExtArgs>
        fields: Prisma.CategoriesOfMaterialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesOfMaterialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOfMaterialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesOfMaterialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOfMaterialsPayload>
          }
          findFirst: {
            args: Prisma.CategoriesOfMaterialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOfMaterialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesOfMaterialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOfMaterialsPayload>
          }
          findMany: {
            args: Prisma.CategoriesOfMaterialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOfMaterialsPayload>[]
          }
          create: {
            args: Prisma.CategoriesOfMaterialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOfMaterialsPayload>
          }
          createMany: {
            args: Prisma.CategoriesOfMaterialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesOfMaterialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOfMaterialsPayload>
          }
          update: {
            args: Prisma.CategoriesOfMaterialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOfMaterialsPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesOfMaterialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesOfMaterialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesOfMaterialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOfMaterialsPayload>
          }
          aggregate: {
            args: Prisma.CategoriesOfMaterialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoriesOfMaterials>
          }
          groupBy: {
            args: Prisma.CategoriesOfMaterialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesOfMaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesOfMaterialsCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesOfMaterialsCountAggregateOutputType> | number
          }
        }
      }
      CategoriesDetails: {
        payload: Prisma.$CategoriesDetailsPayload<ExtArgs>
        fields: Prisma.CategoriesDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesDetailsPayload>
          }
          findFirst: {
            args: Prisma.CategoriesDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesDetailsPayload>
          }
          findMany: {
            args: Prisma.CategoriesDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesDetailsPayload>[]
          }
          create: {
            args: Prisma.CategoriesDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesDetailsPayload>
          }
          createMany: {
            args: Prisma.CategoriesDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesDetailsPayload>
          }
          update: {
            args: Prisma.CategoriesDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesDetailsPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesDetailsPayload>
          }
          aggregate: {
            args: Prisma.CategoriesDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoriesDetails>
          }
          groupBy: {
            args: Prisma.CategoriesDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesDetailsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderDetails: {
        payload: Prisma.$OrderDetailsPayload<ExtArgs>
        fields: Prisma.OrderDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findMany: {
            args: Prisma.OrderDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          create: {
            args: Prisma.OrderDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          createMany: {
            args: Prisma.OrderDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          update: {
            args: Prisma.OrderDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetails>
          }
          groupBy: {
            args: Prisma.OrderDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsCountAggregateOutputType> | number
          }
        }
      }
      NotificationsAndNotes: {
        payload: Prisma.$NotificationsAndNotesPayload<ExtArgs>
        fields: Prisma.NotificationsAndNotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsAndNotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsAndNotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsAndNotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsAndNotesPayload>
          }
          findFirst: {
            args: Prisma.NotificationsAndNotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsAndNotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsAndNotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsAndNotesPayload>
          }
          findMany: {
            args: Prisma.NotificationsAndNotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsAndNotesPayload>[]
          }
          create: {
            args: Prisma.NotificationsAndNotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsAndNotesPayload>
          }
          createMany: {
            args: Prisma.NotificationsAndNotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationsAndNotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsAndNotesPayload>
          }
          update: {
            args: Prisma.NotificationsAndNotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsAndNotesPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsAndNotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsAndNotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationsAndNotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsAndNotesPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAndNotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationsAndNotes>
          }
          groupBy: {
            args: Prisma.NotificationsAndNotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsAndNotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsAndNotesCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsAndNotesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    agents?: AgentsOmit
    clients?: ClientsOmit
    materials?: MaterialsOmit
    categoriesOfMaterials?: CategoriesOfMaterialsOmit
    categoriesDetails?: CategoriesDetailsOmit
    orders?: OrdersOmit
    orderDetails?: OrderDetailsOmit
    notificationsAndNotes?: NotificationsAndNotesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AgentsCountOutputType
   */

  export type AgentsCountOutputType = {
    materials: number
    orders: number
    notifications_and_notes: number
  }

  export type AgentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | AgentsCountOutputTypeCountMaterialsArgs
    orders?: boolean | AgentsCountOutputTypeCountOrdersArgs
    notifications_and_notes?: boolean | AgentsCountOutputTypeCountNotifications_and_notesArgs
  }

  // Custom InputTypes
  /**
   * AgentsCountOutputType without action
   */
  export type AgentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentsCountOutputType
     */
    select?: AgentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentsCountOutputType without action
   */
  export type AgentsCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialsWhereInput
  }

  /**
   * AgentsCountOutputType without action
   */
  export type AgentsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * AgentsCountOutputType without action
   */
  export type AgentsCountOutputTypeCountNotifications_and_notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsAndNotesWhereInput
  }


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    orders: number
    notifications_and_notes: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ClientsCountOutputTypeCountOrdersArgs
    notifications_and_notes?: boolean | ClientsCountOutputTypeCountNotifications_and_notesArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountNotifications_and_notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsAndNotesWhereInput
  }


  /**
   * Count Type MaterialsCountOutputType
   */

  export type MaterialsCountOutputType = {
    categories_of_materials: number
  }

  export type MaterialsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_of_materials?: boolean | MaterialsCountOutputTypeCountCategories_of_materialsArgs
  }

  // Custom InputTypes
  /**
   * MaterialsCountOutputType without action
   */
  export type MaterialsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialsCountOutputType
     */
    select?: MaterialsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialsCountOutputType without action
   */
  export type MaterialsCountOutputTypeCountCategories_of_materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesOfMaterialsWhereInput
  }


  /**
   * Count Type CategoriesOfMaterialsCountOutputType
   */

  export type CategoriesOfMaterialsCountOutputType = {
    categories_details: number
  }

  export type CategoriesOfMaterialsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_details?: boolean | CategoriesOfMaterialsCountOutputTypeCountCategories_detailsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesOfMaterialsCountOutputType without action
   */
  export type CategoriesOfMaterialsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterialsCountOutputType
     */
    select?: CategoriesOfMaterialsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesOfMaterialsCountOutputType without action
   */
  export type CategoriesOfMaterialsCountOutputTypeCountCategories_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesDetailsWhereInput
  }


  /**
   * Count Type CategoriesDetailsCountOutputType
   */

  export type CategoriesDetailsCountOutputType = {
    order_details: number
  }

  export type CategoriesDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | CategoriesDetailsCountOutputTypeCountOrder_detailsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesDetailsCountOutputType without action
   */
  export type CategoriesDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetailsCountOutputType
     */
    select?: CategoriesDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesDetailsCountOutputType without action
   */
  export type CategoriesDetailsCountOutputTypeCountOrder_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_details: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | OrdersCountOutputTypeCountOrder_detailsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Agents
   */

  export type AggregateAgents = {
    _count: AgentsCountAggregateOutputType | null
    _avg: AgentsAvgAggregateOutputType | null
    _sum: AgentsSumAggregateOutputType | null
    _min: AgentsMinAggregateOutputType | null
    _max: AgentsMaxAggregateOutputType | null
  }

  export type AgentsAvgAggregateOutputType = {
    id: number | null
  }

  export type AgentsSumAggregateOutputType = {
    id: number | null
  }

  export type AgentsMinAggregateOutputType = {
    id: number | null
    agent_name: string | null
    password: string | null
    role: string | null
  }

  export type AgentsMaxAggregateOutputType = {
    id: number | null
    agent_name: string | null
    password: string | null
    role: string | null
  }

  export type AgentsCountAggregateOutputType = {
    id: number
    agent_name: number
    password: number
    role: number
    _all: number
  }


  export type AgentsAvgAggregateInputType = {
    id?: true
  }

  export type AgentsSumAggregateInputType = {
    id?: true
  }

  export type AgentsMinAggregateInputType = {
    id?: true
    agent_name?: true
    password?: true
    role?: true
  }

  export type AgentsMaxAggregateInputType = {
    id?: true
    agent_name?: true
    password?: true
    role?: true
  }

  export type AgentsCountAggregateInputType = {
    id?: true
    agent_name?: true
    password?: true
    role?: true
    _all?: true
  }

  export type AgentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to aggregate.
     */
    where?: AgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentsOrderByWithRelationInput | AgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentsMaxAggregateInputType
  }

  export type GetAgentsAggregateType<T extends AgentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAgents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgents[P]>
      : GetScalarType<T[P], AggregateAgents[P]>
  }




  export type AgentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentsWhereInput
    orderBy?: AgentsOrderByWithAggregationInput | AgentsOrderByWithAggregationInput[]
    by: AgentsScalarFieldEnum[] | AgentsScalarFieldEnum
    having?: AgentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentsCountAggregateInputType | true
    _avg?: AgentsAvgAggregateInputType
    _sum?: AgentsSumAggregateInputType
    _min?: AgentsMinAggregateInputType
    _max?: AgentsMaxAggregateInputType
  }

  export type AgentsGroupByOutputType = {
    id: number
    agent_name: string
    password: string
    role: string
    _count: AgentsCountAggregateOutputType | null
    _avg: AgentsAvgAggregateOutputType | null
    _sum: AgentsSumAggregateOutputType | null
    _min: AgentsMinAggregateOutputType | null
    _max: AgentsMaxAggregateOutputType | null
  }

  type GetAgentsGroupByPayload<T extends AgentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentsGroupByOutputType[P]>
            : GetScalarType<T[P], AgentsGroupByOutputType[P]>
        }
      >
    >


  export type AgentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agent_name?: boolean
    password?: boolean
    role?: boolean
    materials?: boolean | Agents$materialsArgs<ExtArgs>
    orders?: boolean | Agents$ordersArgs<ExtArgs>
    notifications_and_notes?: boolean | Agents$notifications_and_notesArgs<ExtArgs>
    _count?: boolean | AgentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agents"]>



  export type AgentsSelectScalar = {
    id?: boolean
    agent_name?: boolean
    password?: boolean
    role?: boolean
  }

  export type AgentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agent_name" | "password" | "role", ExtArgs["result"]["agents"]>
  export type AgentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | Agents$materialsArgs<ExtArgs>
    orders?: boolean | Agents$ordersArgs<ExtArgs>
    notifications_and_notes?: boolean | Agents$notifications_and_notesArgs<ExtArgs>
    _count?: boolean | AgentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AgentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agents"
    objects: {
      materials: Prisma.$MaterialsPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      notifications_and_notes: Prisma.$NotificationsAndNotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agent_name: string
      password: string
      role: string
    }, ExtArgs["result"]["agents"]>
    composites: {}
  }

  type AgentsGetPayload<S extends boolean | null | undefined | AgentsDefaultArgs> = $Result.GetResult<Prisma.$AgentsPayload, S>

  type AgentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentsCountAggregateInputType | true
    }

  export interface AgentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agents'], meta: { name: 'Agents' } }
    /**
     * Find zero or one Agents that matches the filter.
     * @param {AgentsFindUniqueArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentsFindUniqueArgs>(args: SelectSubset<T, AgentsFindUniqueArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentsFindUniqueOrThrowArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsFindFirstArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentsFindFirstArgs>(args?: SelectSubset<T, AgentsFindFirstArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsFindFirstOrThrowArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agents.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentsWithIdOnly = await prisma.agents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentsFindManyArgs>(args?: SelectSubset<T, AgentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agents.
     * @param {AgentsCreateArgs} args - Arguments to create a Agents.
     * @example
     * // Create one Agents
     * const Agents = await prisma.agents.create({
     *   data: {
     *     // ... data to create a Agents
     *   }
     * })
     * 
     */
    create<T extends AgentsCreateArgs>(args: SelectSubset<T, AgentsCreateArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentsCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agents = await prisma.agents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentsCreateManyArgs>(args?: SelectSubset<T, AgentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agents.
     * @param {AgentsDeleteArgs} args - Arguments to delete one Agents.
     * @example
     * // Delete one Agents
     * const Agents = await prisma.agents.delete({
     *   where: {
     *     // ... filter to delete one Agents
     *   }
     * })
     * 
     */
    delete<T extends AgentsDeleteArgs>(args: SelectSubset<T, AgentsDeleteArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agents.
     * @param {AgentsUpdateArgs} args - Arguments to update one Agents.
     * @example
     * // Update one Agents
     * const agents = await prisma.agents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentsUpdateArgs>(args: SelectSubset<T, AgentsUpdateArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentsDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentsDeleteManyArgs>(args?: SelectSubset<T, AgentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agents = await prisma.agents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentsUpdateManyArgs>(args: SelectSubset<T, AgentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agents.
     * @param {AgentsUpsertArgs} args - Arguments to update or create a Agents.
     * @example
     * // Update or create a Agents
     * const agents = await prisma.agents.upsert({
     *   create: {
     *     // ... data to create a Agents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agents we want to update
     *   }
     * })
     */
    upsert<T extends AgentsUpsertArgs>(args: SelectSubset<T, AgentsUpsertArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agents.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentsCountArgs>(
      args?: Subset<T, AgentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentsAggregateArgs>(args: Subset<T, AgentsAggregateArgs>): Prisma.PrismaPromise<GetAgentsAggregateType<T>>

    /**
     * Group by Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentsGroupByArgs['orderBy'] }
        : { orderBy?: AgentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agents model
   */
  readonly fields: AgentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends Agents$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Agents$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Agents$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Agents$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications_and_notes<T extends Agents$notifications_and_notesArgs<ExtArgs> = {}>(args?: Subset<T, Agents$notifications_and_notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agents model
   */
  interface AgentsFieldRefs {
    readonly id: FieldRef<"Agents", 'Int'>
    readonly agent_name: FieldRef<"Agents", 'String'>
    readonly password: FieldRef<"Agents", 'String'>
    readonly role: FieldRef<"Agents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agents findUnique
   */
  export type AgentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where: AgentsWhereUniqueInput
  }

  /**
   * Agents findUniqueOrThrow
   */
  export type AgentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where: AgentsWhereUniqueInput
  }

  /**
   * Agents findFirst
   */
  export type AgentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentsOrderByWithRelationInput | AgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * Agents findFirstOrThrow
   */
  export type AgentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentsOrderByWithRelationInput | AgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * Agents findMany
   */
  export type AgentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentsOrderByWithRelationInput | AgentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * Agents create
   */
  export type AgentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Agents.
     */
    data: XOR<AgentsCreateInput, AgentsUncheckedCreateInput>
  }

  /**
   * Agents createMany
   */
  export type AgentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentsCreateManyInput | AgentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agents update
   */
  export type AgentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Agents.
     */
    data: XOR<AgentsUpdateInput, AgentsUncheckedUpdateInput>
    /**
     * Choose, which Agents to update.
     */
    where: AgentsWhereUniqueInput
  }

  /**
   * Agents updateMany
   */
  export type AgentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentsUpdateManyMutationInput, AgentsUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentsWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agents upsert
   */
  export type AgentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Agents to update in case it exists.
     */
    where: AgentsWhereUniqueInput
    /**
     * In case the Agents found by the `where` argument doesn't exist, create a new Agents with this data.
     */
    create: XOR<AgentsCreateInput, AgentsUncheckedCreateInput>
    /**
     * In case the Agents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentsUpdateInput, AgentsUncheckedUpdateInput>
  }

  /**
   * Agents delete
   */
  export type AgentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    /**
     * Filter which Agents to delete.
     */
    where: AgentsWhereUniqueInput
  }

  /**
   * Agents deleteMany
   */
  export type AgentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentsWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agents.materials
   */
  export type Agents$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    where?: MaterialsWhereInput
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    cursor?: MaterialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Agents.orders
   */
  export type Agents$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Agents.notifications_and_notes
   */
  export type Agents$notifications_and_notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    where?: NotificationsAndNotesWhereInput
    orderBy?: NotificationsAndNotesOrderByWithRelationInput | NotificationsAndNotesOrderByWithRelationInput[]
    cursor?: NotificationsAndNotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsAndNotesScalarFieldEnum | NotificationsAndNotesScalarFieldEnum[]
  }

  /**
   * Agents without action
   */
  export type AgentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
  }


  /**
   * Model Clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientsSumAggregateOutputType = {
    id: number | null
  }

  export type ClientsMinAggregateOutputType = {
    id: number | null
    client_name: string | null
    password: string | null
    phone_number: string | null
    city: string | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: number | null
    client_name: string | null
    password: string | null
    phone_number: string | null
    city: string | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    client_name: number
    password: number
    phone_number: number
    city: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    id?: true
  }

  export type ClientsSumAggregateInputType = {
    id?: true
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    client_name?: true
    password?: true
    phone_number?: true
    city?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    client_name?: true
    password?: true
    phone_number?: true
    city?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    client_name?: true
    password?: true
    phone_number?: true
    city?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to aggregate.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type ClientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithAggregationInput | ClientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: ClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: number
    client_name: string
    password: string
    phone_number: string
    city: string
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type ClientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_name?: boolean
    password?: boolean
    phone_number?: boolean
    city?: boolean
    orders?: boolean | Clients$ordersArgs<ExtArgs>
    notifications_and_notes?: boolean | Clients$notifications_and_notesArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>



  export type ClientsSelectScalar = {
    id?: boolean
    client_name?: boolean
    password?: boolean
    phone_number?: boolean
    city?: boolean
  }

  export type ClientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_name" | "password" | "phone_number" | "city", ExtArgs["result"]["clients"]>
  export type ClientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Clients$ordersArgs<ExtArgs>
    notifications_and_notes?: boolean | Clients$notifications_and_notesArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clients"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      notifications_and_notes: Prisma.$NotificationsAndNotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_name: string
      password: string
      phone_number: string
      city: string
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type ClientsGetPayload<S extends boolean | null | undefined | ClientsDefaultArgs> = $Result.GetResult<Prisma.$ClientsPayload, S>

  type ClientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface ClientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clients'], meta: { name: 'Clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {ClientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientsFindUniqueArgs>(args: SelectSubset<T, ClientsFindUniqueArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientsFindFirstArgs>(args?: SelectSubset<T, ClientsFindFirstArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientsFindManyArgs>(args?: SelectSubset<T, ClientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clients.
     * @param {ClientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends ClientsCreateArgs>(args: SelectSubset<T, ClientsCreateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientsCreateManyArgs>(args?: SelectSubset<T, ClientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clients.
     * @param {ClientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends ClientsDeleteArgs>(args: SelectSubset<T, ClientsDeleteArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clients.
     * @param {ClientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientsUpdateArgs>(args: SelectSubset<T, ClientsUpdateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientsDeleteManyArgs>(args?: SelectSubset<T, ClientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientsUpdateManyArgs>(args: SelectSubset<T, ClientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clients.
     * @param {ClientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends ClientsUpsertArgs>(args: SelectSubset<T, ClientsUpsertArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientsCountArgs>(
      args?: Subset<T, ClientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clients model
   */
  readonly fields: ClientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Clients$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Clients$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications_and_notes<T extends Clients$notifications_and_notesArgs<ExtArgs> = {}>(args?: Subset<T, Clients$notifications_and_notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clients model
   */
  interface ClientsFieldRefs {
    readonly id: FieldRef<"Clients", 'Int'>
    readonly client_name: FieldRef<"Clients", 'String'>
    readonly password: FieldRef<"Clients", 'String'>
    readonly phone_number: FieldRef<"Clients", 'String'>
    readonly city: FieldRef<"Clients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clients findUnique
   */
  export type ClientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findUniqueOrThrow
   */
  export type ClientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findFirst
   */
  export type ClientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findFirstOrThrow
   */
  export type ClientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findMany
   */
  export type ClientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients create
   */
  export type ClientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clients.
     */
    data: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
  }

  /**
   * Clients createMany
   */
  export type ClientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients update
   */
  export type ClientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clients.
     */
    data: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
    /**
     * Choose, which Clients to update.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients updateMany
   */
  export type ClientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients upsert
   */
  export type ClientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clients to update in case it exists.
     */
    where: ClientsWhereUniqueInput
    /**
     * In case the Clients found by the `where` argument doesn't exist, create a new Clients with this data.
     */
    create: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
    /**
     * In case the Clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
  }

  /**
   * Clients delete
   */
  export type ClientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter which Clients to delete.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients deleteMany
   */
  export type ClientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Clients.orders
   */
  export type Clients$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Clients.notifications_and_notes
   */
  export type Clients$notifications_and_notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    where?: NotificationsAndNotesWhereInput
    orderBy?: NotificationsAndNotesOrderByWithRelationInput | NotificationsAndNotesOrderByWithRelationInput[]
    cursor?: NotificationsAndNotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsAndNotesScalarFieldEnum | NotificationsAndNotesScalarFieldEnum[]
  }

  /**
   * Clients without action
   */
  export type ClientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
  }


  /**
   * Model Materials
   */

  export type AggregateMaterials = {
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  export type MaterialsAvgAggregateOutputType = {
    id: number | null
    date_added: number | null
    agent_id: number | null
  }

  export type MaterialsSumAggregateOutputType = {
    id: number | null
    date_added: number | null
    agent_id: number | null
  }

  export type MaterialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    date_added: number | null
    agent_id: number | null
  }

  export type MaterialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date_added: number | null
    agent_id: number | null
  }

  export type MaterialsCountAggregateOutputType = {
    id: number
    name: number
    date_added: number
    agent_id: number
    _all: number
  }


  export type MaterialsAvgAggregateInputType = {
    id?: true
    date_added?: true
    agent_id?: true
  }

  export type MaterialsSumAggregateInputType = {
    id?: true
    date_added?: true
    agent_id?: true
  }

  export type MaterialsMinAggregateInputType = {
    id?: true
    name?: true
    date_added?: true
    agent_id?: true
  }

  export type MaterialsMaxAggregateInputType = {
    id?: true
    name?: true
    date_added?: true
    agent_id?: true
  }

  export type MaterialsCountAggregateInputType = {
    id?: true
    name?: true
    date_added?: true
    agent_id?: true
    _all?: true
  }

  export type MaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to aggregate.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialsMaxAggregateInputType
  }

  export type GetMaterialsAggregateType<T extends MaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterials[P]>
      : GetScalarType<T[P], AggregateMaterials[P]>
  }




  export type MaterialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialsWhereInput
    orderBy?: MaterialsOrderByWithAggregationInput | MaterialsOrderByWithAggregationInput[]
    by: MaterialsScalarFieldEnum[] | MaterialsScalarFieldEnum
    having?: MaterialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialsCountAggregateInputType | true
    _avg?: MaterialsAvgAggregateInputType
    _sum?: MaterialsSumAggregateInputType
    _min?: MaterialsMinAggregateInputType
    _max?: MaterialsMaxAggregateInputType
  }

  export type MaterialsGroupByOutputType = {
    id: number
    name: string
    date_added: number
    agent_id: number | null
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  type GetMaterialsGroupByPayload<T extends MaterialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
        }
      >
    >


  export type MaterialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date_added?: boolean
    agent_id?: boolean
    agent?: boolean | Materials$agentArgs<ExtArgs>
    categories_of_materials?: boolean | Materials$categories_of_materialsArgs<ExtArgs>
    _count?: boolean | MaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>



  export type MaterialsSelectScalar = {
    id?: boolean
    name?: boolean
    date_added?: boolean
    agent_id?: boolean
  }

  export type MaterialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date_added" | "agent_id", ExtArgs["result"]["materials"]>
  export type MaterialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | Materials$agentArgs<ExtArgs>
    categories_of_materials?: boolean | Materials$categories_of_materialsArgs<ExtArgs>
    _count?: boolean | MaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MaterialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materials"
    objects: {
      agent: Prisma.$AgentsPayload<ExtArgs> | null
      categories_of_materials: Prisma.$CategoriesOfMaterialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      date_added: number
      agent_id: number | null
    }, ExtArgs["result"]["materials"]>
    composites: {}
  }

  type MaterialsGetPayload<S extends boolean | null | undefined | MaterialsDefaultArgs> = $Result.GetResult<Prisma.$MaterialsPayload, S>

  type MaterialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialsCountAggregateInputType | true
    }

  export interface MaterialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materials'], meta: { name: 'Materials' } }
    /**
     * Find zero or one Materials that matches the filter.
     * @param {MaterialsFindUniqueArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialsFindUniqueArgs>(args: SelectSubset<T, MaterialsFindUniqueArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialsFindUniqueOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialsFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsFindFirstArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialsFindFirstArgs>(args?: SelectSubset<T, MaterialsFindFirstArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsFindFirstOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialsFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.materials.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.materials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialsWithIdOnly = await prisma.materials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialsFindManyArgs>(args?: SelectSubset<T, MaterialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materials.
     * @param {MaterialsCreateArgs} args - Arguments to create a Materials.
     * @example
     * // Create one Materials
     * const Materials = await prisma.materials.create({
     *   data: {
     *     // ... data to create a Materials
     *   }
     * })
     * 
     */
    create<T extends MaterialsCreateArgs>(args: SelectSubset<T, MaterialsCreateArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialsCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialsCreateManyArgs>(args?: SelectSubset<T, MaterialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Materials.
     * @param {MaterialsDeleteArgs} args - Arguments to delete one Materials.
     * @example
     * // Delete one Materials
     * const Materials = await prisma.materials.delete({
     *   where: {
     *     // ... filter to delete one Materials
     *   }
     * })
     * 
     */
    delete<T extends MaterialsDeleteArgs>(args: SelectSubset<T, MaterialsDeleteArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materials.
     * @param {MaterialsUpdateArgs} args - Arguments to update one Materials.
     * @example
     * // Update one Materials
     * const materials = await prisma.materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialsUpdateArgs>(args: SelectSubset<T, MaterialsUpdateArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialsDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialsDeleteManyArgs>(args?: SelectSubset<T, MaterialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialsUpdateManyArgs>(args: SelectSubset<T, MaterialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Materials.
     * @param {MaterialsUpsertArgs} args - Arguments to update or create a Materials.
     * @example
     * // Update or create a Materials
     * const materials = await prisma.materials.upsert({
     *   create: {
     *     // ... data to create a Materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materials we want to update
     *   }
     * })
     */
    upsert<T extends MaterialsUpsertArgs>(args: SelectSubset<T, MaterialsUpsertArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.materials.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialsCountArgs>(
      args?: Subset<T, MaterialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialsAggregateArgs>(args: Subset<T, MaterialsAggregateArgs>): Prisma.PrismaPromise<GetMaterialsAggregateType<T>>

    /**
     * Group by Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaterialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialsGroupByArgs['orderBy'] }
        : { orderBy?: MaterialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materials model
   */
  readonly fields: MaterialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends Materials$agentArgs<ExtArgs> = {}>(args?: Subset<T, Materials$agentArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categories_of_materials<T extends Materials$categories_of_materialsArgs<ExtArgs> = {}>(args?: Subset<T, Materials$categories_of_materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materials model
   */
  interface MaterialsFieldRefs {
    readonly id: FieldRef<"Materials", 'Int'>
    readonly name: FieldRef<"Materials", 'String'>
    readonly date_added: FieldRef<"Materials", 'Int'>
    readonly agent_id: FieldRef<"Materials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Materials findUnique
   */
  export type MaterialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials findUniqueOrThrow
   */
  export type MaterialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials findFirst
   */
  export type MaterialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Materials findFirstOrThrow
   */
  export type MaterialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Materials findMany
   */
  export type MaterialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Materials create
   */
  export type MaterialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * The data needed to create a Materials.
     */
    data: XOR<MaterialsCreateInput, MaterialsUncheckedCreateInput>
  }

  /**
   * Materials createMany
   */
  export type MaterialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialsCreateManyInput | MaterialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materials update
   */
  export type MaterialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * The data needed to update a Materials.
     */
    data: XOR<MaterialsUpdateInput, MaterialsUncheckedUpdateInput>
    /**
     * Choose, which Materials to update.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials updateMany
   */
  export type MaterialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialsUpdateManyMutationInput, MaterialsUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialsWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Materials upsert
   */
  export type MaterialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * The filter to search for the Materials to update in case it exists.
     */
    where: MaterialsWhereUniqueInput
    /**
     * In case the Materials found by the `where` argument doesn't exist, create a new Materials with this data.
     */
    create: XOR<MaterialsCreateInput, MaterialsUncheckedCreateInput>
    /**
     * In case the Materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialsUpdateInput, MaterialsUncheckedUpdateInput>
  }

  /**
   * Materials delete
   */
  export type MaterialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter which Materials to delete.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials deleteMany
   */
  export type MaterialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialsWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Materials.agent
   */
  export type Materials$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agents
     */
    select?: AgentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agents
     */
    omit?: AgentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentsInclude<ExtArgs> | null
    where?: AgentsWhereInput
  }

  /**
   * Materials.categories_of_materials
   */
  export type Materials$categories_of_materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    where?: CategoriesOfMaterialsWhereInput
    orderBy?: CategoriesOfMaterialsOrderByWithRelationInput | CategoriesOfMaterialsOrderByWithRelationInput[]
    cursor?: CategoriesOfMaterialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesOfMaterialsScalarFieldEnum | CategoriesOfMaterialsScalarFieldEnum[]
  }

  /**
   * Materials without action
   */
  export type MaterialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
  }


  /**
   * Model CategoriesOfMaterials
   */

  export type AggregateCategoriesOfMaterials = {
    _count: CategoriesOfMaterialsCountAggregateOutputType | null
    _avg: CategoriesOfMaterialsAvgAggregateOutputType | null
    _sum: CategoriesOfMaterialsSumAggregateOutputType | null
    _min: CategoriesOfMaterialsMinAggregateOutputType | null
    _max: CategoriesOfMaterialsMaxAggregateOutputType | null
  }

  export type CategoriesOfMaterialsAvgAggregateOutputType = {
    id: number | null
    material_id: number | null
    parent_id: number | null
  }

  export type CategoriesOfMaterialsSumAggregateOutputType = {
    id: number | null
    material_id: number | null
    parent_id: number | null
  }

  export type CategoriesOfMaterialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    material_id: number | null
    parent_id: number | null
  }

  export type CategoriesOfMaterialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    material_id: number | null
    parent_id: number | null
  }

  export type CategoriesOfMaterialsCountAggregateOutputType = {
    id: number
    name: number
    image: number
    material_id: number
    parent_id: number
    _all: number
  }


  export type CategoriesOfMaterialsAvgAggregateInputType = {
    id?: true
    material_id?: true
    parent_id?: true
  }

  export type CategoriesOfMaterialsSumAggregateInputType = {
    id?: true
    material_id?: true
    parent_id?: true
  }

  export type CategoriesOfMaterialsMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    material_id?: true
    parent_id?: true
  }

  export type CategoriesOfMaterialsMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    material_id?: true
    parent_id?: true
  }

  export type CategoriesOfMaterialsCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    material_id?: true
    parent_id?: true
    _all?: true
  }

  export type CategoriesOfMaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesOfMaterials to aggregate.
     */
    where?: CategoriesOfMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOfMaterials to fetch.
     */
    orderBy?: CategoriesOfMaterialsOrderByWithRelationInput | CategoriesOfMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesOfMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOfMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOfMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriesOfMaterials
    **/
    _count?: true | CategoriesOfMaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesOfMaterialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesOfMaterialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesOfMaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesOfMaterialsMaxAggregateInputType
  }

  export type GetCategoriesOfMaterialsAggregateType<T extends CategoriesOfMaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriesOfMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriesOfMaterials[P]>
      : GetScalarType<T[P], AggregateCategoriesOfMaterials[P]>
  }




  export type CategoriesOfMaterialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesOfMaterialsWhereInput
    orderBy?: CategoriesOfMaterialsOrderByWithAggregationInput | CategoriesOfMaterialsOrderByWithAggregationInput[]
    by: CategoriesOfMaterialsScalarFieldEnum[] | CategoriesOfMaterialsScalarFieldEnum
    having?: CategoriesOfMaterialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesOfMaterialsCountAggregateInputType | true
    _avg?: CategoriesOfMaterialsAvgAggregateInputType
    _sum?: CategoriesOfMaterialsSumAggregateInputType
    _min?: CategoriesOfMaterialsMinAggregateInputType
    _max?: CategoriesOfMaterialsMaxAggregateInputType
  }

  export type CategoriesOfMaterialsGroupByOutputType = {
    id: number
    name: string
    image: string
    material_id: number
    parent_id: number | null
    _count: CategoriesOfMaterialsCountAggregateOutputType | null
    _avg: CategoriesOfMaterialsAvgAggregateOutputType | null
    _sum: CategoriesOfMaterialsSumAggregateOutputType | null
    _min: CategoriesOfMaterialsMinAggregateOutputType | null
    _max: CategoriesOfMaterialsMaxAggregateOutputType | null
  }

  type GetCategoriesOfMaterialsGroupByPayload<T extends CategoriesOfMaterialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesOfMaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesOfMaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesOfMaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesOfMaterialsGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesOfMaterialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    material_id?: boolean
    parent_id?: boolean
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
    categories_details?: boolean | CategoriesOfMaterials$categories_detailsArgs<ExtArgs>
    _count?: boolean | CategoriesOfMaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriesOfMaterials"]>



  export type CategoriesOfMaterialsSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    material_id?: boolean
    parent_id?: boolean
  }

  export type CategoriesOfMaterialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "material_id" | "parent_id", ExtArgs["result"]["categoriesOfMaterials"]>
  export type CategoriesOfMaterialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
    categories_details?: boolean | CategoriesOfMaterials$categories_detailsArgs<ExtArgs>
    _count?: boolean | CategoriesOfMaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriesOfMaterialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriesOfMaterials"
    objects: {
      material: Prisma.$MaterialsPayload<ExtArgs>
      categories_details: Prisma.$CategoriesDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      material_id: number
      parent_id: number | null
    }, ExtArgs["result"]["categoriesOfMaterials"]>
    composites: {}
  }

  type CategoriesOfMaterialsGetPayload<S extends boolean | null | undefined | CategoriesOfMaterialsDefaultArgs> = $Result.GetResult<Prisma.$CategoriesOfMaterialsPayload, S>

  type CategoriesOfMaterialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesOfMaterialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesOfMaterialsCountAggregateInputType | true
    }

  export interface CategoriesOfMaterialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriesOfMaterials'], meta: { name: 'CategoriesOfMaterials' } }
    /**
     * Find zero or one CategoriesOfMaterials that matches the filter.
     * @param {CategoriesOfMaterialsFindUniqueArgs} args - Arguments to find a CategoriesOfMaterials
     * @example
     * // Get one CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesOfMaterialsFindUniqueArgs>(args: SelectSubset<T, CategoriesOfMaterialsFindUniqueArgs<ExtArgs>>): Prisma__CategoriesOfMaterialsClient<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoriesOfMaterials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesOfMaterialsFindUniqueOrThrowArgs} args - Arguments to find a CategoriesOfMaterials
     * @example
     * // Get one CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesOfMaterialsFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesOfMaterialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesOfMaterialsClient<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesOfMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOfMaterialsFindFirstArgs} args - Arguments to find a CategoriesOfMaterials
     * @example
     * // Get one CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesOfMaterialsFindFirstArgs>(args?: SelectSubset<T, CategoriesOfMaterialsFindFirstArgs<ExtArgs>>): Prisma__CategoriesOfMaterialsClient<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesOfMaterials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOfMaterialsFindFirstOrThrowArgs} args - Arguments to find a CategoriesOfMaterials
     * @example
     * // Get one CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesOfMaterialsFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesOfMaterialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesOfMaterialsClient<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoriesOfMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOfMaterialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.findMany()
     * 
     * // Get first 10 CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesOfMaterialsWithIdOnly = await prisma.categoriesOfMaterials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesOfMaterialsFindManyArgs>(args?: SelectSubset<T, CategoriesOfMaterialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoriesOfMaterials.
     * @param {CategoriesOfMaterialsCreateArgs} args - Arguments to create a CategoriesOfMaterials.
     * @example
     * // Create one CategoriesOfMaterials
     * const CategoriesOfMaterials = await prisma.categoriesOfMaterials.create({
     *   data: {
     *     // ... data to create a CategoriesOfMaterials
     *   }
     * })
     * 
     */
    create<T extends CategoriesOfMaterialsCreateArgs>(args: SelectSubset<T, CategoriesOfMaterialsCreateArgs<ExtArgs>>): Prisma__CategoriesOfMaterialsClient<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoriesOfMaterials.
     * @param {CategoriesOfMaterialsCreateManyArgs} args - Arguments to create many CategoriesOfMaterials.
     * @example
     * // Create many CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesOfMaterialsCreateManyArgs>(args?: SelectSubset<T, CategoriesOfMaterialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoriesOfMaterials.
     * @param {CategoriesOfMaterialsDeleteArgs} args - Arguments to delete one CategoriesOfMaterials.
     * @example
     * // Delete one CategoriesOfMaterials
     * const CategoriesOfMaterials = await prisma.categoriesOfMaterials.delete({
     *   where: {
     *     // ... filter to delete one CategoriesOfMaterials
     *   }
     * })
     * 
     */
    delete<T extends CategoriesOfMaterialsDeleteArgs>(args: SelectSubset<T, CategoriesOfMaterialsDeleteArgs<ExtArgs>>): Prisma__CategoriesOfMaterialsClient<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoriesOfMaterials.
     * @param {CategoriesOfMaterialsUpdateArgs} args - Arguments to update one CategoriesOfMaterials.
     * @example
     * // Update one CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesOfMaterialsUpdateArgs>(args: SelectSubset<T, CategoriesOfMaterialsUpdateArgs<ExtArgs>>): Prisma__CategoriesOfMaterialsClient<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoriesOfMaterials.
     * @param {CategoriesOfMaterialsDeleteManyArgs} args - Arguments to filter CategoriesOfMaterials to delete.
     * @example
     * // Delete a few CategoriesOfMaterials
     * const { count } = await prisma.categoriesOfMaterials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesOfMaterialsDeleteManyArgs>(args?: SelectSubset<T, CategoriesOfMaterialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriesOfMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOfMaterialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesOfMaterialsUpdateManyArgs>(args: SelectSubset<T, CategoriesOfMaterialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoriesOfMaterials.
     * @param {CategoriesOfMaterialsUpsertArgs} args - Arguments to update or create a CategoriesOfMaterials.
     * @example
     * // Update or create a CategoriesOfMaterials
     * const categoriesOfMaterials = await prisma.categoriesOfMaterials.upsert({
     *   create: {
     *     // ... data to create a CategoriesOfMaterials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriesOfMaterials we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesOfMaterialsUpsertArgs>(args: SelectSubset<T, CategoriesOfMaterialsUpsertArgs<ExtArgs>>): Prisma__CategoriesOfMaterialsClient<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoriesOfMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOfMaterialsCountArgs} args - Arguments to filter CategoriesOfMaterials to count.
     * @example
     * // Count the number of CategoriesOfMaterials
     * const count = await prisma.categoriesOfMaterials.count({
     *   where: {
     *     // ... the filter for the CategoriesOfMaterials we want to count
     *   }
     * })
    **/
    count<T extends CategoriesOfMaterialsCountArgs>(
      args?: Subset<T, CategoriesOfMaterialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesOfMaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriesOfMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOfMaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesOfMaterialsAggregateArgs>(args: Subset<T, CategoriesOfMaterialsAggregateArgs>): Prisma.PrismaPromise<GetCategoriesOfMaterialsAggregateType<T>>

    /**
     * Group by CategoriesOfMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOfMaterialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesOfMaterialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesOfMaterialsGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesOfMaterialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesOfMaterialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesOfMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriesOfMaterials model
   */
  readonly fields: CategoriesOfMaterialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriesOfMaterials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesOfMaterialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialsDefaultArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories_details<T extends CategoriesOfMaterials$categories_detailsArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesOfMaterials$categories_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoriesOfMaterials model
   */
  interface CategoriesOfMaterialsFieldRefs {
    readonly id: FieldRef<"CategoriesOfMaterials", 'Int'>
    readonly name: FieldRef<"CategoriesOfMaterials", 'String'>
    readonly image: FieldRef<"CategoriesOfMaterials", 'String'>
    readonly material_id: FieldRef<"CategoriesOfMaterials", 'Int'>
    readonly parent_id: FieldRef<"CategoriesOfMaterials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoriesOfMaterials findUnique
   */
  export type CategoriesOfMaterialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOfMaterials to fetch.
     */
    where: CategoriesOfMaterialsWhereUniqueInput
  }

  /**
   * CategoriesOfMaterials findUniqueOrThrow
   */
  export type CategoriesOfMaterialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOfMaterials to fetch.
     */
    where: CategoriesOfMaterialsWhereUniqueInput
  }

  /**
   * CategoriesOfMaterials findFirst
   */
  export type CategoriesOfMaterialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOfMaterials to fetch.
     */
    where?: CategoriesOfMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOfMaterials to fetch.
     */
    orderBy?: CategoriesOfMaterialsOrderByWithRelationInput | CategoriesOfMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesOfMaterials.
     */
    cursor?: CategoriesOfMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOfMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOfMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesOfMaterials.
     */
    distinct?: CategoriesOfMaterialsScalarFieldEnum | CategoriesOfMaterialsScalarFieldEnum[]
  }

  /**
   * CategoriesOfMaterials findFirstOrThrow
   */
  export type CategoriesOfMaterialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOfMaterials to fetch.
     */
    where?: CategoriesOfMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOfMaterials to fetch.
     */
    orderBy?: CategoriesOfMaterialsOrderByWithRelationInput | CategoriesOfMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesOfMaterials.
     */
    cursor?: CategoriesOfMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOfMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOfMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesOfMaterials.
     */
    distinct?: CategoriesOfMaterialsScalarFieldEnum | CategoriesOfMaterialsScalarFieldEnum[]
  }

  /**
   * CategoriesOfMaterials findMany
   */
  export type CategoriesOfMaterialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOfMaterials to fetch.
     */
    where?: CategoriesOfMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOfMaterials to fetch.
     */
    orderBy?: CategoriesOfMaterialsOrderByWithRelationInput | CategoriesOfMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriesOfMaterials.
     */
    cursor?: CategoriesOfMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOfMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOfMaterials.
     */
    skip?: number
    distinct?: CategoriesOfMaterialsScalarFieldEnum | CategoriesOfMaterialsScalarFieldEnum[]
  }

  /**
   * CategoriesOfMaterials create
   */
  export type CategoriesOfMaterialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriesOfMaterials.
     */
    data: XOR<CategoriesOfMaterialsCreateInput, CategoriesOfMaterialsUncheckedCreateInput>
  }

  /**
   * CategoriesOfMaterials createMany
   */
  export type CategoriesOfMaterialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriesOfMaterials.
     */
    data: CategoriesOfMaterialsCreateManyInput | CategoriesOfMaterialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriesOfMaterials update
   */
  export type CategoriesOfMaterialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriesOfMaterials.
     */
    data: XOR<CategoriesOfMaterialsUpdateInput, CategoriesOfMaterialsUncheckedUpdateInput>
    /**
     * Choose, which CategoriesOfMaterials to update.
     */
    where: CategoriesOfMaterialsWhereUniqueInput
  }

  /**
   * CategoriesOfMaterials updateMany
   */
  export type CategoriesOfMaterialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriesOfMaterials.
     */
    data: XOR<CategoriesOfMaterialsUpdateManyMutationInput, CategoriesOfMaterialsUncheckedUpdateManyInput>
    /**
     * Filter which CategoriesOfMaterials to update
     */
    where?: CategoriesOfMaterialsWhereInput
    /**
     * Limit how many CategoriesOfMaterials to update.
     */
    limit?: number
  }

  /**
   * CategoriesOfMaterials upsert
   */
  export type CategoriesOfMaterialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriesOfMaterials to update in case it exists.
     */
    where: CategoriesOfMaterialsWhereUniqueInput
    /**
     * In case the CategoriesOfMaterials found by the `where` argument doesn't exist, create a new CategoriesOfMaterials with this data.
     */
    create: XOR<CategoriesOfMaterialsCreateInput, CategoriesOfMaterialsUncheckedCreateInput>
    /**
     * In case the CategoriesOfMaterials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesOfMaterialsUpdateInput, CategoriesOfMaterialsUncheckedUpdateInput>
  }

  /**
   * CategoriesOfMaterials delete
   */
  export type CategoriesOfMaterialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
    /**
     * Filter which CategoriesOfMaterials to delete.
     */
    where: CategoriesOfMaterialsWhereUniqueInput
  }

  /**
   * CategoriesOfMaterials deleteMany
   */
  export type CategoriesOfMaterialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesOfMaterials to delete
     */
    where?: CategoriesOfMaterialsWhereInput
    /**
     * Limit how many CategoriesOfMaterials to delete.
     */
    limit?: number
  }

  /**
   * CategoriesOfMaterials.categories_details
   */
  export type CategoriesOfMaterials$categories_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    where?: CategoriesDetailsWhereInput
    orderBy?: CategoriesDetailsOrderByWithRelationInput | CategoriesDetailsOrderByWithRelationInput[]
    cursor?: CategoriesDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesDetailsScalarFieldEnum | CategoriesDetailsScalarFieldEnum[]
  }

  /**
   * CategoriesOfMaterials without action
   */
  export type CategoriesOfMaterialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOfMaterials
     */
    select?: CategoriesOfMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOfMaterials
     */
    omit?: CategoriesOfMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOfMaterialsInclude<ExtArgs> | null
  }


  /**
   * Model CategoriesDetails
   */

  export type AggregateCategoriesDetails = {
    _count: CategoriesDetailsCountAggregateOutputType | null
    _avg: CategoriesDetailsAvgAggregateOutputType | null
    _sum: CategoriesDetailsSumAggregateOutputType | null
    _min: CategoriesDetailsMinAggregateOutputType | null
    _max: CategoriesDetailsMaxAggregateOutputType | null
  }

  export type CategoriesDetailsAvgAggregateOutputType = {
    id: number | null
    total: number | null
    rest: number | null
    remaining: number | null
    category_material_id: number | null
  }

  export type CategoriesDetailsSumAggregateOutputType = {
    id: number | null
    total: bigint | null
    rest: number | null
    remaining: number | null
    category_material_id: number | null
  }

  export type CategoriesDetailsMinAggregateOutputType = {
    id: number | null
    It_detail_name: string | null
    code: string | null
    dimensions: string | null
    total: bigint | null
    rest: number | null
    remaining: number | null
    category_material_id: number | null
  }

  export type CategoriesDetailsMaxAggregateOutputType = {
    id: number | null
    It_detail_name: string | null
    code: string | null
    dimensions: string | null
    total: bigint | null
    rest: number | null
    remaining: number | null
    category_material_id: number | null
  }

  export type CategoriesDetailsCountAggregateOutputType = {
    id: number
    It_detail_name: number
    code: number
    dimensions: number
    total: number
    rest: number
    remaining: number
    category_material_id: number
    _all: number
  }


  export type CategoriesDetailsAvgAggregateInputType = {
    id?: true
    total?: true
    rest?: true
    remaining?: true
    category_material_id?: true
  }

  export type CategoriesDetailsSumAggregateInputType = {
    id?: true
    total?: true
    rest?: true
    remaining?: true
    category_material_id?: true
  }

  export type CategoriesDetailsMinAggregateInputType = {
    id?: true
    It_detail_name?: true
    code?: true
    dimensions?: true
    total?: true
    rest?: true
    remaining?: true
    category_material_id?: true
  }

  export type CategoriesDetailsMaxAggregateInputType = {
    id?: true
    It_detail_name?: true
    code?: true
    dimensions?: true
    total?: true
    rest?: true
    remaining?: true
    category_material_id?: true
  }

  export type CategoriesDetailsCountAggregateInputType = {
    id?: true
    It_detail_name?: true
    code?: true
    dimensions?: true
    total?: true
    rest?: true
    remaining?: true
    category_material_id?: true
    _all?: true
  }

  export type CategoriesDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesDetails to aggregate.
     */
    where?: CategoriesDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesDetails to fetch.
     */
    orderBy?: CategoriesDetailsOrderByWithRelationInput | CategoriesDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriesDetails
    **/
    _count?: true | CategoriesDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesDetailsMaxAggregateInputType
  }

  export type GetCategoriesDetailsAggregateType<T extends CategoriesDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriesDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriesDetails[P]>
      : GetScalarType<T[P], AggregateCategoriesDetails[P]>
  }




  export type CategoriesDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesDetailsWhereInput
    orderBy?: CategoriesDetailsOrderByWithAggregationInput | CategoriesDetailsOrderByWithAggregationInput[]
    by: CategoriesDetailsScalarFieldEnum[] | CategoriesDetailsScalarFieldEnum
    having?: CategoriesDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesDetailsCountAggregateInputType | true
    _avg?: CategoriesDetailsAvgAggregateInputType
    _sum?: CategoriesDetailsSumAggregateInputType
    _min?: CategoriesDetailsMinAggregateInputType
    _max?: CategoriesDetailsMaxAggregateInputType
  }

  export type CategoriesDetailsGroupByOutputType = {
    id: number
    It_detail_name: string
    code: string
    dimensions: string
    total: bigint
    rest: number
    remaining: number
    category_material_id: number
    _count: CategoriesDetailsCountAggregateOutputType | null
    _avg: CategoriesDetailsAvgAggregateOutputType | null
    _sum: CategoriesDetailsSumAggregateOutputType | null
    _min: CategoriesDetailsMinAggregateOutputType | null
    _max: CategoriesDetailsMaxAggregateOutputType | null
  }

  type GetCategoriesDetailsGroupByPayload<T extends CategoriesDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesDetailsGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    It_detail_name?: boolean
    code?: boolean
    dimensions?: boolean
    total?: boolean
    rest?: boolean
    remaining?: boolean
    category_material_id?: boolean
    categories_of_materials?: boolean | CategoriesOfMaterialsDefaultArgs<ExtArgs>
    order_details?: boolean | CategoriesDetails$order_detailsArgs<ExtArgs>
    _count?: boolean | CategoriesDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriesDetails"]>



  export type CategoriesDetailsSelectScalar = {
    id?: boolean
    It_detail_name?: boolean
    code?: boolean
    dimensions?: boolean
    total?: boolean
    rest?: boolean
    remaining?: boolean
    category_material_id?: boolean
  }

  export type CategoriesDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "It_detail_name" | "code" | "dimensions" | "total" | "rest" | "remaining" | "category_material_id", ExtArgs["result"]["categoriesDetails"]>
  export type CategoriesDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_of_materials?: boolean | CategoriesOfMaterialsDefaultArgs<ExtArgs>
    order_details?: boolean | CategoriesDetails$order_detailsArgs<ExtArgs>
    _count?: boolean | CategoriesDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriesDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriesDetails"
    objects: {
      categories_of_materials: Prisma.$CategoriesOfMaterialsPayload<ExtArgs>
      order_details: Prisma.$OrderDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      It_detail_name: string
      code: string
      dimensions: string
      total: bigint
      rest: number
      remaining: number
      category_material_id: number
    }, ExtArgs["result"]["categoriesDetails"]>
    composites: {}
  }

  type CategoriesDetailsGetPayload<S extends boolean | null | undefined | CategoriesDetailsDefaultArgs> = $Result.GetResult<Prisma.$CategoriesDetailsPayload, S>

  type CategoriesDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesDetailsCountAggregateInputType | true
    }

  export interface CategoriesDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriesDetails'], meta: { name: 'CategoriesDetails' } }
    /**
     * Find zero or one CategoriesDetails that matches the filter.
     * @param {CategoriesDetailsFindUniqueArgs} args - Arguments to find a CategoriesDetails
     * @example
     * // Get one CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesDetailsFindUniqueArgs>(args: SelectSubset<T, CategoriesDetailsFindUniqueArgs<ExtArgs>>): Prisma__CategoriesDetailsClient<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoriesDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesDetailsFindUniqueOrThrowArgs} args - Arguments to find a CategoriesDetails
     * @example
     * // Get one CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesDetailsClient<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesDetailsFindFirstArgs} args - Arguments to find a CategoriesDetails
     * @example
     * // Get one CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesDetailsFindFirstArgs>(args?: SelectSubset<T, CategoriesDetailsFindFirstArgs<ExtArgs>>): Prisma__CategoriesDetailsClient<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesDetailsFindFirstOrThrowArgs} args - Arguments to find a CategoriesDetails
     * @example
     * // Get one CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesDetailsClient<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoriesDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.findMany()
     * 
     * // Get first 10 CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesDetailsWithIdOnly = await prisma.categoriesDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesDetailsFindManyArgs>(args?: SelectSubset<T, CategoriesDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoriesDetails.
     * @param {CategoriesDetailsCreateArgs} args - Arguments to create a CategoriesDetails.
     * @example
     * // Create one CategoriesDetails
     * const CategoriesDetails = await prisma.categoriesDetails.create({
     *   data: {
     *     // ... data to create a CategoriesDetails
     *   }
     * })
     * 
     */
    create<T extends CategoriesDetailsCreateArgs>(args: SelectSubset<T, CategoriesDetailsCreateArgs<ExtArgs>>): Prisma__CategoriesDetailsClient<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoriesDetails.
     * @param {CategoriesDetailsCreateManyArgs} args - Arguments to create many CategoriesDetails.
     * @example
     * // Create many CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesDetailsCreateManyArgs>(args?: SelectSubset<T, CategoriesDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoriesDetails.
     * @param {CategoriesDetailsDeleteArgs} args - Arguments to delete one CategoriesDetails.
     * @example
     * // Delete one CategoriesDetails
     * const CategoriesDetails = await prisma.categoriesDetails.delete({
     *   where: {
     *     // ... filter to delete one CategoriesDetails
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDetailsDeleteArgs>(args: SelectSubset<T, CategoriesDetailsDeleteArgs<ExtArgs>>): Prisma__CategoriesDetailsClient<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoriesDetails.
     * @param {CategoriesDetailsUpdateArgs} args - Arguments to update one CategoriesDetails.
     * @example
     * // Update one CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesDetailsUpdateArgs>(args: SelectSubset<T, CategoriesDetailsUpdateArgs<ExtArgs>>): Prisma__CategoriesDetailsClient<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoriesDetails.
     * @param {CategoriesDetailsDeleteManyArgs} args - Arguments to filter CategoriesDetails to delete.
     * @example
     * // Delete a few CategoriesDetails
     * const { count } = await prisma.categoriesDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDetailsDeleteManyArgs>(args?: SelectSubset<T, CategoriesDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriesDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesDetailsUpdateManyArgs>(args: SelectSubset<T, CategoriesDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoriesDetails.
     * @param {CategoriesDetailsUpsertArgs} args - Arguments to update or create a CategoriesDetails.
     * @example
     * // Update or create a CategoriesDetails
     * const categoriesDetails = await prisma.categoriesDetails.upsert({
     *   create: {
     *     // ... data to create a CategoriesDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriesDetails we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesDetailsUpsertArgs>(args: SelectSubset<T, CategoriesDetailsUpsertArgs<ExtArgs>>): Prisma__CategoriesDetailsClient<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoriesDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesDetailsCountArgs} args - Arguments to filter CategoriesDetails to count.
     * @example
     * // Count the number of CategoriesDetails
     * const count = await prisma.categoriesDetails.count({
     *   where: {
     *     // ... the filter for the CategoriesDetails we want to count
     *   }
     * })
    **/
    count<T extends CategoriesDetailsCountArgs>(
      args?: Subset<T, CategoriesDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriesDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesDetailsAggregateArgs>(args: Subset<T, CategoriesDetailsAggregateArgs>): Prisma.PrismaPromise<GetCategoriesDetailsAggregateType<T>>

    /**
     * Group by CategoriesDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesDetailsGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriesDetails model
   */
  readonly fields: CategoriesDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriesDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories_of_materials<T extends CategoriesOfMaterialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesOfMaterialsDefaultArgs<ExtArgs>>): Prisma__CategoriesOfMaterialsClient<$Result.GetResult<Prisma.$CategoriesOfMaterialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order_details<T extends CategoriesDetails$order_detailsArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDetails$order_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoriesDetails model
   */
  interface CategoriesDetailsFieldRefs {
    readonly id: FieldRef<"CategoriesDetails", 'Int'>
    readonly It_detail_name: FieldRef<"CategoriesDetails", 'String'>
    readonly code: FieldRef<"CategoriesDetails", 'String'>
    readonly dimensions: FieldRef<"CategoriesDetails", 'String'>
    readonly total: FieldRef<"CategoriesDetails", 'BigInt'>
    readonly rest: FieldRef<"CategoriesDetails", 'Int'>
    readonly remaining: FieldRef<"CategoriesDetails", 'Int'>
    readonly category_material_id: FieldRef<"CategoriesDetails", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoriesDetails findUnique
   */
  export type CategoriesDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesDetails to fetch.
     */
    where: CategoriesDetailsWhereUniqueInput
  }

  /**
   * CategoriesDetails findUniqueOrThrow
   */
  export type CategoriesDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesDetails to fetch.
     */
    where: CategoriesDetailsWhereUniqueInput
  }

  /**
   * CategoriesDetails findFirst
   */
  export type CategoriesDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesDetails to fetch.
     */
    where?: CategoriesDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesDetails to fetch.
     */
    orderBy?: CategoriesDetailsOrderByWithRelationInput | CategoriesDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesDetails.
     */
    cursor?: CategoriesDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesDetails.
     */
    distinct?: CategoriesDetailsScalarFieldEnum | CategoriesDetailsScalarFieldEnum[]
  }

  /**
   * CategoriesDetails findFirstOrThrow
   */
  export type CategoriesDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesDetails to fetch.
     */
    where?: CategoriesDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesDetails to fetch.
     */
    orderBy?: CategoriesDetailsOrderByWithRelationInput | CategoriesDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesDetails.
     */
    cursor?: CategoriesDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesDetails.
     */
    distinct?: CategoriesDetailsScalarFieldEnum | CategoriesDetailsScalarFieldEnum[]
  }

  /**
   * CategoriesDetails findMany
   */
  export type CategoriesDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesDetails to fetch.
     */
    where?: CategoriesDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesDetails to fetch.
     */
    orderBy?: CategoriesDetailsOrderByWithRelationInput | CategoriesDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriesDetails.
     */
    cursor?: CategoriesDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesDetails.
     */
    skip?: number
    distinct?: CategoriesDetailsScalarFieldEnum | CategoriesDetailsScalarFieldEnum[]
  }

  /**
   * CategoriesDetails create
   */
  export type CategoriesDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriesDetails.
     */
    data: XOR<CategoriesDetailsCreateInput, CategoriesDetailsUncheckedCreateInput>
  }

  /**
   * CategoriesDetails createMany
   */
  export type CategoriesDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriesDetails.
     */
    data: CategoriesDetailsCreateManyInput | CategoriesDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriesDetails update
   */
  export type CategoriesDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriesDetails.
     */
    data: XOR<CategoriesDetailsUpdateInput, CategoriesDetailsUncheckedUpdateInput>
    /**
     * Choose, which CategoriesDetails to update.
     */
    where: CategoriesDetailsWhereUniqueInput
  }

  /**
   * CategoriesDetails updateMany
   */
  export type CategoriesDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriesDetails.
     */
    data: XOR<CategoriesDetailsUpdateManyMutationInput, CategoriesDetailsUncheckedUpdateManyInput>
    /**
     * Filter which CategoriesDetails to update
     */
    where?: CategoriesDetailsWhereInput
    /**
     * Limit how many CategoriesDetails to update.
     */
    limit?: number
  }

  /**
   * CategoriesDetails upsert
   */
  export type CategoriesDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriesDetails to update in case it exists.
     */
    where: CategoriesDetailsWhereUniqueInput
    /**
     * In case the CategoriesDetails found by the `where` argument doesn't exist, create a new CategoriesDetails with this data.
     */
    create: XOR<CategoriesDetailsCreateInput, CategoriesDetailsUncheckedCreateInput>
    /**
     * In case the CategoriesDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesDetailsUpdateInput, CategoriesDetailsUncheckedUpdateInput>
  }

  /**
   * CategoriesDetails delete
   */
  export type CategoriesDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
    /**
     * Filter which CategoriesDetails to delete.
     */
    where: CategoriesDetailsWhereUniqueInput
  }

  /**
   * CategoriesDetails deleteMany
   */
  export type CategoriesDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesDetails to delete
     */
    where?: CategoriesDetailsWhereInput
    /**
     * Limit how many CategoriesDetails to delete.
     */
    limit?: number
  }

  /**
   * CategoriesDetails.order_details
   */
  export type CategoriesDetails$order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * CategoriesDetails without action
   */
  export type CategoriesDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesDetails
     */
    select?: CategoriesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesDetails
     */
    omit?: CategoriesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
    agent_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    client_id: number | null
    agent_id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    client_id: number | null
    agent_id: number | null
    order_date: Date | null
    order_status: string | null
    order: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    client_id: number | null
    agent_id: number | null
    order_date: Date | null
    order_status: string | null
    order: string | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    client_id: number
    agent_id: number
    order_date: number
    order_status: number
    order: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
    order_date?: true
    order_status?: true
    order?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
    order_date?: true
    order_status?: true
    order?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
    order_date?: true
    order_status?: true
    order?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    client_id: number
    agent_id: number
    order_date: Date
    order_status: string
    order: string
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    agent_id?: boolean
    order_date?: boolean
    order_status?: boolean
    order?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
    order_details?: boolean | Orders$order_detailsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type OrdersSelectScalar = {
    id?: boolean
    client_id?: boolean
    agent_id?: boolean
    order_date?: boolean
    order_status?: boolean
    order?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id" | "agent_id" | "order_date" | "order_status" | "order", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
    order_details?: boolean | Orders$order_detailsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
      agent: Prisma.$AgentsPayload<ExtArgs>
      order_details: Prisma.$OrderDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_id: number
      agent_id: number
      order_date: Date
      order_status: string
      order: string
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends AgentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentsDefaultArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order_details<T extends Orders$order_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$order_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly client_id: FieldRef<"Orders", 'Int'>
    readonly agent_id: FieldRef<"Orders", 'Int'>
    readonly order_date: FieldRef<"Orders", 'DateTime'>
    readonly order_status: FieldRef<"Orders", 'String'>
    readonly order: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.order_details
   */
  export type Orders$order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetails
   */

  export type AggregateOrderDetails = {
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  export type OrderDetailsAvgAggregateOutputType = {
    id: number | null
    categories_detail_id: number | null
    count: number | null
    price: number | null
    order_id: number | null
  }

  export type OrderDetailsSumAggregateOutputType = {
    id: number | null
    categories_detail_id: number | null
    count: number | null
    price: number | null
    order_id: number | null
  }

  export type OrderDetailsMinAggregateOutputType = {
    id: number | null
    categories_detail_id: number | null
    count: number | null
    price: number | null
    order_id: number | null
  }

  export type OrderDetailsMaxAggregateOutputType = {
    id: number | null
    categories_detail_id: number | null
    count: number | null
    price: number | null
    order_id: number | null
  }

  export type OrderDetailsCountAggregateOutputType = {
    id: number
    categories_detail_id: number
    count: number
    price: number
    order_id: number
    _all: number
  }


  export type OrderDetailsAvgAggregateInputType = {
    id?: true
    categories_detail_id?: true
    count?: true
    price?: true
    order_id?: true
  }

  export type OrderDetailsSumAggregateInputType = {
    id?: true
    categories_detail_id?: true
    count?: true
    price?: true
    order_id?: true
  }

  export type OrderDetailsMinAggregateInputType = {
    id?: true
    categories_detail_id?: true
    count?: true
    price?: true
    order_id?: true
  }

  export type OrderDetailsMaxAggregateInputType = {
    id?: true
    categories_detail_id?: true
    count?: true
    price?: true
    order_id?: true
  }

  export type OrderDetailsCountAggregateInputType = {
    id?: true
    categories_detail_id?: true
    count?: true
    price?: true
    order_id?: true
    _all?: true
  }

  export type OrderDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to aggregate.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type GetOrderDetailsAggregateType<T extends OrderDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetails[P]>
      : GetScalarType<T[P], AggregateOrderDetails[P]>
  }




  export type OrderDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithAggregationInput | OrderDetailsOrderByWithAggregationInput[]
    by: OrderDetailsScalarFieldEnum[] | OrderDetailsScalarFieldEnum
    having?: OrderDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailsCountAggregateInputType | true
    _avg?: OrderDetailsAvgAggregateInputType
    _sum?: OrderDetailsSumAggregateInputType
    _min?: OrderDetailsMinAggregateInputType
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type OrderDetailsGroupByOutputType = {
    id: number
    categories_detail_id: number
    count: number
    price: number
    order_id: number
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  type GetOrderDetailsGroupByPayload<T extends OrderDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categories_detail_id?: boolean
    count?: boolean
    price?: boolean
    order_id?: boolean
    categories_details?: boolean | CategoriesDetailsDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>



  export type OrderDetailsSelectScalar = {
    id?: boolean
    categories_detail_id?: boolean
    count?: boolean
    price?: boolean
    order_id?: boolean
  }

  export type OrderDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categories_detail_id" | "count" | "price" | "order_id", ExtArgs["result"]["orderDetails"]>
  export type OrderDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_details?: boolean | CategoriesDetailsDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $OrderDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetails"
    objects: {
      categories_details: Prisma.$CategoriesDetailsPayload<ExtArgs>
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categories_detail_id: number
      count: number
      price: number
      order_id: number
    }, ExtArgs["result"]["orderDetails"]>
    composites: {}
  }

  type OrderDetailsGetPayload<S extends boolean | null | undefined | OrderDetailsDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailsPayload, S>

  type OrderDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderDetailsCountAggregateInputType | true
    }

  export interface OrderDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetails'], meta: { name: 'OrderDetails' } }
    /**
     * Find zero or one OrderDetails that matches the filter.
     * @param {OrderDetailsFindUniqueArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailsFindUniqueArgs>(args: SelectSubset<T, OrderDetailsFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDetailsFindUniqueOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailsFindFirstArgs>(args?: SelectSubset<T, OrderDetailsFindFirstArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderDetailsFindManyArgs>(args?: SelectSubset<T, OrderDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderDetails.
     * @param {OrderDetailsCreateArgs} args - Arguments to create a OrderDetails.
     * @example
     * // Create one OrderDetails
     * const OrderDetails = await prisma.orderDetails.create({
     *   data: {
     *     // ... data to create a OrderDetails
     *   }
     * })
     * 
     */
    create<T extends OrderDetailsCreateArgs>(args: SelectSubset<T, OrderDetailsCreateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailsCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailsCreateManyArgs>(args?: SelectSubset<T, OrderDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderDetails.
     * @param {OrderDetailsDeleteArgs} args - Arguments to delete one OrderDetails.
     * @example
     * // Delete one OrderDetails
     * const OrderDetails = await prisma.orderDetails.delete({
     *   where: {
     *     // ... filter to delete one OrderDetails
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailsDeleteArgs>(args: SelectSubset<T, OrderDetailsDeleteArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderDetails.
     * @param {OrderDetailsUpdateArgs} args - Arguments to update one OrderDetails.
     * @example
     * // Update one OrderDetails
     * const orderDetails = await prisma.orderDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailsUpdateArgs>(args: SelectSubset<T, OrderDetailsUpdateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailsDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailsDeleteManyArgs>(args?: SelectSubset<T, OrderDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailsUpdateManyArgs>(args: SelectSubset<T, OrderDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderDetails.
     * @param {OrderDetailsUpsertArgs} args - Arguments to update or create a OrderDetails.
     * @example
     * // Update or create a OrderDetails
     * const orderDetails = await prisma.orderDetails.upsert({
     *   create: {
     *     // ... data to create a OrderDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetails we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailsUpsertArgs>(args: SelectSubset<T, OrderDetailsUpsertArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetails.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailsCountArgs>(
      args?: Subset<T, OrderDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderDetailsAggregateArgs>(args: Subset<T, OrderDetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailsAggregateType<T>>

    /**
     * Group by OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailsGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetails model
   */
  readonly fields: OrderDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories_details<T extends CategoriesDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDetailsDefaultArgs<ExtArgs>>): Prisma__CategoriesDetailsClient<$Result.GetResult<Prisma.$CategoriesDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderDetails model
   */
  interface OrderDetailsFieldRefs {
    readonly id: FieldRef<"OrderDetails", 'Int'>
    readonly categories_detail_id: FieldRef<"OrderDetails", 'Int'>
    readonly count: FieldRef<"OrderDetails", 'Int'>
    readonly price: FieldRef<"OrderDetails", 'Float'>
    readonly order_id: FieldRef<"OrderDetails", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetails findUnique
   */
  export type OrderDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findUniqueOrThrow
   */
  export type OrderDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findFirst
   */
  export type OrderDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findFirstOrThrow
   */
  export type OrderDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findMany
   */
  export type OrderDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails create
   */
  export type OrderDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetails.
     */
    data: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
  }

  /**
   * OrderDetails createMany
   */
  export type OrderDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDetails update
   */
  export type OrderDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetails.
     */
    data: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
    /**
     * Choose, which OrderDetails to update.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails updateMany
   */
  export type OrderDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
  }

  /**
   * OrderDetails upsert
   */
  export type OrderDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetails to update in case it exists.
     */
    where: OrderDetailsWhereUniqueInput
    /**
     * In case the OrderDetails found by the `where` argument doesn't exist, create a new OrderDetails with this data.
     */
    create: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
    /**
     * In case the OrderDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
  }

  /**
   * OrderDetails delete
   */
  export type OrderDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter which OrderDetails to delete.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails deleteMany
   */
  export type OrderDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to delete.
     */
    limit?: number
  }

  /**
   * OrderDetails without action
   */
  export type OrderDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
  }


  /**
   * Model NotificationsAndNotes
   */

  export type AggregateNotificationsAndNotes = {
    _count: NotificationsAndNotesCountAggregateOutputType | null
    _avg: NotificationsAndNotesAvgAggregateOutputType | null
    _sum: NotificationsAndNotesSumAggregateOutputType | null
    _min: NotificationsAndNotesMinAggregateOutputType | null
    _max: NotificationsAndNotesMaxAggregateOutputType | null
  }

  export type NotificationsAndNotesAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
    agent_id: number | null
  }

  export type NotificationsAndNotesSumAggregateOutputType = {
    id: number | null
    client_id: number | null
    agent_id: number | null
  }

  export type NotificationsAndNotesMinAggregateOutputType = {
    id: number | null
    client_id: number | null
    agent_id: number | null
    title: string | null
    body: string | null
    Notice_Date: Date | null
  }

  export type NotificationsAndNotesMaxAggregateOutputType = {
    id: number | null
    client_id: number | null
    agent_id: number | null
    title: string | null
    body: string | null
    Notice_Date: Date | null
  }

  export type NotificationsAndNotesCountAggregateOutputType = {
    id: number
    client_id: number
    agent_id: number
    title: number
    body: number
    Notice_Date: number
    _all: number
  }


  export type NotificationsAndNotesAvgAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
  }

  export type NotificationsAndNotesSumAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
  }

  export type NotificationsAndNotesMinAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
    title?: true
    body?: true
    Notice_Date?: true
  }

  export type NotificationsAndNotesMaxAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
    title?: true
    body?: true
    Notice_Date?: true
  }

  export type NotificationsAndNotesCountAggregateInputType = {
    id?: true
    client_id?: true
    agent_id?: true
    title?: true
    body?: true
    Notice_Date?: true
    _all?: true
  }

  export type NotificationsAndNotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationsAndNotes to aggregate.
     */
    where?: NotificationsAndNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationsAndNotes to fetch.
     */
    orderBy?: NotificationsAndNotesOrderByWithRelationInput | NotificationsAndNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsAndNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationsAndNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationsAndNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationsAndNotes
    **/
    _count?: true | NotificationsAndNotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAndNotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsAndNotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsAndNotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsAndNotesMaxAggregateInputType
  }

  export type GetNotificationsAndNotesAggregateType<T extends NotificationsAndNotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationsAndNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationsAndNotes[P]>
      : GetScalarType<T[P], AggregateNotificationsAndNotes[P]>
  }




  export type NotificationsAndNotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsAndNotesWhereInput
    orderBy?: NotificationsAndNotesOrderByWithAggregationInput | NotificationsAndNotesOrderByWithAggregationInput[]
    by: NotificationsAndNotesScalarFieldEnum[] | NotificationsAndNotesScalarFieldEnum
    having?: NotificationsAndNotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsAndNotesCountAggregateInputType | true
    _avg?: NotificationsAndNotesAvgAggregateInputType
    _sum?: NotificationsAndNotesSumAggregateInputType
    _min?: NotificationsAndNotesMinAggregateInputType
    _max?: NotificationsAndNotesMaxAggregateInputType
  }

  export type NotificationsAndNotesGroupByOutputType = {
    id: number
    client_id: number
    agent_id: number
    title: string
    body: string
    Notice_Date: Date
    _count: NotificationsAndNotesCountAggregateOutputType | null
    _avg: NotificationsAndNotesAvgAggregateOutputType | null
    _sum: NotificationsAndNotesSumAggregateOutputType | null
    _min: NotificationsAndNotesMinAggregateOutputType | null
    _max: NotificationsAndNotesMaxAggregateOutputType | null
  }

  type GetNotificationsAndNotesGroupByPayload<T extends NotificationsAndNotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsAndNotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsAndNotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsAndNotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsAndNotesGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsAndNotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    agent_id?: boolean
    title?: boolean
    body?: boolean
    Notice_Date?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationsAndNotes"]>



  export type NotificationsAndNotesSelectScalar = {
    id?: boolean
    client_id?: boolean
    agent_id?: boolean
    title?: boolean
    body?: boolean
    Notice_Date?: boolean
  }

  export type NotificationsAndNotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id" | "agent_id" | "title" | "body" | "Notice_Date", ExtArgs["result"]["notificationsAndNotes"]>
  export type NotificationsAndNotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    agent?: boolean | AgentsDefaultArgs<ExtArgs>
  }

  export type $NotificationsAndNotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationsAndNotes"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
      agent: Prisma.$AgentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_id: number
      agent_id: number
      title: string
      body: string
      Notice_Date: Date
    }, ExtArgs["result"]["notificationsAndNotes"]>
    composites: {}
  }

  type NotificationsAndNotesGetPayload<S extends boolean | null | undefined | NotificationsAndNotesDefaultArgs> = $Result.GetResult<Prisma.$NotificationsAndNotesPayload, S>

  type NotificationsAndNotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsAndNotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsAndNotesCountAggregateInputType | true
    }

  export interface NotificationsAndNotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationsAndNotes'], meta: { name: 'NotificationsAndNotes' } }
    /**
     * Find zero or one NotificationsAndNotes that matches the filter.
     * @param {NotificationsAndNotesFindUniqueArgs} args - Arguments to find a NotificationsAndNotes
     * @example
     * // Get one NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsAndNotesFindUniqueArgs>(args: SelectSubset<T, NotificationsAndNotesFindUniqueArgs<ExtArgs>>): Prisma__NotificationsAndNotesClient<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationsAndNotes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsAndNotesFindUniqueOrThrowArgs} args - Arguments to find a NotificationsAndNotes
     * @example
     * // Get one NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsAndNotesFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsAndNotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsAndNotesClient<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationsAndNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAndNotesFindFirstArgs} args - Arguments to find a NotificationsAndNotes
     * @example
     * // Get one NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsAndNotesFindFirstArgs>(args?: SelectSubset<T, NotificationsAndNotesFindFirstArgs<ExtArgs>>): Prisma__NotificationsAndNotesClient<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationsAndNotes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAndNotesFindFirstOrThrowArgs} args - Arguments to find a NotificationsAndNotes
     * @example
     * // Get one NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsAndNotesFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsAndNotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsAndNotesClient<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationsAndNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAndNotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.findMany()
     * 
     * // Get first 10 NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsAndNotesWithIdOnly = await prisma.notificationsAndNotes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsAndNotesFindManyArgs>(args?: SelectSubset<T, NotificationsAndNotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationsAndNotes.
     * @param {NotificationsAndNotesCreateArgs} args - Arguments to create a NotificationsAndNotes.
     * @example
     * // Create one NotificationsAndNotes
     * const NotificationsAndNotes = await prisma.notificationsAndNotes.create({
     *   data: {
     *     // ... data to create a NotificationsAndNotes
     *   }
     * })
     * 
     */
    create<T extends NotificationsAndNotesCreateArgs>(args: SelectSubset<T, NotificationsAndNotesCreateArgs<ExtArgs>>): Prisma__NotificationsAndNotesClient<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationsAndNotes.
     * @param {NotificationsAndNotesCreateManyArgs} args - Arguments to create many NotificationsAndNotes.
     * @example
     * // Create many NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsAndNotesCreateManyArgs>(args?: SelectSubset<T, NotificationsAndNotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationsAndNotes.
     * @param {NotificationsAndNotesDeleteArgs} args - Arguments to delete one NotificationsAndNotes.
     * @example
     * // Delete one NotificationsAndNotes
     * const NotificationsAndNotes = await prisma.notificationsAndNotes.delete({
     *   where: {
     *     // ... filter to delete one NotificationsAndNotes
     *   }
     * })
     * 
     */
    delete<T extends NotificationsAndNotesDeleteArgs>(args: SelectSubset<T, NotificationsAndNotesDeleteArgs<ExtArgs>>): Prisma__NotificationsAndNotesClient<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationsAndNotes.
     * @param {NotificationsAndNotesUpdateArgs} args - Arguments to update one NotificationsAndNotes.
     * @example
     * // Update one NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsAndNotesUpdateArgs>(args: SelectSubset<T, NotificationsAndNotesUpdateArgs<ExtArgs>>): Prisma__NotificationsAndNotesClient<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationsAndNotes.
     * @param {NotificationsAndNotesDeleteManyArgs} args - Arguments to filter NotificationsAndNotes to delete.
     * @example
     * // Delete a few NotificationsAndNotes
     * const { count } = await prisma.notificationsAndNotes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsAndNotesDeleteManyArgs>(args?: SelectSubset<T, NotificationsAndNotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationsAndNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAndNotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsAndNotesUpdateManyArgs>(args: SelectSubset<T, NotificationsAndNotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationsAndNotes.
     * @param {NotificationsAndNotesUpsertArgs} args - Arguments to update or create a NotificationsAndNotes.
     * @example
     * // Update or create a NotificationsAndNotes
     * const notificationsAndNotes = await prisma.notificationsAndNotes.upsert({
     *   create: {
     *     // ... data to create a NotificationsAndNotes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationsAndNotes we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsAndNotesUpsertArgs>(args: SelectSubset<T, NotificationsAndNotesUpsertArgs<ExtArgs>>): Prisma__NotificationsAndNotesClient<$Result.GetResult<Prisma.$NotificationsAndNotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationsAndNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAndNotesCountArgs} args - Arguments to filter NotificationsAndNotes to count.
     * @example
     * // Count the number of NotificationsAndNotes
     * const count = await prisma.notificationsAndNotes.count({
     *   where: {
     *     // ... the filter for the NotificationsAndNotes we want to count
     *   }
     * })
    **/
    count<T extends NotificationsAndNotesCountArgs>(
      args?: Subset<T, NotificationsAndNotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsAndNotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationsAndNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAndNotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAndNotesAggregateArgs>(args: Subset<T, NotificationsAndNotesAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAndNotesAggregateType<T>>

    /**
     * Group by NotificationsAndNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAndNotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsAndNotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsAndNotesGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsAndNotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsAndNotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsAndNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationsAndNotes model
   */
  readonly fields: NotificationsAndNotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationsAndNotes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsAndNotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends AgentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentsDefaultArgs<ExtArgs>>): Prisma__AgentsClient<$Result.GetResult<Prisma.$AgentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotificationsAndNotes model
   */
  interface NotificationsAndNotesFieldRefs {
    readonly id: FieldRef<"NotificationsAndNotes", 'Int'>
    readonly client_id: FieldRef<"NotificationsAndNotes", 'Int'>
    readonly agent_id: FieldRef<"NotificationsAndNotes", 'Int'>
    readonly title: FieldRef<"NotificationsAndNotes", 'String'>
    readonly body: FieldRef<"NotificationsAndNotes", 'String'>
    readonly Notice_Date: FieldRef<"NotificationsAndNotes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationsAndNotes findUnique
   */
  export type NotificationsAndNotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationsAndNotes to fetch.
     */
    where: NotificationsAndNotesWhereUniqueInput
  }

  /**
   * NotificationsAndNotes findUniqueOrThrow
   */
  export type NotificationsAndNotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationsAndNotes to fetch.
     */
    where: NotificationsAndNotesWhereUniqueInput
  }

  /**
   * NotificationsAndNotes findFirst
   */
  export type NotificationsAndNotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationsAndNotes to fetch.
     */
    where?: NotificationsAndNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationsAndNotes to fetch.
     */
    orderBy?: NotificationsAndNotesOrderByWithRelationInput | NotificationsAndNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationsAndNotes.
     */
    cursor?: NotificationsAndNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationsAndNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationsAndNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationsAndNotes.
     */
    distinct?: NotificationsAndNotesScalarFieldEnum | NotificationsAndNotesScalarFieldEnum[]
  }

  /**
   * NotificationsAndNotes findFirstOrThrow
   */
  export type NotificationsAndNotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationsAndNotes to fetch.
     */
    where?: NotificationsAndNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationsAndNotes to fetch.
     */
    orderBy?: NotificationsAndNotesOrderByWithRelationInput | NotificationsAndNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationsAndNotes.
     */
    cursor?: NotificationsAndNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationsAndNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationsAndNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationsAndNotes.
     */
    distinct?: NotificationsAndNotesScalarFieldEnum | NotificationsAndNotesScalarFieldEnum[]
  }

  /**
   * NotificationsAndNotes findMany
   */
  export type NotificationsAndNotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationsAndNotes to fetch.
     */
    where?: NotificationsAndNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationsAndNotes to fetch.
     */
    orderBy?: NotificationsAndNotesOrderByWithRelationInput | NotificationsAndNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationsAndNotes.
     */
    cursor?: NotificationsAndNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationsAndNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationsAndNotes.
     */
    skip?: number
    distinct?: NotificationsAndNotesScalarFieldEnum | NotificationsAndNotesScalarFieldEnum[]
  }

  /**
   * NotificationsAndNotes create
   */
  export type NotificationsAndNotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationsAndNotes.
     */
    data: XOR<NotificationsAndNotesCreateInput, NotificationsAndNotesUncheckedCreateInput>
  }

  /**
   * NotificationsAndNotes createMany
   */
  export type NotificationsAndNotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationsAndNotes.
     */
    data: NotificationsAndNotesCreateManyInput | NotificationsAndNotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationsAndNotes update
   */
  export type NotificationsAndNotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationsAndNotes.
     */
    data: XOR<NotificationsAndNotesUpdateInput, NotificationsAndNotesUncheckedUpdateInput>
    /**
     * Choose, which NotificationsAndNotes to update.
     */
    where: NotificationsAndNotesWhereUniqueInput
  }

  /**
   * NotificationsAndNotes updateMany
   */
  export type NotificationsAndNotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationsAndNotes.
     */
    data: XOR<NotificationsAndNotesUpdateManyMutationInput, NotificationsAndNotesUncheckedUpdateManyInput>
    /**
     * Filter which NotificationsAndNotes to update
     */
    where?: NotificationsAndNotesWhereInput
    /**
     * Limit how many NotificationsAndNotes to update.
     */
    limit?: number
  }

  /**
   * NotificationsAndNotes upsert
   */
  export type NotificationsAndNotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationsAndNotes to update in case it exists.
     */
    where: NotificationsAndNotesWhereUniqueInput
    /**
     * In case the NotificationsAndNotes found by the `where` argument doesn't exist, create a new NotificationsAndNotes with this data.
     */
    create: XOR<NotificationsAndNotesCreateInput, NotificationsAndNotesUncheckedCreateInput>
    /**
     * In case the NotificationsAndNotes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsAndNotesUpdateInput, NotificationsAndNotesUncheckedUpdateInput>
  }

  /**
   * NotificationsAndNotes delete
   */
  export type NotificationsAndNotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
    /**
     * Filter which NotificationsAndNotes to delete.
     */
    where: NotificationsAndNotesWhereUniqueInput
  }

  /**
   * NotificationsAndNotes deleteMany
   */
  export type NotificationsAndNotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationsAndNotes to delete
     */
    where?: NotificationsAndNotesWhereInput
    /**
     * Limit how many NotificationsAndNotes to delete.
     */
    limit?: number
  }

  /**
   * NotificationsAndNotes without action
   */
  export type NotificationsAndNotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationsAndNotes
     */
    select?: NotificationsAndNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationsAndNotes
     */
    omit?: NotificationsAndNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsAndNotesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AgentsScalarFieldEnum: {
    id: 'id',
    agent_name: 'agent_name',
    password: 'password',
    role: 'role'
  };

  export type AgentsScalarFieldEnum = (typeof AgentsScalarFieldEnum)[keyof typeof AgentsScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    client_name: 'client_name',
    password: 'password',
    phone_number: 'phone_number',
    city: 'city'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const MaterialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date_added: 'date_added',
    agent_id: 'agent_id'
  };

  export type MaterialsScalarFieldEnum = (typeof MaterialsScalarFieldEnum)[keyof typeof MaterialsScalarFieldEnum]


  export const CategoriesOfMaterialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    material_id: 'material_id',
    parent_id: 'parent_id'
  };

  export type CategoriesOfMaterialsScalarFieldEnum = (typeof CategoriesOfMaterialsScalarFieldEnum)[keyof typeof CategoriesOfMaterialsScalarFieldEnum]


  export const CategoriesDetailsScalarFieldEnum: {
    id: 'id',
    It_detail_name: 'It_detail_name',
    code: 'code',
    dimensions: 'dimensions',
    total: 'total',
    rest: 'rest',
    remaining: 'remaining',
    category_material_id: 'category_material_id'
  };

  export type CategoriesDetailsScalarFieldEnum = (typeof CategoriesDetailsScalarFieldEnum)[keyof typeof CategoriesDetailsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    agent_id: 'agent_id',
    order_date: 'order_date',
    order_status: 'order_status',
    order: 'order'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderDetailsScalarFieldEnum: {
    id: 'id',
    categories_detail_id: 'categories_detail_id',
    count: 'count',
    price: 'price',
    order_id: 'order_id'
  };

  export type OrderDetailsScalarFieldEnum = (typeof OrderDetailsScalarFieldEnum)[keyof typeof OrderDetailsScalarFieldEnum]


  export const NotificationsAndNotesScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    agent_id: 'agent_id',
    title: 'title',
    body: 'body',
    Notice_Date: 'Notice_Date'
  };

  export type NotificationsAndNotesScalarFieldEnum = (typeof NotificationsAndNotesScalarFieldEnum)[keyof typeof NotificationsAndNotesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AgentsOrderByRelevanceFieldEnum: {
    agent_name: 'agent_name',
    password: 'password',
    role: 'role'
  };

  export type AgentsOrderByRelevanceFieldEnum = (typeof AgentsOrderByRelevanceFieldEnum)[keyof typeof AgentsOrderByRelevanceFieldEnum]


  export const ClientsOrderByRelevanceFieldEnum: {
    client_name: 'client_name',
    password: 'password',
    phone_number: 'phone_number',
    city: 'city'
  };

  export type ClientsOrderByRelevanceFieldEnum = (typeof ClientsOrderByRelevanceFieldEnum)[keyof typeof ClientsOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MaterialsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type MaterialsOrderByRelevanceFieldEnum = (typeof MaterialsOrderByRelevanceFieldEnum)[keyof typeof MaterialsOrderByRelevanceFieldEnum]


  export const CategoriesOfMaterialsOrderByRelevanceFieldEnum: {
    name: 'name',
    image: 'image'
  };

  export type CategoriesOfMaterialsOrderByRelevanceFieldEnum = (typeof CategoriesOfMaterialsOrderByRelevanceFieldEnum)[keyof typeof CategoriesOfMaterialsOrderByRelevanceFieldEnum]


  export const CategoriesDetailsOrderByRelevanceFieldEnum: {
    It_detail_name: 'It_detail_name',
    code: 'code',
    dimensions: 'dimensions'
  };

  export type CategoriesDetailsOrderByRelevanceFieldEnum = (typeof CategoriesDetailsOrderByRelevanceFieldEnum)[keyof typeof CategoriesDetailsOrderByRelevanceFieldEnum]


  export const OrdersOrderByRelevanceFieldEnum: {
    order_status: 'order_status',
    order: 'order'
  };

  export type OrdersOrderByRelevanceFieldEnum = (typeof OrdersOrderByRelevanceFieldEnum)[keyof typeof OrdersOrderByRelevanceFieldEnum]


  export const NotificationsAndNotesOrderByRelevanceFieldEnum: {
    title: 'title',
    body: 'body'
  };

  export type NotificationsAndNotesOrderByRelevanceFieldEnum = (typeof NotificationsAndNotesOrderByRelevanceFieldEnum)[keyof typeof NotificationsAndNotesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AgentsWhereInput = {
    AND?: AgentsWhereInput | AgentsWhereInput[]
    OR?: AgentsWhereInput[]
    NOT?: AgentsWhereInput | AgentsWhereInput[]
    id?: IntFilter<"Agents"> | number
    agent_name?: StringFilter<"Agents"> | string
    password?: StringFilter<"Agents"> | string
    role?: StringFilter<"Agents"> | string
    materials?: MaterialsListRelationFilter
    orders?: OrdersListRelationFilter
    notifications_and_notes?: NotificationsAndNotesListRelationFilter
  }

  export type AgentsOrderByWithRelationInput = {
    id?: SortOrder
    agent_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    materials?: MaterialsOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
    notifications_and_notes?: NotificationsAndNotesOrderByRelationAggregateInput
    _relevance?: AgentsOrderByRelevanceInput
  }

  export type AgentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgentsWhereInput | AgentsWhereInput[]
    OR?: AgentsWhereInput[]
    NOT?: AgentsWhereInput | AgentsWhereInput[]
    agent_name?: StringFilter<"Agents"> | string
    password?: StringFilter<"Agents"> | string
    role?: StringFilter<"Agents"> | string
    materials?: MaterialsListRelationFilter
    orders?: OrdersListRelationFilter
    notifications_and_notes?: NotificationsAndNotesListRelationFilter
  }, "id">

  export type AgentsOrderByWithAggregationInput = {
    id?: SortOrder
    agent_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: AgentsCountOrderByAggregateInput
    _avg?: AgentsAvgOrderByAggregateInput
    _max?: AgentsMaxOrderByAggregateInput
    _min?: AgentsMinOrderByAggregateInput
    _sum?: AgentsSumOrderByAggregateInput
  }

  export type AgentsScalarWhereWithAggregatesInput = {
    AND?: AgentsScalarWhereWithAggregatesInput | AgentsScalarWhereWithAggregatesInput[]
    OR?: AgentsScalarWhereWithAggregatesInput[]
    NOT?: AgentsScalarWhereWithAggregatesInput | AgentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agents"> | number
    agent_name?: StringWithAggregatesFilter<"Agents"> | string
    password?: StringWithAggregatesFilter<"Agents"> | string
    role?: StringWithAggregatesFilter<"Agents"> | string
  }

  export type ClientsWhereInput = {
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    id?: IntFilter<"Clients"> | number
    client_name?: StringFilter<"Clients"> | string
    password?: StringFilter<"Clients"> | string
    phone_number?: StringFilter<"Clients"> | string
    city?: StringFilter<"Clients"> | string
    orders?: OrdersListRelationFilter
    notifications_and_notes?: NotificationsAndNotesListRelationFilter
  }

  export type ClientsOrderByWithRelationInput = {
    id?: SortOrder
    client_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
    orders?: OrdersOrderByRelationAggregateInput
    notifications_and_notes?: NotificationsAndNotesOrderByRelationAggregateInput
    _relevance?: ClientsOrderByRelevanceInput
  }

  export type ClientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    client_name?: StringFilter<"Clients"> | string
    password?: StringFilter<"Clients"> | string
    phone_number?: StringFilter<"Clients"> | string
    city?: StringFilter<"Clients"> | string
    orders?: OrdersListRelationFilter
    notifications_and_notes?: NotificationsAndNotesListRelationFilter
  }, "id">

  export type ClientsOrderByWithAggregationInput = {
    id?: SortOrder
    client_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
    _count?: ClientsCountOrderByAggregateInput
    _avg?: ClientsAvgOrderByAggregateInput
    _max?: ClientsMaxOrderByAggregateInput
    _min?: ClientsMinOrderByAggregateInput
    _sum?: ClientsSumOrderByAggregateInput
  }

  export type ClientsScalarWhereWithAggregatesInput = {
    AND?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    OR?: ClientsScalarWhereWithAggregatesInput[]
    NOT?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clients"> | number
    client_name?: StringWithAggregatesFilter<"Clients"> | string
    password?: StringWithAggregatesFilter<"Clients"> | string
    phone_number?: StringWithAggregatesFilter<"Clients"> | string
    city?: StringWithAggregatesFilter<"Clients"> | string
  }

  export type MaterialsWhereInput = {
    AND?: MaterialsWhereInput | MaterialsWhereInput[]
    OR?: MaterialsWhereInput[]
    NOT?: MaterialsWhereInput | MaterialsWhereInput[]
    id?: IntFilter<"Materials"> | number
    name?: StringFilter<"Materials"> | string
    date_added?: IntFilter<"Materials"> | number
    agent_id?: IntNullableFilter<"Materials"> | number | null
    agent?: XOR<AgentsNullableScalarRelationFilter, AgentsWhereInput> | null
    categories_of_materials?: CategoriesOfMaterialsListRelationFilter
  }

  export type MaterialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    agent_id?: SortOrderInput | SortOrder
    agent?: AgentsOrderByWithRelationInput
    categories_of_materials?: CategoriesOfMaterialsOrderByRelationAggregateInput
    _relevance?: MaterialsOrderByRelevanceInput
  }

  export type MaterialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialsWhereInput | MaterialsWhereInput[]
    OR?: MaterialsWhereInput[]
    NOT?: MaterialsWhereInput | MaterialsWhereInput[]
    name?: StringFilter<"Materials"> | string
    date_added?: IntFilter<"Materials"> | number
    agent_id?: IntNullableFilter<"Materials"> | number | null
    agent?: XOR<AgentsNullableScalarRelationFilter, AgentsWhereInput> | null
    categories_of_materials?: CategoriesOfMaterialsListRelationFilter
  }, "id">

  export type MaterialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    agent_id?: SortOrderInput | SortOrder
    _count?: MaterialsCountOrderByAggregateInput
    _avg?: MaterialsAvgOrderByAggregateInput
    _max?: MaterialsMaxOrderByAggregateInput
    _min?: MaterialsMinOrderByAggregateInput
    _sum?: MaterialsSumOrderByAggregateInput
  }

  export type MaterialsScalarWhereWithAggregatesInput = {
    AND?: MaterialsScalarWhereWithAggregatesInput | MaterialsScalarWhereWithAggregatesInput[]
    OR?: MaterialsScalarWhereWithAggregatesInput[]
    NOT?: MaterialsScalarWhereWithAggregatesInput | MaterialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Materials"> | number
    name?: StringWithAggregatesFilter<"Materials"> | string
    date_added?: IntWithAggregatesFilter<"Materials"> | number
    agent_id?: IntNullableWithAggregatesFilter<"Materials"> | number | null
  }

  export type CategoriesOfMaterialsWhereInput = {
    AND?: CategoriesOfMaterialsWhereInput | CategoriesOfMaterialsWhereInput[]
    OR?: CategoriesOfMaterialsWhereInput[]
    NOT?: CategoriesOfMaterialsWhereInput | CategoriesOfMaterialsWhereInput[]
    id?: IntFilter<"CategoriesOfMaterials"> | number
    name?: StringFilter<"CategoriesOfMaterials"> | string
    image?: StringFilter<"CategoriesOfMaterials"> | string
    material_id?: IntFilter<"CategoriesOfMaterials"> | number
    parent_id?: IntNullableFilter<"CategoriesOfMaterials"> | number | null
    material?: XOR<MaterialsScalarRelationFilter, MaterialsWhereInput>
    categories_details?: CategoriesDetailsListRelationFilter
  }

  export type CategoriesOfMaterialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    material_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    material?: MaterialsOrderByWithRelationInput
    categories_details?: CategoriesDetailsOrderByRelationAggregateInput
    _relevance?: CategoriesOfMaterialsOrderByRelevanceInput
  }

  export type CategoriesOfMaterialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesOfMaterialsWhereInput | CategoriesOfMaterialsWhereInput[]
    OR?: CategoriesOfMaterialsWhereInput[]
    NOT?: CategoriesOfMaterialsWhereInput | CategoriesOfMaterialsWhereInput[]
    name?: StringFilter<"CategoriesOfMaterials"> | string
    image?: StringFilter<"CategoriesOfMaterials"> | string
    material_id?: IntFilter<"CategoriesOfMaterials"> | number
    parent_id?: IntNullableFilter<"CategoriesOfMaterials"> | number | null
    material?: XOR<MaterialsScalarRelationFilter, MaterialsWhereInput>
    categories_details?: CategoriesDetailsListRelationFilter
  }, "id">

  export type CategoriesOfMaterialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    material_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: CategoriesOfMaterialsCountOrderByAggregateInput
    _avg?: CategoriesOfMaterialsAvgOrderByAggregateInput
    _max?: CategoriesOfMaterialsMaxOrderByAggregateInput
    _min?: CategoriesOfMaterialsMinOrderByAggregateInput
    _sum?: CategoriesOfMaterialsSumOrderByAggregateInput
  }

  export type CategoriesOfMaterialsScalarWhereWithAggregatesInput = {
    AND?: CategoriesOfMaterialsScalarWhereWithAggregatesInput | CategoriesOfMaterialsScalarWhereWithAggregatesInput[]
    OR?: CategoriesOfMaterialsScalarWhereWithAggregatesInput[]
    NOT?: CategoriesOfMaterialsScalarWhereWithAggregatesInput | CategoriesOfMaterialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoriesOfMaterials"> | number
    name?: StringWithAggregatesFilter<"CategoriesOfMaterials"> | string
    image?: StringWithAggregatesFilter<"CategoriesOfMaterials"> | string
    material_id?: IntWithAggregatesFilter<"CategoriesOfMaterials"> | number
    parent_id?: IntNullableWithAggregatesFilter<"CategoriesOfMaterials"> | number | null
  }

  export type CategoriesDetailsWhereInput = {
    AND?: CategoriesDetailsWhereInput | CategoriesDetailsWhereInput[]
    OR?: CategoriesDetailsWhereInput[]
    NOT?: CategoriesDetailsWhereInput | CategoriesDetailsWhereInput[]
    id?: IntFilter<"CategoriesDetails"> | number
    It_detail_name?: StringFilter<"CategoriesDetails"> | string
    code?: StringFilter<"CategoriesDetails"> | string
    dimensions?: StringFilter<"CategoriesDetails"> | string
    total?: BigIntFilter<"CategoriesDetails"> | bigint | number
    rest?: IntFilter<"CategoriesDetails"> | number
    remaining?: IntFilter<"CategoriesDetails"> | number
    category_material_id?: IntFilter<"CategoriesDetails"> | number
    categories_of_materials?: XOR<CategoriesOfMaterialsScalarRelationFilter, CategoriesOfMaterialsWhereInput>
    order_details?: OrderDetailsListRelationFilter
  }

  export type CategoriesDetailsOrderByWithRelationInput = {
    id?: SortOrder
    It_detail_name?: SortOrder
    code?: SortOrder
    dimensions?: SortOrder
    total?: SortOrder
    rest?: SortOrder
    remaining?: SortOrder
    category_material_id?: SortOrder
    categories_of_materials?: CategoriesOfMaterialsOrderByWithRelationInput
    order_details?: OrderDetailsOrderByRelationAggregateInput
    _relevance?: CategoriesDetailsOrderByRelevanceInput
  }

  export type CategoriesDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesDetailsWhereInput | CategoriesDetailsWhereInput[]
    OR?: CategoriesDetailsWhereInput[]
    NOT?: CategoriesDetailsWhereInput | CategoriesDetailsWhereInput[]
    It_detail_name?: StringFilter<"CategoriesDetails"> | string
    code?: StringFilter<"CategoriesDetails"> | string
    dimensions?: StringFilter<"CategoriesDetails"> | string
    total?: BigIntFilter<"CategoriesDetails"> | bigint | number
    rest?: IntFilter<"CategoriesDetails"> | number
    remaining?: IntFilter<"CategoriesDetails"> | number
    category_material_id?: IntFilter<"CategoriesDetails"> | number
    categories_of_materials?: XOR<CategoriesOfMaterialsScalarRelationFilter, CategoriesOfMaterialsWhereInput>
    order_details?: OrderDetailsListRelationFilter
  }, "id">

  export type CategoriesDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    It_detail_name?: SortOrder
    code?: SortOrder
    dimensions?: SortOrder
    total?: SortOrder
    rest?: SortOrder
    remaining?: SortOrder
    category_material_id?: SortOrder
    _count?: CategoriesDetailsCountOrderByAggregateInput
    _avg?: CategoriesDetailsAvgOrderByAggregateInput
    _max?: CategoriesDetailsMaxOrderByAggregateInput
    _min?: CategoriesDetailsMinOrderByAggregateInput
    _sum?: CategoriesDetailsSumOrderByAggregateInput
  }

  export type CategoriesDetailsScalarWhereWithAggregatesInput = {
    AND?: CategoriesDetailsScalarWhereWithAggregatesInput | CategoriesDetailsScalarWhereWithAggregatesInput[]
    OR?: CategoriesDetailsScalarWhereWithAggregatesInput[]
    NOT?: CategoriesDetailsScalarWhereWithAggregatesInput | CategoriesDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoriesDetails"> | number
    It_detail_name?: StringWithAggregatesFilter<"CategoriesDetails"> | string
    code?: StringWithAggregatesFilter<"CategoriesDetails"> | string
    dimensions?: StringWithAggregatesFilter<"CategoriesDetails"> | string
    total?: BigIntWithAggregatesFilter<"CategoriesDetails"> | bigint | number
    rest?: IntWithAggregatesFilter<"CategoriesDetails"> | number
    remaining?: IntWithAggregatesFilter<"CategoriesDetails"> | number
    category_material_id?: IntWithAggregatesFilter<"CategoriesDetails"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    client_id?: IntFilter<"Orders"> | number
    agent_id?: IntFilter<"Orders"> | number
    order_date?: DateTimeFilter<"Orders"> | Date | string
    order_status?: StringFilter<"Orders"> | string
    order?: StringFilter<"Orders"> | string
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    agent?: XOR<AgentsScalarRelationFilter, AgentsWhereInput>
    order_details?: OrderDetailsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    order_date?: SortOrder
    order_status?: SortOrder
    order?: SortOrder
    client?: ClientsOrderByWithRelationInput
    agent?: AgentsOrderByWithRelationInput
    order_details?: OrderDetailsOrderByRelationAggregateInput
    _relevance?: OrdersOrderByRelevanceInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    client_id?: IntFilter<"Orders"> | number
    agent_id?: IntFilter<"Orders"> | number
    order_date?: DateTimeFilter<"Orders"> | Date | string
    order_status?: StringFilter<"Orders"> | string
    order?: StringFilter<"Orders"> | string
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    agent?: XOR<AgentsScalarRelationFilter, AgentsWhereInput>
    order_details?: OrderDetailsListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    order_date?: SortOrder
    order_status?: SortOrder
    order?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    client_id?: IntWithAggregatesFilter<"Orders"> | number
    agent_id?: IntWithAggregatesFilter<"Orders"> | number
    order_date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    order_status?: StringWithAggregatesFilter<"Orders"> | string
    order?: StringWithAggregatesFilter<"Orders"> | string
  }

  export type OrderDetailsWhereInput = {
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    id?: IntFilter<"OrderDetails"> | number
    categories_detail_id?: IntFilter<"OrderDetails"> | number
    count?: IntFilter<"OrderDetails"> | number
    price?: FloatFilter<"OrderDetails"> | number
    order_id?: IntFilter<"OrderDetails"> | number
    categories_details?: XOR<CategoriesDetailsScalarRelationFilter, CategoriesDetailsWhereInput>
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type OrderDetailsOrderByWithRelationInput = {
    id?: SortOrder
    categories_detail_id?: SortOrder
    count?: SortOrder
    price?: SortOrder
    order_id?: SortOrder
    categories_details?: CategoriesDetailsOrderByWithRelationInput
    order?: OrdersOrderByWithRelationInput
  }

  export type OrderDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    categories_detail_id?: IntFilter<"OrderDetails"> | number
    count?: IntFilter<"OrderDetails"> | number
    price?: FloatFilter<"OrderDetails"> | number
    order_id?: IntFilter<"OrderDetails"> | number
    categories_details?: XOR<CategoriesDetailsScalarRelationFilter, CategoriesDetailsWhereInput>
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "id">

  export type OrderDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    categories_detail_id?: SortOrder
    count?: SortOrder
    price?: SortOrder
    order_id?: SortOrder
    _count?: OrderDetailsCountOrderByAggregateInput
    _avg?: OrderDetailsAvgOrderByAggregateInput
    _max?: OrderDetailsMaxOrderByAggregateInput
    _min?: OrderDetailsMinOrderByAggregateInput
    _sum?: OrderDetailsSumOrderByAggregateInput
  }

  export type OrderDetailsScalarWhereWithAggregatesInput = {
    AND?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    OR?: OrderDetailsScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderDetails"> | number
    categories_detail_id?: IntWithAggregatesFilter<"OrderDetails"> | number
    count?: IntWithAggregatesFilter<"OrderDetails"> | number
    price?: FloatWithAggregatesFilter<"OrderDetails"> | number
    order_id?: IntWithAggregatesFilter<"OrderDetails"> | number
  }

  export type NotificationsAndNotesWhereInput = {
    AND?: NotificationsAndNotesWhereInput | NotificationsAndNotesWhereInput[]
    OR?: NotificationsAndNotesWhereInput[]
    NOT?: NotificationsAndNotesWhereInput | NotificationsAndNotesWhereInput[]
    id?: IntFilter<"NotificationsAndNotes"> | number
    client_id?: IntFilter<"NotificationsAndNotes"> | number
    agent_id?: IntFilter<"NotificationsAndNotes"> | number
    title?: StringFilter<"NotificationsAndNotes"> | string
    body?: StringFilter<"NotificationsAndNotes"> | string
    Notice_Date?: DateTimeFilter<"NotificationsAndNotes"> | Date | string
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    agent?: XOR<AgentsScalarRelationFilter, AgentsWhereInput>
  }

  export type NotificationsAndNotesOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    Notice_Date?: SortOrder
    client?: ClientsOrderByWithRelationInput
    agent?: AgentsOrderByWithRelationInput
    _relevance?: NotificationsAndNotesOrderByRelevanceInput
  }

  export type NotificationsAndNotesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationsAndNotesWhereInput | NotificationsAndNotesWhereInput[]
    OR?: NotificationsAndNotesWhereInput[]
    NOT?: NotificationsAndNotesWhereInput | NotificationsAndNotesWhereInput[]
    client_id?: IntFilter<"NotificationsAndNotes"> | number
    agent_id?: IntFilter<"NotificationsAndNotes"> | number
    title?: StringFilter<"NotificationsAndNotes"> | string
    body?: StringFilter<"NotificationsAndNotes"> | string
    Notice_Date?: DateTimeFilter<"NotificationsAndNotes"> | Date | string
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    agent?: XOR<AgentsScalarRelationFilter, AgentsWhereInput>
  }, "id">

  export type NotificationsAndNotesOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    Notice_Date?: SortOrder
    _count?: NotificationsAndNotesCountOrderByAggregateInput
    _avg?: NotificationsAndNotesAvgOrderByAggregateInput
    _max?: NotificationsAndNotesMaxOrderByAggregateInput
    _min?: NotificationsAndNotesMinOrderByAggregateInput
    _sum?: NotificationsAndNotesSumOrderByAggregateInput
  }

  export type NotificationsAndNotesScalarWhereWithAggregatesInput = {
    AND?: NotificationsAndNotesScalarWhereWithAggregatesInput | NotificationsAndNotesScalarWhereWithAggregatesInput[]
    OR?: NotificationsAndNotesScalarWhereWithAggregatesInput[]
    NOT?: NotificationsAndNotesScalarWhereWithAggregatesInput | NotificationsAndNotesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationsAndNotes"> | number
    client_id?: IntWithAggregatesFilter<"NotificationsAndNotes"> | number
    agent_id?: IntWithAggregatesFilter<"NotificationsAndNotes"> | number
    title?: StringWithAggregatesFilter<"NotificationsAndNotes"> | string
    body?: StringWithAggregatesFilter<"NotificationsAndNotes"> | string
    Notice_Date?: DateTimeWithAggregatesFilter<"NotificationsAndNotes"> | Date | string
  }

  export type AgentsCreateInput = {
    agent_name: string
    password: string
    role: string
    materials?: MaterialsCreateNestedManyWithoutAgentInput
    orders?: OrdersCreateNestedManyWithoutAgentInput
    notifications_and_notes?: NotificationsAndNotesCreateNestedManyWithoutAgentInput
  }

  export type AgentsUncheckedCreateInput = {
    id?: number
    agent_name: string
    password: string
    role: string
    materials?: MaterialsUncheckedCreateNestedManyWithoutAgentInput
    orders?: OrdersUncheckedCreateNestedManyWithoutAgentInput
    notifications_and_notes?: NotificationsAndNotesUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentsUpdateInput = {
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    materials?: MaterialsUpdateManyWithoutAgentNestedInput
    orders?: OrdersUpdateManyWithoutAgentNestedInput
    notifications_and_notes?: NotificationsAndNotesUpdateManyWithoutAgentNestedInput
  }

  export type AgentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    materials?: MaterialsUncheckedUpdateManyWithoutAgentNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutAgentNestedInput
    notifications_and_notes?: NotificationsAndNotesUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentsCreateManyInput = {
    id?: number
    agent_name: string
    password: string
    role: string
  }

  export type AgentsUpdateManyMutationInput = {
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AgentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsCreateInput = {
    client_name: string
    password: string
    phone_number: string
    city: string
    orders?: OrdersCreateNestedManyWithoutClientInput
    notifications_and_notes?: NotificationsAndNotesCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateInput = {
    id?: number
    client_name: string
    password: string
    phone_number: string
    city: string
    orders?: OrdersUncheckedCreateNestedManyWithoutClientInput
    notifications_and_notes?: NotificationsAndNotesUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsUpdateInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateManyWithoutClientNestedInput
    notifications_and_notes?: NotificationsAndNotesUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutClientNestedInput
    notifications_and_notes?: NotificationsAndNotesUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsCreateManyInput = {
    id?: number
    client_name: string
    password: string
    phone_number: string
    city: string
  }

  export type ClientsUpdateManyMutationInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialsCreateInput = {
    name: string
    date_added: number
    agent?: AgentsCreateNestedOneWithoutMaterialsInput
    categories_of_materials?: CategoriesOfMaterialsCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsUncheckedCreateInput = {
    id?: number
    name: string
    date_added: number
    agent_id?: number | null
    categories_of_materials?: CategoriesOfMaterialsUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date_added?: IntFieldUpdateOperationsInput | number
    agent?: AgentsUpdateOneWithoutMaterialsNestedInput
    categories_of_materials?: CategoriesOfMaterialsUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date_added?: IntFieldUpdateOperationsInput | number
    agent_id?: NullableIntFieldUpdateOperationsInput | number | null
    categories_of_materials?: CategoriesOfMaterialsUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialsCreateManyInput = {
    id?: number
    name: string
    date_added: number
    agent_id?: number | null
  }

  export type MaterialsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date_added?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date_added?: IntFieldUpdateOperationsInput | number
    agent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoriesOfMaterialsCreateInput = {
    name: string
    image: string
    parent_id?: number | null
    material: MaterialsCreateNestedOneWithoutCategories_of_materialsInput
    categories_details?: CategoriesDetailsCreateNestedManyWithoutCategories_of_materialsInput
  }

  export type CategoriesOfMaterialsUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    material_id: number
    parent_id?: number | null
    categories_details?: CategoriesDetailsUncheckedCreateNestedManyWithoutCategories_of_materialsInput
  }

  export type CategoriesOfMaterialsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    material?: MaterialsUpdateOneRequiredWithoutCategories_of_materialsNestedInput
    categories_details?: CategoriesDetailsUpdateManyWithoutCategories_of_materialsNestedInput
  }

  export type CategoriesOfMaterialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    material_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    categories_details?: CategoriesDetailsUncheckedUpdateManyWithoutCategories_of_materialsNestedInput
  }

  export type CategoriesOfMaterialsCreateManyInput = {
    id?: number
    name: string
    image: string
    material_id: number
    parent_id?: number | null
  }

  export type CategoriesOfMaterialsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoriesOfMaterialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    material_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoriesDetailsCreateInput = {
    It_detail_name: string
    code: string
    dimensions: string
    total: bigint | number
    rest: number
    remaining: number
    categories_of_materials: CategoriesOfMaterialsCreateNestedOneWithoutCategories_detailsInput
    order_details?: OrderDetailsCreateNestedManyWithoutCategories_detailsInput
  }

  export type CategoriesDetailsUncheckedCreateInput = {
    id?: number
    It_detail_name: string
    code: string
    dimensions: string
    total: bigint | number
    rest: number
    remaining: number
    category_material_id: number
    order_details?: OrderDetailsUncheckedCreateNestedManyWithoutCategories_detailsInput
  }

  export type CategoriesDetailsUpdateInput = {
    It_detail_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dimensions?: StringFieldUpdateOperationsInput | string
    total?: BigIntFieldUpdateOperationsInput | bigint | number
    rest?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    categories_of_materials?: CategoriesOfMaterialsUpdateOneRequiredWithoutCategories_detailsNestedInput
    order_details?: OrderDetailsUpdateManyWithoutCategories_detailsNestedInput
  }

  export type CategoriesDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    It_detail_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dimensions?: StringFieldUpdateOperationsInput | string
    total?: BigIntFieldUpdateOperationsInput | bigint | number
    rest?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    category_material_id?: IntFieldUpdateOperationsInput | number
    order_details?: OrderDetailsUncheckedUpdateManyWithoutCategories_detailsNestedInput
  }

  export type CategoriesDetailsCreateManyInput = {
    id?: number
    It_detail_name: string
    code: string
    dimensions: string
    total: bigint | number
    rest: number
    remaining: number
    category_material_id: number
  }

  export type CategoriesDetailsUpdateManyMutationInput = {
    It_detail_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dimensions?: StringFieldUpdateOperationsInput | string
    total?: BigIntFieldUpdateOperationsInput | bigint | number
    rest?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    It_detail_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dimensions?: StringFieldUpdateOperationsInput | string
    total?: BigIntFieldUpdateOperationsInput | bigint | number
    rest?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    category_material_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    order_date: Date | string
    order_status: string
    order: string
    client: ClientsCreateNestedOneWithoutOrdersInput
    agent: AgentsCreateNestedOneWithoutOrdersInput
    order_details?: OrderDetailsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    client_id: number
    agent_id: number
    order_date: Date | string
    order_status: string
    order: string
    order_details?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    client?: ClientsUpdateOneRequiredWithoutOrdersNestedInput
    agent?: AgentsUpdateOneRequiredWithoutOrdersNestedInput
    order_details?: OrderDetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    order_details?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    client_id: number
    agent_id: number
    order_date: Date | string
    order_status: string
    order: string
  }

  export type OrdersUpdateManyMutationInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
  }

  export type OrderDetailsCreateInput = {
    count: number
    price: number
    categories_details: CategoriesDetailsCreateNestedOneWithoutOrder_detailsInput
    order: OrdersCreateNestedOneWithoutOrder_detailsInput
  }

  export type OrderDetailsUncheckedCreateInput = {
    id?: number
    categories_detail_id: number
    count: number
    price: number
    order_id: number
  }

  export type OrderDetailsUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    categories_details?: CategoriesDetailsUpdateOneRequiredWithoutOrder_detailsNestedInput
    order?: OrdersUpdateOneRequiredWithoutOrder_detailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories_detail_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsCreateManyInput = {
    id?: number
    categories_detail_id: number
    count: number
    price: number
    order_id: number
  }

  export type OrderDetailsUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories_detail_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationsAndNotesCreateInput = {
    title: string
    body: string
    Notice_Date: Date | string
    client: ClientsCreateNestedOneWithoutNotifications_and_notesInput
    agent: AgentsCreateNestedOneWithoutNotifications_and_notesInput
  }

  export type NotificationsAndNotesUncheckedCreateInput = {
    id?: number
    client_id: number
    agent_id: number
    title: string
    body: string
    Notice_Date: Date | string
  }

  export type NotificationsAndNotesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutNotifications_and_notesNestedInput
    agent?: AgentsUpdateOneRequiredWithoutNotifications_and_notesNestedInput
  }

  export type NotificationsAndNotesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsAndNotesCreateManyInput = {
    id?: number
    client_id: number
    agent_id: number
    title: string
    body: string
    Notice_Date: Date | string
  }

  export type NotificationsAndNotesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsAndNotesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MaterialsListRelationFilter = {
    every?: MaterialsWhereInput
    some?: MaterialsWhereInput
    none?: MaterialsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type NotificationsAndNotesListRelationFilter = {
    every?: NotificationsAndNotesWhereInput
    some?: NotificationsAndNotesWhereInput
    none?: NotificationsAndNotesWhereInput
  }

  export type MaterialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsAndNotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentsOrderByRelevanceInput = {
    fields: AgentsOrderByRelevanceFieldEnum | AgentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AgentsCountOrderByAggregateInput = {
    id?: SortOrder
    agent_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AgentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgentsMaxOrderByAggregateInput = {
    id?: SortOrder
    agent_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AgentsMinOrderByAggregateInput = {
    id?: SortOrder
    agent_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AgentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ClientsOrderByRelevanceInput = {
    fields: ClientsOrderByRelevanceFieldEnum | ClientsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientsCountOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
  }

  export type ClientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
  }

  export type ClientsMinOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    city?: SortOrder
  }

  export type ClientsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AgentsNullableScalarRelationFilter = {
    is?: AgentsWhereInput | null
    isNot?: AgentsWhereInput | null
  }

  export type CategoriesOfMaterialsListRelationFilter = {
    every?: CategoriesOfMaterialsWhereInput
    some?: CategoriesOfMaterialsWhereInput
    none?: CategoriesOfMaterialsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoriesOfMaterialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialsOrderByRelevanceInput = {
    fields: MaterialsOrderByRelevanceFieldEnum | MaterialsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaterialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    agent_id?: SortOrder
  }

  export type MaterialsAvgOrderByAggregateInput = {
    id?: SortOrder
    date_added?: SortOrder
    agent_id?: SortOrder
  }

  export type MaterialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    agent_id?: SortOrder
  }

  export type MaterialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date_added?: SortOrder
    agent_id?: SortOrder
  }

  export type MaterialsSumOrderByAggregateInput = {
    id?: SortOrder
    date_added?: SortOrder
    agent_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MaterialsScalarRelationFilter = {
    is?: MaterialsWhereInput
    isNot?: MaterialsWhereInput
  }

  export type CategoriesDetailsListRelationFilter = {
    every?: CategoriesDetailsWhereInput
    some?: CategoriesDetailsWhereInput
    none?: CategoriesDetailsWhereInput
  }

  export type CategoriesDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesOfMaterialsOrderByRelevanceInput = {
    fields: CategoriesOfMaterialsOrderByRelevanceFieldEnum | CategoriesOfMaterialsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriesOfMaterialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    material_id?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoriesOfMaterialsAvgOrderByAggregateInput = {
    id?: SortOrder
    material_id?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoriesOfMaterialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    material_id?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoriesOfMaterialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    material_id?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoriesOfMaterialsSumOrderByAggregateInput = {
    id?: SortOrder
    material_id?: SortOrder
    parent_id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type CategoriesOfMaterialsScalarRelationFilter = {
    is?: CategoriesOfMaterialsWhereInput
    isNot?: CategoriesOfMaterialsWhereInput
  }

  export type OrderDetailsListRelationFilter = {
    every?: OrderDetailsWhereInput
    some?: OrderDetailsWhereInput
    none?: OrderDetailsWhereInput
  }

  export type OrderDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesDetailsOrderByRelevanceInput = {
    fields: CategoriesDetailsOrderByRelevanceFieldEnum | CategoriesDetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriesDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    It_detail_name?: SortOrder
    code?: SortOrder
    dimensions?: SortOrder
    total?: SortOrder
    rest?: SortOrder
    remaining?: SortOrder
    category_material_id?: SortOrder
  }

  export type CategoriesDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    rest?: SortOrder
    remaining?: SortOrder
    category_material_id?: SortOrder
  }

  export type CategoriesDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    It_detail_name?: SortOrder
    code?: SortOrder
    dimensions?: SortOrder
    total?: SortOrder
    rest?: SortOrder
    remaining?: SortOrder
    category_material_id?: SortOrder
  }

  export type CategoriesDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    It_detail_name?: SortOrder
    code?: SortOrder
    dimensions?: SortOrder
    total?: SortOrder
    rest?: SortOrder
    remaining?: SortOrder
    category_material_id?: SortOrder
  }

  export type CategoriesDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    rest?: SortOrder
    remaining?: SortOrder
    category_material_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientsScalarRelationFilter = {
    is?: ClientsWhereInput
    isNot?: ClientsWhereInput
  }

  export type AgentsScalarRelationFilter = {
    is?: AgentsWhereInput
    isNot?: AgentsWhereInput
  }

  export type OrdersOrderByRelevanceInput = {
    fields: OrdersOrderByRelevanceFieldEnum | OrdersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    order_date?: SortOrder
    order_status?: SortOrder
    order?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    order_date?: SortOrder
    order_status?: SortOrder
    order?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    order_date?: SortOrder
    order_status?: SortOrder
    order?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoriesDetailsScalarRelationFilter = {
    is?: CategoriesDetailsWhereInput
    isNot?: CategoriesDetailsWhereInput
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    categories_detail_id?: SortOrder
    count?: SortOrder
    price?: SortOrder
    order_id?: SortOrder
  }

  export type OrderDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    categories_detail_id?: SortOrder
    count?: SortOrder
    price?: SortOrder
    order_id?: SortOrder
  }

  export type OrderDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    categories_detail_id?: SortOrder
    count?: SortOrder
    price?: SortOrder
    order_id?: SortOrder
  }

  export type OrderDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    categories_detail_id?: SortOrder
    count?: SortOrder
    price?: SortOrder
    order_id?: SortOrder
  }

  export type OrderDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    categories_detail_id?: SortOrder
    count?: SortOrder
    price?: SortOrder
    order_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NotificationsAndNotesOrderByRelevanceInput = {
    fields: NotificationsAndNotesOrderByRelevanceFieldEnum | NotificationsAndNotesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationsAndNotesCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    Notice_Date?: SortOrder
  }

  export type NotificationsAndNotesAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
  }

  export type NotificationsAndNotesMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    Notice_Date?: SortOrder
  }

  export type NotificationsAndNotesMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    Notice_Date?: SortOrder
  }

  export type NotificationsAndNotesSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    agent_id?: SortOrder
  }

  export type MaterialsCreateNestedManyWithoutAgentInput = {
    create?: XOR<MaterialsCreateWithoutAgentInput, MaterialsUncheckedCreateWithoutAgentInput> | MaterialsCreateWithoutAgentInput[] | MaterialsUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: MaterialsCreateOrConnectWithoutAgentInput | MaterialsCreateOrConnectWithoutAgentInput[]
    createMany?: MaterialsCreateManyAgentInputEnvelope
    connect?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutAgentInput = {
    create?: XOR<OrdersCreateWithoutAgentInput, OrdersUncheckedCreateWithoutAgentInput> | OrdersCreateWithoutAgentInput[] | OrdersUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAgentInput | OrdersCreateOrConnectWithoutAgentInput[]
    createMany?: OrdersCreateManyAgentInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type NotificationsAndNotesCreateNestedManyWithoutAgentInput = {
    create?: XOR<NotificationsAndNotesCreateWithoutAgentInput, NotificationsAndNotesUncheckedCreateWithoutAgentInput> | NotificationsAndNotesCreateWithoutAgentInput[] | NotificationsAndNotesUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: NotificationsAndNotesCreateOrConnectWithoutAgentInput | NotificationsAndNotesCreateOrConnectWithoutAgentInput[]
    createMany?: NotificationsAndNotesCreateManyAgentInputEnvelope
    connect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
  }

  export type MaterialsUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<MaterialsCreateWithoutAgentInput, MaterialsUncheckedCreateWithoutAgentInput> | MaterialsCreateWithoutAgentInput[] | MaterialsUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: MaterialsCreateOrConnectWithoutAgentInput | MaterialsCreateOrConnectWithoutAgentInput[]
    createMany?: MaterialsCreateManyAgentInputEnvelope
    connect?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<OrdersCreateWithoutAgentInput, OrdersUncheckedCreateWithoutAgentInput> | OrdersCreateWithoutAgentInput[] | OrdersUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAgentInput | OrdersCreateOrConnectWithoutAgentInput[]
    createMany?: OrdersCreateManyAgentInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type NotificationsAndNotesUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<NotificationsAndNotesCreateWithoutAgentInput, NotificationsAndNotesUncheckedCreateWithoutAgentInput> | NotificationsAndNotesCreateWithoutAgentInput[] | NotificationsAndNotesUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: NotificationsAndNotesCreateOrConnectWithoutAgentInput | NotificationsAndNotesCreateOrConnectWithoutAgentInput[]
    createMany?: NotificationsAndNotesCreateManyAgentInputEnvelope
    connect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MaterialsUpdateManyWithoutAgentNestedInput = {
    create?: XOR<MaterialsCreateWithoutAgentInput, MaterialsUncheckedCreateWithoutAgentInput> | MaterialsCreateWithoutAgentInput[] | MaterialsUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: MaterialsCreateOrConnectWithoutAgentInput | MaterialsCreateOrConnectWithoutAgentInput[]
    upsert?: MaterialsUpsertWithWhereUniqueWithoutAgentInput | MaterialsUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: MaterialsCreateManyAgentInputEnvelope
    set?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
    disconnect?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
    delete?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
    connect?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
    update?: MaterialsUpdateWithWhereUniqueWithoutAgentInput | MaterialsUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: MaterialsUpdateManyWithWhereWithoutAgentInput | MaterialsUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: MaterialsScalarWhereInput | MaterialsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutAgentNestedInput = {
    create?: XOR<OrdersCreateWithoutAgentInput, OrdersUncheckedCreateWithoutAgentInput> | OrdersCreateWithoutAgentInput[] | OrdersUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAgentInput | OrdersCreateOrConnectWithoutAgentInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutAgentInput | OrdersUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: OrdersCreateManyAgentInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutAgentInput | OrdersUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutAgentInput | OrdersUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type NotificationsAndNotesUpdateManyWithoutAgentNestedInput = {
    create?: XOR<NotificationsAndNotesCreateWithoutAgentInput, NotificationsAndNotesUncheckedCreateWithoutAgentInput> | NotificationsAndNotesCreateWithoutAgentInput[] | NotificationsAndNotesUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: NotificationsAndNotesCreateOrConnectWithoutAgentInput | NotificationsAndNotesCreateOrConnectWithoutAgentInput[]
    upsert?: NotificationsAndNotesUpsertWithWhereUniqueWithoutAgentInput | NotificationsAndNotesUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: NotificationsAndNotesCreateManyAgentInputEnvelope
    set?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    disconnect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    delete?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    connect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    update?: NotificationsAndNotesUpdateWithWhereUniqueWithoutAgentInput | NotificationsAndNotesUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: NotificationsAndNotesUpdateManyWithWhereWithoutAgentInput | NotificationsAndNotesUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: NotificationsAndNotesScalarWhereInput | NotificationsAndNotesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MaterialsUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<MaterialsCreateWithoutAgentInput, MaterialsUncheckedCreateWithoutAgentInput> | MaterialsCreateWithoutAgentInput[] | MaterialsUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: MaterialsCreateOrConnectWithoutAgentInput | MaterialsCreateOrConnectWithoutAgentInput[]
    upsert?: MaterialsUpsertWithWhereUniqueWithoutAgentInput | MaterialsUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: MaterialsCreateManyAgentInputEnvelope
    set?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
    disconnect?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
    delete?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
    connect?: MaterialsWhereUniqueInput | MaterialsWhereUniqueInput[]
    update?: MaterialsUpdateWithWhereUniqueWithoutAgentInput | MaterialsUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: MaterialsUpdateManyWithWhereWithoutAgentInput | MaterialsUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: MaterialsScalarWhereInput | MaterialsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<OrdersCreateWithoutAgentInput, OrdersUncheckedCreateWithoutAgentInput> | OrdersCreateWithoutAgentInput[] | OrdersUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAgentInput | OrdersCreateOrConnectWithoutAgentInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutAgentInput | OrdersUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: OrdersCreateManyAgentInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutAgentInput | OrdersUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutAgentInput | OrdersUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type NotificationsAndNotesUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<NotificationsAndNotesCreateWithoutAgentInput, NotificationsAndNotesUncheckedCreateWithoutAgentInput> | NotificationsAndNotesCreateWithoutAgentInput[] | NotificationsAndNotesUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: NotificationsAndNotesCreateOrConnectWithoutAgentInput | NotificationsAndNotesCreateOrConnectWithoutAgentInput[]
    upsert?: NotificationsAndNotesUpsertWithWhereUniqueWithoutAgentInput | NotificationsAndNotesUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: NotificationsAndNotesCreateManyAgentInputEnvelope
    set?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    disconnect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    delete?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    connect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    update?: NotificationsAndNotesUpdateWithWhereUniqueWithoutAgentInput | NotificationsAndNotesUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: NotificationsAndNotesUpdateManyWithWhereWithoutAgentInput | NotificationsAndNotesUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: NotificationsAndNotesScalarWhereInput | NotificationsAndNotesScalarWhereInput[]
  }

  export type OrdersCreateNestedManyWithoutClientInput = {
    create?: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput> | OrdersCreateWithoutClientInput[] | OrdersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutClientInput | OrdersCreateOrConnectWithoutClientInput[]
    createMany?: OrdersCreateManyClientInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type NotificationsAndNotesCreateNestedManyWithoutClientInput = {
    create?: XOR<NotificationsAndNotesCreateWithoutClientInput, NotificationsAndNotesUncheckedCreateWithoutClientInput> | NotificationsAndNotesCreateWithoutClientInput[] | NotificationsAndNotesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NotificationsAndNotesCreateOrConnectWithoutClientInput | NotificationsAndNotesCreateOrConnectWithoutClientInput[]
    createMany?: NotificationsAndNotesCreateManyClientInputEnvelope
    connect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput> | OrdersCreateWithoutClientInput[] | OrdersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutClientInput | OrdersCreateOrConnectWithoutClientInput[]
    createMany?: OrdersCreateManyClientInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type NotificationsAndNotesUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<NotificationsAndNotesCreateWithoutClientInput, NotificationsAndNotesUncheckedCreateWithoutClientInput> | NotificationsAndNotesCreateWithoutClientInput[] | NotificationsAndNotesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NotificationsAndNotesCreateOrConnectWithoutClientInput | NotificationsAndNotesCreateOrConnectWithoutClientInput[]
    createMany?: NotificationsAndNotesCreateManyClientInputEnvelope
    connect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
  }

  export type OrdersUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput> | OrdersCreateWithoutClientInput[] | OrdersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutClientInput | OrdersCreateOrConnectWithoutClientInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutClientInput | OrdersUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrdersCreateManyClientInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutClientInput | OrdersUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutClientInput | OrdersUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type NotificationsAndNotesUpdateManyWithoutClientNestedInput = {
    create?: XOR<NotificationsAndNotesCreateWithoutClientInput, NotificationsAndNotesUncheckedCreateWithoutClientInput> | NotificationsAndNotesCreateWithoutClientInput[] | NotificationsAndNotesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NotificationsAndNotesCreateOrConnectWithoutClientInput | NotificationsAndNotesCreateOrConnectWithoutClientInput[]
    upsert?: NotificationsAndNotesUpsertWithWhereUniqueWithoutClientInput | NotificationsAndNotesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: NotificationsAndNotesCreateManyClientInputEnvelope
    set?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    disconnect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    delete?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    connect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    update?: NotificationsAndNotesUpdateWithWhereUniqueWithoutClientInput | NotificationsAndNotesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: NotificationsAndNotesUpdateManyWithWhereWithoutClientInput | NotificationsAndNotesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: NotificationsAndNotesScalarWhereInput | NotificationsAndNotesScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput> | OrdersCreateWithoutClientInput[] | OrdersUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutClientInput | OrdersCreateOrConnectWithoutClientInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutClientInput | OrdersUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrdersCreateManyClientInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutClientInput | OrdersUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutClientInput | OrdersUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type NotificationsAndNotesUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<NotificationsAndNotesCreateWithoutClientInput, NotificationsAndNotesUncheckedCreateWithoutClientInput> | NotificationsAndNotesCreateWithoutClientInput[] | NotificationsAndNotesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: NotificationsAndNotesCreateOrConnectWithoutClientInput | NotificationsAndNotesCreateOrConnectWithoutClientInput[]
    upsert?: NotificationsAndNotesUpsertWithWhereUniqueWithoutClientInput | NotificationsAndNotesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: NotificationsAndNotesCreateManyClientInputEnvelope
    set?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    disconnect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    delete?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    connect?: NotificationsAndNotesWhereUniqueInput | NotificationsAndNotesWhereUniqueInput[]
    update?: NotificationsAndNotesUpdateWithWhereUniqueWithoutClientInput | NotificationsAndNotesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: NotificationsAndNotesUpdateManyWithWhereWithoutClientInput | NotificationsAndNotesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: NotificationsAndNotesScalarWhereInput | NotificationsAndNotesScalarWhereInput[]
  }

  export type AgentsCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<AgentsCreateWithoutMaterialsInput, AgentsUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: AgentsCreateOrConnectWithoutMaterialsInput
    connect?: AgentsWhereUniqueInput
  }

  export type CategoriesOfMaterialsCreateNestedManyWithoutMaterialInput = {
    create?: XOR<CategoriesOfMaterialsCreateWithoutMaterialInput, CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput> | CategoriesOfMaterialsCreateWithoutMaterialInput[] | CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: CategoriesOfMaterialsCreateOrConnectWithoutMaterialInput | CategoriesOfMaterialsCreateOrConnectWithoutMaterialInput[]
    createMany?: CategoriesOfMaterialsCreateManyMaterialInputEnvelope
    connect?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
  }

  export type CategoriesOfMaterialsUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<CategoriesOfMaterialsCreateWithoutMaterialInput, CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput> | CategoriesOfMaterialsCreateWithoutMaterialInput[] | CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: CategoriesOfMaterialsCreateOrConnectWithoutMaterialInput | CategoriesOfMaterialsCreateOrConnectWithoutMaterialInput[]
    createMany?: CategoriesOfMaterialsCreateManyMaterialInputEnvelope
    connect?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
  }

  export type AgentsUpdateOneWithoutMaterialsNestedInput = {
    create?: XOR<AgentsCreateWithoutMaterialsInput, AgentsUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: AgentsCreateOrConnectWithoutMaterialsInput
    upsert?: AgentsUpsertWithoutMaterialsInput
    disconnect?: AgentsWhereInput | boolean
    delete?: AgentsWhereInput | boolean
    connect?: AgentsWhereUniqueInput
    update?: XOR<XOR<AgentsUpdateToOneWithWhereWithoutMaterialsInput, AgentsUpdateWithoutMaterialsInput>, AgentsUncheckedUpdateWithoutMaterialsInput>
  }

  export type CategoriesOfMaterialsUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<CategoriesOfMaterialsCreateWithoutMaterialInput, CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput> | CategoriesOfMaterialsCreateWithoutMaterialInput[] | CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: CategoriesOfMaterialsCreateOrConnectWithoutMaterialInput | CategoriesOfMaterialsCreateOrConnectWithoutMaterialInput[]
    upsert?: CategoriesOfMaterialsUpsertWithWhereUniqueWithoutMaterialInput | CategoriesOfMaterialsUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: CategoriesOfMaterialsCreateManyMaterialInputEnvelope
    set?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
    disconnect?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
    delete?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
    connect?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
    update?: CategoriesOfMaterialsUpdateWithWhereUniqueWithoutMaterialInput | CategoriesOfMaterialsUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: CategoriesOfMaterialsUpdateManyWithWhereWithoutMaterialInput | CategoriesOfMaterialsUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: CategoriesOfMaterialsScalarWhereInput | CategoriesOfMaterialsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriesOfMaterialsUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<CategoriesOfMaterialsCreateWithoutMaterialInput, CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput> | CategoriesOfMaterialsCreateWithoutMaterialInput[] | CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: CategoriesOfMaterialsCreateOrConnectWithoutMaterialInput | CategoriesOfMaterialsCreateOrConnectWithoutMaterialInput[]
    upsert?: CategoriesOfMaterialsUpsertWithWhereUniqueWithoutMaterialInput | CategoriesOfMaterialsUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: CategoriesOfMaterialsCreateManyMaterialInputEnvelope
    set?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
    disconnect?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
    delete?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
    connect?: CategoriesOfMaterialsWhereUniqueInput | CategoriesOfMaterialsWhereUniqueInput[]
    update?: CategoriesOfMaterialsUpdateWithWhereUniqueWithoutMaterialInput | CategoriesOfMaterialsUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: CategoriesOfMaterialsUpdateManyWithWhereWithoutMaterialInput | CategoriesOfMaterialsUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: CategoriesOfMaterialsScalarWhereInput | CategoriesOfMaterialsScalarWhereInput[]
  }

  export type MaterialsCreateNestedOneWithoutCategories_of_materialsInput = {
    create?: XOR<MaterialsCreateWithoutCategories_of_materialsInput, MaterialsUncheckedCreateWithoutCategories_of_materialsInput>
    connectOrCreate?: MaterialsCreateOrConnectWithoutCategories_of_materialsInput
    connect?: MaterialsWhereUniqueInput
  }

  export type CategoriesDetailsCreateNestedManyWithoutCategories_of_materialsInput = {
    create?: XOR<CategoriesDetailsCreateWithoutCategories_of_materialsInput, CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput> | CategoriesDetailsCreateWithoutCategories_of_materialsInput[] | CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput[]
    connectOrCreate?: CategoriesDetailsCreateOrConnectWithoutCategories_of_materialsInput | CategoriesDetailsCreateOrConnectWithoutCategories_of_materialsInput[]
    createMany?: CategoriesDetailsCreateManyCategories_of_materialsInputEnvelope
    connect?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
  }

  export type CategoriesDetailsUncheckedCreateNestedManyWithoutCategories_of_materialsInput = {
    create?: XOR<CategoriesDetailsCreateWithoutCategories_of_materialsInput, CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput> | CategoriesDetailsCreateWithoutCategories_of_materialsInput[] | CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput[]
    connectOrCreate?: CategoriesDetailsCreateOrConnectWithoutCategories_of_materialsInput | CategoriesDetailsCreateOrConnectWithoutCategories_of_materialsInput[]
    createMany?: CategoriesDetailsCreateManyCategories_of_materialsInputEnvelope
    connect?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
  }

  export type MaterialsUpdateOneRequiredWithoutCategories_of_materialsNestedInput = {
    create?: XOR<MaterialsCreateWithoutCategories_of_materialsInput, MaterialsUncheckedCreateWithoutCategories_of_materialsInput>
    connectOrCreate?: MaterialsCreateOrConnectWithoutCategories_of_materialsInput
    upsert?: MaterialsUpsertWithoutCategories_of_materialsInput
    connect?: MaterialsWhereUniqueInput
    update?: XOR<XOR<MaterialsUpdateToOneWithWhereWithoutCategories_of_materialsInput, MaterialsUpdateWithoutCategories_of_materialsInput>, MaterialsUncheckedUpdateWithoutCategories_of_materialsInput>
  }

  export type CategoriesDetailsUpdateManyWithoutCategories_of_materialsNestedInput = {
    create?: XOR<CategoriesDetailsCreateWithoutCategories_of_materialsInput, CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput> | CategoriesDetailsCreateWithoutCategories_of_materialsInput[] | CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput[]
    connectOrCreate?: CategoriesDetailsCreateOrConnectWithoutCategories_of_materialsInput | CategoriesDetailsCreateOrConnectWithoutCategories_of_materialsInput[]
    upsert?: CategoriesDetailsUpsertWithWhereUniqueWithoutCategories_of_materialsInput | CategoriesDetailsUpsertWithWhereUniqueWithoutCategories_of_materialsInput[]
    createMany?: CategoriesDetailsCreateManyCategories_of_materialsInputEnvelope
    set?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
    disconnect?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
    delete?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
    connect?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
    update?: CategoriesDetailsUpdateWithWhereUniqueWithoutCategories_of_materialsInput | CategoriesDetailsUpdateWithWhereUniqueWithoutCategories_of_materialsInput[]
    updateMany?: CategoriesDetailsUpdateManyWithWhereWithoutCategories_of_materialsInput | CategoriesDetailsUpdateManyWithWhereWithoutCategories_of_materialsInput[]
    deleteMany?: CategoriesDetailsScalarWhereInput | CategoriesDetailsScalarWhereInput[]
  }

  export type CategoriesDetailsUncheckedUpdateManyWithoutCategories_of_materialsNestedInput = {
    create?: XOR<CategoriesDetailsCreateWithoutCategories_of_materialsInput, CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput> | CategoriesDetailsCreateWithoutCategories_of_materialsInput[] | CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput[]
    connectOrCreate?: CategoriesDetailsCreateOrConnectWithoutCategories_of_materialsInput | CategoriesDetailsCreateOrConnectWithoutCategories_of_materialsInput[]
    upsert?: CategoriesDetailsUpsertWithWhereUniqueWithoutCategories_of_materialsInput | CategoriesDetailsUpsertWithWhereUniqueWithoutCategories_of_materialsInput[]
    createMany?: CategoriesDetailsCreateManyCategories_of_materialsInputEnvelope
    set?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
    disconnect?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
    delete?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
    connect?: CategoriesDetailsWhereUniqueInput | CategoriesDetailsWhereUniqueInput[]
    update?: CategoriesDetailsUpdateWithWhereUniqueWithoutCategories_of_materialsInput | CategoriesDetailsUpdateWithWhereUniqueWithoutCategories_of_materialsInput[]
    updateMany?: CategoriesDetailsUpdateManyWithWhereWithoutCategories_of_materialsInput | CategoriesDetailsUpdateManyWithWhereWithoutCategories_of_materialsInput[]
    deleteMany?: CategoriesDetailsScalarWhereInput | CategoriesDetailsScalarWhereInput[]
  }

  export type CategoriesOfMaterialsCreateNestedOneWithoutCategories_detailsInput = {
    create?: XOR<CategoriesOfMaterialsCreateWithoutCategories_detailsInput, CategoriesOfMaterialsUncheckedCreateWithoutCategories_detailsInput>
    connectOrCreate?: CategoriesOfMaterialsCreateOrConnectWithoutCategories_detailsInput
    connect?: CategoriesOfMaterialsWhereUniqueInput
  }

  export type OrderDetailsCreateNestedManyWithoutCategories_detailsInput = {
    create?: XOR<OrderDetailsCreateWithoutCategories_detailsInput, OrderDetailsUncheckedCreateWithoutCategories_detailsInput> | OrderDetailsCreateWithoutCategories_detailsInput[] | OrderDetailsUncheckedCreateWithoutCategories_detailsInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutCategories_detailsInput | OrderDetailsCreateOrConnectWithoutCategories_detailsInput[]
    createMany?: OrderDetailsCreateManyCategories_detailsInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutCategories_detailsInput = {
    create?: XOR<OrderDetailsCreateWithoutCategories_detailsInput, OrderDetailsUncheckedCreateWithoutCategories_detailsInput> | OrderDetailsCreateWithoutCategories_detailsInput[] | OrderDetailsUncheckedCreateWithoutCategories_detailsInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutCategories_detailsInput | OrderDetailsCreateOrConnectWithoutCategories_detailsInput[]
    createMany?: OrderDetailsCreateManyCategories_detailsInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type CategoriesOfMaterialsUpdateOneRequiredWithoutCategories_detailsNestedInput = {
    create?: XOR<CategoriesOfMaterialsCreateWithoutCategories_detailsInput, CategoriesOfMaterialsUncheckedCreateWithoutCategories_detailsInput>
    connectOrCreate?: CategoriesOfMaterialsCreateOrConnectWithoutCategories_detailsInput
    upsert?: CategoriesOfMaterialsUpsertWithoutCategories_detailsInput
    connect?: CategoriesOfMaterialsWhereUniqueInput
    update?: XOR<XOR<CategoriesOfMaterialsUpdateToOneWithWhereWithoutCategories_detailsInput, CategoriesOfMaterialsUpdateWithoutCategories_detailsInput>, CategoriesOfMaterialsUncheckedUpdateWithoutCategories_detailsInput>
  }

  export type OrderDetailsUpdateManyWithoutCategories_detailsNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutCategories_detailsInput, OrderDetailsUncheckedCreateWithoutCategories_detailsInput> | OrderDetailsCreateWithoutCategories_detailsInput[] | OrderDetailsUncheckedCreateWithoutCategories_detailsInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutCategories_detailsInput | OrderDetailsCreateOrConnectWithoutCategories_detailsInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutCategories_detailsInput | OrderDetailsUpsertWithWhereUniqueWithoutCategories_detailsInput[]
    createMany?: OrderDetailsCreateManyCategories_detailsInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutCategories_detailsInput | OrderDetailsUpdateWithWhereUniqueWithoutCategories_detailsInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutCategories_detailsInput | OrderDetailsUpdateManyWithWhereWithoutCategories_detailsInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type OrderDetailsUncheckedUpdateManyWithoutCategories_detailsNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutCategories_detailsInput, OrderDetailsUncheckedCreateWithoutCategories_detailsInput> | OrderDetailsCreateWithoutCategories_detailsInput[] | OrderDetailsUncheckedCreateWithoutCategories_detailsInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutCategories_detailsInput | OrderDetailsCreateOrConnectWithoutCategories_detailsInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutCategories_detailsInput | OrderDetailsUpsertWithWhereUniqueWithoutCategories_detailsInput[]
    createMany?: OrderDetailsCreateManyCategories_detailsInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutCategories_detailsInput | OrderDetailsUpdateWithWhereUniqueWithoutCategories_detailsInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutCategories_detailsInput | OrderDetailsUpdateManyWithWhereWithoutCategories_detailsInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type ClientsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ClientsCreateWithoutOrdersInput, ClientsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutOrdersInput
    connect?: ClientsWhereUniqueInput
  }

  export type AgentsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<AgentsCreateWithoutOrdersInput, AgentsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AgentsCreateOrConnectWithoutOrdersInput
    connect?: AgentsWhereUniqueInput
  }

  export type OrderDetailsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ClientsCreateWithoutOrdersInput, ClientsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutOrdersInput
    upsert?: ClientsUpsertWithoutOrdersInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutOrdersInput, ClientsUpdateWithoutOrdersInput>, ClientsUncheckedUpdateWithoutOrdersInput>
  }

  export type AgentsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<AgentsCreateWithoutOrdersInput, AgentsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AgentsCreateOrConnectWithoutOrdersInput
    upsert?: AgentsUpsertWithoutOrdersInput
    connect?: AgentsWhereUniqueInput
    update?: XOR<XOR<AgentsUpdateToOneWithWhereWithoutOrdersInput, AgentsUpdateWithoutOrdersInput>, AgentsUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderDetailsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderInput | OrderDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderInput | OrderDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type CategoriesDetailsCreateNestedOneWithoutOrder_detailsInput = {
    create?: XOR<CategoriesDetailsCreateWithoutOrder_detailsInput, CategoriesDetailsUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: CategoriesDetailsCreateOrConnectWithoutOrder_detailsInput
    connect?: CategoriesDetailsWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutOrder_detailsInput = {
    create?: XOR<OrdersCreateWithoutOrder_detailsInput, OrdersUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_detailsInput
    connect?: OrdersWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriesDetailsUpdateOneRequiredWithoutOrder_detailsNestedInput = {
    create?: XOR<CategoriesDetailsCreateWithoutOrder_detailsInput, CategoriesDetailsUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: CategoriesDetailsCreateOrConnectWithoutOrder_detailsInput
    upsert?: CategoriesDetailsUpsertWithoutOrder_detailsInput
    connect?: CategoriesDetailsWhereUniqueInput
    update?: XOR<XOR<CategoriesDetailsUpdateToOneWithWhereWithoutOrder_detailsInput, CategoriesDetailsUpdateWithoutOrder_detailsInput>, CategoriesDetailsUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type OrdersUpdateOneRequiredWithoutOrder_detailsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_detailsInput, OrdersUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_detailsInput
    upsert?: OrdersUpsertWithoutOrder_detailsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrder_detailsInput, OrdersUpdateWithoutOrder_detailsInput>, OrdersUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type ClientsCreateNestedOneWithoutNotifications_and_notesInput = {
    create?: XOR<ClientsCreateWithoutNotifications_and_notesInput, ClientsUncheckedCreateWithoutNotifications_and_notesInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutNotifications_and_notesInput
    connect?: ClientsWhereUniqueInput
  }

  export type AgentsCreateNestedOneWithoutNotifications_and_notesInput = {
    create?: XOR<AgentsCreateWithoutNotifications_and_notesInput, AgentsUncheckedCreateWithoutNotifications_and_notesInput>
    connectOrCreate?: AgentsCreateOrConnectWithoutNotifications_and_notesInput
    connect?: AgentsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutNotifications_and_notesNestedInput = {
    create?: XOR<ClientsCreateWithoutNotifications_and_notesInput, ClientsUncheckedCreateWithoutNotifications_and_notesInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutNotifications_and_notesInput
    upsert?: ClientsUpsertWithoutNotifications_and_notesInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutNotifications_and_notesInput, ClientsUpdateWithoutNotifications_and_notesInput>, ClientsUncheckedUpdateWithoutNotifications_and_notesInput>
  }

  export type AgentsUpdateOneRequiredWithoutNotifications_and_notesNestedInput = {
    create?: XOR<AgentsCreateWithoutNotifications_and_notesInput, AgentsUncheckedCreateWithoutNotifications_and_notesInput>
    connectOrCreate?: AgentsCreateOrConnectWithoutNotifications_and_notesInput
    upsert?: AgentsUpsertWithoutNotifications_and_notesInput
    connect?: AgentsWhereUniqueInput
    update?: XOR<XOR<AgentsUpdateToOneWithWhereWithoutNotifications_and_notesInput, AgentsUpdateWithoutNotifications_and_notesInput>, AgentsUncheckedUpdateWithoutNotifications_and_notesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MaterialsCreateWithoutAgentInput = {
    name: string
    date_added: number
    categories_of_materials?: CategoriesOfMaterialsCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsUncheckedCreateWithoutAgentInput = {
    id?: number
    name: string
    date_added: number
    categories_of_materials?: CategoriesOfMaterialsUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsCreateOrConnectWithoutAgentInput = {
    where: MaterialsWhereUniqueInput
    create: XOR<MaterialsCreateWithoutAgentInput, MaterialsUncheckedCreateWithoutAgentInput>
  }

  export type MaterialsCreateManyAgentInputEnvelope = {
    data: MaterialsCreateManyAgentInput | MaterialsCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutAgentInput = {
    order_date: Date | string
    order_status: string
    order: string
    client: ClientsCreateNestedOneWithoutOrdersInput
    order_details?: OrderDetailsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutAgentInput = {
    id?: number
    client_id: number
    order_date: Date | string
    order_status: string
    order: string
    order_details?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutAgentInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutAgentInput, OrdersUncheckedCreateWithoutAgentInput>
  }

  export type OrdersCreateManyAgentInputEnvelope = {
    data: OrdersCreateManyAgentInput | OrdersCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsAndNotesCreateWithoutAgentInput = {
    title: string
    body: string
    Notice_Date: Date | string
    client: ClientsCreateNestedOneWithoutNotifications_and_notesInput
  }

  export type NotificationsAndNotesUncheckedCreateWithoutAgentInput = {
    id?: number
    client_id: number
    title: string
    body: string
    Notice_Date: Date | string
  }

  export type NotificationsAndNotesCreateOrConnectWithoutAgentInput = {
    where: NotificationsAndNotesWhereUniqueInput
    create: XOR<NotificationsAndNotesCreateWithoutAgentInput, NotificationsAndNotesUncheckedCreateWithoutAgentInput>
  }

  export type NotificationsAndNotesCreateManyAgentInputEnvelope = {
    data: NotificationsAndNotesCreateManyAgentInput | NotificationsAndNotesCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type MaterialsUpsertWithWhereUniqueWithoutAgentInput = {
    where: MaterialsWhereUniqueInput
    update: XOR<MaterialsUpdateWithoutAgentInput, MaterialsUncheckedUpdateWithoutAgentInput>
    create: XOR<MaterialsCreateWithoutAgentInput, MaterialsUncheckedCreateWithoutAgentInput>
  }

  export type MaterialsUpdateWithWhereUniqueWithoutAgentInput = {
    where: MaterialsWhereUniqueInput
    data: XOR<MaterialsUpdateWithoutAgentInput, MaterialsUncheckedUpdateWithoutAgentInput>
  }

  export type MaterialsUpdateManyWithWhereWithoutAgentInput = {
    where: MaterialsScalarWhereInput
    data: XOR<MaterialsUpdateManyMutationInput, MaterialsUncheckedUpdateManyWithoutAgentInput>
  }

  export type MaterialsScalarWhereInput = {
    AND?: MaterialsScalarWhereInput | MaterialsScalarWhereInput[]
    OR?: MaterialsScalarWhereInput[]
    NOT?: MaterialsScalarWhereInput | MaterialsScalarWhereInput[]
    id?: IntFilter<"Materials"> | number
    name?: StringFilter<"Materials"> | string
    date_added?: IntFilter<"Materials"> | number
    agent_id?: IntNullableFilter<"Materials"> | number | null
  }

  export type OrdersUpsertWithWhereUniqueWithoutAgentInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutAgentInput, OrdersUncheckedUpdateWithoutAgentInput>
    create: XOR<OrdersCreateWithoutAgentInput, OrdersUncheckedCreateWithoutAgentInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutAgentInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutAgentInput, OrdersUncheckedUpdateWithoutAgentInput>
  }

  export type OrdersUpdateManyWithWhereWithoutAgentInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutAgentInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    client_id?: IntFilter<"Orders"> | number
    agent_id?: IntFilter<"Orders"> | number
    order_date?: DateTimeFilter<"Orders"> | Date | string
    order_status?: StringFilter<"Orders"> | string
    order?: StringFilter<"Orders"> | string
  }

  export type NotificationsAndNotesUpsertWithWhereUniqueWithoutAgentInput = {
    where: NotificationsAndNotesWhereUniqueInput
    update: XOR<NotificationsAndNotesUpdateWithoutAgentInput, NotificationsAndNotesUncheckedUpdateWithoutAgentInput>
    create: XOR<NotificationsAndNotesCreateWithoutAgentInput, NotificationsAndNotesUncheckedCreateWithoutAgentInput>
  }

  export type NotificationsAndNotesUpdateWithWhereUniqueWithoutAgentInput = {
    where: NotificationsAndNotesWhereUniqueInput
    data: XOR<NotificationsAndNotesUpdateWithoutAgentInput, NotificationsAndNotesUncheckedUpdateWithoutAgentInput>
  }

  export type NotificationsAndNotesUpdateManyWithWhereWithoutAgentInput = {
    where: NotificationsAndNotesScalarWhereInput
    data: XOR<NotificationsAndNotesUpdateManyMutationInput, NotificationsAndNotesUncheckedUpdateManyWithoutAgentInput>
  }

  export type NotificationsAndNotesScalarWhereInput = {
    AND?: NotificationsAndNotesScalarWhereInput | NotificationsAndNotesScalarWhereInput[]
    OR?: NotificationsAndNotesScalarWhereInput[]
    NOT?: NotificationsAndNotesScalarWhereInput | NotificationsAndNotesScalarWhereInput[]
    id?: IntFilter<"NotificationsAndNotes"> | number
    client_id?: IntFilter<"NotificationsAndNotes"> | number
    agent_id?: IntFilter<"NotificationsAndNotes"> | number
    title?: StringFilter<"NotificationsAndNotes"> | string
    body?: StringFilter<"NotificationsAndNotes"> | string
    Notice_Date?: DateTimeFilter<"NotificationsAndNotes"> | Date | string
  }

  export type OrdersCreateWithoutClientInput = {
    order_date: Date | string
    order_status: string
    order: string
    agent: AgentsCreateNestedOneWithoutOrdersInput
    order_details?: OrderDetailsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutClientInput = {
    id?: number
    agent_id: number
    order_date: Date | string
    order_status: string
    order: string
    order_details?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutClientInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput>
  }

  export type OrdersCreateManyClientInputEnvelope = {
    data: OrdersCreateManyClientInput | OrdersCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsAndNotesCreateWithoutClientInput = {
    title: string
    body: string
    Notice_Date: Date | string
    agent: AgentsCreateNestedOneWithoutNotifications_and_notesInput
  }

  export type NotificationsAndNotesUncheckedCreateWithoutClientInput = {
    id?: number
    agent_id: number
    title: string
    body: string
    Notice_Date: Date | string
  }

  export type NotificationsAndNotesCreateOrConnectWithoutClientInput = {
    where: NotificationsAndNotesWhereUniqueInput
    create: XOR<NotificationsAndNotesCreateWithoutClientInput, NotificationsAndNotesUncheckedCreateWithoutClientInput>
  }

  export type NotificationsAndNotesCreateManyClientInputEnvelope = {
    data: NotificationsAndNotesCreateManyClientInput | NotificationsAndNotesCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutClientInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutClientInput, OrdersUncheckedUpdateWithoutClientInput>
    create: XOR<OrdersCreateWithoutClientInput, OrdersUncheckedCreateWithoutClientInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutClientInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutClientInput, OrdersUncheckedUpdateWithoutClientInput>
  }

  export type OrdersUpdateManyWithWhereWithoutClientInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutClientInput>
  }

  export type NotificationsAndNotesUpsertWithWhereUniqueWithoutClientInput = {
    where: NotificationsAndNotesWhereUniqueInput
    update: XOR<NotificationsAndNotesUpdateWithoutClientInput, NotificationsAndNotesUncheckedUpdateWithoutClientInput>
    create: XOR<NotificationsAndNotesCreateWithoutClientInput, NotificationsAndNotesUncheckedCreateWithoutClientInput>
  }

  export type NotificationsAndNotesUpdateWithWhereUniqueWithoutClientInput = {
    where: NotificationsAndNotesWhereUniqueInput
    data: XOR<NotificationsAndNotesUpdateWithoutClientInput, NotificationsAndNotesUncheckedUpdateWithoutClientInput>
  }

  export type NotificationsAndNotesUpdateManyWithWhereWithoutClientInput = {
    where: NotificationsAndNotesScalarWhereInput
    data: XOR<NotificationsAndNotesUpdateManyMutationInput, NotificationsAndNotesUncheckedUpdateManyWithoutClientInput>
  }

  export type AgentsCreateWithoutMaterialsInput = {
    agent_name: string
    password: string
    role: string
    orders?: OrdersCreateNestedManyWithoutAgentInput
    notifications_and_notes?: NotificationsAndNotesCreateNestedManyWithoutAgentInput
  }

  export type AgentsUncheckedCreateWithoutMaterialsInput = {
    id?: number
    agent_name: string
    password: string
    role: string
    orders?: OrdersUncheckedCreateNestedManyWithoutAgentInput
    notifications_and_notes?: NotificationsAndNotesUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentsCreateOrConnectWithoutMaterialsInput = {
    where: AgentsWhereUniqueInput
    create: XOR<AgentsCreateWithoutMaterialsInput, AgentsUncheckedCreateWithoutMaterialsInput>
  }

  export type CategoriesOfMaterialsCreateWithoutMaterialInput = {
    name: string
    image: string
    parent_id?: number | null
    categories_details?: CategoriesDetailsCreateNestedManyWithoutCategories_of_materialsInput
  }

  export type CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput = {
    id?: number
    name: string
    image: string
    parent_id?: number | null
    categories_details?: CategoriesDetailsUncheckedCreateNestedManyWithoutCategories_of_materialsInput
  }

  export type CategoriesOfMaterialsCreateOrConnectWithoutMaterialInput = {
    where: CategoriesOfMaterialsWhereUniqueInput
    create: XOR<CategoriesOfMaterialsCreateWithoutMaterialInput, CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput>
  }

  export type CategoriesOfMaterialsCreateManyMaterialInputEnvelope = {
    data: CategoriesOfMaterialsCreateManyMaterialInput | CategoriesOfMaterialsCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type AgentsUpsertWithoutMaterialsInput = {
    update: XOR<AgentsUpdateWithoutMaterialsInput, AgentsUncheckedUpdateWithoutMaterialsInput>
    create: XOR<AgentsCreateWithoutMaterialsInput, AgentsUncheckedCreateWithoutMaterialsInput>
    where?: AgentsWhereInput
  }

  export type AgentsUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: AgentsWhereInput
    data: XOR<AgentsUpdateWithoutMaterialsInput, AgentsUncheckedUpdateWithoutMaterialsInput>
  }

  export type AgentsUpdateWithoutMaterialsInput = {
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateManyWithoutAgentNestedInput
    notifications_and_notes?: NotificationsAndNotesUpdateManyWithoutAgentNestedInput
  }

  export type AgentsUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutAgentNestedInput
    notifications_and_notes?: NotificationsAndNotesUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type CategoriesOfMaterialsUpsertWithWhereUniqueWithoutMaterialInput = {
    where: CategoriesOfMaterialsWhereUniqueInput
    update: XOR<CategoriesOfMaterialsUpdateWithoutMaterialInput, CategoriesOfMaterialsUncheckedUpdateWithoutMaterialInput>
    create: XOR<CategoriesOfMaterialsCreateWithoutMaterialInput, CategoriesOfMaterialsUncheckedCreateWithoutMaterialInput>
  }

  export type CategoriesOfMaterialsUpdateWithWhereUniqueWithoutMaterialInput = {
    where: CategoriesOfMaterialsWhereUniqueInput
    data: XOR<CategoriesOfMaterialsUpdateWithoutMaterialInput, CategoriesOfMaterialsUncheckedUpdateWithoutMaterialInput>
  }

  export type CategoriesOfMaterialsUpdateManyWithWhereWithoutMaterialInput = {
    where: CategoriesOfMaterialsScalarWhereInput
    data: XOR<CategoriesOfMaterialsUpdateManyMutationInput, CategoriesOfMaterialsUncheckedUpdateManyWithoutMaterialInput>
  }

  export type CategoriesOfMaterialsScalarWhereInput = {
    AND?: CategoriesOfMaterialsScalarWhereInput | CategoriesOfMaterialsScalarWhereInput[]
    OR?: CategoriesOfMaterialsScalarWhereInput[]
    NOT?: CategoriesOfMaterialsScalarWhereInput | CategoriesOfMaterialsScalarWhereInput[]
    id?: IntFilter<"CategoriesOfMaterials"> | number
    name?: StringFilter<"CategoriesOfMaterials"> | string
    image?: StringFilter<"CategoriesOfMaterials"> | string
    material_id?: IntFilter<"CategoriesOfMaterials"> | number
    parent_id?: IntNullableFilter<"CategoriesOfMaterials"> | number | null
  }

  export type MaterialsCreateWithoutCategories_of_materialsInput = {
    name: string
    date_added: number
    agent?: AgentsCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialsUncheckedCreateWithoutCategories_of_materialsInput = {
    id?: number
    name: string
    date_added: number
    agent_id?: number | null
  }

  export type MaterialsCreateOrConnectWithoutCategories_of_materialsInput = {
    where: MaterialsWhereUniqueInput
    create: XOR<MaterialsCreateWithoutCategories_of_materialsInput, MaterialsUncheckedCreateWithoutCategories_of_materialsInput>
  }

  export type CategoriesDetailsCreateWithoutCategories_of_materialsInput = {
    It_detail_name: string
    code: string
    dimensions: string
    total: bigint | number
    rest: number
    remaining: number
    order_details?: OrderDetailsCreateNestedManyWithoutCategories_detailsInput
  }

  export type CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput = {
    id?: number
    It_detail_name: string
    code: string
    dimensions: string
    total: bigint | number
    rest: number
    remaining: number
    order_details?: OrderDetailsUncheckedCreateNestedManyWithoutCategories_detailsInput
  }

  export type CategoriesDetailsCreateOrConnectWithoutCategories_of_materialsInput = {
    where: CategoriesDetailsWhereUniqueInput
    create: XOR<CategoriesDetailsCreateWithoutCategories_of_materialsInput, CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput>
  }

  export type CategoriesDetailsCreateManyCategories_of_materialsInputEnvelope = {
    data: CategoriesDetailsCreateManyCategories_of_materialsInput | CategoriesDetailsCreateManyCategories_of_materialsInput[]
    skipDuplicates?: boolean
  }

  export type MaterialsUpsertWithoutCategories_of_materialsInput = {
    update: XOR<MaterialsUpdateWithoutCategories_of_materialsInput, MaterialsUncheckedUpdateWithoutCategories_of_materialsInput>
    create: XOR<MaterialsCreateWithoutCategories_of_materialsInput, MaterialsUncheckedCreateWithoutCategories_of_materialsInput>
    where?: MaterialsWhereInput
  }

  export type MaterialsUpdateToOneWithWhereWithoutCategories_of_materialsInput = {
    where?: MaterialsWhereInput
    data: XOR<MaterialsUpdateWithoutCategories_of_materialsInput, MaterialsUncheckedUpdateWithoutCategories_of_materialsInput>
  }

  export type MaterialsUpdateWithoutCategories_of_materialsInput = {
    name?: StringFieldUpdateOperationsInput | string
    date_added?: IntFieldUpdateOperationsInput | number
    agent?: AgentsUpdateOneWithoutMaterialsNestedInput
  }

  export type MaterialsUncheckedUpdateWithoutCategories_of_materialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date_added?: IntFieldUpdateOperationsInput | number
    agent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoriesDetailsUpsertWithWhereUniqueWithoutCategories_of_materialsInput = {
    where: CategoriesDetailsWhereUniqueInput
    update: XOR<CategoriesDetailsUpdateWithoutCategories_of_materialsInput, CategoriesDetailsUncheckedUpdateWithoutCategories_of_materialsInput>
    create: XOR<CategoriesDetailsCreateWithoutCategories_of_materialsInput, CategoriesDetailsUncheckedCreateWithoutCategories_of_materialsInput>
  }

  export type CategoriesDetailsUpdateWithWhereUniqueWithoutCategories_of_materialsInput = {
    where: CategoriesDetailsWhereUniqueInput
    data: XOR<CategoriesDetailsUpdateWithoutCategories_of_materialsInput, CategoriesDetailsUncheckedUpdateWithoutCategories_of_materialsInput>
  }

  export type CategoriesDetailsUpdateManyWithWhereWithoutCategories_of_materialsInput = {
    where: CategoriesDetailsScalarWhereInput
    data: XOR<CategoriesDetailsUpdateManyMutationInput, CategoriesDetailsUncheckedUpdateManyWithoutCategories_of_materialsInput>
  }

  export type CategoriesDetailsScalarWhereInput = {
    AND?: CategoriesDetailsScalarWhereInput | CategoriesDetailsScalarWhereInput[]
    OR?: CategoriesDetailsScalarWhereInput[]
    NOT?: CategoriesDetailsScalarWhereInput | CategoriesDetailsScalarWhereInput[]
    id?: IntFilter<"CategoriesDetails"> | number
    It_detail_name?: StringFilter<"CategoriesDetails"> | string
    code?: StringFilter<"CategoriesDetails"> | string
    dimensions?: StringFilter<"CategoriesDetails"> | string
    total?: BigIntFilter<"CategoriesDetails"> | bigint | number
    rest?: IntFilter<"CategoriesDetails"> | number
    remaining?: IntFilter<"CategoriesDetails"> | number
    category_material_id?: IntFilter<"CategoriesDetails"> | number
  }

  export type CategoriesOfMaterialsCreateWithoutCategories_detailsInput = {
    name: string
    image: string
    parent_id?: number | null
    material: MaterialsCreateNestedOneWithoutCategories_of_materialsInput
  }

  export type CategoriesOfMaterialsUncheckedCreateWithoutCategories_detailsInput = {
    id?: number
    name: string
    image: string
    material_id: number
    parent_id?: number | null
  }

  export type CategoriesOfMaterialsCreateOrConnectWithoutCategories_detailsInput = {
    where: CategoriesOfMaterialsWhereUniqueInput
    create: XOR<CategoriesOfMaterialsCreateWithoutCategories_detailsInput, CategoriesOfMaterialsUncheckedCreateWithoutCategories_detailsInput>
  }

  export type OrderDetailsCreateWithoutCategories_detailsInput = {
    count: number
    price: number
    order: OrdersCreateNestedOneWithoutOrder_detailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutCategories_detailsInput = {
    id?: number
    count: number
    price: number
    order_id: number
  }

  export type OrderDetailsCreateOrConnectWithoutCategories_detailsInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutCategories_detailsInput, OrderDetailsUncheckedCreateWithoutCategories_detailsInput>
  }

  export type OrderDetailsCreateManyCategories_detailsInputEnvelope = {
    data: OrderDetailsCreateManyCategories_detailsInput | OrderDetailsCreateManyCategories_detailsInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesOfMaterialsUpsertWithoutCategories_detailsInput = {
    update: XOR<CategoriesOfMaterialsUpdateWithoutCategories_detailsInput, CategoriesOfMaterialsUncheckedUpdateWithoutCategories_detailsInput>
    create: XOR<CategoriesOfMaterialsCreateWithoutCategories_detailsInput, CategoriesOfMaterialsUncheckedCreateWithoutCategories_detailsInput>
    where?: CategoriesOfMaterialsWhereInput
  }

  export type CategoriesOfMaterialsUpdateToOneWithWhereWithoutCategories_detailsInput = {
    where?: CategoriesOfMaterialsWhereInput
    data: XOR<CategoriesOfMaterialsUpdateWithoutCategories_detailsInput, CategoriesOfMaterialsUncheckedUpdateWithoutCategories_detailsInput>
  }

  export type CategoriesOfMaterialsUpdateWithoutCategories_detailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    material?: MaterialsUpdateOneRequiredWithoutCategories_of_materialsNestedInput
  }

  export type CategoriesOfMaterialsUncheckedUpdateWithoutCategories_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    material_id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutCategories_detailsInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutCategories_detailsInput, OrderDetailsUncheckedUpdateWithoutCategories_detailsInput>
    create: XOR<OrderDetailsCreateWithoutCategories_detailsInput, OrderDetailsUncheckedCreateWithoutCategories_detailsInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutCategories_detailsInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutCategories_detailsInput, OrderDetailsUncheckedUpdateWithoutCategories_detailsInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutCategories_detailsInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutCategories_detailsInput>
  }

  export type OrderDetailsScalarWhereInput = {
    AND?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    OR?: OrderDetailsScalarWhereInput[]
    NOT?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    id?: IntFilter<"OrderDetails"> | number
    categories_detail_id?: IntFilter<"OrderDetails"> | number
    count?: IntFilter<"OrderDetails"> | number
    price?: FloatFilter<"OrderDetails"> | number
    order_id?: IntFilter<"OrderDetails"> | number
  }

  export type ClientsCreateWithoutOrdersInput = {
    client_name: string
    password: string
    phone_number: string
    city: string
    notifications_and_notes?: NotificationsAndNotesCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutOrdersInput = {
    id?: number
    client_name: string
    password: string
    phone_number: string
    city: string
    notifications_and_notes?: NotificationsAndNotesUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutOrdersInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutOrdersInput, ClientsUncheckedCreateWithoutOrdersInput>
  }

  export type AgentsCreateWithoutOrdersInput = {
    agent_name: string
    password: string
    role: string
    materials?: MaterialsCreateNestedManyWithoutAgentInput
    notifications_and_notes?: NotificationsAndNotesCreateNestedManyWithoutAgentInput
  }

  export type AgentsUncheckedCreateWithoutOrdersInput = {
    id?: number
    agent_name: string
    password: string
    role: string
    materials?: MaterialsUncheckedCreateNestedManyWithoutAgentInput
    notifications_and_notes?: NotificationsAndNotesUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentsCreateOrConnectWithoutOrdersInput = {
    where: AgentsWhereUniqueInput
    create: XOR<AgentsCreateWithoutOrdersInput, AgentsUncheckedCreateWithoutOrdersInput>
  }

  export type OrderDetailsCreateWithoutOrderInput = {
    count: number
    price: number
    categories_details: CategoriesDetailsCreateNestedOneWithoutOrder_detailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutOrderInput = {
    id?: number
    categories_detail_id: number
    count: number
    price: number
  }

  export type OrderDetailsCreateOrConnectWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailsCreateManyOrderInputEnvelope = {
    data: OrderDetailsCreateManyOrderInput | OrderDetailsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ClientsUpsertWithoutOrdersInput = {
    update: XOR<ClientsUpdateWithoutOrdersInput, ClientsUncheckedUpdateWithoutOrdersInput>
    create: XOR<ClientsCreateWithoutOrdersInput, ClientsUncheckedCreateWithoutOrdersInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutOrdersInput, ClientsUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientsUpdateWithoutOrdersInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    notifications_and_notes?: NotificationsAndNotesUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    notifications_and_notes?: NotificationsAndNotesUncheckedUpdateManyWithoutClientNestedInput
  }

  export type AgentsUpsertWithoutOrdersInput = {
    update: XOR<AgentsUpdateWithoutOrdersInput, AgentsUncheckedUpdateWithoutOrdersInput>
    create: XOR<AgentsCreateWithoutOrdersInput, AgentsUncheckedCreateWithoutOrdersInput>
    where?: AgentsWhereInput
  }

  export type AgentsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: AgentsWhereInput
    data: XOR<AgentsUpdateWithoutOrdersInput, AgentsUncheckedUpdateWithoutOrdersInput>
  }

  export type AgentsUpdateWithoutOrdersInput = {
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    materials?: MaterialsUpdateManyWithoutAgentNestedInput
    notifications_and_notes?: NotificationsAndNotesUpdateManyWithoutAgentNestedInput
  }

  export type AgentsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    materials?: MaterialsUncheckedUpdateManyWithoutAgentNestedInput
    notifications_and_notes?: NotificationsAndNotesUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutOrderInput>
  }

  export type CategoriesDetailsCreateWithoutOrder_detailsInput = {
    It_detail_name: string
    code: string
    dimensions: string
    total: bigint | number
    rest: number
    remaining: number
    categories_of_materials: CategoriesOfMaterialsCreateNestedOneWithoutCategories_detailsInput
  }

  export type CategoriesDetailsUncheckedCreateWithoutOrder_detailsInput = {
    id?: number
    It_detail_name: string
    code: string
    dimensions: string
    total: bigint | number
    rest: number
    remaining: number
    category_material_id: number
  }

  export type CategoriesDetailsCreateOrConnectWithoutOrder_detailsInput = {
    where: CategoriesDetailsWhereUniqueInput
    create: XOR<CategoriesDetailsCreateWithoutOrder_detailsInput, CategoriesDetailsUncheckedCreateWithoutOrder_detailsInput>
  }

  export type OrdersCreateWithoutOrder_detailsInput = {
    order_date: Date | string
    order_status: string
    order: string
    client: ClientsCreateNestedOneWithoutOrdersInput
    agent: AgentsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutOrder_detailsInput = {
    id?: number
    client_id: number
    agent_id: number
    order_date: Date | string
    order_status: string
    order: string
  }

  export type OrdersCreateOrConnectWithoutOrder_detailsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrder_detailsInput, OrdersUncheckedCreateWithoutOrder_detailsInput>
  }

  export type CategoriesDetailsUpsertWithoutOrder_detailsInput = {
    update: XOR<CategoriesDetailsUpdateWithoutOrder_detailsInput, CategoriesDetailsUncheckedUpdateWithoutOrder_detailsInput>
    create: XOR<CategoriesDetailsCreateWithoutOrder_detailsInput, CategoriesDetailsUncheckedCreateWithoutOrder_detailsInput>
    where?: CategoriesDetailsWhereInput
  }

  export type CategoriesDetailsUpdateToOneWithWhereWithoutOrder_detailsInput = {
    where?: CategoriesDetailsWhereInput
    data: XOR<CategoriesDetailsUpdateWithoutOrder_detailsInput, CategoriesDetailsUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type CategoriesDetailsUpdateWithoutOrder_detailsInput = {
    It_detail_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dimensions?: StringFieldUpdateOperationsInput | string
    total?: BigIntFieldUpdateOperationsInput | bigint | number
    rest?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    categories_of_materials?: CategoriesOfMaterialsUpdateOneRequiredWithoutCategories_detailsNestedInput
  }

  export type CategoriesDetailsUncheckedUpdateWithoutOrder_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    It_detail_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dimensions?: StringFieldUpdateOperationsInput | string
    total?: BigIntFieldUpdateOperationsInput | bigint | number
    rest?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    category_material_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUpsertWithoutOrder_detailsInput = {
    update: XOR<OrdersUpdateWithoutOrder_detailsInput, OrdersUncheckedUpdateWithoutOrder_detailsInput>
    create: XOR<OrdersCreateWithoutOrder_detailsInput, OrdersUncheckedCreateWithoutOrder_detailsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrder_detailsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrder_detailsInput, OrdersUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type OrdersUpdateWithoutOrder_detailsInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    client?: ClientsUpdateOneRequiredWithoutOrdersNestedInput
    agent?: AgentsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrder_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsCreateWithoutNotifications_and_notesInput = {
    client_name: string
    password: string
    phone_number: string
    city: string
    orders?: OrdersCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutNotifications_and_notesInput = {
    id?: number
    client_name: string
    password: string
    phone_number: string
    city: string
    orders?: OrdersUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutNotifications_and_notesInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutNotifications_and_notesInput, ClientsUncheckedCreateWithoutNotifications_and_notesInput>
  }

  export type AgentsCreateWithoutNotifications_and_notesInput = {
    agent_name: string
    password: string
    role: string
    materials?: MaterialsCreateNestedManyWithoutAgentInput
    orders?: OrdersCreateNestedManyWithoutAgentInput
  }

  export type AgentsUncheckedCreateWithoutNotifications_and_notesInput = {
    id?: number
    agent_name: string
    password: string
    role: string
    materials?: MaterialsUncheckedCreateNestedManyWithoutAgentInput
    orders?: OrdersUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentsCreateOrConnectWithoutNotifications_and_notesInput = {
    where: AgentsWhereUniqueInput
    create: XOR<AgentsCreateWithoutNotifications_and_notesInput, AgentsUncheckedCreateWithoutNotifications_and_notesInput>
  }

  export type ClientsUpsertWithoutNotifications_and_notesInput = {
    update: XOR<ClientsUpdateWithoutNotifications_and_notesInput, ClientsUncheckedUpdateWithoutNotifications_and_notesInput>
    create: XOR<ClientsCreateWithoutNotifications_and_notesInput, ClientsUncheckedCreateWithoutNotifications_and_notesInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutNotifications_and_notesInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutNotifications_and_notesInput, ClientsUncheckedUpdateWithoutNotifications_and_notesInput>
  }

  export type ClientsUpdateWithoutNotifications_and_notesInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutNotifications_and_notesInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutClientNestedInput
  }

  export type AgentsUpsertWithoutNotifications_and_notesInput = {
    update: XOR<AgentsUpdateWithoutNotifications_and_notesInput, AgentsUncheckedUpdateWithoutNotifications_and_notesInput>
    create: XOR<AgentsCreateWithoutNotifications_and_notesInput, AgentsUncheckedCreateWithoutNotifications_and_notesInput>
    where?: AgentsWhereInput
  }

  export type AgentsUpdateToOneWithWhereWithoutNotifications_and_notesInput = {
    where?: AgentsWhereInput
    data: XOR<AgentsUpdateWithoutNotifications_and_notesInput, AgentsUncheckedUpdateWithoutNotifications_and_notesInput>
  }

  export type AgentsUpdateWithoutNotifications_and_notesInput = {
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    materials?: MaterialsUpdateManyWithoutAgentNestedInput
    orders?: OrdersUpdateManyWithoutAgentNestedInput
  }

  export type AgentsUncheckedUpdateWithoutNotifications_and_notesInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    materials?: MaterialsUncheckedUpdateManyWithoutAgentNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type MaterialsCreateManyAgentInput = {
    id?: number
    name: string
    date_added: number
  }

  export type OrdersCreateManyAgentInput = {
    id?: number
    client_id: number
    order_date: Date | string
    order_status: string
    order: string
  }

  export type NotificationsAndNotesCreateManyAgentInput = {
    id?: number
    client_id: number
    title: string
    body: string
    Notice_Date: Date | string
  }

  export type MaterialsUpdateWithoutAgentInput = {
    name?: StringFieldUpdateOperationsInput | string
    date_added?: IntFieldUpdateOperationsInput | number
    categories_of_materials?: CategoriesOfMaterialsUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialsUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date_added?: IntFieldUpdateOperationsInput | number
    categories_of_materials?: CategoriesOfMaterialsUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialsUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date_added?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUpdateWithoutAgentInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    client?: ClientsUpdateOneRequiredWithoutOrdersNestedInput
    order_details?: OrderDetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    order_details?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsAndNotesUpdateWithoutAgentInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutNotifications_and_notesNestedInput
  }

  export type NotificationsAndNotesUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsAndNotesUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyClientInput = {
    id?: number
    agent_id: number
    order_date: Date | string
    order_status: string
    order: string
  }

  export type NotificationsAndNotesCreateManyClientInput = {
    id?: number
    agent_id: number
    title: string
    body: string
    Notice_Date: Date | string
  }

  export type OrdersUpdateWithoutClientInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    agent?: AgentsUpdateOneRequiredWithoutOrdersNestedInput
    order_details?: OrderDetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
    order_details?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_status?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsAndNotesUpdateWithoutClientInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentsUpdateOneRequiredWithoutNotifications_and_notesNestedInput
  }

  export type NotificationsAndNotesUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsAndNotesUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    Notice_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOfMaterialsCreateManyMaterialInput = {
    id?: number
    name: string
    image: string
    parent_id?: number | null
  }

  export type CategoriesOfMaterialsUpdateWithoutMaterialInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    categories_details?: CategoriesDetailsUpdateManyWithoutCategories_of_materialsNestedInput
  }

  export type CategoriesOfMaterialsUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    categories_details?: CategoriesDetailsUncheckedUpdateManyWithoutCategories_of_materialsNestedInput
  }

  export type CategoriesOfMaterialsUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoriesDetailsCreateManyCategories_of_materialsInput = {
    id?: number
    It_detail_name: string
    code: string
    dimensions: string
    total: bigint | number
    rest: number
    remaining: number
  }

  export type CategoriesDetailsUpdateWithoutCategories_of_materialsInput = {
    It_detail_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dimensions?: StringFieldUpdateOperationsInput | string
    total?: BigIntFieldUpdateOperationsInput | bigint | number
    rest?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    order_details?: OrderDetailsUpdateManyWithoutCategories_detailsNestedInput
  }

  export type CategoriesDetailsUncheckedUpdateWithoutCategories_of_materialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    It_detail_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dimensions?: StringFieldUpdateOperationsInput | string
    total?: BigIntFieldUpdateOperationsInput | bigint | number
    rest?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
    order_details?: OrderDetailsUncheckedUpdateManyWithoutCategories_detailsNestedInput
  }

  export type CategoriesDetailsUncheckedUpdateManyWithoutCategories_of_materialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    It_detail_name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    dimensions?: StringFieldUpdateOperationsInput | string
    total?: BigIntFieldUpdateOperationsInput | bigint | number
    rest?: IntFieldUpdateOperationsInput | number
    remaining?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsCreateManyCategories_detailsInput = {
    id?: number
    count: number
    price: number
    order_id: number
  }

  export type OrderDetailsUpdateWithoutCategories_detailsInput = {
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrdersUpdateOneRequiredWithoutOrder_detailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutCategories_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsUncheckedUpdateManyWithoutCategories_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsCreateManyOrderInput = {
    id?: number
    categories_detail_id: number
    count: number
    price: number
  }

  export type OrderDetailsUpdateWithoutOrderInput = {
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    categories_details?: CategoriesDetailsUpdateOneRequiredWithoutOrder_detailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories_detail_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    categories_detail_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}