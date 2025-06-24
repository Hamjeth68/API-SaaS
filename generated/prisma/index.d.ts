
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
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model ClassStudent
 * 
 */
export type ClassStudent = $Result.DefaultSelection<Prisma.$ClassStudentPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Communication
 * 
 */
export type Communication = $Result.DefaultSelection<Prisma.$CommunicationPayload>
/**
 * Model Fee
 * 
 */
export type Fee = $Result.DefaultSelection<Prisma.$FeePayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model Timetable
 * 
 */
export type Timetable = $Result.DefaultSelection<Prisma.$TimetablePayload>
/**
 * Model Payroll
 * 
 */
export type Payroll = $Result.DefaultSelection<Prisma.$PayrollPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SYS_ADMIN: 'SYS_ADMIN',
  SCHOOL_ADMIN: 'SCHOOL_ADMIN',
  TEACHER: 'TEACHER',
  PARENT: 'PARENT',
  STUDENT: 'STUDENT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LATE: 'LATE',
  EXCUSED: 'EXCUSED'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const FeeStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELLED: 'CANCELLED'
};

export type FeeStatus = (typeof FeeStatus)[keyof typeof FeeStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type FeeStatus = $Enums.FeeStatus

export const FeeStatus: typeof $Enums.FeeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
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
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classStudent`: Exposes CRUD operations for the **ClassStudent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassStudents
    * const classStudents = await prisma.classStudent.findMany()
    * ```
    */
  get classStudent(): Prisma.ClassStudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communication`: Exposes CRUD operations for the **Communication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communications
    * const communications = await prisma.communication.findMany()
    * ```
    */
  get communication(): Prisma.CommunicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fee`: Exposes CRUD operations for the **Fee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fees
    * const fees = await prisma.fee.findMany()
    * ```
    */
  get fee(): Prisma.FeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timetable`: Exposes CRUD operations for the **Timetable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timetables
    * const timetables = await prisma.timetable.findMany()
    * ```
    */
  get timetable(): Prisma.TimetableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payroll`: Exposes CRUD operations for the **Payroll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payrolls
    * const payrolls = await prisma.payroll.findMany()
    * ```
    */
  get payroll(): Prisma.PayrollDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Tenant: 'Tenant',
    User: 'User',
    Student: 'Student',
    Staff: 'Staff',
    Class: 'Class',
    ClassStudent: 'ClassStudent',
    Attendance: 'Attendance',
    Communication: 'Communication',
    Fee: 'Fee',
    Report: 'Report',
    Timetable: 'Timetable',
    Payroll: 'Payroll'
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
      modelProps: "tenant" | "user" | "student" | "staff" | "class" | "classStudent" | "attendance" | "communication" | "fee" | "report" | "timetable" | "payroll"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
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
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      ClassStudent: {
        payload: Prisma.$ClassStudentPayload<ExtArgs>
        fields: Prisma.ClassStudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassStudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassStudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          findFirst: {
            args: Prisma.ClassStudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassStudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          findMany: {
            args: Prisma.ClassStudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>[]
          }
          create: {
            args: Prisma.ClassStudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          createMany: {
            args: Prisma.ClassStudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassStudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>[]
          }
          delete: {
            args: Prisma.ClassStudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          update: {
            args: Prisma.ClassStudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          deleteMany: {
            args: Prisma.ClassStudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassStudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassStudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>[]
          }
          upsert: {
            args: Prisma.ClassStudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          aggregate: {
            args: Prisma.ClassStudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassStudent>
          }
          groupBy: {
            args: Prisma.ClassStudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassStudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassStudentCountArgs<ExtArgs>
            result: $Utils.Optional<ClassStudentCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Communication: {
        payload: Prisma.$CommunicationPayload<ExtArgs>
        fields: Prisma.CommunicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          findFirst: {
            args: Prisma.CommunicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          findMany: {
            args: Prisma.CommunicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>[]
          }
          create: {
            args: Prisma.CommunicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          createMany: {
            args: Prisma.CommunicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>[]
          }
          delete: {
            args: Prisma.CommunicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          update: {
            args: Prisma.CommunicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          deleteMany: {
            args: Prisma.CommunicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>[]
          }
          upsert: {
            args: Prisma.CommunicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          aggregate: {
            args: Prisma.CommunicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunication>
          }
          groupBy: {
            args: Prisma.CommunicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunicationCountArgs<ExtArgs>
            result: $Utils.Optional<CommunicationCountAggregateOutputType> | number
          }
        }
      }
      Fee: {
        payload: Prisma.$FeePayload<ExtArgs>
        fields: Prisma.FeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          findFirst: {
            args: Prisma.FeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          findMany: {
            args: Prisma.FeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>[]
          }
          create: {
            args: Prisma.FeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          createMany: {
            args: Prisma.FeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>[]
          }
          delete: {
            args: Prisma.FeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          update: {
            args: Prisma.FeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          deleteMany: {
            args: Prisma.FeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>[]
          }
          upsert: {
            args: Prisma.FeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeePayload>
          }
          aggregate: {
            args: Prisma.FeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFee>
          }
          groupBy: {
            args: Prisma.FeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeeCountArgs<ExtArgs>
            result: $Utils.Optional<FeeCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      Timetable: {
        payload: Prisma.$TimetablePayload<ExtArgs>
        fields: Prisma.TimetableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimetableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimetableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          findFirst: {
            args: Prisma.TimetableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimetableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          findMany: {
            args: Prisma.TimetableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          create: {
            args: Prisma.TimetableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          createMany: {
            args: Prisma.TimetableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimetableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          delete: {
            args: Prisma.TimetableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          update: {
            args: Prisma.TimetableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          deleteMany: {
            args: Prisma.TimetableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimetableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimetableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          upsert: {
            args: Prisma.TimetableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          aggregate: {
            args: Prisma.TimetableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimetable>
          }
          groupBy: {
            args: Prisma.TimetableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimetableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimetableCountArgs<ExtArgs>
            result: $Utils.Optional<TimetableCountAggregateOutputType> | number
          }
        }
      }
      Payroll: {
        payload: Prisma.$PayrollPayload<ExtArgs>
        fields: Prisma.PayrollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findFirst: {
            args: Prisma.PayrollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findMany: {
            args: Prisma.PayrollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          create: {
            args: Prisma.PayrollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          createMany: {
            args: Prisma.PayrollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          delete: {
            args: Prisma.PayrollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          update: {
            args: Prisma.PayrollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          deleteMany: {
            args: Prisma.PayrollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          upsert: {
            args: Prisma.PayrollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          aggregate: {
            args: Prisma.PayrollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayroll>
          }
          groupBy: {
            args: Prisma.PayrollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollCountAggregateOutputType> | number
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
    tenant?: TenantOmit
    user?: UserOmit
    student?: StudentOmit
    staff?: StaffOmit
    class?: ClassOmit
    classStudent?: ClassStudentOmit
    attendance?: AttendanceOmit
    communication?: CommunicationOmit
    fee?: FeeOmit
    report?: ReportOmit
    timetable?: TimetableOmit
    payroll?: PayrollOmit
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
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    users: number
    staff: number
    students: number
    classes: number
    attendances: number
    fees: number
    communications: number
    reports: number
    timetables: number
    payrolls: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    staff?: boolean | TenantCountOutputTypeCountStaffArgs
    students?: boolean | TenantCountOutputTypeCountStudentsArgs
    classes?: boolean | TenantCountOutputTypeCountClassesArgs
    attendances?: boolean | TenantCountOutputTypeCountAttendancesArgs
    fees?: boolean | TenantCountOutputTypeCountFeesArgs
    communications?: boolean | TenantCountOutputTypeCountCommunicationsArgs
    reports?: boolean | TenantCountOutputTypeCountReportsArgs
    timetables?: boolean | TenantCountOutputTypeCountTimetablesArgs
    payrolls?: boolean | TenantCountOutputTypeCountPayrollsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCommunicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountTimetablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimetableWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPayrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    communications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communications?: boolean | UserCountOutputTypeCountCommunicationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    attendances: number
    fees: number
    classStudents: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | StudentCountOutputTypeCountAttendancesArgs
    fees?: boolean | StudentCountOutputTypeCountFeesArgs
    classStudents?: boolean | StudentCountOutputTypeCountClassStudentsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountClassStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassStudentWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    attendances: number
    classes: number
    payrolls: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | StaffCountOutputTypeCountAttendancesArgs
    classes?: boolean | StaffCountOutputTypeCountClassesArgs
    payrolls?: boolean | StaffCountOutputTypeCountPayrollsArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountPayrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    attendances: number
    classStudents: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | ClassCountOutputTypeCountAttendancesArgs
    classStudents?: boolean | ClassCountOutputTypeCountClassStudentsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountClassStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassStudentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    maxStudents: number | null
  }

  export type TenantSumAggregateOutputType = {
    maxStudents: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    subdomain: string | null
    email: string | null
    phone: string | null
    address: string | null
    logo: string | null
    maxStudents: number | null
    subscription: string | null
    timezone: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    subdomain: string | null
    email: string | null
    phone: string | null
    address: string | null
    logo: string | null
    maxStudents: number | null
    subscription: string | null
    timezone: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    subdomain: number
    email: number
    phone: number
    address: number
    logo: number
    languages: number
    maxStudents: number
    subscription: number
    timezone: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    maxStudents?: true
  }

  export type TenantSumAggregateInputType = {
    maxStudents?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    subdomain?: true
    email?: true
    phone?: true
    address?: true
    logo?: true
    maxStudents?: true
    subscription?: true
    timezone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    subdomain?: true
    email?: true
    phone?: true
    address?: true
    logo?: true
    maxStudents?: true
    subscription?: true
    timezone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    subdomain?: true
    email?: true
    phone?: true
    address?: true
    logo?: true
    languages?: true
    maxStudents?: true
    subscription?: true
    timezone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    subdomain: string | null
    email: string
    phone: string | null
    address: string | null
    logo: string | null
    languages: string[]
    maxStudents: number
    subscription: string
    timezone: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    subdomain?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logo?: boolean
    languages?: boolean
    maxStudents?: boolean
    subscription?: boolean
    timezone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Tenant$usersArgs<ExtArgs>
    staff?: boolean | Tenant$staffArgs<ExtArgs>
    students?: boolean | Tenant$studentsArgs<ExtArgs>
    classes?: boolean | Tenant$classesArgs<ExtArgs>
    attendances?: boolean | Tenant$attendancesArgs<ExtArgs>
    fees?: boolean | Tenant$feesArgs<ExtArgs>
    communications?: boolean | Tenant$communicationsArgs<ExtArgs>
    reports?: boolean | Tenant$reportsArgs<ExtArgs>
    timetables?: boolean | Tenant$timetablesArgs<ExtArgs>
    payrolls?: boolean | Tenant$payrollsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    subdomain?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logo?: boolean
    languages?: boolean
    maxStudents?: boolean
    subscription?: boolean
    timezone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    subdomain?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logo?: boolean
    languages?: boolean
    maxStudents?: boolean
    subscription?: boolean
    timezone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    subdomain?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    logo?: boolean
    languages?: boolean
    maxStudents?: boolean
    subscription?: boolean
    timezone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "subdomain" | "email" | "phone" | "address" | "logo" | "languages" | "maxStudents" | "subscription" | "timezone" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tenant$usersArgs<ExtArgs>
    staff?: boolean | Tenant$staffArgs<ExtArgs>
    students?: boolean | Tenant$studentsArgs<ExtArgs>
    classes?: boolean | Tenant$classesArgs<ExtArgs>
    attendances?: boolean | Tenant$attendancesArgs<ExtArgs>
    fees?: boolean | Tenant$feesArgs<ExtArgs>
    communications?: boolean | Tenant$communicationsArgs<ExtArgs>
    reports?: boolean | Tenant$reportsArgs<ExtArgs>
    timetables?: boolean | Tenant$timetablesArgs<ExtArgs>
    payrolls?: boolean | Tenant$payrollsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      staff: Prisma.$StaffPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      classes: Prisma.$ClassPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      fees: Prisma.$FeePayload<ExtArgs>[]
      communications: Prisma.$CommunicationPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      timetables: Prisma.$TimetablePayload<ExtArgs>[]
      payrolls: Prisma.$PayrollPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      subdomain: string | null
      email: string
      phone: string | null
      address: string | null
      logo: string | null
      languages: string[]
      maxStudents: number
      subscription: string
      timezone: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends Tenant$staffArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Tenant$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends Tenant$classesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends Tenant$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fees<T extends Tenant$feesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$feesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    communications<T extends Tenant$communicationsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$communicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Tenant$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timetables<T extends Tenant$timetablesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$timetablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payrolls<T extends Tenant$payrollsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$payrollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly subdomain: FieldRef<"Tenant", 'String'>
    readonly email: FieldRef<"Tenant", 'String'>
    readonly phone: FieldRef<"Tenant", 'String'>
    readonly address: FieldRef<"Tenant", 'String'>
    readonly logo: FieldRef<"Tenant", 'String'>
    readonly languages: FieldRef<"Tenant", 'String[]'>
    readonly maxStudents: FieldRef<"Tenant", 'Int'>
    readonly subscription: FieldRef<"Tenant", 'String'>
    readonly timezone: FieldRef<"Tenant", 'String'>
    readonly isActive: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.staff
   */
  export type Tenant$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Tenant.students
   */
  export type Tenant$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Tenant.classes
   */
  export type Tenant$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Tenant.attendances
   */
  export type Tenant$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Tenant.fees
   */
  export type Tenant$feesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    where?: FeeWhereInput
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    cursor?: FeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeeScalarFieldEnum | FeeScalarFieldEnum[]
  }

  /**
   * Tenant.communications
   */
  export type Tenant$communicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    where?: CommunicationWhereInput
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    cursor?: CommunicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Tenant.reports
   */
  export type Tenant$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Tenant.timetables
   */
  export type Tenant$timetablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    where?: TimetableWhereInput
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    cursor?: TimetableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Tenant.payrolls
   */
  export type Tenant$payrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    cursor?: PayrollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
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
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    isActive: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    tenantId?: true
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
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive: boolean
    tenantId: string
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
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    communications?: boolean | User$communicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "isActive" | "tenantId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    communications?: boolean | User$communicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      staff: Prisma.$StaffPayload<ExtArgs> | null
      communications: Prisma.$CommunicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.UserRole
      isActive: boolean
      tenantId: string
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
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends User$staffArgs<ExtArgs> = {}>(args?: Subset<T, User$staffArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    communications<T extends User$communicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$communicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly tenantId: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.staff
   */
  export type User$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * User.communications
   */
  export type User$communicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    where?: CommunicationWhereInput
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    cursor?: CommunicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    isActive: boolean | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    isActive: boolean | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    isActive: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isActive?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isActive?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isActive?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string | null
    phone: string | null
    isActive: boolean
    tenantId: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    attendances?: boolean | Student$attendancesArgs<ExtArgs>
    fees?: boolean | Student$feesArgs<ExtArgs>
    classStudents?: boolean | Student$classStudentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "isActive" | "tenantId" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    attendances?: boolean | Student$attendancesArgs<ExtArgs>
    fees?: boolean | Student$feesArgs<ExtArgs>
    classStudents?: boolean | Student$classStudentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      fees: Prisma.$FeePayload<ExtArgs>[]
      classStudents: Prisma.$ClassStudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string | null
      phone: string | null
      isActive: boolean
      tenantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Student$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fees<T extends Student$feesArgs<ExtArgs> = {}>(args?: Subset<T, Student$feesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classStudents<T extends Student$classStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$classStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly isActive: FieldRef<"Student", 'Boolean'>
    readonly tenantId: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.attendances
   */
  export type Student$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Student.fees
   */
  export type Student$feesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    where?: FeeWhereInput
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    cursor?: FeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeeScalarFieldEnum | FeeScalarFieldEnum[]
  }

  /**
   * Student.classStudents
   */
  export type Student$classStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    where?: ClassStudentWhereInput
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    cursor?: ClassStudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    staffId: string | null
    position: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    staffId: string | null
    position: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    userId: number
    tenantId: number
    staffId: number
    position: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    staffId?: true
    position?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    staffId?: true
    position?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    staffId?: true
    position?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    userId: string
    tenantId: string
    staffId: string
    position: string
    department: string | null
    createdAt: Date
    updatedAt: Date
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    staffId?: boolean
    position?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    attendances?: boolean | Staff$attendancesArgs<ExtArgs>
    classes?: boolean | Staff$classesArgs<ExtArgs>
    payrolls?: boolean | Staff$payrollsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    staffId?: boolean
    position?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    staffId?: boolean
    position?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    staffId?: boolean
    position?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tenantId" | "staffId" | "position" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    attendances?: boolean | Staff$attendancesArgs<ExtArgs>
    classes?: boolean | Staff$classesArgs<ExtArgs>
    payrolls?: boolean | Staff$payrollsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      classes: Prisma.$ClassPayload<ExtArgs>[]
      payrolls: Prisma.$PayrollPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tenantId: string
      staffId: string
      position: string
      department: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
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
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Staff$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Staff$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends Staff$classesArgs<ExtArgs> = {}>(args?: Subset<T, Staff$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payrolls<T extends Staff$payrollsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$payrollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly userId: FieldRef<"Staff", 'String'>
    readonly tenantId: FieldRef<"Staff", 'String'>
    readonly staffId: FieldRef<"Staff", 'String'>
    readonly position: FieldRef<"Staff", 'String'>
    readonly department: FieldRef<"Staff", 'String'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.attendances
   */
  export type Staff$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Staff.classes
   */
  export type Staff$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Staff.payrolls
   */
  export type Staff$payrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    cursor?: PayrollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    name: string | null
    grade: string | null
    section: string | null
    isActive: boolean | null
    tenantId: string | null
    teacherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
    grade: string | null
    section: string | null
    isActive: boolean | null
    tenantId: string | null
    teacherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    grade: number
    section: number
    isActive: number
    tenantId: number
    teacherId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    grade?: true
    section?: true
    isActive?: true
    tenantId?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    grade?: true
    section?: true
    isActive?: true
    tenantId?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    grade?: true
    section?: true
    isActive?: true
    tenantId?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    name: string
    grade: string | null
    section: string | null
    isActive: boolean
    tenantId: string
    teacherId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    grade?: boolean
    section?: boolean
    isActive?: boolean
    tenantId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    teacher?: boolean | Class$teacherArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    classStudents?: boolean | Class$classStudentsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    grade?: boolean
    section?: boolean
    isActive?: boolean
    tenantId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    teacher?: boolean | Class$teacherArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    grade?: boolean
    section?: boolean
    isActive?: boolean
    tenantId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    teacher?: boolean | Class$teacherArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    grade?: boolean
    section?: boolean
    isActive?: boolean
    tenantId?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "grade" | "section" | "isActive" | "tenantId" | "teacherId" | "createdAt" | "updatedAt", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    teacher?: boolean | Class$teacherArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    classStudents?: boolean | Class$classStudentsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    teacher?: boolean | Class$teacherArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    teacher?: boolean | Class$teacherArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      teacher: Prisma.$StaffPayload<ExtArgs> | null
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      classStudents: Prisma.$ClassStudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      grade: string | null
      section: string | null
      isActive: boolean
      tenantId: string
      teacherId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends Class$teacherArgs<ExtArgs> = {}>(args?: Subset<T, Class$teacherArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Class$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Class$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classStudents<T extends Class$classStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$classStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly grade: FieldRef<"Class", 'String'>
    readonly section: FieldRef<"Class", 'String'>
    readonly isActive: FieldRef<"Class", 'Boolean'>
    readonly tenantId: FieldRef<"Class", 'String'>
    readonly teacherId: FieldRef<"Class", 'String'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
    readonly updatedAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.teacher
   */
  export type Class$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * Class.attendances
   */
  export type Class$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Class.classStudents
   */
  export type Class$classStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    where?: ClassStudentWhereInput
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    cursor?: ClassStudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model ClassStudent
   */

  export type AggregateClassStudent = {
    _count: ClassStudentCountAggregateOutputType | null
    _min: ClassStudentMinAggregateOutputType | null
    _max: ClassStudentMaxAggregateOutputType | null
  }

  export type ClassStudentMinAggregateOutputType = {
    id: string | null
    classId: string | null
    studentId: string | null
    tenantId: string | null
    createdAt: Date | null
  }

  export type ClassStudentMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    studentId: string | null
    tenantId: string | null
    createdAt: Date | null
  }

  export type ClassStudentCountAggregateOutputType = {
    id: number
    classId: number
    studentId: number
    tenantId: number
    createdAt: number
    _all: number
  }


  export type ClassStudentMinAggregateInputType = {
    id?: true
    classId?: true
    studentId?: true
    tenantId?: true
    createdAt?: true
  }

  export type ClassStudentMaxAggregateInputType = {
    id?: true
    classId?: true
    studentId?: true
    tenantId?: true
    createdAt?: true
  }

  export type ClassStudentCountAggregateInputType = {
    id?: true
    classId?: true
    studentId?: true
    tenantId?: true
    createdAt?: true
    _all?: true
  }

  export type ClassStudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassStudent to aggregate.
     */
    where?: ClassStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassStudents to fetch.
     */
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassStudents
    **/
    _count?: true | ClassStudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassStudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassStudentMaxAggregateInputType
  }

  export type GetClassStudentAggregateType<T extends ClassStudentAggregateArgs> = {
        [P in keyof T & keyof AggregateClassStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassStudent[P]>
      : GetScalarType<T[P], AggregateClassStudent[P]>
  }




  export type ClassStudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassStudentWhereInput
    orderBy?: ClassStudentOrderByWithAggregationInput | ClassStudentOrderByWithAggregationInput[]
    by: ClassStudentScalarFieldEnum[] | ClassStudentScalarFieldEnum
    having?: ClassStudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassStudentCountAggregateInputType | true
    _min?: ClassStudentMinAggregateInputType
    _max?: ClassStudentMaxAggregateInputType
  }

  export type ClassStudentGroupByOutputType = {
    id: string
    classId: string
    studentId: string
    tenantId: string
    createdAt: Date
    _count: ClassStudentCountAggregateOutputType | null
    _min: ClassStudentMinAggregateOutputType | null
    _max: ClassStudentMaxAggregateOutputType | null
  }

  type GetClassStudentGroupByPayload<T extends ClassStudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassStudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassStudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassStudentGroupByOutputType[P]>
            : GetScalarType<T[P], ClassStudentGroupByOutputType[P]>
        }
      >
    >


  export type ClassStudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    studentId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classStudent"]>

  export type ClassStudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    studentId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classStudent"]>

  export type ClassStudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    studentId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classStudent"]>

  export type ClassStudentSelectScalar = {
    id?: boolean
    classId?: boolean
    studentId?: boolean
    tenantId?: boolean
    createdAt?: boolean
  }

  export type ClassStudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "studentId" | "tenantId" | "createdAt", ExtArgs["result"]["classStudent"]>
  export type ClassStudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ClassStudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ClassStudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ClassStudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassStudent"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classId: string
      studentId: string
      tenantId: string
      createdAt: Date
    }, ExtArgs["result"]["classStudent"]>
    composites: {}
  }

  type ClassStudentGetPayload<S extends boolean | null | undefined | ClassStudentDefaultArgs> = $Result.GetResult<Prisma.$ClassStudentPayload, S>

  type ClassStudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassStudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassStudentCountAggregateInputType | true
    }

  export interface ClassStudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassStudent'], meta: { name: 'ClassStudent' } }
    /**
     * Find zero or one ClassStudent that matches the filter.
     * @param {ClassStudentFindUniqueArgs} args - Arguments to find a ClassStudent
     * @example
     * // Get one ClassStudent
     * const classStudent = await prisma.classStudent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassStudentFindUniqueArgs>(args: SelectSubset<T, ClassStudentFindUniqueArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassStudent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassStudentFindUniqueOrThrowArgs} args - Arguments to find a ClassStudent
     * @example
     * // Get one ClassStudent
     * const classStudent = await prisma.classStudent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassStudentFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassStudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassStudent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentFindFirstArgs} args - Arguments to find a ClassStudent
     * @example
     * // Get one ClassStudent
     * const classStudent = await prisma.classStudent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassStudentFindFirstArgs>(args?: SelectSubset<T, ClassStudentFindFirstArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassStudent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentFindFirstOrThrowArgs} args - Arguments to find a ClassStudent
     * @example
     * // Get one ClassStudent
     * const classStudent = await prisma.classStudent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassStudentFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassStudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassStudents
     * const classStudents = await prisma.classStudent.findMany()
     * 
     * // Get first 10 ClassStudents
     * const classStudents = await prisma.classStudent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classStudentWithIdOnly = await prisma.classStudent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassStudentFindManyArgs>(args?: SelectSubset<T, ClassStudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassStudent.
     * @param {ClassStudentCreateArgs} args - Arguments to create a ClassStudent.
     * @example
     * // Create one ClassStudent
     * const ClassStudent = await prisma.classStudent.create({
     *   data: {
     *     // ... data to create a ClassStudent
     *   }
     * })
     * 
     */
    create<T extends ClassStudentCreateArgs>(args: SelectSubset<T, ClassStudentCreateArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassStudents.
     * @param {ClassStudentCreateManyArgs} args - Arguments to create many ClassStudents.
     * @example
     * // Create many ClassStudents
     * const classStudent = await prisma.classStudent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassStudentCreateManyArgs>(args?: SelectSubset<T, ClassStudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassStudents and returns the data saved in the database.
     * @param {ClassStudentCreateManyAndReturnArgs} args - Arguments to create many ClassStudents.
     * @example
     * // Create many ClassStudents
     * const classStudent = await prisma.classStudent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassStudents and only return the `id`
     * const classStudentWithIdOnly = await prisma.classStudent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassStudentCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassStudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassStudent.
     * @param {ClassStudentDeleteArgs} args - Arguments to delete one ClassStudent.
     * @example
     * // Delete one ClassStudent
     * const ClassStudent = await prisma.classStudent.delete({
     *   where: {
     *     // ... filter to delete one ClassStudent
     *   }
     * })
     * 
     */
    delete<T extends ClassStudentDeleteArgs>(args: SelectSubset<T, ClassStudentDeleteArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassStudent.
     * @param {ClassStudentUpdateArgs} args - Arguments to update one ClassStudent.
     * @example
     * // Update one ClassStudent
     * const classStudent = await prisma.classStudent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassStudentUpdateArgs>(args: SelectSubset<T, ClassStudentUpdateArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassStudents.
     * @param {ClassStudentDeleteManyArgs} args - Arguments to filter ClassStudents to delete.
     * @example
     * // Delete a few ClassStudents
     * const { count } = await prisma.classStudent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassStudentDeleteManyArgs>(args?: SelectSubset<T, ClassStudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassStudents
     * const classStudent = await prisma.classStudent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassStudentUpdateManyArgs>(args: SelectSubset<T, ClassStudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassStudents and returns the data updated in the database.
     * @param {ClassStudentUpdateManyAndReturnArgs} args - Arguments to update many ClassStudents.
     * @example
     * // Update many ClassStudents
     * const classStudent = await prisma.classStudent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassStudents and only return the `id`
     * const classStudentWithIdOnly = await prisma.classStudent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassStudentUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassStudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassStudent.
     * @param {ClassStudentUpsertArgs} args - Arguments to update or create a ClassStudent.
     * @example
     * // Update or create a ClassStudent
     * const classStudent = await prisma.classStudent.upsert({
     *   create: {
     *     // ... data to create a ClassStudent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassStudent we want to update
     *   }
     * })
     */
    upsert<T extends ClassStudentUpsertArgs>(args: SelectSubset<T, ClassStudentUpsertArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentCountArgs} args - Arguments to filter ClassStudents to count.
     * @example
     * // Count the number of ClassStudents
     * const count = await prisma.classStudent.count({
     *   where: {
     *     // ... the filter for the ClassStudents we want to count
     *   }
     * })
    **/
    count<T extends ClassStudentCountArgs>(
      args?: Subset<T, ClassStudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassStudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassStudentAggregateArgs>(args: Subset<T, ClassStudentAggregateArgs>): Prisma.PrismaPromise<GetClassStudentAggregateType<T>>

    /**
     * Group by ClassStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentGroupByArgs} args - Group by arguments.
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
      T extends ClassStudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassStudentGroupByArgs['orderBy'] }
        : { orderBy?: ClassStudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassStudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassStudent model
   */
  readonly fields: ClassStudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassStudent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassStudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClassStudent model
   */
  interface ClassStudentFieldRefs {
    readonly id: FieldRef<"ClassStudent", 'String'>
    readonly classId: FieldRef<"ClassStudent", 'String'>
    readonly studentId: FieldRef<"ClassStudent", 'String'>
    readonly tenantId: FieldRef<"ClassStudent", 'String'>
    readonly createdAt: FieldRef<"ClassStudent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassStudent findUnique
   */
  export type ClassStudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudent to fetch.
     */
    where: ClassStudentWhereUniqueInput
  }

  /**
   * ClassStudent findUniqueOrThrow
   */
  export type ClassStudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudent to fetch.
     */
    where: ClassStudentWhereUniqueInput
  }

  /**
   * ClassStudent findFirst
   */
  export type ClassStudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudent to fetch.
     */
    where?: ClassStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassStudents to fetch.
     */
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassStudents.
     */
    cursor?: ClassStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassStudents.
     */
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * ClassStudent findFirstOrThrow
   */
  export type ClassStudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudent to fetch.
     */
    where?: ClassStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassStudents to fetch.
     */
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassStudents.
     */
    cursor?: ClassStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassStudents.
     */
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * ClassStudent findMany
   */
  export type ClassStudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudents to fetch.
     */
    where?: ClassStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassStudents to fetch.
     */
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassStudents.
     */
    cursor?: ClassStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassStudents.
     */
    skip?: number
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * ClassStudent create
   */
  export type ClassStudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassStudent.
     */
    data: XOR<ClassStudentCreateInput, ClassStudentUncheckedCreateInput>
  }

  /**
   * ClassStudent createMany
   */
  export type ClassStudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassStudents.
     */
    data: ClassStudentCreateManyInput | ClassStudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassStudent createManyAndReturn
   */
  export type ClassStudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * The data used to create many ClassStudents.
     */
    data: ClassStudentCreateManyInput | ClassStudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassStudent update
   */
  export type ClassStudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassStudent.
     */
    data: XOR<ClassStudentUpdateInput, ClassStudentUncheckedUpdateInput>
    /**
     * Choose, which ClassStudent to update.
     */
    where: ClassStudentWhereUniqueInput
  }

  /**
   * ClassStudent updateMany
   */
  export type ClassStudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassStudents.
     */
    data: XOR<ClassStudentUpdateManyMutationInput, ClassStudentUncheckedUpdateManyInput>
    /**
     * Filter which ClassStudents to update
     */
    where?: ClassStudentWhereInput
    /**
     * Limit how many ClassStudents to update.
     */
    limit?: number
  }

  /**
   * ClassStudent updateManyAndReturn
   */
  export type ClassStudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * The data used to update ClassStudents.
     */
    data: XOR<ClassStudentUpdateManyMutationInput, ClassStudentUncheckedUpdateManyInput>
    /**
     * Filter which ClassStudents to update
     */
    where?: ClassStudentWhereInput
    /**
     * Limit how many ClassStudents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassStudent upsert
   */
  export type ClassStudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassStudent to update in case it exists.
     */
    where: ClassStudentWhereUniqueInput
    /**
     * In case the ClassStudent found by the `where` argument doesn't exist, create a new ClassStudent with this data.
     */
    create: XOR<ClassStudentCreateInput, ClassStudentUncheckedCreateInput>
    /**
     * In case the ClassStudent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassStudentUpdateInput, ClassStudentUncheckedUpdateInput>
  }

  /**
   * ClassStudent delete
   */
  export type ClassStudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter which ClassStudent to delete.
     */
    where: ClassStudentWhereUniqueInput
  }

  /**
   * ClassStudent deleteMany
   */
  export type ClassStudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassStudents to delete
     */
    where?: ClassStudentWhereInput
    /**
     * Limit how many ClassStudents to delete.
     */
    limit?: number
  }

  /**
   * ClassStudent without action
   */
  export type ClassStudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    date: string | null
    status: $Enums.AttendanceStatus | null
    studentId: string | null
    staffId: string | null
    classId: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    date: string | null
    status: $Enums.AttendanceStatus | null
    studentId: string | null
    staffId: string | null
    classId: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    date: number
    status: number
    studentId: number
    staffId: number
    classId: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
    studentId?: true
    staffId?: true
    classId?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
    studentId?: true
    staffId?: true
    classId?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    studentId?: true
    staffId?: true
    classId?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    date: string
    status: $Enums.AttendanceStatus
    studentId: string | null
    staffId: string | null
    classId: string | null
    tenantId: string
    createdAt: Date
    updatedAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    studentId?: boolean
    staffId?: boolean
    classId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | Attendance$studentArgs<ExtArgs>
    staff?: boolean | Attendance$staffArgs<ExtArgs>
    class?: boolean | Attendance$classArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    studentId?: boolean
    staffId?: boolean
    classId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | Attendance$studentArgs<ExtArgs>
    staff?: boolean | Attendance$staffArgs<ExtArgs>
    class?: boolean | Attendance$classArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    studentId?: boolean
    staffId?: boolean
    classId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | Attendance$studentArgs<ExtArgs>
    staff?: boolean | Attendance$staffArgs<ExtArgs>
    class?: boolean | Attendance$classArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    studentId?: boolean
    staffId?: boolean
    classId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "status" | "studentId" | "staffId" | "classId" | "tenantId" | "createdAt" | "updatedAt", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | Attendance$studentArgs<ExtArgs>
    staff?: boolean | Attendance$staffArgs<ExtArgs>
    class?: boolean | Attendance$classArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | Attendance$studentArgs<ExtArgs>
    staff?: boolean | Attendance$staffArgs<ExtArgs>
    class?: boolean | Attendance$classArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | Attendance$studentArgs<ExtArgs>
    staff?: boolean | Attendance$staffArgs<ExtArgs>
    class?: boolean | Attendance$classArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs> | null
      staff: Prisma.$StaffPayload<ExtArgs> | null
      class: Prisma.$ClassPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: string
      status: $Enums.AttendanceStatus
      studentId: string | null
      staffId: string | null
      classId: string | null
      tenantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends Attendance$studentArgs<ExtArgs> = {}>(args?: Subset<T, Attendance$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staff<T extends Attendance$staffArgs<ExtArgs> = {}>(args?: Subset<T, Attendance$staffArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    class<T extends Attendance$classArgs<ExtArgs> = {}>(args?: Subset<T, Attendance$classArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'String'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly studentId: FieldRef<"Attendance", 'String'>
    readonly staffId: FieldRef<"Attendance", 'String'>
    readonly classId: FieldRef<"Attendance", 'String'>
    readonly tenantId: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance.student
   */
  export type Attendance$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * Attendance.staff
   */
  export type Attendance$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * Attendance.class
   */
  export type Attendance$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Communication
   */

  export type AggregateCommunication = {
    _count: CommunicationCountAggregateOutputType | null
    _min: CommunicationMinAggregateOutputType | null
    _max: CommunicationMaxAggregateOutputType | null
  }

  export type CommunicationMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    type: string | null
    tenantId: string | null
    senderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunicationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    type: string | null
    tenantId: string | null
    senderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunicationCountAggregateOutputType = {
    id: number
    title: number
    content: number
    type: number
    audience: number
    tenantId: number
    senderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunicationMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    tenantId?: true
    senderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunicationMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    tenantId?: true
    senderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunicationCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    audience?: true
    tenantId?: true
    senderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communication to aggregate.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communications
    **/
    _count?: true | CommunicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunicationMaxAggregateInputType
  }

  export type GetCommunicationAggregateType<T extends CommunicationAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunication[P]>
      : GetScalarType<T[P], AggregateCommunication[P]>
  }




  export type CommunicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationWhereInput
    orderBy?: CommunicationOrderByWithAggregationInput | CommunicationOrderByWithAggregationInput[]
    by: CommunicationScalarFieldEnum[] | CommunicationScalarFieldEnum
    having?: CommunicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunicationCountAggregateInputType | true
    _min?: CommunicationMinAggregateInputType
    _max?: CommunicationMaxAggregateInputType
  }

  export type CommunicationGroupByOutputType = {
    id: string
    title: string
    content: string
    type: string
    audience: string[]
    tenantId: string
    senderId: string
    createdAt: Date
    updatedAt: Date
    _count: CommunicationCountAggregateOutputType | null
    _min: CommunicationMinAggregateOutputType | null
    _max: CommunicationMaxAggregateOutputType | null
  }

  type GetCommunicationGroupByPayload<T extends CommunicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunicationGroupByOutputType[P]>
            : GetScalarType<T[P], CommunicationGroupByOutputType[P]>
        }
      >
    >


  export type CommunicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    audience?: boolean
    tenantId?: boolean
    senderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>

  export type CommunicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    audience?: boolean
    tenantId?: boolean
    senderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>

  export type CommunicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    audience?: boolean
    tenantId?: boolean
    senderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>

  export type CommunicationSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    audience?: boolean
    tenantId?: boolean
    senderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "type" | "audience" | "tenantId" | "senderId" | "createdAt" | "updatedAt", ExtArgs["result"]["communication"]>
  export type CommunicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Communication"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      type: string
      audience: string[]
      tenantId: string
      senderId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communication"]>
    composites: {}
  }

  type CommunicationGetPayload<S extends boolean | null | undefined | CommunicationDefaultArgs> = $Result.GetResult<Prisma.$CommunicationPayload, S>

  type CommunicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunicationCountAggregateInputType | true
    }

  export interface CommunicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Communication'], meta: { name: 'Communication' } }
    /**
     * Find zero or one Communication that matches the filter.
     * @param {CommunicationFindUniqueArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunicationFindUniqueArgs>(args: SelectSubset<T, CommunicationFindUniqueArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Communication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunicationFindUniqueOrThrowArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunicationFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationFindFirstArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunicationFindFirstArgs>(args?: SelectSubset<T, CommunicationFindFirstArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationFindFirstOrThrowArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunicationFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communications
     * const communications = await prisma.communication.findMany()
     * 
     * // Get first 10 Communications
     * const communications = await prisma.communication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communicationWithIdOnly = await prisma.communication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunicationFindManyArgs>(args?: SelectSubset<T, CommunicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Communication.
     * @param {CommunicationCreateArgs} args - Arguments to create a Communication.
     * @example
     * // Create one Communication
     * const Communication = await prisma.communication.create({
     *   data: {
     *     // ... data to create a Communication
     *   }
     * })
     * 
     */
    create<T extends CommunicationCreateArgs>(args: SelectSubset<T, CommunicationCreateArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communications.
     * @param {CommunicationCreateManyArgs} args - Arguments to create many Communications.
     * @example
     * // Create many Communications
     * const communication = await prisma.communication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunicationCreateManyArgs>(args?: SelectSubset<T, CommunicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communications and returns the data saved in the database.
     * @param {CommunicationCreateManyAndReturnArgs} args - Arguments to create many Communications.
     * @example
     * // Create many Communications
     * const communication = await prisma.communication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communications and only return the `id`
     * const communicationWithIdOnly = await prisma.communication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunicationCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Communication.
     * @param {CommunicationDeleteArgs} args - Arguments to delete one Communication.
     * @example
     * // Delete one Communication
     * const Communication = await prisma.communication.delete({
     *   where: {
     *     // ... filter to delete one Communication
     *   }
     * })
     * 
     */
    delete<T extends CommunicationDeleteArgs>(args: SelectSubset<T, CommunicationDeleteArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Communication.
     * @param {CommunicationUpdateArgs} args - Arguments to update one Communication.
     * @example
     * // Update one Communication
     * const communication = await prisma.communication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunicationUpdateArgs>(args: SelectSubset<T, CommunicationUpdateArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communications.
     * @param {CommunicationDeleteManyArgs} args - Arguments to filter Communications to delete.
     * @example
     * // Delete a few Communications
     * const { count } = await prisma.communication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunicationDeleteManyArgs>(args?: SelectSubset<T, CommunicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communications
     * const communication = await prisma.communication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunicationUpdateManyArgs>(args: SelectSubset<T, CommunicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communications and returns the data updated in the database.
     * @param {CommunicationUpdateManyAndReturnArgs} args - Arguments to update many Communications.
     * @example
     * // Update many Communications
     * const communication = await prisma.communication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communications and only return the `id`
     * const communicationWithIdOnly = await prisma.communication.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunicationUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Communication.
     * @param {CommunicationUpsertArgs} args - Arguments to update or create a Communication.
     * @example
     * // Update or create a Communication
     * const communication = await prisma.communication.upsert({
     *   create: {
     *     // ... data to create a Communication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Communication we want to update
     *   }
     * })
     */
    upsert<T extends CommunicationUpsertArgs>(args: SelectSubset<T, CommunicationUpsertArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationCountArgs} args - Arguments to filter Communications to count.
     * @example
     * // Count the number of Communications
     * const count = await prisma.communication.count({
     *   where: {
     *     // ... the filter for the Communications we want to count
     *   }
     * })
    **/
    count<T extends CommunicationCountArgs>(
      args?: Subset<T, CommunicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunicationAggregateArgs>(args: Subset<T, CommunicationAggregateArgs>): Prisma.PrismaPromise<GetCommunicationAggregateType<T>>

    /**
     * Group by Communication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationGroupByArgs} args - Group by arguments.
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
      T extends CommunicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunicationGroupByArgs['orderBy'] }
        : { orderBy?: CommunicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Communication model
   */
  readonly fields: CommunicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Communication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Communication model
   */
  interface CommunicationFieldRefs {
    readonly id: FieldRef<"Communication", 'String'>
    readonly title: FieldRef<"Communication", 'String'>
    readonly content: FieldRef<"Communication", 'String'>
    readonly type: FieldRef<"Communication", 'String'>
    readonly audience: FieldRef<"Communication", 'String[]'>
    readonly tenantId: FieldRef<"Communication", 'String'>
    readonly senderId: FieldRef<"Communication", 'String'>
    readonly createdAt: FieldRef<"Communication", 'DateTime'>
    readonly updatedAt: FieldRef<"Communication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Communication findUnique
   */
  export type CommunicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication findUniqueOrThrow
   */
  export type CommunicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication findFirst
   */
  export type CommunicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communications.
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communications.
     */
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Communication findFirstOrThrow
   */
  export type CommunicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communications.
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communications.
     */
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Communication findMany
   */
  export type CommunicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communications to fetch.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communications.
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Communication create
   */
  export type CommunicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Communication.
     */
    data: XOR<CommunicationCreateInput, CommunicationUncheckedCreateInput>
  }

  /**
   * Communication createMany
   */
  export type CommunicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communications.
     */
    data: CommunicationCreateManyInput | CommunicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Communication createManyAndReturn
   */
  export type CommunicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * The data used to create many Communications.
     */
    data: CommunicationCreateManyInput | CommunicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Communication update
   */
  export type CommunicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Communication.
     */
    data: XOR<CommunicationUpdateInput, CommunicationUncheckedUpdateInput>
    /**
     * Choose, which Communication to update.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication updateMany
   */
  export type CommunicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communications.
     */
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyInput>
    /**
     * Filter which Communications to update
     */
    where?: CommunicationWhereInput
    /**
     * Limit how many Communications to update.
     */
    limit?: number
  }

  /**
   * Communication updateManyAndReturn
   */
  export type CommunicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * The data used to update Communications.
     */
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyInput>
    /**
     * Filter which Communications to update
     */
    where?: CommunicationWhereInput
    /**
     * Limit how many Communications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Communication upsert
   */
  export type CommunicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Communication to update in case it exists.
     */
    where: CommunicationWhereUniqueInput
    /**
     * In case the Communication found by the `where` argument doesn't exist, create a new Communication with this data.
     */
    create: XOR<CommunicationCreateInput, CommunicationUncheckedCreateInput>
    /**
     * In case the Communication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunicationUpdateInput, CommunicationUncheckedUpdateInput>
  }

  /**
   * Communication delete
   */
  export type CommunicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter which Communication to delete.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication deleteMany
   */
  export type CommunicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communications to delete
     */
    where?: CommunicationWhereInput
    /**
     * Limit how many Communications to delete.
     */
    limit?: number
  }

  /**
   * Communication without action
   */
  export type CommunicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
  }


  /**
   * Model Fee
   */

  export type AggregateFee = {
    _count: FeeCountAggregateOutputType | null
    _avg: FeeAvgAggregateOutputType | null
    _sum: FeeSumAggregateOutputType | null
    _min: FeeMinAggregateOutputType | null
    _max: FeeMaxAggregateOutputType | null
  }

  export type FeeAvgAggregateOutputType = {
    amount: number | null
  }

  export type FeeSumAggregateOutputType = {
    amount: number | null
  }

  export type FeeMinAggregateOutputType = {
    id: string | null
    amount: number | null
    description: string | null
    status: $Enums.FeeStatus | null
    dueDate: Date | null
    paidDate: Date | null
    studentId: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeeMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    description: string | null
    status: $Enums.FeeStatus | null
    dueDate: Date | null
    paidDate: Date | null
    studentId: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeeCountAggregateOutputType = {
    id: number
    amount: number
    description: number
    status: number
    dueDate: number
    paidDate: number
    studentId: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeeAvgAggregateInputType = {
    amount?: true
  }

  export type FeeSumAggregateInputType = {
    amount?: true
  }

  export type FeeMinAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    status?: true
    dueDate?: true
    paidDate?: true
    studentId?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeeMaxAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    status?: true
    dueDate?: true
    paidDate?: true
    studentId?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeeCountAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    status?: true
    dueDate?: true
    paidDate?: true
    studentId?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fee to aggregate.
     */
    where?: FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fees
    **/
    _count?: true | FeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeeMaxAggregateInputType
  }

  export type GetFeeAggregateType<T extends FeeAggregateArgs> = {
        [P in keyof T & keyof AggregateFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFee[P]>
      : GetScalarType<T[P], AggregateFee[P]>
  }




  export type FeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeWhereInput
    orderBy?: FeeOrderByWithAggregationInput | FeeOrderByWithAggregationInput[]
    by: FeeScalarFieldEnum[] | FeeScalarFieldEnum
    having?: FeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeeCountAggregateInputType | true
    _avg?: FeeAvgAggregateInputType
    _sum?: FeeSumAggregateInputType
    _min?: FeeMinAggregateInputType
    _max?: FeeMaxAggregateInputType
  }

  export type FeeGroupByOutputType = {
    id: string
    amount: number
    description: string | null
    status: $Enums.FeeStatus
    dueDate: Date
    paidDate: Date | null
    studentId: string
    tenantId: string
    createdAt: Date
    updatedAt: Date
    _count: FeeCountAggregateOutputType | null
    _avg: FeeAvgAggregateOutputType | null
    _sum: FeeSumAggregateOutputType | null
    _min: FeeMinAggregateOutputType | null
    _max: FeeMaxAggregateOutputType | null
  }

  type GetFeeGroupByPayload<T extends FeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeeGroupByOutputType[P]>
            : GetScalarType<T[P], FeeGroupByOutputType[P]>
        }
      >
    >


  export type FeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    status?: boolean
    dueDate?: boolean
    paidDate?: boolean
    studentId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fee"]>

  export type FeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    status?: boolean
    dueDate?: boolean
    paidDate?: boolean
    studentId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fee"]>

  export type FeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    status?: boolean
    dueDate?: boolean
    paidDate?: boolean
    studentId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fee"]>

  export type FeeSelectScalar = {
    id?: boolean
    amount?: boolean
    description?: boolean
    status?: boolean
    dueDate?: boolean
    paidDate?: boolean
    studentId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "description" | "status" | "dueDate" | "paidDate" | "studentId" | "tenantId" | "createdAt" | "updatedAt", ExtArgs["result"]["fee"]>
  export type FeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type FeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type FeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $FeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fee"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      description: string | null
      status: $Enums.FeeStatus
      dueDate: Date
      paidDate: Date | null
      studentId: string
      tenantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fee"]>
    composites: {}
  }

  type FeeGetPayload<S extends boolean | null | undefined | FeeDefaultArgs> = $Result.GetResult<Prisma.$FeePayload, S>

  type FeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeeCountAggregateInputType | true
    }

  export interface FeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fee'], meta: { name: 'Fee' } }
    /**
     * Find zero or one Fee that matches the filter.
     * @param {FeeFindUniqueArgs} args - Arguments to find a Fee
     * @example
     * // Get one Fee
     * const fee = await prisma.fee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeeFindUniqueArgs>(args: SelectSubset<T, FeeFindUniqueArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeeFindUniqueOrThrowArgs} args - Arguments to find a Fee
     * @example
     * // Get one Fee
     * const fee = await prisma.fee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeeFindUniqueOrThrowArgs>(args: SelectSubset<T, FeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeFindFirstArgs} args - Arguments to find a Fee
     * @example
     * // Get one Fee
     * const fee = await prisma.fee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeeFindFirstArgs>(args?: SelectSubset<T, FeeFindFirstArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeFindFirstOrThrowArgs} args - Arguments to find a Fee
     * @example
     * // Get one Fee
     * const fee = await prisma.fee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeeFindFirstOrThrowArgs>(args?: SelectSubset<T, FeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fees
     * const fees = await prisma.fee.findMany()
     * 
     * // Get first 10 Fees
     * const fees = await prisma.fee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feeWithIdOnly = await prisma.fee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeeFindManyArgs>(args?: SelectSubset<T, FeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fee.
     * @param {FeeCreateArgs} args - Arguments to create a Fee.
     * @example
     * // Create one Fee
     * const Fee = await prisma.fee.create({
     *   data: {
     *     // ... data to create a Fee
     *   }
     * })
     * 
     */
    create<T extends FeeCreateArgs>(args: SelectSubset<T, FeeCreateArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fees.
     * @param {FeeCreateManyArgs} args - Arguments to create many Fees.
     * @example
     * // Create many Fees
     * const fee = await prisma.fee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeeCreateManyArgs>(args?: SelectSubset<T, FeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fees and returns the data saved in the database.
     * @param {FeeCreateManyAndReturnArgs} args - Arguments to create many Fees.
     * @example
     * // Create many Fees
     * const fee = await prisma.fee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fees and only return the `id`
     * const feeWithIdOnly = await prisma.fee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeeCreateManyAndReturnArgs>(args?: SelectSubset<T, FeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fee.
     * @param {FeeDeleteArgs} args - Arguments to delete one Fee.
     * @example
     * // Delete one Fee
     * const Fee = await prisma.fee.delete({
     *   where: {
     *     // ... filter to delete one Fee
     *   }
     * })
     * 
     */
    delete<T extends FeeDeleteArgs>(args: SelectSubset<T, FeeDeleteArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fee.
     * @param {FeeUpdateArgs} args - Arguments to update one Fee.
     * @example
     * // Update one Fee
     * const fee = await prisma.fee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeeUpdateArgs>(args: SelectSubset<T, FeeUpdateArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fees.
     * @param {FeeDeleteManyArgs} args - Arguments to filter Fees to delete.
     * @example
     * // Delete a few Fees
     * const { count } = await prisma.fee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeeDeleteManyArgs>(args?: SelectSubset<T, FeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fees
     * const fee = await prisma.fee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeeUpdateManyArgs>(args: SelectSubset<T, FeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fees and returns the data updated in the database.
     * @param {FeeUpdateManyAndReturnArgs} args - Arguments to update many Fees.
     * @example
     * // Update many Fees
     * const fee = await prisma.fee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fees and only return the `id`
     * const feeWithIdOnly = await prisma.fee.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeeUpdateManyAndReturnArgs>(args: SelectSubset<T, FeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fee.
     * @param {FeeUpsertArgs} args - Arguments to update or create a Fee.
     * @example
     * // Update or create a Fee
     * const fee = await prisma.fee.upsert({
     *   create: {
     *     // ... data to create a Fee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fee we want to update
     *   }
     * })
     */
    upsert<T extends FeeUpsertArgs>(args: SelectSubset<T, FeeUpsertArgs<ExtArgs>>): Prisma__FeeClient<$Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeCountArgs} args - Arguments to filter Fees to count.
     * @example
     * // Count the number of Fees
     * const count = await prisma.fee.count({
     *   where: {
     *     // ... the filter for the Fees we want to count
     *   }
     * })
    **/
    count<T extends FeeCountArgs>(
      args?: Subset<T, FeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeeAggregateArgs>(args: Subset<T, FeeAggregateArgs>): Prisma.PrismaPromise<GetFeeAggregateType<T>>

    /**
     * Group by Fee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeGroupByArgs} args - Group by arguments.
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
      T extends FeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeeGroupByArgs['orderBy'] }
        : { orderBy?: FeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fee model
   */
  readonly fields: FeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Fee model
   */
  interface FeeFieldRefs {
    readonly id: FieldRef<"Fee", 'String'>
    readonly amount: FieldRef<"Fee", 'Float'>
    readonly description: FieldRef<"Fee", 'String'>
    readonly status: FieldRef<"Fee", 'FeeStatus'>
    readonly dueDate: FieldRef<"Fee", 'DateTime'>
    readonly paidDate: FieldRef<"Fee", 'DateTime'>
    readonly studentId: FieldRef<"Fee", 'String'>
    readonly tenantId: FieldRef<"Fee", 'String'>
    readonly createdAt: FieldRef<"Fee", 'DateTime'>
    readonly updatedAt: FieldRef<"Fee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fee findUnique
   */
  export type FeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fee to fetch.
     */
    where: FeeWhereUniqueInput
  }

  /**
   * Fee findUniqueOrThrow
   */
  export type FeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fee to fetch.
     */
    where: FeeWhereUniqueInput
  }

  /**
   * Fee findFirst
   */
  export type FeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fee to fetch.
     */
    where?: FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees.
     */
    cursor?: FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees.
     */
    distinct?: FeeScalarFieldEnum | FeeScalarFieldEnum[]
  }

  /**
   * Fee findFirstOrThrow
   */
  export type FeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fee to fetch.
     */
    where?: FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees.
     */
    cursor?: FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees.
     */
    distinct?: FeeScalarFieldEnum | FeeScalarFieldEnum[]
  }

  /**
   * Fee findMany
   */
  export type FeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter, which Fees to fetch.
     */
    where?: FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeeOrderByWithRelationInput | FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fees.
     */
    cursor?: FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    distinct?: FeeScalarFieldEnum | FeeScalarFieldEnum[]
  }

  /**
   * Fee create
   */
  export type FeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Fee.
     */
    data: XOR<FeeCreateInput, FeeUncheckedCreateInput>
  }

  /**
   * Fee createMany
   */
  export type FeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fees.
     */
    data: FeeCreateManyInput | FeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fee createManyAndReturn
   */
  export type FeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * The data used to create many Fees.
     */
    data: FeeCreateManyInput | FeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fee update
   */
  export type FeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Fee.
     */
    data: XOR<FeeUpdateInput, FeeUncheckedUpdateInput>
    /**
     * Choose, which Fee to update.
     */
    where: FeeWhereUniqueInput
  }

  /**
   * Fee updateMany
   */
  export type FeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fees.
     */
    data: XOR<FeeUpdateManyMutationInput, FeeUncheckedUpdateManyInput>
    /**
     * Filter which Fees to update
     */
    where?: FeeWhereInput
    /**
     * Limit how many Fees to update.
     */
    limit?: number
  }

  /**
   * Fee updateManyAndReturn
   */
  export type FeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * The data used to update Fees.
     */
    data: XOR<FeeUpdateManyMutationInput, FeeUncheckedUpdateManyInput>
    /**
     * Filter which Fees to update
     */
    where?: FeeWhereInput
    /**
     * Limit how many Fees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fee upsert
   */
  export type FeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Fee to update in case it exists.
     */
    where: FeeWhereUniqueInput
    /**
     * In case the Fee found by the `where` argument doesn't exist, create a new Fee with this data.
     */
    create: XOR<FeeCreateInput, FeeUncheckedCreateInput>
    /**
     * In case the Fee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeeUpdateInput, FeeUncheckedUpdateInput>
  }

  /**
   * Fee delete
   */
  export type FeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
    /**
     * Filter which Fee to delete.
     */
    where: FeeWhereUniqueInput
  }

  /**
   * Fee deleteMany
   */
  export type FeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fees to delete
     */
    where?: FeeWhereInput
    /**
     * Limit how many Fees to delete.
     */
    limit?: number
  }

  /**
   * Fee without action
   */
  export type FeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fee
     */
    select?: FeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fee
     */
    omit?: FeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    name: number
    type: number
    data: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    data?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    name: string
    type: string
    data: JsonValue
    tenantId: string
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    data?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    data?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    data?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    data?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "data" | "tenantId" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      data: Prisma.JsonValue
      tenantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly name: FieldRef<"Report", 'String'>
    readonly type: FieldRef<"Report", 'String'>
    readonly data: FieldRef<"Report", 'Json'>
    readonly tenantId: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model Timetable
   */

  export type AggregateTimetable = {
    _count: TimetableCountAggregateOutputType | null
    _min: TimetableMinAggregateOutputType | null
    _max: TimetableMaxAggregateOutputType | null
  }

  export type TimetableMinAggregateOutputType = {
    id: string | null
    name: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimetableMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimetableCountAggregateOutputType = {
    id: number
    name: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimetableMinAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimetableMaxAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimetableCountAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimetableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timetable to aggregate.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timetables
    **/
    _count?: true | TimetableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimetableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimetableMaxAggregateInputType
  }

  export type GetTimetableAggregateType<T extends TimetableAggregateArgs> = {
        [P in keyof T & keyof AggregateTimetable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimetable[P]>
      : GetScalarType<T[P], AggregateTimetable[P]>
  }




  export type TimetableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimetableWhereInput
    orderBy?: TimetableOrderByWithAggregationInput | TimetableOrderByWithAggregationInput[]
    by: TimetableScalarFieldEnum[] | TimetableScalarFieldEnum
    having?: TimetableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimetableCountAggregateInputType | true
    _min?: TimetableMinAggregateInputType
    _max?: TimetableMaxAggregateInputType
  }

  export type TimetableGroupByOutputType = {
    id: string
    name: string
    tenantId: string
    createdAt: Date
    updatedAt: Date
    _count: TimetableCountAggregateOutputType | null
    _min: TimetableMinAggregateOutputType | null
    _max: TimetableMaxAggregateOutputType | null
  }

  type GetTimetableGroupByPayload<T extends TimetableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimetableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimetableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimetableGroupByOutputType[P]>
            : GetScalarType<T[P], TimetableGroupByOutputType[P]>
        }
      >
    >


  export type TimetableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectScalar = {
    id?: boolean
    name?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimetableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tenantId" | "createdAt" | "updatedAt", ExtArgs["result"]["timetable"]>
  export type TimetableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TimetableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TimetableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $TimetablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timetable"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tenantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timetable"]>
    composites: {}
  }

  type TimetableGetPayload<S extends boolean | null | undefined | TimetableDefaultArgs> = $Result.GetResult<Prisma.$TimetablePayload, S>

  type TimetableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimetableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimetableCountAggregateInputType | true
    }

  export interface TimetableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timetable'], meta: { name: 'Timetable' } }
    /**
     * Find zero or one Timetable that matches the filter.
     * @param {TimetableFindUniqueArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimetableFindUniqueArgs>(args: SelectSubset<T, TimetableFindUniqueArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timetable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimetableFindUniqueOrThrowArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimetableFindUniqueOrThrowArgs>(args: SelectSubset<T, TimetableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timetable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindFirstArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimetableFindFirstArgs>(args?: SelectSubset<T, TimetableFindFirstArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timetable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindFirstOrThrowArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimetableFindFirstOrThrowArgs>(args?: SelectSubset<T, TimetableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timetables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timetables
     * const timetables = await prisma.timetable.findMany()
     * 
     * // Get first 10 Timetables
     * const timetables = await prisma.timetable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timetableWithIdOnly = await prisma.timetable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimetableFindManyArgs>(args?: SelectSubset<T, TimetableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timetable.
     * @param {TimetableCreateArgs} args - Arguments to create a Timetable.
     * @example
     * // Create one Timetable
     * const Timetable = await prisma.timetable.create({
     *   data: {
     *     // ... data to create a Timetable
     *   }
     * })
     * 
     */
    create<T extends TimetableCreateArgs>(args: SelectSubset<T, TimetableCreateArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timetables.
     * @param {TimetableCreateManyArgs} args - Arguments to create many Timetables.
     * @example
     * // Create many Timetables
     * const timetable = await prisma.timetable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimetableCreateManyArgs>(args?: SelectSubset<T, TimetableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timetables and returns the data saved in the database.
     * @param {TimetableCreateManyAndReturnArgs} args - Arguments to create many Timetables.
     * @example
     * // Create many Timetables
     * const timetable = await prisma.timetable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timetables and only return the `id`
     * const timetableWithIdOnly = await prisma.timetable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimetableCreateManyAndReturnArgs>(args?: SelectSubset<T, TimetableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Timetable.
     * @param {TimetableDeleteArgs} args - Arguments to delete one Timetable.
     * @example
     * // Delete one Timetable
     * const Timetable = await prisma.timetable.delete({
     *   where: {
     *     // ... filter to delete one Timetable
     *   }
     * })
     * 
     */
    delete<T extends TimetableDeleteArgs>(args: SelectSubset<T, TimetableDeleteArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timetable.
     * @param {TimetableUpdateArgs} args - Arguments to update one Timetable.
     * @example
     * // Update one Timetable
     * const timetable = await prisma.timetable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimetableUpdateArgs>(args: SelectSubset<T, TimetableUpdateArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timetables.
     * @param {TimetableDeleteManyArgs} args - Arguments to filter Timetables to delete.
     * @example
     * // Delete a few Timetables
     * const { count } = await prisma.timetable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimetableDeleteManyArgs>(args?: SelectSubset<T, TimetableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timetables
     * const timetable = await prisma.timetable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimetableUpdateManyArgs>(args: SelectSubset<T, TimetableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timetables and returns the data updated in the database.
     * @param {TimetableUpdateManyAndReturnArgs} args - Arguments to update many Timetables.
     * @example
     * // Update many Timetables
     * const timetable = await prisma.timetable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Timetables and only return the `id`
     * const timetableWithIdOnly = await prisma.timetable.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimetableUpdateManyAndReturnArgs>(args: SelectSubset<T, TimetableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Timetable.
     * @param {TimetableUpsertArgs} args - Arguments to update or create a Timetable.
     * @example
     * // Update or create a Timetable
     * const timetable = await prisma.timetable.upsert({
     *   create: {
     *     // ... data to create a Timetable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timetable we want to update
     *   }
     * })
     */
    upsert<T extends TimetableUpsertArgs>(args: SelectSubset<T, TimetableUpsertArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Timetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCountArgs} args - Arguments to filter Timetables to count.
     * @example
     * // Count the number of Timetables
     * const count = await prisma.timetable.count({
     *   where: {
     *     // ... the filter for the Timetables we want to count
     *   }
     * })
    **/
    count<T extends TimetableCountArgs>(
      args?: Subset<T, TimetableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimetableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimetableAggregateArgs>(args: Subset<T, TimetableAggregateArgs>): Prisma.PrismaPromise<GetTimetableAggregateType<T>>

    /**
     * Group by Timetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableGroupByArgs} args - Group by arguments.
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
      T extends TimetableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimetableGroupByArgs['orderBy'] }
        : { orderBy?: TimetableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimetableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimetableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timetable model
   */
  readonly fields: TimetableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timetable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimetableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Timetable model
   */
  interface TimetableFieldRefs {
    readonly id: FieldRef<"Timetable", 'String'>
    readonly name: FieldRef<"Timetable", 'String'>
    readonly tenantId: FieldRef<"Timetable", 'String'>
    readonly createdAt: FieldRef<"Timetable", 'DateTime'>
    readonly updatedAt: FieldRef<"Timetable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Timetable findUnique
   */
  export type TimetableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable findUniqueOrThrow
   */
  export type TimetableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable findFirst
   */
  export type TimetableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timetables.
     */
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable findFirstOrThrow
   */
  export type TimetableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timetables.
     */
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable findMany
   */
  export type TimetableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetables to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable create
   */
  export type TimetableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The data needed to create a Timetable.
     */
    data: XOR<TimetableCreateInput, TimetableUncheckedCreateInput>
  }

  /**
   * Timetable createMany
   */
  export type TimetableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timetables.
     */
    data: TimetableCreateManyInput | TimetableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timetable createManyAndReturn
   */
  export type TimetableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * The data used to create many Timetables.
     */
    data: TimetableCreateManyInput | TimetableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timetable update
   */
  export type TimetableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The data needed to update a Timetable.
     */
    data: XOR<TimetableUpdateInput, TimetableUncheckedUpdateInput>
    /**
     * Choose, which Timetable to update.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable updateMany
   */
  export type TimetableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timetables.
     */
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyInput>
    /**
     * Filter which Timetables to update
     */
    where?: TimetableWhereInput
    /**
     * Limit how many Timetables to update.
     */
    limit?: number
  }

  /**
   * Timetable updateManyAndReturn
   */
  export type TimetableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * The data used to update Timetables.
     */
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyInput>
    /**
     * Filter which Timetables to update
     */
    where?: TimetableWhereInput
    /**
     * Limit how many Timetables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timetable upsert
   */
  export type TimetableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The filter to search for the Timetable to update in case it exists.
     */
    where: TimetableWhereUniqueInput
    /**
     * In case the Timetable found by the `where` argument doesn't exist, create a new Timetable with this data.
     */
    create: XOR<TimetableCreateInput, TimetableUncheckedCreateInput>
    /**
     * In case the Timetable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimetableUpdateInput, TimetableUncheckedUpdateInput>
  }

  /**
   * Timetable delete
   */
  export type TimetableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter which Timetable to delete.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable deleteMany
   */
  export type TimetableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timetables to delete
     */
    where?: TimetableWhereInput
    /**
     * Limit how many Timetables to delete.
     */
    limit?: number
  }

  /**
   * Timetable without action
   */
  export type TimetableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
  }


  /**
   * Model Payroll
   */

  export type AggregatePayroll = {
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  export type PayrollAvgAggregateOutputType = {
    year: number | null
    amount: number | null
  }

  export type PayrollSumAggregateOutputType = {
    year: number | null
    amount: number | null
  }

  export type PayrollMinAggregateOutputType = {
    id: string | null
    staffId: string | null
    tenantId: string | null
    month: string | null
    year: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollMaxAggregateOutputType = {
    id: string | null
    staffId: string | null
    tenantId: string | null
    month: string | null
    year: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollCountAggregateOutputType = {
    id: number
    staffId: number
    tenantId: number
    month: number
    year: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayrollAvgAggregateInputType = {
    year?: true
    amount?: true
  }

  export type PayrollSumAggregateInputType = {
    year?: true
    amount?: true
  }

  export type PayrollMinAggregateInputType = {
    id?: true
    staffId?: true
    tenantId?: true
    month?: true
    year?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollMaxAggregateInputType = {
    id?: true
    staffId?: true
    tenantId?: true
    month?: true
    year?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollCountAggregateInputType = {
    id?: true
    staffId?: true
    tenantId?: true
    month?: true
    year?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payroll to aggregate.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payrolls
    **/
    _count?: true | PayrollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollMaxAggregateInputType
  }

  export type GetPayrollAggregateType<T extends PayrollAggregateArgs> = {
        [P in keyof T & keyof AggregatePayroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayroll[P]>
      : GetScalarType<T[P], AggregatePayroll[P]>
  }




  export type PayrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithAggregationInput | PayrollOrderByWithAggregationInput[]
    by: PayrollScalarFieldEnum[] | PayrollScalarFieldEnum
    having?: PayrollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollCountAggregateInputType | true
    _avg?: PayrollAvgAggregateInputType
    _sum?: PayrollSumAggregateInputType
    _min?: PayrollMinAggregateInputType
    _max?: PayrollMaxAggregateInputType
  }

  export type PayrollGroupByOutputType = {
    id: string
    staffId: string
    tenantId: string
    month: string
    year: number
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  type GetPayrollGroupByPayload<T extends PayrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollGroupByOutputType[P]>
        }
      >
    >


  export type PayrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    tenantId?: boolean
    month?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    tenantId?: boolean
    month?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    tenantId?: boolean
    month?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectScalar = {
    id?: boolean
    staffId?: boolean
    tenantId?: boolean
    month?: boolean
    year?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayrollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffId" | "tenantId" | "month" | "year" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["payroll"]>
  export type PayrollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $PayrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payroll"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      staffId: string
      tenantId: string
      month: string
      year: number
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payroll"]>
    composites: {}
  }

  type PayrollGetPayload<S extends boolean | null | undefined | PayrollDefaultArgs> = $Result.GetResult<Prisma.$PayrollPayload, S>

  type PayrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollCountAggregateInputType | true
    }

  export interface PayrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payroll'], meta: { name: 'Payroll' } }
    /**
     * Find zero or one Payroll that matches the filter.
     * @param {PayrollFindUniqueArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollFindUniqueArgs>(args: SelectSubset<T, PayrollFindUniqueArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payroll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollFindUniqueOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollFindFirstArgs>(args?: SelectSubset<T, PayrollFindFirstArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payrolls
     * const payrolls = await prisma.payroll.findMany()
     * 
     * // Get first 10 Payrolls
     * const payrolls = await prisma.payroll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollWithIdOnly = await prisma.payroll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollFindManyArgs>(args?: SelectSubset<T, PayrollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payroll.
     * @param {PayrollCreateArgs} args - Arguments to create a Payroll.
     * @example
     * // Create one Payroll
     * const Payroll = await prisma.payroll.create({
     *   data: {
     *     // ... data to create a Payroll
     *   }
     * })
     * 
     */
    create<T extends PayrollCreateArgs>(args: SelectSubset<T, PayrollCreateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payrolls.
     * @param {PayrollCreateManyArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollCreateManyArgs>(args?: SelectSubset<T, PayrollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payrolls and returns the data saved in the database.
     * @param {PayrollCreateManyAndReturnArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payroll.
     * @param {PayrollDeleteArgs} args - Arguments to delete one Payroll.
     * @example
     * // Delete one Payroll
     * const Payroll = await prisma.payroll.delete({
     *   where: {
     *     // ... filter to delete one Payroll
     *   }
     * })
     * 
     */
    delete<T extends PayrollDeleteArgs>(args: SelectSubset<T, PayrollDeleteArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payroll.
     * @param {PayrollUpdateArgs} args - Arguments to update one Payroll.
     * @example
     * // Update one Payroll
     * const payroll = await prisma.payroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollUpdateArgs>(args: SelectSubset<T, PayrollUpdateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payrolls.
     * @param {PayrollDeleteManyArgs} args - Arguments to filter Payrolls to delete.
     * @example
     * // Delete a few Payrolls
     * const { count } = await prisma.payroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollDeleteManyArgs>(args?: SelectSubset<T, PayrollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollUpdateManyArgs>(args: SelectSubset<T, PayrollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls and returns the data updated in the database.
     * @param {PayrollUpdateManyAndReturnArgs} args - Arguments to update many Payrolls.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayrollUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payroll.
     * @param {PayrollUpsertArgs} args - Arguments to update or create a Payroll.
     * @example
     * // Update or create a Payroll
     * const payroll = await prisma.payroll.upsert({
     *   create: {
     *     // ... data to create a Payroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payroll we want to update
     *   }
     * })
     */
    upsert<T extends PayrollUpsertArgs>(args: SelectSubset<T, PayrollUpsertArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCountArgs} args - Arguments to filter Payrolls to count.
     * @example
     * // Count the number of Payrolls
     * const count = await prisma.payroll.count({
     *   where: {
     *     // ... the filter for the Payrolls we want to count
     *   }
     * })
    **/
    count<T extends PayrollCountArgs>(
      args?: Subset<T, PayrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollAggregateArgs>(args: Subset<T, PayrollAggregateArgs>): Prisma.PrismaPromise<GetPayrollAggregateType<T>>

    /**
     * Group by Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupByArgs} args - Group by arguments.
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
      T extends PayrollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollGroupByArgs['orderBy'] }
        : { orderBy?: PayrollGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payroll model
   */
  readonly fields: PayrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payroll model
   */
  interface PayrollFieldRefs {
    readonly id: FieldRef<"Payroll", 'String'>
    readonly staffId: FieldRef<"Payroll", 'String'>
    readonly tenantId: FieldRef<"Payroll", 'String'>
    readonly month: FieldRef<"Payroll", 'String'>
    readonly year: FieldRef<"Payroll", 'Int'>
    readonly amount: FieldRef<"Payroll", 'Float'>
    readonly createdAt: FieldRef<"Payroll", 'DateTime'>
    readonly updatedAt: FieldRef<"Payroll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payroll findUnique
   */
  export type PayrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findUniqueOrThrow
   */
  export type PayrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findFirst
   */
  export type PayrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findFirstOrThrow
   */
  export type PayrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findMany
   */
  export type PayrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payrolls to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll create
   */
  export type PayrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to create a Payroll.
     */
    data: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
  }

  /**
   * Payroll createMany
   */
  export type PayrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payroll createManyAndReturn
   */
  export type PayrollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payroll update
   */
  export type PayrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to update a Payroll.
     */
    data: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
    /**
     * Choose, which Payroll to update.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll updateMany
   */
  export type PayrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
  }

  /**
   * Payroll updateManyAndReturn
   */
  export type PayrollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payroll upsert
   */
  export type PayrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The filter to search for the Payroll to update in case it exists.
     */
    where: PayrollWhereUniqueInput
    /**
     * In case the Payroll found by the `where` argument doesn't exist, create a new Payroll with this data.
     */
    create: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
    /**
     * In case the Payroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
  }

  /**
   * Payroll delete
   */
  export type PayrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter which Payroll to delete.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll deleteMany
   */
  export type PayrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payrolls to delete
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to delete.
     */
    limit?: number
  }

  /**
   * Payroll without action
   */
  export type PayrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
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


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    subdomain: 'subdomain',
    email: 'email',
    phone: 'phone',
    address: 'address',
    logo: 'logo',
    languages: 'languages',
    maxStudents: 'maxStudents',
    subscription: 'subscription',
    timezone: 'timezone',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    isActive: 'isActive',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    isActive: 'isActive',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tenantId: 'tenantId',
    staffId: 'staffId',
    position: 'position',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    grade: 'grade',
    section: 'section',
    isActive: 'isActive',
    tenantId: 'tenantId',
    teacherId: 'teacherId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const ClassStudentScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    studentId: 'studentId',
    tenantId: 'tenantId',
    createdAt: 'createdAt'
  };

  export type ClassStudentScalarFieldEnum = (typeof ClassStudentScalarFieldEnum)[keyof typeof ClassStudentScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    date: 'date',
    status: 'status',
    studentId: 'studentId',
    staffId: 'staffId',
    classId: 'classId',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const CommunicationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    type: 'type',
    audience: 'audience',
    tenantId: 'tenantId',
    senderId: 'senderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunicationScalarFieldEnum = (typeof CommunicationScalarFieldEnum)[keyof typeof CommunicationScalarFieldEnum]


  export const FeeScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    description: 'description',
    status: 'status',
    dueDate: 'dueDate',
    paidDate: 'paidDate',
    studentId: 'studentId',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeeScalarFieldEnum = (typeof FeeScalarFieldEnum)[keyof typeof FeeScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    data: 'data',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const TimetableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimetableScalarFieldEnum = (typeof TimetableScalarFieldEnum)[keyof typeof TimetableScalarFieldEnum]


  export const PayrollScalarFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    tenantId: 'tenantId',
    month: 'month',
    year: 'year',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayrollScalarFieldEnum = (typeof PayrollScalarFieldEnum)[keyof typeof PayrollScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FeeStatus'
   */
  export type EnumFeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeeStatus'>
    


  /**
   * Reference to a field of type 'FeeStatus[]'
   */
  export type ListEnumFeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeeStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    subdomain?: StringNullableFilter<"Tenant"> | string | null
    email?: StringFilter<"Tenant"> | string
    phone?: StringNullableFilter<"Tenant"> | string | null
    address?: StringNullableFilter<"Tenant"> | string | null
    logo?: StringNullableFilter<"Tenant"> | string | null
    languages?: StringNullableListFilter<"Tenant">
    maxStudents?: IntFilter<"Tenant"> | number
    subscription?: StringFilter<"Tenant"> | string
    timezone?: StringFilter<"Tenant"> | string
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    staff?: StaffListRelationFilter
    students?: StudentListRelationFilter
    classes?: ClassListRelationFilter
    attendances?: AttendanceListRelationFilter
    fees?: FeeListRelationFilter
    communications?: CommunicationListRelationFilter
    reports?: ReportListRelationFilter
    timetables?: TimetableListRelationFilter
    payrolls?: PayrollListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    subdomain?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    languages?: SortOrder
    maxStudents?: SortOrder
    subscription?: SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    staff?: StaffOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    classes?: ClassOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    fees?: FeeOrderByRelationAggregateInput
    communications?: CommunicationOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    timetables?: TimetableOrderByRelationAggregateInput
    payrolls?: PayrollOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    subdomain?: string
    email?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    phone?: StringNullableFilter<"Tenant"> | string | null
    address?: StringNullableFilter<"Tenant"> | string | null
    logo?: StringNullableFilter<"Tenant"> | string | null
    languages?: StringNullableListFilter<"Tenant">
    maxStudents?: IntFilter<"Tenant"> | number
    subscription?: StringFilter<"Tenant"> | string
    timezone?: StringFilter<"Tenant"> | string
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    staff?: StaffListRelationFilter
    students?: StudentListRelationFilter
    classes?: ClassListRelationFilter
    attendances?: AttendanceListRelationFilter
    fees?: FeeListRelationFilter
    communications?: CommunicationListRelationFilter
    reports?: ReportListRelationFilter
    timetables?: TimetableListRelationFilter
    payrolls?: PayrollListRelationFilter
  }, "id" | "slug" | "subdomain" | "email">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    subdomain?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    languages?: SortOrder
    maxStudents?: SortOrder
    subscription?: SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    subdomain?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    email?: StringWithAggregatesFilter<"Tenant"> | string
    phone?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    address?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    languages?: StringNullableListFilter<"Tenant">
    maxStudents?: IntWithAggregatesFilter<"Tenant"> | number
    subscription?: StringWithAggregatesFilter<"Tenant"> | string
    timezone?: StringWithAggregatesFilter<"Tenant"> | string
    isActive?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    tenantId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    communications?: CommunicationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    staff?: StaffOrderByWithRelationInput
    communications?: CommunicationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    tenantId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    communications?: CommunicationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    tenantId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
    phone?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    tenantId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    attendances?: AttendanceListRelationFilter
    fees?: FeeListRelationFilter
    classStudents?: ClassStudentListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    fees?: FeeOrderByRelationAggregateInput
    classStudents?: ClassStudentOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
    phone?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    tenantId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    attendances?: AttendanceListRelationFilter
    fees?: FeeListRelationFilter
    classStudents?: ClassStudentListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    firstName?: StringWithAggregatesFilter<"Student"> | string
    lastName?: StringWithAggregatesFilter<"Student"> | string
    email?: StringNullableWithAggregatesFilter<"Student"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    isActive?: BoolWithAggregatesFilter<"Student"> | boolean
    tenantId?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    userId?: StringFilter<"Staff"> | string
    tenantId?: StringFilter<"Staff"> | string
    staffId?: StringFilter<"Staff"> | string
    position?: StringFilter<"Staff"> | string
    department?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    attendances?: AttendanceListRelationFilter
    classes?: ClassListRelationFilter
    payrolls?: PayrollListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    staffId?: SortOrder
    position?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    classes?: ClassOrderByRelationAggregateInput
    payrolls?: PayrollOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    staffId_tenantId?: StaffStaffIdTenantIdCompoundUniqueInput
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    tenantId?: StringFilter<"Staff"> | string
    staffId?: StringFilter<"Staff"> | string
    position?: StringFilter<"Staff"> | string
    department?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    attendances?: AttendanceListRelationFilter
    classes?: ClassListRelationFilter
    payrolls?: PayrollListRelationFilter
  }, "id" | "userId" | "staffId_tenantId">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    staffId?: SortOrder
    position?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    userId?: StringWithAggregatesFilter<"Staff"> | string
    tenantId?: StringWithAggregatesFilter<"Staff"> | string
    staffId?: StringWithAggregatesFilter<"Staff"> | string
    position?: StringWithAggregatesFilter<"Staff"> | string
    department?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    grade?: StringNullableFilter<"Class"> | string | null
    section?: StringNullableFilter<"Class"> | string | null
    isActive?: BoolFilter<"Class"> | boolean
    tenantId?: StringFilter<"Class"> | string
    teacherId?: StringNullableFilter<"Class"> | string | null
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    teacher?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    attendances?: AttendanceListRelationFilter
    classStudents?: ClassStudentListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    teacher?: StaffOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    classStudents?: ClassStudentOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    grade?: StringNullableFilter<"Class"> | string | null
    section?: StringNullableFilter<"Class"> | string | null
    isActive?: BoolFilter<"Class"> | boolean
    tenantId?: StringFilter<"Class"> | string
    teacherId?: StringNullableFilter<"Class"> | string | null
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    teacher?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    attendances?: AttendanceListRelationFilter
    classStudents?: ClassStudentListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    grade?: StringNullableWithAggregatesFilter<"Class"> | string | null
    section?: StringNullableWithAggregatesFilter<"Class"> | string | null
    isActive?: BoolWithAggregatesFilter<"Class"> | boolean
    tenantId?: StringWithAggregatesFilter<"Class"> | string
    teacherId?: StringNullableWithAggregatesFilter<"Class"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type ClassStudentWhereInput = {
    AND?: ClassStudentWhereInput | ClassStudentWhereInput[]
    OR?: ClassStudentWhereInput[]
    NOT?: ClassStudentWhereInput | ClassStudentWhereInput[]
    id?: StringFilter<"ClassStudent"> | string
    classId?: StringFilter<"ClassStudent"> | string
    studentId?: StringFilter<"ClassStudent"> | string
    tenantId?: StringFilter<"ClassStudent"> | string
    createdAt?: DateTimeFilter<"ClassStudent"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type ClassStudentOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type ClassStudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    classId_studentId?: ClassStudentClassIdStudentIdCompoundUniqueInput
    AND?: ClassStudentWhereInput | ClassStudentWhereInput[]
    OR?: ClassStudentWhereInput[]
    NOT?: ClassStudentWhereInput | ClassStudentWhereInput[]
    classId?: StringFilter<"ClassStudent"> | string
    studentId?: StringFilter<"ClassStudent"> | string
    tenantId?: StringFilter<"ClassStudent"> | string
    createdAt?: DateTimeFilter<"ClassStudent"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "classId_studentId">

  export type ClassStudentOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    _count?: ClassStudentCountOrderByAggregateInput
    _max?: ClassStudentMaxOrderByAggregateInput
    _min?: ClassStudentMinOrderByAggregateInput
  }

  export type ClassStudentScalarWhereWithAggregatesInput = {
    AND?: ClassStudentScalarWhereWithAggregatesInput | ClassStudentScalarWhereWithAggregatesInput[]
    OR?: ClassStudentScalarWhereWithAggregatesInput[]
    NOT?: ClassStudentScalarWhereWithAggregatesInput | ClassStudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassStudent"> | string
    classId?: StringWithAggregatesFilter<"ClassStudent"> | string
    studentId?: StringWithAggregatesFilter<"ClassStudent"> | string
    tenantId?: StringWithAggregatesFilter<"ClassStudent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClassStudent"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    date?: StringFilter<"Attendance"> | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    studentId?: StringNullableFilter<"Attendance"> | string | null
    staffId?: StringNullableFilter<"Attendance"> | string | null
    classId?: StringNullableFilter<"Attendance"> | string | null
    tenantId?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    studentId?: SortOrderInput | SortOrder
    staffId?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    staff?: StaffOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_date?: AttendanceStudentIdDateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    date?: StringFilter<"Attendance"> | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    studentId?: StringNullableFilter<"Attendance"> | string | null
    staffId?: StringNullableFilter<"Attendance"> | string | null
    classId?: StringNullableFilter<"Attendance"> | string | null
    tenantId?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }, "id" | "studentId_date">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    studentId?: SortOrderInput | SortOrder
    staffId?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    date?: StringWithAggregatesFilter<"Attendance"> | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    studentId?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    staffId?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    classId?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    tenantId?: StringWithAggregatesFilter<"Attendance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type CommunicationWhereInput = {
    AND?: CommunicationWhereInput | CommunicationWhereInput[]
    OR?: CommunicationWhereInput[]
    NOT?: CommunicationWhereInput | CommunicationWhereInput[]
    id?: StringFilter<"Communication"> | string
    title?: StringFilter<"Communication"> | string
    content?: StringFilter<"Communication"> | string
    type?: StringFilter<"Communication"> | string
    audience?: StringNullableListFilter<"Communication">
    tenantId?: StringFilter<"Communication"> | string
    senderId?: StringFilter<"Communication"> | string
    createdAt?: DateTimeFilter<"Communication"> | Date | string
    updatedAt?: DateTimeFilter<"Communication"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommunicationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    audience?: SortOrder
    tenantId?: SortOrder
    senderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type CommunicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunicationWhereInput | CommunicationWhereInput[]
    OR?: CommunicationWhereInput[]
    NOT?: CommunicationWhereInput | CommunicationWhereInput[]
    title?: StringFilter<"Communication"> | string
    content?: StringFilter<"Communication"> | string
    type?: StringFilter<"Communication"> | string
    audience?: StringNullableListFilter<"Communication">
    tenantId?: StringFilter<"Communication"> | string
    senderId?: StringFilter<"Communication"> | string
    createdAt?: DateTimeFilter<"Communication"> | Date | string
    updatedAt?: DateTimeFilter<"Communication"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommunicationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    audience?: SortOrder
    tenantId?: SortOrder
    senderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunicationCountOrderByAggregateInput
    _max?: CommunicationMaxOrderByAggregateInput
    _min?: CommunicationMinOrderByAggregateInput
  }

  export type CommunicationScalarWhereWithAggregatesInput = {
    AND?: CommunicationScalarWhereWithAggregatesInput | CommunicationScalarWhereWithAggregatesInput[]
    OR?: CommunicationScalarWhereWithAggregatesInput[]
    NOT?: CommunicationScalarWhereWithAggregatesInput | CommunicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Communication"> | string
    title?: StringWithAggregatesFilter<"Communication"> | string
    content?: StringWithAggregatesFilter<"Communication"> | string
    type?: StringWithAggregatesFilter<"Communication"> | string
    audience?: StringNullableListFilter<"Communication">
    tenantId?: StringWithAggregatesFilter<"Communication"> | string
    senderId?: StringWithAggregatesFilter<"Communication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Communication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Communication"> | Date | string
  }

  export type FeeWhereInput = {
    AND?: FeeWhereInput | FeeWhereInput[]
    OR?: FeeWhereInput[]
    NOT?: FeeWhereInput | FeeWhereInput[]
    id?: StringFilter<"Fee"> | string
    amount?: FloatFilter<"Fee"> | number
    description?: StringNullableFilter<"Fee"> | string | null
    status?: EnumFeeStatusFilter<"Fee"> | $Enums.FeeStatus
    dueDate?: DateTimeFilter<"Fee"> | Date | string
    paidDate?: DateTimeNullableFilter<"Fee"> | Date | string | null
    studentId?: StringFilter<"Fee"> | string
    tenantId?: StringFilter<"Fee"> | string
    createdAt?: DateTimeFilter<"Fee"> | Date | string
    updatedAt?: DateTimeFilter<"Fee"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type FeeOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrderInput | SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type FeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeeWhereInput | FeeWhereInput[]
    OR?: FeeWhereInput[]
    NOT?: FeeWhereInput | FeeWhereInput[]
    amount?: FloatFilter<"Fee"> | number
    description?: StringNullableFilter<"Fee"> | string | null
    status?: EnumFeeStatusFilter<"Fee"> | $Enums.FeeStatus
    dueDate?: DateTimeFilter<"Fee"> | Date | string
    paidDate?: DateTimeNullableFilter<"Fee"> | Date | string | null
    studentId?: StringFilter<"Fee"> | string
    tenantId?: StringFilter<"Fee"> | string
    createdAt?: DateTimeFilter<"Fee"> | Date | string
    updatedAt?: DateTimeFilter<"Fee"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type FeeOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrderInput | SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeeCountOrderByAggregateInput
    _avg?: FeeAvgOrderByAggregateInput
    _max?: FeeMaxOrderByAggregateInput
    _min?: FeeMinOrderByAggregateInput
    _sum?: FeeSumOrderByAggregateInput
  }

  export type FeeScalarWhereWithAggregatesInput = {
    AND?: FeeScalarWhereWithAggregatesInput | FeeScalarWhereWithAggregatesInput[]
    OR?: FeeScalarWhereWithAggregatesInput[]
    NOT?: FeeScalarWhereWithAggregatesInput | FeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fee"> | string
    amount?: FloatWithAggregatesFilter<"Fee"> | number
    description?: StringNullableWithAggregatesFilter<"Fee"> | string | null
    status?: EnumFeeStatusWithAggregatesFilter<"Fee"> | $Enums.FeeStatus
    dueDate?: DateTimeWithAggregatesFilter<"Fee"> | Date | string
    paidDate?: DateTimeNullableWithAggregatesFilter<"Fee"> | Date | string | null
    studentId?: StringWithAggregatesFilter<"Fee"> | string
    tenantId?: StringWithAggregatesFilter<"Fee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fee"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    name?: StringFilter<"Report"> | string
    type?: StringFilter<"Report"> | string
    data?: JsonFilter<"Report">
    tenantId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    data?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    name?: StringFilter<"Report"> | string
    type?: StringFilter<"Report"> | string
    data?: JsonFilter<"Report">
    tenantId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    data?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    name?: StringWithAggregatesFilter<"Report"> | string
    type?: StringWithAggregatesFilter<"Report"> | string
    data?: JsonWithAggregatesFilter<"Report">
    tenantId?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type TimetableWhereInput = {
    AND?: TimetableWhereInput | TimetableWhereInput[]
    OR?: TimetableWhereInput[]
    NOT?: TimetableWhereInput | TimetableWhereInput[]
    id?: StringFilter<"Timetable"> | string
    name?: StringFilter<"Timetable"> | string
    tenantId?: StringFilter<"Timetable"> | string
    createdAt?: DateTimeFilter<"Timetable"> | Date | string
    updatedAt?: DateTimeFilter<"Timetable"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type TimetableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type TimetableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimetableWhereInput | TimetableWhereInput[]
    OR?: TimetableWhereInput[]
    NOT?: TimetableWhereInput | TimetableWhereInput[]
    name?: StringFilter<"Timetable"> | string
    tenantId?: StringFilter<"Timetable"> | string
    createdAt?: DateTimeFilter<"Timetable"> | Date | string
    updatedAt?: DateTimeFilter<"Timetable"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type TimetableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimetableCountOrderByAggregateInput
    _max?: TimetableMaxOrderByAggregateInput
    _min?: TimetableMinOrderByAggregateInput
  }

  export type TimetableScalarWhereWithAggregatesInput = {
    AND?: TimetableScalarWhereWithAggregatesInput | TimetableScalarWhereWithAggregatesInput[]
    OR?: TimetableScalarWhereWithAggregatesInput[]
    NOT?: TimetableScalarWhereWithAggregatesInput | TimetableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timetable"> | string
    name?: StringWithAggregatesFilter<"Timetable"> | string
    tenantId?: StringWithAggregatesFilter<"Timetable"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Timetable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Timetable"> | Date | string
  }

  export type PayrollWhereInput = {
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    id?: StringFilter<"Payroll"> | string
    staffId?: StringFilter<"Payroll"> | string
    tenantId?: StringFilter<"Payroll"> | string
    month?: StringFilter<"Payroll"> | string
    year?: IntFilter<"Payroll"> | number
    amount?: FloatFilter<"Payroll"> | number
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type PayrollOrderByWithRelationInput = {
    id?: SortOrder
    staffId?: SortOrder
    tenantId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    staff?: StaffOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type PayrollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    staffId_month_year?: PayrollStaffIdMonthYearCompoundUniqueInput
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    staffId?: StringFilter<"Payroll"> | string
    tenantId?: StringFilter<"Payroll"> | string
    month?: StringFilter<"Payroll"> | string
    year?: IntFilter<"Payroll"> | number
    amount?: FloatFilter<"Payroll"> | number
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "staffId_month_year">

  export type PayrollOrderByWithAggregationInput = {
    id?: SortOrder
    staffId?: SortOrder
    tenantId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayrollCountOrderByAggregateInput
    _avg?: PayrollAvgOrderByAggregateInput
    _max?: PayrollMaxOrderByAggregateInput
    _min?: PayrollMinOrderByAggregateInput
    _sum?: PayrollSumOrderByAggregateInput
  }

  export type PayrollScalarWhereWithAggregatesInput = {
    AND?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    OR?: PayrollScalarWhereWithAggregatesInput[]
    NOT?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payroll"> | string
    staffId?: StringWithAggregatesFilter<"Payroll"> | string
    tenantId?: StringWithAggregatesFilter<"Payroll"> | string
    month?: StringWithAggregatesFilter<"Payroll"> | string
    year?: IntWithAggregatesFilter<"Payroll"> | number
    amount?: FloatWithAggregatesFilter<"Payroll"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    staff?: StaffCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    staff?: StaffUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    staff?: StaffCreateNestedOneWithoutUserInput
    communications?: CommunicationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    communications?: CommunicationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutStudentsInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeCreateNestedManyWithoutStudentInput
    classStudents?: ClassStudentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeUncheckedCreateNestedManyWithoutStudentInput
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutStudentsNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeUpdateManyWithoutStudentNestedInput
    classStudents?: ClassStudentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeUncheckedUpdateManyWithoutStudentNestedInput
    classStudents?: ClassStudentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    id?: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffInput
    tenant: TenantCreateNestedOneWithoutStaffInput
    attendances?: AttendanceCreateNestedManyWithoutStaffInput
    classes?: ClassCreateNestedManyWithoutTeacherInput
    payrolls?: PayrollCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    userId: string
    tenantId: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStaffInput
    classes?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
    tenant?: TenantUpdateOneRequiredWithoutStaffNestedInput
    attendances?: AttendanceUpdateManyWithoutStaffNestedInput
    classes?: ClassUpdateManyWithoutTeacherNestedInput
    payrolls?: PayrollUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStaffNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    id?: string
    userId: string
    tenantId: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutClassesInput
    teacher?: StaffCreateNestedOneWithoutClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    classStudents?: ClassStudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    tenantId: string
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClassesNestedInput
    teacher?: StaffUpdateOneWithoutClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    classStudents?: ClassStudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    classStudents?: ClassStudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    tenantId: string
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentCreateInput = {
    id?: string
    tenantId: string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutClassStudentsInput
    student: StudentCreateNestedOneWithoutClassStudentsInput
  }

  export type ClassStudentUncheckedCreateInput = {
    id?: string
    classId: string
    studentId: string
    tenantId: string
    createdAt?: Date | string
  }

  export type ClassStudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutClassStudentsNestedInput
    student?: StudentUpdateOneRequiredWithoutClassStudentsNestedInput
  }

  export type ClassStudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentCreateManyInput = {
    id?: string
    classId: string
    studentId: string
    tenantId: string
    createdAt?: Date | string
  }

  export type ClassStudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAttendancesInput
    student?: StudentCreateNestedOneWithoutAttendancesInput
    staff?: StaffCreateNestedOneWithoutAttendancesInput
    class?: ClassCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    studentId?: string | null
    staffId?: string | null
    classId?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAttendancesNestedInput
    student?: StudentUpdateOneWithoutAttendancesNestedInput
    staff?: StaffUpdateOneWithoutAttendancesNestedInput
    class?: ClassUpdateOneWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    studentId?: string | null
    staffId?: string | null
    classId?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationCreateInput = {
    id?: string
    title: string
    content: string
    type: string
    audience?: CommunicationCreateaudienceInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCommunicationsInput
    sender: UserCreateNestedOneWithoutCommunicationsInput
  }

  export type CommunicationUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    type: string
    audience?: CommunicationCreateaudienceInput | string[]
    tenantId: string
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCommunicationsNestedInput
    sender?: UserUpdateOneRequiredWithoutCommunicationsNestedInput
  }

  export type CommunicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    tenantId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationCreateManyInput = {
    id?: string
    title: string
    content: string
    type: string
    audience?: CommunicationCreateaudienceInput | string[]
    tenantId: string
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    tenantId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeCreateInput = {
    id?: string
    amount: number
    description?: string | null
    status?: $Enums.FeeStatus
    dueDate: Date | string
    paidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutFeesInput
    student: StudentCreateNestedOneWithoutFeesInput
  }

  export type FeeUncheckedCreateInput = {
    id?: string
    amount: number
    description?: string | null
    status?: $Enums.FeeStatus
    dueDate: Date | string
    paidDate?: Date | string | null
    studentId: string
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutFeesNestedInput
    student?: StudentUpdateOneRequiredWithoutFeesNestedInput
  }

  export type FeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeCreateManyInput = {
    id?: string
    amount: number
    description?: string | null
    status?: $Enums.FeeStatus
    dueDate: Date | string
    paidDate?: Date | string | null
    studentId: string
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutTimetablesInput
  }

  export type TimetableUncheckedCreateInput = {
    id?: string
    name: string
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimetableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTimetablesNestedInput
  }

  export type TimetableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableCreateManyInput = {
    id?: string
    name: string
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimetableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollCreateInput = {
    id?: string
    month: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    staff: StaffCreateNestedOneWithoutPayrollsInput
    tenant: TenantCreateNestedOneWithoutPayrollsInput
  }

  export type PayrollUncheckedCreateInput = {
    id?: string
    staffId: string
    tenantId: string
    month: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateOneRequiredWithoutPayrollsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPayrollsNestedInput
  }

  export type PayrollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollCreateManyInput = {
    id?: string
    staffId: string
    tenantId: string
    month: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type FeeListRelationFilter = {
    every?: FeeWhereInput
    some?: FeeWhereInput
    none?: FeeWhereInput
  }

  export type CommunicationListRelationFilter = {
    every?: CommunicationWhereInput
    some?: CommunicationWhereInput
    none?: CommunicationWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type TimetableListRelationFilter = {
    every?: TimetableWhereInput
    some?: TimetableWhereInput
    none?: TimetableWhereInput
  }

  export type PayrollListRelationFilter = {
    every?: PayrollWhereInput
    some?: PayrollWhereInput
    none?: PayrollWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimetableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayrollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    subdomain?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    languages?: SortOrder
    maxStudents?: SortOrder
    subscription?: SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    maxStudents?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    subdomain?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    maxStudents?: SortOrder
    subscription?: SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    subdomain?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    maxStudents?: SortOrder
    subscription?: SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    maxStudents?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type ClassStudentListRelationFilter = {
    every?: ClassStudentWhereInput
    some?: ClassStudentWhereInput
    none?: ClassStudentWhereInput
  }

  export type ClassStudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StaffStaffIdTenantIdCompoundUniqueInput = {
    staffId: string
    tenantId: string
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    staffId?: SortOrder
    position?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    staffId?: SortOrder
    position?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    staffId?: SortOrder
    position?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    section?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    section?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    section?: SortOrder
    isActive?: SortOrder
    tenantId?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ClassStudentClassIdStudentIdCompoundUniqueInput = {
    classId: string
    studentId: string
  }

  export type ClassStudentCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassStudentMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassStudentMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type ClassNullableScalarRelationFilter = {
    is?: ClassWhereInput | null
    isNot?: ClassWhereInput | null
  }

  export type AttendanceStudentIdDateCompoundUniqueInput = {
    studentId: string
    date: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    studentId?: SortOrder
    staffId?: SortOrder
    classId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    studentId?: SortOrder
    staffId?: SortOrder
    classId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    studentId?: SortOrder
    staffId?: SortOrder
    classId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type CommunicationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    audience?: SortOrder
    tenantId?: SortOrder
    senderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    tenantId?: SortOrder
    senderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    tenantId?: SortOrder
    senderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumFeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeeStatus | EnumFeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeeStatus[] | ListEnumFeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeeStatus[] | ListEnumFeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeeStatusFilter<$PrismaModel> | $Enums.FeeStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FeeCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FeeMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeeMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    studentId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeeSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type EnumFeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeeStatus | EnumFeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeeStatus[] | ListEnumFeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeeStatus[] | ListEnumFeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeeStatusFilter<$PrismaModel>
    _max?: NestedEnumFeeStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    data?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TimetableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimetableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimetableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type PayrollStaffIdMonthYearCompoundUniqueInput = {
    staffId: string
    month: string
    year: number
  }

  export type PayrollCountOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    tenantId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollAvgOrderByAggregateInput = {
    year?: SortOrder
    amount?: SortOrder
  }

  export type PayrollMaxOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    tenantId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollMinOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    tenantId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollSumOrderByAggregateInput = {
    year?: SortOrder
    amount?: SortOrder
  }

  export type TenantCreatelanguagesInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StaffCreateNestedManyWithoutTenantInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutTenantInput = {
    create?: XOR<StudentCreateWithoutTenantInput, StudentUncheckedCreateWithoutTenantInput> | StudentCreateWithoutTenantInput[] | StudentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutTenantInput | StudentCreateOrConnectWithoutTenantInput[]
    createMany?: StudentCreateManyTenantInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutTenantInput = {
    create?: XOR<ClassCreateWithoutTenantInput, ClassUncheckedCreateWithoutTenantInput> | ClassCreateWithoutTenantInput[] | ClassUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTenantInput | ClassCreateOrConnectWithoutTenantInput[]
    createMany?: ClassCreateManyTenantInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutTenantInput = {
    create?: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput> | AttendanceCreateWithoutTenantInput[] | AttendanceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutTenantInput | AttendanceCreateOrConnectWithoutTenantInput[]
    createMany?: AttendanceCreateManyTenantInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FeeCreateNestedManyWithoutTenantInput = {
    create?: XOR<FeeCreateWithoutTenantInput, FeeUncheckedCreateWithoutTenantInput> | FeeCreateWithoutTenantInput[] | FeeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: FeeCreateOrConnectWithoutTenantInput | FeeCreateOrConnectWithoutTenantInput[]
    createMany?: FeeCreateManyTenantInputEnvelope
    connect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
  }

  export type CommunicationCreateNestedManyWithoutTenantInput = {
    create?: XOR<CommunicationCreateWithoutTenantInput, CommunicationUncheckedCreateWithoutTenantInput> | CommunicationCreateWithoutTenantInput[] | CommunicationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutTenantInput | CommunicationCreateOrConnectWithoutTenantInput[]
    createMany?: CommunicationCreateManyTenantInputEnvelope
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReportCreateWithoutTenantInput, ReportUncheckedCreateWithoutTenantInput> | ReportCreateWithoutTenantInput[] | ReportUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTenantInput | ReportCreateOrConnectWithoutTenantInput[]
    createMany?: ReportCreateManyTenantInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TimetableCreateNestedManyWithoutTenantInput = {
    create?: XOR<TimetableCreateWithoutTenantInput, TimetableUncheckedCreateWithoutTenantInput> | TimetableCreateWithoutTenantInput[] | TimetableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutTenantInput | TimetableCreateOrConnectWithoutTenantInput[]
    createMany?: TimetableCreateManyTenantInputEnvelope
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
  }

  export type PayrollCreateNestedManyWithoutTenantInput = {
    create?: XOR<PayrollCreateWithoutTenantInput, PayrollUncheckedCreateWithoutTenantInput> | PayrollCreateWithoutTenantInput[] | PayrollUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutTenantInput | PayrollCreateOrConnectWithoutTenantInput[]
    createMany?: PayrollCreateManyTenantInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<StudentCreateWithoutTenantInput, StudentUncheckedCreateWithoutTenantInput> | StudentCreateWithoutTenantInput[] | StudentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutTenantInput | StudentCreateOrConnectWithoutTenantInput[]
    createMany?: StudentCreateManyTenantInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ClassCreateWithoutTenantInput, ClassUncheckedCreateWithoutTenantInput> | ClassCreateWithoutTenantInput[] | ClassUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTenantInput | ClassCreateOrConnectWithoutTenantInput[]
    createMany?: ClassCreateManyTenantInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput> | AttendanceCreateWithoutTenantInput[] | AttendanceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutTenantInput | AttendanceCreateOrConnectWithoutTenantInput[]
    createMany?: AttendanceCreateManyTenantInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FeeUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<FeeCreateWithoutTenantInput, FeeUncheckedCreateWithoutTenantInput> | FeeCreateWithoutTenantInput[] | FeeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: FeeCreateOrConnectWithoutTenantInput | FeeCreateOrConnectWithoutTenantInput[]
    createMany?: FeeCreateManyTenantInputEnvelope
    connect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
  }

  export type CommunicationUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CommunicationCreateWithoutTenantInput, CommunicationUncheckedCreateWithoutTenantInput> | CommunicationCreateWithoutTenantInput[] | CommunicationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutTenantInput | CommunicationCreateOrConnectWithoutTenantInput[]
    createMany?: CommunicationCreateManyTenantInputEnvelope
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReportCreateWithoutTenantInput, ReportUncheckedCreateWithoutTenantInput> | ReportCreateWithoutTenantInput[] | ReportUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTenantInput | ReportCreateOrConnectWithoutTenantInput[]
    createMany?: ReportCreateManyTenantInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TimetableUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TimetableCreateWithoutTenantInput, TimetableUncheckedCreateWithoutTenantInput> | TimetableCreateWithoutTenantInput[] | TimetableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutTenantInput | TimetableCreateOrConnectWithoutTenantInput[]
    createMany?: TimetableCreateManyTenantInputEnvelope
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
  }

  export type PayrollUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PayrollCreateWithoutTenantInput, PayrollUncheckedCreateWithoutTenantInput> | PayrollCreateWithoutTenantInput[] | PayrollUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutTenantInput | PayrollCreateOrConnectWithoutTenantInput[]
    createMany?: PayrollCreateManyTenantInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TenantUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StaffUpdateManyWithoutTenantNestedInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutTenantInput | StaffUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutTenantInput | StaffUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutTenantInput | StaffUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<StudentCreateWithoutTenantInput, StudentUncheckedCreateWithoutTenantInput> | StudentCreateWithoutTenantInput[] | StudentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutTenantInput | StudentCreateOrConnectWithoutTenantInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutTenantInput | StudentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: StudentCreateManyTenantInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutTenantInput | StudentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutTenantInput | StudentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ClassCreateWithoutTenantInput, ClassUncheckedCreateWithoutTenantInput> | ClassCreateWithoutTenantInput[] | ClassUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTenantInput | ClassCreateOrConnectWithoutTenantInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTenantInput | ClassUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ClassCreateManyTenantInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTenantInput | ClassUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTenantInput | ClassUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput> | AttendanceCreateWithoutTenantInput[] | AttendanceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutTenantInput | AttendanceCreateOrConnectWithoutTenantInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutTenantInput | AttendanceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AttendanceCreateManyTenantInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutTenantInput | AttendanceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutTenantInput | AttendanceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FeeUpdateManyWithoutTenantNestedInput = {
    create?: XOR<FeeCreateWithoutTenantInput, FeeUncheckedCreateWithoutTenantInput> | FeeCreateWithoutTenantInput[] | FeeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: FeeCreateOrConnectWithoutTenantInput | FeeCreateOrConnectWithoutTenantInput[]
    upsert?: FeeUpsertWithWhereUniqueWithoutTenantInput | FeeUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: FeeCreateManyTenantInputEnvelope
    set?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    disconnect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    delete?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    connect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    update?: FeeUpdateWithWhereUniqueWithoutTenantInput | FeeUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: FeeUpdateManyWithWhereWithoutTenantInput | FeeUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: FeeScalarWhereInput | FeeScalarWhereInput[]
  }

  export type CommunicationUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CommunicationCreateWithoutTenantInput, CommunicationUncheckedCreateWithoutTenantInput> | CommunicationCreateWithoutTenantInput[] | CommunicationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutTenantInput | CommunicationCreateOrConnectWithoutTenantInput[]
    upsert?: CommunicationUpsertWithWhereUniqueWithoutTenantInput | CommunicationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CommunicationCreateManyTenantInputEnvelope
    set?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    disconnect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    delete?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    update?: CommunicationUpdateWithWhereUniqueWithoutTenantInput | CommunicationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CommunicationUpdateManyWithWhereWithoutTenantInput | CommunicationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReportCreateWithoutTenantInput, ReportUncheckedCreateWithoutTenantInput> | ReportCreateWithoutTenantInput[] | ReportUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTenantInput | ReportCreateOrConnectWithoutTenantInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutTenantInput | ReportUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReportCreateManyTenantInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutTenantInput | ReportUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutTenantInput | ReportUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TimetableUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TimetableCreateWithoutTenantInput, TimetableUncheckedCreateWithoutTenantInput> | TimetableCreateWithoutTenantInput[] | TimetableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutTenantInput | TimetableCreateOrConnectWithoutTenantInput[]
    upsert?: TimetableUpsertWithWhereUniqueWithoutTenantInput | TimetableUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TimetableCreateManyTenantInputEnvelope
    set?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    disconnect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    delete?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    update?: TimetableUpdateWithWhereUniqueWithoutTenantInput | TimetableUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TimetableUpdateManyWithWhereWithoutTenantInput | TimetableUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
  }

  export type PayrollUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PayrollCreateWithoutTenantInput, PayrollUncheckedCreateWithoutTenantInput> | PayrollCreateWithoutTenantInput[] | PayrollUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutTenantInput | PayrollCreateOrConnectWithoutTenantInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutTenantInput | PayrollUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PayrollCreateManyTenantInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutTenantInput | PayrollUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutTenantInput | PayrollUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput> | StaffCreateWithoutTenantInput[] | StaffUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutTenantInput | StaffCreateOrConnectWithoutTenantInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutTenantInput | StaffUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: StaffCreateManyTenantInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutTenantInput | StaffUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutTenantInput | StaffUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<StudentCreateWithoutTenantInput, StudentUncheckedCreateWithoutTenantInput> | StudentCreateWithoutTenantInput[] | StudentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutTenantInput | StudentCreateOrConnectWithoutTenantInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutTenantInput | StudentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: StudentCreateManyTenantInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutTenantInput | StudentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutTenantInput | StudentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ClassCreateWithoutTenantInput, ClassUncheckedCreateWithoutTenantInput> | ClassCreateWithoutTenantInput[] | ClassUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTenantInput | ClassCreateOrConnectWithoutTenantInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTenantInput | ClassUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ClassCreateManyTenantInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTenantInput | ClassUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTenantInput | ClassUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput> | AttendanceCreateWithoutTenantInput[] | AttendanceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutTenantInput | AttendanceCreateOrConnectWithoutTenantInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutTenantInput | AttendanceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AttendanceCreateManyTenantInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutTenantInput | AttendanceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutTenantInput | AttendanceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FeeUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<FeeCreateWithoutTenantInput, FeeUncheckedCreateWithoutTenantInput> | FeeCreateWithoutTenantInput[] | FeeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: FeeCreateOrConnectWithoutTenantInput | FeeCreateOrConnectWithoutTenantInput[]
    upsert?: FeeUpsertWithWhereUniqueWithoutTenantInput | FeeUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: FeeCreateManyTenantInputEnvelope
    set?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    disconnect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    delete?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    connect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    update?: FeeUpdateWithWhereUniqueWithoutTenantInput | FeeUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: FeeUpdateManyWithWhereWithoutTenantInput | FeeUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: FeeScalarWhereInput | FeeScalarWhereInput[]
  }

  export type CommunicationUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CommunicationCreateWithoutTenantInput, CommunicationUncheckedCreateWithoutTenantInput> | CommunicationCreateWithoutTenantInput[] | CommunicationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutTenantInput | CommunicationCreateOrConnectWithoutTenantInput[]
    upsert?: CommunicationUpsertWithWhereUniqueWithoutTenantInput | CommunicationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CommunicationCreateManyTenantInputEnvelope
    set?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    disconnect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    delete?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    update?: CommunicationUpdateWithWhereUniqueWithoutTenantInput | CommunicationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CommunicationUpdateManyWithWhereWithoutTenantInput | CommunicationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReportCreateWithoutTenantInput, ReportUncheckedCreateWithoutTenantInput> | ReportCreateWithoutTenantInput[] | ReportUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTenantInput | ReportCreateOrConnectWithoutTenantInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutTenantInput | ReportUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReportCreateManyTenantInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutTenantInput | ReportUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutTenantInput | ReportUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TimetableUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TimetableCreateWithoutTenantInput, TimetableUncheckedCreateWithoutTenantInput> | TimetableCreateWithoutTenantInput[] | TimetableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutTenantInput | TimetableCreateOrConnectWithoutTenantInput[]
    upsert?: TimetableUpsertWithWhereUniqueWithoutTenantInput | TimetableUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TimetableCreateManyTenantInputEnvelope
    set?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    disconnect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    delete?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    update?: TimetableUpdateWithWhereUniqueWithoutTenantInput | TimetableUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TimetableUpdateManyWithWhereWithoutTenantInput | TimetableUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
  }

  export type PayrollUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PayrollCreateWithoutTenantInput, PayrollUncheckedCreateWithoutTenantInput> | PayrollCreateWithoutTenantInput[] | PayrollUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutTenantInput | PayrollCreateOrConnectWithoutTenantInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutTenantInput | PayrollUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PayrollCreateManyTenantInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutTenantInput | PayrollUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutTenantInput | PayrollUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type CommunicationCreateNestedManyWithoutSenderInput = {
    create?: XOR<CommunicationCreateWithoutSenderInput, CommunicationUncheckedCreateWithoutSenderInput> | CommunicationCreateWithoutSenderInput[] | CommunicationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutSenderInput | CommunicationCreateOrConnectWithoutSenderInput[]
    createMany?: CommunicationCreateManySenderInputEnvelope
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type CommunicationUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<CommunicationCreateWithoutSenderInput, CommunicationUncheckedCreateWithoutSenderInput> | CommunicationCreateWithoutSenderInput[] | CommunicationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutSenderInput | CommunicationCreateOrConnectWithoutSenderInput[]
    createMany?: CommunicationCreateManySenderInputEnvelope
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type StaffUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type CommunicationUpdateManyWithoutSenderNestedInput = {
    create?: XOR<CommunicationCreateWithoutSenderInput, CommunicationUncheckedCreateWithoutSenderInput> | CommunicationCreateWithoutSenderInput[] | CommunicationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutSenderInput | CommunicationCreateOrConnectWithoutSenderInput[]
    upsert?: CommunicationUpsertWithWhereUniqueWithoutSenderInput | CommunicationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: CommunicationCreateManySenderInputEnvelope
    set?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    disconnect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    delete?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    update?: CommunicationUpdateWithWhereUniqueWithoutSenderInput | CommunicationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: CommunicationUpdateManyWithWhereWithoutSenderInput | CommunicationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
  }

  export type StaffUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type CommunicationUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<CommunicationCreateWithoutSenderInput, CommunicationUncheckedCreateWithoutSenderInput> | CommunicationCreateWithoutSenderInput[] | CommunicationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutSenderInput | CommunicationCreateOrConnectWithoutSenderInput[]
    upsert?: CommunicationUpsertWithWhereUniqueWithoutSenderInput | CommunicationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: CommunicationCreateManySenderInputEnvelope
    set?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    disconnect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    delete?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    update?: CommunicationUpdateWithWhereUniqueWithoutSenderInput | CommunicationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: CommunicationUpdateManyWithWhereWithoutSenderInput | CommunicationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutStudentsInput = {
    create?: XOR<TenantCreateWithoutStudentsInput, TenantUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStudentsInput
    connect?: TenantWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FeeCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeeCreateWithoutStudentInput, FeeUncheckedCreateWithoutStudentInput> | FeeCreateWithoutStudentInput[] | FeeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeCreateOrConnectWithoutStudentInput | FeeCreateOrConnectWithoutStudentInput[]
    createMany?: FeeCreateManyStudentInputEnvelope
    connect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
  }

  export type ClassStudentCreateNestedManyWithoutStudentInput = {
    create?: XOR<ClassStudentCreateWithoutStudentInput, ClassStudentUncheckedCreateWithoutStudentInput> | ClassStudentCreateWithoutStudentInput[] | ClassStudentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutStudentInput | ClassStudentCreateOrConnectWithoutStudentInput[]
    createMany?: ClassStudentCreateManyStudentInputEnvelope
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FeeUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeeCreateWithoutStudentInput, FeeUncheckedCreateWithoutStudentInput> | FeeCreateWithoutStudentInput[] | FeeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeCreateOrConnectWithoutStudentInput | FeeCreateOrConnectWithoutStudentInput[]
    createMany?: FeeCreateManyStudentInputEnvelope
    connect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
  }

  export type ClassStudentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ClassStudentCreateWithoutStudentInput, ClassStudentUncheckedCreateWithoutStudentInput> | ClassStudentCreateWithoutStudentInput[] | ClassStudentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutStudentInput | ClassStudentCreateOrConnectWithoutStudentInput[]
    createMany?: ClassStudentCreateManyStudentInputEnvelope
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<TenantCreateWithoutStudentsInput, TenantUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStudentsInput
    upsert?: TenantUpsertWithoutStudentsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutStudentsInput, TenantUpdateWithoutStudentsInput>, TenantUncheckedUpdateWithoutStudentsInput>
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FeeUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeeCreateWithoutStudentInput, FeeUncheckedCreateWithoutStudentInput> | FeeCreateWithoutStudentInput[] | FeeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeCreateOrConnectWithoutStudentInput | FeeCreateOrConnectWithoutStudentInput[]
    upsert?: FeeUpsertWithWhereUniqueWithoutStudentInput | FeeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeeCreateManyStudentInputEnvelope
    set?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    disconnect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    delete?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    connect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    update?: FeeUpdateWithWhereUniqueWithoutStudentInput | FeeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeeUpdateManyWithWhereWithoutStudentInput | FeeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeeScalarWhereInput | FeeScalarWhereInput[]
  }

  export type ClassStudentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ClassStudentCreateWithoutStudentInput, ClassStudentUncheckedCreateWithoutStudentInput> | ClassStudentCreateWithoutStudentInput[] | ClassStudentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutStudentInput | ClassStudentCreateOrConnectWithoutStudentInput[]
    upsert?: ClassStudentUpsertWithWhereUniqueWithoutStudentInput | ClassStudentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ClassStudentCreateManyStudentInputEnvelope
    set?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    disconnect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    delete?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    update?: ClassStudentUpdateWithWhereUniqueWithoutStudentInput | ClassStudentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ClassStudentUpdateManyWithWhereWithoutStudentInput | ClassStudentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FeeUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeeCreateWithoutStudentInput, FeeUncheckedCreateWithoutStudentInput> | FeeCreateWithoutStudentInput[] | FeeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeCreateOrConnectWithoutStudentInput | FeeCreateOrConnectWithoutStudentInput[]
    upsert?: FeeUpsertWithWhereUniqueWithoutStudentInput | FeeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeeCreateManyStudentInputEnvelope
    set?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    disconnect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    delete?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    connect?: FeeWhereUniqueInput | FeeWhereUniqueInput[]
    update?: FeeUpdateWithWhereUniqueWithoutStudentInput | FeeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeeUpdateManyWithWhereWithoutStudentInput | FeeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeeScalarWhereInput | FeeScalarWhereInput[]
  }

  export type ClassStudentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ClassStudentCreateWithoutStudentInput, ClassStudentUncheckedCreateWithoutStudentInput> | ClassStudentCreateWithoutStudentInput[] | ClassStudentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutStudentInput | ClassStudentCreateOrConnectWithoutStudentInput[]
    upsert?: ClassStudentUpsertWithWhereUniqueWithoutStudentInput | ClassStudentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ClassStudentCreateManyStudentInputEnvelope
    set?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    disconnect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    delete?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    update?: ClassStudentUpdateWithWhereUniqueWithoutStudentInput | ClassStudentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ClassStudentUpdateManyWithWhereWithoutStudentInput | ClassStudentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStaffInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    connect?: UserWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutStaffInput = {
    create?: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStaffInput
    connect?: TenantWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutStaffInput = {
    create?: XOR<AttendanceCreateWithoutStaffInput, AttendanceUncheckedCreateWithoutStaffInput> | AttendanceCreateWithoutStaffInput[] | AttendanceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStaffInput | AttendanceCreateOrConnectWithoutStaffInput[]
    createMany?: AttendanceCreateManyStaffInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type PayrollCreateNestedManyWithoutStaffInput = {
    create?: XOR<PayrollCreateWithoutStaffInput, PayrollUncheckedCreateWithoutStaffInput> | PayrollCreateWithoutStaffInput[] | PayrollUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutStaffInput | PayrollCreateOrConnectWithoutStaffInput[]
    createMany?: PayrollCreateManyStaffInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<AttendanceCreateWithoutStaffInput, AttendanceUncheckedCreateWithoutStaffInput> | AttendanceCreateWithoutStaffInput[] | AttendanceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStaffInput | AttendanceCreateOrConnectWithoutStaffInput[]
    createMany?: AttendanceCreateManyStaffInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type PayrollUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<PayrollCreateWithoutStaffInput, PayrollUncheckedCreateWithoutStaffInput> | PayrollCreateWithoutStaffInput[] | PayrollUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutStaffInput | PayrollCreateOrConnectWithoutStaffInput[]
    createMany?: PayrollCreateManyStaffInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    upsert?: UserUpsertWithoutStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffInput, UserUpdateWithoutStaffInput>, UserUncheckedUpdateWithoutStaffInput>
  }

  export type TenantUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: TenantCreateOrConnectWithoutStaffInput
    upsert?: TenantUpsertWithoutStaffInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutStaffInput, TenantUpdateWithoutStaffInput>, TenantUncheckedUpdateWithoutStaffInput>
  }

  export type AttendanceUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AttendanceCreateWithoutStaffInput, AttendanceUncheckedCreateWithoutStaffInput> | AttendanceCreateWithoutStaffInput[] | AttendanceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStaffInput | AttendanceCreateOrConnectWithoutStaffInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStaffInput | AttendanceUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AttendanceCreateManyStaffInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStaffInput | AttendanceUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStaffInput | AttendanceUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type PayrollUpdateManyWithoutStaffNestedInput = {
    create?: XOR<PayrollCreateWithoutStaffInput, PayrollUncheckedCreateWithoutStaffInput> | PayrollCreateWithoutStaffInput[] | PayrollUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutStaffInput | PayrollCreateOrConnectWithoutStaffInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutStaffInput | PayrollUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: PayrollCreateManyStaffInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutStaffInput | PayrollUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutStaffInput | PayrollUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AttendanceCreateWithoutStaffInput, AttendanceUncheckedCreateWithoutStaffInput> | AttendanceCreateWithoutStaffInput[] | AttendanceUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStaffInput | AttendanceCreateOrConnectWithoutStaffInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStaffInput | AttendanceUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AttendanceCreateManyStaffInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStaffInput | AttendanceUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStaffInput | AttendanceUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type PayrollUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<PayrollCreateWithoutStaffInput, PayrollUncheckedCreateWithoutStaffInput> | PayrollCreateWithoutStaffInput[] | PayrollUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutStaffInput | PayrollCreateOrConnectWithoutStaffInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutStaffInput | PayrollUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: PayrollCreateManyStaffInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutStaffInput | PayrollUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutStaffInput | PayrollUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutClassesInput = {
    create?: XOR<TenantCreateWithoutClassesInput, TenantUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClassesInput
    connect?: TenantWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutClassesInput = {
    create?: XOR<StaffCreateWithoutClassesInput, StaffUncheckedCreateWithoutClassesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutClassesInput
    connect?: StaffWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ClassStudentCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput> | ClassStudentCreateWithoutClassInput[] | ClassStudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutClassInput | ClassStudentCreateOrConnectWithoutClassInput[]
    createMany?: ClassStudentCreateManyClassInputEnvelope
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ClassStudentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput> | ClassStudentCreateWithoutClassInput[] | ClassStudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutClassInput | ClassStudentCreateOrConnectWithoutClassInput[]
    createMany?: ClassStudentCreateManyClassInputEnvelope
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<TenantCreateWithoutClassesInput, TenantUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClassesInput
    upsert?: TenantUpsertWithoutClassesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutClassesInput, TenantUpdateWithoutClassesInput>, TenantUncheckedUpdateWithoutClassesInput>
  }

  export type StaffUpdateOneWithoutClassesNestedInput = {
    create?: XOR<StaffCreateWithoutClassesInput, StaffUncheckedCreateWithoutClassesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutClassesInput
    upsert?: StaffUpsertWithoutClassesInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutClassesInput, StaffUpdateWithoutClassesInput>, StaffUncheckedUpdateWithoutClassesInput>
  }

  export type AttendanceUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClassStudentUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput> | ClassStudentCreateWithoutClassInput[] | ClassStudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutClassInput | ClassStudentCreateOrConnectWithoutClassInput[]
    upsert?: ClassStudentUpsertWithWhereUniqueWithoutClassInput | ClassStudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassStudentCreateManyClassInputEnvelope
    set?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    disconnect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    delete?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    update?: ClassStudentUpdateWithWhereUniqueWithoutClassInput | ClassStudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassStudentUpdateManyWithWhereWithoutClassInput | ClassStudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClassStudentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput> | ClassStudentCreateWithoutClassInput[] | ClassStudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutClassInput | ClassStudentCreateOrConnectWithoutClassInput[]
    upsert?: ClassStudentUpsertWithWhereUniqueWithoutClassInput | ClassStudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassStudentCreateManyClassInputEnvelope
    set?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    disconnect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    delete?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    update?: ClassStudentUpdateWithWhereUniqueWithoutClassInput | ClassStudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassStudentUpdateManyWithWhereWithoutClassInput | ClassStudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutClassStudentsInput = {
    create?: XOR<ClassCreateWithoutClassStudentsInput, ClassUncheckedCreateWithoutClassStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutClassStudentsInput
    connect?: ClassWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutClassStudentsInput = {
    create?: XOR<StudentCreateWithoutClassStudentsInput, StudentUncheckedCreateWithoutClassStudentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClassStudentsInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassUpdateOneRequiredWithoutClassStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutClassStudentsInput, ClassUncheckedCreateWithoutClassStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutClassStudentsInput
    upsert?: ClassUpsertWithoutClassStudentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutClassStudentsInput, ClassUpdateWithoutClassStudentsInput>, ClassUncheckedUpdateWithoutClassStudentsInput>
  }

  export type StudentUpdateOneRequiredWithoutClassStudentsNestedInput = {
    create?: XOR<StudentCreateWithoutClassStudentsInput, StudentUncheckedCreateWithoutClassStudentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClassStudentsInput
    upsert?: StudentUpsertWithoutClassStudentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutClassStudentsInput, StudentUpdateWithoutClassStudentsInput>, StudentUncheckedUpdateWithoutClassStudentsInput>
  }

  export type TenantCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<TenantCreateWithoutAttendancesInput, TenantUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAttendancesInput
    connect?: TenantWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendancesInput
    connect?: StudentWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<StaffCreateWithoutAttendancesInput, StaffUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutAttendancesInput
    connect?: StaffWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    connect?: ClassWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type TenantUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<TenantCreateWithoutAttendancesInput, TenantUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAttendancesInput
    upsert?: TenantUpsertWithoutAttendancesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAttendancesInput, TenantUpdateWithoutAttendancesInput>, TenantUncheckedUpdateWithoutAttendancesInput>
  }

  export type StudentUpdateOneWithoutAttendancesNestedInput = {
    create?: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendancesInput
    upsert?: StudentUpsertWithoutAttendancesInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendancesInput, StudentUpdateWithoutAttendancesInput>, StudentUncheckedUpdateWithoutAttendancesInput>
  }

  export type StaffUpdateOneWithoutAttendancesNestedInput = {
    create?: XOR<StaffCreateWithoutAttendancesInput, StaffUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutAttendancesInput
    upsert?: StaffUpsertWithoutAttendancesInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutAttendancesInput, StaffUpdateWithoutAttendancesInput>, StaffUncheckedUpdateWithoutAttendancesInput>
  }

  export type ClassUpdateOneWithoutAttendancesNestedInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    upsert?: ClassUpsertWithoutAttendancesInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAttendancesInput, ClassUpdateWithoutAttendancesInput>, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type CommunicationCreateaudienceInput = {
    set: string[]
  }

  export type TenantCreateNestedOneWithoutCommunicationsInput = {
    create?: XOR<TenantCreateWithoutCommunicationsInput, TenantUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCommunicationsInput
    connect?: TenantWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommunicationsInput = {
    create?: XOR<UserCreateWithoutCommunicationsInput, UserUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunicationsInput
    connect?: UserWhereUniqueInput
  }

  export type CommunicationUpdateaudienceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TenantUpdateOneRequiredWithoutCommunicationsNestedInput = {
    create?: XOR<TenantCreateWithoutCommunicationsInput, TenantUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCommunicationsInput
    upsert?: TenantUpsertWithoutCommunicationsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCommunicationsInput, TenantUpdateWithoutCommunicationsInput>, TenantUncheckedUpdateWithoutCommunicationsInput>
  }

  export type UserUpdateOneRequiredWithoutCommunicationsNestedInput = {
    create?: XOR<UserCreateWithoutCommunicationsInput, UserUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunicationsInput
    upsert?: UserUpsertWithoutCommunicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunicationsInput, UserUpdateWithoutCommunicationsInput>, UserUncheckedUpdateWithoutCommunicationsInput>
  }

  export type TenantCreateNestedOneWithoutFeesInput = {
    create?: XOR<TenantCreateWithoutFeesInput, TenantUncheckedCreateWithoutFeesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutFeesInput
    connect?: TenantWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutFeesInput = {
    create?: XOR<StudentCreateWithoutFeesInput, StudentUncheckedCreateWithoutFeesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFeesInput
    connect?: StudentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.FeeStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutFeesNestedInput = {
    create?: XOR<TenantCreateWithoutFeesInput, TenantUncheckedCreateWithoutFeesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutFeesInput
    upsert?: TenantUpsertWithoutFeesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutFeesInput, TenantUpdateWithoutFeesInput>, TenantUncheckedUpdateWithoutFeesInput>
  }

  export type StudentUpdateOneRequiredWithoutFeesNestedInput = {
    create?: XOR<StudentCreateWithoutFeesInput, StudentUncheckedCreateWithoutFeesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFeesInput
    upsert?: StudentUpsertWithoutFeesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutFeesInput, StudentUpdateWithoutFeesInput>, StudentUncheckedUpdateWithoutFeesInput>
  }

  export type TenantCreateNestedOneWithoutReportsInput = {
    create?: XOR<TenantCreateWithoutReportsInput, TenantUncheckedCreateWithoutReportsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReportsInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<TenantCreateWithoutReportsInput, TenantUncheckedCreateWithoutReportsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReportsInput
    upsert?: TenantUpsertWithoutReportsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutReportsInput, TenantUpdateWithoutReportsInput>, TenantUncheckedUpdateWithoutReportsInput>
  }

  export type TenantCreateNestedOneWithoutTimetablesInput = {
    create?: XOR<TenantCreateWithoutTimetablesInput, TenantUncheckedCreateWithoutTimetablesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTimetablesInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutTimetablesNestedInput = {
    create?: XOR<TenantCreateWithoutTimetablesInput, TenantUncheckedCreateWithoutTimetablesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTimetablesInput
    upsert?: TenantUpsertWithoutTimetablesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutTimetablesInput, TenantUpdateWithoutTimetablesInput>, TenantUncheckedUpdateWithoutTimetablesInput>
  }

  export type StaffCreateNestedOneWithoutPayrollsInput = {
    create?: XOR<StaffCreateWithoutPayrollsInput, StaffUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutPayrollsInput
    connect?: StaffWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutPayrollsInput = {
    create?: XOR<TenantCreateWithoutPayrollsInput, TenantUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPayrollsInput
    connect?: TenantWhereUniqueInput
  }

  export type StaffUpdateOneRequiredWithoutPayrollsNestedInput = {
    create?: XOR<StaffCreateWithoutPayrollsInput, StaffUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutPayrollsInput
    upsert?: StaffUpsertWithoutPayrollsInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutPayrollsInput, StaffUpdateWithoutPayrollsInput>, StaffUncheckedUpdateWithoutPayrollsInput>
  }

  export type TenantUpdateOneRequiredWithoutPayrollsNestedInput = {
    create?: XOR<TenantCreateWithoutPayrollsInput, TenantUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPayrollsInput
    upsert?: TenantUpsertWithoutPayrollsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPayrollsInput, TenantUpdateWithoutPayrollsInput>, TenantUncheckedUpdateWithoutPayrollsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedEnumFeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeeStatus | EnumFeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeeStatus[] | ListEnumFeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeeStatus[] | ListEnumFeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeeStatusFilter<$PrismaModel> | $Enums.FeeStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumFeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeeStatus | EnumFeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeeStatus[] | ListEnumFeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeeStatus[] | ListEnumFeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeeStatusFilter<$PrismaModel>
    _max?: NestedEnumFeeStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedOneWithoutUserInput
    communications?: CommunicationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type StaffCreateWithoutTenantInput = {
    id?: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffInput
    attendances?: AttendanceCreateNestedManyWithoutStaffInput
    classes?: ClassCreateNestedManyWithoutTeacherInput
    payrolls?: PayrollCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutTenantInput = {
    id?: string
    userId: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStaffInput
    classes?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutTenantInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput>
  }

  export type StaffCreateManyTenantInputEnvelope = {
    data: StaffCreateManyTenantInput | StaffCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutTenantInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeCreateNestedManyWithoutStudentInput
    classStudents?: ClassStudentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutTenantInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeUncheckedCreateNestedManyWithoutStudentInput
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutTenantInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutTenantInput, StudentUncheckedCreateWithoutTenantInput>
  }

  export type StudentCreateManyTenantInputEnvelope = {
    data: StudentCreateManyTenantInput | StudentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutTenantInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher?: StaffCreateNestedOneWithoutClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    classStudents?: ClassStudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTenantInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTenantInput, ClassUncheckedCreateWithoutTenantInput>
  }

  export type ClassCreateManyTenantInputEnvelope = {
    data: ClassCreateManyTenantInput | ClassCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutTenantInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutAttendancesInput
    staff?: StaffCreateNestedOneWithoutAttendancesInput
    class?: ClassCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutTenantInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    studentId?: string | null
    staffId?: string | null
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutTenantInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput>
  }

  export type AttendanceCreateManyTenantInputEnvelope = {
    data: AttendanceCreateManyTenantInput | AttendanceCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type FeeCreateWithoutTenantInput = {
    id?: string
    amount: number
    description?: string | null
    status?: $Enums.FeeStatus
    dueDate: Date | string
    paidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutFeesInput
  }

  export type FeeUncheckedCreateWithoutTenantInput = {
    id?: string
    amount: number
    description?: string | null
    status?: $Enums.FeeStatus
    dueDate: Date | string
    paidDate?: Date | string | null
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeCreateOrConnectWithoutTenantInput = {
    where: FeeWhereUniqueInput
    create: XOR<FeeCreateWithoutTenantInput, FeeUncheckedCreateWithoutTenantInput>
  }

  export type FeeCreateManyTenantInputEnvelope = {
    data: FeeCreateManyTenantInput | FeeCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CommunicationCreateWithoutTenantInput = {
    id?: string
    title: string
    content: string
    type: string
    audience?: CommunicationCreateaudienceInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCommunicationsInput
  }

  export type CommunicationUncheckedCreateWithoutTenantInput = {
    id?: string
    title: string
    content: string
    type: string
    audience?: CommunicationCreateaudienceInput | string[]
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationCreateOrConnectWithoutTenantInput = {
    where: CommunicationWhereUniqueInput
    create: XOR<CommunicationCreateWithoutTenantInput, CommunicationUncheckedCreateWithoutTenantInput>
  }

  export type CommunicationCreateManyTenantInputEnvelope = {
    data: CommunicationCreateManyTenantInput | CommunicationCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutTenantInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutTenantInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutTenantInput, ReportUncheckedCreateWithoutTenantInput>
  }

  export type ReportCreateManyTenantInputEnvelope = {
    data: ReportCreateManyTenantInput | ReportCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type TimetableCreateWithoutTenantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimetableUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimetableCreateOrConnectWithoutTenantInput = {
    where: TimetableWhereUniqueInput
    create: XOR<TimetableCreateWithoutTenantInput, TimetableUncheckedCreateWithoutTenantInput>
  }

  export type TimetableCreateManyTenantInputEnvelope = {
    data: TimetableCreateManyTenantInput | TimetableCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PayrollCreateWithoutTenantInput = {
    id?: string
    month: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    staff: StaffCreateNestedOneWithoutPayrollsInput
  }

  export type PayrollUncheckedCreateWithoutTenantInput = {
    id?: string
    staffId: string
    month: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollCreateOrConnectWithoutTenantInput = {
    where: PayrollWhereUniqueInput
    create: XOR<PayrollCreateWithoutTenantInput, PayrollUncheckedCreateWithoutTenantInput>
  }

  export type PayrollCreateManyTenantInputEnvelope = {
    data: PayrollCreateManyTenantInput | PayrollCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    tenantId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type StaffUpsertWithWhereUniqueWithoutTenantInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutTenantInput, StaffUncheckedUpdateWithoutTenantInput>
    create: XOR<StaffCreateWithoutTenantInput, StaffUncheckedCreateWithoutTenantInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutTenantInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutTenantInput, StaffUncheckedUpdateWithoutTenantInput>
  }

  export type StaffUpdateManyWithWhereWithoutTenantInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutTenantInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: StringFilter<"Staff"> | string
    userId?: StringFilter<"Staff"> | string
    tenantId?: StringFilter<"Staff"> | string
    staffId?: StringFilter<"Staff"> | string
    position?: StringFilter<"Staff"> | string
    department?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutTenantInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutTenantInput, StudentUncheckedUpdateWithoutTenantInput>
    create: XOR<StudentCreateWithoutTenantInput, StudentUncheckedCreateWithoutTenantInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutTenantInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutTenantInput, StudentUncheckedUpdateWithoutTenantInput>
  }

  export type StudentUpdateManyWithWhereWithoutTenantInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutTenantInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
    phone?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    tenantId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type ClassUpsertWithWhereUniqueWithoutTenantInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutTenantInput, ClassUncheckedUpdateWithoutTenantInput>
    create: XOR<ClassCreateWithoutTenantInput, ClassUncheckedCreateWithoutTenantInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutTenantInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutTenantInput, ClassUncheckedUpdateWithoutTenantInput>
  }

  export type ClassUpdateManyWithWhereWithoutTenantInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTenantInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    grade?: StringNullableFilter<"Class"> | string | null
    section?: StringNullableFilter<"Class"> | string | null
    isActive?: BoolFilter<"Class"> | boolean
    tenantId?: StringFilter<"Class"> | string
    teacherId?: StringNullableFilter<"Class"> | string | null
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutTenantInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutTenantInput, AttendanceUncheckedUpdateWithoutTenantInput>
    create: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutTenantInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutTenantInput, AttendanceUncheckedUpdateWithoutTenantInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutTenantInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutTenantInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    date?: StringFilter<"Attendance"> | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    studentId?: StringNullableFilter<"Attendance"> | string | null
    staffId?: StringNullableFilter<"Attendance"> | string | null
    classId?: StringNullableFilter<"Attendance"> | string | null
    tenantId?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type FeeUpsertWithWhereUniqueWithoutTenantInput = {
    where: FeeWhereUniqueInput
    update: XOR<FeeUpdateWithoutTenantInput, FeeUncheckedUpdateWithoutTenantInput>
    create: XOR<FeeCreateWithoutTenantInput, FeeUncheckedCreateWithoutTenantInput>
  }

  export type FeeUpdateWithWhereUniqueWithoutTenantInput = {
    where: FeeWhereUniqueInput
    data: XOR<FeeUpdateWithoutTenantInput, FeeUncheckedUpdateWithoutTenantInput>
  }

  export type FeeUpdateManyWithWhereWithoutTenantInput = {
    where: FeeScalarWhereInput
    data: XOR<FeeUpdateManyMutationInput, FeeUncheckedUpdateManyWithoutTenantInput>
  }

  export type FeeScalarWhereInput = {
    AND?: FeeScalarWhereInput | FeeScalarWhereInput[]
    OR?: FeeScalarWhereInput[]
    NOT?: FeeScalarWhereInput | FeeScalarWhereInput[]
    id?: StringFilter<"Fee"> | string
    amount?: FloatFilter<"Fee"> | number
    description?: StringNullableFilter<"Fee"> | string | null
    status?: EnumFeeStatusFilter<"Fee"> | $Enums.FeeStatus
    dueDate?: DateTimeFilter<"Fee"> | Date | string
    paidDate?: DateTimeNullableFilter<"Fee"> | Date | string | null
    studentId?: StringFilter<"Fee"> | string
    tenantId?: StringFilter<"Fee"> | string
    createdAt?: DateTimeFilter<"Fee"> | Date | string
    updatedAt?: DateTimeFilter<"Fee"> | Date | string
  }

  export type CommunicationUpsertWithWhereUniqueWithoutTenantInput = {
    where: CommunicationWhereUniqueInput
    update: XOR<CommunicationUpdateWithoutTenantInput, CommunicationUncheckedUpdateWithoutTenantInput>
    create: XOR<CommunicationCreateWithoutTenantInput, CommunicationUncheckedCreateWithoutTenantInput>
  }

  export type CommunicationUpdateWithWhereUniqueWithoutTenantInput = {
    where: CommunicationWhereUniqueInput
    data: XOR<CommunicationUpdateWithoutTenantInput, CommunicationUncheckedUpdateWithoutTenantInput>
  }

  export type CommunicationUpdateManyWithWhereWithoutTenantInput = {
    where: CommunicationScalarWhereInput
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyWithoutTenantInput>
  }

  export type CommunicationScalarWhereInput = {
    AND?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
    OR?: CommunicationScalarWhereInput[]
    NOT?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
    id?: StringFilter<"Communication"> | string
    title?: StringFilter<"Communication"> | string
    content?: StringFilter<"Communication"> | string
    type?: StringFilter<"Communication"> | string
    audience?: StringNullableListFilter<"Communication">
    tenantId?: StringFilter<"Communication"> | string
    senderId?: StringFilter<"Communication"> | string
    createdAt?: DateTimeFilter<"Communication"> | Date | string
    updatedAt?: DateTimeFilter<"Communication"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutTenantInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutTenantInput, ReportUncheckedUpdateWithoutTenantInput>
    create: XOR<ReportCreateWithoutTenantInput, ReportUncheckedCreateWithoutTenantInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutTenantInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutTenantInput, ReportUncheckedUpdateWithoutTenantInput>
  }

  export type ReportUpdateManyWithWhereWithoutTenantInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutTenantInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    name?: StringFilter<"Report"> | string
    type?: StringFilter<"Report"> | string
    data?: JsonFilter<"Report">
    tenantId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type TimetableUpsertWithWhereUniqueWithoutTenantInput = {
    where: TimetableWhereUniqueInput
    update: XOR<TimetableUpdateWithoutTenantInput, TimetableUncheckedUpdateWithoutTenantInput>
    create: XOR<TimetableCreateWithoutTenantInput, TimetableUncheckedCreateWithoutTenantInput>
  }

  export type TimetableUpdateWithWhereUniqueWithoutTenantInput = {
    where: TimetableWhereUniqueInput
    data: XOR<TimetableUpdateWithoutTenantInput, TimetableUncheckedUpdateWithoutTenantInput>
  }

  export type TimetableUpdateManyWithWhereWithoutTenantInput = {
    where: TimetableScalarWhereInput
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyWithoutTenantInput>
  }

  export type TimetableScalarWhereInput = {
    AND?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
    OR?: TimetableScalarWhereInput[]
    NOT?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
    id?: StringFilter<"Timetable"> | string
    name?: StringFilter<"Timetable"> | string
    tenantId?: StringFilter<"Timetable"> | string
    createdAt?: DateTimeFilter<"Timetable"> | Date | string
    updatedAt?: DateTimeFilter<"Timetable"> | Date | string
  }

  export type PayrollUpsertWithWhereUniqueWithoutTenantInput = {
    where: PayrollWhereUniqueInput
    update: XOR<PayrollUpdateWithoutTenantInput, PayrollUncheckedUpdateWithoutTenantInput>
    create: XOR<PayrollCreateWithoutTenantInput, PayrollUncheckedCreateWithoutTenantInput>
  }

  export type PayrollUpdateWithWhereUniqueWithoutTenantInput = {
    where: PayrollWhereUniqueInput
    data: XOR<PayrollUpdateWithoutTenantInput, PayrollUncheckedUpdateWithoutTenantInput>
  }

  export type PayrollUpdateManyWithWhereWithoutTenantInput = {
    where: PayrollScalarWhereInput
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyWithoutTenantInput>
  }

  export type PayrollScalarWhereInput = {
    AND?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    OR?: PayrollScalarWhereInput[]
    NOT?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    id?: StringFilter<"Payroll"> | string
    staffId?: StringFilter<"Payroll"> | string
    tenantId?: StringFilter<"Payroll"> | string
    month?: StringFilter<"Payroll"> | string
    year?: IntFilter<"Payroll"> | number
    amount?: FloatFilter<"Payroll"> | number
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type StaffCreateWithoutUserInput = {
    id?: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutStaffInput
    attendances?: AttendanceCreateNestedManyWithoutStaffInput
    classes?: ClassCreateNestedManyWithoutTeacherInput
    payrolls?: PayrollCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStaffInput
    classes?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutUserInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
  }

  export type CommunicationCreateWithoutSenderInput = {
    id?: string
    title: string
    content: string
    type: string
    audience?: CommunicationCreateaudienceInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCommunicationsInput
  }

  export type CommunicationUncheckedCreateWithoutSenderInput = {
    id?: string
    title: string
    content: string
    type: string
    audience?: CommunicationCreateaudienceInput | string[]
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationCreateOrConnectWithoutSenderInput = {
    where: CommunicationWhereUniqueInput
    create: XOR<CommunicationCreateWithoutSenderInput, CommunicationUncheckedCreateWithoutSenderInput>
  }

  export type CommunicationCreateManySenderInputEnvelope = {
    data: CommunicationCreateManySenderInput | CommunicationCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type StaffUpsertWithoutUserInput = {
    update: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutUserInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
  }

  export type StaffUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutStaffNestedInput
    attendances?: AttendanceUpdateManyWithoutStaffNestedInput
    classes?: ClassUpdateManyWithoutTeacherNestedInput
    payrolls?: PayrollUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStaffNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type CommunicationUpsertWithWhereUniqueWithoutSenderInput = {
    where: CommunicationWhereUniqueInput
    update: XOR<CommunicationUpdateWithoutSenderInput, CommunicationUncheckedUpdateWithoutSenderInput>
    create: XOR<CommunicationCreateWithoutSenderInput, CommunicationUncheckedCreateWithoutSenderInput>
  }

  export type CommunicationUpdateWithWhereUniqueWithoutSenderInput = {
    where: CommunicationWhereUniqueInput
    data: XOR<CommunicationUpdateWithoutSenderInput, CommunicationUncheckedUpdateWithoutSenderInput>
  }

  export type CommunicationUpdateManyWithWhereWithoutSenderInput = {
    where: CommunicationScalarWhereInput
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyWithoutSenderInput>
  }

  export type TenantCreateWithoutStudentsInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    staff?: StaffCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutStudentsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutStudentsInput, TenantUncheckedCreateWithoutStudentsInput>
  }

  export type AttendanceCreateWithoutStudentInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAttendancesInput
    staff?: StaffCreateNestedOneWithoutAttendancesInput
    class?: ClassCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    staffId?: string | null
    classId?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type FeeCreateWithoutStudentInput = {
    id?: string
    amount: number
    description?: string | null
    status?: $Enums.FeeStatus
    dueDate: Date | string
    paidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutFeesInput
  }

  export type FeeUncheckedCreateWithoutStudentInput = {
    id?: string
    amount: number
    description?: string | null
    status?: $Enums.FeeStatus
    dueDate: Date | string
    paidDate?: Date | string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeCreateOrConnectWithoutStudentInput = {
    where: FeeWhereUniqueInput
    create: XOR<FeeCreateWithoutStudentInput, FeeUncheckedCreateWithoutStudentInput>
  }

  export type FeeCreateManyStudentInputEnvelope = {
    data: FeeCreateManyStudentInput | FeeCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassStudentCreateWithoutStudentInput = {
    id?: string
    tenantId: string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutClassStudentsInput
  }

  export type ClassStudentUncheckedCreateWithoutStudentInput = {
    id?: string
    classId: string
    tenantId: string
    createdAt?: Date | string
  }

  export type ClassStudentCreateOrConnectWithoutStudentInput = {
    where: ClassStudentWhereUniqueInput
    create: XOR<ClassStudentCreateWithoutStudentInput, ClassStudentUncheckedCreateWithoutStudentInput>
  }

  export type ClassStudentCreateManyStudentInputEnvelope = {
    data: ClassStudentCreateManyStudentInput | ClassStudentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutStudentsInput = {
    update: XOR<TenantUpdateWithoutStudentsInput, TenantUncheckedUpdateWithoutStudentsInput>
    create: XOR<TenantCreateWithoutStudentsInput, TenantUncheckedCreateWithoutStudentsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutStudentsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutStudentsInput, TenantUncheckedUpdateWithoutStudentsInput>
  }

  export type TenantUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    staff?: StaffUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type FeeUpsertWithWhereUniqueWithoutStudentInput = {
    where: FeeWhereUniqueInput
    update: XOR<FeeUpdateWithoutStudentInput, FeeUncheckedUpdateWithoutStudentInput>
    create: XOR<FeeCreateWithoutStudentInput, FeeUncheckedCreateWithoutStudentInput>
  }

  export type FeeUpdateWithWhereUniqueWithoutStudentInput = {
    where: FeeWhereUniqueInput
    data: XOR<FeeUpdateWithoutStudentInput, FeeUncheckedUpdateWithoutStudentInput>
  }

  export type FeeUpdateManyWithWhereWithoutStudentInput = {
    where: FeeScalarWhereInput
    data: XOR<FeeUpdateManyMutationInput, FeeUncheckedUpdateManyWithoutStudentInput>
  }

  export type ClassStudentUpsertWithWhereUniqueWithoutStudentInput = {
    where: ClassStudentWhereUniqueInput
    update: XOR<ClassStudentUpdateWithoutStudentInput, ClassStudentUncheckedUpdateWithoutStudentInput>
    create: XOR<ClassStudentCreateWithoutStudentInput, ClassStudentUncheckedCreateWithoutStudentInput>
  }

  export type ClassStudentUpdateWithWhereUniqueWithoutStudentInput = {
    where: ClassStudentWhereUniqueInput
    data: XOR<ClassStudentUpdateWithoutStudentInput, ClassStudentUncheckedUpdateWithoutStudentInput>
  }

  export type ClassStudentUpdateManyWithWhereWithoutStudentInput = {
    where: ClassStudentScalarWhereInput
    data: XOR<ClassStudentUpdateManyMutationInput, ClassStudentUncheckedUpdateManyWithoutStudentInput>
  }

  export type ClassStudentScalarWhereInput = {
    AND?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
    OR?: ClassStudentScalarWhereInput[]
    NOT?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
    id?: StringFilter<"ClassStudent"> | string
    classId?: StringFilter<"ClassStudent"> | string
    studentId?: StringFilter<"ClassStudent"> | string
    tenantId?: StringFilter<"ClassStudent"> | string
    createdAt?: DateTimeFilter<"ClassStudent"> | Date | string
  }

  export type UserCreateWithoutStaffInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    communications?: CommunicationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutStaffInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communications?: CommunicationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
  }

  export type TenantCreateWithoutStaffInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutStaffInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
  }

  export type AttendanceCreateWithoutStaffInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAttendancesInput
    student?: StudentCreateNestedOneWithoutAttendancesInput
    class?: ClassCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutStaffInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    studentId?: string | null
    classId?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutStaffInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStaffInput, AttendanceUncheckedCreateWithoutStaffInput>
  }

  export type AttendanceCreateManyStaffInputEnvelope = {
    data: AttendanceCreateManyStaffInput | AttendanceCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutTeacherInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    classStudents?: ClassStudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassCreateManyTeacherInputEnvelope = {
    data: ClassCreateManyTeacherInput | ClassCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type PayrollCreateWithoutStaffInput = {
    id?: string
    month: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPayrollsInput
  }

  export type PayrollUncheckedCreateWithoutStaffInput = {
    id?: string
    tenantId: string
    month: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollCreateOrConnectWithoutStaffInput = {
    where: PayrollWhereUniqueInput
    create: XOR<PayrollCreateWithoutStaffInput, PayrollUncheckedCreateWithoutStaffInput>
  }

  export type PayrollCreateManyStaffInputEnvelope = {
    data: PayrollCreateManyStaffInput | PayrollCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStaffInput = {
    update: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    communications?: CommunicationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communications?: CommunicationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type TenantUpsertWithoutStaffInput = {
    update: XOR<TenantUpdateWithoutStaffInput, TenantUncheckedUpdateWithoutStaffInput>
    create: XOR<TenantCreateWithoutStaffInput, TenantUncheckedCreateWithoutStaffInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutStaffInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutStaffInput, TenantUncheckedUpdateWithoutStaffInput>
  }

  export type TenantUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStaffInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStaffInput, AttendanceUncheckedUpdateWithoutStaffInput>
    create: XOR<AttendanceCreateWithoutStaffInput, AttendanceUncheckedCreateWithoutStaffInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStaffInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStaffInput, AttendanceUncheckedUpdateWithoutStaffInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStaffInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStaffInput>
  }

  export type ClassUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassUpdateManyWithWhereWithoutTeacherInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTeacherInput>
  }

  export type PayrollUpsertWithWhereUniqueWithoutStaffInput = {
    where: PayrollWhereUniqueInput
    update: XOR<PayrollUpdateWithoutStaffInput, PayrollUncheckedUpdateWithoutStaffInput>
    create: XOR<PayrollCreateWithoutStaffInput, PayrollUncheckedCreateWithoutStaffInput>
  }

  export type PayrollUpdateWithWhereUniqueWithoutStaffInput = {
    where: PayrollWhereUniqueInput
    data: XOR<PayrollUpdateWithoutStaffInput, PayrollUncheckedUpdateWithoutStaffInput>
  }

  export type PayrollUpdateManyWithWhereWithoutStaffInput = {
    where: PayrollScalarWhereInput
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyWithoutStaffInput>
  }

  export type TenantCreateWithoutClassesInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    staff?: StaffCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutClassesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutClassesInput, TenantUncheckedCreateWithoutClassesInput>
  }

  export type StaffCreateWithoutClassesInput = {
    id?: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffInput
    tenant: TenantCreateNestedOneWithoutStaffInput
    attendances?: AttendanceCreateNestedManyWithoutStaffInput
    payrolls?: PayrollCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutClassesInput = {
    id?: string
    userId: string
    tenantId: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStaffInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutClassesInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutClassesInput, StaffUncheckedCreateWithoutClassesInput>
  }

  export type AttendanceCreateWithoutClassInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAttendancesInput
    student?: StudentCreateNestedOneWithoutAttendancesInput
    staff?: StaffCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutClassInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    studentId?: string | null
    staffId?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceCreateManyClassInputEnvelope = {
    data: AttendanceCreateManyClassInput | AttendanceCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type ClassStudentCreateWithoutClassInput = {
    id?: string
    tenantId: string
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutClassStudentsInput
  }

  export type ClassStudentUncheckedCreateWithoutClassInput = {
    id?: string
    studentId: string
    tenantId: string
    createdAt?: Date | string
  }

  export type ClassStudentCreateOrConnectWithoutClassInput = {
    where: ClassStudentWhereUniqueInput
    create: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput>
  }

  export type ClassStudentCreateManyClassInputEnvelope = {
    data: ClassStudentCreateManyClassInput | ClassStudentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutClassesInput = {
    update: XOR<TenantUpdateWithoutClassesInput, TenantUncheckedUpdateWithoutClassesInput>
    create: XOR<TenantCreateWithoutClassesInput, TenantUncheckedCreateWithoutClassesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutClassesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutClassesInput, TenantUncheckedUpdateWithoutClassesInput>
  }

  export type TenantUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    staff?: StaffUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type StaffUpsertWithoutClassesInput = {
    update: XOR<StaffUpdateWithoutClassesInput, StaffUncheckedUpdateWithoutClassesInput>
    create: XOR<StaffCreateWithoutClassesInput, StaffUncheckedCreateWithoutClassesInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutClassesInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutClassesInput, StaffUncheckedUpdateWithoutClassesInput>
  }

  export type StaffUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
    tenant?: TenantUpdateOneRequiredWithoutStaffNestedInput
    attendances?: AttendanceUpdateManyWithoutStaffNestedInput
    payrolls?: PayrollUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStaffNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutClassInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassStudentUpsertWithWhereUniqueWithoutClassInput = {
    where: ClassStudentWhereUniqueInput
    update: XOR<ClassStudentUpdateWithoutClassInput, ClassStudentUncheckedUpdateWithoutClassInput>
    create: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput>
  }

  export type ClassStudentUpdateWithWhereUniqueWithoutClassInput = {
    where: ClassStudentWhereUniqueInput
    data: XOR<ClassStudentUpdateWithoutClassInput, ClassStudentUncheckedUpdateWithoutClassInput>
  }

  export type ClassStudentUpdateManyWithWhereWithoutClassInput = {
    where: ClassStudentScalarWhereInput
    data: XOR<ClassStudentUpdateManyMutationInput, ClassStudentUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassCreateWithoutClassStudentsInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutClassesInput
    teacher?: StaffCreateNestedOneWithoutClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutClassStudentsInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    tenantId: string
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutClassStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutClassStudentsInput, ClassUncheckedCreateWithoutClassStudentsInput>
  }

  export type StudentCreateWithoutClassStudentsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutStudentsInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClassStudentsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClassStudentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassStudentsInput, StudentUncheckedCreateWithoutClassStudentsInput>
  }

  export type ClassUpsertWithoutClassStudentsInput = {
    update: XOR<ClassUpdateWithoutClassStudentsInput, ClassUncheckedUpdateWithoutClassStudentsInput>
    create: XOR<ClassCreateWithoutClassStudentsInput, ClassUncheckedCreateWithoutClassStudentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutClassStudentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutClassStudentsInput, ClassUncheckedUpdateWithoutClassStudentsInput>
  }

  export type ClassUpdateWithoutClassStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClassesNestedInput
    teacher?: StaffUpdateOneWithoutClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutClassStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type StudentUpsertWithoutClassStudentsInput = {
    update: XOR<StudentUpdateWithoutClassStudentsInput, StudentUncheckedUpdateWithoutClassStudentsInput>
    create: XOR<StudentCreateWithoutClassStudentsInput, StudentUncheckedCreateWithoutClassStudentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutClassStudentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutClassStudentsInput, StudentUncheckedUpdateWithoutClassStudentsInput>
  }

  export type StudentUpdateWithoutClassStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutStudentsNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClassStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TenantCreateWithoutAttendancesInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    staff?: StaffCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutAttendancesInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutAttendancesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAttendancesInput, TenantUncheckedCreateWithoutAttendancesInput>
  }

  export type StudentCreateWithoutAttendancesInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutStudentsInput
    fees?: FeeCreateNestedManyWithoutStudentInput
    classStudents?: ClassStudentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttendancesInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fees?: FeeUncheckedCreateNestedManyWithoutStudentInput
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendancesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
  }

  export type StaffCreateWithoutAttendancesInput = {
    id?: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffInput
    tenant: TenantCreateNestedOneWithoutStaffInput
    classes?: ClassCreateNestedManyWithoutTeacherInput
    payrolls?: PayrollCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutAttendancesInput = {
    id?: string
    userId: string
    tenantId: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutAttendancesInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutAttendancesInput, StaffUncheckedCreateWithoutAttendancesInput>
  }

  export type ClassCreateWithoutAttendancesInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutClassesInput
    teacher?: StaffCreateNestedOneWithoutClassesInput
    classStudents?: ClassStudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAttendancesInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    tenantId: string
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAttendancesInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
  }

  export type TenantUpsertWithoutAttendancesInput = {
    update: XOR<TenantUpdateWithoutAttendancesInput, TenantUncheckedUpdateWithoutAttendancesInput>
    create: XOR<TenantCreateWithoutAttendancesInput, TenantUncheckedCreateWithoutAttendancesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAttendancesInput, TenantUncheckedUpdateWithoutAttendancesInput>
  }

  export type TenantUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    staff?: StaffUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type StudentUpsertWithoutAttendancesInput = {
    update: XOR<StudentUpdateWithoutAttendancesInput, StudentUncheckedUpdateWithoutAttendancesInput>
    create: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendancesInput, StudentUncheckedUpdateWithoutAttendancesInput>
  }

  export type StudentUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutStudentsNestedInput
    fees?: FeeUpdateManyWithoutStudentNestedInput
    classStudents?: ClassStudentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fees?: FeeUncheckedUpdateManyWithoutStudentNestedInput
    classStudents?: ClassStudentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StaffUpsertWithoutAttendancesInput = {
    update: XOR<StaffUpdateWithoutAttendancesInput, StaffUncheckedUpdateWithoutAttendancesInput>
    create: XOR<StaffCreateWithoutAttendancesInput, StaffUncheckedCreateWithoutAttendancesInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutAttendancesInput, StaffUncheckedUpdateWithoutAttendancesInput>
  }

  export type StaffUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
    tenant?: TenantUpdateOneRequiredWithoutStaffNestedInput
    classes?: ClassUpdateManyWithoutTeacherNestedInput
    payrolls?: PayrollUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type ClassUpsertWithoutAttendancesInput = {
    update: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type ClassUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClassesNestedInput
    teacher?: StaffUpdateOneWithoutClassesNestedInput
    classStudents?: ClassStudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classStudents?: ClassStudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type TenantCreateWithoutCommunicationsInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    staff?: StaffCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCommunicationsInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCommunicationsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCommunicationsInput, TenantUncheckedCreateWithoutCommunicationsInput>
  }

  export type UserCreateWithoutCommunicationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    staff?: StaffCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunicationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunicationsInput, UserUncheckedCreateWithoutCommunicationsInput>
  }

  export type TenantUpsertWithoutCommunicationsInput = {
    update: XOR<TenantUpdateWithoutCommunicationsInput, TenantUncheckedUpdateWithoutCommunicationsInput>
    create: XOR<TenantCreateWithoutCommunicationsInput, TenantUncheckedCreateWithoutCommunicationsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCommunicationsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCommunicationsInput, TenantUncheckedUpdateWithoutCommunicationsInput>
  }

  export type TenantUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    staff?: StaffUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserUpsertWithoutCommunicationsInput = {
    update: XOR<UserUpdateWithoutCommunicationsInput, UserUncheckedUpdateWithoutCommunicationsInput>
    create: XOR<UserCreateWithoutCommunicationsInput, UserUncheckedCreateWithoutCommunicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunicationsInput, UserUncheckedUpdateWithoutCommunicationsInput>
  }

  export type UserUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TenantCreateWithoutFeesInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    staff?: StaffCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutFeesInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutFeesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutFeesInput, TenantUncheckedCreateWithoutFeesInput>
  }

  export type StudentCreateWithoutFeesInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutStudentsInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    classStudents?: ClassStudentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutFeesInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutFeesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutFeesInput, StudentUncheckedCreateWithoutFeesInput>
  }

  export type TenantUpsertWithoutFeesInput = {
    update: XOR<TenantUpdateWithoutFeesInput, TenantUncheckedUpdateWithoutFeesInput>
    create: XOR<TenantCreateWithoutFeesInput, TenantUncheckedCreateWithoutFeesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutFeesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutFeesInput, TenantUncheckedUpdateWithoutFeesInput>
  }

  export type TenantUpdateWithoutFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    staff?: StaffUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type StudentUpsertWithoutFeesInput = {
    update: XOR<StudentUpdateWithoutFeesInput, StudentUncheckedUpdateWithoutFeesInput>
    create: XOR<StudentCreateWithoutFeesInput, StudentUncheckedCreateWithoutFeesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutFeesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutFeesInput, StudentUncheckedUpdateWithoutFeesInput>
  }

  export type StudentUpdateWithoutFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutStudentsNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    classStudents?: ClassStudentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    classStudents?: ClassStudentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TenantCreateWithoutReportsInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    staff?: StaffCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutReportsInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutReportsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutReportsInput, TenantUncheckedCreateWithoutReportsInput>
  }

  export type TenantUpsertWithoutReportsInput = {
    update: XOR<TenantUpdateWithoutReportsInput, TenantUncheckedUpdateWithoutReportsInput>
    create: XOR<TenantCreateWithoutReportsInput, TenantUncheckedCreateWithoutReportsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutReportsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutReportsInput, TenantUncheckedUpdateWithoutReportsInput>
  }

  export type TenantUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    staff?: StaffUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutTimetablesInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    staff?: StaffCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    payrolls?: PayrollCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutTimetablesInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    payrolls?: PayrollUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutTimetablesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutTimetablesInput, TenantUncheckedCreateWithoutTimetablesInput>
  }

  export type TenantUpsertWithoutTimetablesInput = {
    update: XOR<TenantUpdateWithoutTimetablesInput, TenantUncheckedUpdateWithoutTimetablesInput>
    create: XOR<TenantCreateWithoutTimetablesInput, TenantUncheckedCreateWithoutTimetablesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutTimetablesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutTimetablesInput, TenantUncheckedUpdateWithoutTimetablesInput>
  }

  export type TenantUpdateWithoutTimetablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    staff?: StaffUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutTimetablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type StaffCreateWithoutPayrollsInput = {
    id?: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffInput
    tenant: TenantCreateNestedOneWithoutStaffInput
    attendances?: AttendanceCreateNestedManyWithoutStaffInput
    classes?: ClassCreateNestedManyWithoutTeacherInput
  }

  export type StaffUncheckedCreateWithoutPayrollsInput = {
    id?: string
    userId: string
    tenantId: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStaffInput
    classes?: ClassUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type StaffCreateOrConnectWithoutPayrollsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutPayrollsInput, StaffUncheckedCreateWithoutPayrollsInput>
  }

  export type TenantCreateWithoutPayrollsInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    staff?: StaffCreateNestedManyWithoutTenantInput
    students?: StudentCreateNestedManyWithoutTenantInput
    classes?: ClassCreateNestedManyWithoutTenantInput
    attendances?: AttendanceCreateNestedManyWithoutTenantInput
    fees?: FeeCreateNestedManyWithoutTenantInput
    communications?: CommunicationCreateNestedManyWithoutTenantInput
    reports?: ReportCreateNestedManyWithoutTenantInput
    timetables?: TimetableCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPayrollsInput = {
    id?: string
    name: string
    slug: string
    subdomain?: string | null
    email: string
    phone?: string | null
    address?: string | null
    logo?: string | null
    languages?: TenantCreatelanguagesInput | string[]
    maxStudents?: number
    subscription?: string
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    staff?: StaffUncheckedCreateNestedManyWithoutTenantInput
    students?: StudentUncheckedCreateNestedManyWithoutTenantInput
    classes?: ClassUncheckedCreateNestedManyWithoutTenantInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
    fees?: FeeUncheckedCreateNestedManyWithoutTenantInput
    communications?: CommunicationUncheckedCreateNestedManyWithoutTenantInput
    reports?: ReportUncheckedCreateNestedManyWithoutTenantInput
    timetables?: TimetableUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPayrollsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPayrollsInput, TenantUncheckedCreateWithoutPayrollsInput>
  }

  export type StaffUpsertWithoutPayrollsInput = {
    update: XOR<StaffUpdateWithoutPayrollsInput, StaffUncheckedUpdateWithoutPayrollsInput>
    create: XOR<StaffCreateWithoutPayrollsInput, StaffUncheckedCreateWithoutPayrollsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutPayrollsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutPayrollsInput, StaffUncheckedUpdateWithoutPayrollsInput>
  }

  export type StaffUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
    tenant?: TenantUpdateOneRequiredWithoutStaffNestedInput
    attendances?: AttendanceUpdateManyWithoutStaffNestedInput
    classes?: ClassUpdateManyWithoutTeacherNestedInput
  }

  export type StaffUncheckedUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStaffNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TenantUpsertWithoutPayrollsInput = {
    update: XOR<TenantUpdateWithoutPayrollsInput, TenantUncheckedUpdateWithoutPayrollsInput>
    create: XOR<TenantCreateWithoutPayrollsInput, TenantUncheckedCreateWithoutPayrollsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPayrollsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPayrollsInput, TenantUncheckedUpdateWithoutPayrollsInput>
  }

  export type TenantUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    staff?: StaffUpdateManyWithoutTenantNestedInput
    students?: StudentUpdateManyWithoutTenantNestedInput
    classes?: ClassUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUpdateManyWithoutTenantNestedInput
    fees?: FeeUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUpdateManyWithoutTenantNestedInput
    reports?: ReportUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    subdomain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: TenantUpdatelanguagesInput | string[]
    maxStudents?: IntFieldUpdateOperationsInput | number
    subscription?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutTenantNestedInput
    students?: StudentUncheckedUpdateManyWithoutTenantNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTenantNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
    fees?: FeeUncheckedUpdateManyWithoutTenantNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutTenantNestedInput
    reports?: ReportUncheckedUpdateManyWithoutTenantNestedInput
    timetables?: TimetableUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateManyTenantInput = {
    id?: string
    userId: string
    staffId: string
    position: string
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateManyTenantInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassCreateManyTenantInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateManyTenantInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    studentId?: string | null
    staffId?: string | null
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeCreateManyTenantInput = {
    id?: string
    amount: number
    description?: string | null
    status?: $Enums.FeeStatus
    dueDate: Date | string
    paidDate?: Date | string | null
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationCreateManyTenantInput = {
    id?: string
    title: string
    content: string
    type: string
    audience?: CommunicationCreateaudienceInput | string[]
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateManyTenantInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimetableCreateManyTenantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollCreateManyTenantInput = {
    id?: string
    staffId: string
    month: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateOneWithoutUserNestedInput
    communications?: CommunicationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    communications?: CommunicationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
    attendances?: AttendanceUpdateManyWithoutStaffNestedInput
    classes?: ClassUpdateManyWithoutTeacherNestedInput
    payrolls?: PayrollUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStaffNestedInput
    classes?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    payrolls?: PayrollUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeUpdateManyWithoutStudentNestedInput
    classStudents?: ClassStudentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeUncheckedUpdateManyWithoutStudentNestedInput
    classStudents?: ClassStudentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: StaffUpdateOneWithoutClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    classStudents?: ClassStudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    classStudents?: ClassStudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutAttendancesNestedInput
    staff?: StaffUpdateOneWithoutAttendancesNestedInput
    class?: ClassUpdateOneWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutFeesNestedInput
  }

  export type FeeUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCommunicationsNestedInput
  }

  export type CommunicationUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateOneRequiredWithoutPayrollsNestedInput
  }

  export type PayrollUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationCreateManySenderInput = {
    id?: string
    title: string
    content: string
    type: string
    audience?: CommunicationCreateaudienceInput | string[]
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCommunicationsNestedInput
  }

  export type CommunicationUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    audience?: CommunicationUpdateaudienceInput | string[]
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    staffId?: string | null
    classId?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeeCreateManyStudentInput = {
    id?: string
    amount: number
    description?: string | null
    status?: $Enums.FeeStatus
    dueDate: Date | string
    paidDate?: Date | string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassStudentCreateManyStudentInput = {
    id?: string
    classId: string
    tenantId: string
    createdAt?: Date | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAttendancesNestedInput
    staff?: StaffUpdateOneWithoutAttendancesNestedInput
    class?: ClassUpdateOneWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutFeesNestedInput
  }

  export type FeeUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeeStatusFieldUpdateOperationsInput | $Enums.FeeStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutClassStudentsNestedInput
  }

  export type ClassStudentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyStaffInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    studentId?: string | null
    classId?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassCreateManyTeacherInput = {
    id?: string
    name: string
    grade?: string | null
    section?: string | null
    isActive?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollCreateManyStaffInput = {
    id?: string
    tenantId: string
    month: string
    year: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAttendancesNestedInput
    student?: StudentUpdateOneWithoutAttendancesNestedInput
    class?: ClassUpdateOneWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    classStudents?: ClassStudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    classStudents?: ClassStudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPayrollsNestedInput
  }

  export type PayrollUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyClassInput = {
    id?: string
    date: string
    status: $Enums.AttendanceStatus
    studentId?: string | null
    staffId?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassStudentCreateManyClassInput = {
    id?: string
    studentId: string
    tenantId: string
    createdAt?: Date | string
  }

  export type AttendanceUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAttendancesNestedInput
    student?: StudentUpdateOneWithoutAttendancesNestedInput
    staff?: StaffUpdateOneWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutClassStudentsNestedInput
  }

  export type ClassStudentUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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