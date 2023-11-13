/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model hashtag
 *
 */
export type hashtag = $Result.DefaultSelection<Prisma.$hashtagPayload>;
/**
 * Model startup
 *
 */
export type startup = $Result.DefaultSelection<Prisma.$startupPayload>;
/**
 * Model trend
 *
 */
export type trend = $Result.DefaultSelection<Prisma.$trendPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model video
 *
 */
export type video = $Result.DefaultSelection<Prisma.$videoPayload>;
/**
 * Model video_trend
 *
 */
export type video_trend = $Result.DefaultSelection<Prisma.$video_trendPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Hashtags
 * const hashtags = await prisma.hashtag.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Hashtags
   * const hashtags = await prisma.hashtag.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.hashtag`: Exposes CRUD operations for the **hashtag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Hashtags
   * const hashtags = await prisma.hashtag.findMany()
   * ```
   */
  get hashtag(): Prisma.hashtagDelegate<ExtArgs>;

  /**
   * `prisma.startup`: Exposes CRUD operations for the **startup** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Startups
   * const startups = await prisma.startup.findMany()
   * ```
   */
  get startup(): Prisma.startupDelegate<ExtArgs>;

  /**
   * `prisma.trend`: Exposes CRUD operations for the **trend** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Trends
   * const trends = await prisma.trend.findMany()
   * ```
   */
  get trend(): Prisma.trendDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **video** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Videos
   * const videos = await prisma.video.findMany()
   * ```
   */
  get video(): Prisma.videoDelegate<ExtArgs>;

  /**
   * `prisma.video_trend`: Exposes CRUD operations for the **video_trend** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Video_trends
   * const video_trends = await prisma.video_trend.findMany()
   * ```
   */
  get video_trend(): Prisma.video_trendDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    hashtag: 'hashtag';
    startup: 'startup';
    trend: 'trend';
    user: 'user';
    video: 'video';
    video_trend: 'video_trend';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'hashtag' | 'startup' | 'trend' | 'user' | 'video' | 'video_trend';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      hashtag: {
        payload: Prisma.$hashtagPayload<ExtArgs>;
        fields: Prisma.hashtagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.hashtagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hashtagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.hashtagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hashtagPayload>;
          };
          findFirst: {
            args: Prisma.hashtagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hashtagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.hashtagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hashtagPayload>;
          };
          findMany: {
            args: Prisma.hashtagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hashtagPayload>[];
          };
          create: {
            args: Prisma.hashtagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hashtagPayload>;
          };
          createMany: {
            args: Prisma.hashtagCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.hashtagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hashtagPayload>;
          };
          update: {
            args: Prisma.hashtagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hashtagPayload>;
          };
          deleteMany: {
            args: Prisma.hashtagDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.hashtagUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.hashtagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hashtagPayload>;
          };
          aggregate: {
            args: Prisma.HashtagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHashtag>;
          };
          groupBy: {
            args: Prisma.hashtagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<HashtagGroupByOutputType>[];
          };
          count: {
            args: Prisma.hashtagCountArgs<ExtArgs>;
            result: $Utils.Optional<HashtagCountAggregateOutputType> | number;
          };
        };
      };
      startup: {
        payload: Prisma.$startupPayload<ExtArgs>;
        fields: Prisma.startupFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.startupFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.startupFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          findFirst: {
            args: Prisma.startupFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.startupFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          findMany: {
            args: Prisma.startupFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>[];
          };
          create: {
            args: Prisma.startupCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          createMany: {
            args: Prisma.startupCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.startupDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          update: {
            args: Prisma.startupUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          deleteMany: {
            args: Prisma.startupDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.startupUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.startupUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$startupPayload>;
          };
          aggregate: {
            args: Prisma.StartupAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStartup>;
          };
          groupBy: {
            args: Prisma.startupGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StartupGroupByOutputType>[];
          };
          count: {
            args: Prisma.startupCountArgs<ExtArgs>;
            result: $Utils.Optional<StartupCountAggregateOutputType> | number;
          };
        };
      };
      trend: {
        payload: Prisma.$trendPayload<ExtArgs>;
        fields: Prisma.trendFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.trendFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trendPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.trendFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trendPayload>;
          };
          findFirst: {
            args: Prisma.trendFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trendPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.trendFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trendPayload>;
          };
          findMany: {
            args: Prisma.trendFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trendPayload>[];
          };
          create: {
            args: Prisma.trendCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trendPayload>;
          };
          createMany: {
            args: Prisma.trendCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.trendDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trendPayload>;
          };
          update: {
            args: Prisma.trendUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trendPayload>;
          };
          deleteMany: {
            args: Prisma.trendDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.trendUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.trendUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trendPayload>;
          };
          aggregate: {
            args: Prisma.TrendAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTrend>;
          };
          groupBy: {
            args: Prisma.trendGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TrendGroupByOutputType>[];
          };
          count: {
            args: Prisma.trendCountArgs<ExtArgs>;
            result: $Utils.Optional<TrendCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      video: {
        payload: Prisma.$videoPayload<ExtArgs>;
        fields: Prisma.videoFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.videoFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.videoFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          findFirst: {
            args: Prisma.videoFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.videoFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          findMany: {
            args: Prisma.videoFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>[];
          };
          create: {
            args: Prisma.videoCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          createMany: {
            args: Prisma.videoCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.videoDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          update: {
            args: Prisma.videoUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          deleteMany: {
            args: Prisma.videoDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.videoUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.videoUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$videoPayload>;
          };
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVideo>;
          };
          groupBy: {
            args: Prisma.videoGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VideoGroupByOutputType>[];
          };
          count: {
            args: Prisma.videoCountArgs<ExtArgs>;
            result: $Utils.Optional<VideoCountAggregateOutputType> | number;
          };
        };
      };
      video_trend: {
        payload: Prisma.$video_trendPayload<ExtArgs>;
        fields: Prisma.video_trendFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.video_trendFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$video_trendPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.video_trendFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$video_trendPayload>;
          };
          findFirst: {
            args: Prisma.video_trendFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$video_trendPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.video_trendFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$video_trendPayload>;
          };
          findMany: {
            args: Prisma.video_trendFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$video_trendPayload>[];
          };
          create: {
            args: Prisma.video_trendCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$video_trendPayload>;
          };
          createMany: {
            args: Prisma.video_trendCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.video_trendDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$video_trendPayload>;
          };
          update: {
            args: Prisma.video_trendUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$video_trendPayload>;
          };
          deleteMany: {
            args: Prisma.video_trendDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.video_trendUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.video_trendUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$video_trendPayload>;
          };
          aggregate: {
            args: Prisma.Video_trendAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVideo_trend>;
          };
          groupBy: {
            args: Prisma.video_trendGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Video_trendGroupByOutputType>[];
          };
          count: {
            args: Prisma.video_trendCountArgs<ExtArgs>;
            result: $Utils.Optional<Video_trendCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type StartupCountOutputType
   */

  export type StartupCountOutputType = {
    user: number;
  };

  export type StartupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | StartupCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * StartupCountOutputType without action
   */
  export type StartupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupCountOutputType
     */
    select?: StartupCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * StartupCountOutputType without action
   */
  export type StartupCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type TrendCountOutputType
   */

  export type TrendCountOutputType = {
    video_trend: number;
  };

  export type TrendCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_trend?: boolean | TrendCountOutputTypeCountVideo_trendArgs;
  };

  // Custom InputTypes

  /**
   * TrendCountOutputType without action
   */
  export type TrendCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendCountOutputType
     */
    select?: TrendCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TrendCountOutputType without action
   */
  export type TrendCountOutputTypeCountVideo_trendArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: video_trendWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    video: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | UserCountOutputTypeCountVideoArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoWhereInput;
  };

  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    hashtag: number;
    video_trend: number;
  };

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hashtag?: boolean | VideoCountOutputTypeCountHashtagArgs;
    video_trend?: boolean | VideoCountOutputTypeCountVideo_trendArgs;
  };

  // Custom InputTypes

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountHashtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: hashtagWhereInput;
    };

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountVideo_trendArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: video_trendWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model hashtag
   */

  export type AggregateHashtag = {
    _count: HashtagCountAggregateOutputType | null;
    _min: HashtagMinAggregateOutputType | null;
    _max: HashtagMaxAggregateOutputType | null;
  };

  export type HashtagMinAggregateOutputType = {
    id: string | null;
    tag: string | null;
    video_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type HashtagMaxAggregateOutputType = {
    id: string | null;
    tag: string | null;
    video_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type HashtagCountAggregateOutputType = {
    id: number;
    tag: number;
    video_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type HashtagMinAggregateInputType = {
    id?: true;
    tag?: true;
    video_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type HashtagMaxAggregateInputType = {
    id?: true;
    tag?: true;
    video_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type HashtagCountAggregateInputType = {
    id?: true;
    tag?: true;
    video_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type HashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hashtag to aggregate.
     */
    where?: hashtagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hashtags to fetch.
     */
    orderBy?: hashtagOrderByWithRelationInput | hashtagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: hashtagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hashtags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hashtags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned hashtags
     **/
    _count?: true | HashtagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: HashtagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: HashtagMaxAggregateInputType;
  };

  export type GetHashtagAggregateType<T extends HashtagAggregateArgs> = {
    [P in keyof T & keyof AggregateHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtag[P]>
      : GetScalarType<T[P], AggregateHashtag[P]>;
  };

  export type hashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hashtagWhereInput;
    orderBy?: hashtagOrderByWithAggregationInput | hashtagOrderByWithAggregationInput[];
    by: HashtagScalarFieldEnum[] | HashtagScalarFieldEnum;
    having?: hashtagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HashtagCountAggregateInputType | true;
    _min?: HashtagMinAggregateInputType;
    _max?: HashtagMaxAggregateInputType;
  };

  export type HashtagGroupByOutputType = {
    id: string;
    tag: string;
    video_id: string;
    created_at: Date;
    updated_at: Date;
    _count: HashtagCountAggregateOutputType | null;
    _min: HashtagMinAggregateOutputType | null;
    _max: HashtagMaxAggregateOutputType | null;
  };

  type GetHashtagGroupByPayload<T extends hashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HashtagGroupByOutputType, T['by']> & {
        [P in keyof T & keyof HashtagGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], HashtagGroupByOutputType[P]>
          : GetScalarType<T[P], HashtagGroupByOutputType[P]>;
      }
    >
  >;

  export type hashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      tag?: boolean;
      video_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      video?: boolean | videoDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['hashtag']
  >;

  export type hashtagSelectScalar = {
    id?: boolean;
    tag?: boolean;
    video_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type hashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | videoDefaultArgs<ExtArgs>;
  };

  export type $hashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'hashtag';
    objects: {
      video: Prisma.$videoPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        tag: string;
        video_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['hashtag']
    >;
    composites: {};
  };

  type hashtagGetPayload<S extends boolean | null | undefined | hashtagDefaultArgs> = $Result.GetResult<
    Prisma.$hashtagPayload,
    S
  >;

  type hashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    hashtagFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: HashtagCountAggregateInputType | true;
  };

  export interface hashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hashtag']; meta: { name: 'hashtag' } };
    /**
     * Find zero or one Hashtag that matches the filter.
     * @param {hashtagFindUniqueArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends hashtagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hashtagFindUniqueArgs<ExtArgs>>,
    ): Prisma__hashtagClient<$Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Hashtag that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {hashtagFindUniqueOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends hashtagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hashtagFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__hashtagClient<
      $Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Hashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagFindFirstArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends hashtagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hashtagFindFirstArgs<ExtArgs>>,
    ): Prisma__hashtagClient<$Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Hashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagFindFirstOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends hashtagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hashtagFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__hashtagClient<$Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtag.findMany()
     *
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends hashtagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hashtagFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Hashtag.
     * @param {hashtagCreateArgs} args - Arguments to create a Hashtag.
     * @example
     * // Create one Hashtag
     * const Hashtag = await prisma.hashtag.create({
     *   data: {
     *     // ... data to create a Hashtag
     *   }
     * })
     *
     **/
    create<T extends hashtagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hashtagCreateArgs<ExtArgs>>,
    ): Prisma__hashtagClient<$Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Hashtags.
     *     @param {hashtagCreateManyArgs} args - Arguments to create many Hashtags.
     *     @example
     *     // Create many Hashtags
     *     const hashtag = await prisma.hashtag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends hashtagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hashtagCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Hashtag.
     * @param {hashtagDeleteArgs} args - Arguments to delete one Hashtag.
     * @example
     * // Delete one Hashtag
     * const Hashtag = await prisma.hashtag.delete({
     *   where: {
     *     // ... filter to delete one Hashtag
     *   }
     * })
     *
     **/
    delete<T extends hashtagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hashtagDeleteArgs<ExtArgs>>,
    ): Prisma__hashtagClient<$Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Hashtag.
     * @param {hashtagUpdateArgs} args - Arguments to update one Hashtag.
     * @example
     * // Update one Hashtag
     * const hashtag = await prisma.hashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends hashtagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hashtagUpdateArgs<ExtArgs>>,
    ): Prisma__hashtagClient<$Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Hashtags.
     * @param {hashtagDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends hashtagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hashtagDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends hashtagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hashtagUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Hashtag.
     * @param {hashtagUpsertArgs} args - Arguments to update or create a Hashtag.
     * @example
     * // Update or create a Hashtag
     * const hashtag = await prisma.hashtag.upsert({
     *   create: {
     *     // ... data to create a Hashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtag we want to update
     *   }
     * })
     **/
    upsert<T extends hashtagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hashtagUpsertArgs<ExtArgs>>,
    ): Prisma__hashtagClient<$Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtag.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
     **/
    count<T extends hashtagCountArgs>(
      args?: Subset<T, hashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HashtagAggregateArgs>(
      args: Subset<T, HashtagAggregateArgs>,
    ): Prisma.PrismaPromise<GetHashtagAggregateType<T>>;

    /**
     * Group by Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagGroupByArgs} args - Group by arguments.
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
      T extends hashtagGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hashtagGroupByArgs['orderBy'] }
        : { orderBy?: hashtagGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, hashtagGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the hashtag model
     */
    readonly fields: hashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hashtagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video<T extends videoDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, videoDefaultArgs<ExtArgs>>,
    ): Prisma__videoClient<
      $Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the hashtag model
   */
  interface hashtagFieldRefs {
    readonly id: FieldRef<'hashtag', 'String'>;
    readonly tag: FieldRef<'hashtag', 'String'>;
    readonly video_id: FieldRef<'hashtag', 'String'>;
    readonly created_at: FieldRef<'hashtag', 'DateTime'>;
    readonly updated_at: FieldRef<'hashtag', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * hashtag findUnique
   */
  export type hashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    /**
     * Filter, which hashtag to fetch.
     */
    where: hashtagWhereUniqueInput;
  };

  /**
   * hashtag findUniqueOrThrow
   */
  export type hashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    /**
     * Filter, which hashtag to fetch.
     */
    where: hashtagWhereUniqueInput;
  };

  /**
   * hashtag findFirst
   */
  export type hashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    /**
     * Filter, which hashtag to fetch.
     */
    where?: hashtagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hashtags to fetch.
     */
    orderBy?: hashtagOrderByWithRelationInput | hashtagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hashtags.
     */
    cursor?: hashtagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hashtags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hashtags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[];
  };

  /**
   * hashtag findFirstOrThrow
   */
  export type hashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    /**
     * Filter, which hashtag to fetch.
     */
    where?: hashtagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hashtags to fetch.
     */
    orderBy?: hashtagOrderByWithRelationInput | hashtagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hashtags.
     */
    cursor?: hashtagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hashtags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hashtags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[];
  };

  /**
   * hashtag findMany
   */
  export type hashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    /**
     * Filter, which hashtags to fetch.
     */
    where?: hashtagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hashtags to fetch.
     */
    orderBy?: hashtagOrderByWithRelationInput | hashtagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing hashtags.
     */
    cursor?: hashtagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hashtags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hashtags.
     */
    skip?: number;
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[];
  };

  /**
   * hashtag create
   */
  export type hashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    /**
     * The data needed to create a hashtag.
     */
    data: XOR<hashtagCreateInput, hashtagUncheckedCreateInput>;
  };

  /**
   * hashtag createMany
   */
  export type hashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hashtags.
     */
    data: hashtagCreateManyInput | hashtagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * hashtag update
   */
  export type hashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    /**
     * The data needed to update a hashtag.
     */
    data: XOR<hashtagUpdateInput, hashtagUncheckedUpdateInput>;
    /**
     * Choose, which hashtag to update.
     */
    where: hashtagWhereUniqueInput;
  };

  /**
   * hashtag updateMany
   */
  export type hashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hashtags.
     */
    data: XOR<hashtagUpdateManyMutationInput, hashtagUncheckedUpdateManyInput>;
    /**
     * Filter which hashtags to update
     */
    where?: hashtagWhereInput;
  };

  /**
   * hashtag upsert
   */
  export type hashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    /**
     * The filter to search for the hashtag to update in case it exists.
     */
    where: hashtagWhereUniqueInput;
    /**
     * In case the hashtag found by the `where` argument doesn't exist, create a new hashtag with this data.
     */
    create: XOR<hashtagCreateInput, hashtagUncheckedCreateInput>;
    /**
     * In case the hashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hashtagUpdateInput, hashtagUncheckedUpdateInput>;
  };

  /**
   * hashtag delete
   */
  export type hashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    /**
     * Filter which hashtag to delete.
     */
    where: hashtagWhereUniqueInput;
  };

  /**
   * hashtag deleteMany
   */
  export type hashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hashtags to delete
     */
    where?: hashtagWhereInput;
  };

  /**
   * hashtag without action
   */
  export type hashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
  };

  /**
   * Model startup
   */

  export type AggregateStartup = {
    _count: StartupCountAggregateOutputType | null;
    _min: StartupMinAggregateOutputType | null;
    _max: StartupMaxAggregateOutputType | null;
  };

  export type StartupMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StartupMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StartupCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type StartupMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StartupMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StartupCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type StartupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which startup to aggregate.
     */
    where?: startupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of startups to fetch.
     */
    orderBy?: startupOrderByWithRelationInput | startupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: startupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` startups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` startups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned startups
     **/
    _count?: true | StartupCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StartupMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StartupMaxAggregateInputType;
  };

  export type GetStartupAggregateType<T extends StartupAggregateArgs> = {
    [P in keyof T & keyof AggregateStartup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStartup[P]>
      : GetScalarType<T[P], AggregateStartup[P]>;
  };

  export type startupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: startupWhereInput;
    orderBy?: startupOrderByWithAggregationInput | startupOrderByWithAggregationInput[];
    by: StartupScalarFieldEnum[] | StartupScalarFieldEnum;
    having?: startupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StartupCountAggregateInputType | true;
    _min?: StartupMinAggregateInputType;
    _max?: StartupMaxAggregateInputType;
  };

  export type StartupGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: StartupCountAggregateOutputType | null;
    _min: StartupMinAggregateOutputType | null;
    _max: StartupMaxAggregateOutputType | null;
  };

  type GetStartupGroupByPayload<T extends startupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StartupGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StartupGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StartupGroupByOutputType[P]>
          : GetScalarType<T[P], StartupGroupByOutputType[P]>;
      }
    >
  >;

  export type startupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | startup$userArgs<ExtArgs>;
      _count?: boolean | StartupCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['startup']
  >;

  export type startupSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type startupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | startup$userArgs<ExtArgs>;
    _count?: boolean | StartupCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $startupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'startup';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['startup']
    >;
    composites: {};
  };

  type startupGetPayload<S extends boolean | null | undefined | startupDefaultArgs> = $Result.GetResult<
    Prisma.$startupPayload,
    S
  >;

  type startupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    startupFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: StartupCountAggregateInputType | true;
  };

  export interface startupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['startup']; meta: { name: 'startup' } };
    /**
     * Find zero or one Startup that matches the filter.
     * @param {startupFindUniqueArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends startupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, startupFindUniqueArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Startup that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {startupFindUniqueOrThrowArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends startupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, startupFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__startupClient<
      $Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Startup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupFindFirstArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends startupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, startupFindFirstArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Startup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupFindFirstOrThrowArgs} args - Arguments to find a Startup
     * @example
     * // Get one Startup
     * const startup = await prisma.startup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends startupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, startupFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Startups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Startups
     * const startups = await prisma.startup.findMany()
     *
     * // Get first 10 Startups
     * const startups = await prisma.startup.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const startupWithIdOnly = await prisma.startup.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends startupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, startupFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Startup.
     * @param {startupCreateArgs} args - Arguments to create a Startup.
     * @example
     * // Create one Startup
     * const Startup = await prisma.startup.create({
     *   data: {
     *     // ... data to create a Startup
     *   }
     * })
     *
     **/
    create<T extends startupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, startupCreateArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Startups.
     *     @param {startupCreateManyArgs} args - Arguments to create many Startups.
     *     @example
     *     // Create many Startups
     *     const startup = await prisma.startup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends startupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, startupCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Startup.
     * @param {startupDeleteArgs} args - Arguments to delete one Startup.
     * @example
     * // Delete one Startup
     * const Startup = await prisma.startup.delete({
     *   where: {
     *     // ... filter to delete one Startup
     *   }
     * })
     *
     **/
    delete<T extends startupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, startupDeleteArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Startup.
     * @param {startupUpdateArgs} args - Arguments to update one Startup.
     * @example
     * // Update one Startup
     * const startup = await prisma.startup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends startupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, startupUpdateArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Startups.
     * @param {startupDeleteManyArgs} args - Arguments to filter Startups to delete.
     * @example
     * // Delete a few Startups
     * const { count } = await prisma.startup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends startupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, startupDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Startups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Startups
     * const startup = await prisma.startup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends startupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, startupUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Startup.
     * @param {startupUpsertArgs} args - Arguments to update or create a Startup.
     * @example
     * // Update or create a Startup
     * const startup = await prisma.startup.upsert({
     *   create: {
     *     // ... data to create a Startup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Startup we want to update
     *   }
     * })
     **/
    upsert<T extends startupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, startupUpsertArgs<ExtArgs>>,
    ): Prisma__startupClient<$Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Startups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupCountArgs} args - Arguments to filter Startups to count.
     * @example
     * // Count the number of Startups
     * const count = await prisma.startup.count({
     *   where: {
     *     // ... the filter for the Startups we want to count
     *   }
     * })
     **/
    count<T extends startupCountArgs>(
      args?: Subset<T, startupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StartupCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Startup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StartupAggregateArgs>(
      args: Subset<T, StartupAggregateArgs>,
    ): Prisma.PrismaPromise<GetStartupAggregateType<T>>;

    /**
     * Group by Startup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startupGroupByArgs} args - Group by arguments.
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
      T extends startupGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: startupGroupByArgs['orderBy'] }
        : { orderBy?: startupGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, startupGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStartupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the startup model
     */
    readonly fields: startupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for startup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__startupClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends startup$userArgs<ExtArgs> = {}>(
      args?: Subset<T, startup$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the startup model
   */
  interface startupFieldRefs {
    readonly id: FieldRef<'startup', 'String'>;
    readonly description: FieldRef<'startup', 'String'>;
    readonly name: FieldRef<'startup', 'String'>;
    readonly created_at: FieldRef<'startup', 'DateTime'>;
    readonly updated_at: FieldRef<'startup', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * startup findUnique
   */
  export type startupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    /**
     * Filter, which startup to fetch.
     */
    where: startupWhereUniqueInput;
  };

  /**
   * startup findUniqueOrThrow
   */
  export type startupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    /**
     * Filter, which startup to fetch.
     */
    where: startupWhereUniqueInput;
  };

  /**
   * startup findFirst
   */
  export type startupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    /**
     * Filter, which startup to fetch.
     */
    where?: startupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of startups to fetch.
     */
    orderBy?: startupOrderByWithRelationInput | startupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for startups.
     */
    cursor?: startupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` startups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` startups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of startups.
     */
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[];
  };

  /**
   * startup findFirstOrThrow
   */
  export type startupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    /**
     * Filter, which startup to fetch.
     */
    where?: startupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of startups to fetch.
     */
    orderBy?: startupOrderByWithRelationInput | startupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for startups.
     */
    cursor?: startupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` startups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` startups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of startups.
     */
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[];
  };

  /**
   * startup findMany
   */
  export type startupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    /**
     * Filter, which startups to fetch.
     */
    where?: startupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of startups to fetch.
     */
    orderBy?: startupOrderByWithRelationInput | startupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing startups.
     */
    cursor?: startupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` startups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` startups.
     */
    skip?: number;
    distinct?: StartupScalarFieldEnum | StartupScalarFieldEnum[];
  };

  /**
   * startup create
   */
  export type startupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    /**
     * The data needed to create a startup.
     */
    data: XOR<startupCreateInput, startupUncheckedCreateInput>;
  };

  /**
   * startup createMany
   */
  export type startupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many startups.
     */
    data: startupCreateManyInput | startupCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * startup update
   */
  export type startupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    /**
     * The data needed to update a startup.
     */
    data: XOR<startupUpdateInput, startupUncheckedUpdateInput>;
    /**
     * Choose, which startup to update.
     */
    where: startupWhereUniqueInput;
  };

  /**
   * startup updateMany
   */
  export type startupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update startups.
     */
    data: XOR<startupUpdateManyMutationInput, startupUncheckedUpdateManyInput>;
    /**
     * Filter which startups to update
     */
    where?: startupWhereInput;
  };

  /**
   * startup upsert
   */
  export type startupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    /**
     * The filter to search for the startup to update in case it exists.
     */
    where: startupWhereUniqueInput;
    /**
     * In case the startup found by the `where` argument doesn't exist, create a new startup with this data.
     */
    create: XOR<startupCreateInput, startupUncheckedCreateInput>;
    /**
     * In case the startup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<startupUpdateInput, startupUncheckedUpdateInput>;
  };

  /**
   * startup delete
   */
  export type startupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    /**
     * Filter which startup to delete.
     */
    where: startupWhereUniqueInput;
  };

  /**
   * startup deleteMany
   */
  export type startupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which startups to delete
     */
    where?: startupWhereInput;
  };

  /**
   * startup.user
   */
  export type startup$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * startup without action
   */
  export type startupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
  };

  /**
   * Model trend
   */

  export type AggregateTrend = {
    _count: TrendCountAggregateOutputType | null;
    _min: TrendMinAggregateOutputType | null;
    _max: TrendMaxAggregateOutputType | null;
  };

  export type TrendMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TrendMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TrendCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TrendMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TrendMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TrendCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TrendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trend to aggregate.
     */
    where?: trendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trends to fetch.
     */
    orderBy?: trendOrderByWithRelationInput | trendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: trendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trends.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned trends
     **/
    _count?: true | TrendCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TrendMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TrendMaxAggregateInputType;
  };

  export type GetTrendAggregateType<T extends TrendAggregateArgs> = {
    [P in keyof T & keyof AggregateTrend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrend[P]>
      : GetScalarType<T[P], AggregateTrend[P]>;
  };

  export type trendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trendWhereInput;
    orderBy?: trendOrderByWithAggregationInput | trendOrderByWithAggregationInput[];
    by: TrendScalarFieldEnum[] | TrendScalarFieldEnum;
    having?: trendScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrendCountAggregateInputType | true;
    _min?: TrendMinAggregateInputType;
    _max?: TrendMaxAggregateInputType;
  };

  export type TrendGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: TrendCountAggregateOutputType | null;
    _min: TrendMinAggregateOutputType | null;
    _max: TrendMaxAggregateOutputType | null;
  };

  type GetTrendGroupByPayload<T extends trendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TrendGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TrendGroupByOutputType[P]>
          : GetScalarType<T[P], TrendGroupByOutputType[P]>;
      }
    >
  >;

  export type trendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      video_trend?: boolean | trend$video_trendArgs<ExtArgs>;
      _count?: boolean | TrendCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['trend']
  >;

  export type trendSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type trendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_trend?: boolean | trend$video_trendArgs<ExtArgs>;
    _count?: boolean | TrendCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $trendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'trend';
    objects: {
      video_trend: Prisma.$video_trendPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['trend']
    >;
    composites: {};
  };

  type trendGetPayload<S extends boolean | null | undefined | trendDefaultArgs> = $Result.GetResult<
    Prisma.$trendPayload,
    S
  >;

  type trendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    trendFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TrendCountAggregateInputType | true;
  };

  export interface trendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trend']; meta: { name: 'trend' } };
    /**
     * Find zero or one Trend that matches the filter.
     * @param {trendFindUniqueArgs} args - Arguments to find a Trend
     * @example
     * // Get one Trend
     * const trend = await prisma.trend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends trendFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, trendFindUniqueArgs<ExtArgs>>,
    ): Prisma__trendClient<$Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Trend that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {trendFindUniqueOrThrowArgs} args - Arguments to find a Trend
     * @example
     * // Get one Trend
     * const trend = await prisma.trend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends trendFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trendFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__trendClient<$Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Trend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trendFindFirstArgs} args - Arguments to find a Trend
     * @example
     * // Get one Trend
     * const trend = await prisma.trend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends trendFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, trendFindFirstArgs<ExtArgs>>,
    ): Prisma__trendClient<$Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Trend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trendFindFirstOrThrowArgs} args - Arguments to find a Trend
     * @example
     * // Get one Trend
     * const trend = await prisma.trend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends trendFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trendFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__trendClient<$Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Trends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trendFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trends
     * const trends = await prisma.trend.findMany()
     *
     * // Get first 10 Trends
     * const trends = await prisma.trend.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const trendWithIdOnly = await prisma.trend.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends trendFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trendFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Trend.
     * @param {trendCreateArgs} args - Arguments to create a Trend.
     * @example
     * // Create one Trend
     * const Trend = await prisma.trend.create({
     *   data: {
     *     // ... data to create a Trend
     *   }
     * })
     *
     **/
    create<T extends trendCreateArgs<ExtArgs>>(
      args: SelectSubset<T, trendCreateArgs<ExtArgs>>,
    ): Prisma__trendClient<$Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Trends.
     *     @param {trendCreateManyArgs} args - Arguments to create many Trends.
     *     @example
     *     // Create many Trends
     *     const trend = await prisma.trend.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends trendCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trendCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Trend.
     * @param {trendDeleteArgs} args - Arguments to delete one Trend.
     * @example
     * // Delete one Trend
     * const Trend = await prisma.trend.delete({
     *   where: {
     *     // ... filter to delete one Trend
     *   }
     * })
     *
     **/
    delete<T extends trendDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, trendDeleteArgs<ExtArgs>>,
    ): Prisma__trendClient<$Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Trend.
     * @param {trendUpdateArgs} args - Arguments to update one Trend.
     * @example
     * // Update one Trend
     * const trend = await prisma.trend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends trendUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, trendUpdateArgs<ExtArgs>>,
    ): Prisma__trendClient<$Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Trends.
     * @param {trendDeleteManyArgs} args - Arguments to filter Trends to delete.
     * @example
     * // Delete a few Trends
     * const { count } = await prisma.trend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends trendDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trendDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Trends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trends
     * const trend = await prisma.trend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends trendUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, trendUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Trend.
     * @param {trendUpsertArgs} args - Arguments to update or create a Trend.
     * @example
     * // Update or create a Trend
     * const trend = await prisma.trend.upsert({
     *   create: {
     *     // ... data to create a Trend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trend we want to update
     *   }
     * })
     **/
    upsert<T extends trendUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, trendUpsertArgs<ExtArgs>>,
    ): Prisma__trendClient<$Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Trends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trendCountArgs} args - Arguments to filter Trends to count.
     * @example
     * // Count the number of Trends
     * const count = await prisma.trend.count({
     *   where: {
     *     // ... the filter for the Trends we want to count
     *   }
     * })
     **/
    count<T extends trendCountArgs>(
      args?: Subset<T, trendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Trend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrendAggregateArgs>(
      args: Subset<T, TrendAggregateArgs>,
    ): Prisma.PrismaPromise<GetTrendAggregateType<T>>;

    /**
     * Group by Trend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trendGroupByArgs} args - Group by arguments.
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
      T extends trendGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trendGroupByArgs['orderBy'] }
        : { orderBy?: trendGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, trendGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTrendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the trend model
     */
    readonly fields: trendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trendClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video_trend<T extends trend$video_trendArgs<ExtArgs> = {}>(
      args?: Subset<T, trend$video_trendArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the trend model
   */
  interface trendFieldRefs {
    readonly id: FieldRef<'trend', 'String'>;
    readonly name: FieldRef<'trend', 'String'>;
    readonly description: FieldRef<'trend', 'String'>;
    readonly created_at: FieldRef<'trend', 'DateTime'>;
    readonly updated_at: FieldRef<'trend', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * trend findUnique
   */
  export type trendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
    /**
     * Filter, which trend to fetch.
     */
    where: trendWhereUniqueInput;
  };

  /**
   * trend findUniqueOrThrow
   */
  export type trendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
    /**
     * Filter, which trend to fetch.
     */
    where: trendWhereUniqueInput;
  };

  /**
   * trend findFirst
   */
  export type trendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
    /**
     * Filter, which trend to fetch.
     */
    where?: trendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trends to fetch.
     */
    orderBy?: trendOrderByWithRelationInput | trendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trends.
     */
    cursor?: trendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trends.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trends.
     */
    distinct?: TrendScalarFieldEnum | TrendScalarFieldEnum[];
  };

  /**
   * trend findFirstOrThrow
   */
  export type trendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
    /**
     * Filter, which trend to fetch.
     */
    where?: trendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trends to fetch.
     */
    orderBy?: trendOrderByWithRelationInput | trendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trends.
     */
    cursor?: trendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trends.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trends.
     */
    distinct?: TrendScalarFieldEnum | TrendScalarFieldEnum[];
  };

  /**
   * trend findMany
   */
  export type trendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
    /**
     * Filter, which trends to fetch.
     */
    where?: trendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trends to fetch.
     */
    orderBy?: trendOrderByWithRelationInput | trendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing trends.
     */
    cursor?: trendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trends.
     */
    skip?: number;
    distinct?: TrendScalarFieldEnum | TrendScalarFieldEnum[];
  };

  /**
   * trend create
   */
  export type trendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
    /**
     * The data needed to create a trend.
     */
    data: XOR<trendCreateInput, trendUncheckedCreateInput>;
  };

  /**
   * trend createMany
   */
  export type trendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trends.
     */
    data: trendCreateManyInput | trendCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * trend update
   */
  export type trendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
    /**
     * The data needed to update a trend.
     */
    data: XOR<trendUpdateInput, trendUncheckedUpdateInput>;
    /**
     * Choose, which trend to update.
     */
    where: trendWhereUniqueInput;
  };

  /**
   * trend updateMany
   */
  export type trendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trends.
     */
    data: XOR<trendUpdateManyMutationInput, trendUncheckedUpdateManyInput>;
    /**
     * Filter which trends to update
     */
    where?: trendWhereInput;
  };

  /**
   * trend upsert
   */
  export type trendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
    /**
     * The filter to search for the trend to update in case it exists.
     */
    where: trendWhereUniqueInput;
    /**
     * In case the trend found by the `where` argument doesn't exist, create a new trend with this data.
     */
    create: XOR<trendCreateInput, trendUncheckedCreateInput>;
    /**
     * In case the trend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trendUpdateInput, trendUncheckedUpdateInput>;
  };

  /**
   * trend delete
   */
  export type trendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
    /**
     * Filter which trend to delete.
     */
    where: trendWhereUniqueInput;
  };

  /**
   * trend deleteMany
   */
  export type trendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trends to delete
     */
    where?: trendWhereInput;
  };

  /**
   * trend.video_trend
   */
  export type trend$video_trendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    where?: video_trendWhereInput;
    orderBy?: video_trendOrderByWithRelationInput | video_trendOrderByWithRelationInput[];
    cursor?: video_trendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Video_trendScalarFieldEnum | Video_trendScalarFieldEnum[];
  };

  /**
   * trend without action
   */
  export type trendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trend
     */
    select?: trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trendInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    startup_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    startup_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    startup_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    startup_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    startup_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    startup_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    startup_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      startup_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      startup?: boolean | user$startupArgs<ExtArgs>;
      video?: boolean | user$videoArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    startup_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startup?: boolean | user$startupArgs<ExtArgs>;
    video?: boolean | user$videoArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      startup: Prisma.$startupPayload<ExtArgs> | null;
      video: Prisma.$videoPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        startup_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    startup<T extends user$startupArgs<ExtArgs> = {}>(
      args?: Subset<T, user$startupArgs<ExtArgs>>,
    ): Prisma__startupClient<
      $Result.GetResult<Prisma.$startupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    video<T extends user$videoArgs<ExtArgs> = {}>(
      args?: Subset<T, user$videoArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly startup_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.startup
   */
  export type user$startupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startup
     */
    select?: startupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: startupInclude<ExtArgs> | null;
    where?: startupWhereInput;
  };

  /**
   * user.video
   */
  export type user$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    where?: videoWhereInput;
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    cursor?: videoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
  };

  export type VideoMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VideoMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VideoCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type VideoMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VideoMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VideoCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video to aggregate.
     */
    where?: videoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: videoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned videos
     **/
    _count?: true | VideoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VideoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VideoMaxAggregateInputType;
  };

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
    [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>;
  };

  export type videoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoWhereInput;
    orderBy?: videoOrderByWithAggregationInput | videoOrderByWithAggregationInput[];
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum;
    having?: videoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VideoCountAggregateInputType | true;
    _min?: VideoMinAggregateInputType;
    _max?: VideoMaxAggregateInputType;
  };

  export type VideoGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: VideoCountAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
  };

  type GetVideoGroupByPayload<T extends videoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VideoGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
          : GetScalarType<T[P], VideoGroupByOutputType[P]>;
      }
    >
  >;

  export type videoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      hashtag?: boolean | video$hashtagArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      video_trend?: boolean | video$video_trendArgs<ExtArgs>;
      _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['video']
  >;

  export type videoSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type videoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hashtag?: boolean | video$hashtagArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    video_trend?: boolean | video$video_trendArgs<ExtArgs>;
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $videoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'video';
    objects: {
      hashtag: Prisma.$hashtagPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      video_trend: Prisma.$video_trendPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['video']
    >;
    composites: {};
  };

  type videoGetPayload<S extends boolean | null | undefined | videoDefaultArgs> = $Result.GetResult<
    Prisma.$videoPayload,
    S
  >;

  type videoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    videoFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: VideoCountAggregateInputType | true;
  };

  export interface videoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video']; meta: { name: 'video' } };
    /**
     * Find zero or one Video that matches the filter.
     * @param {videoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends videoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, videoFindUniqueArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Video that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {videoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends videoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends videoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindFirstArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends videoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     *
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends videoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Video.
     * @param {videoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     *
     **/
    create<T extends videoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, videoCreateArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Videos.
     *     @param {videoCreateManyArgs} args - Arguments to create many Videos.
     *     @example
     *     // Create many Videos
     *     const video = await prisma.video.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends videoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, videoCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Video.
     * @param {videoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     *
     **/
    delete<T extends videoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, videoDeleteArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Video.
     * @param {videoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends videoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, videoUpdateArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Videos.
     * @param {videoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends videoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, videoDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends videoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, videoUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Video.
     * @param {videoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     **/
    upsert<T extends videoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, videoUpsertArgs<ExtArgs>>,
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
     **/
    count<T extends videoCountArgs>(
      args?: Subset<T, videoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(
      args: Subset<T, VideoAggregateArgs>,
    ): Prisma.PrismaPromise<GetVideoAggregateType<T>>;

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGroupByArgs} args - Group by arguments.
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
      T extends videoGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videoGroupByArgs['orderBy'] }
        : { orderBy?: videoGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, videoGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the video model
     */
    readonly fields: videoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videoClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    hashtag<T extends video$hashtagArgs<ExtArgs> = {}>(
      args?: Subset<T, video$hashtagArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hashtagPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    video_trend<T extends video$video_trendArgs<ExtArgs> = {}>(
      args?: Subset<T, video$video_trendArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the video model
   */
  interface videoFieldRefs {
    readonly id: FieldRef<'video', 'String'>;
    readonly title: FieldRef<'video', 'String'>;
    readonly description: FieldRef<'video', 'String'>;
    readonly user_id: FieldRef<'video', 'String'>;
    readonly created_at: FieldRef<'video', 'DateTime'>;
    readonly updated_at: FieldRef<'video', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * video findUnique
   */
  export type videoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which video to fetch.
     */
    where: videoWhereUniqueInput;
  };

  /**
   * video findUniqueOrThrow
   */
  export type videoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which video to fetch.
     */
    where: videoWhereUniqueInput;
  };

  /**
   * video findFirst
   */
  export type videoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which video to fetch.
     */
    where?: videoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for videos.
     */
    cursor?: videoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[];
  };

  /**
   * video findFirstOrThrow
   */
  export type videoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which video to fetch.
     */
    where?: videoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for videos.
     */
    cursor?: videoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` videos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[];
  };

  /**
   * video findMany
   */
  export type videoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter, which videos to fetch.
     */
    where?: videoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing videos.
     */
    cursor?: videoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` videos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` videos.
     */
    skip?: number;
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[];
  };

  /**
   * video create
   */
  export type videoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * The data needed to create a video.
     */
    data: XOR<videoCreateInput, videoUncheckedCreateInput>;
  };

  /**
   * video createMany
   */
  export type videoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos.
     */
    data: videoCreateManyInput | videoCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * video update
   */
  export type videoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * The data needed to update a video.
     */
    data: XOR<videoUpdateInput, videoUncheckedUpdateInput>;
    /**
     * Choose, which video to update.
     */
    where: videoWhereUniqueInput;
  };

  /**
   * video updateMany
   */
  export type videoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos.
     */
    data: XOR<videoUpdateManyMutationInput, videoUncheckedUpdateManyInput>;
    /**
     * Filter which videos to update
     */
    where?: videoWhereInput;
  };

  /**
   * video upsert
   */
  export type videoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * The filter to search for the video to update in case it exists.
     */
    where: videoWhereUniqueInput;
    /**
     * In case the video found by the `where` argument doesn't exist, create a new video with this data.
     */
    create: XOR<videoCreateInput, videoUncheckedCreateInput>;
    /**
     * In case the video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videoUpdateInput, videoUncheckedUpdateInput>;
  };

  /**
   * video delete
   */
  export type videoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
    /**
     * Filter which video to delete.
     */
    where: videoWhereUniqueInput;
  };

  /**
   * video deleteMany
   */
  export type videoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to delete
     */
    where?: videoWhereInput;
  };

  /**
   * video.hashtag
   */
  export type video$hashtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtag
     */
    select?: hashtagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hashtagInclude<ExtArgs> | null;
    where?: hashtagWhereInput;
    orderBy?: hashtagOrderByWithRelationInput | hashtagOrderByWithRelationInput[];
    cursor?: hashtagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[];
  };

  /**
   * video.video_trend
   */
  export type video$video_trendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    where?: video_trendWhereInput;
    orderBy?: video_trendOrderByWithRelationInput | video_trendOrderByWithRelationInput[];
    cursor?: video_trendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Video_trendScalarFieldEnum | Video_trendScalarFieldEnum[];
  };

  /**
   * video without action
   */
  export type videoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null;
  };

  /**
   * Model video_trend
   */

  export type AggregateVideo_trend = {
    _count: Video_trendCountAggregateOutputType | null;
    _min: Video_trendMinAggregateOutputType | null;
    _max: Video_trendMaxAggregateOutputType | null;
  };

  export type Video_trendMinAggregateOutputType = {
    id: string | null;
    video_id: string | null;
    trend_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Video_trendMaxAggregateOutputType = {
    id: string | null;
    video_id: string | null;
    trend_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Video_trendCountAggregateOutputType = {
    id: number;
    video_id: number;
    trend_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Video_trendMinAggregateInputType = {
    id?: true;
    video_id?: true;
    trend_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Video_trendMaxAggregateInputType = {
    id?: true;
    video_id?: true;
    trend_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Video_trendCountAggregateInputType = {
    id?: true;
    video_id?: true;
    trend_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Video_trendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_trend to aggregate.
     */
    where?: video_trendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of video_trends to fetch.
     */
    orderBy?: video_trendOrderByWithRelationInput | video_trendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: video_trendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` video_trends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` video_trends.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned video_trends
     **/
    _count?: true | Video_trendCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Video_trendMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Video_trendMaxAggregateInputType;
  };

  export type GetVideo_trendAggregateType<T extends Video_trendAggregateArgs> = {
    [P in keyof T & keyof AggregateVideo_trend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo_trend[P]>
      : GetScalarType<T[P], AggregateVideo_trend[P]>;
  };

  export type video_trendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_trendWhereInput;
    orderBy?: video_trendOrderByWithAggregationInput | video_trendOrderByWithAggregationInput[];
    by: Video_trendScalarFieldEnum[] | Video_trendScalarFieldEnum;
    having?: video_trendScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Video_trendCountAggregateInputType | true;
    _min?: Video_trendMinAggregateInputType;
    _max?: Video_trendMaxAggregateInputType;
  };

  export type Video_trendGroupByOutputType = {
    id: string;
    video_id: string;
    trend_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Video_trendCountAggregateOutputType | null;
    _min: Video_trendMinAggregateOutputType | null;
    _max: Video_trendMaxAggregateOutputType | null;
  };

  type GetVideo_trendGroupByPayload<T extends video_trendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Video_trendGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Video_trendGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Video_trendGroupByOutputType[P]>
          : GetScalarType<T[P], Video_trendGroupByOutputType[P]>;
      }
    >
  >;

  export type video_trendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        video_id?: boolean;
        trend_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        trend?: boolean | trendDefaultArgs<ExtArgs>;
        video?: boolean | videoDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['video_trend']
    >;

  export type video_trendSelectScalar = {
    id?: boolean;
    video_id?: boolean;
    trend_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type video_trendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trend?: boolean | trendDefaultArgs<ExtArgs>;
    video?: boolean | videoDefaultArgs<ExtArgs>;
  };

  export type $video_trendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'video_trend';
    objects: {
      trend: Prisma.$trendPayload<ExtArgs>;
      video: Prisma.$videoPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        video_id: string;
        trend_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['video_trend']
    >;
    composites: {};
  };

  type video_trendGetPayload<S extends boolean | null | undefined | video_trendDefaultArgs> = $Result.GetResult<
    Prisma.$video_trendPayload,
    S
  >;

  type video_trendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    video_trendFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Video_trendCountAggregateInputType | true;
  };

  export interface video_trendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video_trend']; meta: { name: 'video_trend' } };
    /**
     * Find zero or one Video_trend that matches the filter.
     * @param {video_trendFindUniqueArgs} args - Arguments to find a Video_trend
     * @example
     * // Get one Video_trend
     * const video_trend = await prisma.video_trend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends video_trendFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, video_trendFindUniqueArgs<ExtArgs>>,
    ): Prisma__video_trendClient<
      $Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Video_trend that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {video_trendFindUniqueOrThrowArgs} args - Arguments to find a Video_trend
     * @example
     * // Get one Video_trend
     * const video_trend = await prisma.video_trend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends video_trendFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_trendFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__video_trendClient<
      $Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Video_trend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_trendFindFirstArgs} args - Arguments to find a Video_trend
     * @example
     * // Get one Video_trend
     * const video_trend = await prisma.video_trend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends video_trendFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, video_trendFindFirstArgs<ExtArgs>>,
    ): Prisma__video_trendClient<
      $Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Video_trend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_trendFindFirstOrThrowArgs} args - Arguments to find a Video_trend
     * @example
     * // Get one Video_trend
     * const video_trend = await prisma.video_trend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends video_trendFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_trendFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__video_trendClient<
      $Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Video_trends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_trendFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Video_trends
     * const video_trends = await prisma.video_trend.findMany()
     *
     * // Get first 10 Video_trends
     * const video_trends = await prisma.video_trend.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const video_trendWithIdOnly = await prisma.video_trend.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends video_trendFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_trendFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Video_trend.
     * @param {video_trendCreateArgs} args - Arguments to create a Video_trend.
     * @example
     * // Create one Video_trend
     * const Video_trend = await prisma.video_trend.create({
     *   data: {
     *     // ... data to create a Video_trend
     *   }
     * })
     *
     **/
    create<T extends video_trendCreateArgs<ExtArgs>>(
      args: SelectSubset<T, video_trendCreateArgs<ExtArgs>>,
    ): Prisma__video_trendClient<$Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Video_trends.
     *     @param {video_trendCreateManyArgs} args - Arguments to create many Video_trends.
     *     @example
     *     // Create many Video_trends
     *     const video_trend = await prisma.video_trend.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends video_trendCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_trendCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Video_trend.
     * @param {video_trendDeleteArgs} args - Arguments to delete one Video_trend.
     * @example
     * // Delete one Video_trend
     * const Video_trend = await prisma.video_trend.delete({
     *   where: {
     *     // ... filter to delete one Video_trend
     *   }
     * })
     *
     **/
    delete<T extends video_trendDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, video_trendDeleteArgs<ExtArgs>>,
    ): Prisma__video_trendClient<$Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Video_trend.
     * @param {video_trendUpdateArgs} args - Arguments to update one Video_trend.
     * @example
     * // Update one Video_trend
     * const video_trend = await prisma.video_trend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends video_trendUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, video_trendUpdateArgs<ExtArgs>>,
    ): Prisma__video_trendClient<$Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Video_trends.
     * @param {video_trendDeleteManyArgs} args - Arguments to filter Video_trends to delete.
     * @example
     * // Delete a few Video_trends
     * const { count } = await prisma.video_trend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends video_trendDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_trendDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Video_trends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_trendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Video_trends
     * const video_trend = await prisma.video_trend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends video_trendUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, video_trendUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Video_trend.
     * @param {video_trendUpsertArgs} args - Arguments to update or create a Video_trend.
     * @example
     * // Update or create a Video_trend
     * const video_trend = await prisma.video_trend.upsert({
     *   create: {
     *     // ... data to create a Video_trend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video_trend we want to update
     *   }
     * })
     **/
    upsert<T extends video_trendUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, video_trendUpsertArgs<ExtArgs>>,
    ): Prisma__video_trendClient<$Result.GetResult<Prisma.$video_trendPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Video_trends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_trendCountArgs} args - Arguments to filter Video_trends to count.
     * @example
     * // Count the number of Video_trends
     * const count = await prisma.video_trend.count({
     *   where: {
     *     // ... the filter for the Video_trends we want to count
     *   }
     * })
     **/
    count<T extends video_trendCountArgs>(
      args?: Subset<T, video_trendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Video_trendCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Video_trend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_trendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Video_trendAggregateArgs>(
      args: Subset<T, Video_trendAggregateArgs>,
    ): Prisma.PrismaPromise<GetVideo_trendAggregateType<T>>;

    /**
     * Group by Video_trend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_trendGroupByArgs} args - Group by arguments.
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
      T extends video_trendGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: video_trendGroupByArgs['orderBy'] }
        : { orderBy?: video_trendGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, video_trendGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVideo_trendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the video_trend model
     */
    readonly fields: video_trendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video_trend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__video_trendClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trend<T extends trendDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, trendDefaultArgs<ExtArgs>>,
    ): Prisma__trendClient<
      $Result.GetResult<Prisma.$trendPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    video<T extends videoDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, videoDefaultArgs<ExtArgs>>,
    ): Prisma__videoClient<
      $Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the video_trend model
   */
  interface video_trendFieldRefs {
    readonly id: FieldRef<'video_trend', 'String'>;
    readonly video_id: FieldRef<'video_trend', 'String'>;
    readonly trend_id: FieldRef<'video_trend', 'String'>;
    readonly created_at: FieldRef<'video_trend', 'DateTime'>;
    readonly updated_at: FieldRef<'video_trend', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * video_trend findUnique
   */
  export type video_trendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    /**
     * Filter, which video_trend to fetch.
     */
    where: video_trendWhereUniqueInput;
  };

  /**
   * video_trend findUniqueOrThrow
   */
  export type video_trendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    /**
     * Filter, which video_trend to fetch.
     */
    where: video_trendWhereUniqueInput;
  };

  /**
   * video_trend findFirst
   */
  export type video_trendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    /**
     * Filter, which video_trend to fetch.
     */
    where?: video_trendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of video_trends to fetch.
     */
    orderBy?: video_trendOrderByWithRelationInput | video_trendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for video_trends.
     */
    cursor?: video_trendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` video_trends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` video_trends.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of video_trends.
     */
    distinct?: Video_trendScalarFieldEnum | Video_trendScalarFieldEnum[];
  };

  /**
   * video_trend findFirstOrThrow
   */
  export type video_trendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    /**
     * Filter, which video_trend to fetch.
     */
    where?: video_trendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of video_trends to fetch.
     */
    orderBy?: video_trendOrderByWithRelationInput | video_trendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for video_trends.
     */
    cursor?: video_trendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` video_trends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` video_trends.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of video_trends.
     */
    distinct?: Video_trendScalarFieldEnum | Video_trendScalarFieldEnum[];
  };

  /**
   * video_trend findMany
   */
  export type video_trendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    /**
     * Filter, which video_trends to fetch.
     */
    where?: video_trendWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of video_trends to fetch.
     */
    orderBy?: video_trendOrderByWithRelationInput | video_trendOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing video_trends.
     */
    cursor?: video_trendWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` video_trends from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` video_trends.
     */
    skip?: number;
    distinct?: Video_trendScalarFieldEnum | Video_trendScalarFieldEnum[];
  };

  /**
   * video_trend create
   */
  export type video_trendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    /**
     * The data needed to create a video_trend.
     */
    data: XOR<video_trendCreateInput, video_trendUncheckedCreateInput>;
  };

  /**
   * video_trend createMany
   */
  export type video_trendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many video_trends.
     */
    data: video_trendCreateManyInput | video_trendCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * video_trend update
   */
  export type video_trendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    /**
     * The data needed to update a video_trend.
     */
    data: XOR<video_trendUpdateInput, video_trendUncheckedUpdateInput>;
    /**
     * Choose, which video_trend to update.
     */
    where: video_trendWhereUniqueInput;
  };

  /**
   * video_trend updateMany
   */
  export type video_trendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update video_trends.
     */
    data: XOR<video_trendUpdateManyMutationInput, video_trendUncheckedUpdateManyInput>;
    /**
     * Filter which video_trends to update
     */
    where?: video_trendWhereInput;
  };

  /**
   * video_trend upsert
   */
  export type video_trendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    /**
     * The filter to search for the video_trend to update in case it exists.
     */
    where: video_trendWhereUniqueInput;
    /**
     * In case the video_trend found by the `where` argument doesn't exist, create a new video_trend with this data.
     */
    create: XOR<video_trendCreateInput, video_trendUncheckedCreateInput>;
    /**
     * In case the video_trend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<video_trendUpdateInput, video_trendUncheckedUpdateInput>;
  };

  /**
   * video_trend delete
   */
  export type video_trendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
    /**
     * Filter which video_trend to delete.
     */
    where: video_trendWhereUniqueInput;
  };

  /**
   * video_trend deleteMany
   */
  export type video_trendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_trends to delete
     */
    where?: video_trendWhereInput;
  };

  /**
   * video_trend without action
   */
  export type video_trendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_trend
     */
    select?: video_trendSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_trendInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const HashtagScalarFieldEnum: {
    id: 'id';
    tag: 'tag';
    video_id: 'video_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type HashtagScalarFieldEnum = (typeof HashtagScalarFieldEnum)[keyof typeof HashtagScalarFieldEnum];

  export const StartupScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type StartupScalarFieldEnum = (typeof StartupScalarFieldEnum)[keyof typeof StartupScalarFieldEnum];

  export const TrendScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TrendScalarFieldEnum = (typeof TrendScalarFieldEnum)[keyof typeof TrendScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    startup_id: 'startup_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VideoScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum];

  export const Video_trendScalarFieldEnum: {
    id: 'id';
    video_id: 'video_id';
    trend_id: 'trend_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Video_trendScalarFieldEnum = (typeof Video_trendScalarFieldEnum)[keyof typeof Video_trendScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type hashtagWhereInput = {
    AND?: hashtagWhereInput | hashtagWhereInput[];
    OR?: hashtagWhereInput[];
    NOT?: hashtagWhereInput | hashtagWhereInput[];
    id?: UuidFilter<'hashtag'> | string;
    tag?: StringFilter<'hashtag'> | string;
    video_id?: UuidFilter<'hashtag'> | string;
    created_at?: DateTimeFilter<'hashtag'> | Date | string;
    updated_at?: DateTimeFilter<'hashtag'> | Date | string;
    video?: XOR<VideoRelationFilter, videoWhereInput>;
  };

  export type hashtagOrderByWithRelationInput = {
    id?: SortOrder;
    tag?: SortOrder;
    video_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    video?: videoOrderByWithRelationInput;
  };

  export type hashtagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: hashtagWhereInput | hashtagWhereInput[];
      OR?: hashtagWhereInput[];
      NOT?: hashtagWhereInput | hashtagWhereInput[];
      tag?: StringFilter<'hashtag'> | string;
      video_id?: UuidFilter<'hashtag'> | string;
      created_at?: DateTimeFilter<'hashtag'> | Date | string;
      updated_at?: DateTimeFilter<'hashtag'> | Date | string;
      video?: XOR<VideoRelationFilter, videoWhereInput>;
    },
    'id'
  >;

  export type hashtagOrderByWithAggregationInput = {
    id?: SortOrder;
    tag?: SortOrder;
    video_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: hashtagCountOrderByAggregateInput;
    _max?: hashtagMaxOrderByAggregateInput;
    _min?: hashtagMinOrderByAggregateInput;
  };

  export type hashtagScalarWhereWithAggregatesInput = {
    AND?: hashtagScalarWhereWithAggregatesInput | hashtagScalarWhereWithAggregatesInput[];
    OR?: hashtagScalarWhereWithAggregatesInput[];
    NOT?: hashtagScalarWhereWithAggregatesInput | hashtagScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'hashtag'> | string;
    tag?: StringWithAggregatesFilter<'hashtag'> | string;
    video_id?: UuidWithAggregatesFilter<'hashtag'> | string;
    created_at?: DateTimeWithAggregatesFilter<'hashtag'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'hashtag'> | Date | string;
  };

  export type startupWhereInput = {
    AND?: startupWhereInput | startupWhereInput[];
    OR?: startupWhereInput[];
    NOT?: startupWhereInput | startupWhereInput[];
    id?: UuidFilter<'startup'> | string;
    description?: StringNullableFilter<'startup'> | string | null;
    name?: StringFilter<'startup'> | string;
    created_at?: DateTimeFilter<'startup'> | Date | string;
    updated_at?: DateTimeFilter<'startup'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type startupOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type startupWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: startupWhereInput | startupWhereInput[];
      OR?: startupWhereInput[];
      NOT?: startupWhereInput | startupWhereInput[];
      description?: StringNullableFilter<'startup'> | string | null;
      name?: StringFilter<'startup'> | string;
      created_at?: DateTimeFilter<'startup'> | Date | string;
      updated_at?: DateTimeFilter<'startup'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type startupOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: startupCountOrderByAggregateInput;
    _max?: startupMaxOrderByAggregateInput;
    _min?: startupMinOrderByAggregateInput;
  };

  export type startupScalarWhereWithAggregatesInput = {
    AND?: startupScalarWhereWithAggregatesInput | startupScalarWhereWithAggregatesInput[];
    OR?: startupScalarWhereWithAggregatesInput[];
    NOT?: startupScalarWhereWithAggregatesInput | startupScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'startup'> | string;
    description?: StringNullableWithAggregatesFilter<'startup'> | string | null;
    name?: StringWithAggregatesFilter<'startup'> | string;
    created_at?: DateTimeWithAggregatesFilter<'startup'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'startup'> | Date | string;
  };

  export type trendWhereInput = {
    AND?: trendWhereInput | trendWhereInput[];
    OR?: trendWhereInput[];
    NOT?: trendWhereInput | trendWhereInput[];
    id?: UuidFilter<'trend'> | string;
    name?: StringFilter<'trend'> | string;
    description?: StringNullableFilter<'trend'> | string | null;
    created_at?: DateTimeFilter<'trend'> | Date | string;
    updated_at?: DateTimeFilter<'trend'> | Date | string;
    video_trend?: Video_trendListRelationFilter;
  };

  export type trendOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    video_trend?: video_trendOrderByRelationAggregateInput;
  };

  export type trendWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: trendWhereInput | trendWhereInput[];
      OR?: trendWhereInput[];
      NOT?: trendWhereInput | trendWhereInput[];
      name?: StringFilter<'trend'> | string;
      description?: StringNullableFilter<'trend'> | string | null;
      created_at?: DateTimeFilter<'trend'> | Date | string;
      updated_at?: DateTimeFilter<'trend'> | Date | string;
      video_trend?: Video_trendListRelationFilter;
    },
    'id'
  >;

  export type trendOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: trendCountOrderByAggregateInput;
    _max?: trendMaxOrderByAggregateInput;
    _min?: trendMinOrderByAggregateInput;
  };

  export type trendScalarWhereWithAggregatesInput = {
    AND?: trendScalarWhereWithAggregatesInput | trendScalarWhereWithAggregatesInput[];
    OR?: trendScalarWhereWithAggregatesInput[];
    NOT?: trendScalarWhereWithAggregatesInput | trendScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'trend'> | string;
    name?: StringWithAggregatesFilter<'trend'> | string;
    description?: StringNullableWithAggregatesFilter<'trend'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'trend'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'trend'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    startup_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    startup?: XOR<StartupNullableRelationFilter, startupWhereInput> | null;
    video?: VideoListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    startup_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    startup?: startupOrderByWithRelationInput;
    video?: videoOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      startup_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      startup?: XOR<StartupNullableRelationFilter, startupWhereInput> | null;
      video?: VideoListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    startup_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    startup_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type videoWhereInput = {
    AND?: videoWhereInput | videoWhereInput[];
    OR?: videoWhereInput[];
    NOT?: videoWhereInput | videoWhereInput[];
    id?: UuidFilter<'video'> | string;
    title?: StringFilter<'video'> | string;
    description?: StringNullableFilter<'video'> | string | null;
    user_id?: UuidFilter<'video'> | string;
    created_at?: DateTimeFilter<'video'> | Date | string;
    updated_at?: DateTimeFilter<'video'> | Date | string;
    hashtag?: HashtagListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    video_trend?: Video_trendListRelationFilter;
  };

  export type videoOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    hashtag?: hashtagOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    video_trend?: video_trendOrderByRelationAggregateInput;
  };

  export type videoWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: videoWhereInput | videoWhereInput[];
      OR?: videoWhereInput[];
      NOT?: videoWhereInput | videoWhereInput[];
      title?: StringFilter<'video'> | string;
      description?: StringNullableFilter<'video'> | string | null;
      user_id?: UuidFilter<'video'> | string;
      created_at?: DateTimeFilter<'video'> | Date | string;
      updated_at?: DateTimeFilter<'video'> | Date | string;
      hashtag?: HashtagListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      video_trend?: Video_trendListRelationFilter;
    },
    'id'
  >;

  export type videoOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: videoCountOrderByAggregateInput;
    _max?: videoMaxOrderByAggregateInput;
    _min?: videoMinOrderByAggregateInput;
  };

  export type videoScalarWhereWithAggregatesInput = {
    AND?: videoScalarWhereWithAggregatesInput | videoScalarWhereWithAggregatesInput[];
    OR?: videoScalarWhereWithAggregatesInput[];
    NOT?: videoScalarWhereWithAggregatesInput | videoScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'video'> | string;
    title?: StringWithAggregatesFilter<'video'> | string;
    description?: StringNullableWithAggregatesFilter<'video'> | string | null;
    user_id?: UuidWithAggregatesFilter<'video'> | string;
    created_at?: DateTimeWithAggregatesFilter<'video'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'video'> | Date | string;
  };

  export type video_trendWhereInput = {
    AND?: video_trendWhereInput | video_trendWhereInput[];
    OR?: video_trendWhereInput[];
    NOT?: video_trendWhereInput | video_trendWhereInput[];
    id?: UuidFilter<'video_trend'> | string;
    video_id?: UuidFilter<'video_trend'> | string;
    trend_id?: UuidFilter<'video_trend'> | string;
    created_at?: DateTimeFilter<'video_trend'> | Date | string;
    updated_at?: DateTimeFilter<'video_trend'> | Date | string;
    trend?: XOR<TrendRelationFilter, trendWhereInput>;
    video?: XOR<VideoRelationFilter, videoWhereInput>;
  };

  export type video_trendOrderByWithRelationInput = {
    id?: SortOrder;
    video_id?: SortOrder;
    trend_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    trend?: trendOrderByWithRelationInput;
    video?: videoOrderByWithRelationInput;
  };

  export type video_trendWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: video_trendWhereInput | video_trendWhereInput[];
      OR?: video_trendWhereInput[];
      NOT?: video_trendWhereInput | video_trendWhereInput[];
      video_id?: UuidFilter<'video_trend'> | string;
      trend_id?: UuidFilter<'video_trend'> | string;
      created_at?: DateTimeFilter<'video_trend'> | Date | string;
      updated_at?: DateTimeFilter<'video_trend'> | Date | string;
      trend?: XOR<TrendRelationFilter, trendWhereInput>;
      video?: XOR<VideoRelationFilter, videoWhereInput>;
    },
    'id'
  >;

  export type video_trendOrderByWithAggregationInput = {
    id?: SortOrder;
    video_id?: SortOrder;
    trend_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: video_trendCountOrderByAggregateInput;
    _max?: video_trendMaxOrderByAggregateInput;
    _min?: video_trendMinOrderByAggregateInput;
  };

  export type video_trendScalarWhereWithAggregatesInput = {
    AND?: video_trendScalarWhereWithAggregatesInput | video_trendScalarWhereWithAggregatesInput[];
    OR?: video_trendScalarWhereWithAggregatesInput[];
    NOT?: video_trendScalarWhereWithAggregatesInput | video_trendScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'video_trend'> | string;
    video_id?: UuidWithAggregatesFilter<'video_trend'> | string;
    trend_id?: UuidWithAggregatesFilter<'video_trend'> | string;
    created_at?: DateTimeWithAggregatesFilter<'video_trend'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'video_trend'> | Date | string;
  };

  export type hashtagCreateInput = {
    id?: string;
    tag: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    video: videoCreateNestedOneWithoutHashtagInput;
  };

  export type hashtagUncheckedCreateInput = {
    id?: string;
    tag: string;
    video_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hashtagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tag?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    video?: videoUpdateOneRequiredWithoutHashtagNestedInput;
  };

  export type hashtagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tag?: StringFieldUpdateOperationsInput | string;
    video_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hashtagCreateManyInput = {
    id?: string;
    tag: string;
    video_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hashtagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tag?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hashtagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tag?: StringFieldUpdateOperationsInput | string;
    video_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type startupCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutStartupInput;
  };

  export type startupUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutStartupInput;
  };

  export type startupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutStartupNestedInput;
  };

  export type startupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutStartupNestedInput;
  };

  export type startupCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type startupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type startupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trendCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    video_trend?: video_trendCreateNestedManyWithoutTrendInput;
  };

  export type trendUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    video_trend?: video_trendUncheckedCreateNestedManyWithoutTrendInput;
  };

  export type trendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    video_trend?: video_trendUpdateManyWithoutTrendNestedInput;
  };

  export type trendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    video_trend?: video_trendUncheckedUpdateManyWithoutTrendNestedInput;
  };

  export type trendCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    startup?: startupCreateNestedOneWithoutUserInput;
    video?: videoCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    startup_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    video?: videoUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    startup?: startupUpdateOneWithoutUserNestedInput;
    video?: videoUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    startup_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    video?: videoUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    startup_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    startup_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    hashtag?: hashtagCreateNestedManyWithoutVideoInput;
    user: userCreateNestedOneWithoutVideoInput;
    video_trend?: video_trendCreateNestedManyWithoutVideoInput;
  };

  export type videoUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    hashtag?: hashtagUncheckedCreateNestedManyWithoutVideoInput;
    video_trend?: video_trendUncheckedCreateNestedManyWithoutVideoInput;
  };

  export type videoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    hashtag?: hashtagUpdateManyWithoutVideoNestedInput;
    user?: userUpdateOneRequiredWithoutVideoNestedInput;
    video_trend?: video_trendUpdateManyWithoutVideoNestedInput;
  };

  export type videoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    hashtag?: hashtagUncheckedUpdateManyWithoutVideoNestedInput;
    video_trend?: video_trendUncheckedUpdateManyWithoutVideoNestedInput;
  };

  export type videoCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type videoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type video_trendCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trend: trendCreateNestedOneWithoutVideo_trendInput;
    video: videoCreateNestedOneWithoutVideo_trendInput;
  };

  export type video_trendUncheckedCreateInput = {
    id?: string;
    video_id: string;
    trend_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type video_trendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    trend?: trendUpdateOneRequiredWithoutVideo_trendNestedInput;
    video?: videoUpdateOneRequiredWithoutVideo_trendNestedInput;
  };

  export type video_trendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    video_id?: StringFieldUpdateOperationsInput | string;
    trend_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type video_trendCreateManyInput = {
    id?: string;
    video_id: string;
    trend_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type video_trendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type video_trendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    video_id?: StringFieldUpdateOperationsInput | string;
    trend_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type VideoRelationFilter = {
    is?: videoWhereInput;
    isNot?: videoWhereInput;
  };

  export type hashtagCountOrderByAggregateInput = {
    id?: SortOrder;
    tag?: SortOrder;
    video_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hashtagMaxOrderByAggregateInput = {
    id?: SortOrder;
    tag?: SortOrder;
    video_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hashtagMinOrderByAggregateInput = {
    id?: SortOrder;
    tag?: SortOrder;
    video_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type startupCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type startupMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type startupMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type Video_trendListRelationFilter = {
    every?: video_trendWhereInput;
    some?: video_trendWhereInput;
    none?: video_trendWhereInput;
  };

  export type video_trendOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type trendCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type trendMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type trendMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type StartupNullableRelationFilter = {
    is?: startupWhereInput | null;
    isNot?: startupWhereInput | null;
  };

  export type VideoListRelationFilter = {
    every?: videoWhereInput;
    some?: videoWhereInput;
    none?: videoWhereInput;
  };

  export type videoOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    startup_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    startup_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    startup_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type HashtagListRelationFilter = {
    every?: hashtagWhereInput;
    some?: hashtagWhereInput;
    none?: hashtagWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type hashtagOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type videoCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type videoMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type videoMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TrendRelationFilter = {
    is?: trendWhereInput;
    isNot?: trendWhereInput;
  };

  export type video_trendCountOrderByAggregateInput = {
    id?: SortOrder;
    video_id?: SortOrder;
    trend_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type video_trendMaxOrderByAggregateInput = {
    id?: SortOrder;
    video_id?: SortOrder;
    trend_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type video_trendMinOrderByAggregateInput = {
    id?: SortOrder;
    video_id?: SortOrder;
    trend_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type videoCreateNestedOneWithoutHashtagInput = {
    create?: XOR<videoCreateWithoutHashtagInput, videoUncheckedCreateWithoutHashtagInput>;
    connectOrCreate?: videoCreateOrConnectWithoutHashtagInput;
    connect?: videoWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type videoUpdateOneRequiredWithoutHashtagNestedInput = {
    create?: XOR<videoCreateWithoutHashtagInput, videoUncheckedCreateWithoutHashtagInput>;
    connectOrCreate?: videoCreateOrConnectWithoutHashtagInput;
    upsert?: videoUpsertWithoutHashtagInput;
    connect?: videoWhereUniqueInput;
    update?: XOR<
      XOR<videoUpdateToOneWithWhereWithoutHashtagInput, videoUpdateWithoutHashtagInput>,
      videoUncheckedUpdateWithoutHashtagInput
    >;
  };

  export type userCreateNestedManyWithoutStartupInput = {
    create?:
      | XOR<userCreateWithoutStartupInput, userUncheckedCreateWithoutStartupInput>
      | userCreateWithoutStartupInput[]
      | userUncheckedCreateWithoutStartupInput[];
    connectOrCreate?: userCreateOrConnectWithoutStartupInput | userCreateOrConnectWithoutStartupInput[];
    createMany?: userCreateManyStartupInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutStartupInput = {
    create?:
      | XOR<userCreateWithoutStartupInput, userUncheckedCreateWithoutStartupInput>
      | userCreateWithoutStartupInput[]
      | userUncheckedCreateWithoutStartupInput[];
    connectOrCreate?: userCreateOrConnectWithoutStartupInput | userCreateOrConnectWithoutStartupInput[];
    createMany?: userCreateManyStartupInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateManyWithoutStartupNestedInput = {
    create?:
      | XOR<userCreateWithoutStartupInput, userUncheckedCreateWithoutStartupInput>
      | userCreateWithoutStartupInput[]
      | userUncheckedCreateWithoutStartupInput[];
    connectOrCreate?: userCreateOrConnectWithoutStartupInput | userCreateOrConnectWithoutStartupInput[];
    upsert?: userUpsertWithWhereUniqueWithoutStartupInput | userUpsertWithWhereUniqueWithoutStartupInput[];
    createMany?: userCreateManyStartupInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutStartupInput | userUpdateWithWhereUniqueWithoutStartupInput[];
    updateMany?: userUpdateManyWithWhereWithoutStartupInput | userUpdateManyWithWhereWithoutStartupInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutStartupNestedInput = {
    create?:
      | XOR<userCreateWithoutStartupInput, userUncheckedCreateWithoutStartupInput>
      | userCreateWithoutStartupInput[]
      | userUncheckedCreateWithoutStartupInput[];
    connectOrCreate?: userCreateOrConnectWithoutStartupInput | userCreateOrConnectWithoutStartupInput[];
    upsert?: userUpsertWithWhereUniqueWithoutStartupInput | userUpsertWithWhereUniqueWithoutStartupInput[];
    createMany?: userCreateManyStartupInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutStartupInput | userUpdateWithWhereUniqueWithoutStartupInput[];
    updateMany?: userUpdateManyWithWhereWithoutStartupInput | userUpdateManyWithWhereWithoutStartupInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type video_trendCreateNestedManyWithoutTrendInput = {
    create?:
      | XOR<video_trendCreateWithoutTrendInput, video_trendUncheckedCreateWithoutTrendInput>
      | video_trendCreateWithoutTrendInput[]
      | video_trendUncheckedCreateWithoutTrendInput[];
    connectOrCreate?: video_trendCreateOrConnectWithoutTrendInput | video_trendCreateOrConnectWithoutTrendInput[];
    createMany?: video_trendCreateManyTrendInputEnvelope;
    connect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
  };

  export type video_trendUncheckedCreateNestedManyWithoutTrendInput = {
    create?:
      | XOR<video_trendCreateWithoutTrendInput, video_trendUncheckedCreateWithoutTrendInput>
      | video_trendCreateWithoutTrendInput[]
      | video_trendUncheckedCreateWithoutTrendInput[];
    connectOrCreate?: video_trendCreateOrConnectWithoutTrendInput | video_trendCreateOrConnectWithoutTrendInput[];
    createMany?: video_trendCreateManyTrendInputEnvelope;
    connect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
  };

  export type video_trendUpdateManyWithoutTrendNestedInput = {
    create?:
      | XOR<video_trendCreateWithoutTrendInput, video_trendUncheckedCreateWithoutTrendInput>
      | video_trendCreateWithoutTrendInput[]
      | video_trendUncheckedCreateWithoutTrendInput[];
    connectOrCreate?: video_trendCreateOrConnectWithoutTrendInput | video_trendCreateOrConnectWithoutTrendInput[];
    upsert?: video_trendUpsertWithWhereUniqueWithoutTrendInput | video_trendUpsertWithWhereUniqueWithoutTrendInput[];
    createMany?: video_trendCreateManyTrendInputEnvelope;
    set?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    disconnect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    delete?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    connect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    update?: video_trendUpdateWithWhereUniqueWithoutTrendInput | video_trendUpdateWithWhereUniqueWithoutTrendInput[];
    updateMany?: video_trendUpdateManyWithWhereWithoutTrendInput | video_trendUpdateManyWithWhereWithoutTrendInput[];
    deleteMany?: video_trendScalarWhereInput | video_trendScalarWhereInput[];
  };

  export type video_trendUncheckedUpdateManyWithoutTrendNestedInput = {
    create?:
      | XOR<video_trendCreateWithoutTrendInput, video_trendUncheckedCreateWithoutTrendInput>
      | video_trendCreateWithoutTrendInput[]
      | video_trendUncheckedCreateWithoutTrendInput[];
    connectOrCreate?: video_trendCreateOrConnectWithoutTrendInput | video_trendCreateOrConnectWithoutTrendInput[];
    upsert?: video_trendUpsertWithWhereUniqueWithoutTrendInput | video_trendUpsertWithWhereUniqueWithoutTrendInput[];
    createMany?: video_trendCreateManyTrendInputEnvelope;
    set?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    disconnect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    delete?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    connect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    update?: video_trendUpdateWithWhereUniqueWithoutTrendInput | video_trendUpdateWithWhereUniqueWithoutTrendInput[];
    updateMany?: video_trendUpdateManyWithWhereWithoutTrendInput | video_trendUpdateManyWithWhereWithoutTrendInput[];
    deleteMany?: video_trendScalarWhereInput | video_trendScalarWhereInput[];
  };

  export type startupCreateNestedOneWithoutUserInput = {
    create?: XOR<startupCreateWithoutUserInput, startupUncheckedCreateWithoutUserInput>;
    connectOrCreate?: startupCreateOrConnectWithoutUserInput;
    connect?: startupWhereUniqueInput;
  };

  export type videoCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>
      | videoCreateWithoutUserInput[]
      | videoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: videoCreateOrConnectWithoutUserInput | videoCreateOrConnectWithoutUserInput[];
    createMany?: videoCreateManyUserInputEnvelope;
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[];
  };

  export type videoUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>
      | videoCreateWithoutUserInput[]
      | videoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: videoCreateOrConnectWithoutUserInput | videoCreateOrConnectWithoutUserInput[];
    createMany?: videoCreateManyUserInputEnvelope;
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[];
  };

  export type startupUpdateOneWithoutUserNestedInput = {
    create?: XOR<startupCreateWithoutUserInput, startupUncheckedCreateWithoutUserInput>;
    connectOrCreate?: startupCreateOrConnectWithoutUserInput;
    upsert?: startupUpsertWithoutUserInput;
    disconnect?: startupWhereInput | boolean;
    delete?: startupWhereInput | boolean;
    connect?: startupWhereUniqueInput;
    update?: XOR<
      XOR<startupUpdateToOneWithWhereWithoutUserInput, startupUpdateWithoutUserInput>,
      startupUncheckedUpdateWithoutUserInput
    >;
  };

  export type videoUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>
      | videoCreateWithoutUserInput[]
      | videoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: videoCreateOrConnectWithoutUserInput | videoCreateOrConnectWithoutUserInput[];
    upsert?: videoUpsertWithWhereUniqueWithoutUserInput | videoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: videoCreateManyUserInputEnvelope;
    set?: videoWhereUniqueInput | videoWhereUniqueInput[];
    disconnect?: videoWhereUniqueInput | videoWhereUniqueInput[];
    delete?: videoWhereUniqueInput | videoWhereUniqueInput[];
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[];
    update?: videoUpdateWithWhereUniqueWithoutUserInput | videoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: videoUpdateManyWithWhereWithoutUserInput | videoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: videoScalarWhereInput | videoScalarWhereInput[];
  };

  export type videoUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>
      | videoCreateWithoutUserInput[]
      | videoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: videoCreateOrConnectWithoutUserInput | videoCreateOrConnectWithoutUserInput[];
    upsert?: videoUpsertWithWhereUniqueWithoutUserInput | videoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: videoCreateManyUserInputEnvelope;
    set?: videoWhereUniqueInput | videoWhereUniqueInput[];
    disconnect?: videoWhereUniqueInput | videoWhereUniqueInput[];
    delete?: videoWhereUniqueInput | videoWhereUniqueInput[];
    connect?: videoWhereUniqueInput | videoWhereUniqueInput[];
    update?: videoUpdateWithWhereUniqueWithoutUserInput | videoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: videoUpdateManyWithWhereWithoutUserInput | videoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: videoScalarWhereInput | videoScalarWhereInput[];
  };

  export type hashtagCreateNestedManyWithoutVideoInput = {
    create?:
      | XOR<hashtagCreateWithoutVideoInput, hashtagUncheckedCreateWithoutVideoInput>
      | hashtagCreateWithoutVideoInput[]
      | hashtagUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: hashtagCreateOrConnectWithoutVideoInput | hashtagCreateOrConnectWithoutVideoInput[];
    createMany?: hashtagCreateManyVideoInputEnvelope;
    connect?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutVideoInput = {
    create?: XOR<userCreateWithoutVideoInput, userUncheckedCreateWithoutVideoInput>;
    connectOrCreate?: userCreateOrConnectWithoutVideoInput;
    connect?: userWhereUniqueInput;
  };

  export type video_trendCreateNestedManyWithoutVideoInput = {
    create?:
      | XOR<video_trendCreateWithoutVideoInput, video_trendUncheckedCreateWithoutVideoInput>
      | video_trendCreateWithoutVideoInput[]
      | video_trendUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: video_trendCreateOrConnectWithoutVideoInput | video_trendCreateOrConnectWithoutVideoInput[];
    createMany?: video_trendCreateManyVideoInputEnvelope;
    connect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
  };

  export type hashtagUncheckedCreateNestedManyWithoutVideoInput = {
    create?:
      | XOR<hashtagCreateWithoutVideoInput, hashtagUncheckedCreateWithoutVideoInput>
      | hashtagCreateWithoutVideoInput[]
      | hashtagUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: hashtagCreateOrConnectWithoutVideoInput | hashtagCreateOrConnectWithoutVideoInput[];
    createMany?: hashtagCreateManyVideoInputEnvelope;
    connect?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
  };

  export type video_trendUncheckedCreateNestedManyWithoutVideoInput = {
    create?:
      | XOR<video_trendCreateWithoutVideoInput, video_trendUncheckedCreateWithoutVideoInput>
      | video_trendCreateWithoutVideoInput[]
      | video_trendUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: video_trendCreateOrConnectWithoutVideoInput | video_trendCreateOrConnectWithoutVideoInput[];
    createMany?: video_trendCreateManyVideoInputEnvelope;
    connect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
  };

  export type hashtagUpdateManyWithoutVideoNestedInput = {
    create?:
      | XOR<hashtagCreateWithoutVideoInput, hashtagUncheckedCreateWithoutVideoInput>
      | hashtagCreateWithoutVideoInput[]
      | hashtagUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: hashtagCreateOrConnectWithoutVideoInput | hashtagCreateOrConnectWithoutVideoInput[];
    upsert?: hashtagUpsertWithWhereUniqueWithoutVideoInput | hashtagUpsertWithWhereUniqueWithoutVideoInput[];
    createMany?: hashtagCreateManyVideoInputEnvelope;
    set?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
    disconnect?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
    delete?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
    connect?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
    update?: hashtagUpdateWithWhereUniqueWithoutVideoInput | hashtagUpdateWithWhereUniqueWithoutVideoInput[];
    updateMany?: hashtagUpdateManyWithWhereWithoutVideoInput | hashtagUpdateManyWithWhereWithoutVideoInput[];
    deleteMany?: hashtagScalarWhereInput | hashtagScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutVideoNestedInput = {
    create?: XOR<userCreateWithoutVideoInput, userUncheckedCreateWithoutVideoInput>;
    connectOrCreate?: userCreateOrConnectWithoutVideoInput;
    upsert?: userUpsertWithoutVideoInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutVideoInput, userUpdateWithoutVideoInput>,
      userUncheckedUpdateWithoutVideoInput
    >;
  };

  export type video_trendUpdateManyWithoutVideoNestedInput = {
    create?:
      | XOR<video_trendCreateWithoutVideoInput, video_trendUncheckedCreateWithoutVideoInput>
      | video_trendCreateWithoutVideoInput[]
      | video_trendUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: video_trendCreateOrConnectWithoutVideoInput | video_trendCreateOrConnectWithoutVideoInput[];
    upsert?: video_trendUpsertWithWhereUniqueWithoutVideoInput | video_trendUpsertWithWhereUniqueWithoutVideoInput[];
    createMany?: video_trendCreateManyVideoInputEnvelope;
    set?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    disconnect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    delete?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    connect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    update?: video_trendUpdateWithWhereUniqueWithoutVideoInput | video_trendUpdateWithWhereUniqueWithoutVideoInput[];
    updateMany?: video_trendUpdateManyWithWhereWithoutVideoInput | video_trendUpdateManyWithWhereWithoutVideoInput[];
    deleteMany?: video_trendScalarWhereInput | video_trendScalarWhereInput[];
  };

  export type hashtagUncheckedUpdateManyWithoutVideoNestedInput = {
    create?:
      | XOR<hashtagCreateWithoutVideoInput, hashtagUncheckedCreateWithoutVideoInput>
      | hashtagCreateWithoutVideoInput[]
      | hashtagUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: hashtagCreateOrConnectWithoutVideoInput | hashtagCreateOrConnectWithoutVideoInput[];
    upsert?: hashtagUpsertWithWhereUniqueWithoutVideoInput | hashtagUpsertWithWhereUniqueWithoutVideoInput[];
    createMany?: hashtagCreateManyVideoInputEnvelope;
    set?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
    disconnect?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
    delete?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
    connect?: hashtagWhereUniqueInput | hashtagWhereUniqueInput[];
    update?: hashtagUpdateWithWhereUniqueWithoutVideoInput | hashtagUpdateWithWhereUniqueWithoutVideoInput[];
    updateMany?: hashtagUpdateManyWithWhereWithoutVideoInput | hashtagUpdateManyWithWhereWithoutVideoInput[];
    deleteMany?: hashtagScalarWhereInput | hashtagScalarWhereInput[];
  };

  export type video_trendUncheckedUpdateManyWithoutVideoNestedInput = {
    create?:
      | XOR<video_trendCreateWithoutVideoInput, video_trendUncheckedCreateWithoutVideoInput>
      | video_trendCreateWithoutVideoInput[]
      | video_trendUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: video_trendCreateOrConnectWithoutVideoInput | video_trendCreateOrConnectWithoutVideoInput[];
    upsert?: video_trendUpsertWithWhereUniqueWithoutVideoInput | video_trendUpsertWithWhereUniqueWithoutVideoInput[];
    createMany?: video_trendCreateManyVideoInputEnvelope;
    set?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    disconnect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    delete?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    connect?: video_trendWhereUniqueInput | video_trendWhereUniqueInput[];
    update?: video_trendUpdateWithWhereUniqueWithoutVideoInput | video_trendUpdateWithWhereUniqueWithoutVideoInput[];
    updateMany?: video_trendUpdateManyWithWhereWithoutVideoInput | video_trendUpdateManyWithWhereWithoutVideoInput[];
    deleteMany?: video_trendScalarWhereInput | video_trendScalarWhereInput[];
  };

  export type trendCreateNestedOneWithoutVideo_trendInput = {
    create?: XOR<trendCreateWithoutVideo_trendInput, trendUncheckedCreateWithoutVideo_trendInput>;
    connectOrCreate?: trendCreateOrConnectWithoutVideo_trendInput;
    connect?: trendWhereUniqueInput;
  };

  export type videoCreateNestedOneWithoutVideo_trendInput = {
    create?: XOR<videoCreateWithoutVideo_trendInput, videoUncheckedCreateWithoutVideo_trendInput>;
    connectOrCreate?: videoCreateOrConnectWithoutVideo_trendInput;
    connect?: videoWhereUniqueInput;
  };

  export type trendUpdateOneRequiredWithoutVideo_trendNestedInput = {
    create?: XOR<trendCreateWithoutVideo_trendInput, trendUncheckedCreateWithoutVideo_trendInput>;
    connectOrCreate?: trendCreateOrConnectWithoutVideo_trendInput;
    upsert?: trendUpsertWithoutVideo_trendInput;
    connect?: trendWhereUniqueInput;
    update?: XOR<
      XOR<trendUpdateToOneWithWhereWithoutVideo_trendInput, trendUpdateWithoutVideo_trendInput>,
      trendUncheckedUpdateWithoutVideo_trendInput
    >;
  };

  export type videoUpdateOneRequiredWithoutVideo_trendNestedInput = {
    create?: XOR<videoCreateWithoutVideo_trendInput, videoUncheckedCreateWithoutVideo_trendInput>;
    connectOrCreate?: videoCreateOrConnectWithoutVideo_trendInput;
    upsert?: videoUpsertWithoutVideo_trendInput;
    connect?: videoWhereUniqueInput;
    update?: XOR<
      XOR<videoUpdateToOneWithWhereWithoutVideo_trendInput, videoUpdateWithoutVideo_trendInput>,
      videoUncheckedUpdateWithoutVideo_trendInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type videoCreateWithoutHashtagInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutVideoInput;
    video_trend?: video_trendCreateNestedManyWithoutVideoInput;
  };

  export type videoUncheckedCreateWithoutHashtagInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    video_trend?: video_trendUncheckedCreateNestedManyWithoutVideoInput;
  };

  export type videoCreateOrConnectWithoutHashtagInput = {
    where: videoWhereUniqueInput;
    create: XOR<videoCreateWithoutHashtagInput, videoUncheckedCreateWithoutHashtagInput>;
  };

  export type videoUpsertWithoutHashtagInput = {
    update: XOR<videoUpdateWithoutHashtagInput, videoUncheckedUpdateWithoutHashtagInput>;
    create: XOR<videoCreateWithoutHashtagInput, videoUncheckedCreateWithoutHashtagInput>;
    where?: videoWhereInput;
  };

  export type videoUpdateToOneWithWhereWithoutHashtagInput = {
    where?: videoWhereInput;
    data: XOR<videoUpdateWithoutHashtagInput, videoUncheckedUpdateWithoutHashtagInput>;
  };

  export type videoUpdateWithoutHashtagInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutVideoNestedInput;
    video_trend?: video_trendUpdateManyWithoutVideoNestedInput;
  };

  export type videoUncheckedUpdateWithoutHashtagInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    video_trend?: video_trendUncheckedUpdateManyWithoutVideoNestedInput;
  };

  export type userCreateWithoutStartupInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    video?: videoCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutStartupInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    video?: videoUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutStartupInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutStartupInput, userUncheckedCreateWithoutStartupInput>;
  };

  export type userCreateManyStartupInputEnvelope = {
    data: userCreateManyStartupInput | userCreateManyStartupInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutStartupInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutStartupInput, userUncheckedUpdateWithoutStartupInput>;
    create: XOR<userCreateWithoutStartupInput, userUncheckedCreateWithoutStartupInput>;
  };

  export type userUpdateWithWhereUniqueWithoutStartupInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutStartupInput, userUncheckedUpdateWithoutStartupInput>;
  };

  export type userUpdateManyWithWhereWithoutStartupInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutStartupInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    startup_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type video_trendCreateWithoutTrendInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    video: videoCreateNestedOneWithoutVideo_trendInput;
  };

  export type video_trendUncheckedCreateWithoutTrendInput = {
    id?: string;
    video_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type video_trendCreateOrConnectWithoutTrendInput = {
    where: video_trendWhereUniqueInput;
    create: XOR<video_trendCreateWithoutTrendInput, video_trendUncheckedCreateWithoutTrendInput>;
  };

  export type video_trendCreateManyTrendInputEnvelope = {
    data: video_trendCreateManyTrendInput | video_trendCreateManyTrendInput[];
    skipDuplicates?: boolean;
  };

  export type video_trendUpsertWithWhereUniqueWithoutTrendInput = {
    where: video_trendWhereUniqueInput;
    update: XOR<video_trendUpdateWithoutTrendInput, video_trendUncheckedUpdateWithoutTrendInput>;
    create: XOR<video_trendCreateWithoutTrendInput, video_trendUncheckedCreateWithoutTrendInput>;
  };

  export type video_trendUpdateWithWhereUniqueWithoutTrendInput = {
    where: video_trendWhereUniqueInput;
    data: XOR<video_trendUpdateWithoutTrendInput, video_trendUncheckedUpdateWithoutTrendInput>;
  };

  export type video_trendUpdateManyWithWhereWithoutTrendInput = {
    where: video_trendScalarWhereInput;
    data: XOR<video_trendUpdateManyMutationInput, video_trendUncheckedUpdateManyWithoutTrendInput>;
  };

  export type video_trendScalarWhereInput = {
    AND?: video_trendScalarWhereInput | video_trendScalarWhereInput[];
    OR?: video_trendScalarWhereInput[];
    NOT?: video_trendScalarWhereInput | video_trendScalarWhereInput[];
    id?: UuidFilter<'video_trend'> | string;
    video_id?: UuidFilter<'video_trend'> | string;
    trend_id?: UuidFilter<'video_trend'> | string;
    created_at?: DateTimeFilter<'video_trend'> | Date | string;
    updated_at?: DateTimeFilter<'video_trend'> | Date | string;
  };

  export type startupCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type startupUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type startupCreateOrConnectWithoutUserInput = {
    where: startupWhereUniqueInput;
    create: XOR<startupCreateWithoutUserInput, startupUncheckedCreateWithoutUserInput>;
  };

  export type videoCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    hashtag?: hashtagCreateNestedManyWithoutVideoInput;
    video_trend?: video_trendCreateNestedManyWithoutVideoInput;
  };

  export type videoUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    hashtag?: hashtagUncheckedCreateNestedManyWithoutVideoInput;
    video_trend?: video_trendUncheckedCreateNestedManyWithoutVideoInput;
  };

  export type videoCreateOrConnectWithoutUserInput = {
    where: videoWhereUniqueInput;
    create: XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>;
  };

  export type videoCreateManyUserInputEnvelope = {
    data: videoCreateManyUserInput | videoCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type startupUpsertWithoutUserInput = {
    update: XOR<startupUpdateWithoutUserInput, startupUncheckedUpdateWithoutUserInput>;
    create: XOR<startupCreateWithoutUserInput, startupUncheckedCreateWithoutUserInput>;
    where?: startupWhereInput;
  };

  export type startupUpdateToOneWithWhereWithoutUserInput = {
    where?: startupWhereInput;
    data: XOR<startupUpdateWithoutUserInput, startupUncheckedUpdateWithoutUserInput>;
  };

  export type startupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type startupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoUpsertWithWhereUniqueWithoutUserInput = {
    where: videoWhereUniqueInput;
    update: XOR<videoUpdateWithoutUserInput, videoUncheckedUpdateWithoutUserInput>;
    create: XOR<videoCreateWithoutUserInput, videoUncheckedCreateWithoutUserInput>;
  };

  export type videoUpdateWithWhereUniqueWithoutUserInput = {
    where: videoWhereUniqueInput;
    data: XOR<videoUpdateWithoutUserInput, videoUncheckedUpdateWithoutUserInput>;
  };

  export type videoUpdateManyWithWhereWithoutUserInput = {
    where: videoScalarWhereInput;
    data: XOR<videoUpdateManyMutationInput, videoUncheckedUpdateManyWithoutUserInput>;
  };

  export type videoScalarWhereInput = {
    AND?: videoScalarWhereInput | videoScalarWhereInput[];
    OR?: videoScalarWhereInput[];
    NOT?: videoScalarWhereInput | videoScalarWhereInput[];
    id?: UuidFilter<'video'> | string;
    title?: StringFilter<'video'> | string;
    description?: StringNullableFilter<'video'> | string | null;
    user_id?: UuidFilter<'video'> | string;
    created_at?: DateTimeFilter<'video'> | Date | string;
    updated_at?: DateTimeFilter<'video'> | Date | string;
  };

  export type hashtagCreateWithoutVideoInput = {
    id?: string;
    tag: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hashtagUncheckedCreateWithoutVideoInput = {
    id?: string;
    tag: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hashtagCreateOrConnectWithoutVideoInput = {
    where: hashtagWhereUniqueInput;
    create: XOR<hashtagCreateWithoutVideoInput, hashtagUncheckedCreateWithoutVideoInput>;
  };

  export type hashtagCreateManyVideoInputEnvelope = {
    data: hashtagCreateManyVideoInput | hashtagCreateManyVideoInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutVideoInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    startup?: startupCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutVideoInput = {
    id?: string;
    email: string;
    startup_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutVideoInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutVideoInput, userUncheckedCreateWithoutVideoInput>;
  };

  export type video_trendCreateWithoutVideoInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trend: trendCreateNestedOneWithoutVideo_trendInput;
  };

  export type video_trendUncheckedCreateWithoutVideoInput = {
    id?: string;
    trend_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type video_trendCreateOrConnectWithoutVideoInput = {
    where: video_trendWhereUniqueInput;
    create: XOR<video_trendCreateWithoutVideoInput, video_trendUncheckedCreateWithoutVideoInput>;
  };

  export type video_trendCreateManyVideoInputEnvelope = {
    data: video_trendCreateManyVideoInput | video_trendCreateManyVideoInput[];
    skipDuplicates?: boolean;
  };

  export type hashtagUpsertWithWhereUniqueWithoutVideoInput = {
    where: hashtagWhereUniqueInput;
    update: XOR<hashtagUpdateWithoutVideoInput, hashtagUncheckedUpdateWithoutVideoInput>;
    create: XOR<hashtagCreateWithoutVideoInput, hashtagUncheckedCreateWithoutVideoInput>;
  };

  export type hashtagUpdateWithWhereUniqueWithoutVideoInput = {
    where: hashtagWhereUniqueInput;
    data: XOR<hashtagUpdateWithoutVideoInput, hashtagUncheckedUpdateWithoutVideoInput>;
  };

  export type hashtagUpdateManyWithWhereWithoutVideoInput = {
    where: hashtagScalarWhereInput;
    data: XOR<hashtagUpdateManyMutationInput, hashtagUncheckedUpdateManyWithoutVideoInput>;
  };

  export type hashtagScalarWhereInput = {
    AND?: hashtagScalarWhereInput | hashtagScalarWhereInput[];
    OR?: hashtagScalarWhereInput[];
    NOT?: hashtagScalarWhereInput | hashtagScalarWhereInput[];
    id?: UuidFilter<'hashtag'> | string;
    tag?: StringFilter<'hashtag'> | string;
    video_id?: UuidFilter<'hashtag'> | string;
    created_at?: DateTimeFilter<'hashtag'> | Date | string;
    updated_at?: DateTimeFilter<'hashtag'> | Date | string;
  };

  export type userUpsertWithoutVideoInput = {
    update: XOR<userUpdateWithoutVideoInput, userUncheckedUpdateWithoutVideoInput>;
    create: XOR<userCreateWithoutVideoInput, userUncheckedCreateWithoutVideoInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutVideoInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutVideoInput, userUncheckedUpdateWithoutVideoInput>;
  };

  export type userUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    startup?: startupUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    startup_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type video_trendUpsertWithWhereUniqueWithoutVideoInput = {
    where: video_trendWhereUniqueInput;
    update: XOR<video_trendUpdateWithoutVideoInput, video_trendUncheckedUpdateWithoutVideoInput>;
    create: XOR<video_trendCreateWithoutVideoInput, video_trendUncheckedCreateWithoutVideoInput>;
  };

  export type video_trendUpdateWithWhereUniqueWithoutVideoInput = {
    where: video_trendWhereUniqueInput;
    data: XOR<video_trendUpdateWithoutVideoInput, video_trendUncheckedUpdateWithoutVideoInput>;
  };

  export type video_trendUpdateManyWithWhereWithoutVideoInput = {
    where: video_trendScalarWhereInput;
    data: XOR<video_trendUpdateManyMutationInput, video_trendUncheckedUpdateManyWithoutVideoInput>;
  };

  export type trendCreateWithoutVideo_trendInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trendUncheckedCreateWithoutVideo_trendInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trendCreateOrConnectWithoutVideo_trendInput = {
    where: trendWhereUniqueInput;
    create: XOR<trendCreateWithoutVideo_trendInput, trendUncheckedCreateWithoutVideo_trendInput>;
  };

  export type videoCreateWithoutVideo_trendInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    hashtag?: hashtagCreateNestedManyWithoutVideoInput;
    user: userCreateNestedOneWithoutVideoInput;
  };

  export type videoUncheckedCreateWithoutVideo_trendInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    hashtag?: hashtagUncheckedCreateNestedManyWithoutVideoInput;
  };

  export type videoCreateOrConnectWithoutVideo_trendInput = {
    where: videoWhereUniqueInput;
    create: XOR<videoCreateWithoutVideo_trendInput, videoUncheckedCreateWithoutVideo_trendInput>;
  };

  export type trendUpsertWithoutVideo_trendInput = {
    update: XOR<trendUpdateWithoutVideo_trendInput, trendUncheckedUpdateWithoutVideo_trendInput>;
    create: XOR<trendCreateWithoutVideo_trendInput, trendUncheckedCreateWithoutVideo_trendInput>;
    where?: trendWhereInput;
  };

  export type trendUpdateToOneWithWhereWithoutVideo_trendInput = {
    where?: trendWhereInput;
    data: XOR<trendUpdateWithoutVideo_trendInput, trendUncheckedUpdateWithoutVideo_trendInput>;
  };

  export type trendUpdateWithoutVideo_trendInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trendUncheckedUpdateWithoutVideo_trendInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoUpsertWithoutVideo_trendInput = {
    update: XOR<videoUpdateWithoutVideo_trendInput, videoUncheckedUpdateWithoutVideo_trendInput>;
    create: XOR<videoCreateWithoutVideo_trendInput, videoUncheckedCreateWithoutVideo_trendInput>;
    where?: videoWhereInput;
  };

  export type videoUpdateToOneWithWhereWithoutVideo_trendInput = {
    where?: videoWhereInput;
    data: XOR<videoUpdateWithoutVideo_trendInput, videoUncheckedUpdateWithoutVideo_trendInput>;
  };

  export type videoUpdateWithoutVideo_trendInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    hashtag?: hashtagUpdateManyWithoutVideoNestedInput;
    user?: userUpdateOneRequiredWithoutVideoNestedInput;
  };

  export type videoUncheckedUpdateWithoutVideo_trendInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    hashtag?: hashtagUncheckedUpdateManyWithoutVideoNestedInput;
  };

  export type userCreateManyStartupInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    video?: videoUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    video?: videoUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutStartupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type video_trendCreateManyTrendInput = {
    id?: string;
    video_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type video_trendUpdateWithoutTrendInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    video?: videoUpdateOneRequiredWithoutVideo_trendNestedInput;
  };

  export type video_trendUncheckedUpdateWithoutTrendInput = {
    id?: StringFieldUpdateOperationsInput | string;
    video_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type video_trendUncheckedUpdateManyWithoutTrendInput = {
    id?: StringFieldUpdateOperationsInput | string;
    video_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type videoCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type videoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    hashtag?: hashtagUpdateManyWithoutVideoNestedInput;
    video_trend?: video_trendUpdateManyWithoutVideoNestedInput;
  };

  export type videoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    hashtag?: hashtagUncheckedUpdateManyWithoutVideoNestedInput;
    video_trend?: video_trendUncheckedUpdateManyWithoutVideoNestedInput;
  };

  export type videoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hashtagCreateManyVideoInput = {
    id?: string;
    tag: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type video_trendCreateManyVideoInput = {
    id?: string;
    trend_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hashtagUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tag?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hashtagUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tag?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hashtagUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tag?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type video_trendUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    trend?: trendUpdateOneRequiredWithoutVideo_trendNestedInput;
  };

  export type video_trendUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    trend_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type video_trendUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    trend_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use StartupCountOutputTypeDefaultArgs instead
   */
  export type StartupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    StartupCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TrendCountOutputTypeDefaultArgs instead
   */
  export type TrendCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TrendCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use VideoCountOutputTypeDefaultArgs instead
   */
  export type VideoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    VideoCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use hashtagDefaultArgs instead
   */
  export type hashtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    hashtagDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use startupDefaultArgs instead
   */
  export type startupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    startupDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use trendDefaultArgs instead
   */
  export type trendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = trendDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use videoDefaultArgs instead
   */
  export type videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = videoDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use video_trendDefaultArgs instead
   */
  export type video_trendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    video_trendDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
