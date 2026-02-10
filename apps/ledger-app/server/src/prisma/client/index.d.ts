
/**
 * Client
**/

export * from '.prisma/client'

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>
/**
 * Model IngredientInventory
 * 
 */
export type IngredientInventory = $Result.DefaultSelection<Prisma.$IngredientInventoryPayload>
/**
 * Model IngredientPurchase
 * 
 */
export type IngredientPurchase = $Result.DefaultSelection<Prisma.$IngredientPurchasePayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model ProductBatch
 * 
 */
export type ProductBatch = $Result.DefaultSelection<Prisma.$ProductBatchPayload>
/**
 * Model ProductInventory
 * 
 */
export type ProductInventory = $Result.DefaultSelection<Prisma.$ProductInventoryPayload>
/**
 * Model ProductSale
 * 
 */
export type ProductSale = $Result.DefaultSelection<Prisma.$ProductSalePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model RecipeIngredients
 * 
 */
export type RecipeIngredients = $Result.DefaultSelection<Prisma.$RecipeIngredientsPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model ReferenceUrl
 * 
 */
export type ReferenceUrl = $Result.DefaultSelection<Prisma.$ReferenceUrlPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ImageType: {
  url: 'url',
  image: 'image'
};

export type ImageType = (typeof ImageType)[keyof typeof ImageType]


export const BatchType: {
  PURCHASED: 'PURCHASED',
  MANUFACTURED: 'MANUFACTURED'
};

export type BatchType = (typeof BatchType)[keyof typeof BatchType]


export const UrlType: {
  url: 'url',
  video: 'video',
  article: 'article',
  image: 'image'
};

export type UrlType = (typeof UrlType)[keyof typeof UrlType]


export const Role: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type ImageType = $Enums.ImageType

export const ImageType: typeof $Enums.ImageType

export type BatchType = $Enums.BatchType

export const BatchType: typeof $Enums.BatchType

export type UrlType = $Enums.UrlType

export const UrlType: typeof $Enums.UrlType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Images
 * const images = await prisma.images.findMany()
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
   * // Fetch zero or more Images
   * const images = await prisma.images.findMany()
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
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredientInventory`: Exposes CRUD operations for the **IngredientInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngredientInventories
    * const ingredientInventories = await prisma.ingredientInventory.findMany()
    * ```
    */
  get ingredientInventory(): Prisma.IngredientInventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredientPurchase`: Exposes CRUD operations for the **IngredientPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngredientPurchases
    * const ingredientPurchases = await prisma.ingredientPurchase.findMany()
    * ```
    */
  get ingredientPurchase(): Prisma.IngredientPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productBatch`: Exposes CRUD operations for the **ProductBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductBatches
    * const productBatches = await prisma.productBatch.findMany()
    * ```
    */
  get productBatch(): Prisma.ProductBatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productInventory`: Exposes CRUD operations for the **ProductInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductInventories
    * const productInventories = await prisma.productInventory.findMany()
    * ```
    */
  get productInventory(): Prisma.ProductInventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSale`: Exposes CRUD operations for the **ProductSale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSales
    * const productSales = await prisma.productSale.findMany()
    * ```
    */
  get productSale(): Prisma.ProductSaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeIngredients`: Exposes CRUD operations for the **RecipeIngredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeIngredients
    * const recipeIngredients = await prisma.recipeIngredients.findMany()
    * ```
    */
  get recipeIngredients(): Prisma.RecipeIngredientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referenceUrl`: Exposes CRUD operations for the **ReferenceUrl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferenceUrls
    * const referenceUrls = await prisma.referenceUrl.findMany()
    * ```
    */
  get referenceUrl(): Prisma.ReferenceUrlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
    Images: 'Images',
    IngredientInventory: 'IngredientInventory',
    IngredientPurchase: 'IngredientPurchase',
    Ingredient: 'Ingredient',
    ProductBatch: 'ProductBatch',
    ProductInventory: 'ProductInventory',
    ProductSale: 'ProductSale',
    Product: 'Product',
    RecipeIngredients: 'RecipeIngredients',
    Recipe: 'Recipe',
    ReferenceUrl: 'ReferenceUrl',
    Shop: 'Shop',
    Tag: 'Tag',
    User: 'User'
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
      modelProps: "images" | "ingredientInventory" | "ingredientPurchase" | "ingredient" | "productBatch" | "productInventory" | "productSale" | "product" | "recipeIngredients" | "recipe" | "referenceUrl" | "shop" | "tag" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      IngredientInventory: {
        payload: Prisma.$IngredientInventoryPayload<ExtArgs>
        fields: Prisma.IngredientInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload>
          }
          findFirst: {
            args: Prisma.IngredientInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload>
          }
          findMany: {
            args: Prisma.IngredientInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload>[]
          }
          create: {
            args: Prisma.IngredientInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload>
          }
          createMany: {
            args: Prisma.IngredientInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload>[]
          }
          delete: {
            args: Prisma.IngredientInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload>
          }
          update: {
            args: Prisma.IngredientInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload>
          }
          deleteMany: {
            args: Prisma.IngredientInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientInventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload>[]
          }
          upsert: {
            args: Prisma.IngredientInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientInventoryPayload>
          }
          aggregate: {
            args: Prisma.IngredientInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredientInventory>
          }
          groupBy: {
            args: Prisma.IngredientInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientInventoryCountAggregateOutputType> | number
          }
        }
      }
      IngredientPurchase: {
        payload: Prisma.$IngredientPurchasePayload<ExtArgs>
        fields: Prisma.IngredientPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload>
          }
          findFirst: {
            args: Prisma.IngredientPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload>
          }
          findMany: {
            args: Prisma.IngredientPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload>[]
          }
          create: {
            args: Prisma.IngredientPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload>
          }
          createMany: {
            args: Prisma.IngredientPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload>[]
          }
          delete: {
            args: Prisma.IngredientPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload>
          }
          update: {
            args: Prisma.IngredientPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload>
          }
          deleteMany: {
            args: Prisma.IngredientPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload>[]
          }
          upsert: {
            args: Prisma.IngredientPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPurchasePayload>
          }
          aggregate: {
            args: Prisma.IngredientPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredientPurchase>
          }
          groupBy: {
            args: Prisma.IngredientPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientPurchaseCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      ProductBatch: {
        payload: Prisma.$ProductBatchPayload<ExtArgs>
        fields: Prisma.ProductBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          findFirst: {
            args: Prisma.ProductBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          findMany: {
            args: Prisma.ProductBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>[]
          }
          create: {
            args: Prisma.ProductBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          createMany: {
            args: Prisma.ProductBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>[]
          }
          delete: {
            args: Prisma.ProductBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          update: {
            args: Prisma.ProductBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          deleteMany: {
            args: Prisma.ProductBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductBatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>[]
          }
          upsert: {
            args: Prisma.ProductBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          aggregate: {
            args: Prisma.ProductBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductBatch>
          }
          groupBy: {
            args: Prisma.ProductBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductBatchCountArgs<ExtArgs>
            result: $Utils.Optional<ProductBatchCountAggregateOutputType> | number
          }
        }
      }
      ProductInventory: {
        payload: Prisma.$ProductInventoryPayload<ExtArgs>
        fields: Prisma.ProductInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload>
          }
          findFirst: {
            args: Prisma.ProductInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload>
          }
          findMany: {
            args: Prisma.ProductInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload>[]
          }
          create: {
            args: Prisma.ProductInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload>
          }
          createMany: {
            args: Prisma.ProductInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload>[]
          }
          delete: {
            args: Prisma.ProductInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload>
          }
          update: {
            args: Prisma.ProductInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductInventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload>[]
          }
          upsert: {
            args: Prisma.ProductInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInventoryPayload>
          }
          aggregate: {
            args: Prisma.ProductInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductInventory>
          }
          groupBy: {
            args: Prisma.ProductInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductInventoryCountAggregateOutputType> | number
          }
        }
      }
      ProductSale: {
        payload: Prisma.$ProductSalePayload<ExtArgs>
        fields: Prisma.ProductSaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          findFirst: {
            args: Prisma.ProductSaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          findMany: {
            args: Prisma.ProductSaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>[]
          }
          create: {
            args: Prisma.ProductSaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          createMany: {
            args: Prisma.ProductSaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>[]
          }
          delete: {
            args: Prisma.ProductSaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          update: {
            args: Prisma.ProductSaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          deleteMany: {
            args: Prisma.ProductSaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>[]
          }
          upsert: {
            args: Prisma.ProductSaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSalePayload>
          }
          aggregate: {
            args: Prisma.ProductSaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSale>
          }
          groupBy: {
            args: Prisma.ProductSaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSaleCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSaleCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      RecipeIngredients: {
        payload: Prisma.$RecipeIngredientsPayload<ExtArgs>
        fields: Prisma.RecipeIngredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeIngredientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeIngredientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload>
          }
          findFirst: {
            args: Prisma.RecipeIngredientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeIngredientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload>
          }
          findMany: {
            args: Prisma.RecipeIngredientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload>[]
          }
          create: {
            args: Prisma.RecipeIngredientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload>
          }
          createMany: {
            args: Prisma.RecipeIngredientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeIngredientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload>[]
          }
          delete: {
            args: Prisma.RecipeIngredientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload>
          }
          update: {
            args: Prisma.RecipeIngredientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload>
          }
          deleteMany: {
            args: Prisma.RecipeIngredientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeIngredientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeIngredientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload>[]
          }
          upsert: {
            args: Prisma.RecipeIngredientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientsPayload>
          }
          aggregate: {
            args: Prisma.RecipeIngredientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeIngredients>
          }
          groupBy: {
            args: Prisma.RecipeIngredientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeIngredientsCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientsCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      ReferenceUrl: {
        payload: Prisma.$ReferenceUrlPayload<ExtArgs>
        fields: Prisma.ReferenceUrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferenceUrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferenceUrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload>
          }
          findFirst: {
            args: Prisma.ReferenceUrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferenceUrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload>
          }
          findMany: {
            args: Prisma.ReferenceUrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload>[]
          }
          create: {
            args: Prisma.ReferenceUrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload>
          }
          createMany: {
            args: Prisma.ReferenceUrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferenceUrlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload>[]
          }
          delete: {
            args: Prisma.ReferenceUrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload>
          }
          update: {
            args: Prisma.ReferenceUrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload>
          }
          deleteMany: {
            args: Prisma.ReferenceUrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferenceUrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferenceUrlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload>[]
          }
          upsert: {
            args: Prisma.ReferenceUrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceUrlPayload>
          }
          aggregate: {
            args: Prisma.ReferenceUrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferenceUrl>
          }
          groupBy: {
            args: Prisma.ReferenceUrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferenceUrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferenceUrlCountArgs<ExtArgs>
            result: $Utils.Optional<ReferenceUrlCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    images?: ImagesOmit
    ingredientInventory?: IngredientInventoryOmit
    ingredientPurchase?: IngredientPurchaseOmit
    ingredient?: IngredientOmit
    productBatch?: ProductBatchOmit
    productInventory?: ProductInventoryOmit
    productSale?: ProductSaleOmit
    product?: ProductOmit
    recipeIngredients?: RecipeIngredientsOmit
    recipe?: RecipeOmit
    referenceUrl?: ReferenceUrlOmit
    shop?: ShopOmit
    tag?: TagOmit
    user?: UserOmit
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
   * Count Type IngredientInventoryCountOutputType
   */

  export type IngredientInventoryCountOutputType = {
    purchase: number
  }

  export type IngredientInventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | IngredientInventoryCountOutputTypeCountPurchaseArgs
  }

  // Custom InputTypes
  /**
   * IngredientInventoryCountOutputType without action
   */
  export type IngredientInventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventoryCountOutputType
     */
    select?: IngredientInventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientInventoryCountOutputType without action
   */
  export type IngredientInventoryCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientPurchaseWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    inventory: number
    purchase: number
    recipeIngredients: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | IngredientCountOutputTypeCountInventoryArgs
    purchase?: boolean | IngredientCountOutputTypeCountPurchaseArgs
    recipeIngredients?: boolean | IngredientCountOutputTypeCountRecipeIngredientsArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientInventoryWhereInput
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientPurchaseWhereInput
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountRecipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientsWhereInput
  }


  /**
   * Count Type ProductBatchCountOutputType
   */

  export type ProductBatchCountOutputType = {
    inventory: number
  }

  export type ProductBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | ProductBatchCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes
  /**
   * ProductBatchCountOutputType without action
   */
  export type ProductBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatchCountOutputType
     */
    select?: ProductBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductBatchCountOutputType without action
   */
  export type ProductBatchCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInventoryWhereInput
  }


  /**
   * Count Type ProductInventoryCountOutputType
   */

  export type ProductInventoryCountOutputType = {
    sale: number
  }

  export type ProductInventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | ProductInventoryCountOutputTypeCountSaleArgs
  }

  // Custom InputTypes
  /**
   * ProductInventoryCountOutputType without action
   */
  export type ProductInventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventoryCountOutputType
     */
    select?: ProductInventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductInventoryCountOutputType without action
   */
  export type ProductInventoryCountOutputTypeCountSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSaleWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    recipes: number
    sale: number
    inventory: number
    purchase: number
    recipeIngredients: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | ProductCountOutputTypeCountRecipesArgs
    sale?: boolean | ProductCountOutputTypeCountSaleArgs
    inventory?: boolean | ProductCountOutputTypeCountInventoryArgs
    purchase?: boolean | ProductCountOutputTypeCountPurchaseArgs
    recipeIngredients?: boolean | ProductCountOutputTypeCountRecipeIngredientsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSaleWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInventoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBatchWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRecipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientsWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    ingredients: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientsWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    ingredients: number
    products: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | ShopCountOutputTypeCountIngredientsArgs
    products?: boolean | ShopCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientInventoryWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInventoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    orderId: number | null
  }

  export type ImagesSumAggregateOutputType = {
    orderId: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: string | null
    url: string | null
    orderId: number | null
    type: $Enums.ImageType | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: string | null
    url: string | null
    orderId: number | null
    type: $Enums.ImageType | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    url: number
    orderId: number
    type: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    orderId?: true
  }

  export type ImagesSumAggregateInputType = {
    orderId?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    url?: true
    orderId?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    url?: true
    orderId?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    url?: true
    orderId?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: string
    url: string
    orderId: number
    type: $Enums.ImageType
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    orderId?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    orderId?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    orderId?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectScalar = {
    id?: boolean
    url?: boolean
    orderId?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "orderId" | "type" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["images"]>

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      orderId: number
      type: $Enums.ImageType
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagesFindUniqueArgs>(args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagesFindFirstArgs>(args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagesFindManyArgs>(args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends ImagesCreateArgs>(args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagesCreateManyArgs>(args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImagesCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends ImagesDeleteArgs>(args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagesUpdateArgs>(args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagesDeleteManyArgs>(args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagesUpdateManyArgs>(args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImagesUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends ImagesUpsertArgs>(args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
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
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Images model
   */
  interface ImagesFieldRefs {
    readonly id: FieldRef<"Images", 'String'>
    readonly url: FieldRef<"Images", 'String'>
    readonly orderId: FieldRef<"Images", 'Int'>
    readonly type: FieldRef<"Images", 'ImageType'>
    readonly createdAt: FieldRef<"Images", 'DateTime'>
    readonly createdBy: FieldRef<"Images", 'String'>
    readonly updatedAt: FieldRef<"Images", 'DateTime'>
    readonly updatedBy: FieldRef<"Images", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }

  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Images createManyAndReturn
   */
  export type ImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Images updateManyAndReturn
   */
  export type ImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }

  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
  }


  /**
   * Model IngredientInventory
   */

  export type AggregateIngredientInventory = {
    _count: IngredientInventoryCountAggregateOutputType | null
    _avg: IngredientInventoryAvgAggregateOutputType | null
    _sum: IngredientInventorySumAggregateOutputType | null
    _min: IngredientInventoryMinAggregateOutputType | null
    _max: IngredientInventoryMaxAggregateOutputType | null
  }

  export type IngredientInventoryAvgAggregateOutputType = {
    quantity: number | null
    cost: number | null
  }

  export type IngredientInventorySumAggregateOutputType = {
    quantity: number | null
    cost: number | null
  }

  export type IngredientInventoryMinAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    cost: number | null
    isActive: boolean | null
    emptiedDate: Date | null
    ingredientId: string | null
    shopId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type IngredientInventoryMaxAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    cost: number | null
    isActive: boolean | null
    emptiedDate: Date | null
    ingredientId: string | null
    shopId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type IngredientInventoryCountAggregateOutputType = {
    id: number
    description: number
    quantity: number
    cost: number
    isActive: number
    emptiedDate: number
    ingredientId: number
    shopId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type IngredientInventoryAvgAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type IngredientInventorySumAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type IngredientInventoryMinAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    isActive?: true
    emptiedDate?: true
    ingredientId?: true
    shopId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type IngredientInventoryMaxAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    isActive?: true
    emptiedDate?: true
    ingredientId?: true
    shopId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type IngredientInventoryCountAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    isActive?: true
    emptiedDate?: true
    ingredientId?: true
    shopId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type IngredientInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientInventory to aggregate.
     */
    where?: IngredientInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientInventories to fetch.
     */
    orderBy?: IngredientInventoryOrderByWithRelationInput | IngredientInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngredientInventories
    **/
    _count?: true | IngredientInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientInventoryMaxAggregateInputType
  }

  export type GetIngredientInventoryAggregateType<T extends IngredientInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredientInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredientInventory[P]>
      : GetScalarType<T[P], AggregateIngredientInventory[P]>
  }




  export type IngredientInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientInventoryWhereInput
    orderBy?: IngredientInventoryOrderByWithAggregationInput | IngredientInventoryOrderByWithAggregationInput[]
    by: IngredientInventoryScalarFieldEnum[] | IngredientInventoryScalarFieldEnum
    having?: IngredientInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientInventoryCountAggregateInputType | true
    _avg?: IngredientInventoryAvgAggregateInputType
    _sum?: IngredientInventorySumAggregateInputType
    _min?: IngredientInventoryMinAggregateInputType
    _max?: IngredientInventoryMaxAggregateInputType
  }

  export type IngredientInventoryGroupByOutputType = {
    id: string
    description: string
    quantity: number
    cost: number
    isActive: boolean
    emptiedDate: Date
    ingredientId: string
    shopId: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: IngredientInventoryCountAggregateOutputType | null
    _avg: IngredientInventoryAvgAggregateOutputType | null
    _sum: IngredientInventorySumAggregateOutputType | null
    _min: IngredientInventoryMinAggregateOutputType | null
    _max: IngredientInventoryMaxAggregateOutputType | null
  }

  type GetIngredientInventoryGroupByPayload<T extends IngredientInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientInventoryGroupByOutputType[P]>
        }
      >
    >


  export type IngredientInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    isActive?: boolean
    emptiedDate?: boolean
    ingredientId?: boolean
    shopId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    purchase?: boolean | IngredientInventory$purchaseArgs<ExtArgs>
    _count?: boolean | IngredientInventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientInventory"]>

  export type IngredientInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    isActive?: boolean
    emptiedDate?: boolean
    ingredientId?: boolean
    shopId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientInventory"]>

  export type IngredientInventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    isActive?: boolean
    emptiedDate?: boolean
    ingredientId?: boolean
    shopId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientInventory"]>

  export type IngredientInventorySelectScalar = {
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    isActive?: boolean
    emptiedDate?: boolean
    ingredientId?: boolean
    shopId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type IngredientInventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "quantity" | "cost" | "isActive" | "emptiedDate" | "ingredientId" | "shopId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["ingredientInventory"]>
  export type IngredientInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    purchase?: boolean | IngredientInventory$purchaseArgs<ExtArgs>
    _count?: boolean | IngredientInventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type IngredientInventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $IngredientInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngredientInventory"
    objects: {
      ingredient: Prisma.$IngredientPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
      purchase: Prisma.$IngredientPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      quantity: number
      cost: number
      isActive: boolean
      emptiedDate: Date
      ingredientId: string
      shopId: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["ingredientInventory"]>
    composites: {}
  }

  type IngredientInventoryGetPayload<S extends boolean | null | undefined | IngredientInventoryDefaultArgs> = $Result.GetResult<Prisma.$IngredientInventoryPayload, S>

  type IngredientInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientInventoryCountAggregateInputType | true
    }

  export interface IngredientInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngredientInventory'], meta: { name: 'IngredientInventory' } }
    /**
     * Find zero or one IngredientInventory that matches the filter.
     * @param {IngredientInventoryFindUniqueArgs} args - Arguments to find a IngredientInventory
     * @example
     * // Get one IngredientInventory
     * const ingredientInventory = await prisma.ingredientInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientInventoryFindUniqueArgs>(args: SelectSubset<T, IngredientInventoryFindUniqueArgs<ExtArgs>>): Prisma__IngredientInventoryClient<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IngredientInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientInventoryFindUniqueOrThrowArgs} args - Arguments to find a IngredientInventory
     * @example
     * // Get one IngredientInventory
     * const ingredientInventory = await prisma.ingredientInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientInventoryClient<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientInventoryFindFirstArgs} args - Arguments to find a IngredientInventory
     * @example
     * // Get one IngredientInventory
     * const ingredientInventory = await prisma.ingredientInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientInventoryFindFirstArgs>(args?: SelectSubset<T, IngredientInventoryFindFirstArgs<ExtArgs>>): Prisma__IngredientInventoryClient<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientInventoryFindFirstOrThrowArgs} args - Arguments to find a IngredientInventory
     * @example
     * // Get one IngredientInventory
     * const ingredientInventory = await prisma.ingredientInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientInventoryClient<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IngredientInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngredientInventories
     * const ingredientInventories = await prisma.ingredientInventory.findMany()
     * 
     * // Get first 10 IngredientInventories
     * const ingredientInventories = await prisma.ingredientInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientInventoryWithIdOnly = await prisma.ingredientInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientInventoryFindManyArgs>(args?: SelectSubset<T, IngredientInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IngredientInventory.
     * @param {IngredientInventoryCreateArgs} args - Arguments to create a IngredientInventory.
     * @example
     * // Create one IngredientInventory
     * const IngredientInventory = await prisma.ingredientInventory.create({
     *   data: {
     *     // ... data to create a IngredientInventory
     *   }
     * })
     * 
     */
    create<T extends IngredientInventoryCreateArgs>(args: SelectSubset<T, IngredientInventoryCreateArgs<ExtArgs>>): Prisma__IngredientInventoryClient<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IngredientInventories.
     * @param {IngredientInventoryCreateManyArgs} args - Arguments to create many IngredientInventories.
     * @example
     * // Create many IngredientInventories
     * const ingredientInventory = await prisma.ingredientInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientInventoryCreateManyArgs>(args?: SelectSubset<T, IngredientInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngredientInventories and returns the data saved in the database.
     * @param {IngredientInventoryCreateManyAndReturnArgs} args - Arguments to create many IngredientInventories.
     * @example
     * // Create many IngredientInventories
     * const ingredientInventory = await prisma.ingredientInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngredientInventories and only return the `id`
     * const ingredientInventoryWithIdOnly = await prisma.ingredientInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IngredientInventory.
     * @param {IngredientInventoryDeleteArgs} args - Arguments to delete one IngredientInventory.
     * @example
     * // Delete one IngredientInventory
     * const IngredientInventory = await prisma.ingredientInventory.delete({
     *   where: {
     *     // ... filter to delete one IngredientInventory
     *   }
     * })
     * 
     */
    delete<T extends IngredientInventoryDeleteArgs>(args: SelectSubset<T, IngredientInventoryDeleteArgs<ExtArgs>>): Prisma__IngredientInventoryClient<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IngredientInventory.
     * @param {IngredientInventoryUpdateArgs} args - Arguments to update one IngredientInventory.
     * @example
     * // Update one IngredientInventory
     * const ingredientInventory = await prisma.ingredientInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientInventoryUpdateArgs>(args: SelectSubset<T, IngredientInventoryUpdateArgs<ExtArgs>>): Prisma__IngredientInventoryClient<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IngredientInventories.
     * @param {IngredientInventoryDeleteManyArgs} args - Arguments to filter IngredientInventories to delete.
     * @example
     * // Delete a few IngredientInventories
     * const { count } = await prisma.ingredientInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientInventoryDeleteManyArgs>(args?: SelectSubset<T, IngredientInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngredientInventories
     * const ingredientInventory = await prisma.ingredientInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientInventoryUpdateManyArgs>(args: SelectSubset<T, IngredientInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientInventories and returns the data updated in the database.
     * @param {IngredientInventoryUpdateManyAndReturnArgs} args - Arguments to update many IngredientInventories.
     * @example
     * // Update many IngredientInventories
     * const ingredientInventory = await prisma.ingredientInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IngredientInventories and only return the `id`
     * const ingredientInventoryWithIdOnly = await prisma.ingredientInventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientInventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IngredientInventory.
     * @param {IngredientInventoryUpsertArgs} args - Arguments to update or create a IngredientInventory.
     * @example
     * // Update or create a IngredientInventory
     * const ingredientInventory = await prisma.ingredientInventory.upsert({
     *   create: {
     *     // ... data to create a IngredientInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngredientInventory we want to update
     *   }
     * })
     */
    upsert<T extends IngredientInventoryUpsertArgs>(args: SelectSubset<T, IngredientInventoryUpsertArgs<ExtArgs>>): Prisma__IngredientInventoryClient<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IngredientInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientInventoryCountArgs} args - Arguments to filter IngredientInventories to count.
     * @example
     * // Count the number of IngredientInventories
     * const count = await prisma.ingredientInventory.count({
     *   where: {
     *     // ... the filter for the IngredientInventories we want to count
     *   }
     * })
    **/
    count<T extends IngredientInventoryCountArgs>(
      args?: Subset<T, IngredientInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngredientInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientInventoryAggregateArgs>(args: Subset<T, IngredientInventoryAggregateArgs>): Prisma.PrismaPromise<GetIngredientInventoryAggregateType<T>>

    /**
     * Group by IngredientInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientInventoryGroupByArgs} args - Group by arguments.
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
      T extends IngredientInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientInventoryGroupByArgs['orderBy'] }
        : { orderBy?: IngredientInventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngredientInventory model
   */
  readonly fields: IngredientInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngredientInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchase<T extends IngredientInventory$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, IngredientInventory$purchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the IngredientInventory model
   */
  interface IngredientInventoryFieldRefs {
    readonly id: FieldRef<"IngredientInventory", 'String'>
    readonly description: FieldRef<"IngredientInventory", 'String'>
    readonly quantity: FieldRef<"IngredientInventory", 'Float'>
    readonly cost: FieldRef<"IngredientInventory", 'Float'>
    readonly isActive: FieldRef<"IngredientInventory", 'Boolean'>
    readonly emptiedDate: FieldRef<"IngredientInventory", 'DateTime'>
    readonly ingredientId: FieldRef<"IngredientInventory", 'String'>
    readonly shopId: FieldRef<"IngredientInventory", 'String'>
    readonly createdAt: FieldRef<"IngredientInventory", 'DateTime'>
    readonly createdBy: FieldRef<"IngredientInventory", 'String'>
    readonly updatedAt: FieldRef<"IngredientInventory", 'DateTime'>
    readonly updatedBy: FieldRef<"IngredientInventory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IngredientInventory findUnique
   */
  export type IngredientInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    /**
     * Filter, which IngredientInventory to fetch.
     */
    where: IngredientInventoryWhereUniqueInput
  }

  /**
   * IngredientInventory findUniqueOrThrow
   */
  export type IngredientInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    /**
     * Filter, which IngredientInventory to fetch.
     */
    where: IngredientInventoryWhereUniqueInput
  }

  /**
   * IngredientInventory findFirst
   */
  export type IngredientInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    /**
     * Filter, which IngredientInventory to fetch.
     */
    where?: IngredientInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientInventories to fetch.
     */
    orderBy?: IngredientInventoryOrderByWithRelationInput | IngredientInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientInventories.
     */
    cursor?: IngredientInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientInventories.
     */
    distinct?: IngredientInventoryScalarFieldEnum | IngredientInventoryScalarFieldEnum[]
  }

  /**
   * IngredientInventory findFirstOrThrow
   */
  export type IngredientInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    /**
     * Filter, which IngredientInventory to fetch.
     */
    where?: IngredientInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientInventories to fetch.
     */
    orderBy?: IngredientInventoryOrderByWithRelationInput | IngredientInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientInventories.
     */
    cursor?: IngredientInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientInventories.
     */
    distinct?: IngredientInventoryScalarFieldEnum | IngredientInventoryScalarFieldEnum[]
  }

  /**
   * IngredientInventory findMany
   */
  export type IngredientInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    /**
     * Filter, which IngredientInventories to fetch.
     */
    where?: IngredientInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientInventories to fetch.
     */
    orderBy?: IngredientInventoryOrderByWithRelationInput | IngredientInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngredientInventories.
     */
    cursor?: IngredientInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientInventories.
     */
    skip?: number
    distinct?: IngredientInventoryScalarFieldEnum | IngredientInventoryScalarFieldEnum[]
  }

  /**
   * IngredientInventory create
   */
  export type IngredientInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a IngredientInventory.
     */
    data: XOR<IngredientInventoryCreateInput, IngredientInventoryUncheckedCreateInput>
  }

  /**
   * IngredientInventory createMany
   */
  export type IngredientInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngredientInventories.
     */
    data: IngredientInventoryCreateManyInput | IngredientInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngredientInventory createManyAndReturn
   */
  export type IngredientInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * The data used to create many IngredientInventories.
     */
    data: IngredientInventoryCreateManyInput | IngredientInventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientInventory update
   */
  export type IngredientInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a IngredientInventory.
     */
    data: XOR<IngredientInventoryUpdateInput, IngredientInventoryUncheckedUpdateInput>
    /**
     * Choose, which IngredientInventory to update.
     */
    where: IngredientInventoryWhereUniqueInput
  }

  /**
   * IngredientInventory updateMany
   */
  export type IngredientInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngredientInventories.
     */
    data: XOR<IngredientInventoryUpdateManyMutationInput, IngredientInventoryUncheckedUpdateManyInput>
    /**
     * Filter which IngredientInventories to update
     */
    where?: IngredientInventoryWhereInput
    /**
     * Limit how many IngredientInventories to update.
     */
    limit?: number
  }

  /**
   * IngredientInventory updateManyAndReturn
   */
  export type IngredientInventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * The data used to update IngredientInventories.
     */
    data: XOR<IngredientInventoryUpdateManyMutationInput, IngredientInventoryUncheckedUpdateManyInput>
    /**
     * Filter which IngredientInventories to update
     */
    where?: IngredientInventoryWhereInput
    /**
     * Limit how many IngredientInventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientInventory upsert
   */
  export type IngredientInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the IngredientInventory to update in case it exists.
     */
    where: IngredientInventoryWhereUniqueInput
    /**
     * In case the IngredientInventory found by the `where` argument doesn't exist, create a new IngredientInventory with this data.
     */
    create: XOR<IngredientInventoryCreateInput, IngredientInventoryUncheckedCreateInput>
    /**
     * In case the IngredientInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientInventoryUpdateInput, IngredientInventoryUncheckedUpdateInput>
  }

  /**
   * IngredientInventory delete
   */
  export type IngredientInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    /**
     * Filter which IngredientInventory to delete.
     */
    where: IngredientInventoryWhereUniqueInput
  }

  /**
   * IngredientInventory deleteMany
   */
  export type IngredientInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientInventories to delete
     */
    where?: IngredientInventoryWhereInput
    /**
     * Limit how many IngredientInventories to delete.
     */
    limit?: number
  }

  /**
   * IngredientInventory.purchase
   */
  export type IngredientInventory$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    where?: IngredientPurchaseWhereInput
    orderBy?: IngredientPurchaseOrderByWithRelationInput | IngredientPurchaseOrderByWithRelationInput[]
    cursor?: IngredientPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientPurchaseScalarFieldEnum | IngredientPurchaseScalarFieldEnum[]
  }

  /**
   * IngredientInventory without action
   */
  export type IngredientInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
  }


  /**
   * Model IngredientPurchase
   */

  export type AggregateIngredientPurchase = {
    _count: IngredientPurchaseCountAggregateOutputType | null
    _avg: IngredientPurchaseAvgAggregateOutputType | null
    _sum: IngredientPurchaseSumAggregateOutputType | null
    _min: IngredientPurchaseMinAggregateOutputType | null
    _max: IngredientPurchaseMaxAggregateOutputType | null
  }

  export type IngredientPurchaseAvgAggregateOutputType = {
    quantity: number | null
    cost: number | null
  }

  export type IngredientPurchaseSumAggregateOutputType = {
    quantity: number | null
    cost: number | null
  }

  export type IngredientPurchaseMinAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    cost: number | null
    purchaseDate: Date | null
    expiryDate: Date | null
    ingredientId: string | null
    inventoryId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type IngredientPurchaseMaxAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    cost: number | null
    purchaseDate: Date | null
    expiryDate: Date | null
    ingredientId: string | null
    inventoryId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type IngredientPurchaseCountAggregateOutputType = {
    id: number
    description: number
    quantity: number
    cost: number
    purchaseDate: number
    expiryDate: number
    ingredientId: number
    inventoryId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type IngredientPurchaseAvgAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type IngredientPurchaseSumAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type IngredientPurchaseMinAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    purchaseDate?: true
    expiryDate?: true
    ingredientId?: true
    inventoryId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type IngredientPurchaseMaxAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    purchaseDate?: true
    expiryDate?: true
    ingredientId?: true
    inventoryId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type IngredientPurchaseCountAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    purchaseDate?: true
    expiryDate?: true
    ingredientId?: true
    inventoryId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type IngredientPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientPurchase to aggregate.
     */
    where?: IngredientPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientPurchases to fetch.
     */
    orderBy?: IngredientPurchaseOrderByWithRelationInput | IngredientPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngredientPurchases
    **/
    _count?: true | IngredientPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientPurchaseMaxAggregateInputType
  }

  export type GetIngredientPurchaseAggregateType<T extends IngredientPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredientPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredientPurchase[P]>
      : GetScalarType<T[P], AggregateIngredientPurchase[P]>
  }




  export type IngredientPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientPurchaseWhereInput
    orderBy?: IngredientPurchaseOrderByWithAggregationInput | IngredientPurchaseOrderByWithAggregationInput[]
    by: IngredientPurchaseScalarFieldEnum[] | IngredientPurchaseScalarFieldEnum
    having?: IngredientPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientPurchaseCountAggregateInputType | true
    _avg?: IngredientPurchaseAvgAggregateInputType
    _sum?: IngredientPurchaseSumAggregateInputType
    _min?: IngredientPurchaseMinAggregateInputType
    _max?: IngredientPurchaseMaxAggregateInputType
  }

  export type IngredientPurchaseGroupByOutputType = {
    id: string
    description: string
    quantity: number
    cost: number
    purchaseDate: Date
    expiryDate: Date
    ingredientId: string
    inventoryId: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: IngredientPurchaseCountAggregateOutputType | null
    _avg: IngredientPurchaseAvgAggregateOutputType | null
    _sum: IngredientPurchaseSumAggregateOutputType | null
    _min: IngredientPurchaseMinAggregateOutputType | null
    _max: IngredientPurchaseMaxAggregateOutputType | null
  }

  type GetIngredientPurchaseGroupByPayload<T extends IngredientPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type IngredientPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    purchaseDate?: boolean
    expiryDate?: boolean
    ingredientId?: boolean
    inventoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    inventory?: boolean | IngredientInventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientPurchase"]>

  export type IngredientPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    purchaseDate?: boolean
    expiryDate?: boolean
    ingredientId?: boolean
    inventoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    inventory?: boolean | IngredientInventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientPurchase"]>

  export type IngredientPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    purchaseDate?: boolean
    expiryDate?: boolean
    ingredientId?: boolean
    inventoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    inventory?: boolean | IngredientInventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientPurchase"]>

  export type IngredientPurchaseSelectScalar = {
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    purchaseDate?: boolean
    expiryDate?: boolean
    ingredientId?: boolean
    inventoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type IngredientPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "quantity" | "cost" | "purchaseDate" | "expiryDate" | "ingredientId" | "inventoryId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["ingredientPurchase"]>
  export type IngredientPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    inventory?: boolean | IngredientInventoryDefaultArgs<ExtArgs>
  }
  export type IngredientPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    inventory?: boolean | IngredientInventoryDefaultArgs<ExtArgs>
  }
  export type IngredientPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    inventory?: boolean | IngredientInventoryDefaultArgs<ExtArgs>
  }

  export type $IngredientPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngredientPurchase"
    objects: {
      ingredient: Prisma.$IngredientPayload<ExtArgs>
      inventory: Prisma.$IngredientInventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      quantity: number
      cost: number
      purchaseDate: Date
      expiryDate: Date
      ingredientId: string
      inventoryId: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["ingredientPurchase"]>
    composites: {}
  }

  type IngredientPurchaseGetPayload<S extends boolean | null | undefined | IngredientPurchaseDefaultArgs> = $Result.GetResult<Prisma.$IngredientPurchasePayload, S>

  type IngredientPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientPurchaseCountAggregateInputType | true
    }

  export interface IngredientPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngredientPurchase'], meta: { name: 'IngredientPurchase' } }
    /**
     * Find zero or one IngredientPurchase that matches the filter.
     * @param {IngredientPurchaseFindUniqueArgs} args - Arguments to find a IngredientPurchase
     * @example
     * // Get one IngredientPurchase
     * const ingredientPurchase = await prisma.ingredientPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientPurchaseFindUniqueArgs>(args: SelectSubset<T, IngredientPurchaseFindUniqueArgs<ExtArgs>>): Prisma__IngredientPurchaseClient<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IngredientPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientPurchaseFindUniqueOrThrowArgs} args - Arguments to find a IngredientPurchase
     * @example
     * // Get one IngredientPurchase
     * const ingredientPurchase = await prisma.ingredientPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientPurchaseClient<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientPurchaseFindFirstArgs} args - Arguments to find a IngredientPurchase
     * @example
     * // Get one IngredientPurchase
     * const ingredientPurchase = await prisma.ingredientPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientPurchaseFindFirstArgs>(args?: SelectSubset<T, IngredientPurchaseFindFirstArgs<ExtArgs>>): Prisma__IngredientPurchaseClient<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientPurchaseFindFirstOrThrowArgs} args - Arguments to find a IngredientPurchase
     * @example
     * // Get one IngredientPurchase
     * const ingredientPurchase = await prisma.ingredientPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientPurchaseClient<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IngredientPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngredientPurchases
     * const ingredientPurchases = await prisma.ingredientPurchase.findMany()
     * 
     * // Get first 10 IngredientPurchases
     * const ingredientPurchases = await prisma.ingredientPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientPurchaseWithIdOnly = await prisma.ingredientPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientPurchaseFindManyArgs>(args?: SelectSubset<T, IngredientPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IngredientPurchase.
     * @param {IngredientPurchaseCreateArgs} args - Arguments to create a IngredientPurchase.
     * @example
     * // Create one IngredientPurchase
     * const IngredientPurchase = await prisma.ingredientPurchase.create({
     *   data: {
     *     // ... data to create a IngredientPurchase
     *   }
     * })
     * 
     */
    create<T extends IngredientPurchaseCreateArgs>(args: SelectSubset<T, IngredientPurchaseCreateArgs<ExtArgs>>): Prisma__IngredientPurchaseClient<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IngredientPurchases.
     * @param {IngredientPurchaseCreateManyArgs} args - Arguments to create many IngredientPurchases.
     * @example
     * // Create many IngredientPurchases
     * const ingredientPurchase = await prisma.ingredientPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientPurchaseCreateManyArgs>(args?: SelectSubset<T, IngredientPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngredientPurchases and returns the data saved in the database.
     * @param {IngredientPurchaseCreateManyAndReturnArgs} args - Arguments to create many IngredientPurchases.
     * @example
     * // Create many IngredientPurchases
     * const ingredientPurchase = await prisma.ingredientPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngredientPurchases and only return the `id`
     * const ingredientPurchaseWithIdOnly = await prisma.ingredientPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IngredientPurchase.
     * @param {IngredientPurchaseDeleteArgs} args - Arguments to delete one IngredientPurchase.
     * @example
     * // Delete one IngredientPurchase
     * const IngredientPurchase = await prisma.ingredientPurchase.delete({
     *   where: {
     *     // ... filter to delete one IngredientPurchase
     *   }
     * })
     * 
     */
    delete<T extends IngredientPurchaseDeleteArgs>(args: SelectSubset<T, IngredientPurchaseDeleteArgs<ExtArgs>>): Prisma__IngredientPurchaseClient<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IngredientPurchase.
     * @param {IngredientPurchaseUpdateArgs} args - Arguments to update one IngredientPurchase.
     * @example
     * // Update one IngredientPurchase
     * const ingredientPurchase = await prisma.ingredientPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientPurchaseUpdateArgs>(args: SelectSubset<T, IngredientPurchaseUpdateArgs<ExtArgs>>): Prisma__IngredientPurchaseClient<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IngredientPurchases.
     * @param {IngredientPurchaseDeleteManyArgs} args - Arguments to filter IngredientPurchases to delete.
     * @example
     * // Delete a few IngredientPurchases
     * const { count } = await prisma.ingredientPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientPurchaseDeleteManyArgs>(args?: SelectSubset<T, IngredientPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngredientPurchases
     * const ingredientPurchase = await prisma.ingredientPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientPurchaseUpdateManyArgs>(args: SelectSubset<T, IngredientPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientPurchases and returns the data updated in the database.
     * @param {IngredientPurchaseUpdateManyAndReturnArgs} args - Arguments to update many IngredientPurchases.
     * @example
     * // Update many IngredientPurchases
     * const ingredientPurchase = await prisma.ingredientPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IngredientPurchases and only return the `id`
     * const ingredientPurchaseWithIdOnly = await prisma.ingredientPurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IngredientPurchase.
     * @param {IngredientPurchaseUpsertArgs} args - Arguments to update or create a IngredientPurchase.
     * @example
     * // Update or create a IngredientPurchase
     * const ingredientPurchase = await prisma.ingredientPurchase.upsert({
     *   create: {
     *     // ... data to create a IngredientPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngredientPurchase we want to update
     *   }
     * })
     */
    upsert<T extends IngredientPurchaseUpsertArgs>(args: SelectSubset<T, IngredientPurchaseUpsertArgs<ExtArgs>>): Prisma__IngredientPurchaseClient<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IngredientPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientPurchaseCountArgs} args - Arguments to filter IngredientPurchases to count.
     * @example
     * // Count the number of IngredientPurchases
     * const count = await prisma.ingredientPurchase.count({
     *   where: {
     *     // ... the filter for the IngredientPurchases we want to count
     *   }
     * })
    **/
    count<T extends IngredientPurchaseCountArgs>(
      args?: Subset<T, IngredientPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngredientPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientPurchaseAggregateArgs>(args: Subset<T, IngredientPurchaseAggregateArgs>): Prisma.PrismaPromise<GetIngredientPurchaseAggregateType<T>>

    /**
     * Group by IngredientPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientPurchaseGroupByArgs} args - Group by arguments.
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
      T extends IngredientPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: IngredientPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngredientPurchase model
   */
  readonly fields: IngredientPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngredientPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventory<T extends IngredientInventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientInventoryDefaultArgs<ExtArgs>>): Prisma__IngredientInventoryClient<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IngredientPurchase model
   */
  interface IngredientPurchaseFieldRefs {
    readonly id: FieldRef<"IngredientPurchase", 'String'>
    readonly description: FieldRef<"IngredientPurchase", 'String'>
    readonly quantity: FieldRef<"IngredientPurchase", 'Float'>
    readonly cost: FieldRef<"IngredientPurchase", 'Float'>
    readonly purchaseDate: FieldRef<"IngredientPurchase", 'DateTime'>
    readonly expiryDate: FieldRef<"IngredientPurchase", 'DateTime'>
    readonly ingredientId: FieldRef<"IngredientPurchase", 'String'>
    readonly inventoryId: FieldRef<"IngredientPurchase", 'String'>
    readonly createdAt: FieldRef<"IngredientPurchase", 'DateTime'>
    readonly createdBy: FieldRef<"IngredientPurchase", 'String'>
    readonly updatedAt: FieldRef<"IngredientPurchase", 'DateTime'>
    readonly updatedBy: FieldRef<"IngredientPurchase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IngredientPurchase findUnique
   */
  export type IngredientPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientPurchase to fetch.
     */
    where: IngredientPurchaseWhereUniqueInput
  }

  /**
   * IngredientPurchase findUniqueOrThrow
   */
  export type IngredientPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientPurchase to fetch.
     */
    where: IngredientPurchaseWhereUniqueInput
  }

  /**
   * IngredientPurchase findFirst
   */
  export type IngredientPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientPurchase to fetch.
     */
    where?: IngredientPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientPurchases to fetch.
     */
    orderBy?: IngredientPurchaseOrderByWithRelationInput | IngredientPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientPurchases.
     */
    cursor?: IngredientPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientPurchases.
     */
    distinct?: IngredientPurchaseScalarFieldEnum | IngredientPurchaseScalarFieldEnum[]
  }

  /**
   * IngredientPurchase findFirstOrThrow
   */
  export type IngredientPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientPurchase to fetch.
     */
    where?: IngredientPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientPurchases to fetch.
     */
    orderBy?: IngredientPurchaseOrderByWithRelationInput | IngredientPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientPurchases.
     */
    cursor?: IngredientPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientPurchases.
     */
    distinct?: IngredientPurchaseScalarFieldEnum | IngredientPurchaseScalarFieldEnum[]
  }

  /**
   * IngredientPurchase findMany
   */
  export type IngredientPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientPurchases to fetch.
     */
    where?: IngredientPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientPurchases to fetch.
     */
    orderBy?: IngredientPurchaseOrderByWithRelationInput | IngredientPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngredientPurchases.
     */
    cursor?: IngredientPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientPurchases.
     */
    skip?: number
    distinct?: IngredientPurchaseScalarFieldEnum | IngredientPurchaseScalarFieldEnum[]
  }

  /**
   * IngredientPurchase create
   */
  export type IngredientPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a IngredientPurchase.
     */
    data: XOR<IngredientPurchaseCreateInput, IngredientPurchaseUncheckedCreateInput>
  }

  /**
   * IngredientPurchase createMany
   */
  export type IngredientPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngredientPurchases.
     */
    data: IngredientPurchaseCreateManyInput | IngredientPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngredientPurchase createManyAndReturn
   */
  export type IngredientPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many IngredientPurchases.
     */
    data: IngredientPurchaseCreateManyInput | IngredientPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientPurchase update
   */
  export type IngredientPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a IngredientPurchase.
     */
    data: XOR<IngredientPurchaseUpdateInput, IngredientPurchaseUncheckedUpdateInput>
    /**
     * Choose, which IngredientPurchase to update.
     */
    where: IngredientPurchaseWhereUniqueInput
  }

  /**
   * IngredientPurchase updateMany
   */
  export type IngredientPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngredientPurchases.
     */
    data: XOR<IngredientPurchaseUpdateManyMutationInput, IngredientPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which IngredientPurchases to update
     */
    where?: IngredientPurchaseWhereInput
    /**
     * Limit how many IngredientPurchases to update.
     */
    limit?: number
  }

  /**
   * IngredientPurchase updateManyAndReturn
   */
  export type IngredientPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update IngredientPurchases.
     */
    data: XOR<IngredientPurchaseUpdateManyMutationInput, IngredientPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which IngredientPurchases to update
     */
    where?: IngredientPurchaseWhereInput
    /**
     * Limit how many IngredientPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientPurchase upsert
   */
  export type IngredientPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the IngredientPurchase to update in case it exists.
     */
    where: IngredientPurchaseWhereUniqueInput
    /**
     * In case the IngredientPurchase found by the `where` argument doesn't exist, create a new IngredientPurchase with this data.
     */
    create: XOR<IngredientPurchaseCreateInput, IngredientPurchaseUncheckedCreateInput>
    /**
     * In case the IngredientPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientPurchaseUpdateInput, IngredientPurchaseUncheckedUpdateInput>
  }

  /**
   * IngredientPurchase delete
   */
  export type IngredientPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    /**
     * Filter which IngredientPurchase to delete.
     */
    where: IngredientPurchaseWhereUniqueInput
  }

  /**
   * IngredientPurchase deleteMany
   */
  export type IngredientPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientPurchases to delete
     */
    where?: IngredientPurchaseWhereInput
    /**
     * Limit how many IngredientPurchases to delete.
     */
    limit?: number
  }

  /**
   * IngredientPurchase without action
   */
  export type IngredientPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    inventory?: boolean | Ingredient$inventoryArgs<ExtArgs>
    purchase?: boolean | Ingredient$purchaseArgs<ExtArgs>
    recipeIngredients?: boolean | Ingredient$recipeIngredientsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | Ingredient$inventoryArgs<ExtArgs>
    purchase?: boolean | Ingredient$purchaseArgs<ExtArgs>
    recipeIngredients?: boolean | Ingredient$recipeIngredientsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      inventory: Prisma.$IngredientInventoryPayload<ExtArgs>[]
      purchase: Prisma.$IngredientPurchasePayload<ExtArgs>[]
      recipeIngredients: Prisma.$RecipeIngredientsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends Ingredient$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchase<T extends Ingredient$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$purchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipeIngredients<T extends Ingredient$recipeIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$recipeIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly description: FieldRef<"Ingredient", 'String'>
    readonly createdAt: FieldRef<"Ingredient", 'DateTime'>
    readonly createdBy: FieldRef<"Ingredient", 'String'>
    readonly updatedAt: FieldRef<"Ingredient", 'DateTime'>
    readonly updatedBy: FieldRef<"Ingredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.inventory
   */
  export type Ingredient$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    where?: IngredientInventoryWhereInput
    orderBy?: IngredientInventoryOrderByWithRelationInput | IngredientInventoryOrderByWithRelationInput[]
    cursor?: IngredientInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientInventoryScalarFieldEnum | IngredientInventoryScalarFieldEnum[]
  }

  /**
   * Ingredient.purchase
   */
  export type Ingredient$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientPurchase
     */
    select?: IngredientPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientPurchase
     */
    omit?: IngredientPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientPurchaseInclude<ExtArgs> | null
    where?: IngredientPurchaseWhereInput
    orderBy?: IngredientPurchaseOrderByWithRelationInput | IngredientPurchaseOrderByWithRelationInput[]
    cursor?: IngredientPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientPurchaseScalarFieldEnum | IngredientPurchaseScalarFieldEnum[]
  }

  /**
   * Ingredient.recipeIngredients
   */
  export type Ingredient$recipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    where?: RecipeIngredientsWhereInput
    orderBy?: RecipeIngredientsOrderByWithRelationInput | RecipeIngredientsOrderByWithRelationInput[]
    cursor?: RecipeIngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientsScalarFieldEnum | RecipeIngredientsScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model ProductBatch
   */

  export type AggregateProductBatch = {
    _count: ProductBatchCountAggregateOutputType | null
    _avg: ProductBatchAvgAggregateOutputType | null
    _sum: ProductBatchSumAggregateOutputType | null
    _min: ProductBatchMinAggregateOutputType | null
    _max: ProductBatchMaxAggregateOutputType | null
  }

  export type ProductBatchAvgAggregateOutputType = {
    quantity: number | null
    cost: number | null
  }

  export type ProductBatchSumAggregateOutputType = {
    quantity: number | null
    cost: number | null
  }

  export type ProductBatchMinAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    cost: number | null
    purchaseDate: Date | null
    expiryDate: Date | null
    productId: string | null
    batchType: $Enums.BatchType | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProductBatchMaxAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    cost: number | null
    purchaseDate: Date | null
    expiryDate: Date | null
    productId: string | null
    batchType: $Enums.BatchType | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProductBatchCountAggregateOutputType = {
    id: number
    description: number
    quantity: number
    cost: number
    purchaseDate: number
    expiryDate: number
    productId: number
    batchType: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type ProductBatchAvgAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type ProductBatchSumAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type ProductBatchMinAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    purchaseDate?: true
    expiryDate?: true
    productId?: true
    batchType?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProductBatchMaxAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    purchaseDate?: true
    expiryDate?: true
    productId?: true
    batchType?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProductBatchCountAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    purchaseDate?: true
    expiryDate?: true
    productId?: true
    batchType?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ProductBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBatch to aggregate.
     */
    where?: ProductBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBatches to fetch.
     */
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductBatches
    **/
    _count?: true | ProductBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductBatchMaxAggregateInputType
  }

  export type GetProductBatchAggregateType<T extends ProductBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateProductBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductBatch[P]>
      : GetScalarType<T[P], AggregateProductBatch[P]>
  }




  export type ProductBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBatchWhereInput
    orderBy?: ProductBatchOrderByWithAggregationInput | ProductBatchOrderByWithAggregationInput[]
    by: ProductBatchScalarFieldEnum[] | ProductBatchScalarFieldEnum
    having?: ProductBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductBatchCountAggregateInputType | true
    _avg?: ProductBatchAvgAggregateInputType
    _sum?: ProductBatchSumAggregateInputType
    _min?: ProductBatchMinAggregateInputType
    _max?: ProductBatchMaxAggregateInputType
  }

  export type ProductBatchGroupByOutputType = {
    id: string
    description: string
    quantity: number
    cost: number
    purchaseDate: Date
    expiryDate: Date
    productId: string
    batchType: $Enums.BatchType
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: ProductBatchCountAggregateOutputType | null
    _avg: ProductBatchAvgAggregateOutputType | null
    _sum: ProductBatchSumAggregateOutputType | null
    _min: ProductBatchMinAggregateOutputType | null
    _max: ProductBatchMaxAggregateOutputType | null
  }

  type GetProductBatchGroupByPayload<T extends ProductBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductBatchGroupByOutputType[P]>
            : GetScalarType<T[P], ProductBatchGroupByOutputType[P]>
        }
      >
    >


  export type ProductBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    purchaseDate?: boolean
    expiryDate?: boolean
    productId?: boolean
    batchType?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    inventory?: boolean | ProductBatch$inventoryArgs<ExtArgs>
    _count?: boolean | ProductBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBatch"]>

  export type ProductBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    purchaseDate?: boolean
    expiryDate?: boolean
    productId?: boolean
    batchType?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBatch"]>

  export type ProductBatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    purchaseDate?: boolean
    expiryDate?: boolean
    productId?: boolean
    batchType?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBatch"]>

  export type ProductBatchSelectScalar = {
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    purchaseDate?: boolean
    expiryDate?: boolean
    productId?: boolean
    batchType?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type ProductBatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "quantity" | "cost" | "purchaseDate" | "expiryDate" | "productId" | "batchType" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["productBatch"]>
  export type ProductBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    inventory?: boolean | ProductBatch$inventoryArgs<ExtArgs>
    _count?: boolean | ProductBatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductBatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductBatch"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      inventory: Prisma.$ProductInventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      quantity: number
      cost: number
      purchaseDate: Date
      expiryDate: Date
      productId: string
      batchType: $Enums.BatchType
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["productBatch"]>
    composites: {}
  }

  type ProductBatchGetPayload<S extends boolean | null | undefined | ProductBatchDefaultArgs> = $Result.GetResult<Prisma.$ProductBatchPayload, S>

  type ProductBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductBatchCountAggregateInputType | true
    }

  export interface ProductBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductBatch'], meta: { name: 'ProductBatch' } }
    /**
     * Find zero or one ProductBatch that matches the filter.
     * @param {ProductBatchFindUniqueArgs} args - Arguments to find a ProductBatch
     * @example
     * // Get one ProductBatch
     * const productBatch = await prisma.productBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductBatchFindUniqueArgs>(args: SelectSubset<T, ProductBatchFindUniqueArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductBatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductBatchFindUniqueOrThrowArgs} args - Arguments to find a ProductBatch
     * @example
     * // Get one ProductBatch
     * const productBatch = await prisma.productBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchFindFirstArgs} args - Arguments to find a ProductBatch
     * @example
     * // Get one ProductBatch
     * const productBatch = await prisma.productBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductBatchFindFirstArgs>(args?: SelectSubset<T, ProductBatchFindFirstArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchFindFirstOrThrowArgs} args - Arguments to find a ProductBatch
     * @example
     * // Get one ProductBatch
     * const productBatch = await prisma.productBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductBatches
     * const productBatches = await prisma.productBatch.findMany()
     * 
     * // Get first 10 ProductBatches
     * const productBatches = await prisma.productBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productBatchWithIdOnly = await prisma.productBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductBatchFindManyArgs>(args?: SelectSubset<T, ProductBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductBatch.
     * @param {ProductBatchCreateArgs} args - Arguments to create a ProductBatch.
     * @example
     * // Create one ProductBatch
     * const ProductBatch = await prisma.productBatch.create({
     *   data: {
     *     // ... data to create a ProductBatch
     *   }
     * })
     * 
     */
    create<T extends ProductBatchCreateArgs>(args: SelectSubset<T, ProductBatchCreateArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductBatches.
     * @param {ProductBatchCreateManyArgs} args - Arguments to create many ProductBatches.
     * @example
     * // Create many ProductBatches
     * const productBatch = await prisma.productBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductBatchCreateManyArgs>(args?: SelectSubset<T, ProductBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductBatches and returns the data saved in the database.
     * @param {ProductBatchCreateManyAndReturnArgs} args - Arguments to create many ProductBatches.
     * @example
     * // Create many ProductBatches
     * const productBatch = await prisma.productBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductBatches and only return the `id`
     * const productBatchWithIdOnly = await prisma.productBatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductBatch.
     * @param {ProductBatchDeleteArgs} args - Arguments to delete one ProductBatch.
     * @example
     * // Delete one ProductBatch
     * const ProductBatch = await prisma.productBatch.delete({
     *   where: {
     *     // ... filter to delete one ProductBatch
     *   }
     * })
     * 
     */
    delete<T extends ProductBatchDeleteArgs>(args: SelectSubset<T, ProductBatchDeleteArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductBatch.
     * @param {ProductBatchUpdateArgs} args - Arguments to update one ProductBatch.
     * @example
     * // Update one ProductBatch
     * const productBatch = await prisma.productBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductBatchUpdateArgs>(args: SelectSubset<T, ProductBatchUpdateArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductBatches.
     * @param {ProductBatchDeleteManyArgs} args - Arguments to filter ProductBatches to delete.
     * @example
     * // Delete a few ProductBatches
     * const { count } = await prisma.productBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductBatchDeleteManyArgs>(args?: SelectSubset<T, ProductBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductBatches
     * const productBatch = await prisma.productBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductBatchUpdateManyArgs>(args: SelectSubset<T, ProductBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBatches and returns the data updated in the database.
     * @param {ProductBatchUpdateManyAndReturnArgs} args - Arguments to update many ProductBatches.
     * @example
     * // Update many ProductBatches
     * const productBatch = await prisma.productBatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductBatches and only return the `id`
     * const productBatchWithIdOnly = await prisma.productBatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductBatchUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductBatch.
     * @param {ProductBatchUpsertArgs} args - Arguments to update or create a ProductBatch.
     * @example
     * // Update or create a ProductBatch
     * const productBatch = await prisma.productBatch.upsert({
     *   create: {
     *     // ... data to create a ProductBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductBatch we want to update
     *   }
     * })
     */
    upsert<T extends ProductBatchUpsertArgs>(args: SelectSubset<T, ProductBatchUpsertArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchCountArgs} args - Arguments to filter ProductBatches to count.
     * @example
     * // Count the number of ProductBatches
     * const count = await prisma.productBatch.count({
     *   where: {
     *     // ... the filter for the ProductBatches we want to count
     *   }
     * })
    **/
    count<T extends ProductBatchCountArgs>(
      args?: Subset<T, ProductBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductBatchAggregateArgs>(args: Subset<T, ProductBatchAggregateArgs>): Prisma.PrismaPromise<GetProductBatchAggregateType<T>>

    /**
     * Group by ProductBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchGroupByArgs} args - Group by arguments.
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
      T extends ProductBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductBatchGroupByArgs['orderBy'] }
        : { orderBy?: ProductBatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductBatch model
   */
  readonly fields: ProductBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventory<T extends ProductBatch$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, ProductBatch$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductBatch model
   */
  interface ProductBatchFieldRefs {
    readonly id: FieldRef<"ProductBatch", 'String'>
    readonly description: FieldRef<"ProductBatch", 'String'>
    readonly quantity: FieldRef<"ProductBatch", 'Float'>
    readonly cost: FieldRef<"ProductBatch", 'Float'>
    readonly purchaseDate: FieldRef<"ProductBatch", 'DateTime'>
    readonly expiryDate: FieldRef<"ProductBatch", 'DateTime'>
    readonly productId: FieldRef<"ProductBatch", 'String'>
    readonly batchType: FieldRef<"ProductBatch", 'BatchType'>
    readonly createdAt: FieldRef<"ProductBatch", 'DateTime'>
    readonly createdBy: FieldRef<"ProductBatch", 'String'>
    readonly updatedAt: FieldRef<"ProductBatch", 'DateTime'>
    readonly updatedBy: FieldRef<"ProductBatch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductBatch findUnique
   */
  export type ProductBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatch to fetch.
     */
    where: ProductBatchWhereUniqueInput
  }

  /**
   * ProductBatch findUniqueOrThrow
   */
  export type ProductBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatch to fetch.
     */
    where: ProductBatchWhereUniqueInput
  }

  /**
   * ProductBatch findFirst
   */
  export type ProductBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatch to fetch.
     */
    where?: ProductBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBatches to fetch.
     */
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBatches.
     */
    cursor?: ProductBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBatches.
     */
    distinct?: ProductBatchScalarFieldEnum | ProductBatchScalarFieldEnum[]
  }

  /**
   * ProductBatch findFirstOrThrow
   */
  export type ProductBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatch to fetch.
     */
    where?: ProductBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBatches to fetch.
     */
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBatches.
     */
    cursor?: ProductBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBatches.
     */
    distinct?: ProductBatchScalarFieldEnum | ProductBatchScalarFieldEnum[]
  }

  /**
   * ProductBatch findMany
   */
  export type ProductBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatches to fetch.
     */
    where?: ProductBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBatches to fetch.
     */
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductBatches.
     */
    cursor?: ProductBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBatches.
     */
    skip?: number
    distinct?: ProductBatchScalarFieldEnum | ProductBatchScalarFieldEnum[]
  }

  /**
   * ProductBatch create
   */
  export type ProductBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductBatch.
     */
    data: XOR<ProductBatchCreateInput, ProductBatchUncheckedCreateInput>
  }

  /**
   * ProductBatch createMany
   */
  export type ProductBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductBatches.
     */
    data: ProductBatchCreateManyInput | ProductBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductBatch createManyAndReturn
   */
  export type ProductBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * The data used to create many ProductBatches.
     */
    data: ProductBatchCreateManyInput | ProductBatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductBatch update
   */
  export type ProductBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductBatch.
     */
    data: XOR<ProductBatchUpdateInput, ProductBatchUncheckedUpdateInput>
    /**
     * Choose, which ProductBatch to update.
     */
    where: ProductBatchWhereUniqueInput
  }

  /**
   * ProductBatch updateMany
   */
  export type ProductBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductBatches.
     */
    data: XOR<ProductBatchUpdateManyMutationInput, ProductBatchUncheckedUpdateManyInput>
    /**
     * Filter which ProductBatches to update
     */
    where?: ProductBatchWhereInput
    /**
     * Limit how many ProductBatches to update.
     */
    limit?: number
  }

  /**
   * ProductBatch updateManyAndReturn
   */
  export type ProductBatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * The data used to update ProductBatches.
     */
    data: XOR<ProductBatchUpdateManyMutationInput, ProductBatchUncheckedUpdateManyInput>
    /**
     * Filter which ProductBatches to update
     */
    where?: ProductBatchWhereInput
    /**
     * Limit how many ProductBatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductBatch upsert
   */
  export type ProductBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductBatch to update in case it exists.
     */
    where: ProductBatchWhereUniqueInput
    /**
     * In case the ProductBatch found by the `where` argument doesn't exist, create a new ProductBatch with this data.
     */
    create: XOR<ProductBatchCreateInput, ProductBatchUncheckedCreateInput>
    /**
     * In case the ProductBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductBatchUpdateInput, ProductBatchUncheckedUpdateInput>
  }

  /**
   * ProductBatch delete
   */
  export type ProductBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter which ProductBatch to delete.
     */
    where: ProductBatchWhereUniqueInput
  }

  /**
   * ProductBatch deleteMany
   */
  export type ProductBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBatches to delete
     */
    where?: ProductBatchWhereInput
    /**
     * Limit how many ProductBatches to delete.
     */
    limit?: number
  }

  /**
   * ProductBatch.inventory
   */
  export type ProductBatch$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    where?: ProductInventoryWhereInput
    orderBy?: ProductInventoryOrderByWithRelationInput | ProductInventoryOrderByWithRelationInput[]
    cursor?: ProductInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductInventoryScalarFieldEnum | ProductInventoryScalarFieldEnum[]
  }

  /**
   * ProductBatch without action
   */
  export type ProductBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
  }


  /**
   * Model ProductInventory
   */

  export type AggregateProductInventory = {
    _count: ProductInventoryCountAggregateOutputType | null
    _avg: ProductInventoryAvgAggregateOutputType | null
    _sum: ProductInventorySumAggregateOutputType | null
    _min: ProductInventoryMinAggregateOutputType | null
    _max: ProductInventoryMaxAggregateOutputType | null
  }

  export type ProductInventoryAvgAggregateOutputType = {
    quantity: number | null
    cost: number | null
  }

  export type ProductInventorySumAggregateOutputType = {
    quantity: number | null
    cost: number | null
  }

  export type ProductInventoryMinAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    cost: number | null
    isActive: boolean | null
    emptiedDate: Date | null
    productId: string | null
    shopId: string | null
    purchaseId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProductInventoryMaxAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    cost: number | null
    isActive: boolean | null
    emptiedDate: Date | null
    productId: string | null
    shopId: string | null
    purchaseId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProductInventoryCountAggregateOutputType = {
    id: number
    description: number
    quantity: number
    cost: number
    isActive: number
    emptiedDate: number
    productId: number
    shopId: number
    purchaseId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type ProductInventoryAvgAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type ProductInventorySumAggregateInputType = {
    quantity?: true
    cost?: true
  }

  export type ProductInventoryMinAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    isActive?: true
    emptiedDate?: true
    productId?: true
    shopId?: true
    purchaseId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProductInventoryMaxAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    isActive?: true
    emptiedDate?: true
    productId?: true
    shopId?: true
    purchaseId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProductInventoryCountAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    cost?: true
    isActive?: true
    emptiedDate?: true
    productId?: true
    shopId?: true
    purchaseId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ProductInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductInventory to aggregate.
     */
    where?: ProductInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInventories to fetch.
     */
    orderBy?: ProductInventoryOrderByWithRelationInput | ProductInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductInventories
    **/
    _count?: true | ProductInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductInventoryMaxAggregateInputType
  }

  export type GetProductInventoryAggregateType<T extends ProductInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductInventory[P]>
      : GetScalarType<T[P], AggregateProductInventory[P]>
  }




  export type ProductInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInventoryWhereInput
    orderBy?: ProductInventoryOrderByWithAggregationInput | ProductInventoryOrderByWithAggregationInput[]
    by: ProductInventoryScalarFieldEnum[] | ProductInventoryScalarFieldEnum
    having?: ProductInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductInventoryCountAggregateInputType | true
    _avg?: ProductInventoryAvgAggregateInputType
    _sum?: ProductInventorySumAggregateInputType
    _min?: ProductInventoryMinAggregateInputType
    _max?: ProductInventoryMaxAggregateInputType
  }

  export type ProductInventoryGroupByOutputType = {
    id: string
    description: string
    quantity: number
    cost: number
    isActive: boolean
    emptiedDate: Date
    productId: string
    shopId: string
    purchaseId: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: ProductInventoryCountAggregateOutputType | null
    _avg: ProductInventoryAvgAggregateOutputType | null
    _sum: ProductInventorySumAggregateOutputType | null
    _min: ProductInventoryMinAggregateOutputType | null
    _max: ProductInventoryMaxAggregateOutputType | null
  }

  type GetProductInventoryGroupByPayload<T extends ProductInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductInventoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    isActive?: boolean
    emptiedDate?: boolean
    productId?: boolean
    shopId?: boolean
    purchaseId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    purchase?: boolean | ProductBatchDefaultArgs<ExtArgs>
    sale?: boolean | ProductInventory$saleArgs<ExtArgs>
    _count?: boolean | ProductInventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productInventory"]>

  export type ProductInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    isActive?: boolean
    emptiedDate?: boolean
    productId?: boolean
    shopId?: boolean
    purchaseId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    purchase?: boolean | ProductBatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productInventory"]>

  export type ProductInventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    isActive?: boolean
    emptiedDate?: boolean
    productId?: boolean
    shopId?: boolean
    purchaseId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    purchase?: boolean | ProductBatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productInventory"]>

  export type ProductInventorySelectScalar = {
    id?: boolean
    description?: boolean
    quantity?: boolean
    cost?: boolean
    isActive?: boolean
    emptiedDate?: boolean
    productId?: boolean
    shopId?: boolean
    purchaseId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type ProductInventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "quantity" | "cost" | "isActive" | "emptiedDate" | "productId" | "shopId" | "purchaseId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["productInventory"]>
  export type ProductInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    purchase?: boolean | ProductBatchDefaultArgs<ExtArgs>
    sale?: boolean | ProductInventory$saleArgs<ExtArgs>
    _count?: boolean | ProductInventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    purchase?: boolean | ProductBatchDefaultArgs<ExtArgs>
  }
  export type ProductInventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    purchase?: boolean | ProductBatchDefaultArgs<ExtArgs>
  }

  export type $ProductInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductInventory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
      purchase: Prisma.$ProductBatchPayload<ExtArgs>
      sale: Prisma.$ProductSalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      quantity: number
      cost: number
      isActive: boolean
      emptiedDate: Date
      productId: string
      shopId: string
      purchaseId: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["productInventory"]>
    composites: {}
  }

  type ProductInventoryGetPayload<S extends boolean | null | undefined | ProductInventoryDefaultArgs> = $Result.GetResult<Prisma.$ProductInventoryPayload, S>

  type ProductInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductInventoryCountAggregateInputType | true
    }

  export interface ProductInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductInventory'], meta: { name: 'ProductInventory' } }
    /**
     * Find zero or one ProductInventory that matches the filter.
     * @param {ProductInventoryFindUniqueArgs} args - Arguments to find a ProductInventory
     * @example
     * // Get one ProductInventory
     * const productInventory = await prisma.productInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductInventoryFindUniqueArgs>(args: SelectSubset<T, ProductInventoryFindUniqueArgs<ExtArgs>>): Prisma__ProductInventoryClient<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductInventoryFindUniqueOrThrowArgs} args - Arguments to find a ProductInventory
     * @example
     * // Get one ProductInventory
     * const productInventory = await prisma.productInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductInventoryClient<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInventoryFindFirstArgs} args - Arguments to find a ProductInventory
     * @example
     * // Get one ProductInventory
     * const productInventory = await prisma.productInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductInventoryFindFirstArgs>(args?: SelectSubset<T, ProductInventoryFindFirstArgs<ExtArgs>>): Prisma__ProductInventoryClient<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInventoryFindFirstOrThrowArgs} args - Arguments to find a ProductInventory
     * @example
     * // Get one ProductInventory
     * const productInventory = await prisma.productInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductInventoryClient<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductInventories
     * const productInventories = await prisma.productInventory.findMany()
     * 
     * // Get first 10 ProductInventories
     * const productInventories = await prisma.productInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productInventoryWithIdOnly = await prisma.productInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductInventoryFindManyArgs>(args?: SelectSubset<T, ProductInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductInventory.
     * @param {ProductInventoryCreateArgs} args - Arguments to create a ProductInventory.
     * @example
     * // Create one ProductInventory
     * const ProductInventory = await prisma.productInventory.create({
     *   data: {
     *     // ... data to create a ProductInventory
     *   }
     * })
     * 
     */
    create<T extends ProductInventoryCreateArgs>(args: SelectSubset<T, ProductInventoryCreateArgs<ExtArgs>>): Prisma__ProductInventoryClient<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductInventories.
     * @param {ProductInventoryCreateManyArgs} args - Arguments to create many ProductInventories.
     * @example
     * // Create many ProductInventories
     * const productInventory = await prisma.productInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductInventoryCreateManyArgs>(args?: SelectSubset<T, ProductInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductInventories and returns the data saved in the database.
     * @param {ProductInventoryCreateManyAndReturnArgs} args - Arguments to create many ProductInventories.
     * @example
     * // Create many ProductInventories
     * const productInventory = await prisma.productInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductInventories and only return the `id`
     * const productInventoryWithIdOnly = await prisma.productInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductInventory.
     * @param {ProductInventoryDeleteArgs} args - Arguments to delete one ProductInventory.
     * @example
     * // Delete one ProductInventory
     * const ProductInventory = await prisma.productInventory.delete({
     *   where: {
     *     // ... filter to delete one ProductInventory
     *   }
     * })
     * 
     */
    delete<T extends ProductInventoryDeleteArgs>(args: SelectSubset<T, ProductInventoryDeleteArgs<ExtArgs>>): Prisma__ProductInventoryClient<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductInventory.
     * @param {ProductInventoryUpdateArgs} args - Arguments to update one ProductInventory.
     * @example
     * // Update one ProductInventory
     * const productInventory = await prisma.productInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductInventoryUpdateArgs>(args: SelectSubset<T, ProductInventoryUpdateArgs<ExtArgs>>): Prisma__ProductInventoryClient<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductInventories.
     * @param {ProductInventoryDeleteManyArgs} args - Arguments to filter ProductInventories to delete.
     * @example
     * // Delete a few ProductInventories
     * const { count } = await prisma.productInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductInventoryDeleteManyArgs>(args?: SelectSubset<T, ProductInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductInventories
     * const productInventory = await prisma.productInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductInventoryUpdateManyArgs>(args: SelectSubset<T, ProductInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductInventories and returns the data updated in the database.
     * @param {ProductInventoryUpdateManyAndReturnArgs} args - Arguments to update many ProductInventories.
     * @example
     * // Update many ProductInventories
     * const productInventory = await prisma.productInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductInventories and only return the `id`
     * const productInventoryWithIdOnly = await prisma.productInventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductInventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductInventory.
     * @param {ProductInventoryUpsertArgs} args - Arguments to update or create a ProductInventory.
     * @example
     * // Update or create a ProductInventory
     * const productInventory = await prisma.productInventory.upsert({
     *   create: {
     *     // ... data to create a ProductInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductInventory we want to update
     *   }
     * })
     */
    upsert<T extends ProductInventoryUpsertArgs>(args: SelectSubset<T, ProductInventoryUpsertArgs<ExtArgs>>): Prisma__ProductInventoryClient<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInventoryCountArgs} args - Arguments to filter ProductInventories to count.
     * @example
     * // Count the number of ProductInventories
     * const count = await prisma.productInventory.count({
     *   where: {
     *     // ... the filter for the ProductInventories we want to count
     *   }
     * })
    **/
    count<T extends ProductInventoryCountArgs>(
      args?: Subset<T, ProductInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductInventoryAggregateArgs>(args: Subset<T, ProductInventoryAggregateArgs>): Prisma.PrismaPromise<GetProductInventoryAggregateType<T>>

    /**
     * Group by ProductInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInventoryGroupByArgs} args - Group by arguments.
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
      T extends ProductInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductInventoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductInventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductInventory model
   */
  readonly fields: ProductInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchase<T extends ProductBatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductBatchDefaultArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sale<T extends ProductInventory$saleArgs<ExtArgs> = {}>(args?: Subset<T, ProductInventory$saleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductInventory model
   */
  interface ProductInventoryFieldRefs {
    readonly id: FieldRef<"ProductInventory", 'String'>
    readonly description: FieldRef<"ProductInventory", 'String'>
    readonly quantity: FieldRef<"ProductInventory", 'Float'>
    readonly cost: FieldRef<"ProductInventory", 'Float'>
    readonly isActive: FieldRef<"ProductInventory", 'Boolean'>
    readonly emptiedDate: FieldRef<"ProductInventory", 'DateTime'>
    readonly productId: FieldRef<"ProductInventory", 'String'>
    readonly shopId: FieldRef<"ProductInventory", 'String'>
    readonly purchaseId: FieldRef<"ProductInventory", 'String'>
    readonly createdAt: FieldRef<"ProductInventory", 'DateTime'>
    readonly createdBy: FieldRef<"ProductInventory", 'String'>
    readonly updatedAt: FieldRef<"ProductInventory", 'DateTime'>
    readonly updatedBy: FieldRef<"ProductInventory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductInventory findUnique
   */
  export type ProductInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductInventory to fetch.
     */
    where: ProductInventoryWhereUniqueInput
  }

  /**
   * ProductInventory findUniqueOrThrow
   */
  export type ProductInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductInventory to fetch.
     */
    where: ProductInventoryWhereUniqueInput
  }

  /**
   * ProductInventory findFirst
   */
  export type ProductInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductInventory to fetch.
     */
    where?: ProductInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInventories to fetch.
     */
    orderBy?: ProductInventoryOrderByWithRelationInput | ProductInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductInventories.
     */
    cursor?: ProductInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductInventories.
     */
    distinct?: ProductInventoryScalarFieldEnum | ProductInventoryScalarFieldEnum[]
  }

  /**
   * ProductInventory findFirstOrThrow
   */
  export type ProductInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductInventory to fetch.
     */
    where?: ProductInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInventories to fetch.
     */
    orderBy?: ProductInventoryOrderByWithRelationInput | ProductInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductInventories.
     */
    cursor?: ProductInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductInventories.
     */
    distinct?: ProductInventoryScalarFieldEnum | ProductInventoryScalarFieldEnum[]
  }

  /**
   * ProductInventory findMany
   */
  export type ProductInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductInventories to fetch.
     */
    where?: ProductInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInventories to fetch.
     */
    orderBy?: ProductInventoryOrderByWithRelationInput | ProductInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductInventories.
     */
    cursor?: ProductInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInventories.
     */
    skip?: number
    distinct?: ProductInventoryScalarFieldEnum | ProductInventoryScalarFieldEnum[]
  }

  /**
   * ProductInventory create
   */
  export type ProductInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductInventory.
     */
    data: XOR<ProductInventoryCreateInput, ProductInventoryUncheckedCreateInput>
  }

  /**
   * ProductInventory createMany
   */
  export type ProductInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductInventories.
     */
    data: ProductInventoryCreateManyInput | ProductInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductInventory createManyAndReturn
   */
  export type ProductInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductInventories.
     */
    data: ProductInventoryCreateManyInput | ProductInventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductInventory update
   */
  export type ProductInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductInventory.
     */
    data: XOR<ProductInventoryUpdateInput, ProductInventoryUncheckedUpdateInput>
    /**
     * Choose, which ProductInventory to update.
     */
    where: ProductInventoryWhereUniqueInput
  }

  /**
   * ProductInventory updateMany
   */
  export type ProductInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductInventories.
     */
    data: XOR<ProductInventoryUpdateManyMutationInput, ProductInventoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductInventories to update
     */
    where?: ProductInventoryWhereInput
    /**
     * Limit how many ProductInventories to update.
     */
    limit?: number
  }

  /**
   * ProductInventory updateManyAndReturn
   */
  export type ProductInventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * The data used to update ProductInventories.
     */
    data: XOR<ProductInventoryUpdateManyMutationInput, ProductInventoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductInventories to update
     */
    where?: ProductInventoryWhereInput
    /**
     * Limit how many ProductInventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductInventory upsert
   */
  export type ProductInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductInventory to update in case it exists.
     */
    where: ProductInventoryWhereUniqueInput
    /**
     * In case the ProductInventory found by the `where` argument doesn't exist, create a new ProductInventory with this data.
     */
    create: XOR<ProductInventoryCreateInput, ProductInventoryUncheckedCreateInput>
    /**
     * In case the ProductInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductInventoryUpdateInput, ProductInventoryUncheckedUpdateInput>
  }

  /**
   * ProductInventory delete
   */
  export type ProductInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    /**
     * Filter which ProductInventory to delete.
     */
    where: ProductInventoryWhereUniqueInput
  }

  /**
   * ProductInventory deleteMany
   */
  export type ProductInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductInventories to delete
     */
    where?: ProductInventoryWhereInput
    /**
     * Limit how many ProductInventories to delete.
     */
    limit?: number
  }

  /**
   * ProductInventory.sale
   */
  export type ProductInventory$saleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    where?: ProductSaleWhereInput
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    cursor?: ProductSaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * ProductInventory without action
   */
  export type ProductInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductSale
   */

  export type AggregateProductSale = {
    _count: ProductSaleCountAggregateOutputType | null
    _avg: ProductSaleAvgAggregateOutputType | null
    _sum: ProductSaleSumAggregateOutputType | null
    _min: ProductSaleMinAggregateOutputType | null
    _max: ProductSaleMaxAggregateOutputType | null
  }

  export type ProductSaleAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type ProductSaleSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type ProductSaleMinAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    price: number | null
    saleDate: Date | null
    productId: string | null
    inventoryId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProductSaleMaxAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: number | null
    price: number | null
    saleDate: Date | null
    productId: string | null
    inventoryId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProductSaleCountAggregateOutputType = {
    id: number
    description: number
    quantity: number
    price: number
    saleDate: number
    productId: number
    inventoryId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type ProductSaleAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type ProductSaleSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type ProductSaleMinAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    price?: true
    saleDate?: true
    productId?: true
    inventoryId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProductSaleMaxAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    price?: true
    saleDate?: true
    productId?: true
    inventoryId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProductSaleCountAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    price?: true
    saleDate?: true
    productId?: true
    inventoryId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ProductSaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSale to aggregate.
     */
    where?: ProductSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSales to fetch.
     */
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSales
    **/
    _count?: true | ProductSaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSaleMaxAggregateInputType
  }

  export type GetProductSaleAggregateType<T extends ProductSaleAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSale[P]>
      : GetScalarType<T[P], AggregateProductSale[P]>
  }




  export type ProductSaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSaleWhereInput
    orderBy?: ProductSaleOrderByWithAggregationInput | ProductSaleOrderByWithAggregationInput[]
    by: ProductSaleScalarFieldEnum[] | ProductSaleScalarFieldEnum
    having?: ProductSaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSaleCountAggregateInputType | true
    _avg?: ProductSaleAvgAggregateInputType
    _sum?: ProductSaleSumAggregateInputType
    _min?: ProductSaleMinAggregateInputType
    _max?: ProductSaleMaxAggregateInputType
  }

  export type ProductSaleGroupByOutputType = {
    id: string
    description: string
    quantity: number
    price: number
    saleDate: Date
    productId: string
    inventoryId: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: ProductSaleCountAggregateOutputType | null
    _avg: ProductSaleAvgAggregateOutputType | null
    _sum: ProductSaleSumAggregateOutputType | null
    _min: ProductSaleMinAggregateOutputType | null
    _max: ProductSaleMaxAggregateOutputType | null
  }

  type GetProductSaleGroupByPayload<T extends ProductSaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSaleGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSaleGroupByOutputType[P]>
        }
      >
    >


  export type ProductSaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    price?: boolean
    saleDate?: boolean
    productId?: boolean
    inventoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    inventory?: boolean | ProductInventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSale"]>

  export type ProductSaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    price?: boolean
    saleDate?: boolean
    productId?: boolean
    inventoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    inventory?: boolean | ProductInventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSale"]>

  export type ProductSaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    price?: boolean
    saleDate?: boolean
    productId?: boolean
    inventoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    inventory?: boolean | ProductInventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSale"]>

  export type ProductSaleSelectScalar = {
    id?: boolean
    description?: boolean
    quantity?: boolean
    price?: boolean
    saleDate?: boolean
    productId?: boolean
    inventoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type ProductSaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "quantity" | "price" | "saleDate" | "productId" | "inventoryId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["productSale"]>
  export type ProductSaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    inventory?: boolean | ProductInventoryDefaultArgs<ExtArgs>
  }
  export type ProductSaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    inventory?: boolean | ProductInventoryDefaultArgs<ExtArgs>
  }
  export type ProductSaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    inventory?: boolean | ProductInventoryDefaultArgs<ExtArgs>
  }

  export type $ProductSalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSale"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      inventory: Prisma.$ProductInventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      quantity: number
      price: number
      saleDate: Date
      productId: string
      inventoryId: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["productSale"]>
    composites: {}
  }

  type ProductSaleGetPayload<S extends boolean | null | undefined | ProductSaleDefaultArgs> = $Result.GetResult<Prisma.$ProductSalePayload, S>

  type ProductSaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSaleCountAggregateInputType | true
    }

  export interface ProductSaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSale'], meta: { name: 'ProductSale' } }
    /**
     * Find zero or one ProductSale that matches the filter.
     * @param {ProductSaleFindUniqueArgs} args - Arguments to find a ProductSale
     * @example
     * // Get one ProductSale
     * const productSale = await prisma.productSale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSaleFindUniqueArgs>(args: SelectSubset<T, ProductSaleFindUniqueArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSaleFindUniqueOrThrowArgs} args - Arguments to find a ProductSale
     * @example
     * // Get one ProductSale
     * const productSale = await prisma.productSale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSaleFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleFindFirstArgs} args - Arguments to find a ProductSale
     * @example
     * // Get one ProductSale
     * const productSale = await prisma.productSale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSaleFindFirstArgs>(args?: SelectSubset<T, ProductSaleFindFirstArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleFindFirstOrThrowArgs} args - Arguments to find a ProductSale
     * @example
     * // Get one ProductSale
     * const productSale = await prisma.productSale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSaleFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSales
     * const productSales = await prisma.productSale.findMany()
     * 
     * // Get first 10 ProductSales
     * const productSales = await prisma.productSale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSaleWithIdOnly = await prisma.productSale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSaleFindManyArgs>(args?: SelectSubset<T, ProductSaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSale.
     * @param {ProductSaleCreateArgs} args - Arguments to create a ProductSale.
     * @example
     * // Create one ProductSale
     * const ProductSale = await prisma.productSale.create({
     *   data: {
     *     // ... data to create a ProductSale
     *   }
     * })
     * 
     */
    create<T extends ProductSaleCreateArgs>(args: SelectSubset<T, ProductSaleCreateArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSales.
     * @param {ProductSaleCreateManyArgs} args - Arguments to create many ProductSales.
     * @example
     * // Create many ProductSales
     * const productSale = await prisma.productSale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSaleCreateManyArgs>(args?: SelectSubset<T, ProductSaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSales and returns the data saved in the database.
     * @param {ProductSaleCreateManyAndReturnArgs} args - Arguments to create many ProductSales.
     * @example
     * // Create many ProductSales
     * const productSale = await prisma.productSale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSales and only return the `id`
     * const productSaleWithIdOnly = await prisma.productSale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSaleCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSale.
     * @param {ProductSaleDeleteArgs} args - Arguments to delete one ProductSale.
     * @example
     * // Delete one ProductSale
     * const ProductSale = await prisma.productSale.delete({
     *   where: {
     *     // ... filter to delete one ProductSale
     *   }
     * })
     * 
     */
    delete<T extends ProductSaleDeleteArgs>(args: SelectSubset<T, ProductSaleDeleteArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSale.
     * @param {ProductSaleUpdateArgs} args - Arguments to update one ProductSale.
     * @example
     * // Update one ProductSale
     * const productSale = await prisma.productSale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSaleUpdateArgs>(args: SelectSubset<T, ProductSaleUpdateArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSales.
     * @param {ProductSaleDeleteManyArgs} args - Arguments to filter ProductSales to delete.
     * @example
     * // Delete a few ProductSales
     * const { count } = await prisma.productSale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSaleDeleteManyArgs>(args?: SelectSubset<T, ProductSaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSales
     * const productSale = await prisma.productSale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSaleUpdateManyArgs>(args: SelectSubset<T, ProductSaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSales and returns the data updated in the database.
     * @param {ProductSaleUpdateManyAndReturnArgs} args - Arguments to update many ProductSales.
     * @example
     * // Update many ProductSales
     * const productSale = await prisma.productSale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSales and only return the `id`
     * const productSaleWithIdOnly = await prisma.productSale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductSaleUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSale.
     * @param {ProductSaleUpsertArgs} args - Arguments to update or create a ProductSale.
     * @example
     * // Update or create a ProductSale
     * const productSale = await prisma.productSale.upsert({
     *   create: {
     *     // ... data to create a ProductSale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSale we want to update
     *   }
     * })
     */
    upsert<T extends ProductSaleUpsertArgs>(args: SelectSubset<T, ProductSaleUpsertArgs<ExtArgs>>): Prisma__ProductSaleClient<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleCountArgs} args - Arguments to filter ProductSales to count.
     * @example
     * // Count the number of ProductSales
     * const count = await prisma.productSale.count({
     *   where: {
     *     // ... the filter for the ProductSales we want to count
     *   }
     * })
    **/
    count<T extends ProductSaleCountArgs>(
      args?: Subset<T, ProductSaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSaleAggregateArgs>(args: Subset<T, ProductSaleAggregateArgs>): Prisma.PrismaPromise<GetProductSaleAggregateType<T>>

    /**
     * Group by ProductSale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSaleGroupByArgs} args - Group by arguments.
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
      T extends ProductSaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSaleGroupByArgs['orderBy'] }
        : { orderBy?: ProductSaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductSaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSale model
   */
  readonly fields: ProductSaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventory<T extends ProductInventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductInventoryDefaultArgs<ExtArgs>>): Prisma__ProductInventoryClient<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductSale model
   */
  interface ProductSaleFieldRefs {
    readonly id: FieldRef<"ProductSale", 'String'>
    readonly description: FieldRef<"ProductSale", 'String'>
    readonly quantity: FieldRef<"ProductSale", 'Float'>
    readonly price: FieldRef<"ProductSale", 'Float'>
    readonly saleDate: FieldRef<"ProductSale", 'DateTime'>
    readonly productId: FieldRef<"ProductSale", 'String'>
    readonly inventoryId: FieldRef<"ProductSale", 'String'>
    readonly createdAt: FieldRef<"ProductSale", 'DateTime'>
    readonly createdBy: FieldRef<"ProductSale", 'String'>
    readonly updatedAt: FieldRef<"ProductSale", 'DateTime'>
    readonly updatedBy: FieldRef<"ProductSale", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductSale findUnique
   */
  export type ProductSaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSale to fetch.
     */
    where: ProductSaleWhereUniqueInput
  }

  /**
   * ProductSale findUniqueOrThrow
   */
  export type ProductSaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSale to fetch.
     */
    where: ProductSaleWhereUniqueInput
  }

  /**
   * ProductSale findFirst
   */
  export type ProductSaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSale to fetch.
     */
    where?: ProductSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSales to fetch.
     */
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSales.
     */
    cursor?: ProductSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSales.
     */
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * ProductSale findFirstOrThrow
   */
  export type ProductSaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSale to fetch.
     */
    where?: ProductSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSales to fetch.
     */
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSales.
     */
    cursor?: ProductSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSales.
     */
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * ProductSale findMany
   */
  export type ProductSaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter, which ProductSales to fetch.
     */
    where?: ProductSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSales to fetch.
     */
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSales.
     */
    cursor?: ProductSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSales.
     */
    skip?: number
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * ProductSale create
   */
  export type ProductSaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSale.
     */
    data: XOR<ProductSaleCreateInput, ProductSaleUncheckedCreateInput>
  }

  /**
   * ProductSale createMany
   */
  export type ProductSaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSales.
     */
    data: ProductSaleCreateManyInput | ProductSaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSale createManyAndReturn
   */
  export type ProductSaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSales.
     */
    data: ProductSaleCreateManyInput | ProductSaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSale update
   */
  export type ProductSaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSale.
     */
    data: XOR<ProductSaleUpdateInput, ProductSaleUncheckedUpdateInput>
    /**
     * Choose, which ProductSale to update.
     */
    where: ProductSaleWhereUniqueInput
  }

  /**
   * ProductSale updateMany
   */
  export type ProductSaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSales.
     */
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyInput>
    /**
     * Filter which ProductSales to update
     */
    where?: ProductSaleWhereInput
    /**
     * Limit how many ProductSales to update.
     */
    limit?: number
  }

  /**
   * ProductSale updateManyAndReturn
   */
  export type ProductSaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * The data used to update ProductSales.
     */
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyInput>
    /**
     * Filter which ProductSales to update
     */
    where?: ProductSaleWhereInput
    /**
     * Limit how many ProductSales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSale upsert
   */
  export type ProductSaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSale to update in case it exists.
     */
    where: ProductSaleWhereUniqueInput
    /**
     * In case the ProductSale found by the `where` argument doesn't exist, create a new ProductSale with this data.
     */
    create: XOR<ProductSaleCreateInput, ProductSaleUncheckedCreateInput>
    /**
     * In case the ProductSale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSaleUpdateInput, ProductSaleUncheckedUpdateInput>
  }

  /**
   * ProductSale delete
   */
  export type ProductSaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    /**
     * Filter which ProductSale to delete.
     */
    where: ProductSaleWhereUniqueInput
  }

  /**
   * ProductSale deleteMany
   */
  export type ProductSaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSales to delete
     */
    where?: ProductSaleWhereInput
    /**
     * Limit how many ProductSales to delete.
     */
    limit?: number
  }

  /**
   * ProductSale without action
   */
  export type ProductSaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    recipes?: boolean | Product$recipesArgs<ExtArgs>
    sale?: boolean | Product$saleArgs<ExtArgs>
    inventory?: boolean | Product$inventoryArgs<ExtArgs>
    purchase?: boolean | Product$purchaseArgs<ExtArgs>
    recipeIngredients?: boolean | Product$recipeIngredientsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Product$recipesArgs<ExtArgs>
    sale?: boolean | Product$saleArgs<ExtArgs>
    inventory?: boolean | Product$inventoryArgs<ExtArgs>
    purchase?: boolean | Product$purchaseArgs<ExtArgs>
    recipeIngredients?: boolean | Product$recipeIngredientsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      recipes: Prisma.$RecipePayload<ExtArgs>[]
      sale: Prisma.$ProductSalePayload<ExtArgs>[]
      inventory: Prisma.$ProductInventoryPayload<ExtArgs>[]
      purchase: Prisma.$ProductBatchPayload<ExtArgs>[]
      recipeIngredients: Prisma.$RecipeIngredientsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Product$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Product$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sale<T extends Product$saleArgs<ExtArgs> = {}>(args?: Subset<T, Product$saleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Product$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchase<T extends Product$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, Product$purchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipeIngredients<T extends Product$recipeIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Product$recipeIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly createdBy: FieldRef<"Product", 'String'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly updatedBy: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.recipes
   */
  export type Product$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Product.sale
   */
  export type Product$saleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSale
     */
    select?: ProductSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSale
     */
    omit?: ProductSaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSaleInclude<ExtArgs> | null
    where?: ProductSaleWhereInput
    orderBy?: ProductSaleOrderByWithRelationInput | ProductSaleOrderByWithRelationInput[]
    cursor?: ProductSaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSaleScalarFieldEnum | ProductSaleScalarFieldEnum[]
  }

  /**
   * Product.inventory
   */
  export type Product$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    where?: ProductInventoryWhereInput
    orderBy?: ProductInventoryOrderByWithRelationInput | ProductInventoryOrderByWithRelationInput[]
    cursor?: ProductInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductInventoryScalarFieldEnum | ProductInventoryScalarFieldEnum[]
  }

  /**
   * Product.purchase
   */
  export type Product$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    where?: ProductBatchWhereInput
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    cursor?: ProductBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductBatchScalarFieldEnum | ProductBatchScalarFieldEnum[]
  }

  /**
   * Product.recipeIngredients
   */
  export type Product$recipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    where?: RecipeIngredientsWhereInput
    orderBy?: RecipeIngredientsOrderByWithRelationInput | RecipeIngredientsOrderByWithRelationInput[]
    cursor?: RecipeIngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientsScalarFieldEnum | RecipeIngredientsScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model RecipeIngredients
   */

  export type AggregateRecipeIngredients = {
    _count: RecipeIngredientsCountAggregateOutputType | null
    _avg: RecipeIngredientsAvgAggregateOutputType | null
    _sum: RecipeIngredientsSumAggregateOutputType | null
    _min: RecipeIngredientsMinAggregateOutputType | null
    _max: RecipeIngredientsMaxAggregateOutputType | null
  }

  export type RecipeIngredientsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type RecipeIngredientsSumAggregateOutputType = {
    quantity: number | null
  }

  export type RecipeIngredientsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    quantity: number | null
    recipeId: string | null
    ingredientId: string | null
    productId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type RecipeIngredientsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    quantity: number | null
    recipeId: string | null
    ingredientId: string | null
    productId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type RecipeIngredientsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    quantity: number
    recipeId: number
    ingredientId: number
    productId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type RecipeIngredientsAvgAggregateInputType = {
    quantity?: true
  }

  export type RecipeIngredientsSumAggregateInputType = {
    quantity?: true
  }

  export type RecipeIngredientsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quantity?: true
    recipeId?: true
    ingredientId?: true
    productId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type RecipeIngredientsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quantity?: true
    recipeId?: true
    ingredientId?: true
    productId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type RecipeIngredientsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quantity?: true
    recipeId?: true
    ingredientId?: true
    productId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type RecipeIngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredients to aggregate.
     */
    where?: RecipeIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientsOrderByWithRelationInput | RecipeIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeIngredients
    **/
    _count?: true | RecipeIngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeIngredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeIngredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeIngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeIngredientsMaxAggregateInputType
  }

  export type GetRecipeIngredientsAggregateType<T extends RecipeIngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeIngredients[P]>
      : GetScalarType<T[P], AggregateRecipeIngredients[P]>
  }




  export type RecipeIngredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientsWhereInput
    orderBy?: RecipeIngredientsOrderByWithAggregationInput | RecipeIngredientsOrderByWithAggregationInput[]
    by: RecipeIngredientsScalarFieldEnum[] | RecipeIngredientsScalarFieldEnum
    having?: RecipeIngredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeIngredientsCountAggregateInputType | true
    _avg?: RecipeIngredientsAvgAggregateInputType
    _sum?: RecipeIngredientsSumAggregateInputType
    _min?: RecipeIngredientsMinAggregateInputType
    _max?: RecipeIngredientsMaxAggregateInputType
  }

  export type RecipeIngredientsGroupByOutputType = {
    id: string
    name: string
    description: string
    quantity: number
    recipeId: string
    ingredientId: string
    productId: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: RecipeIngredientsCountAggregateOutputType | null
    _avg: RecipeIngredientsAvgAggregateOutputType | null
    _sum: RecipeIngredientsSumAggregateOutputType | null
    _min: RecipeIngredientsMinAggregateOutputType | null
    _max: RecipeIngredientsMaxAggregateOutputType | null
  }

  type GetRecipeIngredientsGroupByPayload<T extends RecipeIngredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeIngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeIngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeIngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeIngredientsGroupByOutputType[P]>
        }
      >
    >


  export type RecipeIngredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    productId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredients"]>

  export type RecipeIngredientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    productId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredients"]>

  export type RecipeIngredientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    productId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredients"]>

  export type RecipeIngredientsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    productId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type RecipeIngredientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "quantity" | "recipeId" | "ingredientId" | "productId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["recipeIngredients"]>
  export type RecipeIngredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $RecipeIngredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeIngredients"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      quantity: number
      recipeId: string
      ingredientId: string
      productId: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["recipeIngredients"]>
    composites: {}
  }

  type RecipeIngredientsGetPayload<S extends boolean | null | undefined | RecipeIngredientsDefaultArgs> = $Result.GetResult<Prisma.$RecipeIngredientsPayload, S>

  type RecipeIngredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeIngredientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeIngredientsCountAggregateInputType | true
    }

  export interface RecipeIngredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeIngredients'], meta: { name: 'RecipeIngredients' } }
    /**
     * Find zero or one RecipeIngredients that matches the filter.
     * @param {RecipeIngredientsFindUniqueArgs} args - Arguments to find a RecipeIngredients
     * @example
     * // Get one RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeIngredientsFindUniqueArgs>(args: SelectSubset<T, RecipeIngredientsFindUniqueArgs<ExtArgs>>): Prisma__RecipeIngredientsClient<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeIngredients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeIngredientsFindUniqueOrThrowArgs} args - Arguments to find a RecipeIngredients
     * @example
     * // Get one RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeIngredientsFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeIngredientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientsClient<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientsFindFirstArgs} args - Arguments to find a RecipeIngredients
     * @example
     * // Get one RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeIngredientsFindFirstArgs>(args?: SelectSubset<T, RecipeIngredientsFindFirstArgs<ExtArgs>>): Prisma__RecipeIngredientsClient<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeIngredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientsFindFirstOrThrowArgs} args - Arguments to find a RecipeIngredients
     * @example
     * // Get one RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeIngredientsFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeIngredientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientsClient<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.findMany()
     * 
     * // Get first 10 RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeIngredientsWithIdOnly = await prisma.recipeIngredients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeIngredientsFindManyArgs>(args?: SelectSubset<T, RecipeIngredientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeIngredients.
     * @param {RecipeIngredientsCreateArgs} args - Arguments to create a RecipeIngredients.
     * @example
     * // Create one RecipeIngredients
     * const RecipeIngredients = await prisma.recipeIngredients.create({
     *   data: {
     *     // ... data to create a RecipeIngredients
     *   }
     * })
     * 
     */
    create<T extends RecipeIngredientsCreateArgs>(args: SelectSubset<T, RecipeIngredientsCreateArgs<ExtArgs>>): Prisma__RecipeIngredientsClient<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeIngredients.
     * @param {RecipeIngredientsCreateManyArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeIngredientsCreateManyArgs>(args?: SelectSubset<T, RecipeIngredientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeIngredients and returns the data saved in the database.
     * @param {RecipeIngredientsCreateManyAndReturnArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeIngredients and only return the `id`
     * const recipeIngredientsWithIdOnly = await prisma.recipeIngredients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeIngredientsCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeIngredientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeIngredients.
     * @param {RecipeIngredientsDeleteArgs} args - Arguments to delete one RecipeIngredients.
     * @example
     * // Delete one RecipeIngredients
     * const RecipeIngredients = await prisma.recipeIngredients.delete({
     *   where: {
     *     // ... filter to delete one RecipeIngredients
     *   }
     * })
     * 
     */
    delete<T extends RecipeIngredientsDeleteArgs>(args: SelectSubset<T, RecipeIngredientsDeleteArgs<ExtArgs>>): Prisma__RecipeIngredientsClient<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeIngredients.
     * @param {RecipeIngredientsUpdateArgs} args - Arguments to update one RecipeIngredients.
     * @example
     * // Update one RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeIngredientsUpdateArgs>(args: SelectSubset<T, RecipeIngredientsUpdateArgs<ExtArgs>>): Prisma__RecipeIngredientsClient<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeIngredients.
     * @param {RecipeIngredientsDeleteManyArgs} args - Arguments to filter RecipeIngredients to delete.
     * @example
     * // Delete a few RecipeIngredients
     * const { count } = await prisma.recipeIngredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeIngredientsDeleteManyArgs>(args?: SelectSubset<T, RecipeIngredientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeIngredientsUpdateManyArgs>(args: SelectSubset<T, RecipeIngredientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients and returns the data updated in the database.
     * @param {RecipeIngredientsUpdateManyAndReturnArgs} args - Arguments to update many RecipeIngredients.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeIngredients and only return the `id`
     * const recipeIngredientsWithIdOnly = await prisma.recipeIngredients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeIngredientsUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeIngredientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeIngredients.
     * @param {RecipeIngredientsUpsertArgs} args - Arguments to update or create a RecipeIngredients.
     * @example
     * // Update or create a RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredients.upsert({
     *   create: {
     *     // ... data to create a RecipeIngredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeIngredients we want to update
     *   }
     * })
     */
    upsert<T extends RecipeIngredientsUpsertArgs>(args: SelectSubset<T, RecipeIngredientsUpsertArgs<ExtArgs>>): Prisma__RecipeIngredientsClient<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientsCountArgs} args - Arguments to filter RecipeIngredients to count.
     * @example
     * // Count the number of RecipeIngredients
     * const count = await prisma.recipeIngredients.count({
     *   where: {
     *     // ... the filter for the RecipeIngredients we want to count
     *   }
     * })
    **/
    count<T extends RecipeIngredientsCountArgs>(
      args?: Subset<T, RecipeIngredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeIngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeIngredientsAggregateArgs>(args: Subset<T, RecipeIngredientsAggregateArgs>): Prisma.PrismaPromise<GetRecipeIngredientsAggregateType<T>>

    /**
     * Group by RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientsGroupByArgs} args - Group by arguments.
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
      T extends RecipeIngredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeIngredientsGroupByArgs['orderBy'] }
        : { orderBy?: RecipeIngredientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeIngredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeIngredients model
   */
  readonly fields: RecipeIngredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeIngredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeIngredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecipeIngredients model
   */
  interface RecipeIngredientsFieldRefs {
    readonly id: FieldRef<"RecipeIngredients", 'String'>
    readonly name: FieldRef<"RecipeIngredients", 'String'>
    readonly description: FieldRef<"RecipeIngredients", 'String'>
    readonly quantity: FieldRef<"RecipeIngredients", 'Float'>
    readonly recipeId: FieldRef<"RecipeIngredients", 'String'>
    readonly ingredientId: FieldRef<"RecipeIngredients", 'String'>
    readonly productId: FieldRef<"RecipeIngredients", 'String'>
    readonly createdAt: FieldRef<"RecipeIngredients", 'DateTime'>
    readonly createdBy: FieldRef<"RecipeIngredients", 'String'>
    readonly updatedAt: FieldRef<"RecipeIngredients", 'DateTime'>
    readonly updatedBy: FieldRef<"RecipeIngredients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeIngredients findUnique
   */
  export type RecipeIngredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where: RecipeIngredientsWhereUniqueInput
  }

  /**
   * RecipeIngredients findUniqueOrThrow
   */
  export type RecipeIngredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where: RecipeIngredientsWhereUniqueInput
  }

  /**
   * RecipeIngredients findFirst
   */
  export type RecipeIngredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where?: RecipeIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientsOrderByWithRelationInput | RecipeIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientsScalarFieldEnum | RecipeIngredientsScalarFieldEnum[]
  }

  /**
   * RecipeIngredients findFirstOrThrow
   */
  export type RecipeIngredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where?: RecipeIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientsOrderByWithRelationInput | RecipeIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientsScalarFieldEnum | RecipeIngredientsScalarFieldEnum[]
  }

  /**
   * RecipeIngredients findMany
   */
  export type RecipeIngredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where?: RecipeIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientsOrderByWithRelationInput | RecipeIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeIngredients.
     */
    cursor?: RecipeIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    distinct?: RecipeIngredientsScalarFieldEnum | RecipeIngredientsScalarFieldEnum[]
  }

  /**
   * RecipeIngredients create
   */
  export type RecipeIngredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeIngredients.
     */
    data: XOR<RecipeIngredientsCreateInput, RecipeIngredientsUncheckedCreateInput>
  }

  /**
   * RecipeIngredients createMany
   */
  export type RecipeIngredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientsCreateManyInput | RecipeIngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeIngredients createManyAndReturn
   */
  export type RecipeIngredientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientsCreateManyInput | RecipeIngredientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredients update
   */
  export type RecipeIngredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeIngredients.
     */
    data: XOR<RecipeIngredientsUpdateInput, RecipeIngredientsUncheckedUpdateInput>
    /**
     * Choose, which RecipeIngredients to update.
     */
    where: RecipeIngredientsWhereUniqueInput
  }

  /**
   * RecipeIngredients updateMany
   */
  export type RecipeIngredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientsUpdateManyMutationInput, RecipeIngredientsUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientsWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
  }

  /**
   * RecipeIngredients updateManyAndReturn
   */
  export type RecipeIngredientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientsUpdateManyMutationInput, RecipeIngredientsUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientsWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredients upsert
   */
  export type RecipeIngredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeIngredients to update in case it exists.
     */
    where: RecipeIngredientsWhereUniqueInput
    /**
     * In case the RecipeIngredients found by the `where` argument doesn't exist, create a new RecipeIngredients with this data.
     */
    create: XOR<RecipeIngredientsCreateInput, RecipeIngredientsUncheckedCreateInput>
    /**
     * In case the RecipeIngredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeIngredientsUpdateInput, RecipeIngredientsUncheckedUpdateInput>
  }

  /**
   * RecipeIngredients delete
   */
  export type RecipeIngredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    /**
     * Filter which RecipeIngredients to delete.
     */
    where: RecipeIngredientsWhereUniqueInput
  }

  /**
   * RecipeIngredients deleteMany
   */
  export type RecipeIngredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredients to delete
     */
    where?: RecipeIngredientsWhereInput
    /**
     * Limit how many RecipeIngredients to delete.
     */
    limit?: number
  }

  /**
   * RecipeIngredients without action
   */
  export type RecipeIngredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    productId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    productId: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    productId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type RecipeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    productId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    productId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    productId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    name: string
    description: string
    productId: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    productId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    productId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    productId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    productId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "productId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      ingredients: Prisma.$RecipeIngredientsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      productId: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredients<T extends Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly name: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly productId: FieldRef<"Recipe", 'String'>
    readonly createdAt: FieldRef<"Recipe", 'DateTime'>
    readonly createdBy: FieldRef<"Recipe", 'String'>
    readonly updatedAt: FieldRef<"Recipe", 'DateTime'>
    readonly updatedBy: FieldRef<"Recipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.ingredients
   */
  export type Recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredients
     */
    select?: RecipeIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredients
     */
    omit?: RecipeIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientsInclude<ExtArgs> | null
    where?: RecipeIngredientsWhereInput
    orderBy?: RecipeIngredientsOrderByWithRelationInput | RecipeIngredientsOrderByWithRelationInput[]
    cursor?: RecipeIngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientsScalarFieldEnum | RecipeIngredientsScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model ReferenceUrl
   */

  export type AggregateReferenceUrl = {
    _count: ReferenceUrlCountAggregateOutputType | null
    _min: ReferenceUrlMinAggregateOutputType | null
    _max: ReferenceUrlMaxAggregateOutputType | null
  }

  export type ReferenceUrlMinAggregateOutputType = {
    id: string | null
    url: string | null
    type: $Enums.UrlType | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ReferenceUrlMaxAggregateOutputType = {
    id: string | null
    url: string | null
    type: $Enums.UrlType | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ReferenceUrlCountAggregateOutputType = {
    id: number
    url: number
    type: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type ReferenceUrlMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ReferenceUrlMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ReferenceUrlCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ReferenceUrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferenceUrl to aggregate.
     */
    where?: ReferenceUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferenceUrls to fetch.
     */
    orderBy?: ReferenceUrlOrderByWithRelationInput | ReferenceUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferenceUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferenceUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferenceUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferenceUrls
    **/
    _count?: true | ReferenceUrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferenceUrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferenceUrlMaxAggregateInputType
  }

  export type GetReferenceUrlAggregateType<T extends ReferenceUrlAggregateArgs> = {
        [P in keyof T & keyof AggregateReferenceUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferenceUrl[P]>
      : GetScalarType<T[P], AggregateReferenceUrl[P]>
  }




  export type ReferenceUrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferenceUrlWhereInput
    orderBy?: ReferenceUrlOrderByWithAggregationInput | ReferenceUrlOrderByWithAggregationInput[]
    by: ReferenceUrlScalarFieldEnum[] | ReferenceUrlScalarFieldEnum
    having?: ReferenceUrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferenceUrlCountAggregateInputType | true
    _min?: ReferenceUrlMinAggregateInputType
    _max?: ReferenceUrlMaxAggregateInputType
  }

  export type ReferenceUrlGroupByOutputType = {
    id: string
    url: string
    type: $Enums.UrlType
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: ReferenceUrlCountAggregateOutputType | null
    _min: ReferenceUrlMinAggregateOutputType | null
    _max: ReferenceUrlMaxAggregateOutputType | null
  }

  type GetReferenceUrlGroupByPayload<T extends ReferenceUrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferenceUrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferenceUrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferenceUrlGroupByOutputType[P]>
            : GetScalarType<T[P], ReferenceUrlGroupByOutputType[P]>
        }
      >
    >


  export type ReferenceUrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["referenceUrl"]>

  export type ReferenceUrlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["referenceUrl"]>

  export type ReferenceUrlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["referenceUrl"]>

  export type ReferenceUrlSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type ReferenceUrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["referenceUrl"]>

  export type $ReferenceUrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferenceUrl"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      type: $Enums.UrlType
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["referenceUrl"]>
    composites: {}
  }

  type ReferenceUrlGetPayload<S extends boolean | null | undefined | ReferenceUrlDefaultArgs> = $Result.GetResult<Prisma.$ReferenceUrlPayload, S>

  type ReferenceUrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferenceUrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferenceUrlCountAggregateInputType | true
    }

  export interface ReferenceUrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferenceUrl'], meta: { name: 'ReferenceUrl' } }
    /**
     * Find zero or one ReferenceUrl that matches the filter.
     * @param {ReferenceUrlFindUniqueArgs} args - Arguments to find a ReferenceUrl
     * @example
     * // Get one ReferenceUrl
     * const referenceUrl = await prisma.referenceUrl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferenceUrlFindUniqueArgs>(args: SelectSubset<T, ReferenceUrlFindUniqueArgs<ExtArgs>>): Prisma__ReferenceUrlClient<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferenceUrl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferenceUrlFindUniqueOrThrowArgs} args - Arguments to find a ReferenceUrl
     * @example
     * // Get one ReferenceUrl
     * const referenceUrl = await prisma.referenceUrl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferenceUrlFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferenceUrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferenceUrlClient<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferenceUrl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUrlFindFirstArgs} args - Arguments to find a ReferenceUrl
     * @example
     * // Get one ReferenceUrl
     * const referenceUrl = await prisma.referenceUrl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferenceUrlFindFirstArgs>(args?: SelectSubset<T, ReferenceUrlFindFirstArgs<ExtArgs>>): Prisma__ReferenceUrlClient<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferenceUrl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUrlFindFirstOrThrowArgs} args - Arguments to find a ReferenceUrl
     * @example
     * // Get one ReferenceUrl
     * const referenceUrl = await prisma.referenceUrl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferenceUrlFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferenceUrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferenceUrlClient<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferenceUrls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferenceUrls
     * const referenceUrls = await prisma.referenceUrl.findMany()
     * 
     * // Get first 10 ReferenceUrls
     * const referenceUrls = await prisma.referenceUrl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referenceUrlWithIdOnly = await prisma.referenceUrl.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferenceUrlFindManyArgs>(args?: SelectSubset<T, ReferenceUrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferenceUrl.
     * @param {ReferenceUrlCreateArgs} args - Arguments to create a ReferenceUrl.
     * @example
     * // Create one ReferenceUrl
     * const ReferenceUrl = await prisma.referenceUrl.create({
     *   data: {
     *     // ... data to create a ReferenceUrl
     *   }
     * })
     * 
     */
    create<T extends ReferenceUrlCreateArgs>(args: SelectSubset<T, ReferenceUrlCreateArgs<ExtArgs>>): Prisma__ReferenceUrlClient<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferenceUrls.
     * @param {ReferenceUrlCreateManyArgs} args - Arguments to create many ReferenceUrls.
     * @example
     * // Create many ReferenceUrls
     * const referenceUrl = await prisma.referenceUrl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferenceUrlCreateManyArgs>(args?: SelectSubset<T, ReferenceUrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferenceUrls and returns the data saved in the database.
     * @param {ReferenceUrlCreateManyAndReturnArgs} args - Arguments to create many ReferenceUrls.
     * @example
     * // Create many ReferenceUrls
     * const referenceUrl = await prisma.referenceUrl.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferenceUrls and only return the `id`
     * const referenceUrlWithIdOnly = await prisma.referenceUrl.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferenceUrlCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferenceUrlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReferenceUrl.
     * @param {ReferenceUrlDeleteArgs} args - Arguments to delete one ReferenceUrl.
     * @example
     * // Delete one ReferenceUrl
     * const ReferenceUrl = await prisma.referenceUrl.delete({
     *   where: {
     *     // ... filter to delete one ReferenceUrl
     *   }
     * })
     * 
     */
    delete<T extends ReferenceUrlDeleteArgs>(args: SelectSubset<T, ReferenceUrlDeleteArgs<ExtArgs>>): Prisma__ReferenceUrlClient<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferenceUrl.
     * @param {ReferenceUrlUpdateArgs} args - Arguments to update one ReferenceUrl.
     * @example
     * // Update one ReferenceUrl
     * const referenceUrl = await prisma.referenceUrl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferenceUrlUpdateArgs>(args: SelectSubset<T, ReferenceUrlUpdateArgs<ExtArgs>>): Prisma__ReferenceUrlClient<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferenceUrls.
     * @param {ReferenceUrlDeleteManyArgs} args - Arguments to filter ReferenceUrls to delete.
     * @example
     * // Delete a few ReferenceUrls
     * const { count } = await prisma.referenceUrl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferenceUrlDeleteManyArgs>(args?: SelectSubset<T, ReferenceUrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferenceUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferenceUrls
     * const referenceUrl = await prisma.referenceUrl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferenceUrlUpdateManyArgs>(args: SelectSubset<T, ReferenceUrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferenceUrls and returns the data updated in the database.
     * @param {ReferenceUrlUpdateManyAndReturnArgs} args - Arguments to update many ReferenceUrls.
     * @example
     * // Update many ReferenceUrls
     * const referenceUrl = await prisma.referenceUrl.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReferenceUrls and only return the `id`
     * const referenceUrlWithIdOnly = await prisma.referenceUrl.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReferenceUrlUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferenceUrlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReferenceUrl.
     * @param {ReferenceUrlUpsertArgs} args - Arguments to update or create a ReferenceUrl.
     * @example
     * // Update or create a ReferenceUrl
     * const referenceUrl = await prisma.referenceUrl.upsert({
     *   create: {
     *     // ... data to create a ReferenceUrl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferenceUrl we want to update
     *   }
     * })
     */
    upsert<T extends ReferenceUrlUpsertArgs>(args: SelectSubset<T, ReferenceUrlUpsertArgs<ExtArgs>>): Prisma__ReferenceUrlClient<$Result.GetResult<Prisma.$ReferenceUrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferenceUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUrlCountArgs} args - Arguments to filter ReferenceUrls to count.
     * @example
     * // Count the number of ReferenceUrls
     * const count = await prisma.referenceUrl.count({
     *   where: {
     *     // ... the filter for the ReferenceUrls we want to count
     *   }
     * })
    **/
    count<T extends ReferenceUrlCountArgs>(
      args?: Subset<T, ReferenceUrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferenceUrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferenceUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferenceUrlAggregateArgs>(args: Subset<T, ReferenceUrlAggregateArgs>): Prisma.PrismaPromise<GetReferenceUrlAggregateType<T>>

    /**
     * Group by ReferenceUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUrlGroupByArgs} args - Group by arguments.
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
      T extends ReferenceUrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferenceUrlGroupByArgs['orderBy'] }
        : { orderBy?: ReferenceUrlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferenceUrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferenceUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferenceUrl model
   */
  readonly fields: ReferenceUrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferenceUrl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferenceUrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ReferenceUrl model
   */
  interface ReferenceUrlFieldRefs {
    readonly id: FieldRef<"ReferenceUrl", 'String'>
    readonly url: FieldRef<"ReferenceUrl", 'String'>
    readonly type: FieldRef<"ReferenceUrl", 'UrlType'>
    readonly createdAt: FieldRef<"ReferenceUrl", 'DateTime'>
    readonly createdBy: FieldRef<"ReferenceUrl", 'String'>
    readonly updatedAt: FieldRef<"ReferenceUrl", 'DateTime'>
    readonly updatedBy: FieldRef<"ReferenceUrl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReferenceUrl findUnique
   */
  export type ReferenceUrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * Filter, which ReferenceUrl to fetch.
     */
    where: ReferenceUrlWhereUniqueInput
  }

  /**
   * ReferenceUrl findUniqueOrThrow
   */
  export type ReferenceUrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * Filter, which ReferenceUrl to fetch.
     */
    where: ReferenceUrlWhereUniqueInput
  }

  /**
   * ReferenceUrl findFirst
   */
  export type ReferenceUrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * Filter, which ReferenceUrl to fetch.
     */
    where?: ReferenceUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferenceUrls to fetch.
     */
    orderBy?: ReferenceUrlOrderByWithRelationInput | ReferenceUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferenceUrls.
     */
    cursor?: ReferenceUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferenceUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferenceUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferenceUrls.
     */
    distinct?: ReferenceUrlScalarFieldEnum | ReferenceUrlScalarFieldEnum[]
  }

  /**
   * ReferenceUrl findFirstOrThrow
   */
  export type ReferenceUrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * Filter, which ReferenceUrl to fetch.
     */
    where?: ReferenceUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferenceUrls to fetch.
     */
    orderBy?: ReferenceUrlOrderByWithRelationInput | ReferenceUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferenceUrls.
     */
    cursor?: ReferenceUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferenceUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferenceUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferenceUrls.
     */
    distinct?: ReferenceUrlScalarFieldEnum | ReferenceUrlScalarFieldEnum[]
  }

  /**
   * ReferenceUrl findMany
   */
  export type ReferenceUrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * Filter, which ReferenceUrls to fetch.
     */
    where?: ReferenceUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferenceUrls to fetch.
     */
    orderBy?: ReferenceUrlOrderByWithRelationInput | ReferenceUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferenceUrls.
     */
    cursor?: ReferenceUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferenceUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferenceUrls.
     */
    skip?: number
    distinct?: ReferenceUrlScalarFieldEnum | ReferenceUrlScalarFieldEnum[]
  }

  /**
   * ReferenceUrl create
   */
  export type ReferenceUrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * The data needed to create a ReferenceUrl.
     */
    data: XOR<ReferenceUrlCreateInput, ReferenceUrlUncheckedCreateInput>
  }

  /**
   * ReferenceUrl createMany
   */
  export type ReferenceUrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferenceUrls.
     */
    data: ReferenceUrlCreateManyInput | ReferenceUrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferenceUrl createManyAndReturn
   */
  export type ReferenceUrlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * The data used to create many ReferenceUrls.
     */
    data: ReferenceUrlCreateManyInput | ReferenceUrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferenceUrl update
   */
  export type ReferenceUrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * The data needed to update a ReferenceUrl.
     */
    data: XOR<ReferenceUrlUpdateInput, ReferenceUrlUncheckedUpdateInput>
    /**
     * Choose, which ReferenceUrl to update.
     */
    where: ReferenceUrlWhereUniqueInput
  }

  /**
   * ReferenceUrl updateMany
   */
  export type ReferenceUrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferenceUrls.
     */
    data: XOR<ReferenceUrlUpdateManyMutationInput, ReferenceUrlUncheckedUpdateManyInput>
    /**
     * Filter which ReferenceUrls to update
     */
    where?: ReferenceUrlWhereInput
    /**
     * Limit how many ReferenceUrls to update.
     */
    limit?: number
  }

  /**
   * ReferenceUrl updateManyAndReturn
   */
  export type ReferenceUrlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * The data used to update ReferenceUrls.
     */
    data: XOR<ReferenceUrlUpdateManyMutationInput, ReferenceUrlUncheckedUpdateManyInput>
    /**
     * Filter which ReferenceUrls to update
     */
    where?: ReferenceUrlWhereInput
    /**
     * Limit how many ReferenceUrls to update.
     */
    limit?: number
  }

  /**
   * ReferenceUrl upsert
   */
  export type ReferenceUrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * The filter to search for the ReferenceUrl to update in case it exists.
     */
    where: ReferenceUrlWhereUniqueInput
    /**
     * In case the ReferenceUrl found by the `where` argument doesn't exist, create a new ReferenceUrl with this data.
     */
    create: XOR<ReferenceUrlCreateInput, ReferenceUrlUncheckedCreateInput>
    /**
     * In case the ReferenceUrl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferenceUrlUpdateInput, ReferenceUrlUncheckedUpdateInput>
  }

  /**
   * ReferenceUrl delete
   */
  export type ReferenceUrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
    /**
     * Filter which ReferenceUrl to delete.
     */
    where: ReferenceUrlWhereUniqueInput
  }

  /**
   * ReferenceUrl deleteMany
   */
  export type ReferenceUrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferenceUrls to delete
     */
    where?: ReferenceUrlWhereInput
    /**
     * Limit how many ReferenceUrls to delete.
     */
    limit?: number
  }

  /**
   * ReferenceUrl without action
   */
  export type ReferenceUrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceUrl
     */
    select?: ReferenceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferenceUrl
     */
    omit?: ReferenceUrlOmit<ExtArgs> | null
  }


  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    ingredients?: boolean | Shop$ingredientsArgs<ExtArgs>
    products?: boolean | Shop$productsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Shop$ingredientsArgs<ExtArgs>
    products?: boolean | Shop$productsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      ingredients: Prisma.$IngredientInventoryPayload<ExtArgs>[]
      products: Prisma.$ProductInventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
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
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Shop$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Shop$productsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly description: FieldRef<"Shop", 'String'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly createdBy: FieldRef<"Shop", 'String'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedBy: FieldRef<"Shop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.ingredients
   */
  export type Shop$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientInventory
     */
    select?: IngredientInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientInventory
     */
    omit?: IngredientInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInventoryInclude<ExtArgs> | null
    where?: IngredientInventoryWhereInput
    orderBy?: IngredientInventoryOrderByWithRelationInput | IngredientInventoryOrderByWithRelationInput[]
    cursor?: IngredientInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientInventoryScalarFieldEnum | IngredientInventoryScalarFieldEnum[]
  }

  /**
   * Shop.products
   */
  export type Shop$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInventory
     */
    select?: ProductInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInventory
     */
    omit?: ProductInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInventoryInclude<ExtArgs> | null
    where?: ProductInventoryWhereInput
    orderBy?: ProductInventoryOrderByWithRelationInput | ProductInventoryOrderByWithRelationInput[]
    cursor?: ProductInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductInventoryScalarFieldEnum | ProductInventoryScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["tag"]>

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      createdBy: string
      updatedAt: Date
      updatedBy: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly createdBy: FieldRef<"Tag", 'String'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedBy: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    phoneNumber: string | null
    email: string | null
    password: string | null
    refreshToken: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    phoneNumber: string | null
    email: string | null
    password: string | null
    refreshToken: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    username: number
    phoneNumber: number
    email: number
    password: number
    refreshToken: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    phoneNumber?: true
    email?: true
    password?: true
    refreshToken?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    phoneNumber?: true
    email?: true
    password?: true
    refreshToken?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    phoneNumber?: true
    email?: true
    password?: true
    refreshToken?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    username: string
    phoneNumber: string
    email: string
    password: string
    refreshToken: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "username" | "phoneNumber" | "email" | "password" | "refreshToken" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      username: string
      phoneNumber: string
      email: string
      password: string
      refreshToken: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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


  export const ImagesScalarFieldEnum: {
    id: 'id',
    url: 'url',
    orderId: 'orderId',
    type: 'type',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const IngredientInventoryScalarFieldEnum: {
    id: 'id',
    description: 'description',
    quantity: 'quantity',
    cost: 'cost',
    isActive: 'isActive',
    emptiedDate: 'emptiedDate',
    ingredientId: 'ingredientId',
    shopId: 'shopId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type IngredientInventoryScalarFieldEnum = (typeof IngredientInventoryScalarFieldEnum)[keyof typeof IngredientInventoryScalarFieldEnum]


  export const IngredientPurchaseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    quantity: 'quantity',
    cost: 'cost',
    purchaseDate: 'purchaseDate',
    expiryDate: 'expiryDate',
    ingredientId: 'ingredientId',
    inventoryId: 'inventoryId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type IngredientPurchaseScalarFieldEnum = (typeof IngredientPurchaseScalarFieldEnum)[keyof typeof IngredientPurchaseScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const ProductBatchScalarFieldEnum: {
    id: 'id',
    description: 'description',
    quantity: 'quantity',
    cost: 'cost',
    purchaseDate: 'purchaseDate',
    expiryDate: 'expiryDate',
    productId: 'productId',
    batchType: 'batchType',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type ProductBatchScalarFieldEnum = (typeof ProductBatchScalarFieldEnum)[keyof typeof ProductBatchScalarFieldEnum]


  export const ProductInventoryScalarFieldEnum: {
    id: 'id',
    description: 'description',
    quantity: 'quantity',
    cost: 'cost',
    isActive: 'isActive',
    emptiedDate: 'emptiedDate',
    productId: 'productId',
    shopId: 'shopId',
    purchaseId: 'purchaseId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type ProductInventoryScalarFieldEnum = (typeof ProductInventoryScalarFieldEnum)[keyof typeof ProductInventoryScalarFieldEnum]


  export const ProductSaleScalarFieldEnum: {
    id: 'id',
    description: 'description',
    quantity: 'quantity',
    price: 'price',
    saleDate: 'saleDate',
    productId: 'productId',
    inventoryId: 'inventoryId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type ProductSaleScalarFieldEnum = (typeof ProductSaleScalarFieldEnum)[keyof typeof ProductSaleScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const RecipeIngredientsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    recipeId: 'recipeId',
    ingredientId: 'ingredientId',
    productId: 'productId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type RecipeIngredientsScalarFieldEnum = (typeof RecipeIngredientsScalarFieldEnum)[keyof typeof RecipeIngredientsScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    productId: 'productId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const ReferenceUrlScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type ReferenceUrlScalarFieldEnum = (typeof ReferenceUrlScalarFieldEnum)[keyof typeof ReferenceUrlScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    phoneNumber: 'phoneNumber',
    email: 'email',
    password: 'password',
    refreshToken: 'refreshToken',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ImageType'
   */
  export type EnumImageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageType'>
    


  /**
   * Reference to a field of type 'ImageType[]'
   */
  export type ListEnumImageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BatchType'
   */
  export type EnumBatchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchType'>
    


  /**
   * Reference to a field of type 'BatchType[]'
   */
  export type ListEnumBatchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchType[]'>
    


  /**
   * Reference to a field of type 'UrlType'
   */
  export type EnumUrlTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UrlType'>
    


  /**
   * Reference to a field of type 'UrlType[]'
   */
  export type ListEnumUrlTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UrlType[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    id?: UuidFilter<"Images"> | string
    url?: StringFilter<"Images"> | string
    orderId?: IntFilter<"Images"> | number
    type?: EnumImageTypeFilter<"Images"> | $Enums.ImageType
    createdAt?: DateTimeFilter<"Images"> | Date | string
    createdBy?: UuidFilter<"Images"> | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    updatedBy?: UuidFilter<"Images"> | string
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url_createdBy?: ImagesUrlCreatedByCompoundUniqueInput
    orderId_createdBy?: ImagesOrderIdCreatedByCompoundUniqueInput
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    url?: StringFilter<"Images"> | string
    orderId?: IntFilter<"Images"> | number
    type?: EnumImageTypeFilter<"Images"> | $Enums.ImageType
    createdAt?: DateTimeFilter<"Images"> | Date | string
    createdBy?: UuidFilter<"Images"> | string
    updatedAt?: DateTimeFilter<"Images"> | Date | string
    updatedBy?: UuidFilter<"Images"> | string
  }, "id" | "url_createdBy" | "orderId_createdBy">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _avg?: ImagesAvgOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
    _sum?: ImagesSumOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Images"> | string
    url?: StringWithAggregatesFilter<"Images"> | string
    orderId?: IntWithAggregatesFilter<"Images"> | number
    type?: EnumImageTypeWithAggregatesFilter<"Images"> | $Enums.ImageType
    createdAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"Images"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"Images"> | string
  }

  export type IngredientInventoryWhereInput = {
    AND?: IngredientInventoryWhereInput | IngredientInventoryWhereInput[]
    OR?: IngredientInventoryWhereInput[]
    NOT?: IngredientInventoryWhereInput | IngredientInventoryWhereInput[]
    id?: UuidFilter<"IngredientInventory"> | string
    description?: StringFilter<"IngredientInventory"> | string
    quantity?: FloatFilter<"IngredientInventory"> | number
    cost?: FloatFilter<"IngredientInventory"> | number
    isActive?: BoolFilter<"IngredientInventory"> | boolean
    emptiedDate?: DateTimeFilter<"IngredientInventory"> | Date | string
    ingredientId?: UuidFilter<"IngredientInventory"> | string
    shopId?: UuidFilter<"IngredientInventory"> | string
    createdAt?: DateTimeFilter<"IngredientInventory"> | Date | string
    createdBy?: UuidFilter<"IngredientInventory"> | string
    updatedAt?: DateTimeFilter<"IngredientInventory"> | Date | string
    updatedBy?: UuidFilter<"IngredientInventory"> | string
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    purchase?: IngredientPurchaseListRelationFilter
  }

  export type IngredientInventoryOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    ingredient?: IngredientOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    purchase?: IngredientPurchaseOrderByRelationAggregateInput
  }

  export type IngredientInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientInventoryWhereInput | IngredientInventoryWhereInput[]
    OR?: IngredientInventoryWhereInput[]
    NOT?: IngredientInventoryWhereInput | IngredientInventoryWhereInput[]
    description?: StringFilter<"IngredientInventory"> | string
    quantity?: FloatFilter<"IngredientInventory"> | number
    cost?: FloatFilter<"IngredientInventory"> | number
    isActive?: BoolFilter<"IngredientInventory"> | boolean
    emptiedDate?: DateTimeFilter<"IngredientInventory"> | Date | string
    ingredientId?: UuidFilter<"IngredientInventory"> | string
    shopId?: UuidFilter<"IngredientInventory"> | string
    createdAt?: DateTimeFilter<"IngredientInventory"> | Date | string
    createdBy?: UuidFilter<"IngredientInventory"> | string
    updatedAt?: DateTimeFilter<"IngredientInventory"> | Date | string
    updatedBy?: UuidFilter<"IngredientInventory"> | string
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    purchase?: IngredientPurchaseListRelationFilter
  }, "id">

  export type IngredientInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: IngredientInventoryCountOrderByAggregateInput
    _avg?: IngredientInventoryAvgOrderByAggregateInput
    _max?: IngredientInventoryMaxOrderByAggregateInput
    _min?: IngredientInventoryMinOrderByAggregateInput
    _sum?: IngredientInventorySumOrderByAggregateInput
  }

  export type IngredientInventoryScalarWhereWithAggregatesInput = {
    AND?: IngredientInventoryScalarWhereWithAggregatesInput | IngredientInventoryScalarWhereWithAggregatesInput[]
    OR?: IngredientInventoryScalarWhereWithAggregatesInput[]
    NOT?: IngredientInventoryScalarWhereWithAggregatesInput | IngredientInventoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"IngredientInventory"> | string
    description?: StringWithAggregatesFilter<"IngredientInventory"> | string
    quantity?: FloatWithAggregatesFilter<"IngredientInventory"> | number
    cost?: FloatWithAggregatesFilter<"IngredientInventory"> | number
    isActive?: BoolWithAggregatesFilter<"IngredientInventory"> | boolean
    emptiedDate?: DateTimeWithAggregatesFilter<"IngredientInventory"> | Date | string
    ingredientId?: UuidWithAggregatesFilter<"IngredientInventory"> | string
    shopId?: UuidWithAggregatesFilter<"IngredientInventory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IngredientInventory"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"IngredientInventory"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"IngredientInventory"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"IngredientInventory"> | string
  }

  export type IngredientPurchaseWhereInput = {
    AND?: IngredientPurchaseWhereInput | IngredientPurchaseWhereInput[]
    OR?: IngredientPurchaseWhereInput[]
    NOT?: IngredientPurchaseWhereInput | IngredientPurchaseWhereInput[]
    id?: UuidFilter<"IngredientPurchase"> | string
    description?: StringFilter<"IngredientPurchase"> | string
    quantity?: FloatFilter<"IngredientPurchase"> | number
    cost?: FloatFilter<"IngredientPurchase"> | number
    purchaseDate?: DateTimeFilter<"IngredientPurchase"> | Date | string
    expiryDate?: DateTimeFilter<"IngredientPurchase"> | Date | string
    ingredientId?: UuidFilter<"IngredientPurchase"> | string
    inventoryId?: UuidFilter<"IngredientPurchase"> | string
    createdAt?: DateTimeFilter<"IngredientPurchase"> | Date | string
    createdBy?: UuidFilter<"IngredientPurchase"> | string
    updatedAt?: DateTimeFilter<"IngredientPurchase"> | Date | string
    updatedBy?: UuidFilter<"IngredientPurchase"> | string
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
    inventory?: XOR<IngredientInventoryScalarRelationFilter, IngredientInventoryWhereInput>
  }

  export type IngredientPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    ingredientId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    ingredient?: IngredientOrderByWithRelationInput
    inventory?: IngredientInventoryOrderByWithRelationInput
  }

  export type IngredientPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inventoryId?: string
    AND?: IngredientPurchaseWhereInput | IngredientPurchaseWhereInput[]
    OR?: IngredientPurchaseWhereInput[]
    NOT?: IngredientPurchaseWhereInput | IngredientPurchaseWhereInput[]
    description?: StringFilter<"IngredientPurchase"> | string
    quantity?: FloatFilter<"IngredientPurchase"> | number
    cost?: FloatFilter<"IngredientPurchase"> | number
    purchaseDate?: DateTimeFilter<"IngredientPurchase"> | Date | string
    expiryDate?: DateTimeFilter<"IngredientPurchase"> | Date | string
    ingredientId?: UuidFilter<"IngredientPurchase"> | string
    createdAt?: DateTimeFilter<"IngredientPurchase"> | Date | string
    createdBy?: UuidFilter<"IngredientPurchase"> | string
    updatedAt?: DateTimeFilter<"IngredientPurchase"> | Date | string
    updatedBy?: UuidFilter<"IngredientPurchase"> | string
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
    inventory?: XOR<IngredientInventoryScalarRelationFilter, IngredientInventoryWhereInput>
  }, "id" | "inventoryId">

  export type IngredientPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    ingredientId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: IngredientPurchaseCountOrderByAggregateInput
    _avg?: IngredientPurchaseAvgOrderByAggregateInput
    _max?: IngredientPurchaseMaxOrderByAggregateInput
    _min?: IngredientPurchaseMinOrderByAggregateInput
    _sum?: IngredientPurchaseSumOrderByAggregateInput
  }

  export type IngredientPurchaseScalarWhereWithAggregatesInput = {
    AND?: IngredientPurchaseScalarWhereWithAggregatesInput | IngredientPurchaseScalarWhereWithAggregatesInput[]
    OR?: IngredientPurchaseScalarWhereWithAggregatesInput[]
    NOT?: IngredientPurchaseScalarWhereWithAggregatesInput | IngredientPurchaseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"IngredientPurchase"> | string
    description?: StringWithAggregatesFilter<"IngredientPurchase"> | string
    quantity?: FloatWithAggregatesFilter<"IngredientPurchase"> | number
    cost?: FloatWithAggregatesFilter<"IngredientPurchase"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"IngredientPurchase"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"IngredientPurchase"> | Date | string
    ingredientId?: UuidWithAggregatesFilter<"IngredientPurchase"> | string
    inventoryId?: UuidWithAggregatesFilter<"IngredientPurchase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IngredientPurchase"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"IngredientPurchase"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"IngredientPurchase"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"IngredientPurchase"> | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: UuidFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    description?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    createdBy?: UuidFilter<"Ingredient"> | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedBy?: UuidFilter<"Ingredient"> | string
    inventory?: IngredientInventoryListRelationFilter
    purchase?: IngredientPurchaseListRelationFilter
    recipeIngredients?: RecipeIngredientsListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    inventory?: IngredientInventoryOrderByRelationAggregateInput
    purchase?: IngredientPurchaseOrderByRelationAggregateInput
    recipeIngredients?: RecipeIngredientsOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    name?: StringFilter<"Ingredient"> | string
    description?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    createdBy?: UuidFilter<"Ingredient"> | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedBy?: UuidFilter<"Ingredient"> | string
    inventory?: IngredientInventoryListRelationFilter
    purchase?: IngredientPurchaseListRelationFilter
    recipeIngredients?: RecipeIngredientsListRelationFilter
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    description?: StringWithAggregatesFilter<"Ingredient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"Ingredient"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"Ingredient"> | string
  }

  export type ProductBatchWhereInput = {
    AND?: ProductBatchWhereInput | ProductBatchWhereInput[]
    OR?: ProductBatchWhereInput[]
    NOT?: ProductBatchWhereInput | ProductBatchWhereInput[]
    id?: UuidFilter<"ProductBatch"> | string
    description?: StringFilter<"ProductBatch"> | string
    quantity?: FloatFilter<"ProductBatch"> | number
    cost?: FloatFilter<"ProductBatch"> | number
    purchaseDate?: DateTimeFilter<"ProductBatch"> | Date | string
    expiryDate?: DateTimeFilter<"ProductBatch"> | Date | string
    productId?: UuidFilter<"ProductBatch"> | string
    batchType?: EnumBatchTypeFilter<"ProductBatch"> | $Enums.BatchType
    createdAt?: DateTimeFilter<"ProductBatch"> | Date | string
    createdBy?: UuidFilter<"ProductBatch"> | string
    updatedAt?: DateTimeFilter<"ProductBatch"> | Date | string
    updatedBy?: UuidFilter<"ProductBatch"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    inventory?: ProductInventoryListRelationFilter
  }

  export type ProductBatchOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    productId?: SortOrder
    batchType?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    product?: ProductOrderByWithRelationInput
    inventory?: ProductInventoryOrderByRelationAggregateInput
  }

  export type ProductBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductBatchWhereInput | ProductBatchWhereInput[]
    OR?: ProductBatchWhereInput[]
    NOT?: ProductBatchWhereInput | ProductBatchWhereInput[]
    description?: StringFilter<"ProductBatch"> | string
    quantity?: FloatFilter<"ProductBatch"> | number
    cost?: FloatFilter<"ProductBatch"> | number
    purchaseDate?: DateTimeFilter<"ProductBatch"> | Date | string
    expiryDate?: DateTimeFilter<"ProductBatch"> | Date | string
    productId?: UuidFilter<"ProductBatch"> | string
    batchType?: EnumBatchTypeFilter<"ProductBatch"> | $Enums.BatchType
    createdAt?: DateTimeFilter<"ProductBatch"> | Date | string
    createdBy?: UuidFilter<"ProductBatch"> | string
    updatedAt?: DateTimeFilter<"ProductBatch"> | Date | string
    updatedBy?: UuidFilter<"ProductBatch"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    inventory?: ProductInventoryListRelationFilter
  }, "id">

  export type ProductBatchOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    productId?: SortOrder
    batchType?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: ProductBatchCountOrderByAggregateInput
    _avg?: ProductBatchAvgOrderByAggregateInput
    _max?: ProductBatchMaxOrderByAggregateInput
    _min?: ProductBatchMinOrderByAggregateInput
    _sum?: ProductBatchSumOrderByAggregateInput
  }

  export type ProductBatchScalarWhereWithAggregatesInput = {
    AND?: ProductBatchScalarWhereWithAggregatesInput | ProductBatchScalarWhereWithAggregatesInput[]
    OR?: ProductBatchScalarWhereWithAggregatesInput[]
    NOT?: ProductBatchScalarWhereWithAggregatesInput | ProductBatchScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductBatch"> | string
    description?: StringWithAggregatesFilter<"ProductBatch"> | string
    quantity?: FloatWithAggregatesFilter<"ProductBatch"> | number
    cost?: FloatWithAggregatesFilter<"ProductBatch"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"ProductBatch"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"ProductBatch"> | Date | string
    productId?: UuidWithAggregatesFilter<"ProductBatch"> | string
    batchType?: EnumBatchTypeWithAggregatesFilter<"ProductBatch"> | $Enums.BatchType
    createdAt?: DateTimeWithAggregatesFilter<"ProductBatch"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"ProductBatch"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductBatch"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"ProductBatch"> | string
  }

  export type ProductInventoryWhereInput = {
    AND?: ProductInventoryWhereInput | ProductInventoryWhereInput[]
    OR?: ProductInventoryWhereInput[]
    NOT?: ProductInventoryWhereInput | ProductInventoryWhereInput[]
    id?: UuidFilter<"ProductInventory"> | string
    description?: StringFilter<"ProductInventory"> | string
    quantity?: FloatFilter<"ProductInventory"> | number
    cost?: FloatFilter<"ProductInventory"> | number
    isActive?: BoolFilter<"ProductInventory"> | boolean
    emptiedDate?: DateTimeFilter<"ProductInventory"> | Date | string
    productId?: UuidFilter<"ProductInventory"> | string
    shopId?: UuidFilter<"ProductInventory"> | string
    purchaseId?: UuidFilter<"ProductInventory"> | string
    createdAt?: DateTimeFilter<"ProductInventory"> | Date | string
    createdBy?: UuidFilter<"ProductInventory"> | string
    updatedAt?: DateTimeFilter<"ProductInventory"> | Date | string
    updatedBy?: UuidFilter<"ProductInventory"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    purchase?: XOR<ProductBatchScalarRelationFilter, ProductBatchWhereInput>
    sale?: ProductSaleListRelationFilter
  }

  export type ProductInventoryOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    product?: ProductOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    purchase?: ProductBatchOrderByWithRelationInput
    sale?: ProductSaleOrderByRelationAggregateInput
  }

  export type ProductInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductInventoryWhereInput | ProductInventoryWhereInput[]
    OR?: ProductInventoryWhereInput[]
    NOT?: ProductInventoryWhereInput | ProductInventoryWhereInput[]
    description?: StringFilter<"ProductInventory"> | string
    quantity?: FloatFilter<"ProductInventory"> | number
    cost?: FloatFilter<"ProductInventory"> | number
    isActive?: BoolFilter<"ProductInventory"> | boolean
    emptiedDate?: DateTimeFilter<"ProductInventory"> | Date | string
    productId?: UuidFilter<"ProductInventory"> | string
    shopId?: UuidFilter<"ProductInventory"> | string
    purchaseId?: UuidFilter<"ProductInventory"> | string
    createdAt?: DateTimeFilter<"ProductInventory"> | Date | string
    createdBy?: UuidFilter<"ProductInventory"> | string
    updatedAt?: DateTimeFilter<"ProductInventory"> | Date | string
    updatedBy?: UuidFilter<"ProductInventory"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    purchase?: XOR<ProductBatchScalarRelationFilter, ProductBatchWhereInput>
    sale?: ProductSaleListRelationFilter
  }, "id">

  export type ProductInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: ProductInventoryCountOrderByAggregateInput
    _avg?: ProductInventoryAvgOrderByAggregateInput
    _max?: ProductInventoryMaxOrderByAggregateInput
    _min?: ProductInventoryMinOrderByAggregateInput
    _sum?: ProductInventorySumOrderByAggregateInput
  }

  export type ProductInventoryScalarWhereWithAggregatesInput = {
    AND?: ProductInventoryScalarWhereWithAggregatesInput | ProductInventoryScalarWhereWithAggregatesInput[]
    OR?: ProductInventoryScalarWhereWithAggregatesInput[]
    NOT?: ProductInventoryScalarWhereWithAggregatesInput | ProductInventoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductInventory"> | string
    description?: StringWithAggregatesFilter<"ProductInventory"> | string
    quantity?: FloatWithAggregatesFilter<"ProductInventory"> | number
    cost?: FloatWithAggregatesFilter<"ProductInventory"> | number
    isActive?: BoolWithAggregatesFilter<"ProductInventory"> | boolean
    emptiedDate?: DateTimeWithAggregatesFilter<"ProductInventory"> | Date | string
    productId?: UuidWithAggregatesFilter<"ProductInventory"> | string
    shopId?: UuidWithAggregatesFilter<"ProductInventory"> | string
    purchaseId?: UuidWithAggregatesFilter<"ProductInventory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductInventory"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"ProductInventory"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductInventory"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"ProductInventory"> | string
  }

  export type ProductSaleWhereInput = {
    AND?: ProductSaleWhereInput | ProductSaleWhereInput[]
    OR?: ProductSaleWhereInput[]
    NOT?: ProductSaleWhereInput | ProductSaleWhereInput[]
    id?: UuidFilter<"ProductSale"> | string
    description?: StringFilter<"ProductSale"> | string
    quantity?: FloatFilter<"ProductSale"> | number
    price?: FloatFilter<"ProductSale"> | number
    saleDate?: DateTimeFilter<"ProductSale"> | Date | string
    productId?: UuidFilter<"ProductSale"> | string
    inventoryId?: UuidFilter<"ProductSale"> | string
    createdAt?: DateTimeFilter<"ProductSale"> | Date | string
    createdBy?: UuidFilter<"ProductSale"> | string
    updatedAt?: DateTimeFilter<"ProductSale"> | Date | string
    updatedBy?: UuidFilter<"ProductSale"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    inventory?: XOR<ProductInventoryScalarRelationFilter, ProductInventoryWhereInput>
  }

  export type ProductSaleOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    saleDate?: SortOrder
    productId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    product?: ProductOrderByWithRelationInput
    inventory?: ProductInventoryOrderByWithRelationInput
  }

  export type ProductSaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductSaleWhereInput | ProductSaleWhereInput[]
    OR?: ProductSaleWhereInput[]
    NOT?: ProductSaleWhereInput | ProductSaleWhereInput[]
    description?: StringFilter<"ProductSale"> | string
    quantity?: FloatFilter<"ProductSale"> | number
    price?: FloatFilter<"ProductSale"> | number
    saleDate?: DateTimeFilter<"ProductSale"> | Date | string
    productId?: UuidFilter<"ProductSale"> | string
    inventoryId?: UuidFilter<"ProductSale"> | string
    createdAt?: DateTimeFilter<"ProductSale"> | Date | string
    createdBy?: UuidFilter<"ProductSale"> | string
    updatedAt?: DateTimeFilter<"ProductSale"> | Date | string
    updatedBy?: UuidFilter<"ProductSale"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    inventory?: XOR<ProductInventoryScalarRelationFilter, ProductInventoryWhereInput>
  }, "id">

  export type ProductSaleOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    saleDate?: SortOrder
    productId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: ProductSaleCountOrderByAggregateInput
    _avg?: ProductSaleAvgOrderByAggregateInput
    _max?: ProductSaleMaxOrderByAggregateInput
    _min?: ProductSaleMinOrderByAggregateInput
    _sum?: ProductSaleSumOrderByAggregateInput
  }

  export type ProductSaleScalarWhereWithAggregatesInput = {
    AND?: ProductSaleScalarWhereWithAggregatesInput | ProductSaleScalarWhereWithAggregatesInput[]
    OR?: ProductSaleScalarWhereWithAggregatesInput[]
    NOT?: ProductSaleScalarWhereWithAggregatesInput | ProductSaleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductSale"> | string
    description?: StringWithAggregatesFilter<"ProductSale"> | string
    quantity?: FloatWithAggregatesFilter<"ProductSale"> | number
    price?: FloatWithAggregatesFilter<"ProductSale"> | number
    saleDate?: DateTimeWithAggregatesFilter<"ProductSale"> | Date | string
    productId?: UuidWithAggregatesFilter<"ProductSale"> | string
    inventoryId?: UuidWithAggregatesFilter<"ProductSale"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductSale"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"ProductSale"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductSale"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"ProductSale"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: UuidFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    createdBy?: UuidFilter<"Product"> | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    updatedBy?: UuidFilter<"Product"> | string
    recipes?: RecipeListRelationFilter
    sale?: ProductSaleListRelationFilter
    inventory?: ProductInventoryListRelationFilter
    purchase?: ProductBatchListRelationFilter
    recipeIngredients?: RecipeIngredientsListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    recipes?: RecipeOrderByRelationAggregateInput
    sale?: ProductSaleOrderByRelationAggregateInput
    inventory?: ProductInventoryOrderByRelationAggregateInput
    purchase?: ProductBatchOrderByRelationAggregateInput
    recipeIngredients?: RecipeIngredientsOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    createdBy?: UuidFilter<"Product"> | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    updatedBy?: UuidFilter<"Product"> | string
    recipes?: RecipeListRelationFilter
    sale?: ProductSaleListRelationFilter
    inventory?: ProductInventoryListRelationFilter
    purchase?: ProductBatchListRelationFilter
    recipeIngredients?: RecipeIngredientsListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"Product"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"Product"> | string
  }

  export type RecipeIngredientsWhereInput = {
    AND?: RecipeIngredientsWhereInput | RecipeIngredientsWhereInput[]
    OR?: RecipeIngredientsWhereInput[]
    NOT?: RecipeIngredientsWhereInput | RecipeIngredientsWhereInput[]
    id?: UuidFilter<"RecipeIngredients"> | string
    name?: StringFilter<"RecipeIngredients"> | string
    description?: StringFilter<"RecipeIngredients"> | string
    quantity?: FloatFilter<"RecipeIngredients"> | number
    recipeId?: UuidFilter<"RecipeIngredients"> | string
    ingredientId?: UuidFilter<"RecipeIngredients"> | string
    productId?: UuidFilter<"RecipeIngredients"> | string
    createdAt?: DateTimeFilter<"RecipeIngredients"> | Date | string
    createdBy?: UuidFilter<"RecipeIngredients"> | string
    updatedAt?: DateTimeFilter<"RecipeIngredients"> | Date | string
    updatedBy?: UuidFilter<"RecipeIngredients"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type RecipeIngredientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type RecipeIngredientsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeIngredientsWhereInput | RecipeIngredientsWhereInput[]
    OR?: RecipeIngredientsWhereInput[]
    NOT?: RecipeIngredientsWhereInput | RecipeIngredientsWhereInput[]
    name?: StringFilter<"RecipeIngredients"> | string
    description?: StringFilter<"RecipeIngredients"> | string
    quantity?: FloatFilter<"RecipeIngredients"> | number
    recipeId?: UuidFilter<"RecipeIngredients"> | string
    ingredientId?: UuidFilter<"RecipeIngredients"> | string
    productId?: UuidFilter<"RecipeIngredients"> | string
    createdAt?: DateTimeFilter<"RecipeIngredients"> | Date | string
    createdBy?: UuidFilter<"RecipeIngredients"> | string
    updatedAt?: DateTimeFilter<"RecipeIngredients"> | Date | string
    updatedBy?: UuidFilter<"RecipeIngredients"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type RecipeIngredientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: RecipeIngredientsCountOrderByAggregateInput
    _avg?: RecipeIngredientsAvgOrderByAggregateInput
    _max?: RecipeIngredientsMaxOrderByAggregateInput
    _min?: RecipeIngredientsMinOrderByAggregateInput
    _sum?: RecipeIngredientsSumOrderByAggregateInput
  }

  export type RecipeIngredientsScalarWhereWithAggregatesInput = {
    AND?: RecipeIngredientsScalarWhereWithAggregatesInput | RecipeIngredientsScalarWhereWithAggregatesInput[]
    OR?: RecipeIngredientsScalarWhereWithAggregatesInput[]
    NOT?: RecipeIngredientsScalarWhereWithAggregatesInput | RecipeIngredientsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RecipeIngredients"> | string
    name?: StringWithAggregatesFilter<"RecipeIngredients"> | string
    description?: StringWithAggregatesFilter<"RecipeIngredients"> | string
    quantity?: FloatWithAggregatesFilter<"RecipeIngredients"> | number
    recipeId?: UuidWithAggregatesFilter<"RecipeIngredients"> | string
    ingredientId?: UuidWithAggregatesFilter<"RecipeIngredients"> | string
    productId?: UuidWithAggregatesFilter<"RecipeIngredients"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RecipeIngredients"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"RecipeIngredients"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecipeIngredients"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"RecipeIngredients"> | string
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: UuidFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    productId?: UuidFilter<"Recipe"> | string
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    createdBy?: UuidFilter<"Recipe"> | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedBy?: UuidFilter<"Recipe"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ingredients?: RecipeIngredientsListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    product?: ProductOrderByWithRelationInput
    ingredients?: RecipeIngredientsOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    productId?: UuidFilter<"Recipe"> | string
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    createdBy?: UuidFilter<"Recipe"> | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedBy?: UuidFilter<"Recipe"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ingredients?: RecipeIngredientsListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Recipe"> | string
    name?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringWithAggregatesFilter<"Recipe"> | string
    productId?: UuidWithAggregatesFilter<"Recipe"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"Recipe"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"Recipe"> | string
  }

  export type ReferenceUrlWhereInput = {
    AND?: ReferenceUrlWhereInput | ReferenceUrlWhereInput[]
    OR?: ReferenceUrlWhereInput[]
    NOT?: ReferenceUrlWhereInput | ReferenceUrlWhereInput[]
    id?: UuidFilter<"ReferenceUrl"> | string
    url?: StringFilter<"ReferenceUrl"> | string
    type?: EnumUrlTypeFilter<"ReferenceUrl"> | $Enums.UrlType
    createdAt?: DateTimeFilter<"ReferenceUrl"> | Date | string
    createdBy?: UuidFilter<"ReferenceUrl"> | string
    updatedAt?: DateTimeFilter<"ReferenceUrl"> | Date | string
    updatedBy?: UuidFilter<"ReferenceUrl"> | string
  }

  export type ReferenceUrlOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ReferenceUrlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url_createdBy?: ReferenceUrlUrlCreatedByCompoundUniqueInput
    AND?: ReferenceUrlWhereInput | ReferenceUrlWhereInput[]
    OR?: ReferenceUrlWhereInput[]
    NOT?: ReferenceUrlWhereInput | ReferenceUrlWhereInput[]
    url?: StringFilter<"ReferenceUrl"> | string
    type?: EnumUrlTypeFilter<"ReferenceUrl"> | $Enums.UrlType
    createdAt?: DateTimeFilter<"ReferenceUrl"> | Date | string
    createdBy?: UuidFilter<"ReferenceUrl"> | string
    updatedAt?: DateTimeFilter<"ReferenceUrl"> | Date | string
    updatedBy?: UuidFilter<"ReferenceUrl"> | string
  }, "id" | "url_createdBy">

  export type ReferenceUrlOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: ReferenceUrlCountOrderByAggregateInput
    _max?: ReferenceUrlMaxOrderByAggregateInput
    _min?: ReferenceUrlMinOrderByAggregateInput
  }

  export type ReferenceUrlScalarWhereWithAggregatesInput = {
    AND?: ReferenceUrlScalarWhereWithAggregatesInput | ReferenceUrlScalarWhereWithAggregatesInput[]
    OR?: ReferenceUrlScalarWhereWithAggregatesInput[]
    NOT?: ReferenceUrlScalarWhereWithAggregatesInput | ReferenceUrlScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ReferenceUrl"> | string
    url?: StringWithAggregatesFilter<"ReferenceUrl"> | string
    type?: EnumUrlTypeWithAggregatesFilter<"ReferenceUrl"> | $Enums.UrlType
    createdAt?: DateTimeWithAggregatesFilter<"ReferenceUrl"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"ReferenceUrl"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReferenceUrl"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"ReferenceUrl"> | string
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: UuidFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    description?: StringFilter<"Shop"> | string
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    createdBy?: UuidFilter<"Shop"> | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    updatedBy?: UuidFilter<"Shop"> | string
    ingredients?: IngredientInventoryListRelationFilter
    products?: ProductInventoryListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    ingredients?: IngredientInventoryOrderByRelationAggregateInput
    products?: ProductInventoryOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    description?: StringFilter<"Shop"> | string
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    createdBy?: UuidFilter<"Shop"> | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    updatedBy?: UuidFilter<"Shop"> | string
    ingredients?: IngredientInventoryListRelationFilter
    products?: ProductInventoryListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    description?: StringWithAggregatesFilter<"Shop"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"Shop"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"Shop"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: UuidFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    createdBy?: UuidFilter<"Tag"> | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    updatedBy?: UuidFilter<"Tag"> | string
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_createdBy?: TagNameCreatedByCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    createdBy?: UuidFilter<"Tag"> | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    updatedBy?: UuidFilter<"Tag"> | string
  }, "id" | "name_createdBy">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    createdBy?: UuidWithAggregatesFilter<"Tag"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedBy?: UuidWithAggregatesFilter<"Tag"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    refreshToken?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    phoneNumber?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    refreshToken?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "phoneNumber" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ImagesCreateInput = {
    id?: string
    url: string
    orderId: number
    type?: $Enums.ImageType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ImagesUncheckedCreateInput = {
    id?: string
    url: string
    orderId: number
    type?: $Enums.ImageType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesCreateManyInput = {
    id?: string
    url: string
    orderId: number
    type?: $Enums.ImageType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientInventoryCreateInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredient: IngredientCreateNestedOneWithoutInventoryInput
    shop: ShopCreateNestedOneWithoutIngredientsInput
    purchase?: IngredientPurchaseCreateNestedManyWithoutInventoryInput
  }

  export type IngredientInventoryUncheckedCreateInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    ingredientId: string
    shopId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    purchase?: IngredientPurchaseUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type IngredientInventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutInventoryNestedInput
    shop?: ShopUpdateOneRequiredWithoutIngredientsNestedInput
    purchase?: IngredientPurchaseUpdateManyWithoutInventoryNestedInput
  }

  export type IngredientInventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    purchase?: IngredientPurchaseUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type IngredientInventoryCreateManyInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    ingredientId: string
    shopId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientInventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientInventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientPurchaseCreateInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredient: IngredientCreateNestedOneWithoutPurchaseInput
    inventory: IngredientInventoryCreateNestedOneWithoutPurchaseInput
  }

  export type IngredientPurchaseUncheckedCreateInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    ingredientId: string
    inventoryId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutPurchaseNestedInput
    inventory?: IngredientInventoryUpdateOneRequiredWithoutPurchaseNestedInput
  }

  export type IngredientPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientPurchaseCreateManyInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    ingredientId: string
    inventoryId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory?: IngredientInventoryCreateNestedManyWithoutIngredientInput
    purchase?: IngredientPurchaseCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientsCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory?: IngredientInventoryUncheckedCreateNestedManyWithoutIngredientInput
    purchase?: IngredientPurchaseUncheckedCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: IngredientInventoryUpdateManyWithoutIngredientNestedInput
    purchase?: IngredientPurchaseUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientsUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: IngredientInventoryUncheckedUpdateManyWithoutIngredientNestedInput
    purchase?: IngredientPurchaseUncheckedUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientsUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBatchCreateInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    batchType?: $Enums.BatchType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutPurchaseInput
    inventory?: ProductInventoryCreateNestedManyWithoutPurchaseInput
  }

  export type ProductBatchUncheckedCreateInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    productId: string
    batchType?: $Enums.BatchType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory?: ProductInventoryUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type ProductBatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batchType?: EnumBatchTypeFieldUpdateOperationsInput | $Enums.BatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutPurchaseNestedInput
    inventory?: ProductInventoryUpdateManyWithoutPurchaseNestedInput
  }

  export type ProductBatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    batchType?: EnumBatchTypeFieldUpdateOperationsInput | $Enums.BatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: ProductInventoryUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type ProductBatchCreateManyInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    productId: string
    batchType?: $Enums.BatchType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductBatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batchType?: EnumBatchTypeFieldUpdateOperationsInput | $Enums.BatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    batchType?: EnumBatchTypeFieldUpdateOperationsInput | $Enums.BatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductInventoryCreateInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutInventoryInput
    shop: ShopCreateNestedOneWithoutProductsInput
    purchase: ProductBatchCreateNestedOneWithoutInventoryInput
    sale?: ProductSaleCreateNestedManyWithoutInventoryInput
  }

  export type ProductInventoryUncheckedCreateInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    productId: string
    shopId: string
    purchaseId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    sale?: ProductSaleUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type ProductInventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
    shop?: ShopUpdateOneRequiredWithoutProductsNestedInput
    purchase?: ProductBatchUpdateOneRequiredWithoutInventoryNestedInput
    sale?: ProductSaleUpdateManyWithoutInventoryNestedInput
  }

  export type ProductInventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    sale?: ProductSaleUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type ProductInventoryCreateManyInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    productId: string
    shopId: string
    purchaseId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductInventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductInventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSaleCreateInput = {
    id?: string
    description: string
    quantity: number
    price: number
    saleDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutSaleInput
    inventory: ProductInventoryCreateNestedOneWithoutSaleInput
  }

  export type ProductSaleUncheckedCreateInput = {
    id?: string
    description: string
    quantity: number
    price: number
    saleDate?: Date | string
    productId: string
    inventoryId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductSaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutSaleNestedInput
    inventory?: ProductInventoryUpdateOneRequiredWithoutSaleNestedInput
  }

  export type ProductSaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSaleCreateManyInput = {
    id?: string
    description: string
    quantity: number
    price: number
    saleDate?: Date | string
    productId: string
    inventoryId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductSaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeCreateNestedManyWithoutProductInput
    sale?: ProductSaleCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryCreateNestedManyWithoutProductInput
    purchase?: ProductBatchCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutProductInput
    sale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryUncheckedCreateNestedManyWithoutProductInput
    purchase?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutProductNestedInput
    sale?: ProductSaleUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutProductNestedInput
    sale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUncheckedUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientsCreateInput = {
    id?: string
    name: string
    description: string
    quantity: number
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    ingredient?: IngredientCreateNestedOneWithoutRecipeIngredientsInput
    product?: ProductCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientsUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    quantity: number
    recipeId: string
    ingredientId?: string
    productId?: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeIngredientsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientsCreateManyInput = {
    id?: string
    name: string
    description: string
    quantity: number
    recipeId: string
    ingredientId?: string
    productId?: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeIngredientsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientsCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    productId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientsUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredients?: RecipeIngredientsUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    name: string
    description: string
    productId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUrlCreateInput = {
    id?: string
    url: string
    type?: $Enums.UrlType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ReferenceUrlUncheckedCreateInput = {
    id?: string
    url: string
    type?: $Enums.UrlType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ReferenceUrlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumUrlTypeFieldUpdateOperationsInput | $Enums.UrlType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUrlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumUrlTypeFieldUpdateOperationsInput | $Enums.UrlType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUrlCreateManyInput = {
    id?: string
    url: string
    type?: $Enums.UrlType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ReferenceUrlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumUrlTypeFieldUpdateOperationsInput | $Enums.UrlType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUrlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumUrlTypeFieldUpdateOperationsInput | $Enums.UrlType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredients?: IngredientInventoryCreateNestedManyWithoutShopInput
    products?: ProductInventoryCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredients?: IngredientInventoryUncheckedCreateNestedManyWithoutShopInput
    products?: ProductInventoryUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredients?: IngredientInventoryUpdateManyWithoutShopNestedInput
    products?: ProductInventoryUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredients?: IngredientInventoryUncheckedUpdateManyWithoutShopNestedInput
    products?: ProductInventoryUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    phoneNumber: string
    email: string
    password: string
    refreshToken: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    phoneNumber: string
    email: string
    password: string
    refreshToken: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    phoneNumber: string
    email: string
    password: string
    refreshToken: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumImageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeFilter<$PrismaModel> | $Enums.ImageType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ImagesUrlCreatedByCompoundUniqueInput = {
    url: string
    createdBy: string
  }

  export type ImagesOrderIdCreatedByCompoundUniqueInput = {
    orderId: number
    createdBy: string
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    orderId?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    orderId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumImageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageTypeFilter<$PrismaModel>
    _max?: NestedEnumImageTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IngredientScalarRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type IngredientPurchaseListRelationFilter = {
    every?: IngredientPurchaseWhereInput
    some?: IngredientPurchaseWhereInput
    none?: IngredientPurchaseWhereInput
  }

  export type IngredientPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type IngredientInventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type IngredientInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type IngredientInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    ingredientId?: SortOrder
    shopId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type IngredientInventorySumOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IngredientInventoryScalarRelationFilter = {
    is?: IngredientInventoryWhereInput
    isNot?: IngredientInventoryWhereInput
  }

  export type IngredientPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    ingredientId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type IngredientPurchaseAvgOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type IngredientPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    ingredientId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type IngredientPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    ingredientId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type IngredientPurchaseSumOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type IngredientInventoryListRelationFilter = {
    every?: IngredientInventoryWhereInput
    some?: IngredientInventoryWhereInput
    none?: IngredientInventoryWhereInput
  }

  export type RecipeIngredientsListRelationFilter = {
    every?: RecipeIngredientsWhereInput
    some?: RecipeIngredientsWhereInput
    none?: RecipeIngredientsWhereInput
  }

  export type IngredientInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeIngredientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type EnumBatchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchType | EnumBatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BatchType[] | ListEnumBatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchType[] | ListEnumBatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchTypeFilter<$PrismaModel> | $Enums.BatchType
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductInventoryListRelationFilter = {
    every?: ProductInventoryWhereInput
    some?: ProductInventoryWhereInput
    none?: ProductInventoryWhereInput
  }

  export type ProductInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductBatchCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    productId?: SortOrder
    batchType?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductBatchAvgOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type ProductBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    productId?: SortOrder
    batchType?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductBatchMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    purchaseDate?: SortOrder
    expiryDate?: SortOrder
    productId?: SortOrder
    batchType?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductBatchSumOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type EnumBatchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchType | EnumBatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BatchType[] | ListEnumBatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchType[] | ListEnumBatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchTypeWithAggregatesFilter<$PrismaModel> | $Enums.BatchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBatchTypeFilter<$PrismaModel>
    _max?: NestedEnumBatchTypeFilter<$PrismaModel>
  }

  export type ProductBatchScalarRelationFilter = {
    is?: ProductBatchWhereInput
    isNot?: ProductBatchWhereInput
  }

  export type ProductSaleListRelationFilter = {
    every?: ProductSaleWhereInput
    some?: ProductSaleWhereInput
    none?: ProductSaleWhereInput
  }

  export type ProductSaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductInventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type ProductInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    isActive?: SortOrder
    emptiedDate?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    purchaseId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductInventorySumOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
  }

  export type ProductInventoryScalarRelationFilter = {
    is?: ProductInventoryWhereInput
    isNot?: ProductInventoryWhereInput
  }

  export type ProductSaleCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    saleDate?: SortOrder
    productId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductSaleAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ProductSaleMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    saleDate?: SortOrder
    productId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductSaleMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    saleDate?: SortOrder
    productId?: SortOrder
    inventoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductSaleSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type ProductBatchListRelationFilter = {
    every?: ProductBatchWhereInput
    some?: ProductBatchWhereInput
    none?: ProductBatchWhereInput
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductBatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type RecipeIngredientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type RecipeIngredientsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type RecipeIngredientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type RecipeIngredientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type RecipeIngredientsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type EnumUrlTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UrlType | EnumUrlTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UrlType[] | ListEnumUrlTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrlType[] | ListEnumUrlTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUrlTypeFilter<$PrismaModel> | $Enums.UrlType
  }

  export type ReferenceUrlUrlCreatedByCompoundUniqueInput = {
    url: string
    createdBy: string
  }

  export type ReferenceUrlCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ReferenceUrlMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ReferenceUrlMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type EnumUrlTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrlType | EnumUrlTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UrlType[] | ListEnumUrlTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrlType[] | ListEnumUrlTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUrlTypeWithAggregatesFilter<$PrismaModel> | $Enums.UrlType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrlTypeFilter<$PrismaModel>
    _max?: NestedEnumUrlTypeFilter<$PrismaModel>
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type TagNameCreatedByCompoundUniqueInput = {
    name: string
    createdBy: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumImageTypeFieldUpdateOperationsInput = {
    set?: $Enums.ImageType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IngredientCreateNestedOneWithoutInventoryInput = {
    create?: XOR<IngredientCreateWithoutInventoryInput, IngredientUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutInventoryInput
    connect?: IngredientWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<ShopCreateWithoutIngredientsInput, ShopUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutIngredientsInput
    connect?: ShopWhereUniqueInput
  }

  export type IngredientPurchaseCreateNestedManyWithoutInventoryInput = {
    create?: XOR<IngredientPurchaseCreateWithoutInventoryInput, IngredientPurchaseUncheckedCreateWithoutInventoryInput> | IngredientPurchaseCreateWithoutInventoryInput[] | IngredientPurchaseUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: IngredientPurchaseCreateOrConnectWithoutInventoryInput | IngredientPurchaseCreateOrConnectWithoutInventoryInput[]
    createMany?: IngredientPurchaseCreateManyInventoryInputEnvelope
    connect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
  }

  export type IngredientPurchaseUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<IngredientPurchaseCreateWithoutInventoryInput, IngredientPurchaseUncheckedCreateWithoutInventoryInput> | IngredientPurchaseCreateWithoutInventoryInput[] | IngredientPurchaseUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: IngredientPurchaseCreateOrConnectWithoutInventoryInput | IngredientPurchaseCreateOrConnectWithoutInventoryInput[]
    createMany?: IngredientPurchaseCreateManyInventoryInputEnvelope
    connect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IngredientUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<IngredientCreateWithoutInventoryInput, IngredientUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutInventoryInput
    upsert?: IngredientUpsertWithoutInventoryInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutInventoryInput, IngredientUpdateWithoutInventoryInput>, IngredientUncheckedUpdateWithoutInventoryInput>
  }

  export type ShopUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<ShopCreateWithoutIngredientsInput, ShopUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutIngredientsInput
    upsert?: ShopUpsertWithoutIngredientsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutIngredientsInput, ShopUpdateWithoutIngredientsInput>, ShopUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientPurchaseUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<IngredientPurchaseCreateWithoutInventoryInput, IngredientPurchaseUncheckedCreateWithoutInventoryInput> | IngredientPurchaseCreateWithoutInventoryInput[] | IngredientPurchaseUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: IngredientPurchaseCreateOrConnectWithoutInventoryInput | IngredientPurchaseCreateOrConnectWithoutInventoryInput[]
    upsert?: IngredientPurchaseUpsertWithWhereUniqueWithoutInventoryInput | IngredientPurchaseUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: IngredientPurchaseCreateManyInventoryInputEnvelope
    set?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    disconnect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    delete?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    connect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    update?: IngredientPurchaseUpdateWithWhereUniqueWithoutInventoryInput | IngredientPurchaseUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: IngredientPurchaseUpdateManyWithWhereWithoutInventoryInput | IngredientPurchaseUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: IngredientPurchaseScalarWhereInput | IngredientPurchaseScalarWhereInput[]
  }

  export type IngredientPurchaseUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<IngredientPurchaseCreateWithoutInventoryInput, IngredientPurchaseUncheckedCreateWithoutInventoryInput> | IngredientPurchaseCreateWithoutInventoryInput[] | IngredientPurchaseUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: IngredientPurchaseCreateOrConnectWithoutInventoryInput | IngredientPurchaseCreateOrConnectWithoutInventoryInput[]
    upsert?: IngredientPurchaseUpsertWithWhereUniqueWithoutInventoryInput | IngredientPurchaseUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: IngredientPurchaseCreateManyInventoryInputEnvelope
    set?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    disconnect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    delete?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    connect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    update?: IngredientPurchaseUpdateWithWhereUniqueWithoutInventoryInput | IngredientPurchaseUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: IngredientPurchaseUpdateManyWithWhereWithoutInventoryInput | IngredientPurchaseUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: IngredientPurchaseScalarWhereInput | IngredientPurchaseScalarWhereInput[]
  }

  export type IngredientCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<IngredientCreateWithoutPurchaseInput, IngredientUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutPurchaseInput
    connect?: IngredientWhereUniqueInput
  }

  export type IngredientInventoryCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<IngredientInventoryCreateWithoutPurchaseInput, IngredientInventoryUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutPurchaseInput
    connect?: IngredientInventoryWhereUniqueInput
  }

  export type IngredientUpdateOneRequiredWithoutPurchaseNestedInput = {
    create?: XOR<IngredientCreateWithoutPurchaseInput, IngredientUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutPurchaseInput
    upsert?: IngredientUpsertWithoutPurchaseInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutPurchaseInput, IngredientUpdateWithoutPurchaseInput>, IngredientUncheckedUpdateWithoutPurchaseInput>
  }

  export type IngredientInventoryUpdateOneRequiredWithoutPurchaseNestedInput = {
    create?: XOR<IngredientInventoryCreateWithoutPurchaseInput, IngredientInventoryUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutPurchaseInput
    upsert?: IngredientInventoryUpsertWithoutPurchaseInput
    connect?: IngredientInventoryWhereUniqueInput
    update?: XOR<XOR<IngredientInventoryUpdateToOneWithWhereWithoutPurchaseInput, IngredientInventoryUpdateWithoutPurchaseInput>, IngredientInventoryUncheckedUpdateWithoutPurchaseInput>
  }

  export type IngredientInventoryCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientInventoryCreateWithoutIngredientInput, IngredientInventoryUncheckedCreateWithoutIngredientInput> | IngredientInventoryCreateWithoutIngredientInput[] | IngredientInventoryUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutIngredientInput | IngredientInventoryCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientInventoryCreateManyIngredientInputEnvelope
    connect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
  }

  export type IngredientPurchaseCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientPurchaseCreateWithoutIngredientInput, IngredientPurchaseUncheckedCreateWithoutIngredientInput> | IngredientPurchaseCreateWithoutIngredientInput[] | IngredientPurchaseUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientPurchaseCreateOrConnectWithoutIngredientInput | IngredientPurchaseCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientPurchaseCreateManyIngredientInputEnvelope
    connect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
  }

  export type RecipeIngredientsCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientsCreateWithoutIngredientInput, RecipeIngredientsUncheckedCreateWithoutIngredientInput> | RecipeIngredientsCreateWithoutIngredientInput[] | RecipeIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutIngredientInput | RecipeIngredientsCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientsCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
  }

  export type IngredientInventoryUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientInventoryCreateWithoutIngredientInput, IngredientInventoryUncheckedCreateWithoutIngredientInput> | IngredientInventoryCreateWithoutIngredientInput[] | IngredientInventoryUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutIngredientInput | IngredientInventoryCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientInventoryCreateManyIngredientInputEnvelope
    connect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
  }

  export type IngredientPurchaseUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientPurchaseCreateWithoutIngredientInput, IngredientPurchaseUncheckedCreateWithoutIngredientInput> | IngredientPurchaseCreateWithoutIngredientInput[] | IngredientPurchaseUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientPurchaseCreateOrConnectWithoutIngredientInput | IngredientPurchaseCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientPurchaseCreateManyIngredientInputEnvelope
    connect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
  }

  export type RecipeIngredientsUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientsCreateWithoutIngredientInput, RecipeIngredientsUncheckedCreateWithoutIngredientInput> | RecipeIngredientsCreateWithoutIngredientInput[] | RecipeIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutIngredientInput | RecipeIngredientsCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientsCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
  }

  export type IngredientInventoryUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientInventoryCreateWithoutIngredientInput, IngredientInventoryUncheckedCreateWithoutIngredientInput> | IngredientInventoryCreateWithoutIngredientInput[] | IngredientInventoryUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutIngredientInput | IngredientInventoryCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientInventoryUpsertWithWhereUniqueWithoutIngredientInput | IngredientInventoryUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientInventoryCreateManyIngredientInputEnvelope
    set?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    disconnect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    delete?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    connect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    update?: IngredientInventoryUpdateWithWhereUniqueWithoutIngredientInput | IngredientInventoryUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientInventoryUpdateManyWithWhereWithoutIngredientInput | IngredientInventoryUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientInventoryScalarWhereInput | IngredientInventoryScalarWhereInput[]
  }

  export type IngredientPurchaseUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientPurchaseCreateWithoutIngredientInput, IngredientPurchaseUncheckedCreateWithoutIngredientInput> | IngredientPurchaseCreateWithoutIngredientInput[] | IngredientPurchaseUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientPurchaseCreateOrConnectWithoutIngredientInput | IngredientPurchaseCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientPurchaseUpsertWithWhereUniqueWithoutIngredientInput | IngredientPurchaseUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientPurchaseCreateManyIngredientInputEnvelope
    set?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    disconnect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    delete?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    connect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    update?: IngredientPurchaseUpdateWithWhereUniqueWithoutIngredientInput | IngredientPurchaseUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientPurchaseUpdateManyWithWhereWithoutIngredientInput | IngredientPurchaseUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientPurchaseScalarWhereInput | IngredientPurchaseScalarWhereInput[]
  }

  export type RecipeIngredientsUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientsCreateWithoutIngredientInput, RecipeIngredientsUncheckedCreateWithoutIngredientInput> | RecipeIngredientsCreateWithoutIngredientInput[] | RecipeIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutIngredientInput | RecipeIngredientsCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientsUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientsUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientsCreateManyIngredientInputEnvelope
    set?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    disconnect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    delete?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    update?: RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientsScalarWhereInput | RecipeIngredientsScalarWhereInput[]
  }

  export type IngredientInventoryUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientInventoryCreateWithoutIngredientInput, IngredientInventoryUncheckedCreateWithoutIngredientInput> | IngredientInventoryCreateWithoutIngredientInput[] | IngredientInventoryUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutIngredientInput | IngredientInventoryCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientInventoryUpsertWithWhereUniqueWithoutIngredientInput | IngredientInventoryUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientInventoryCreateManyIngredientInputEnvelope
    set?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    disconnect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    delete?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    connect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    update?: IngredientInventoryUpdateWithWhereUniqueWithoutIngredientInput | IngredientInventoryUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientInventoryUpdateManyWithWhereWithoutIngredientInput | IngredientInventoryUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientInventoryScalarWhereInput | IngredientInventoryScalarWhereInput[]
  }

  export type IngredientPurchaseUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientPurchaseCreateWithoutIngredientInput, IngredientPurchaseUncheckedCreateWithoutIngredientInput> | IngredientPurchaseCreateWithoutIngredientInput[] | IngredientPurchaseUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientPurchaseCreateOrConnectWithoutIngredientInput | IngredientPurchaseCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientPurchaseUpsertWithWhereUniqueWithoutIngredientInput | IngredientPurchaseUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientPurchaseCreateManyIngredientInputEnvelope
    set?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    disconnect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    delete?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    connect?: IngredientPurchaseWhereUniqueInput | IngredientPurchaseWhereUniqueInput[]
    update?: IngredientPurchaseUpdateWithWhereUniqueWithoutIngredientInput | IngredientPurchaseUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientPurchaseUpdateManyWithWhereWithoutIngredientInput | IngredientPurchaseUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientPurchaseScalarWhereInput | IngredientPurchaseScalarWhereInput[]
  }

  export type RecipeIngredientsUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientsCreateWithoutIngredientInput, RecipeIngredientsUncheckedCreateWithoutIngredientInput> | RecipeIngredientsCreateWithoutIngredientInput[] | RecipeIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutIngredientInput | RecipeIngredientsCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientsUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientsUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientsCreateManyIngredientInputEnvelope
    set?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    disconnect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    delete?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    update?: RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientsScalarWhereInput | RecipeIngredientsScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<ProductCreateWithoutPurchaseInput, ProductUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductInventoryCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<ProductInventoryCreateWithoutPurchaseInput, ProductInventoryUncheckedCreateWithoutPurchaseInput> | ProductInventoryCreateWithoutPurchaseInput[] | ProductInventoryUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutPurchaseInput | ProductInventoryCreateOrConnectWithoutPurchaseInput[]
    createMany?: ProductInventoryCreateManyPurchaseInputEnvelope
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
  }

  export type ProductInventoryUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<ProductInventoryCreateWithoutPurchaseInput, ProductInventoryUncheckedCreateWithoutPurchaseInput> | ProductInventoryCreateWithoutPurchaseInput[] | ProductInventoryUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutPurchaseInput | ProductInventoryCreateOrConnectWithoutPurchaseInput[]
    createMany?: ProductInventoryCreateManyPurchaseInputEnvelope
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
  }

  export type EnumBatchTypeFieldUpdateOperationsInput = {
    set?: $Enums.BatchType
  }

  export type ProductUpdateOneRequiredWithoutPurchaseNestedInput = {
    create?: XOR<ProductCreateWithoutPurchaseInput, ProductUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseInput
    upsert?: ProductUpsertWithoutPurchaseInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPurchaseInput, ProductUpdateWithoutPurchaseInput>, ProductUncheckedUpdateWithoutPurchaseInput>
  }

  export type ProductInventoryUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<ProductInventoryCreateWithoutPurchaseInput, ProductInventoryUncheckedCreateWithoutPurchaseInput> | ProductInventoryCreateWithoutPurchaseInput[] | ProductInventoryUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutPurchaseInput | ProductInventoryCreateOrConnectWithoutPurchaseInput[]
    upsert?: ProductInventoryUpsertWithWhereUniqueWithoutPurchaseInput | ProductInventoryUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: ProductInventoryCreateManyPurchaseInputEnvelope
    set?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    disconnect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    delete?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    update?: ProductInventoryUpdateWithWhereUniqueWithoutPurchaseInput | ProductInventoryUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: ProductInventoryUpdateManyWithWhereWithoutPurchaseInput | ProductInventoryUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: ProductInventoryScalarWhereInput | ProductInventoryScalarWhereInput[]
  }

  export type ProductInventoryUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<ProductInventoryCreateWithoutPurchaseInput, ProductInventoryUncheckedCreateWithoutPurchaseInput> | ProductInventoryCreateWithoutPurchaseInput[] | ProductInventoryUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutPurchaseInput | ProductInventoryCreateOrConnectWithoutPurchaseInput[]
    upsert?: ProductInventoryUpsertWithWhereUniqueWithoutPurchaseInput | ProductInventoryUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: ProductInventoryCreateManyPurchaseInputEnvelope
    set?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    disconnect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    delete?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    update?: ProductInventoryUpdateWithWhereUniqueWithoutPurchaseInput | ProductInventoryUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: ProductInventoryUpdateManyWithWhereWithoutPurchaseInput | ProductInventoryUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: ProductInventoryScalarWhereInput | ProductInventoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutInventoryInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput
    connect?: ProductWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutProductsInput = {
    create?: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductsInput
    connect?: ShopWhereUniqueInput
  }

  export type ProductBatchCreateNestedOneWithoutInventoryInput = {
    create?: XOR<ProductBatchCreateWithoutInventoryInput, ProductBatchUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductBatchCreateOrConnectWithoutInventoryInput
    connect?: ProductBatchWhereUniqueInput
  }

  export type ProductSaleCreateNestedManyWithoutInventoryInput = {
    create?: XOR<ProductSaleCreateWithoutInventoryInput, ProductSaleUncheckedCreateWithoutInventoryInput> | ProductSaleCreateWithoutInventoryInput[] | ProductSaleUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutInventoryInput | ProductSaleCreateOrConnectWithoutInventoryInput[]
    createMany?: ProductSaleCreateManyInventoryInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductSaleUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<ProductSaleCreateWithoutInventoryInput, ProductSaleUncheckedCreateWithoutInventoryInput> | ProductSaleCreateWithoutInventoryInput[] | ProductSaleUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutInventoryInput | ProductSaleCreateOrConnectWithoutInventoryInput[]
    createMany?: ProductSaleCreateManyInventoryInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput
    upsert?: ProductUpsertWithoutInventoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryInput, ProductUpdateWithoutInventoryInput>, ProductUncheckedUpdateWithoutInventoryInput>
  }

  export type ShopUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductsInput
    upsert?: ShopUpsertWithoutProductsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutProductsInput, ShopUpdateWithoutProductsInput>, ShopUncheckedUpdateWithoutProductsInput>
  }

  export type ProductBatchUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<ProductBatchCreateWithoutInventoryInput, ProductBatchUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductBatchCreateOrConnectWithoutInventoryInput
    upsert?: ProductBatchUpsertWithoutInventoryInput
    connect?: ProductBatchWhereUniqueInput
    update?: XOR<XOR<ProductBatchUpdateToOneWithWhereWithoutInventoryInput, ProductBatchUpdateWithoutInventoryInput>, ProductBatchUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductSaleUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<ProductSaleCreateWithoutInventoryInput, ProductSaleUncheckedCreateWithoutInventoryInput> | ProductSaleCreateWithoutInventoryInput[] | ProductSaleUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutInventoryInput | ProductSaleCreateOrConnectWithoutInventoryInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutInventoryInput | ProductSaleUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: ProductSaleCreateManyInventoryInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutInventoryInput | ProductSaleUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutInventoryInput | ProductSaleUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductSaleUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<ProductSaleCreateWithoutInventoryInput, ProductSaleUncheckedCreateWithoutInventoryInput> | ProductSaleCreateWithoutInventoryInput[] | ProductSaleUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutInventoryInput | ProductSaleCreateOrConnectWithoutInventoryInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutInventoryInput | ProductSaleUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: ProductSaleCreateManyInventoryInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutInventoryInput | ProductSaleUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutInventoryInput | ProductSaleUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSaleInput = {
    create?: XOR<ProductCreateWithoutSaleInput, ProductUncheckedCreateWithoutSaleInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductInventoryCreateNestedOneWithoutSaleInput = {
    create?: XOR<ProductInventoryCreateWithoutSaleInput, ProductInventoryUncheckedCreateWithoutSaleInput>
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutSaleInput
    connect?: ProductInventoryWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSaleNestedInput = {
    create?: XOR<ProductCreateWithoutSaleInput, ProductUncheckedCreateWithoutSaleInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleInput
    upsert?: ProductUpsertWithoutSaleInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSaleInput, ProductUpdateWithoutSaleInput>, ProductUncheckedUpdateWithoutSaleInput>
  }

  export type ProductInventoryUpdateOneRequiredWithoutSaleNestedInput = {
    create?: XOR<ProductInventoryCreateWithoutSaleInput, ProductInventoryUncheckedCreateWithoutSaleInput>
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutSaleInput
    upsert?: ProductInventoryUpsertWithoutSaleInput
    connect?: ProductInventoryWhereUniqueInput
    update?: XOR<XOR<ProductInventoryUpdateToOneWithWhereWithoutSaleInput, ProductInventoryUpdateWithoutSaleInput>, ProductInventoryUncheckedUpdateWithoutSaleInput>
  }

  export type RecipeCreateNestedManyWithoutProductInput = {
    create?: XOR<RecipeCreateWithoutProductInput, RecipeUncheckedCreateWithoutProductInput> | RecipeCreateWithoutProductInput[] | RecipeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutProductInput | RecipeCreateOrConnectWithoutProductInput[]
    createMany?: RecipeCreateManyProductInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type ProductSaleCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput> | ProductSaleCreateWithoutProductInput[] | ProductSaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutProductInput | ProductSaleCreateOrConnectWithoutProductInput[]
    createMany?: ProductSaleCreateManyProductInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductInventoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductInventoryCreateWithoutProductInput, ProductInventoryUncheckedCreateWithoutProductInput> | ProductInventoryCreateWithoutProductInput[] | ProductInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutProductInput | ProductInventoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductInventoryCreateManyProductInputEnvelope
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
  }

  export type ProductBatchCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput> | ProductBatchCreateWithoutProductInput[] | ProductBatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBatchCreateOrConnectWithoutProductInput | ProductBatchCreateOrConnectWithoutProductInput[]
    createMany?: ProductBatchCreateManyProductInputEnvelope
    connect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
  }

  export type RecipeIngredientsCreateNestedManyWithoutProductInput = {
    create?: XOR<RecipeIngredientsCreateWithoutProductInput, RecipeIngredientsUncheckedCreateWithoutProductInput> | RecipeIngredientsCreateWithoutProductInput[] | RecipeIngredientsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutProductInput | RecipeIngredientsCreateOrConnectWithoutProductInput[]
    createMany?: RecipeIngredientsCreateManyProductInputEnvelope
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<RecipeCreateWithoutProductInput, RecipeUncheckedCreateWithoutProductInput> | RecipeCreateWithoutProductInput[] | RecipeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutProductInput | RecipeCreateOrConnectWithoutProductInput[]
    createMany?: RecipeCreateManyProductInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type ProductSaleUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput> | ProductSaleCreateWithoutProductInput[] | ProductSaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutProductInput | ProductSaleCreateOrConnectWithoutProductInput[]
    createMany?: ProductSaleCreateManyProductInputEnvelope
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
  }

  export type ProductInventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductInventoryCreateWithoutProductInput, ProductInventoryUncheckedCreateWithoutProductInput> | ProductInventoryCreateWithoutProductInput[] | ProductInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutProductInput | ProductInventoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductInventoryCreateManyProductInputEnvelope
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
  }

  export type ProductBatchUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput> | ProductBatchCreateWithoutProductInput[] | ProductBatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBatchCreateOrConnectWithoutProductInput | ProductBatchCreateOrConnectWithoutProductInput[]
    createMany?: ProductBatchCreateManyProductInputEnvelope
    connect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
  }

  export type RecipeIngredientsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<RecipeIngredientsCreateWithoutProductInput, RecipeIngredientsUncheckedCreateWithoutProductInput> | RecipeIngredientsCreateWithoutProductInput[] | RecipeIngredientsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutProductInput | RecipeIngredientsCreateOrConnectWithoutProductInput[]
    createMany?: RecipeIngredientsCreateManyProductInputEnvelope
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
  }

  export type RecipeUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecipeCreateWithoutProductInput, RecipeUncheckedCreateWithoutProductInput> | RecipeCreateWithoutProductInput[] | RecipeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutProductInput | RecipeCreateOrConnectWithoutProductInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutProductInput | RecipeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecipeCreateManyProductInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutProductInput | RecipeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutProductInput | RecipeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type ProductSaleUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput> | ProductSaleCreateWithoutProductInput[] | ProductSaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutProductInput | ProductSaleCreateOrConnectWithoutProductInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutProductInput | ProductSaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSaleCreateManyProductInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutProductInput | ProductSaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutProductInput | ProductSaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductInventoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductInventoryCreateWithoutProductInput, ProductInventoryUncheckedCreateWithoutProductInput> | ProductInventoryCreateWithoutProductInput[] | ProductInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutProductInput | ProductInventoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductInventoryUpsertWithWhereUniqueWithoutProductInput | ProductInventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductInventoryCreateManyProductInputEnvelope
    set?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    disconnect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    delete?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    update?: ProductInventoryUpdateWithWhereUniqueWithoutProductInput | ProductInventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductInventoryUpdateManyWithWhereWithoutProductInput | ProductInventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductInventoryScalarWhereInput | ProductInventoryScalarWhereInput[]
  }

  export type ProductBatchUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput> | ProductBatchCreateWithoutProductInput[] | ProductBatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBatchCreateOrConnectWithoutProductInput | ProductBatchCreateOrConnectWithoutProductInput[]
    upsert?: ProductBatchUpsertWithWhereUniqueWithoutProductInput | ProductBatchUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductBatchCreateManyProductInputEnvelope
    set?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    disconnect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    delete?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    connect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    update?: ProductBatchUpdateWithWhereUniqueWithoutProductInput | ProductBatchUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductBatchUpdateManyWithWhereWithoutProductInput | ProductBatchUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductBatchScalarWhereInput | ProductBatchScalarWhereInput[]
  }

  export type RecipeIngredientsUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecipeIngredientsCreateWithoutProductInput, RecipeIngredientsUncheckedCreateWithoutProductInput> | RecipeIngredientsCreateWithoutProductInput[] | RecipeIngredientsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutProductInput | RecipeIngredientsCreateOrConnectWithoutProductInput[]
    upsert?: RecipeIngredientsUpsertWithWhereUniqueWithoutProductInput | RecipeIngredientsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecipeIngredientsCreateManyProductInputEnvelope
    set?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    disconnect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    delete?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    update?: RecipeIngredientsUpdateWithWhereUniqueWithoutProductInput | RecipeIngredientsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecipeIngredientsUpdateManyWithWhereWithoutProductInput | RecipeIngredientsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecipeIngredientsScalarWhereInput | RecipeIngredientsScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecipeCreateWithoutProductInput, RecipeUncheckedCreateWithoutProductInput> | RecipeCreateWithoutProductInput[] | RecipeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutProductInput | RecipeCreateOrConnectWithoutProductInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutProductInput | RecipeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecipeCreateManyProductInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutProductInput | RecipeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutProductInput | RecipeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type ProductSaleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput> | ProductSaleCreateWithoutProductInput[] | ProductSaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSaleCreateOrConnectWithoutProductInput | ProductSaleCreateOrConnectWithoutProductInput[]
    upsert?: ProductSaleUpsertWithWhereUniqueWithoutProductInput | ProductSaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSaleCreateManyProductInputEnvelope
    set?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    disconnect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    delete?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    connect?: ProductSaleWhereUniqueInput | ProductSaleWhereUniqueInput[]
    update?: ProductSaleUpdateWithWhereUniqueWithoutProductInput | ProductSaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSaleUpdateManyWithWhereWithoutProductInput | ProductSaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
  }

  export type ProductInventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductInventoryCreateWithoutProductInput, ProductInventoryUncheckedCreateWithoutProductInput> | ProductInventoryCreateWithoutProductInput[] | ProductInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutProductInput | ProductInventoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductInventoryUpsertWithWhereUniqueWithoutProductInput | ProductInventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductInventoryCreateManyProductInputEnvelope
    set?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    disconnect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    delete?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    update?: ProductInventoryUpdateWithWhereUniqueWithoutProductInput | ProductInventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductInventoryUpdateManyWithWhereWithoutProductInput | ProductInventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductInventoryScalarWhereInput | ProductInventoryScalarWhereInput[]
  }

  export type ProductBatchUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput> | ProductBatchCreateWithoutProductInput[] | ProductBatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBatchCreateOrConnectWithoutProductInput | ProductBatchCreateOrConnectWithoutProductInput[]
    upsert?: ProductBatchUpsertWithWhereUniqueWithoutProductInput | ProductBatchUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductBatchCreateManyProductInputEnvelope
    set?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    disconnect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    delete?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    connect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    update?: ProductBatchUpdateWithWhereUniqueWithoutProductInput | ProductBatchUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductBatchUpdateManyWithWhereWithoutProductInput | ProductBatchUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductBatchScalarWhereInput | ProductBatchScalarWhereInput[]
  }

  export type RecipeIngredientsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecipeIngredientsCreateWithoutProductInput, RecipeIngredientsUncheckedCreateWithoutProductInput> | RecipeIngredientsCreateWithoutProductInput[] | RecipeIngredientsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutProductInput | RecipeIngredientsCreateOrConnectWithoutProductInput[]
    upsert?: RecipeIngredientsUpsertWithWhereUniqueWithoutProductInput | RecipeIngredientsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecipeIngredientsCreateManyProductInputEnvelope
    set?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    disconnect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    delete?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    update?: RecipeIngredientsUpdateWithWhereUniqueWithoutProductInput | RecipeIngredientsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecipeIngredientsUpdateManyWithWhereWithoutProductInput | RecipeIngredientsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecipeIngredientsScalarWhereInput | RecipeIngredientsScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutRecipeIngredientsInput = {
    create?: XOR<IngredientCreateWithoutRecipeIngredientsInput, IngredientUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeIngredientsInput
    connect?: IngredientWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutRecipeIngredientsInput = {
    create?: XOR<ProductCreateWithoutRecipeIngredientsInput, ProductUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecipeIngredientsInput
    connect?: ProductWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientsInput, RecipeUpdateWithoutIngredientsInput>, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeIngredientsInput, IngredientUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeIngredientsInput
    upsert?: IngredientUpsertWithoutRecipeIngredientsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutRecipeIngredientsInput, IngredientUpdateWithoutRecipeIngredientsInput>, IngredientUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type ProductUpdateOneRequiredWithoutRecipeIngredientsNestedInput = {
    create?: XOR<ProductCreateWithoutRecipeIngredientsInput, ProductUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecipeIngredientsInput
    upsert?: ProductUpsertWithoutRecipeIngredientsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRecipeIngredientsInput, ProductUpdateWithoutRecipeIngredientsInput>, ProductUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type ProductCreateNestedOneWithoutRecipesInput = {
    create?: XOR<ProductCreateWithoutRecipesInput, ProductUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecipesInput
    connect?: ProductWhereUniqueInput
  }

  export type RecipeIngredientsCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientsCreateWithoutRecipeInput, RecipeIngredientsUncheckedCreateWithoutRecipeInput> | RecipeIngredientsCreateWithoutRecipeInput[] | RecipeIngredientsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutRecipeInput | RecipeIngredientsCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientsCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
  }

  export type RecipeIngredientsUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientsCreateWithoutRecipeInput, RecipeIngredientsUncheckedCreateWithoutRecipeInput> | RecipeIngredientsCreateWithoutRecipeInput[] | RecipeIngredientsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutRecipeInput | RecipeIngredientsCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientsCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<ProductCreateWithoutRecipesInput, ProductUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecipesInput
    upsert?: ProductUpsertWithoutRecipesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRecipesInput, ProductUpdateWithoutRecipesInput>, ProductUncheckedUpdateWithoutRecipesInput>
  }

  export type RecipeIngredientsUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientsCreateWithoutRecipeInput, RecipeIngredientsUncheckedCreateWithoutRecipeInput> | RecipeIngredientsCreateWithoutRecipeInput[] | RecipeIngredientsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutRecipeInput | RecipeIngredientsCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientsCreateManyRecipeInputEnvelope
    set?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    disconnect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    delete?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    update?: RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientsScalarWhereInput | RecipeIngredientsScalarWhereInput[]
  }

  export type RecipeIngredientsUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientsCreateWithoutRecipeInput, RecipeIngredientsUncheckedCreateWithoutRecipeInput> | RecipeIngredientsCreateWithoutRecipeInput[] | RecipeIngredientsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientsCreateOrConnectWithoutRecipeInput | RecipeIngredientsCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientsCreateManyRecipeInputEnvelope
    set?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    disconnect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    delete?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    connect?: RecipeIngredientsWhereUniqueInput | RecipeIngredientsWhereUniqueInput[]
    update?: RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientsScalarWhereInput | RecipeIngredientsScalarWhereInput[]
  }

  export type EnumUrlTypeFieldUpdateOperationsInput = {
    set?: $Enums.UrlType
  }

  export type IngredientInventoryCreateNestedManyWithoutShopInput = {
    create?: XOR<IngredientInventoryCreateWithoutShopInput, IngredientInventoryUncheckedCreateWithoutShopInput> | IngredientInventoryCreateWithoutShopInput[] | IngredientInventoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutShopInput | IngredientInventoryCreateOrConnectWithoutShopInput[]
    createMany?: IngredientInventoryCreateManyShopInputEnvelope
    connect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
  }

  export type ProductInventoryCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductInventoryCreateWithoutShopInput, ProductInventoryUncheckedCreateWithoutShopInput> | ProductInventoryCreateWithoutShopInput[] | ProductInventoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutShopInput | ProductInventoryCreateOrConnectWithoutShopInput[]
    createMany?: ProductInventoryCreateManyShopInputEnvelope
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
  }

  export type IngredientInventoryUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<IngredientInventoryCreateWithoutShopInput, IngredientInventoryUncheckedCreateWithoutShopInput> | IngredientInventoryCreateWithoutShopInput[] | IngredientInventoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutShopInput | IngredientInventoryCreateOrConnectWithoutShopInput[]
    createMany?: IngredientInventoryCreateManyShopInputEnvelope
    connect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
  }

  export type ProductInventoryUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductInventoryCreateWithoutShopInput, ProductInventoryUncheckedCreateWithoutShopInput> | ProductInventoryCreateWithoutShopInput[] | ProductInventoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutShopInput | ProductInventoryCreateOrConnectWithoutShopInput[]
    createMany?: ProductInventoryCreateManyShopInputEnvelope
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
  }

  export type IngredientInventoryUpdateManyWithoutShopNestedInput = {
    create?: XOR<IngredientInventoryCreateWithoutShopInput, IngredientInventoryUncheckedCreateWithoutShopInput> | IngredientInventoryCreateWithoutShopInput[] | IngredientInventoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutShopInput | IngredientInventoryCreateOrConnectWithoutShopInput[]
    upsert?: IngredientInventoryUpsertWithWhereUniqueWithoutShopInput | IngredientInventoryUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: IngredientInventoryCreateManyShopInputEnvelope
    set?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    disconnect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    delete?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    connect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    update?: IngredientInventoryUpdateWithWhereUniqueWithoutShopInput | IngredientInventoryUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: IngredientInventoryUpdateManyWithWhereWithoutShopInput | IngredientInventoryUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: IngredientInventoryScalarWhereInput | IngredientInventoryScalarWhereInput[]
  }

  export type ProductInventoryUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductInventoryCreateWithoutShopInput, ProductInventoryUncheckedCreateWithoutShopInput> | ProductInventoryCreateWithoutShopInput[] | ProductInventoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutShopInput | ProductInventoryCreateOrConnectWithoutShopInput[]
    upsert?: ProductInventoryUpsertWithWhereUniqueWithoutShopInput | ProductInventoryUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductInventoryCreateManyShopInputEnvelope
    set?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    disconnect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    delete?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    update?: ProductInventoryUpdateWithWhereUniqueWithoutShopInput | ProductInventoryUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductInventoryUpdateManyWithWhereWithoutShopInput | ProductInventoryUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductInventoryScalarWhereInput | ProductInventoryScalarWhereInput[]
  }

  export type IngredientInventoryUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<IngredientInventoryCreateWithoutShopInput, IngredientInventoryUncheckedCreateWithoutShopInput> | IngredientInventoryCreateWithoutShopInput[] | IngredientInventoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: IngredientInventoryCreateOrConnectWithoutShopInput | IngredientInventoryCreateOrConnectWithoutShopInput[]
    upsert?: IngredientInventoryUpsertWithWhereUniqueWithoutShopInput | IngredientInventoryUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: IngredientInventoryCreateManyShopInputEnvelope
    set?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    disconnect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    delete?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    connect?: IngredientInventoryWhereUniqueInput | IngredientInventoryWhereUniqueInput[]
    update?: IngredientInventoryUpdateWithWhereUniqueWithoutShopInput | IngredientInventoryUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: IngredientInventoryUpdateManyWithWhereWithoutShopInput | IngredientInventoryUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: IngredientInventoryScalarWhereInput | IngredientInventoryScalarWhereInput[]
  }

  export type ProductInventoryUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductInventoryCreateWithoutShopInput, ProductInventoryUncheckedCreateWithoutShopInput> | ProductInventoryCreateWithoutShopInput[] | ProductInventoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductInventoryCreateOrConnectWithoutShopInput | ProductInventoryCreateOrConnectWithoutShopInput[]
    upsert?: ProductInventoryUpsertWithWhereUniqueWithoutShopInput | ProductInventoryUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductInventoryCreateManyShopInputEnvelope
    set?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    disconnect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    delete?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    connect?: ProductInventoryWhereUniqueInput | ProductInventoryWhereUniqueInput[]
    update?: ProductInventoryUpdateWithWhereUniqueWithoutShopInput | ProductInventoryUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductInventoryUpdateManyWithWhereWithoutShopInput | ProductInventoryUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductInventoryScalarWhereInput | ProductInventoryScalarWhereInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumImageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeFilter<$PrismaModel> | $Enums.ImageType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumImageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageTypeFilter<$PrismaModel>
    _max?: NestedEnumImageTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBatchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchType | EnumBatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BatchType[] | ListEnumBatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchType[] | ListEnumBatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchTypeFilter<$PrismaModel> | $Enums.BatchType
  }

  export type NestedEnumBatchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchType | EnumBatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BatchType[] | ListEnumBatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchType[] | ListEnumBatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchTypeWithAggregatesFilter<$PrismaModel> | $Enums.BatchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBatchTypeFilter<$PrismaModel>
    _max?: NestedEnumBatchTypeFilter<$PrismaModel>
  }

  export type NestedEnumUrlTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UrlType | EnumUrlTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UrlType[] | ListEnumUrlTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrlType[] | ListEnumUrlTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUrlTypeFilter<$PrismaModel> | $Enums.UrlType
  }

  export type NestedEnumUrlTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrlType | EnumUrlTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UrlType[] | ListEnumUrlTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrlType[] | ListEnumUrlTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUrlTypeWithAggregatesFilter<$PrismaModel> | $Enums.UrlType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrlTypeFilter<$PrismaModel>
    _max?: NestedEnumUrlTypeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IngredientCreateWithoutInventoryInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    purchase?: IngredientPurchaseCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientsCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    purchase?: IngredientPurchaseUncheckedCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutInventoryInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutInventoryInput, IngredientUncheckedCreateWithoutInventoryInput>
  }

  export type ShopCreateWithoutIngredientsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    products?: ProductInventoryCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutIngredientsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    products?: ProductInventoryUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutIngredientsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutIngredientsInput, ShopUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientPurchaseCreateWithoutInventoryInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredient: IngredientCreateNestedOneWithoutPurchaseInput
  }

  export type IngredientPurchaseUncheckedCreateWithoutInventoryInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    ingredientId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientPurchaseCreateOrConnectWithoutInventoryInput = {
    where: IngredientPurchaseWhereUniqueInput
    create: XOR<IngredientPurchaseCreateWithoutInventoryInput, IngredientPurchaseUncheckedCreateWithoutInventoryInput>
  }

  export type IngredientPurchaseCreateManyInventoryInputEnvelope = {
    data: IngredientPurchaseCreateManyInventoryInput | IngredientPurchaseCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type IngredientUpsertWithoutInventoryInput = {
    update: XOR<IngredientUpdateWithoutInventoryInput, IngredientUncheckedUpdateWithoutInventoryInput>
    create: XOR<IngredientCreateWithoutInventoryInput, IngredientUncheckedCreateWithoutInventoryInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutInventoryInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutInventoryInput, IngredientUncheckedUpdateWithoutInventoryInput>
  }

  export type IngredientUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    purchase?: IngredientPurchaseUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientsUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    purchase?: IngredientPurchaseUncheckedUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientsUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type ShopUpsertWithoutIngredientsInput = {
    update: XOR<ShopUpdateWithoutIngredientsInput, ShopUncheckedUpdateWithoutIngredientsInput>
    create: XOR<ShopCreateWithoutIngredientsInput, ShopUncheckedCreateWithoutIngredientsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutIngredientsInput, ShopUncheckedUpdateWithoutIngredientsInput>
  }

  export type ShopUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    products?: ProductInventoryUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    products?: ProductInventoryUncheckedUpdateManyWithoutShopNestedInput
  }

  export type IngredientPurchaseUpsertWithWhereUniqueWithoutInventoryInput = {
    where: IngredientPurchaseWhereUniqueInput
    update: XOR<IngredientPurchaseUpdateWithoutInventoryInput, IngredientPurchaseUncheckedUpdateWithoutInventoryInput>
    create: XOR<IngredientPurchaseCreateWithoutInventoryInput, IngredientPurchaseUncheckedCreateWithoutInventoryInput>
  }

  export type IngredientPurchaseUpdateWithWhereUniqueWithoutInventoryInput = {
    where: IngredientPurchaseWhereUniqueInput
    data: XOR<IngredientPurchaseUpdateWithoutInventoryInput, IngredientPurchaseUncheckedUpdateWithoutInventoryInput>
  }

  export type IngredientPurchaseUpdateManyWithWhereWithoutInventoryInput = {
    where: IngredientPurchaseScalarWhereInput
    data: XOR<IngredientPurchaseUpdateManyMutationInput, IngredientPurchaseUncheckedUpdateManyWithoutInventoryInput>
  }

  export type IngredientPurchaseScalarWhereInput = {
    AND?: IngredientPurchaseScalarWhereInput | IngredientPurchaseScalarWhereInput[]
    OR?: IngredientPurchaseScalarWhereInput[]
    NOT?: IngredientPurchaseScalarWhereInput | IngredientPurchaseScalarWhereInput[]
    id?: UuidFilter<"IngredientPurchase"> | string
    description?: StringFilter<"IngredientPurchase"> | string
    quantity?: FloatFilter<"IngredientPurchase"> | number
    cost?: FloatFilter<"IngredientPurchase"> | number
    purchaseDate?: DateTimeFilter<"IngredientPurchase"> | Date | string
    expiryDate?: DateTimeFilter<"IngredientPurchase"> | Date | string
    ingredientId?: UuidFilter<"IngredientPurchase"> | string
    inventoryId?: UuidFilter<"IngredientPurchase"> | string
    createdAt?: DateTimeFilter<"IngredientPurchase"> | Date | string
    createdBy?: UuidFilter<"IngredientPurchase"> | string
    updatedAt?: DateTimeFilter<"IngredientPurchase"> | Date | string
    updatedBy?: UuidFilter<"IngredientPurchase"> | string
  }

  export type IngredientCreateWithoutPurchaseInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory?: IngredientInventoryCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientsCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutPurchaseInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory?: IngredientInventoryUncheckedCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutPurchaseInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutPurchaseInput, IngredientUncheckedCreateWithoutPurchaseInput>
  }

  export type IngredientInventoryCreateWithoutPurchaseInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredient: IngredientCreateNestedOneWithoutInventoryInput
    shop: ShopCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientInventoryUncheckedCreateWithoutPurchaseInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    ingredientId: string
    shopId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientInventoryCreateOrConnectWithoutPurchaseInput = {
    where: IngredientInventoryWhereUniqueInput
    create: XOR<IngredientInventoryCreateWithoutPurchaseInput, IngredientInventoryUncheckedCreateWithoutPurchaseInput>
  }

  export type IngredientUpsertWithoutPurchaseInput = {
    update: XOR<IngredientUpdateWithoutPurchaseInput, IngredientUncheckedUpdateWithoutPurchaseInput>
    create: XOR<IngredientCreateWithoutPurchaseInput, IngredientUncheckedCreateWithoutPurchaseInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutPurchaseInput, IngredientUncheckedUpdateWithoutPurchaseInput>
  }

  export type IngredientUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: IngredientInventoryUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientsUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: IngredientInventoryUncheckedUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientsUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientInventoryUpsertWithoutPurchaseInput = {
    update: XOR<IngredientInventoryUpdateWithoutPurchaseInput, IngredientInventoryUncheckedUpdateWithoutPurchaseInput>
    create: XOR<IngredientInventoryCreateWithoutPurchaseInput, IngredientInventoryUncheckedCreateWithoutPurchaseInput>
    where?: IngredientInventoryWhereInput
  }

  export type IngredientInventoryUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: IngredientInventoryWhereInput
    data: XOR<IngredientInventoryUpdateWithoutPurchaseInput, IngredientInventoryUncheckedUpdateWithoutPurchaseInput>
  }

  export type IngredientInventoryUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutInventoryNestedInput
    shop?: ShopUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientInventoryUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientInventoryCreateWithoutIngredientInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    shop: ShopCreateNestedOneWithoutIngredientsInput
    purchase?: IngredientPurchaseCreateNestedManyWithoutInventoryInput
  }

  export type IngredientInventoryUncheckedCreateWithoutIngredientInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    shopId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    purchase?: IngredientPurchaseUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type IngredientInventoryCreateOrConnectWithoutIngredientInput = {
    where: IngredientInventoryWhereUniqueInput
    create: XOR<IngredientInventoryCreateWithoutIngredientInput, IngredientInventoryUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientInventoryCreateManyIngredientInputEnvelope = {
    data: IngredientInventoryCreateManyIngredientInput | IngredientInventoryCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type IngredientPurchaseCreateWithoutIngredientInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory: IngredientInventoryCreateNestedOneWithoutPurchaseInput
  }

  export type IngredientPurchaseUncheckedCreateWithoutIngredientInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    inventoryId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientPurchaseCreateOrConnectWithoutIngredientInput = {
    where: IngredientPurchaseWhereUniqueInput
    create: XOR<IngredientPurchaseCreateWithoutIngredientInput, IngredientPurchaseUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientPurchaseCreateManyIngredientInputEnvelope = {
    data: IngredientPurchaseCreateManyIngredientInput | IngredientPurchaseCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientsCreateWithoutIngredientInput = {
    id?: string
    name: string
    description: string
    quantity: number
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    product?: ProductCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientsUncheckedCreateWithoutIngredientInput = {
    id?: string
    name: string
    description: string
    quantity: number
    recipeId: string
    productId?: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeIngredientsCreateOrConnectWithoutIngredientInput = {
    where: RecipeIngredientsWhereUniqueInput
    create: XOR<RecipeIngredientsCreateWithoutIngredientInput, RecipeIngredientsUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientsCreateManyIngredientInputEnvelope = {
    data: RecipeIngredientsCreateManyIngredientInput | RecipeIngredientsCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type IngredientInventoryUpsertWithWhereUniqueWithoutIngredientInput = {
    where: IngredientInventoryWhereUniqueInput
    update: XOR<IngredientInventoryUpdateWithoutIngredientInput, IngredientInventoryUncheckedUpdateWithoutIngredientInput>
    create: XOR<IngredientInventoryCreateWithoutIngredientInput, IngredientInventoryUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientInventoryUpdateWithWhereUniqueWithoutIngredientInput = {
    where: IngredientInventoryWhereUniqueInput
    data: XOR<IngredientInventoryUpdateWithoutIngredientInput, IngredientInventoryUncheckedUpdateWithoutIngredientInput>
  }

  export type IngredientInventoryUpdateManyWithWhereWithoutIngredientInput = {
    where: IngredientInventoryScalarWhereInput
    data: XOR<IngredientInventoryUpdateManyMutationInput, IngredientInventoryUncheckedUpdateManyWithoutIngredientInput>
  }

  export type IngredientInventoryScalarWhereInput = {
    AND?: IngredientInventoryScalarWhereInput | IngredientInventoryScalarWhereInput[]
    OR?: IngredientInventoryScalarWhereInput[]
    NOT?: IngredientInventoryScalarWhereInput | IngredientInventoryScalarWhereInput[]
    id?: UuidFilter<"IngredientInventory"> | string
    description?: StringFilter<"IngredientInventory"> | string
    quantity?: FloatFilter<"IngredientInventory"> | number
    cost?: FloatFilter<"IngredientInventory"> | number
    isActive?: BoolFilter<"IngredientInventory"> | boolean
    emptiedDate?: DateTimeFilter<"IngredientInventory"> | Date | string
    ingredientId?: UuidFilter<"IngredientInventory"> | string
    shopId?: UuidFilter<"IngredientInventory"> | string
    createdAt?: DateTimeFilter<"IngredientInventory"> | Date | string
    createdBy?: UuidFilter<"IngredientInventory"> | string
    updatedAt?: DateTimeFilter<"IngredientInventory"> | Date | string
    updatedBy?: UuidFilter<"IngredientInventory"> | string
  }

  export type IngredientPurchaseUpsertWithWhereUniqueWithoutIngredientInput = {
    where: IngredientPurchaseWhereUniqueInput
    update: XOR<IngredientPurchaseUpdateWithoutIngredientInput, IngredientPurchaseUncheckedUpdateWithoutIngredientInput>
    create: XOR<IngredientPurchaseCreateWithoutIngredientInput, IngredientPurchaseUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientPurchaseUpdateWithWhereUniqueWithoutIngredientInput = {
    where: IngredientPurchaseWhereUniqueInput
    data: XOR<IngredientPurchaseUpdateWithoutIngredientInput, IngredientPurchaseUncheckedUpdateWithoutIngredientInput>
  }

  export type IngredientPurchaseUpdateManyWithWhereWithoutIngredientInput = {
    where: IngredientPurchaseScalarWhereInput
    data: XOR<IngredientPurchaseUpdateManyMutationInput, IngredientPurchaseUncheckedUpdateManyWithoutIngredientInput>
  }

  export type RecipeIngredientsUpsertWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientsWhereUniqueInput
    update: XOR<RecipeIngredientsUpdateWithoutIngredientInput, RecipeIngredientsUncheckedUpdateWithoutIngredientInput>
    create: XOR<RecipeIngredientsCreateWithoutIngredientInput, RecipeIngredientsUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientsWhereUniqueInput
    data: XOR<RecipeIngredientsUpdateWithoutIngredientInput, RecipeIngredientsUncheckedUpdateWithoutIngredientInput>
  }

  export type RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput = {
    where: RecipeIngredientsScalarWhereInput
    data: XOR<RecipeIngredientsUpdateManyMutationInput, RecipeIngredientsUncheckedUpdateManyWithoutIngredientInput>
  }

  export type RecipeIngredientsScalarWhereInput = {
    AND?: RecipeIngredientsScalarWhereInput | RecipeIngredientsScalarWhereInput[]
    OR?: RecipeIngredientsScalarWhereInput[]
    NOT?: RecipeIngredientsScalarWhereInput | RecipeIngredientsScalarWhereInput[]
    id?: UuidFilter<"RecipeIngredients"> | string
    name?: StringFilter<"RecipeIngredients"> | string
    description?: StringFilter<"RecipeIngredients"> | string
    quantity?: FloatFilter<"RecipeIngredients"> | number
    recipeId?: UuidFilter<"RecipeIngredients"> | string
    ingredientId?: UuidFilter<"RecipeIngredients"> | string
    productId?: UuidFilter<"RecipeIngredients"> | string
    createdAt?: DateTimeFilter<"RecipeIngredients"> | Date | string
    createdBy?: UuidFilter<"RecipeIngredients"> | string
    updatedAt?: DateTimeFilter<"RecipeIngredients"> | Date | string
    updatedBy?: UuidFilter<"RecipeIngredients"> | string
  }

  export type ProductCreateWithoutPurchaseInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeCreateNestedManyWithoutProductInput
    sale?: ProductSaleCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPurchaseInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutProductInput
    sale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryUncheckedCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPurchaseInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPurchaseInput, ProductUncheckedCreateWithoutPurchaseInput>
  }

  export type ProductInventoryCreateWithoutPurchaseInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutInventoryInput
    shop: ShopCreateNestedOneWithoutProductsInput
    sale?: ProductSaleCreateNestedManyWithoutInventoryInput
  }

  export type ProductInventoryUncheckedCreateWithoutPurchaseInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    productId: string
    shopId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    sale?: ProductSaleUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type ProductInventoryCreateOrConnectWithoutPurchaseInput = {
    where: ProductInventoryWhereUniqueInput
    create: XOR<ProductInventoryCreateWithoutPurchaseInput, ProductInventoryUncheckedCreateWithoutPurchaseInput>
  }

  export type ProductInventoryCreateManyPurchaseInputEnvelope = {
    data: ProductInventoryCreateManyPurchaseInput | ProductInventoryCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutPurchaseInput = {
    update: XOR<ProductUpdateWithoutPurchaseInput, ProductUncheckedUpdateWithoutPurchaseInput>
    create: XOR<ProductCreateWithoutPurchaseInput, ProductUncheckedCreateWithoutPurchaseInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPurchaseInput, ProductUncheckedUpdateWithoutPurchaseInput>
  }

  export type ProductUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutProductNestedInput
    sale?: ProductSaleUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutProductNestedInput
    sale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUncheckedUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductInventoryUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: ProductInventoryWhereUniqueInput
    update: XOR<ProductInventoryUpdateWithoutPurchaseInput, ProductInventoryUncheckedUpdateWithoutPurchaseInput>
    create: XOR<ProductInventoryCreateWithoutPurchaseInput, ProductInventoryUncheckedCreateWithoutPurchaseInput>
  }

  export type ProductInventoryUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: ProductInventoryWhereUniqueInput
    data: XOR<ProductInventoryUpdateWithoutPurchaseInput, ProductInventoryUncheckedUpdateWithoutPurchaseInput>
  }

  export type ProductInventoryUpdateManyWithWhereWithoutPurchaseInput = {
    where: ProductInventoryScalarWhereInput
    data: XOR<ProductInventoryUpdateManyMutationInput, ProductInventoryUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type ProductInventoryScalarWhereInput = {
    AND?: ProductInventoryScalarWhereInput | ProductInventoryScalarWhereInput[]
    OR?: ProductInventoryScalarWhereInput[]
    NOT?: ProductInventoryScalarWhereInput | ProductInventoryScalarWhereInput[]
    id?: UuidFilter<"ProductInventory"> | string
    description?: StringFilter<"ProductInventory"> | string
    quantity?: FloatFilter<"ProductInventory"> | number
    cost?: FloatFilter<"ProductInventory"> | number
    isActive?: BoolFilter<"ProductInventory"> | boolean
    emptiedDate?: DateTimeFilter<"ProductInventory"> | Date | string
    productId?: UuidFilter<"ProductInventory"> | string
    shopId?: UuidFilter<"ProductInventory"> | string
    purchaseId?: UuidFilter<"ProductInventory"> | string
    createdAt?: DateTimeFilter<"ProductInventory"> | Date | string
    createdBy?: UuidFilter<"ProductInventory"> | string
    updatedAt?: DateTimeFilter<"ProductInventory"> | Date | string
    updatedBy?: UuidFilter<"ProductInventory"> | string
  }

  export type ProductCreateWithoutInventoryInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeCreateNestedManyWithoutProductInput
    sale?: ProductSaleCreateNestedManyWithoutProductInput
    purchase?: ProductBatchCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutProductInput
    sale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
    purchase?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
  }

  export type ShopCreateWithoutProductsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredients?: IngredientInventoryCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredients?: IngredientInventoryUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutProductsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
  }

  export type ProductBatchCreateWithoutInventoryInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    batchType?: $Enums.BatchType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutPurchaseInput
  }

  export type ProductBatchUncheckedCreateWithoutInventoryInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    productId: string
    batchType?: $Enums.BatchType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductBatchCreateOrConnectWithoutInventoryInput = {
    where: ProductBatchWhereUniqueInput
    create: XOR<ProductBatchCreateWithoutInventoryInput, ProductBatchUncheckedCreateWithoutInventoryInput>
  }

  export type ProductSaleCreateWithoutInventoryInput = {
    id?: string
    description: string
    quantity: number
    price: number
    saleDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutSaleInput
  }

  export type ProductSaleUncheckedCreateWithoutInventoryInput = {
    id?: string
    description: string
    quantity: number
    price: number
    saleDate?: Date | string
    productId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductSaleCreateOrConnectWithoutInventoryInput = {
    where: ProductSaleWhereUniqueInput
    create: XOR<ProductSaleCreateWithoutInventoryInput, ProductSaleUncheckedCreateWithoutInventoryInput>
  }

  export type ProductSaleCreateManyInventoryInputEnvelope = {
    data: ProductSaleCreateManyInventoryInput | ProductSaleCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutInventoryInput = {
    update: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutProductNestedInput
    sale?: ProductSaleUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutProductNestedInput
    sale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ShopUpsertWithoutProductsInput = {
    update: XOR<ShopUpdateWithoutProductsInput, ShopUncheckedUpdateWithoutProductsInput>
    create: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutProductsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutProductsInput, ShopUncheckedUpdateWithoutProductsInput>
  }

  export type ShopUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredients?: IngredientInventoryUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredients?: IngredientInventoryUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ProductBatchUpsertWithoutInventoryInput = {
    update: XOR<ProductBatchUpdateWithoutInventoryInput, ProductBatchUncheckedUpdateWithoutInventoryInput>
    create: XOR<ProductBatchCreateWithoutInventoryInput, ProductBatchUncheckedCreateWithoutInventoryInput>
    where?: ProductBatchWhereInput
  }

  export type ProductBatchUpdateToOneWithWhereWithoutInventoryInput = {
    where?: ProductBatchWhereInput
    data: XOR<ProductBatchUpdateWithoutInventoryInput, ProductBatchUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductBatchUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batchType?: EnumBatchTypeFieldUpdateOperationsInput | $Enums.BatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutPurchaseNestedInput
  }

  export type ProductBatchUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    batchType?: EnumBatchTypeFieldUpdateOperationsInput | $Enums.BatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSaleUpsertWithWhereUniqueWithoutInventoryInput = {
    where: ProductSaleWhereUniqueInput
    update: XOR<ProductSaleUpdateWithoutInventoryInput, ProductSaleUncheckedUpdateWithoutInventoryInput>
    create: XOR<ProductSaleCreateWithoutInventoryInput, ProductSaleUncheckedCreateWithoutInventoryInput>
  }

  export type ProductSaleUpdateWithWhereUniqueWithoutInventoryInput = {
    where: ProductSaleWhereUniqueInput
    data: XOR<ProductSaleUpdateWithoutInventoryInput, ProductSaleUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductSaleUpdateManyWithWhereWithoutInventoryInput = {
    where: ProductSaleScalarWhereInput
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyWithoutInventoryInput>
  }

  export type ProductSaleScalarWhereInput = {
    AND?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
    OR?: ProductSaleScalarWhereInput[]
    NOT?: ProductSaleScalarWhereInput | ProductSaleScalarWhereInput[]
    id?: UuidFilter<"ProductSale"> | string
    description?: StringFilter<"ProductSale"> | string
    quantity?: FloatFilter<"ProductSale"> | number
    price?: FloatFilter<"ProductSale"> | number
    saleDate?: DateTimeFilter<"ProductSale"> | Date | string
    productId?: UuidFilter<"ProductSale"> | string
    inventoryId?: UuidFilter<"ProductSale"> | string
    createdAt?: DateTimeFilter<"ProductSale"> | Date | string
    createdBy?: UuidFilter<"ProductSale"> | string
    updatedAt?: DateTimeFilter<"ProductSale"> | Date | string
    updatedBy?: UuidFilter<"ProductSale"> | string
  }

  export type ProductCreateWithoutSaleInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryCreateNestedManyWithoutProductInput
    purchase?: ProductBatchCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSaleInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryUncheckedCreateNestedManyWithoutProductInput
    purchase?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSaleInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleInput, ProductUncheckedCreateWithoutSaleInput>
  }

  export type ProductInventoryCreateWithoutSaleInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutInventoryInput
    shop: ShopCreateNestedOneWithoutProductsInput
    purchase: ProductBatchCreateNestedOneWithoutInventoryInput
  }

  export type ProductInventoryUncheckedCreateWithoutSaleInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    productId: string
    shopId: string
    purchaseId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductInventoryCreateOrConnectWithoutSaleInput = {
    where: ProductInventoryWhereUniqueInput
    create: XOR<ProductInventoryCreateWithoutSaleInput, ProductInventoryUncheckedCreateWithoutSaleInput>
  }

  export type ProductUpsertWithoutSaleInput = {
    update: XOR<ProductUpdateWithoutSaleInput, ProductUncheckedUpdateWithoutSaleInput>
    create: XOR<ProductCreateWithoutSaleInput, ProductUncheckedCreateWithoutSaleInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSaleInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSaleInput, ProductUncheckedUpdateWithoutSaleInput>
  }

  export type ProductUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUncheckedUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductInventoryUpsertWithoutSaleInput = {
    update: XOR<ProductInventoryUpdateWithoutSaleInput, ProductInventoryUncheckedUpdateWithoutSaleInput>
    create: XOR<ProductInventoryCreateWithoutSaleInput, ProductInventoryUncheckedCreateWithoutSaleInput>
    where?: ProductInventoryWhereInput
  }

  export type ProductInventoryUpdateToOneWithWhereWithoutSaleInput = {
    where?: ProductInventoryWhereInput
    data: XOR<ProductInventoryUpdateWithoutSaleInput, ProductInventoryUncheckedUpdateWithoutSaleInput>
  }

  export type ProductInventoryUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
    shop?: ShopUpdateOneRequiredWithoutProductsNestedInput
    purchase?: ProductBatchUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type ProductInventoryUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateWithoutProductInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredients?: RecipeIngredientsCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutProductInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutProductInput, RecipeUncheckedCreateWithoutProductInput>
  }

  export type RecipeCreateManyProductInputEnvelope = {
    data: RecipeCreateManyProductInput | RecipeCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductSaleCreateWithoutProductInput = {
    id?: string
    description: string
    quantity: number
    price: number
    saleDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory: ProductInventoryCreateNestedOneWithoutSaleInput
  }

  export type ProductSaleUncheckedCreateWithoutProductInput = {
    id?: string
    description: string
    quantity: number
    price: number
    saleDate?: Date | string
    inventoryId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductSaleCreateOrConnectWithoutProductInput = {
    where: ProductSaleWhereUniqueInput
    create: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput>
  }

  export type ProductSaleCreateManyProductInputEnvelope = {
    data: ProductSaleCreateManyProductInput | ProductSaleCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductInventoryCreateWithoutProductInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    shop: ShopCreateNestedOneWithoutProductsInput
    purchase: ProductBatchCreateNestedOneWithoutInventoryInput
    sale?: ProductSaleCreateNestedManyWithoutInventoryInput
  }

  export type ProductInventoryUncheckedCreateWithoutProductInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    shopId: string
    purchaseId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    sale?: ProductSaleUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type ProductInventoryCreateOrConnectWithoutProductInput = {
    where: ProductInventoryWhereUniqueInput
    create: XOR<ProductInventoryCreateWithoutProductInput, ProductInventoryUncheckedCreateWithoutProductInput>
  }

  export type ProductInventoryCreateManyProductInputEnvelope = {
    data: ProductInventoryCreateManyProductInput | ProductInventoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductBatchCreateWithoutProductInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    batchType?: $Enums.BatchType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory?: ProductInventoryCreateNestedManyWithoutPurchaseInput
  }

  export type ProductBatchUncheckedCreateWithoutProductInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    batchType?: $Enums.BatchType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory?: ProductInventoryUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type ProductBatchCreateOrConnectWithoutProductInput = {
    where: ProductBatchWhereUniqueInput
    create: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput>
  }

  export type ProductBatchCreateManyProductInputEnvelope = {
    data: ProductBatchCreateManyProductInput | ProductBatchCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientsCreateWithoutProductInput = {
    id?: string
    name: string
    description: string
    quantity: number
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    ingredient?: IngredientCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientsUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    description: string
    quantity: number
    recipeId: string
    ingredientId?: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeIngredientsCreateOrConnectWithoutProductInput = {
    where: RecipeIngredientsWhereUniqueInput
    create: XOR<RecipeIngredientsCreateWithoutProductInput, RecipeIngredientsUncheckedCreateWithoutProductInput>
  }

  export type RecipeIngredientsCreateManyProductInputEnvelope = {
    data: RecipeIngredientsCreateManyProductInput | RecipeIngredientsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithWhereUniqueWithoutProductInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutProductInput, RecipeUncheckedUpdateWithoutProductInput>
    create: XOR<RecipeCreateWithoutProductInput, RecipeUncheckedCreateWithoutProductInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutProductInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutProductInput, RecipeUncheckedUpdateWithoutProductInput>
  }

  export type RecipeUpdateManyWithWhereWithoutProductInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutProductInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: UuidFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    productId?: UuidFilter<"Recipe"> | string
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    createdBy?: UuidFilter<"Recipe"> | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedBy?: UuidFilter<"Recipe"> | string
  }

  export type ProductSaleUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSaleWhereUniqueInput
    update: XOR<ProductSaleUpdateWithoutProductInput, ProductSaleUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSaleCreateWithoutProductInput, ProductSaleUncheckedCreateWithoutProductInput>
  }

  export type ProductSaleUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSaleWhereUniqueInput
    data: XOR<ProductSaleUpdateWithoutProductInput, ProductSaleUncheckedUpdateWithoutProductInput>
  }

  export type ProductSaleUpdateManyWithWhereWithoutProductInput = {
    where: ProductSaleScalarWhereInput
    data: XOR<ProductSaleUpdateManyMutationInput, ProductSaleUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductInventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductInventoryWhereUniqueInput
    update: XOR<ProductInventoryUpdateWithoutProductInput, ProductInventoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductInventoryCreateWithoutProductInput, ProductInventoryUncheckedCreateWithoutProductInput>
  }

  export type ProductInventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductInventoryWhereUniqueInput
    data: XOR<ProductInventoryUpdateWithoutProductInput, ProductInventoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductInventoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductInventoryScalarWhereInput
    data: XOR<ProductInventoryUpdateManyMutationInput, ProductInventoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductBatchUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductBatchWhereUniqueInput
    update: XOR<ProductBatchUpdateWithoutProductInput, ProductBatchUncheckedUpdateWithoutProductInput>
    create: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput>
  }

  export type ProductBatchUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductBatchWhereUniqueInput
    data: XOR<ProductBatchUpdateWithoutProductInput, ProductBatchUncheckedUpdateWithoutProductInput>
  }

  export type ProductBatchUpdateManyWithWhereWithoutProductInput = {
    where: ProductBatchScalarWhereInput
    data: XOR<ProductBatchUpdateManyMutationInput, ProductBatchUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductBatchScalarWhereInput = {
    AND?: ProductBatchScalarWhereInput | ProductBatchScalarWhereInput[]
    OR?: ProductBatchScalarWhereInput[]
    NOT?: ProductBatchScalarWhereInput | ProductBatchScalarWhereInput[]
    id?: UuidFilter<"ProductBatch"> | string
    description?: StringFilter<"ProductBatch"> | string
    quantity?: FloatFilter<"ProductBatch"> | number
    cost?: FloatFilter<"ProductBatch"> | number
    purchaseDate?: DateTimeFilter<"ProductBatch"> | Date | string
    expiryDate?: DateTimeFilter<"ProductBatch"> | Date | string
    productId?: UuidFilter<"ProductBatch"> | string
    batchType?: EnumBatchTypeFilter<"ProductBatch"> | $Enums.BatchType
    createdAt?: DateTimeFilter<"ProductBatch"> | Date | string
    createdBy?: UuidFilter<"ProductBatch"> | string
    updatedAt?: DateTimeFilter<"ProductBatch"> | Date | string
    updatedBy?: UuidFilter<"ProductBatch"> | string
  }

  export type RecipeIngredientsUpsertWithWhereUniqueWithoutProductInput = {
    where: RecipeIngredientsWhereUniqueInput
    update: XOR<RecipeIngredientsUpdateWithoutProductInput, RecipeIngredientsUncheckedUpdateWithoutProductInput>
    create: XOR<RecipeIngredientsCreateWithoutProductInput, RecipeIngredientsUncheckedCreateWithoutProductInput>
  }

  export type RecipeIngredientsUpdateWithWhereUniqueWithoutProductInput = {
    where: RecipeIngredientsWhereUniqueInput
    data: XOR<RecipeIngredientsUpdateWithoutProductInput, RecipeIngredientsUncheckedUpdateWithoutProductInput>
  }

  export type RecipeIngredientsUpdateManyWithWhereWithoutProductInput = {
    where: RecipeIngredientsScalarWhereInput
    data: XOR<RecipeIngredientsUpdateManyMutationInput, RecipeIngredientsUncheckedUpdateManyWithoutProductInput>
  }

  export type RecipeCreateWithoutIngredientsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutRecipesInput
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: string
    name: string
    description: string
    productId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientCreateWithoutRecipeIngredientsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory?: IngredientInventoryCreateNestedManyWithoutIngredientInput
    purchase?: IngredientPurchaseCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutRecipeIngredientsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    inventory?: IngredientInventoryUncheckedCreateNestedManyWithoutIngredientInput
    purchase?: IngredientPurchaseUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutRecipeIngredientsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutRecipeIngredientsInput, IngredientUncheckedCreateWithoutRecipeIngredientsInput>
  }

  export type ProductCreateWithoutRecipeIngredientsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeCreateNestedManyWithoutProductInput
    sale?: ProductSaleCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryCreateNestedManyWithoutProductInput
    purchase?: ProductBatchCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRecipeIngredientsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutProductInput
    sale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryUncheckedCreateNestedManyWithoutProductInput
    purchase?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRecipeIngredientsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRecipeIngredientsInput, ProductUncheckedCreateWithoutRecipeIngredientsInput>
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUpsertWithoutRecipeIngredientsInput = {
    update: XOR<IngredientUpdateWithoutRecipeIngredientsInput, IngredientUncheckedUpdateWithoutRecipeIngredientsInput>
    create: XOR<IngredientCreateWithoutRecipeIngredientsInput, IngredientUncheckedCreateWithoutRecipeIngredientsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutRecipeIngredientsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutRecipeIngredientsInput, IngredientUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type IngredientUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: IngredientInventoryUpdateManyWithoutIngredientNestedInput
    purchase?: IngredientPurchaseUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: IngredientInventoryUncheckedUpdateManyWithoutIngredientNestedInput
    purchase?: IngredientPurchaseUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type ProductUpsertWithoutRecipeIngredientsInput = {
    update: XOR<ProductUpdateWithoutRecipeIngredientsInput, ProductUncheckedUpdateWithoutRecipeIngredientsInput>
    create: XOR<ProductCreateWithoutRecipeIngredientsInput, ProductUncheckedCreateWithoutRecipeIngredientsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRecipeIngredientsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRecipeIngredientsInput, ProductUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type ProductUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutProductNestedInput
    sale?: ProductSaleUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutProductNestedInput
    sale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUncheckedUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutRecipesInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    sale?: ProductSaleCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryCreateNestedManyWithoutProductInput
    purchase?: ProductBatchCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    sale?: ProductSaleUncheckedCreateNestedManyWithoutProductInput
    inventory?: ProductInventoryUncheckedCreateNestedManyWithoutProductInput
    purchase?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRecipesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRecipesInput, ProductUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeIngredientsCreateWithoutRecipeInput = {
    id?: string
    name: string
    description: string
    quantity: number
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredient?: IngredientCreateNestedOneWithoutRecipeIngredientsInput
    product?: ProductCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientsUncheckedCreateWithoutRecipeInput = {
    id?: string
    name: string
    description: string
    quantity: number
    ingredientId?: string
    productId?: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeIngredientsCreateOrConnectWithoutRecipeInput = {
    where: RecipeIngredientsWhereUniqueInput
    create: XOR<RecipeIngredientsCreateWithoutRecipeInput, RecipeIngredientsUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientsCreateManyRecipeInputEnvelope = {
    data: RecipeIngredientsCreateManyRecipeInput | RecipeIngredientsCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutRecipesInput = {
    update: XOR<ProductUpdateWithoutRecipesInput, ProductUncheckedUpdateWithoutRecipesInput>
    create: XOR<ProductCreateWithoutRecipesInput, ProductUncheckedCreateWithoutRecipesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRecipesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRecipesInput, ProductUncheckedUpdateWithoutRecipesInput>
  }

  export type ProductUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    sale?: ProductSaleUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    sale?: ProductSaleUncheckedUpdateManyWithoutProductNestedInput
    inventory?: ProductInventoryUncheckedUpdateManyWithoutProductNestedInput
    purchase?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientsWhereUniqueInput
    update: XOR<RecipeIngredientsUpdateWithoutRecipeInput, RecipeIngredientsUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeIngredientsCreateWithoutRecipeInput, RecipeIngredientsUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientsWhereUniqueInput
    data: XOR<RecipeIngredientsUpdateWithoutRecipeInput, RecipeIngredientsUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeIngredientsScalarWhereInput
    data: XOR<RecipeIngredientsUpdateManyMutationInput, RecipeIngredientsUncheckedUpdateManyWithoutRecipeInput>
  }

  export type IngredientInventoryCreateWithoutShopInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    ingredient: IngredientCreateNestedOneWithoutInventoryInput
    purchase?: IngredientPurchaseCreateNestedManyWithoutInventoryInput
  }

  export type IngredientInventoryUncheckedCreateWithoutShopInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    ingredientId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    purchase?: IngredientPurchaseUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type IngredientInventoryCreateOrConnectWithoutShopInput = {
    where: IngredientInventoryWhereUniqueInput
    create: XOR<IngredientInventoryCreateWithoutShopInput, IngredientInventoryUncheckedCreateWithoutShopInput>
  }

  export type IngredientInventoryCreateManyShopInputEnvelope = {
    data: IngredientInventoryCreateManyShopInput | IngredientInventoryCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ProductInventoryCreateWithoutShopInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    product: ProductCreateNestedOneWithoutInventoryInput
    purchase: ProductBatchCreateNestedOneWithoutInventoryInput
    sale?: ProductSaleCreateNestedManyWithoutInventoryInput
  }

  export type ProductInventoryUncheckedCreateWithoutShopInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    productId: string
    purchaseId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
    sale?: ProductSaleUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type ProductInventoryCreateOrConnectWithoutShopInput = {
    where: ProductInventoryWhereUniqueInput
    create: XOR<ProductInventoryCreateWithoutShopInput, ProductInventoryUncheckedCreateWithoutShopInput>
  }

  export type ProductInventoryCreateManyShopInputEnvelope = {
    data: ProductInventoryCreateManyShopInput | ProductInventoryCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type IngredientInventoryUpsertWithWhereUniqueWithoutShopInput = {
    where: IngredientInventoryWhereUniqueInput
    update: XOR<IngredientInventoryUpdateWithoutShopInput, IngredientInventoryUncheckedUpdateWithoutShopInput>
    create: XOR<IngredientInventoryCreateWithoutShopInput, IngredientInventoryUncheckedCreateWithoutShopInput>
  }

  export type IngredientInventoryUpdateWithWhereUniqueWithoutShopInput = {
    where: IngredientInventoryWhereUniqueInput
    data: XOR<IngredientInventoryUpdateWithoutShopInput, IngredientInventoryUncheckedUpdateWithoutShopInput>
  }

  export type IngredientInventoryUpdateManyWithWhereWithoutShopInput = {
    where: IngredientInventoryScalarWhereInput
    data: XOR<IngredientInventoryUpdateManyMutationInput, IngredientInventoryUncheckedUpdateManyWithoutShopInput>
  }

  export type ProductInventoryUpsertWithWhereUniqueWithoutShopInput = {
    where: ProductInventoryWhereUniqueInput
    update: XOR<ProductInventoryUpdateWithoutShopInput, ProductInventoryUncheckedUpdateWithoutShopInput>
    create: XOR<ProductInventoryCreateWithoutShopInput, ProductInventoryUncheckedCreateWithoutShopInput>
  }

  export type ProductInventoryUpdateWithWhereUniqueWithoutShopInput = {
    where: ProductInventoryWhereUniqueInput
    data: XOR<ProductInventoryUpdateWithoutShopInput, ProductInventoryUncheckedUpdateWithoutShopInput>
  }

  export type ProductInventoryUpdateManyWithWhereWithoutShopInput = {
    where: ProductInventoryScalarWhereInput
    data: XOR<ProductInventoryUpdateManyMutationInput, ProductInventoryUncheckedUpdateManyWithoutShopInput>
  }

  export type IngredientPurchaseCreateManyInventoryInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    ingredientId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientPurchaseUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutPurchaseNestedInput
  }

  export type IngredientPurchaseUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientPurchaseUncheckedUpdateManyWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientInventoryCreateManyIngredientInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    shopId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientPurchaseCreateManyIngredientInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    inventoryId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeIngredientsCreateManyIngredientInput = {
    id?: string
    name: string
    description: string
    quantity: number
    recipeId: string
    productId?: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientInventoryUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateOneRequiredWithoutIngredientsNestedInput
    purchase?: IngredientPurchaseUpdateManyWithoutInventoryNestedInput
  }

  export type IngredientInventoryUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shopId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    purchase?: IngredientPurchaseUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type IngredientInventoryUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shopId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientPurchaseUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: IngredientInventoryUpdateOneRequiredWithoutPurchaseNestedInput
  }

  export type IngredientPurchaseUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientPurchaseUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientsUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientsUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientsUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductInventoryCreateManyPurchaseInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    productId: string
    shopId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductInventoryUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
    shop?: ShopUpdateOneRequiredWithoutProductsNestedInput
    sale?: ProductSaleUpdateManyWithoutInventoryNestedInput
  }

  export type ProductInventoryUncheckedUpdateWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    sale?: ProductSaleUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type ProductInventoryUncheckedUpdateManyWithoutPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSaleCreateManyInventoryInput = {
    id?: string
    description: string
    quantity: number
    price: number
    saleDate?: Date | string
    productId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductSaleUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutSaleNestedInput
  }

  export type ProductSaleUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSaleUncheckedUpdateManyWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateManyProductInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductSaleCreateManyProductInput = {
    id?: string
    description: string
    quantity: number
    price: number
    saleDate?: Date | string
    inventoryId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductInventoryCreateManyProductInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    shopId: string
    purchaseId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductBatchCreateManyProductInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    purchaseDate?: Date | string
    expiryDate?: Date | string
    batchType?: $Enums.BatchType
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeIngredientsCreateManyProductInput = {
    id?: string
    name: string
    description: string
    quantity: number
    recipeId: string
    ingredientId?: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredients?: RecipeIngredientsUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredients?: RecipeIngredientsUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSaleUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: ProductInventoryUpdateOneRequiredWithoutSaleNestedInput
  }

  export type ProductSaleUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSaleUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductInventoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateOneRequiredWithoutProductsNestedInput
    purchase?: ProductBatchUpdateOneRequiredWithoutInventoryNestedInput
    sale?: ProductSaleUpdateManyWithoutInventoryNestedInput
  }

  export type ProductInventoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    sale?: ProductSaleUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type ProductInventoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shopId?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBatchUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batchType?: EnumBatchTypeFieldUpdateOperationsInput | $Enums.BatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: ProductInventoryUpdateManyWithoutPurchaseNestedInput
  }

  export type ProductBatchUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batchType?: EnumBatchTypeFieldUpdateOperationsInput | $Enums.BatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    inventory?: ProductInventoryUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type ProductBatchUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batchType?: EnumBatchTypeFieldUpdateOperationsInput | $Enums.BatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientsCreateManyRecipeInput = {
    id?: string
    name: string
    description: string
    quantity: number
    ingredientId?: string
    productId?: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type RecipeIngredientsUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientsUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    ingredientId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientsUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    ingredientId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientInventoryCreateManyShopInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    ingredientId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type ProductInventoryCreateManyShopInput = {
    id?: string
    description: string
    quantity: number
    cost: number
    isActive?: boolean
    emptiedDate?: Date | string
    productId: string
    purchaseId: string
    createdAt?: Date | string
    createdBy: string
    updatedAt?: Date | string
    updatedBy: string
  }

  export type IngredientInventoryUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutInventoryNestedInput
    purchase?: IngredientPurchaseUpdateManyWithoutInventoryNestedInput
  }

  export type IngredientInventoryUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    purchase?: IngredientPurchaseUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type IngredientInventoryUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProductInventoryUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
    purchase?: ProductBatchUpdateOneRequiredWithoutInventoryNestedInput
    sale?: ProductSaleUpdateManyWithoutInventoryNestedInput
  }

  export type ProductInventoryUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    sale?: ProductSaleUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type ProductInventoryUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emptiedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
    purchaseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
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