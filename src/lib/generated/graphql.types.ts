export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: any
  date: any
  float8: any
  jsonb: any
  numeric: any
  timestamp: any
  timestamptz: any
  userRoleEnum: any
  uuid: any
}

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'Account'
  accessToken?: Maybe<Scalars['String']>
  expiresAt?: Maybe<Scalars['bigint']>
  id: Scalars['uuid']
  idToken?: Maybe<Scalars['String']>
  oauthToken?: Maybe<Scalars['String']>
  oauthTokenSecret?: Maybe<Scalars['String']>
  provider: Scalars['String']
  providerAccountId: Scalars['String']
  refreshToken?: Maybe<Scalars['String']>
  refreshTokenExpiresIn?: Maybe<Scalars['bigint']>
  scope?: Maybe<Scalars['String']>
  sessionState?: Maybe<Scalars['String']>
  tokenType?: Maybe<Scalars['String']>
  type: Scalars['String']
  userId: Scalars['uuid']
}

/** aggregated selection of "account" */
export type AccountAggregate = {
  __typename?: 'AccountAggregate'
  aggregate?: Maybe<AccountAggregateFields>
  nodes: Array<Account>
}

/** aggregate fields of "account" */
export type AccountAggregateFields = {
  __typename?: 'AccountAggregateFields'
  avg?: Maybe<AccountAvgFields>
  count: Scalars['Int']
  max?: Maybe<AccountMaxFields>
  min?: Maybe<AccountMinFields>
  stddev?: Maybe<AccountStddevFields>
  stddevPop?: Maybe<AccountStddev_PopFields>
  stddevSamp?: Maybe<AccountStddev_SampFields>
  sum?: Maybe<AccountSumFields>
  varPop?: Maybe<AccountVar_PopFields>
  varSamp?: Maybe<AccountVar_SampFields>
  variance?: Maybe<AccountVarianceFields>
}

/** aggregate fields of "account" */
export type AccountAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AccountSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "account" */
export type AccountAggregateOrderBy = {
  avg?: InputMaybe<Account_Avg_Order_By>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<Account_Max_Order_By>
  min?: InputMaybe<Account_Min_Order_By>
  stddev?: InputMaybe<Account_Stddev_Order_By>
  stddev_pop?: InputMaybe<Account_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Account_Stddev_Samp_Order_By>
  sum?: InputMaybe<Account_Sum_Order_By>
  var_pop?: InputMaybe<Account_Var_Pop_Order_By>
  var_samp?: InputMaybe<Account_Var_Samp_Order_By>
  variance?: InputMaybe<Account_Variance_Order_By>
}

/** input type for inserting array relation for remote table "account" */
export type AccountArrRelInsertInput = {
  data: Array<AccountInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<AccountOnConflict>
}

/** aggregate avg on columns */
export type AccountAvgFields = {
  __typename?: 'AccountAvgFields'
  expiresAt?: Maybe<Scalars['Float']>
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type AccountBoolExp = {
  _and?: InputMaybe<Array<AccountBoolExp>>
  _not?: InputMaybe<AccountBoolExp>
  _or?: InputMaybe<Array<AccountBoolExp>>
  accessToken?: InputMaybe<StringComparisonExp>
  expiresAt?: InputMaybe<BigintComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  idToken?: InputMaybe<StringComparisonExp>
  oauthToken?: InputMaybe<StringComparisonExp>
  oauthTokenSecret?: InputMaybe<StringComparisonExp>
  provider?: InputMaybe<StringComparisonExp>
  providerAccountId?: InputMaybe<StringComparisonExp>
  refreshToken?: InputMaybe<StringComparisonExp>
  refreshTokenExpiresIn?: InputMaybe<BigintComparisonExp>
  scope?: InputMaybe<StringComparisonExp>
  sessionState?: InputMaybe<StringComparisonExp>
  tokenType?: InputMaybe<StringComparisonExp>
  type?: InputMaybe<StringComparisonExp>
  userId?: InputMaybe<UuidComparisonExp>
}

/** unique or primary key constraints on table "account" */
export enum AccountConstraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey',
}

/** input type for incrementing numeric columns in table "account" */
export type AccountIncInput = {
  expiresAt?: InputMaybe<Scalars['bigint']>
  refreshTokenExpiresIn?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "account" */
export type AccountInsertInput = {
  accessToken?: InputMaybe<Scalars['String']>
  expiresAt?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['uuid']>
  idToken?: InputMaybe<Scalars['String']>
  oauthToken?: InputMaybe<Scalars['String']>
  oauthTokenSecret?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  providerAccountId?: InputMaybe<Scalars['String']>
  refreshToken?: InputMaybe<Scalars['String']>
  refreshTokenExpiresIn?: InputMaybe<Scalars['bigint']>
  scope?: InputMaybe<Scalars['String']>
  sessionState?: InputMaybe<Scalars['String']>
  tokenType?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type AccountMaxFields = {
  __typename?: 'AccountMaxFields'
  accessToken?: Maybe<Scalars['String']>
  expiresAt?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['uuid']>
  idToken?: Maybe<Scalars['String']>
  oauthToken?: Maybe<Scalars['String']>
  oauthTokenSecret?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  providerAccountId?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  refreshTokenExpiresIn?: Maybe<Scalars['bigint']>
  scope?: Maybe<Scalars['String']>
  sessionState?: Maybe<Scalars['String']>
  tokenType?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type AccountMinFields = {
  __typename?: 'AccountMinFields'
  accessToken?: Maybe<Scalars['String']>
  expiresAt?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['uuid']>
  idToken?: Maybe<Scalars['String']>
  oauthToken?: Maybe<Scalars['String']>
  oauthTokenSecret?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  providerAccountId?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
  refreshTokenExpiresIn?: Maybe<Scalars['bigint']>
  scope?: Maybe<Scalars['String']>
  sessionState?: Maybe<Scalars['String']>
  tokenType?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "account" */
export type AccountMutationResponse = {
  __typename?: 'AccountMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Account>
}

/** on_conflict condition type for table "account" */
export type AccountOnConflict = {
  constraint: AccountConstraint
  update_columns?: Array<AccountUpdateColumn>
  where?: InputMaybe<AccountBoolExp>
}

/** Ordering options when selecting data from "account". */
export type AccountOrderBy = {
  accessToken?: InputMaybe<OrderBy>
  expiresAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idToken?: InputMaybe<OrderBy>
  oauthToken?: InputMaybe<OrderBy>
  oauthTokenSecret?: InputMaybe<OrderBy>
  provider?: InputMaybe<OrderBy>
  providerAccountId?: InputMaybe<OrderBy>
  refreshToken?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
  scope?: InputMaybe<OrderBy>
  sessionState?: InputMaybe<OrderBy>
  tokenType?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: account */
export type AccountPkColumnsInput = {
  id: Scalars['uuid']
}

/** select columns of table "account" */
export enum AccountSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'idToken',
  /** column name */
  OauthToken = 'oauthToken',
  /** column name */
  OauthTokenSecret = 'oauthTokenSecret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  RefreshTokenExpiresIn = 'refreshTokenExpiresIn',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'sessionState',
  /** column name */
  TokenType = 'tokenType',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "account" */
export type AccountSetInput = {
  accessToken?: InputMaybe<Scalars['String']>
  expiresAt?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['uuid']>
  idToken?: InputMaybe<Scalars['String']>
  oauthToken?: InputMaybe<Scalars['String']>
  oauthTokenSecret?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  providerAccountId?: InputMaybe<Scalars['String']>
  refreshToken?: InputMaybe<Scalars['String']>
  refreshTokenExpiresIn?: InputMaybe<Scalars['bigint']>
  scope?: InputMaybe<Scalars['String']>
  sessionState?: InputMaybe<Scalars['String']>
  tokenType?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type AccountStddevFields = {
  __typename?: 'AccountStddevFields'
  expiresAt?: Maybe<Scalars['Float']>
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type AccountStddev_PopFields = {
  __typename?: 'AccountStddev_popFields'
  expiresAt?: Maybe<Scalars['Float']>
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type AccountStddev_SampFields = {
  __typename?: 'AccountStddev_sampFields'
  expiresAt?: Maybe<Scalars['Float']>
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type AccountSumFields = {
  __typename?: 'AccountSumFields'
  expiresAt?: Maybe<Scalars['bigint']>
  refreshTokenExpiresIn?: Maybe<Scalars['bigint']>
}

/** update columns of table "account" */
export enum AccountUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'idToken',
  /** column name */
  OauthToken = 'oauthToken',
  /** column name */
  OauthTokenSecret = 'oauthTokenSecret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  RefreshTokenExpiresIn = 'refreshTokenExpiresIn',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'sessionState',
  /** column name */
  TokenType = 'tokenType',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

export type AccountUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AccountIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AccountSetInput>
  where: AccountBoolExp
}

/** aggregate var_pop on columns */
export type AccountVar_PopFields = {
  __typename?: 'AccountVar_popFields'
  expiresAt?: Maybe<Scalars['Float']>
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type AccountVar_SampFields = {
  __typename?: 'AccountVar_sampFields'
  expiresAt?: Maybe<Scalars['Float']>
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type AccountVarianceFields = {
  __typename?: 'AccountVarianceFields'
  expiresAt?: Maybe<Scalars['Float']>
  refreshTokenExpiresIn?: Maybe<Scalars['Float']>
}

/** columns and relationships of "annualInfo" */
export type AnnualInfo = {
  __typename?: 'AnnualInfo'
  createdAt: Scalars['timestamp']
  farmworkerActivityType: Scalars['jsonb']
  fisherActivityType: Scalars['jsonb']
  grossAnnualIncomeFarming: Scalars['numeric']
  grossAnnualIncomeNonfarming: Scalars['numeric']
  highestFormalEducation: Scalars['String']
  /** An object relationship */
  household: Household
  householdId: Scalars['uuid']
  id: Scalars['uuid']
  is4PsBeneficiary: Scalars['Boolean']
  mainLivelihood: Scalars['jsonb']
  personWithDisability: Scalars['Boolean']
  updatedAt: Scalars['timestamp']
  year: Scalars['Int']
}

/** columns and relationships of "annualInfo" */
export type AnnualInfoFarmworkerActivityTypeArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "annualInfo" */
export type AnnualInfoFisherActivityTypeArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "annualInfo" */
export type AnnualInfoMainLivelihoodArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "annualInfo" */
export type AnnualInfoAggregate = {
  __typename?: 'AnnualInfoAggregate'
  aggregate?: Maybe<AnnualInfoAggregateFields>
  nodes: Array<AnnualInfo>
}

/** aggregate fields of "annualInfo" */
export type AnnualInfoAggregateFields = {
  __typename?: 'AnnualInfoAggregateFields'
  avg?: Maybe<AnnualInfoAvgFields>
  count: Scalars['Int']
  max?: Maybe<AnnualInfoMaxFields>
  min?: Maybe<AnnualInfoMinFields>
  stddev?: Maybe<AnnualInfoStddevFields>
  stddevPop?: Maybe<AnnualInfoStddev_PopFields>
  stddevSamp?: Maybe<AnnualInfoStddev_SampFields>
  sum?: Maybe<AnnualInfoSumFields>
  varPop?: Maybe<AnnualInfoVar_PopFields>
  varSamp?: Maybe<AnnualInfoVar_SampFields>
  variance?: Maybe<AnnualInfoVarianceFields>
}

/** aggregate fields of "annualInfo" */
export type AnnualInfoAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AnnualInfoSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "annualInfo" */
export type AnnualInfoAggregateOrderBy = {
  avg?: InputMaybe<AnnualInfo_Avg_Order_By>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<AnnualInfo_Max_Order_By>
  min?: InputMaybe<AnnualInfo_Min_Order_By>
  stddev?: InputMaybe<AnnualInfo_Stddev_Order_By>
  stddev_pop?: InputMaybe<AnnualInfo_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<AnnualInfo_Stddev_Samp_Order_By>
  sum?: InputMaybe<AnnualInfo_Sum_Order_By>
  var_pop?: InputMaybe<AnnualInfo_Var_Pop_Order_By>
  var_samp?: InputMaybe<AnnualInfo_Var_Samp_Order_By>
  variance?: InputMaybe<AnnualInfo_Variance_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type AnnualInfoAppendInput = {
  farmworkerActivityType?: InputMaybe<Scalars['jsonb']>
  fisherActivityType?: InputMaybe<Scalars['jsonb']>
  mainLivelihood?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "annualInfo" */
export type AnnualInfoArrRelInsertInput = {
  data: Array<AnnualInfoInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<AnnualInfoOnConflict>
}

/** aggregate avg on columns */
export type AnnualInfoAvgFields = {
  __typename?: 'AnnualInfoAvgFields'
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "annualInfo". All fields are combined with a logical 'AND'. */
export type AnnualInfoBoolExp = {
  _and?: InputMaybe<Array<AnnualInfoBoolExp>>
  _not?: InputMaybe<AnnualInfoBoolExp>
  _or?: InputMaybe<Array<AnnualInfoBoolExp>>
  createdAt?: InputMaybe<TimestampComparisonExp>
  farmworkerActivityType?: InputMaybe<JsonbComparisonExp>
  fisherActivityType?: InputMaybe<JsonbComparisonExp>
  grossAnnualIncomeFarming?: InputMaybe<NumericComparisonExp>
  grossAnnualIncomeNonfarming?: InputMaybe<NumericComparisonExp>
  highestFormalEducation?: InputMaybe<StringComparisonExp>
  household?: InputMaybe<HouseholdBoolExp>
  householdId?: InputMaybe<UuidComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  is4PsBeneficiary?: InputMaybe<BooleanComparisonExp>
  mainLivelihood?: InputMaybe<JsonbComparisonExp>
  personWithDisability?: InputMaybe<BooleanComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
  year?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "annualInfo" */
export enum AnnualInfoConstraint {
  /** unique or primary key constraint on columns "id" */
  AnnualinfoPk = 'annualinfo_pk',
  /** unique or primary key constraint on columns "year", "householdId" */
  AnnualinfoUnique = 'annualinfo_unique',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AnnualInfoDeleteAtPathInput = {
  farmworkerActivityType?: InputMaybe<Array<Scalars['String']>>
  fisherActivityType?: InputMaybe<Array<Scalars['String']>>
  mainLivelihood?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AnnualInfoDeleteElemInput = {
  farmworkerActivityType?: InputMaybe<Scalars['Int']>
  fisherActivityType?: InputMaybe<Scalars['Int']>
  mainLivelihood?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AnnualInfoDeleteKeyInput = {
  farmworkerActivityType?: InputMaybe<Scalars['String']>
  fisherActivityType?: InputMaybe<Scalars['String']>
  mainLivelihood?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "annualInfo" */
export type AnnualInfoIncInput = {
  grossAnnualIncomeFarming?: InputMaybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: InputMaybe<Scalars['numeric']>
  year?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "annualInfo" */
export type AnnualInfoInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmworkerActivityType?: InputMaybe<Scalars['jsonb']>
  fisherActivityType?: InputMaybe<Scalars['jsonb']>
  grossAnnualIncomeFarming?: InputMaybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: InputMaybe<Scalars['numeric']>
  highestFormalEducation?: InputMaybe<Scalars['String']>
  household?: InputMaybe<HouseholdObjRelInsertInput>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  is4PsBeneficiary?: InputMaybe<Scalars['Boolean']>
  mainLivelihood?: InputMaybe<Scalars['jsonb']>
  personWithDisability?: InputMaybe<Scalars['Boolean']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
  year?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type AnnualInfoMaxFields = {
  __typename?: 'AnnualInfoMaxFields'
  createdAt?: Maybe<Scalars['timestamp']>
  grossAnnualIncomeFarming?: Maybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['numeric']>
  highestFormalEducation?: Maybe<Scalars['String']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamp']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type AnnualInfoMinFields = {
  __typename?: 'AnnualInfoMinFields'
  createdAt?: Maybe<Scalars['timestamp']>
  grossAnnualIncomeFarming?: Maybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['numeric']>
  highestFormalEducation?: Maybe<Scalars['String']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamp']>
  year?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "annualInfo" */
export type AnnualInfoMutationResponse = {
  __typename?: 'AnnualInfoMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<AnnualInfo>
}

/** on_conflict condition type for table "annualInfo" */
export type AnnualInfoOnConflict = {
  constraint: AnnualInfoConstraint
  update_columns?: Array<AnnualInfoUpdateColumn>
  where?: InputMaybe<AnnualInfoBoolExp>
}

/** Ordering options when selecting data from "annualInfo". */
export type AnnualInfoOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  farmworkerActivityType?: InputMaybe<OrderBy>
  fisherActivityType?: InputMaybe<OrderBy>
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  highestFormalEducation?: InputMaybe<OrderBy>
  household?: InputMaybe<HouseholdOrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  is4PsBeneficiary?: InputMaybe<OrderBy>
  mainLivelihood?: InputMaybe<OrderBy>
  personWithDisability?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** primary key columns input for table: annualInfo */
export type AnnualInfoPkColumnsInput = {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AnnualInfoPrependInput = {
  farmworkerActivityType?: InputMaybe<Scalars['jsonb']>
  fisherActivityType?: InputMaybe<Scalars['jsonb']>
  mainLivelihood?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "annualInfo" */
export enum AnnualInfoSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FarmworkerActivityType = 'farmworkerActivityType',
  /** column name */
  FisherActivityType = 'fisherActivityType',
  /** column name */
  GrossAnnualIncomeFarming = 'grossAnnualIncomeFarming',
  /** column name */
  GrossAnnualIncomeNonfarming = 'grossAnnualIncomeNonfarming',
  /** column name */
  HighestFormalEducation = 'highestFormalEducation',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  Id = 'id',
  /** column name */
  Is4PsBeneficiary = 'is4PsBeneficiary',
  /** column name */
  MainLivelihood = 'mainLivelihood',
  /** column name */
  PersonWithDisability = 'personWithDisability',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Year = 'year',
}

/** input type for updating data in table "annualInfo" */
export type AnnualInfoSetInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmworkerActivityType?: InputMaybe<Scalars['jsonb']>
  fisherActivityType?: InputMaybe<Scalars['jsonb']>
  grossAnnualIncomeFarming?: InputMaybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: InputMaybe<Scalars['numeric']>
  highestFormalEducation?: InputMaybe<Scalars['String']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  is4PsBeneficiary?: InputMaybe<Scalars['Boolean']>
  mainLivelihood?: InputMaybe<Scalars['jsonb']>
  personWithDisability?: InputMaybe<Scalars['Boolean']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
  year?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type AnnualInfoStddevFields = {
  __typename?: 'AnnualInfoStddevFields'
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type AnnualInfoStddev_PopFields = {
  __typename?: 'AnnualInfoStddev_popFields'
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type AnnualInfoStddev_SampFields = {
  __typename?: 'AnnualInfoStddev_sampFields'
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type AnnualInfoSumFields = {
  __typename?: 'AnnualInfoSumFields'
  grossAnnualIncomeFarming?: Maybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['numeric']>
  year?: Maybe<Scalars['Int']>
}

/** update columns of table "annualInfo" */
export enum AnnualInfoUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FarmworkerActivityType = 'farmworkerActivityType',
  /** column name */
  FisherActivityType = 'fisherActivityType',
  /** column name */
  GrossAnnualIncomeFarming = 'grossAnnualIncomeFarming',
  /** column name */
  GrossAnnualIncomeNonfarming = 'grossAnnualIncomeNonfarming',
  /** column name */
  HighestFormalEducation = 'highestFormalEducation',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  Id = 'id',
  /** column name */
  Is4PsBeneficiary = 'is4PsBeneficiary',
  /** column name */
  MainLivelihood = 'mainLivelihood',
  /** column name */
  PersonWithDisability = 'personWithDisability',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Year = 'year',
}

export type AnnualInfoUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AnnualInfoAppendInput>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<AnnualInfoDeleteAtPathInput>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<AnnualInfoDeleteElemInput>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<AnnualInfoDeleteKeyInput>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AnnualInfoIncInput>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AnnualInfoPrependInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AnnualInfoSetInput>
  where: AnnualInfoBoolExp
}

/** aggregate var_pop on columns */
export type AnnualInfoVar_PopFields = {
  __typename?: 'AnnualInfoVar_popFields'
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type AnnualInfoVar_SampFields = {
  __typename?: 'AnnualInfoVar_sampFields'
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type AnnualInfoVarianceFields = {
  __typename?: 'AnnualInfoVarianceFields'
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** columns and relationships of "association" */
export type Association = {
  __typename?: 'Association'
  active: Scalars['Boolean']
  createdAt: Scalars['timestamp']
  description: Scalars['String']
  id: Scalars['uuid']
  name: Scalars['String']
  shortName: Scalars['String']
  updatedAt: Scalars['timestamp']
}

/** aggregated selection of "association" */
export type AssociationAggregate = {
  __typename?: 'AssociationAggregate'
  aggregate?: Maybe<AssociationAggregateFields>
  nodes: Array<Association>
}

/** aggregate fields of "association" */
export type AssociationAggregateFields = {
  __typename?: 'AssociationAggregateFields'
  count: Scalars['Int']
  max?: Maybe<AssociationMaxFields>
  min?: Maybe<AssociationMinFields>
}

/** aggregate fields of "association" */
export type AssociationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AssociationSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** columns and relationships of "associationBeneficiaries" */
export type AssociationBeneficiaries = {
  __typename?: 'AssociationBeneficiaries'
  active: Scalars['Boolean']
  associationId: Scalars['uuid']
  createdAt: Scalars['timestamp']
  id: Scalars['uuid']
  name: Scalars['String']
  programId?: Maybe<Scalars['uuid']>
}

/** aggregated selection of "associationBeneficiaries" */
export type AssociationBeneficiariesAggregate = {
  __typename?: 'AssociationBeneficiariesAggregate'
  aggregate?: Maybe<AssociationBeneficiariesAggregateFields>
  nodes: Array<AssociationBeneficiaries>
}

/** aggregate fields of "associationBeneficiaries" */
export type AssociationBeneficiariesAggregateFields = {
  __typename?: 'AssociationBeneficiariesAggregateFields'
  count: Scalars['Int']
  max?: Maybe<AssociationBeneficiariesMaxFields>
  min?: Maybe<AssociationBeneficiariesMinFields>
}

/** aggregate fields of "associationBeneficiaries" */
export type AssociationBeneficiariesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AssociationBeneficiariesSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "associationBeneficiaries". All fields are combined with a logical 'AND'. */
export type AssociationBeneficiariesBoolExp = {
  _and?: InputMaybe<Array<AssociationBeneficiariesBoolExp>>
  _not?: InputMaybe<AssociationBeneficiariesBoolExp>
  _or?: InputMaybe<Array<AssociationBeneficiariesBoolExp>>
  active?: InputMaybe<BooleanComparisonExp>
  associationId?: InputMaybe<UuidComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  programId?: InputMaybe<UuidComparisonExp>
}

/** aggregate max on columns */
export type AssociationBeneficiariesMaxFields = {
  __typename?: 'AssociationBeneficiariesMaxFields'
  associationId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  programId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type AssociationBeneficiariesMinFields = {
  __typename?: 'AssociationBeneficiariesMinFields'
  associationId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  programId?: Maybe<Scalars['uuid']>
}

/** Ordering options when selecting data from "associationBeneficiaries". */
export type AssociationBeneficiariesOrderBy = {
  active?: InputMaybe<OrderBy>
  associationId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  programId?: InputMaybe<OrderBy>
}

/** select columns of table "associationBeneficiaries" */
export enum AssociationBeneficiariesSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  AssociationId = 'associationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProgramId = 'programId',
}

/** Boolean expression to filter rows from the table "association". All fields are combined with a logical 'AND'. */
export type AssociationBoolExp = {
  _and?: InputMaybe<Array<AssociationBoolExp>>
  _not?: InputMaybe<AssociationBoolExp>
  _or?: InputMaybe<Array<AssociationBoolExp>>
  active?: InputMaybe<BooleanComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  description?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  shortName?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
}

/** unique or primary key constraints on table "association" */
export enum AssociationConstraint {
  /** unique or primary key constraint on columns "id" */
  AssociationPk = 'association_pk',
}

/** input type for inserting data into table "association" */
export type AssociationInsertInput = {
  active?: InputMaybe<Scalars['Boolean']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type AssociationMaxFields = {
  __typename?: 'AssociationMaxFields'
  createdAt?: Maybe<Scalars['timestamp']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  shortName?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type AssociationMinFields = {
  __typename?: 'AssociationMinFields'
  createdAt?: Maybe<Scalars['timestamp']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  shortName?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "association" */
export type AssociationMutationResponse = {
  __typename?: 'AssociationMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Association>
}

/** on_conflict condition type for table "association" */
export type AssociationOnConflict = {
  constraint: AssociationConstraint
  update_columns?: Array<AssociationUpdateColumn>
  where?: InputMaybe<AssociationBoolExp>
}

/** Ordering options when selecting data from "association". */
export type AssociationOrderBy = {
  active?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  shortName?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: association */
export type AssociationPkColumnsInput = {
  id: Scalars['uuid']
}

/** columns and relationships of "associationPrograms" */
export type AssociationPrograms = {
  __typename?: 'AssociationPrograms'
  active: Scalars['Boolean']
  createdAt: Scalars['timestamp']
  id: Scalars['uuid']
  name: Scalars['String']
  programIds: Scalars['jsonb']
}

/** columns and relationships of "associationPrograms" */
export type AssociationProgramsProgramIdsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "associationPrograms" */
export type AssociationProgramsAggregate = {
  __typename?: 'AssociationProgramsAggregate'
  aggregate?: Maybe<AssociationProgramsAggregateFields>
  nodes: Array<AssociationPrograms>
}

/** aggregate fields of "associationPrograms" */
export type AssociationProgramsAggregateFields = {
  __typename?: 'AssociationProgramsAggregateFields'
  count: Scalars['Int']
  max?: Maybe<AssociationProgramsMaxFields>
  min?: Maybe<AssociationProgramsMinFields>
}

/** aggregate fields of "associationPrograms" */
export type AssociationProgramsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AssociationProgramsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "associationPrograms". All fields are combined with a logical 'AND'. */
export type AssociationProgramsBoolExp = {
  _and?: InputMaybe<Array<AssociationProgramsBoolExp>>
  _not?: InputMaybe<AssociationProgramsBoolExp>
  _or?: InputMaybe<Array<AssociationProgramsBoolExp>>
  active?: InputMaybe<BooleanComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  programIds?: InputMaybe<JsonbComparisonExp>
}

/** aggregate max on columns */
export type AssociationProgramsMaxFields = {
  __typename?: 'AssociationProgramsMaxFields'
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type AssociationProgramsMinFields = {
  __typename?: 'AssociationProgramsMinFields'
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "associationPrograms". */
export type AssociationProgramsOrderBy = {
  active?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  programIds?: InputMaybe<OrderBy>
}

/** select columns of table "associationPrograms" */
export enum AssociationProgramsSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProgramIds = 'programIds',
}

/** select columns of table "association" */
export enum AssociationSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "association" */
export type AssociationSetInput = {
  active?: InputMaybe<Scalars['Boolean']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** columns and relationships of "associationToProgram" */
export type AssociationToProgram = {
  __typename?: 'AssociationToProgram'
  associationId: Scalars['uuid']
  createdAt: Scalars['timestamp']
  id: Scalars['uuid']
  programId: Scalars['uuid']
  remarks: Scalars['String']
  updatedAt: Scalars['timestamp']
}

/** aggregated selection of "associationToProgram" */
export type AssociationToProgramAggregate = {
  __typename?: 'AssociationToProgramAggregate'
  aggregate?: Maybe<AssociationToProgramAggregateFields>
  nodes: Array<AssociationToProgram>
}

/** aggregate fields of "associationToProgram" */
export type AssociationToProgramAggregateFields = {
  __typename?: 'AssociationToProgramAggregateFields'
  count: Scalars['Int']
  max?: Maybe<AssociationToProgramMaxFields>
  min?: Maybe<AssociationToProgramMinFields>
}

/** aggregate fields of "associationToProgram" */
export type AssociationToProgramAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AssociationToProgramSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "associationToProgram". All fields are combined with a logical 'AND'. */
export type AssociationToProgramBoolExp = {
  _and?: InputMaybe<Array<AssociationToProgramBoolExp>>
  _not?: InputMaybe<AssociationToProgramBoolExp>
  _or?: InputMaybe<Array<AssociationToProgramBoolExp>>
  associationId?: InputMaybe<UuidComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  programId?: InputMaybe<UuidComparisonExp>
  remarks?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
}

/** input type for inserting data into table "associationToProgram" */
export type AssociationToProgramInsertInput = {
  associationId?: InputMaybe<Scalars['uuid']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  programId?: InputMaybe<Scalars['uuid']>
  remarks?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type AssociationToProgramMaxFields = {
  __typename?: 'AssociationToProgramMaxFields'
  associationId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  programId?: Maybe<Scalars['uuid']>
  remarks?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type AssociationToProgramMinFields = {
  __typename?: 'AssociationToProgramMinFields'
  associationId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  programId?: Maybe<Scalars['uuid']>
  remarks?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "associationToProgram" */
export type AssociationToProgramMutationResponse = {
  __typename?: 'AssociationToProgramMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<AssociationToProgram>
}

/** Ordering options when selecting data from "associationToProgram". */
export type AssociationToProgramOrderBy = {
  associationId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  programId?: InputMaybe<OrderBy>
  remarks?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** select columns of table "associationToProgram" */
export enum AssociationToProgramSelectColumn {
  /** column name */
  AssociationId = 'associationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "associationToProgram" */
export type AssociationToProgramSetInput = {
  associationId?: InputMaybe<Scalars['uuid']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  programId?: InputMaybe<Scalars['uuid']>
  remarks?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

export type AssociationToProgramUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AssociationToProgramSetInput>
  where: AssociationToProgramBoolExp
}

/** update columns of table "association" */
export enum AssociationUpdateColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type AssociationUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AssociationSetInput>
  where: AssociationBoolExp
}

/** columns and relationships of "averageAnnualIncome" */
export type AverageAnnualIncome = {
  __typename?: 'AverageAnnualIncome'
  annualIncomeFarming?: Maybe<Scalars['numeric']>
  annualIncomeNonfarming?: Maybe<Scalars['numeric']>
  averageAnnualIncomeFarming: Scalars['numeric']
  averageAnnualIncomeNonfarming: Scalars['numeric']
  averageinfo: Scalars['numeric']
  year: Scalars['Int']
}

/** aggregated selection of "averageAnnualIncome" */
export type AverageAnnualIncomeAggregate = {
  __typename?: 'AverageAnnualIncomeAggregate'
  aggregate?: Maybe<AverageAnnualIncomeAggregateFields>
  nodes: Array<AverageAnnualIncome>
}

/** aggregate fields of "averageAnnualIncome" */
export type AverageAnnualIncomeAggregateFields = {
  __typename?: 'AverageAnnualIncomeAggregateFields'
  avg?: Maybe<AverageAnnualIncomeAvgFields>
  count: Scalars['Int']
  max?: Maybe<AverageAnnualIncomeMaxFields>
  min?: Maybe<AverageAnnualIncomeMinFields>
  stddev?: Maybe<AverageAnnualIncomeStddevFields>
  stddevPop?: Maybe<AverageAnnualIncomeStddev_PopFields>
  stddevSamp?: Maybe<AverageAnnualIncomeStddev_SampFields>
  sum?: Maybe<AverageAnnualIncomeSumFields>
  varPop?: Maybe<AverageAnnualIncomeVar_PopFields>
  varSamp?: Maybe<AverageAnnualIncomeVar_SampFields>
  variance?: Maybe<AverageAnnualIncomeVarianceFields>
}

/** aggregate fields of "averageAnnualIncome" */
export type AverageAnnualIncomeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AverageAnnualIncomeSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type AverageAnnualIncomeAvgFields = {
  __typename?: 'AverageAnnualIncomeAvgFields'
  annualIncomeFarming?: Maybe<Scalars['Float']>
  annualIncomeNonfarming?: Maybe<Scalars['Float']>
  averageinfo?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "averageAnnualIncome". All fields are combined with a logical 'AND'. */
export type AverageAnnualIncomeBoolExp = {
  _and?: InputMaybe<Array<AverageAnnualIncomeBoolExp>>
  _not?: InputMaybe<AverageAnnualIncomeBoolExp>
  _or?: InputMaybe<Array<AverageAnnualIncomeBoolExp>>
  annualIncomeFarming?: InputMaybe<NumericComparisonExp>
  annualIncomeNonfarming?: InputMaybe<NumericComparisonExp>
  averageinfo?: InputMaybe<NumericComparisonExp>
  year?: InputMaybe<IntComparisonExp>
}

/** aggregate max on columns */
export type AverageAnnualIncomeMaxFields = {
  __typename?: 'AverageAnnualIncomeMaxFields'
  annualIncomeFarming?: Maybe<Scalars['numeric']>
  annualIncomeNonfarming?: Maybe<Scalars['numeric']>
  averageinfo?: Maybe<Scalars['numeric']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type AverageAnnualIncomeMinFields = {
  __typename?: 'AverageAnnualIncomeMinFields'
  annualIncomeFarming?: Maybe<Scalars['numeric']>
  annualIncomeNonfarming?: Maybe<Scalars['numeric']>
  averageinfo?: Maybe<Scalars['numeric']>
  year?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "averageAnnualIncome". */
export type AverageAnnualIncomeOrderBy = {
  annualIncomeFarming?: InputMaybe<OrderBy>
  annualIncomeNonfarming?: InputMaybe<OrderBy>
  averageinfo?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** select columns of table "averageAnnualIncome" */
export enum AverageAnnualIncomeSelectColumn {
  /** column name */
  AnnualIncomeFarming = 'annualIncomeFarming',
  /** column name */
  AnnualIncomeNonfarming = 'annualIncomeNonfarming',
  /** column name */
  Averageinfo = 'averageinfo',
  /** column name */
  Year = 'year',
}

/** aggregate stddev on columns */
export type AverageAnnualIncomeStddevFields = {
  __typename?: 'AverageAnnualIncomeStddevFields'
  annualIncomeFarming?: Maybe<Scalars['Float']>
  annualIncomeNonfarming?: Maybe<Scalars['Float']>
  averageinfo?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type AverageAnnualIncomeStddev_PopFields = {
  __typename?: 'AverageAnnualIncomeStddev_popFields'
  annualIncomeFarming?: Maybe<Scalars['Float']>
  annualIncomeNonfarming?: Maybe<Scalars['Float']>
  averageinfo?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type AverageAnnualIncomeStddev_SampFields = {
  __typename?: 'AverageAnnualIncomeStddev_sampFields'
  annualIncomeFarming?: Maybe<Scalars['Float']>
  annualIncomeNonfarming?: Maybe<Scalars['Float']>
  averageinfo?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type AverageAnnualIncomeSumFields = {
  __typename?: 'AverageAnnualIncomeSumFields'
  annualIncomeFarming?: Maybe<Scalars['numeric']>
  annualIncomeNonfarming?: Maybe<Scalars['numeric']>
  averageinfo?: Maybe<Scalars['numeric']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type AverageAnnualIncomeVar_PopFields = {
  __typename?: 'AverageAnnualIncomeVar_popFields'
  annualIncomeFarming?: Maybe<Scalars['Float']>
  annualIncomeNonfarming?: Maybe<Scalars['Float']>
  averageinfo?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type AverageAnnualIncomeVar_SampFields = {
  __typename?: 'AverageAnnualIncomeVar_sampFields'
  annualIncomeFarming?: Maybe<Scalars['Float']>
  annualIncomeNonfarming?: Maybe<Scalars['Float']>
  averageinfo?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type AverageAnnualIncomeVarianceFields = {
  __typename?: 'AverageAnnualIncomeVarianceFields'
  annualIncomeFarming?: Maybe<Scalars['Float']>
  annualIncomeNonfarming?: Maybe<Scalars['Float']>
  averageinfo?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']>
  _gt?: InputMaybe<Scalars['bigint']>
  _gte?: InputMaybe<Scalars['bigint']>
  _in?: InputMaybe<Array<Scalars['bigint']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['bigint']>
  _lte?: InputMaybe<Scalars['bigint']>
  _neq?: InputMaybe<Scalars['bigint']>
  _nin?: InputMaybe<Array<Scalars['bigint']>>
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

/** columns and relationships of "commodity" */
export type Commodity = {
  __typename?: 'Commodity'
  /** An array relationship */
  commodityProduces: Array<CommodityProduce>
  /** An aggregate relationship */
  commodityProducesAggregate: CommodityProduceAggregate
  commodityType: Scalars['String']
  conversionFactor?: Maybe<Scalars['numeric']>
  createdAt: Scalars['timestamp']
  id: Scalars['uuid']
  name: Scalars['String']
  unit?: Maybe<Scalars['String']>
  updatedAt: Scalars['timestamp']
}

/** columns and relationships of "commodity" */
export type CommodityCommodityProducesArgs = {
  distinctOn?: InputMaybe<Array<CommodityProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityProduceOrderBy>>
  where?: InputMaybe<CommodityProduceBoolExp>
}

/** columns and relationships of "commodity" */
export type CommodityCommodityProducesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommodityProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityProduceOrderBy>>
  where?: InputMaybe<CommodityProduceBoolExp>
}

/** aggregated selection of "commodity" */
export type CommodityAggregate = {
  __typename?: 'CommodityAggregate'
  aggregate?: Maybe<CommodityAggregateFields>
  nodes: Array<Commodity>
}

/** aggregate fields of "commodity" */
export type CommodityAggregateFields = {
  __typename?: 'CommodityAggregateFields'
  avg?: Maybe<CommodityAvgFields>
  count: Scalars['Int']
  max?: Maybe<CommodityMaxFields>
  min?: Maybe<CommodityMinFields>
  stddev?: Maybe<CommodityStddevFields>
  stddevPop?: Maybe<CommodityStddev_PopFields>
  stddevSamp?: Maybe<CommodityStddev_SampFields>
  sum?: Maybe<CommoditySumFields>
  varPop?: Maybe<CommodityVar_PopFields>
  varSamp?: Maybe<CommodityVar_SampFields>
  variance?: Maybe<CommodityVarianceFields>
}

/** aggregate fields of "commodity" */
export type CommodityAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CommoditySelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type CommodityAvgFields = {
  __typename?: 'CommodityAvgFields'
  conversionFactor?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "commodity". All fields are combined with a logical 'AND'. */
export type CommodityBoolExp = {
  _and?: InputMaybe<Array<CommodityBoolExp>>
  _not?: InputMaybe<CommodityBoolExp>
  _or?: InputMaybe<Array<CommodityBoolExp>>
  commodityProduces?: InputMaybe<CommodityProduceBoolExp>
  commodityType?: InputMaybe<StringComparisonExp>
  conversionFactor?: InputMaybe<NumericComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  unit?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
}

/** unique or primary key constraints on table "commodity" */
export enum CommodityConstraint {
  /** unique or primary key constraint on columns "id" */
  CropCommodityPk = 'crop_commodity_pk',
}

/** input type for incrementing numeric columns in table "commodity" */
export type CommodityIncInput = {
  conversionFactor?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "commodity" */
export type CommodityInsertInput = {
  commodityProduces?: InputMaybe<CommodityProduceArrRelInsertInput>
  commodityType?: InputMaybe<Scalars['String']>
  conversionFactor?: InputMaybe<Scalars['numeric']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  unit?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type CommodityMaxFields = {
  __typename?: 'CommodityMaxFields'
  commodityType?: Maybe<Scalars['String']>
  conversionFactor?: Maybe<Scalars['numeric']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  unit?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type CommodityMinFields = {
  __typename?: 'CommodityMinFields'
  commodityType?: Maybe<Scalars['String']>
  conversionFactor?: Maybe<Scalars['numeric']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  unit?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "commodity" */
export type CommodityMutationResponse = {
  __typename?: 'CommodityMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Commodity>
}

/** on_conflict condition type for table "commodity" */
export type CommodityOnConflict = {
  constraint: CommodityConstraint
  update_columns?: Array<CommodityUpdateColumn>
  where?: InputMaybe<CommodityBoolExp>
}

/** Ordering options when selecting data from "commodity". */
export type CommodityOrderBy = {
  commodityProducesAggregate?: InputMaybe<CommodityProduceAggregateOrderBy>
  commodityType?: InputMaybe<OrderBy>
  conversionFactor?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  unit?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: commodity */
export type CommodityPkColumnsInput = {
  id: Scalars['uuid']
}

/** columns and relationships of "commodityProduce" */
export type CommodityProduce = {
  __typename?: 'CommodityProduce'
  areaUsed: Scalars['float8']
  commodityId: Scalars['uuid']
  createdAt: Scalars['timestamp']
  /** An object relationship */
  farm: Farm
  farmId: Scalars['uuid']
  farmSize?: Maybe<Scalars['float8']>
  householdId: Scalars['uuid']
  id: Scalars['uuid']
  organicPractitioner: Scalars['Boolean']
  produce?: Maybe<Scalars['float8']>
  produceInUnit?: Maybe<Scalars['float8']>
  unit: Scalars['String']
  updatedAt: Scalars['timestamp']
  year: Scalars['Int']
}

/** aggregated selection of "commodityProduce" */
export type CommodityProduceAggregate = {
  __typename?: 'CommodityProduceAggregate'
  aggregate?: Maybe<CommodityProduceAggregateFields>
  nodes: Array<CommodityProduce>
}

/** aggregate fields of "commodityProduce" */
export type CommodityProduceAggregateFields = {
  __typename?: 'CommodityProduceAggregateFields'
  avg?: Maybe<CommodityProduceAvgFields>
  count: Scalars['Int']
  max?: Maybe<CommodityProduceMaxFields>
  min?: Maybe<CommodityProduceMinFields>
  stddev?: Maybe<CommodityProduceStddevFields>
  stddevPop?: Maybe<CommodityProduceStddev_PopFields>
  stddevSamp?: Maybe<CommodityProduceStddev_SampFields>
  sum?: Maybe<CommodityProduceSumFields>
  varPop?: Maybe<CommodityProduceVar_PopFields>
  varSamp?: Maybe<CommodityProduceVar_SampFields>
  variance?: Maybe<CommodityProduceVarianceFields>
}

/** aggregate fields of "commodityProduce" */
export type CommodityProduceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CommodityProduceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "commodityProduce" */
export type CommodityProduceAggregateOrderBy = {
  avg?: InputMaybe<CommodityProduce_Avg_Order_By>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<CommodityProduce_Max_Order_By>
  min?: InputMaybe<CommodityProduce_Min_Order_By>
  stddev?: InputMaybe<CommodityProduce_Stddev_Order_By>
  stddev_pop?: InputMaybe<CommodityProduce_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<CommodityProduce_Stddev_Samp_Order_By>
  sum?: InputMaybe<CommodityProduce_Sum_Order_By>
  var_pop?: InputMaybe<CommodityProduce_Var_Pop_Order_By>
  var_samp?: InputMaybe<CommodityProduce_Var_Samp_Order_By>
  variance?: InputMaybe<CommodityProduce_Variance_Order_By>
}

/** input type for inserting array relation for remote table "commodityProduce" */
export type CommodityProduceArrRelInsertInput = {
  data: Array<CommodityProduceInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<CommodityProduceOnConflict>
}

/** aggregate avg on columns */
export type CommodityProduceAvgFields = {
  __typename?: 'CommodityProduceAvgFields'
  areaUsed?: Maybe<Scalars['Float']>
  farmSize?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "commodityProduce". All fields are combined with a logical 'AND'. */
export type CommodityProduceBoolExp = {
  _and?: InputMaybe<Array<CommodityProduceBoolExp>>
  _not?: InputMaybe<CommodityProduceBoolExp>
  _or?: InputMaybe<Array<CommodityProduceBoolExp>>
  areaUsed?: InputMaybe<Float8ComparisonExp>
  commodityId?: InputMaybe<UuidComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  farm?: InputMaybe<FarmBoolExp>
  farmId?: InputMaybe<UuidComparisonExp>
  farmSize?: InputMaybe<Float8ComparisonExp>
  householdId?: InputMaybe<UuidComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  organicPractitioner?: InputMaybe<BooleanComparisonExp>
  produce?: InputMaybe<Float8ComparisonExp>
  produceInUnit?: InputMaybe<Float8ComparisonExp>
  unit?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
  year?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "commodityProduce" */
export enum CommodityProduceConstraint {
  /** unique or primary key constraint on columns "id" */
  CommodityproducePk = 'commodityproduce_pk',
  /** unique or primary key constraint on columns "year", "commodityId", "farmId" */
  CommodityproduceUnique = 'commodityproduce_unique',
}

/** input type for incrementing numeric columns in table "commodityProduce" */
export type CommodityProduceIncInput = {
  areaUsed?: InputMaybe<Scalars['float8']>
  farmSize?: InputMaybe<Scalars['float8']>
  produce?: InputMaybe<Scalars['float8']>
  produceInUnit?: InputMaybe<Scalars['float8']>
  year?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "commodityProduce" */
export type CommodityProduceInsertInput = {
  areaUsed?: InputMaybe<Scalars['float8']>
  commodityId?: InputMaybe<Scalars['uuid']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  farm?: InputMaybe<FarmObjRelInsertInput>
  farmId?: InputMaybe<Scalars['uuid']>
  farmSize?: InputMaybe<Scalars['float8']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  organicPractitioner?: InputMaybe<Scalars['Boolean']>
  produce?: InputMaybe<Scalars['float8']>
  produceInUnit?: InputMaybe<Scalars['float8']>
  unit?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
  year?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type CommodityProduceMaxFields = {
  __typename?: 'CommodityProduceMaxFields'
  areaUsed?: Maybe<Scalars['float8']>
  commodityId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmId?: Maybe<Scalars['uuid']>
  farmSize?: Maybe<Scalars['float8']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  produce?: Maybe<Scalars['float8']>
  produceInUnit?: Maybe<Scalars['float8']>
  unit?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type CommodityProduceMinFields = {
  __typename?: 'CommodityProduceMinFields'
  areaUsed?: Maybe<Scalars['float8']>
  commodityId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmId?: Maybe<Scalars['uuid']>
  farmSize?: Maybe<Scalars['float8']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  produce?: Maybe<Scalars['float8']>
  produceInUnit?: Maybe<Scalars['float8']>
  unit?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
  year?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "commodityProduce" */
export type CommodityProduceMutationResponse = {
  __typename?: 'CommodityProduceMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<CommodityProduce>
}

/** on_conflict condition type for table "commodityProduce" */
export type CommodityProduceOnConflict = {
  constraint: CommodityProduceConstraint
  update_columns?: Array<CommodityProduceUpdateColumn>
  where?: InputMaybe<CommodityProduceBoolExp>
}

/** Ordering options when selecting data from "commodityProduce". */
export type CommodityProduceOrderBy = {
  areaUsed?: InputMaybe<OrderBy>
  commodityId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  farm?: InputMaybe<FarmOrderBy>
  farmId?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  organicPractitioner?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  unit?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** primary key columns input for table: commodityProduce */
export type CommodityProducePkColumnsInput = {
  id: Scalars['uuid']
}

/** select columns of table "commodityProduce" */
export enum CommodityProduceSelectColumn {
  /** column name */
  AreaUsed = 'areaUsed',
  /** column name */
  CommodityId = 'commodityId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FarmId = 'farmId',
  /** column name */
  FarmSize = 'farmSize',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  Id = 'id',
  /** column name */
  OrganicPractitioner = 'organicPractitioner',
  /** column name */
  Produce = 'produce',
  /** column name */
  ProduceInUnit = 'produceInUnit',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Year = 'year',
}

/** input type for updating data in table "commodityProduce" */
export type CommodityProduceSetInput = {
  areaUsed?: InputMaybe<Scalars['float8']>
  commodityId?: InputMaybe<Scalars['uuid']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmId?: InputMaybe<Scalars['uuid']>
  farmSize?: InputMaybe<Scalars['float8']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  organicPractitioner?: InputMaybe<Scalars['Boolean']>
  produce?: InputMaybe<Scalars['float8']>
  produceInUnit?: InputMaybe<Scalars['float8']>
  unit?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
  year?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type CommodityProduceStddevFields = {
  __typename?: 'CommodityProduceStddevFields'
  areaUsed?: Maybe<Scalars['Float']>
  farmSize?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type CommodityProduceStddev_PopFields = {
  __typename?: 'CommodityProduceStddev_popFields'
  areaUsed?: Maybe<Scalars['Float']>
  farmSize?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type CommodityProduceStddev_SampFields = {
  __typename?: 'CommodityProduceStddev_sampFields'
  areaUsed?: Maybe<Scalars['Float']>
  farmSize?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type CommodityProduceSumFields = {
  __typename?: 'CommodityProduceSumFields'
  areaUsed?: Maybe<Scalars['float8']>
  farmSize?: Maybe<Scalars['float8']>
  produce?: Maybe<Scalars['float8']>
  produceInUnit?: Maybe<Scalars['float8']>
  year?: Maybe<Scalars['Int']>
}

/** update columns of table "commodityProduce" */
export enum CommodityProduceUpdateColumn {
  /** column name */
  AreaUsed = 'areaUsed',
  /** column name */
  CommodityId = 'commodityId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FarmId = 'farmId',
  /** column name */
  FarmSize = 'farmSize',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  Id = 'id',
  /** column name */
  OrganicPractitioner = 'organicPractitioner',
  /** column name */
  Produce = 'produce',
  /** column name */
  ProduceInUnit = 'produceInUnit',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Year = 'year',
}

export type CommodityProduceUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CommodityProduceIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CommodityProduceSetInput>
  where: CommodityProduceBoolExp
}

/** aggregate var_pop on columns */
export type CommodityProduceVar_PopFields = {
  __typename?: 'CommodityProduceVar_popFields'
  areaUsed?: Maybe<Scalars['Float']>
  farmSize?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type CommodityProduceVar_SampFields = {
  __typename?: 'CommodityProduceVar_sampFields'
  areaUsed?: Maybe<Scalars['Float']>
  farmSize?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type CommodityProduceVarianceFields = {
  __typename?: 'CommodityProduceVarianceFields'
  areaUsed?: Maybe<Scalars['Float']>
  farmSize?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** select columns of table "commodity" */
export enum CommoditySelectColumn {
  /** column name */
  CommodityType = 'commodityType',
  /** column name */
  ConversionFactor = 'conversionFactor',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "commodity" */
export type CommoditySetInput = {
  commodityType?: InputMaybe<Scalars['String']>
  conversionFactor?: InputMaybe<Scalars['numeric']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  unit?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type CommodityStddevFields = {
  __typename?: 'CommodityStddevFields'
  conversionFactor?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type CommodityStddev_PopFields = {
  __typename?: 'CommodityStddev_popFields'
  conversionFactor?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type CommodityStddev_SampFields = {
  __typename?: 'CommodityStddev_sampFields'
  conversionFactor?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type CommoditySumFields = {
  __typename?: 'CommoditySumFields'
  conversionFactor?: Maybe<Scalars['numeric']>
}

/** update columns of table "commodity" */
export enum CommodityUpdateColumn {
  /** column name */
  CommodityType = 'commodityType',
  /** column name */
  ConversionFactor = 'conversionFactor',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type CommodityUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CommodityIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CommoditySetInput>
  where: CommodityBoolExp
}

/** aggregate var_pop on columns */
export type CommodityVar_PopFields = {
  __typename?: 'CommodityVar_popFields'
  conversionFactor?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type CommodityVar_SampFields = {
  __typename?: 'CommodityVar_sampFields'
  conversionFactor?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type CommodityVarianceFields = {
  __typename?: 'CommodityVarianceFields'
  conversionFactor?: Maybe<Scalars['Float']>
}

/** columns and relationships of "cropProduce" */
export type CropProduce = {
  __typename?: 'CropProduce'
  areaUsed?: Maybe<Scalars['numeric']>
  commodityId?: Maybe<Scalars['uuid']>
  name: Scalars['String']
  produce?: Maybe<Scalars['numeric']>
  year: Scalars['Int']
  yield?: Maybe<Scalars['numeric']>
}

/** aggregated selection of "cropProduce" */
export type CropProduceAggregate = {
  __typename?: 'CropProduceAggregate'
  aggregate?: Maybe<CropProduceAggregateFields>
  nodes: Array<CropProduce>
}

/** aggregate fields of "cropProduce" */
export type CropProduceAggregateFields = {
  __typename?: 'CropProduceAggregateFields'
  avg?: Maybe<CropProduceAvgFields>
  count: Scalars['Int']
  max?: Maybe<CropProduceMaxFields>
  min?: Maybe<CropProduceMinFields>
  stddev?: Maybe<CropProduceStddevFields>
  stddevPop?: Maybe<CropProduceStddev_PopFields>
  stddevSamp?: Maybe<CropProduceStddev_SampFields>
  sum?: Maybe<CropProduceSumFields>
  varPop?: Maybe<CropProduceVar_PopFields>
  varSamp?: Maybe<CropProduceVar_SampFields>
  variance?: Maybe<CropProduceVarianceFields>
}

/** aggregate fields of "cropProduce" */
export type CropProduceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CropProduceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type CropProduceAvgFields = {
  __typename?: 'CropProduceAvgFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
  yield?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "cropProduce". All fields are combined with a logical 'AND'. */
export type CropProduceBoolExp = {
  _and?: InputMaybe<Array<CropProduceBoolExp>>
  _not?: InputMaybe<CropProduceBoolExp>
  _or?: InputMaybe<Array<CropProduceBoolExp>>
  areaUsed?: InputMaybe<NumericComparisonExp>
  commodityId?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  produce?: InputMaybe<NumericComparisonExp>
  year?: InputMaybe<IntComparisonExp>
  yield?: InputMaybe<NumericComparisonExp>
}

/** aggregate max on columns */
export type CropProduceMaxFields = {
  __typename?: 'CropProduceMaxFields'
  areaUsed?: Maybe<Scalars['numeric']>
  commodityId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  produce?: Maybe<Scalars['numeric']>
  year?: Maybe<Scalars['Int']>
  yield?: Maybe<Scalars['numeric']>
}

/** aggregate min on columns */
export type CropProduceMinFields = {
  __typename?: 'CropProduceMinFields'
  areaUsed?: Maybe<Scalars['numeric']>
  commodityId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  produce?: Maybe<Scalars['numeric']>
  year?: Maybe<Scalars['Int']>
  yield?: Maybe<Scalars['numeric']>
}

/** Ordering options when selecting data from "cropProduce". */
export type CropProduceOrderBy = {
  areaUsed?: InputMaybe<OrderBy>
  commodityId?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
  yield?: InputMaybe<OrderBy>
}

/** select columns of table "cropProduce" */
export enum CropProduceSelectColumn {
  /** column name */
  AreaUsed = 'areaUsed',
  /** column name */
  CommodityId = 'commodityId',
  /** column name */
  Name = 'name',
  /** column name */
  Produce = 'produce',
  /** column name */
  Year = 'year',
  /** column name */
  Yield = 'yield',
}

/** aggregate stddev on columns */
export type CropProduceStddevFields = {
  __typename?: 'CropProduceStddevFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
  yield?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type CropProduceStddev_PopFields = {
  __typename?: 'CropProduceStddev_popFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
  yield?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type CropProduceStddev_SampFields = {
  __typename?: 'CropProduceStddev_sampFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
  yield?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type CropProduceSumFields = {
  __typename?: 'CropProduceSumFields'
  areaUsed?: Maybe<Scalars['numeric']>
  produce?: Maybe<Scalars['numeric']>
  year?: Maybe<Scalars['Int']>
  yield?: Maybe<Scalars['numeric']>
}

/** aggregate var_pop on columns */
export type CropProduceVar_PopFields = {
  __typename?: 'CropProduceVar_popFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
  yield?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type CropProduceVar_SampFields = {
  __typename?: 'CropProduceVar_sampFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
  yield?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type CropProduceVarianceFields = {
  __typename?: 'CropProduceVarianceFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
  yield?: Maybe<Scalars['Float']>
}

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: InputMaybe<Scalars['date']>
  _gt?: InputMaybe<Scalars['date']>
  _gte?: InputMaybe<Scalars['date']>
  _in?: InputMaybe<Array<Scalars['date']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['date']>
  _lte?: InputMaybe<Scalars['date']>
  _neq?: InputMaybe<Scalars['date']>
  _nin?: InputMaybe<Array<Scalars['date']>>
}

/** columns and relationships of "farm" */
export type Farm = {
  __typename?: 'Farm'
  barangay: Scalars['String']
  /** An array relationship */
  commodityProduces: Array<CommodityProduce>
  /** An aggregate relationship */
  commodityProducesAggregate: CommodityProduceAggregate
  createdAt: Scalars['timestamp']
  farmType: Scalars['String']
  /** An object relationship */
  household: Household
  householdId: Scalars['uuid']
  id: Scalars['uuid']
  isAgrarianReformBeneficiary: Scalars['Boolean']
  location?: Maybe<Scalars['jsonb']>
  municipality: Scalars['String']
  name: Scalars['String']
  ownerName: Scalars['String']
  ownershipDocument: Scalars['String']
  ownershipType: Scalars['String']
  sizeInHaTotal: Scalars['numeric']
  updatedAt: Scalars['timestamp']
  withinAncestralDomain: Scalars['Boolean']
}

/** columns and relationships of "farm" */
export type FarmCommodityProducesArgs = {
  distinctOn?: InputMaybe<Array<CommodityProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityProduceOrderBy>>
  where?: InputMaybe<CommodityProduceBoolExp>
}

/** columns and relationships of "farm" */
export type FarmCommodityProducesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommodityProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityProduceOrderBy>>
  where?: InputMaybe<CommodityProduceBoolExp>
}

/** columns and relationships of "farm" */
export type FarmLocationArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "farm" */
export type FarmAggregate = {
  __typename?: 'FarmAggregate'
  aggregate?: Maybe<FarmAggregateFields>
  nodes: Array<Farm>
}

/** aggregate fields of "farm" */
export type FarmAggregateFields = {
  __typename?: 'FarmAggregateFields'
  avg?: Maybe<FarmAvgFields>
  count: Scalars['Int']
  max?: Maybe<FarmMaxFields>
  min?: Maybe<FarmMinFields>
  stddev?: Maybe<FarmStddevFields>
  stddevPop?: Maybe<FarmStddev_PopFields>
  stddevSamp?: Maybe<FarmStddev_SampFields>
  sum?: Maybe<FarmSumFields>
  varPop?: Maybe<FarmVar_PopFields>
  varSamp?: Maybe<FarmVar_SampFields>
  variance?: Maybe<FarmVarianceFields>
}

/** aggregate fields of "farm" */
export type FarmAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FarmSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "farm" */
export type FarmAggregateOrderBy = {
  avg?: InputMaybe<Farm_Avg_Order_By>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<Farm_Max_Order_By>
  min?: InputMaybe<Farm_Min_Order_By>
  stddev?: InputMaybe<Farm_Stddev_Order_By>
  stddev_pop?: InputMaybe<Farm_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Farm_Stddev_Samp_Order_By>
  sum?: InputMaybe<Farm_Sum_Order_By>
  var_pop?: InputMaybe<Farm_Var_Pop_Order_By>
  var_samp?: InputMaybe<Farm_Var_Samp_Order_By>
  variance?: InputMaybe<Farm_Variance_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type FarmAppendInput = {
  location?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "farm" */
export type FarmArrRelInsertInput = {
  data: Array<FarmInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<FarmOnConflict>
}

/** aggregate avg on columns */
export type FarmAvgFields = {
  __typename?: 'FarmAvgFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "farm". All fields are combined with a logical 'AND'. */
export type FarmBoolExp = {
  _and?: InputMaybe<Array<FarmBoolExp>>
  _not?: InputMaybe<FarmBoolExp>
  _or?: InputMaybe<Array<FarmBoolExp>>
  barangay?: InputMaybe<StringComparisonExp>
  commodityProduces?: InputMaybe<CommodityProduceBoolExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  farmType?: InputMaybe<StringComparisonExp>
  household?: InputMaybe<HouseholdBoolExp>
  householdId?: InputMaybe<UuidComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  isAgrarianReformBeneficiary?: InputMaybe<BooleanComparisonExp>
  location?: InputMaybe<JsonbComparisonExp>
  municipality?: InputMaybe<StringComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  ownerName?: InputMaybe<StringComparisonExp>
  ownershipDocument?: InputMaybe<StringComparisonExp>
  ownershipType?: InputMaybe<StringComparisonExp>
  sizeInHaTotal?: InputMaybe<NumericComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
  withinAncestralDomain?: InputMaybe<BooleanComparisonExp>
}

/** unique or primary key constraints on table "farm" */
export enum FarmConstraint {
  /** unique or primary key constraint on columns "id" */
  FarmPk = 'farm_pk',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type FarmDeleteAtPathInput = {
  location?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type FarmDeleteElemInput = {
  location?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type FarmDeleteKeyInput = {
  location?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "farm" */
export type FarmIncInput = {
  sizeInHaTotal?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "farm" */
export type FarmInsertInput = {
  barangay?: InputMaybe<Scalars['String']>
  commodityProduces?: InputMaybe<CommodityProduceArrRelInsertInput>
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmType?: InputMaybe<Scalars['String']>
  household?: InputMaybe<HouseholdObjRelInsertInput>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  isAgrarianReformBeneficiary?: InputMaybe<Scalars['Boolean']>
  location?: InputMaybe<Scalars['jsonb']>
  municipality?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  ownerName?: InputMaybe<Scalars['String']>
  ownershipDocument?: InputMaybe<Scalars['String']>
  ownershipType?: InputMaybe<Scalars['String']>
  sizeInHaTotal?: InputMaybe<Scalars['numeric']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
  withinAncestralDomain?: InputMaybe<Scalars['Boolean']>
}

/** aggregate max on columns */
export type FarmMaxFields = {
  __typename?: 'FarmMaxFields'
  barangay?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmType?: Maybe<Scalars['String']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  municipality?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ownerName?: Maybe<Scalars['String']>
  ownershipDocument?: Maybe<Scalars['String']>
  ownershipType?: Maybe<Scalars['String']>
  sizeInHaTotal?: Maybe<Scalars['numeric']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type FarmMinFields = {
  __typename?: 'FarmMinFields'
  barangay?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmType?: Maybe<Scalars['String']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  municipality?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ownerName?: Maybe<Scalars['String']>
  ownershipDocument?: Maybe<Scalars['String']>
  ownershipType?: Maybe<Scalars['String']>
  sizeInHaTotal?: Maybe<Scalars['numeric']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "farm" */
export type FarmMutationResponse = {
  __typename?: 'FarmMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Farm>
}

/** input type for inserting object relation for remote table "farm" */
export type FarmObjRelInsertInput = {
  data: FarmInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<FarmOnConflict>
}

/** on_conflict condition type for table "farm" */
export type FarmOnConflict = {
  constraint: FarmConstraint
  update_columns?: Array<FarmUpdateColumn>
  where?: InputMaybe<FarmBoolExp>
}

/** Ordering options when selecting data from "farm". */
export type FarmOrderBy = {
  barangay?: InputMaybe<OrderBy>
  commodityProducesAggregate?: InputMaybe<CommodityProduceAggregateOrderBy>
  createdAt?: InputMaybe<OrderBy>
  farmType?: InputMaybe<OrderBy>
  household?: InputMaybe<HouseholdOrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  isAgrarianReformBeneficiary?: InputMaybe<OrderBy>
  location?: InputMaybe<OrderBy>
  municipality?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  ownerName?: InputMaybe<OrderBy>
  ownershipDocument?: InputMaybe<OrderBy>
  ownershipType?: InputMaybe<OrderBy>
  sizeInHaTotal?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  withinAncestralDomain?: InputMaybe<OrderBy>
}

/** primary key columns input for table: farm */
export type FarmPkColumnsInput = {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type FarmPrependInput = {
  location?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "farm" */
export enum FarmSelectColumn {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FarmType = 'farmType',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  Id = 'id',
  /** column name */
  IsAgrarianReformBeneficiary = 'isAgrarianReformBeneficiary',
  /** column name */
  Location = 'location',
  /** column name */
  Municipality = 'municipality',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerName = 'ownerName',
  /** column name */
  OwnershipDocument = 'ownershipDocument',
  /** column name */
  OwnershipType = 'ownershipType',
  /** column name */
  SizeInHaTotal = 'sizeInHaTotal',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WithinAncestralDomain = 'withinAncestralDomain',
}

/** input type for updating data in table "farm" */
export type FarmSetInput = {
  barangay?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmType?: InputMaybe<Scalars['String']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  isAgrarianReformBeneficiary?: InputMaybe<Scalars['Boolean']>
  location?: InputMaybe<Scalars['jsonb']>
  municipality?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  ownerName?: InputMaybe<Scalars['String']>
  ownershipDocument?: InputMaybe<Scalars['String']>
  ownershipType?: InputMaybe<Scalars['String']>
  sizeInHaTotal?: InputMaybe<Scalars['numeric']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
  withinAncestralDomain?: InputMaybe<Scalars['Boolean']>
}

/** aggregate stddev on columns */
export type FarmStddevFields = {
  __typename?: 'FarmStddevFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type FarmStddev_PopFields = {
  __typename?: 'FarmStddev_popFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type FarmStddev_SampFields = {
  __typename?: 'FarmStddev_sampFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type FarmSumFields = {
  __typename?: 'FarmSumFields'
  sizeInHaTotal?: Maybe<Scalars['numeric']>
}

/** update columns of table "farm" */
export enum FarmUpdateColumn {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FarmType = 'farmType',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  Id = 'id',
  /** column name */
  IsAgrarianReformBeneficiary = 'isAgrarianReformBeneficiary',
  /** column name */
  Location = 'location',
  /** column name */
  Municipality = 'municipality',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerName = 'ownerName',
  /** column name */
  OwnershipDocument = 'ownershipDocument',
  /** column name */
  OwnershipType = 'ownershipType',
  /** column name */
  SizeInHaTotal = 'sizeInHaTotal',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WithinAncestralDomain = 'withinAncestralDomain',
}

export type FarmUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<FarmAppendInput>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<FarmDeleteAtPathInput>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<FarmDeleteElemInput>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<FarmDeleteKeyInput>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FarmIncInput>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<FarmPrependInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FarmSetInput>
  where: FarmBoolExp
}

/** aggregate var_pop on columns */
export type FarmVar_PopFields = {
  __typename?: 'FarmVar_popFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type FarmVar_SampFields = {
  __typename?: 'FarmVar_sampFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type FarmVarianceFields = {
  __typename?: 'FarmVarianceFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** columns and relationships of "farmView" */
export type FarmView = {
  __typename?: 'FarmView'
  barangay?: Maybe<Scalars['String']>
  createdAt: Scalars['timestamp']
  firstName: Scalars['String']
  householdId: Scalars['uuid']
  id: Scalars['uuid']
  lastName: Scalars['String']
  location: Scalars['jsonb']
  name: Scalars['String']
  ownerName: Scalars['String']
  ownershipType: Scalars['String']
  sizeInHaTotal: Scalars['numeric']
}

/** columns and relationships of "farmView" */
export type FarmViewLocationArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "farmView" */
export type FarmViewAggregate = {
  __typename?: 'FarmViewAggregate'
  aggregate?: Maybe<FarmViewAggregateFields>
  nodes: Array<FarmView>
}

/** aggregate fields of "farmView" */
export type FarmViewAggregateFields = {
  __typename?: 'FarmViewAggregateFields'
  avg?: Maybe<FarmViewAvgFields>
  count: Scalars['Int']
  max?: Maybe<FarmViewMaxFields>
  min?: Maybe<FarmViewMinFields>
  stddev?: Maybe<FarmViewStddevFields>
  stddevPop?: Maybe<FarmViewStddev_PopFields>
  stddevSamp?: Maybe<FarmViewStddev_SampFields>
  sum?: Maybe<FarmViewSumFields>
  varPop?: Maybe<FarmViewVar_PopFields>
  varSamp?: Maybe<FarmViewVar_SampFields>
  variance?: Maybe<FarmViewVarianceFields>
}

/** aggregate fields of "farmView" */
export type FarmViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FarmViewSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type FarmViewAvgFields = {
  __typename?: 'FarmViewAvgFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "farmView". All fields are combined with a logical 'AND'. */
export type FarmViewBoolExp = {
  _and?: InputMaybe<Array<FarmViewBoolExp>>
  _not?: InputMaybe<FarmViewBoolExp>
  _or?: InputMaybe<Array<FarmViewBoolExp>>
  barangay?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  firstName?: InputMaybe<StringComparisonExp>
  householdId?: InputMaybe<UuidComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  lastName?: InputMaybe<StringComparisonExp>
  location?: InputMaybe<JsonbComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  ownerName?: InputMaybe<StringComparisonExp>
  ownershipType?: InputMaybe<StringComparisonExp>
  sizeInHaTotal?: InputMaybe<NumericComparisonExp>
}

/** aggregate max on columns */
export type FarmViewMaxFields = {
  __typename?: 'FarmViewMaxFields'
  barangay?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  firstName?: Maybe<Scalars['String']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  lastName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ownerName?: Maybe<Scalars['String']>
  ownershipType?: Maybe<Scalars['String']>
  sizeInHaTotal?: Maybe<Scalars['numeric']>
}

/** aggregate min on columns */
export type FarmViewMinFields = {
  __typename?: 'FarmViewMinFields'
  barangay?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  firstName?: Maybe<Scalars['String']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  lastName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ownerName?: Maybe<Scalars['String']>
  ownershipType?: Maybe<Scalars['String']>
  sizeInHaTotal?: Maybe<Scalars['numeric']>
}

/** Ordering options when selecting data from "farmView". */
export type FarmViewOrderBy = {
  barangay?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  firstName?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lastName?: InputMaybe<OrderBy>
  location?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  ownerName?: InputMaybe<OrderBy>
  ownershipType?: InputMaybe<OrderBy>
  sizeInHaTotal?: InputMaybe<OrderBy>
}

/** select columns of table "farmView" */
export enum FarmViewSelectColumn {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerName = 'ownerName',
  /** column name */
  OwnershipType = 'ownershipType',
  /** column name */
  SizeInHaTotal = 'sizeInHaTotal',
}

/** aggregate stddev on columns */
export type FarmViewStddevFields = {
  __typename?: 'FarmViewStddevFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type FarmViewStddev_PopFields = {
  __typename?: 'FarmViewStddev_popFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type FarmViewStddev_SampFields = {
  __typename?: 'FarmViewStddev_sampFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type FarmViewSumFields = {
  __typename?: 'FarmViewSumFields'
  sizeInHaTotal?: Maybe<Scalars['numeric']>
}

/** aggregate var_pop on columns */
export type FarmViewVar_PopFields = {
  __typename?: 'FarmViewVar_popFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type FarmViewVar_SampFields = {
  __typename?: 'FarmViewVar_sampFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type FarmViewVarianceFields = {
  __typename?: 'FarmViewVarianceFields'
  sizeInHaTotal?: Maybe<Scalars['Float']>
}

/** columns and relationships of "fisheriesProduce" */
export type FisheriesProduce = {
  __typename?: 'FisheriesProduce'
  commodityId?: Maybe<Scalars['uuid']>
  name: Scalars['String']
  produce: Scalars['float8']
  year: Scalars['Int']
}

/** aggregated selection of "fisheriesProduce" */
export type FisheriesProduceAggregate = {
  __typename?: 'FisheriesProduceAggregate'
  aggregate?: Maybe<FisheriesProduceAggregateFields>
  nodes: Array<FisheriesProduce>
}

/** aggregate fields of "fisheriesProduce" */
export type FisheriesProduceAggregateFields = {
  __typename?: 'FisheriesProduceAggregateFields'
  avg?: Maybe<FisheriesProduceAvgFields>
  count: Scalars['Int']
  max?: Maybe<FisheriesProduceMaxFields>
  min?: Maybe<FisheriesProduceMinFields>
  stddev?: Maybe<FisheriesProduceStddevFields>
  stddevPop?: Maybe<FisheriesProduceStddev_PopFields>
  stddevSamp?: Maybe<FisheriesProduceStddev_SampFields>
  sum?: Maybe<FisheriesProduceSumFields>
  varPop?: Maybe<FisheriesProduceVar_PopFields>
  varSamp?: Maybe<FisheriesProduceVar_SampFields>
  variance?: Maybe<FisheriesProduceVarianceFields>
}

/** aggregate fields of "fisheriesProduce" */
export type FisheriesProduceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FisheriesProduceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type FisheriesProduceAvgFields = {
  __typename?: 'FisheriesProduceAvgFields'
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "fisheriesProduce". All fields are combined with a logical 'AND'. */
export type FisheriesProduceBoolExp = {
  _and?: InputMaybe<Array<FisheriesProduceBoolExp>>
  _not?: InputMaybe<FisheriesProduceBoolExp>
  _or?: InputMaybe<Array<FisheriesProduceBoolExp>>
  commodityId?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  produce?: InputMaybe<Float8ComparisonExp>
  year?: InputMaybe<IntComparisonExp>
}

/** aggregate max on columns */
export type FisheriesProduceMaxFields = {
  __typename?: 'FisheriesProduceMaxFields'
  commodityId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  produce?: Maybe<Scalars['float8']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type FisheriesProduceMinFields = {
  __typename?: 'FisheriesProduceMinFields'
  commodityId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  produce?: Maybe<Scalars['float8']>
  year?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "fisheriesProduce". */
export type FisheriesProduceOrderBy = {
  commodityId?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** select columns of table "fisheriesProduce" */
export enum FisheriesProduceSelectColumn {
  /** column name */
  CommodityId = 'commodityId',
  /** column name */
  Name = 'name',
  /** column name */
  Produce = 'produce',
  /** column name */
  Year = 'year',
}

/** aggregate stddev on columns */
export type FisheriesProduceStddevFields = {
  __typename?: 'FisheriesProduceStddevFields'
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type FisheriesProduceStddev_PopFields = {
  __typename?: 'FisheriesProduceStddev_popFields'
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type FisheriesProduceStddev_SampFields = {
  __typename?: 'FisheriesProduceStddev_sampFields'
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type FisheriesProduceSumFields = {
  __typename?: 'FisheriesProduceSumFields'
  produce?: Maybe<Scalars['float8']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type FisheriesProduceVar_PopFields = {
  __typename?: 'FisheriesProduceVar_popFields'
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type FisheriesProduceVar_SampFields = {
  __typename?: 'FisheriesProduceVar_sampFields'
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type FisheriesProduceVarianceFields = {
  __typename?: 'FisheriesProduceVarianceFields'
  produce?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8ComparisonExp = {
  _eq?: InputMaybe<Scalars['float8']>
  _gt?: InputMaybe<Scalars['float8']>
  _gte?: InputMaybe<Scalars['float8']>
  _in?: InputMaybe<Array<Scalars['float8']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['float8']>
  _lte?: InputMaybe<Scalars['float8']>
  _neq?: InputMaybe<Scalars['float8']>
  _nin?: InputMaybe<Array<Scalars['float8']>>
}

/** columns and relationships of "household" */
export type Household = {
  __typename?: 'Household'
  /** An array relationship */
  annualInfos: Array<AnnualInfo>
  /** An aggregate relationship */
  annualInfosAggregate: AnnualInfoAggregate
  barangay: Scalars['String']
  civilStatus: Scalars['Int']
  contactNumber: Scalars['String']
  createdAt: Scalars['timestamp']
  dateOfBirth: Scalars['date']
  emergencyContactName: Scalars['String']
  emergencyContactNumber: Scalars['String']
  extensionName: Scalars['String']
  /** An array relationship */
  farms: Array<Farm>
  /** An aggregate relationship */
  farmsAggregate: FarmAggregate
  femaleCount: Scalars['Int']
  firstName: Scalars['String']
  governmentIdNo: Scalars['String']
  governmentIdType: Scalars['String']
  houseLotBldgNo: Scalars['String']
  id: Scalars['uuid']
  ipMembership: Scalars['String']
  is4psBeneficiary: Scalars['Boolean']
  isHouseholdHead: Scalars['Boolean']
  lastName: Scalars['String']
  maleCount: Scalars['Int']
  middleName: Scalars['String']
  mothersMaidenName: Scalars['String']
  municipality: Scalars['String']
  nameOfHouseholdHead: Scalars['String']
  nameOfSpouse: Scalars['String']
  personWithDisability: Scalars['Boolean']
  placeOfBirth: Scalars['String']
  province: Scalars['String']
  referenceNo: Scalars['String']
  region: Scalars['String']
  relationshipToHouseholdHead: Scalars['String']
  religion: Scalars['String']
  sex: Scalars['Int']
  streetSitioSubdv: Scalars['String']
  updatedAt: Scalars['timestamp']
}

/** columns and relationships of "household" */
export type HouseholdAnnualInfosArgs = {
  distinctOn?: InputMaybe<Array<AnnualInfoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AnnualInfoOrderBy>>
  where?: InputMaybe<AnnualInfoBoolExp>
}

/** columns and relationships of "household" */
export type HouseholdAnnualInfosAggregateArgs = {
  distinctOn?: InputMaybe<Array<AnnualInfoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AnnualInfoOrderBy>>
  where?: InputMaybe<AnnualInfoBoolExp>
}

/** columns and relationships of "household" */
export type HouseholdFarmsArgs = {
  distinctOn?: InputMaybe<Array<FarmSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmOrderBy>>
  where?: InputMaybe<FarmBoolExp>
}

/** columns and relationships of "household" */
export type HouseholdFarmsAggregateArgs = {
  distinctOn?: InputMaybe<Array<FarmSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmOrderBy>>
  where?: InputMaybe<FarmBoolExp>
}

/** aggregated selection of "household" */
export type HouseholdAggregate = {
  __typename?: 'HouseholdAggregate'
  aggregate?: Maybe<HouseholdAggregateFields>
  nodes: Array<Household>
}

/** aggregate fields of "household" */
export type HouseholdAggregateFields = {
  __typename?: 'HouseholdAggregateFields'
  avg?: Maybe<HouseholdAvgFields>
  count: Scalars['Int']
  max?: Maybe<HouseholdMaxFields>
  min?: Maybe<HouseholdMinFields>
  stddev?: Maybe<HouseholdStddevFields>
  stddevPop?: Maybe<HouseholdStddev_PopFields>
  stddevSamp?: Maybe<HouseholdStddev_SampFields>
  sum?: Maybe<HouseholdSumFields>
  varPop?: Maybe<HouseholdVar_PopFields>
  varSamp?: Maybe<HouseholdVar_SampFields>
  variance?: Maybe<HouseholdVarianceFields>
}

/** aggregate fields of "household" */
export type HouseholdAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type HouseholdAvgFields = {
  __typename?: 'HouseholdAvgFields'
  civilStatus?: Maybe<Scalars['Float']>
  femaleCount?: Maybe<Scalars['Float']>
  maleCount?: Maybe<Scalars['Float']>
  sex?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "household". All fields are combined with a logical 'AND'. */
export type HouseholdBoolExp = {
  _and?: InputMaybe<Array<HouseholdBoolExp>>
  _not?: InputMaybe<HouseholdBoolExp>
  _or?: InputMaybe<Array<HouseholdBoolExp>>
  annualInfos?: InputMaybe<AnnualInfoBoolExp>
  barangay?: InputMaybe<StringComparisonExp>
  civilStatus?: InputMaybe<IntComparisonExp>
  contactNumber?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  dateOfBirth?: InputMaybe<DateComparisonExp>
  emergencyContactName?: InputMaybe<StringComparisonExp>
  emergencyContactNumber?: InputMaybe<StringComparisonExp>
  extensionName?: InputMaybe<StringComparisonExp>
  farms?: InputMaybe<FarmBoolExp>
  femaleCount?: InputMaybe<IntComparisonExp>
  firstName?: InputMaybe<StringComparisonExp>
  governmentIdNo?: InputMaybe<StringComparisonExp>
  governmentIdType?: InputMaybe<StringComparisonExp>
  houseLotBldgNo?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  ipMembership?: InputMaybe<StringComparisonExp>
  is4psBeneficiary?: InputMaybe<BooleanComparisonExp>
  isHouseholdHead?: InputMaybe<BooleanComparisonExp>
  lastName?: InputMaybe<StringComparisonExp>
  maleCount?: InputMaybe<IntComparisonExp>
  middleName?: InputMaybe<StringComparisonExp>
  mothersMaidenName?: InputMaybe<StringComparisonExp>
  municipality?: InputMaybe<StringComparisonExp>
  nameOfHouseholdHead?: InputMaybe<StringComparisonExp>
  nameOfSpouse?: InputMaybe<StringComparisonExp>
  personWithDisability?: InputMaybe<BooleanComparisonExp>
  placeOfBirth?: InputMaybe<StringComparisonExp>
  province?: InputMaybe<StringComparisonExp>
  referenceNo?: InputMaybe<StringComparisonExp>
  region?: InputMaybe<StringComparisonExp>
  relationshipToHouseholdHead?: InputMaybe<StringComparisonExp>
  religion?: InputMaybe<StringComparisonExp>
  sex?: InputMaybe<IntComparisonExp>
  streetSitioSubdv?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
}

/** unique or primary key constraints on table "household" */
export enum HouseholdConstraint {
  /** unique or primary key constraint on columns "id" */
  HouseholdPk = 'household_pk',
}

/** input type for incrementing numeric columns in table "household" */
export type HouseholdIncInput = {
  civilStatus?: InputMaybe<Scalars['Int']>
  femaleCount?: InputMaybe<Scalars['Int']>
  maleCount?: InputMaybe<Scalars['Int']>
  sex?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "household" */
export type HouseholdInsertInput = {
  annualInfos?: InputMaybe<AnnualInfoArrRelInsertInput>
  barangay?: InputMaybe<Scalars['String']>
  civilStatus?: InputMaybe<Scalars['Int']>
  contactNumber?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  dateOfBirth?: InputMaybe<Scalars['date']>
  emergencyContactName?: InputMaybe<Scalars['String']>
  emergencyContactNumber?: InputMaybe<Scalars['String']>
  extensionName?: InputMaybe<Scalars['String']>
  farms?: InputMaybe<FarmArrRelInsertInput>
  femaleCount?: InputMaybe<Scalars['Int']>
  firstName?: InputMaybe<Scalars['String']>
  governmentIdNo?: InputMaybe<Scalars['String']>
  governmentIdType?: InputMaybe<Scalars['String']>
  houseLotBldgNo?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  ipMembership?: InputMaybe<Scalars['String']>
  is4psBeneficiary?: InputMaybe<Scalars['Boolean']>
  isHouseholdHead?: InputMaybe<Scalars['Boolean']>
  lastName?: InputMaybe<Scalars['String']>
  maleCount?: InputMaybe<Scalars['Int']>
  middleName?: InputMaybe<Scalars['String']>
  mothersMaidenName?: InputMaybe<Scalars['String']>
  municipality?: InputMaybe<Scalars['String']>
  nameOfHouseholdHead?: InputMaybe<Scalars['String']>
  nameOfSpouse?: InputMaybe<Scalars['String']>
  personWithDisability?: InputMaybe<Scalars['Boolean']>
  placeOfBirth?: InputMaybe<Scalars['String']>
  province?: InputMaybe<Scalars['String']>
  referenceNo?: InputMaybe<Scalars['String']>
  region?: InputMaybe<Scalars['String']>
  relationshipToHouseholdHead?: InputMaybe<Scalars['String']>
  religion?: InputMaybe<Scalars['String']>
  sex?: InputMaybe<Scalars['Int']>
  streetSitioSubdv?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type HouseholdMaxFields = {
  __typename?: 'HouseholdMaxFields'
  barangay?: Maybe<Scalars['String']>
  civilStatus?: Maybe<Scalars['Int']>
  contactNumber?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  dateOfBirth?: Maybe<Scalars['date']>
  emergencyContactName?: Maybe<Scalars['String']>
  emergencyContactNumber?: Maybe<Scalars['String']>
  extensionName?: Maybe<Scalars['String']>
  femaleCount?: Maybe<Scalars['Int']>
  firstName?: Maybe<Scalars['String']>
  governmentIdNo?: Maybe<Scalars['String']>
  governmentIdType?: Maybe<Scalars['String']>
  houseLotBldgNo?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  ipMembership?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  maleCount?: Maybe<Scalars['Int']>
  middleName?: Maybe<Scalars['String']>
  mothersMaidenName?: Maybe<Scalars['String']>
  municipality?: Maybe<Scalars['String']>
  nameOfHouseholdHead?: Maybe<Scalars['String']>
  nameOfSpouse?: Maybe<Scalars['String']>
  placeOfBirth?: Maybe<Scalars['String']>
  province?: Maybe<Scalars['String']>
  referenceNo?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  relationshipToHouseholdHead?: Maybe<Scalars['String']>
  religion?: Maybe<Scalars['String']>
  sex?: Maybe<Scalars['Int']>
  streetSitioSubdv?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type HouseholdMinFields = {
  __typename?: 'HouseholdMinFields'
  barangay?: Maybe<Scalars['String']>
  civilStatus?: Maybe<Scalars['Int']>
  contactNumber?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  dateOfBirth?: Maybe<Scalars['date']>
  emergencyContactName?: Maybe<Scalars['String']>
  emergencyContactNumber?: Maybe<Scalars['String']>
  extensionName?: Maybe<Scalars['String']>
  femaleCount?: Maybe<Scalars['Int']>
  firstName?: Maybe<Scalars['String']>
  governmentIdNo?: Maybe<Scalars['String']>
  governmentIdType?: Maybe<Scalars['String']>
  houseLotBldgNo?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  ipMembership?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  maleCount?: Maybe<Scalars['Int']>
  middleName?: Maybe<Scalars['String']>
  mothersMaidenName?: Maybe<Scalars['String']>
  municipality?: Maybe<Scalars['String']>
  nameOfHouseholdHead?: Maybe<Scalars['String']>
  nameOfSpouse?: Maybe<Scalars['String']>
  placeOfBirth?: Maybe<Scalars['String']>
  province?: Maybe<Scalars['String']>
  referenceNo?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  relationshipToHouseholdHead?: Maybe<Scalars['String']>
  religion?: Maybe<Scalars['String']>
  sex?: Maybe<Scalars['Int']>
  streetSitioSubdv?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "household" */
export type HouseholdMutationResponse = {
  __typename?: 'HouseholdMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Household>
}

/** input type for inserting object relation for remote table "household" */
export type HouseholdObjRelInsertInput = {
  data: HouseholdInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdOnConflict>
}

/** on_conflict condition type for table "household" */
export type HouseholdOnConflict = {
  constraint: HouseholdConstraint
  update_columns?: Array<HouseholdUpdateColumn>
  where?: InputMaybe<HouseholdBoolExp>
}

/** Ordering options when selecting data from "household". */
export type HouseholdOrderBy = {
  annualInfosAggregate?: InputMaybe<AnnualInfoAggregateOrderBy>
  barangay?: InputMaybe<OrderBy>
  civilStatus?: InputMaybe<OrderBy>
  contactNumber?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  dateOfBirth?: InputMaybe<OrderBy>
  emergencyContactName?: InputMaybe<OrderBy>
  emergencyContactNumber?: InputMaybe<OrderBy>
  extensionName?: InputMaybe<OrderBy>
  farmsAggregate?: InputMaybe<FarmAggregateOrderBy>
  femaleCount?: InputMaybe<OrderBy>
  firstName?: InputMaybe<OrderBy>
  governmentIdNo?: InputMaybe<OrderBy>
  governmentIdType?: InputMaybe<OrderBy>
  houseLotBldgNo?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  ipMembership?: InputMaybe<OrderBy>
  is4psBeneficiary?: InputMaybe<OrderBy>
  isHouseholdHead?: InputMaybe<OrderBy>
  lastName?: InputMaybe<OrderBy>
  maleCount?: InputMaybe<OrderBy>
  middleName?: InputMaybe<OrderBy>
  mothersMaidenName?: InputMaybe<OrderBy>
  municipality?: InputMaybe<OrderBy>
  nameOfHouseholdHead?: InputMaybe<OrderBy>
  nameOfSpouse?: InputMaybe<OrderBy>
  personWithDisability?: InputMaybe<OrderBy>
  placeOfBirth?: InputMaybe<OrderBy>
  province?: InputMaybe<OrderBy>
  referenceNo?: InputMaybe<OrderBy>
  region?: InputMaybe<OrderBy>
  relationshipToHouseholdHead?: InputMaybe<OrderBy>
  religion?: InputMaybe<OrderBy>
  sex?: InputMaybe<OrderBy>
  streetSitioSubdv?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: household */
export type HouseholdPkColumnsInput = {
  id: Scalars['uuid']
}

/** columns and relationships of "householdPrograms" */
export type HouseholdPrograms = {
  __typename?: 'HouseholdPrograms'
  barangay: Scalars['String']
  commodities: Scalars['jsonb']
  commodityIds?: Maybe<Scalars['jsonb']>
  createdAt: Scalars['timestamp']
  farmSize: Scalars['numeric']
  firstName: Scalars['String']
  grossAnnualIncomeFarming: Scalars['numeric']
  grossAnnualIncomeNonfarming: Scalars['numeric']
  id: Scalars['uuid']
  lastName: Scalars['String']
  mainLivelihood?: Maybe<Scalars['jsonb']>
  programIds: Scalars['jsonb']
  referenceNo: Scalars['String']
}

/** columns and relationships of "householdPrograms" */
export type HouseholdProgramsCommoditiesArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "householdPrograms" */
export type HouseholdProgramsCommodityIdsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "householdPrograms" */
export type HouseholdProgramsMainLivelihoodArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "householdPrograms" */
export type HouseholdProgramsProgramIdsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "householdPrograms" */
export type HouseholdProgramsAggregate = {
  __typename?: 'HouseholdProgramsAggregate'
  aggregate?: Maybe<HouseholdProgramsAggregateFields>
  nodes: Array<HouseholdPrograms>
}

/** aggregate fields of "householdPrograms" */
export type HouseholdProgramsAggregateFields = {
  __typename?: 'HouseholdProgramsAggregateFields'
  avg?: Maybe<HouseholdProgramsAvgFields>
  count: Scalars['Int']
  max?: Maybe<HouseholdProgramsMaxFields>
  min?: Maybe<HouseholdProgramsMinFields>
  stddev?: Maybe<HouseholdProgramsStddevFields>
  stddevPop?: Maybe<HouseholdProgramsStddev_PopFields>
  stddevSamp?: Maybe<HouseholdProgramsStddev_SampFields>
  sum?: Maybe<HouseholdProgramsSumFields>
  varPop?: Maybe<HouseholdProgramsVar_PopFields>
  varSamp?: Maybe<HouseholdProgramsVar_SampFields>
  variance?: Maybe<HouseholdProgramsVarianceFields>
}

/** aggregate fields of "householdPrograms" */
export type HouseholdProgramsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdProgramsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type HouseholdProgramsAvgFields = {
  __typename?: 'HouseholdProgramsAvgFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "householdPrograms". All fields are combined with a logical 'AND'. */
export type HouseholdProgramsBoolExp = {
  _and?: InputMaybe<Array<HouseholdProgramsBoolExp>>
  _not?: InputMaybe<HouseholdProgramsBoolExp>
  _or?: InputMaybe<Array<HouseholdProgramsBoolExp>>
  barangay?: InputMaybe<StringComparisonExp>
  commodities?: InputMaybe<JsonbComparisonExp>
  commodityIds?: InputMaybe<JsonbComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  farmSize?: InputMaybe<NumericComparisonExp>
  firstName?: InputMaybe<StringComparisonExp>
  grossAnnualIncomeFarming?: InputMaybe<NumericComparisonExp>
  grossAnnualIncomeNonfarming?: InputMaybe<NumericComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  lastName?: InputMaybe<StringComparisonExp>
  mainLivelihood?: InputMaybe<JsonbComparisonExp>
  programIds?: InputMaybe<JsonbComparisonExp>
  referenceNo?: InputMaybe<StringComparisonExp>
}

/** aggregate max on columns */
export type HouseholdProgramsMaxFields = {
  __typename?: 'HouseholdProgramsMaxFields'
  barangay?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmSize?: Maybe<Scalars['numeric']>
  firstName?: Maybe<Scalars['String']>
  grossAnnualIncomeFarming?: Maybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['numeric']>
  id?: Maybe<Scalars['uuid']>
  lastName?: Maybe<Scalars['String']>
  referenceNo?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type HouseholdProgramsMinFields = {
  __typename?: 'HouseholdProgramsMinFields'
  barangay?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmSize?: Maybe<Scalars['numeric']>
  firstName?: Maybe<Scalars['String']>
  grossAnnualIncomeFarming?: Maybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['numeric']>
  id?: Maybe<Scalars['uuid']>
  lastName?: Maybe<Scalars['String']>
  referenceNo?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "householdPrograms". */
export type HouseholdProgramsOrderBy = {
  barangay?: InputMaybe<OrderBy>
  commodities?: InputMaybe<OrderBy>
  commodityIds?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  firstName?: InputMaybe<OrderBy>
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lastName?: InputMaybe<OrderBy>
  mainLivelihood?: InputMaybe<OrderBy>
  programIds?: InputMaybe<OrderBy>
  referenceNo?: InputMaybe<OrderBy>
}

/** select columns of table "householdPrograms" */
export enum HouseholdProgramsSelectColumn {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  Commodities = 'commodities',
  /** column name */
  CommodityIds = 'commodityIds',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FarmSize = 'farmSize',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GrossAnnualIncomeFarming = 'grossAnnualIncomeFarming',
  /** column name */
  GrossAnnualIncomeNonfarming = 'grossAnnualIncomeNonfarming',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MainLivelihood = 'mainLivelihood',
  /** column name */
  ProgramIds = 'programIds',
  /** column name */
  ReferenceNo = 'referenceNo',
}

/** aggregate stddev on columns */
export type HouseholdProgramsStddevFields = {
  __typename?: 'HouseholdProgramsStddevFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type HouseholdProgramsStddev_PopFields = {
  __typename?: 'HouseholdProgramsStddev_popFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type HouseholdProgramsStddev_SampFields = {
  __typename?: 'HouseholdProgramsStddev_sampFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type HouseholdProgramsSumFields = {
  __typename?: 'HouseholdProgramsSumFields'
  farmSize?: Maybe<Scalars['numeric']>
  grossAnnualIncomeFarming?: Maybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['numeric']>
}

/** aggregate var_pop on columns */
export type HouseholdProgramsVar_PopFields = {
  __typename?: 'HouseholdProgramsVar_popFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type HouseholdProgramsVar_SampFields = {
  __typename?: 'HouseholdProgramsVar_sampFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type HouseholdProgramsVarianceFields = {
  __typename?: 'HouseholdProgramsVarianceFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** select columns of table "household" */
export enum HouseholdSelectColumn {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  CivilStatus = 'civilStatus',
  /** column name */
  ContactNumber = 'contactNumber',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateOfBirth = 'dateOfBirth',
  /** column name */
  EmergencyContactName = 'emergencyContactName',
  /** column name */
  EmergencyContactNumber = 'emergencyContactNumber',
  /** column name */
  ExtensionName = 'extensionName',
  /** column name */
  FemaleCount = 'femaleCount',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GovernmentIdNo = 'governmentIdNo',
  /** column name */
  GovernmentIdType = 'governmentIdType',
  /** column name */
  HouseLotBldgNo = 'houseLotBldgNo',
  /** column name */
  Id = 'id',
  /** column name */
  IpMembership = 'ipMembership',
  /** column name */
  Is4psBeneficiary = 'is4psBeneficiary',
  /** column name */
  IsHouseholdHead = 'isHouseholdHead',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MaleCount = 'maleCount',
  /** column name */
  MiddleName = 'middleName',
  /** column name */
  MothersMaidenName = 'mothersMaidenName',
  /** column name */
  Municipality = 'municipality',
  /** column name */
  NameOfHouseholdHead = 'nameOfHouseholdHead',
  /** column name */
  NameOfSpouse = 'nameOfSpouse',
  /** column name */
  PersonWithDisability = 'personWithDisability',
  /** column name */
  PlaceOfBirth = 'placeOfBirth',
  /** column name */
  Province = 'province',
  /** column name */
  ReferenceNo = 'referenceNo',
  /** column name */
  Region = 'region',
  /** column name */
  RelationshipToHouseholdHead = 'relationshipToHouseholdHead',
  /** column name */
  Religion = 'religion',
  /** column name */
  Sex = 'sex',
  /** column name */
  StreetSitioSubdv = 'streetSitioSubdv',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "household" */
export type HouseholdSetInput = {
  barangay?: InputMaybe<Scalars['String']>
  civilStatus?: InputMaybe<Scalars['Int']>
  contactNumber?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  dateOfBirth?: InputMaybe<Scalars['date']>
  emergencyContactName?: InputMaybe<Scalars['String']>
  emergencyContactNumber?: InputMaybe<Scalars['String']>
  extensionName?: InputMaybe<Scalars['String']>
  femaleCount?: InputMaybe<Scalars['Int']>
  firstName?: InputMaybe<Scalars['String']>
  governmentIdNo?: InputMaybe<Scalars['String']>
  governmentIdType?: InputMaybe<Scalars['String']>
  houseLotBldgNo?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  ipMembership?: InputMaybe<Scalars['String']>
  is4psBeneficiary?: InputMaybe<Scalars['Boolean']>
  isHouseholdHead?: InputMaybe<Scalars['Boolean']>
  lastName?: InputMaybe<Scalars['String']>
  maleCount?: InputMaybe<Scalars['Int']>
  middleName?: InputMaybe<Scalars['String']>
  mothersMaidenName?: InputMaybe<Scalars['String']>
  municipality?: InputMaybe<Scalars['String']>
  nameOfHouseholdHead?: InputMaybe<Scalars['String']>
  nameOfSpouse?: InputMaybe<Scalars['String']>
  personWithDisability?: InputMaybe<Scalars['Boolean']>
  placeOfBirth?: InputMaybe<Scalars['String']>
  province?: InputMaybe<Scalars['String']>
  referenceNo?: InputMaybe<Scalars['String']>
  region?: InputMaybe<Scalars['String']>
  relationshipToHouseholdHead?: InputMaybe<Scalars['String']>
  religion?: InputMaybe<Scalars['String']>
  sex?: InputMaybe<Scalars['Int']>
  streetSitioSubdv?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type HouseholdStddevFields = {
  __typename?: 'HouseholdStddevFields'
  civilStatus?: Maybe<Scalars['Float']>
  femaleCount?: Maybe<Scalars['Float']>
  maleCount?: Maybe<Scalars['Float']>
  sex?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type HouseholdStddev_PopFields = {
  __typename?: 'HouseholdStddev_popFields'
  civilStatus?: Maybe<Scalars['Float']>
  femaleCount?: Maybe<Scalars['Float']>
  maleCount?: Maybe<Scalars['Float']>
  sex?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type HouseholdStddev_SampFields = {
  __typename?: 'HouseholdStddev_sampFields'
  civilStatus?: Maybe<Scalars['Float']>
  femaleCount?: Maybe<Scalars['Float']>
  maleCount?: Maybe<Scalars['Float']>
  sex?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type HouseholdSumFields = {
  __typename?: 'HouseholdSumFields'
  civilStatus?: Maybe<Scalars['Int']>
  femaleCount?: Maybe<Scalars['Int']>
  maleCount?: Maybe<Scalars['Int']>
  sex?: Maybe<Scalars['Int']>
}

/** columns and relationships of "householdToProgram" */
export type HouseholdToProgram = {
  __typename?: 'HouseholdToProgram'
  createdAt: Scalars['timestamp']
  householdId: Scalars['uuid']
  id: Scalars['uuid']
  programId: Scalars['uuid']
  remarks: Scalars['String']
  updatedAt: Scalars['timestamp']
}

/** aggregated selection of "householdToProgram" */
export type HouseholdToProgramAggregate = {
  __typename?: 'HouseholdToProgramAggregate'
  aggregate?: Maybe<HouseholdToProgramAggregateFields>
  nodes: Array<HouseholdToProgram>
}

/** aggregate fields of "householdToProgram" */
export type HouseholdToProgramAggregateFields = {
  __typename?: 'HouseholdToProgramAggregateFields'
  count: Scalars['Int']
  max?: Maybe<HouseholdToProgramMaxFields>
  min?: Maybe<HouseholdToProgramMinFields>
}

/** aggregate fields of "householdToProgram" */
export type HouseholdToProgramAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdToProgramSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "householdToProgram". All fields are combined with a logical 'AND'. */
export type HouseholdToProgramBoolExp = {
  _and?: InputMaybe<Array<HouseholdToProgramBoolExp>>
  _not?: InputMaybe<HouseholdToProgramBoolExp>
  _or?: InputMaybe<Array<HouseholdToProgramBoolExp>>
  createdAt?: InputMaybe<TimestampComparisonExp>
  householdId?: InputMaybe<UuidComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  programId?: InputMaybe<UuidComparisonExp>
  remarks?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
}

/** input type for inserting data into table "householdToProgram" */
export type HouseholdToProgramInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  programId?: InputMaybe<Scalars['uuid']>
  remarks?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type HouseholdToProgramMaxFields = {
  __typename?: 'HouseholdToProgramMaxFields'
  createdAt?: Maybe<Scalars['timestamp']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  programId?: Maybe<Scalars['uuid']>
  remarks?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type HouseholdToProgramMinFields = {
  __typename?: 'HouseholdToProgramMinFields'
  createdAt?: Maybe<Scalars['timestamp']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  programId?: Maybe<Scalars['uuid']>
  remarks?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "householdToProgram" */
export type HouseholdToProgramMutationResponse = {
  __typename?: 'HouseholdToProgramMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<HouseholdToProgram>
}

/** Ordering options when selecting data from "householdToProgram". */
export type HouseholdToProgramOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  programId?: InputMaybe<OrderBy>
  remarks?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** select columns of table "householdToProgram" */
export enum HouseholdToProgramSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "householdToProgram" */
export type HouseholdToProgramSetInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  programId?: InputMaybe<Scalars['uuid']>
  remarks?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

export type HouseholdToProgramUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdToProgramSetInput>
  where: HouseholdToProgramBoolExp
}

/** update columns of table "household" */
export enum HouseholdUpdateColumn {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  CivilStatus = 'civilStatus',
  /** column name */
  ContactNumber = 'contactNumber',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateOfBirth = 'dateOfBirth',
  /** column name */
  EmergencyContactName = 'emergencyContactName',
  /** column name */
  EmergencyContactNumber = 'emergencyContactNumber',
  /** column name */
  ExtensionName = 'extensionName',
  /** column name */
  FemaleCount = 'femaleCount',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GovernmentIdNo = 'governmentIdNo',
  /** column name */
  GovernmentIdType = 'governmentIdType',
  /** column name */
  HouseLotBldgNo = 'houseLotBldgNo',
  /** column name */
  Id = 'id',
  /** column name */
  IpMembership = 'ipMembership',
  /** column name */
  Is4psBeneficiary = 'is4psBeneficiary',
  /** column name */
  IsHouseholdHead = 'isHouseholdHead',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MaleCount = 'maleCount',
  /** column name */
  MiddleName = 'middleName',
  /** column name */
  MothersMaidenName = 'mothersMaidenName',
  /** column name */
  Municipality = 'municipality',
  /** column name */
  NameOfHouseholdHead = 'nameOfHouseholdHead',
  /** column name */
  NameOfSpouse = 'nameOfSpouse',
  /** column name */
  PersonWithDisability = 'personWithDisability',
  /** column name */
  PlaceOfBirth = 'placeOfBirth',
  /** column name */
  Province = 'province',
  /** column name */
  ReferenceNo = 'referenceNo',
  /** column name */
  Region = 'region',
  /** column name */
  RelationshipToHouseholdHead = 'relationshipToHouseholdHead',
  /** column name */
  Religion = 'religion',
  /** column name */
  Sex = 'sex',
  /** column name */
  StreetSitioSubdv = 'streetSitioSubdv',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type HouseholdUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdSetInput>
  where: HouseholdBoolExp
}

/** aggregate var_pop on columns */
export type HouseholdVar_PopFields = {
  __typename?: 'HouseholdVar_popFields'
  civilStatus?: Maybe<Scalars['Float']>
  femaleCount?: Maybe<Scalars['Float']>
  maleCount?: Maybe<Scalars['Float']>
  sex?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type HouseholdVar_SampFields = {
  __typename?: 'HouseholdVar_sampFields'
  civilStatus?: Maybe<Scalars['Float']>
  femaleCount?: Maybe<Scalars['Float']>
  maleCount?: Maybe<Scalars['Float']>
  sex?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type HouseholdVarianceFields = {
  __typename?: 'HouseholdVarianceFields'
  civilStatus?: Maybe<Scalars['Float']>
  femaleCount?: Maybe<Scalars['Float']>
  maleCount?: Maybe<Scalars['Float']>
  sex?: Maybe<Scalars['Float']>
}

/** columns and relationships of "householdView" */
export type HouseholdView = {
  __typename?: 'HouseholdView'
  barangay: Scalars['String']
  id: Scalars['uuid']
  mainLivelihood: Scalars['jsonb']
  name: Scalars['String']
  referenceNo: Scalars['String']
}

/** columns and relationships of "householdView" */
export type HouseholdViewMainLivelihoodArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "householdView" */
export type HouseholdViewAggregate = {
  __typename?: 'HouseholdViewAggregate'
  aggregate?: Maybe<HouseholdViewAggregateFields>
  nodes: Array<HouseholdView>
}

/** aggregate fields of "householdView" */
export type HouseholdViewAggregateFields = {
  __typename?: 'HouseholdViewAggregateFields'
  count: Scalars['Int']
  max?: Maybe<HouseholdViewMaxFields>
  min?: Maybe<HouseholdViewMinFields>
}

/** aggregate fields of "householdView" */
export type HouseholdViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdViewSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "householdView". All fields are combined with a logical 'AND'. */
export type HouseholdViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdViewBoolExp>>
  _not?: InputMaybe<HouseholdViewBoolExp>
  _or?: InputMaybe<Array<HouseholdViewBoolExp>>
  barangay?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  mainLivelihood?: InputMaybe<JsonbComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  referenceNo?: InputMaybe<StringComparisonExp>
}

/** aggregate max on columns */
export type HouseholdViewMaxFields = {
  __typename?: 'HouseholdViewMaxFields'
  barangay?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  referenceNo?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type HouseholdViewMinFields = {
  __typename?: 'HouseholdViewMinFields'
  barangay?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  referenceNo?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "householdView". */
export type HouseholdViewOrderBy = {
  barangay?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  mainLivelihood?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  referenceNo?: InputMaybe<OrderBy>
}

/** select columns of table "householdView" */
export enum HouseholdViewSelectColumn {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  Id = 'id',
  /** column name */
  MainLivelihood = 'mainLivelihood',
  /** column name */
  Name = 'name',
  /** column name */
  ReferenceNo = 'referenceNo',
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** columns and relationships of "inventoryOfLivestock" */
export type InventoryOfLivestock = {
  __typename?: 'InventoryOfLivestock'
  commodityId?: Maybe<Scalars['uuid']>
  count: Scalars['Int']
  name: Scalars['String']
  sum?: Maybe<Scalars['float8']>
  year: Scalars['Int']
}

/** aggregated selection of "inventoryOfLivestock" */
export type InventoryOfLivestockAggregate = {
  __typename?: 'InventoryOfLivestockAggregate'
  aggregate?: Maybe<InventoryOfLivestockAggregateFields>
  nodes: Array<InventoryOfLivestock>
}

/** aggregate fields of "inventoryOfLivestock" */
export type InventoryOfLivestockAggregateFields = {
  __typename?: 'InventoryOfLivestockAggregateFields'
  avg?: Maybe<InventoryOfLivestockAvgFields>
  count: Scalars['Int']
  max?: Maybe<InventoryOfLivestockMaxFields>
  min?: Maybe<InventoryOfLivestockMinFields>
  stddev?: Maybe<InventoryOfLivestockStddevFields>
  stddevPop?: Maybe<InventoryOfLivestockStddev_PopFields>
  stddevSamp?: Maybe<InventoryOfLivestockStddev_SampFields>
  sum?: Maybe<InventoryOfLivestockSumFields>
  varPop?: Maybe<InventoryOfLivestockVar_PopFields>
  varSamp?: Maybe<InventoryOfLivestockVar_SampFields>
  variance?: Maybe<InventoryOfLivestockVarianceFields>
}

/** aggregate fields of "inventoryOfLivestock" */
export type InventoryOfLivestockAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<InventoryOfLivestockSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type InventoryOfLivestockAvgFields = {
  __typename?: 'InventoryOfLivestockAvgFields'
  sum?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "inventoryOfLivestock". All fields are combined with a logical 'AND'. */
export type InventoryOfLivestockBoolExp = {
  _and?: InputMaybe<Array<InventoryOfLivestockBoolExp>>
  _not?: InputMaybe<InventoryOfLivestockBoolExp>
  _or?: InputMaybe<Array<InventoryOfLivestockBoolExp>>
  commodityId?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  sum?: InputMaybe<Float8ComparisonExp>
  year?: InputMaybe<IntComparisonExp>
}

/** aggregate max on columns */
export type InventoryOfLivestockMaxFields = {
  __typename?: 'InventoryOfLivestockMaxFields'
  commodityId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  sum?: Maybe<Scalars['float8']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type InventoryOfLivestockMinFields = {
  __typename?: 'InventoryOfLivestockMinFields'
  commodityId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  sum?: Maybe<Scalars['float8']>
  year?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "inventoryOfLivestock". */
export type InventoryOfLivestockOrderBy = {
  commodityId?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  sum?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** select columns of table "inventoryOfLivestock" */
export enum InventoryOfLivestockSelectColumn {
  /** column name */
  CommodityId = 'commodityId',
  /** column name */
  Name = 'name',
  /** column name */
  Sum = 'sum',
  /** column name */
  Year = 'year',
}

/** aggregate stddev on columns */
export type InventoryOfLivestockStddevFields = {
  __typename?: 'InventoryOfLivestockStddevFields'
  sum?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type InventoryOfLivestockStddev_PopFields = {
  __typename?: 'InventoryOfLivestockStddev_popFields'
  sum?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type InventoryOfLivestockStddev_SampFields = {
  __typename?: 'InventoryOfLivestockStddev_sampFields'
  sum?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type InventoryOfLivestockSumFields = {
  __typename?: 'InventoryOfLivestockSumFields'
  sum?: Maybe<Scalars['float8']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type InventoryOfLivestockVar_PopFields = {
  __typename?: 'InventoryOfLivestockVar_popFields'
  sum?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type InventoryOfLivestockVar_SampFields = {
  __typename?: 'InventoryOfLivestockVar_sampFields'
  sum?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type InventoryOfLivestockVarianceFields = {
  __typename?: 'InventoryOfLivestockVarianceFields'
  sum?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>
  _eq?: InputMaybe<Scalars['jsonb']>
  _gt?: InputMaybe<Scalars['jsonb']>
  _gte?: InputMaybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']>>
  _in?: InputMaybe<Array<Scalars['jsonb']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['jsonb']>
  _lte?: InputMaybe<Scalars['jsonb']>
  _neq?: InputMaybe<Scalars['jsonb']>
  _nin?: InputMaybe<Array<Scalars['jsonb']>>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST',
}

/** columns and relationships of "produce" */
export type Produce = {
  __typename?: 'Produce'
  areaUsed: Scalars['float8']
  commodityId: Scalars['uuid']
  commodityName: Scalars['String']
  commodityType: Scalars['String']
  createdAt: Scalars['timestamp']
  farmId: Scalars['uuid']
  farmName: Scalars['String']
  householdId: Scalars['uuid']
  householdName?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  organicPractitioner: Scalars['Boolean']
  produce: Scalars['float8']
  produceInUnit: Scalars['float8']
  unit: Scalars['String']
  year: Scalars['Int']
}

/** aggregated selection of "produce" */
export type ProduceAggregate = {
  __typename?: 'ProduceAggregate'
  aggregate?: Maybe<ProduceAggregateFields>
  nodes: Array<Produce>
}

/** aggregate fields of "produce" */
export type ProduceAggregateFields = {
  __typename?: 'ProduceAggregateFields'
  avg?: Maybe<ProduceAvgFields>
  count: Scalars['Int']
  max?: Maybe<ProduceMaxFields>
  min?: Maybe<ProduceMinFields>
  stddev?: Maybe<ProduceStddevFields>
  stddevPop?: Maybe<ProduceStddev_PopFields>
  stddevSamp?: Maybe<ProduceStddev_SampFields>
  sum?: Maybe<ProduceSumFields>
  varPop?: Maybe<ProduceVar_PopFields>
  varSamp?: Maybe<ProduceVar_SampFields>
  variance?: Maybe<ProduceVarianceFields>
}

/** aggregate fields of "produce" */
export type ProduceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProduceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ProduceAvgFields = {
  __typename?: 'ProduceAvgFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "produce". All fields are combined with a logical 'AND'. */
export type ProduceBoolExp = {
  _and?: InputMaybe<Array<ProduceBoolExp>>
  _not?: InputMaybe<ProduceBoolExp>
  _or?: InputMaybe<Array<ProduceBoolExp>>
  areaUsed?: InputMaybe<Float8ComparisonExp>
  commodityId?: InputMaybe<UuidComparisonExp>
  commodityName?: InputMaybe<StringComparisonExp>
  commodityType?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  farmId?: InputMaybe<UuidComparisonExp>
  farmName?: InputMaybe<StringComparisonExp>
  householdId?: InputMaybe<UuidComparisonExp>
  householdName?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  organicPractitioner?: InputMaybe<BooleanComparisonExp>
  produce?: InputMaybe<Float8ComparisonExp>
  produceInUnit?: InputMaybe<Float8ComparisonExp>
  unit?: InputMaybe<StringComparisonExp>
  year?: InputMaybe<IntComparisonExp>
}

/** aggregate max on columns */
export type ProduceMaxFields = {
  __typename?: 'ProduceMaxFields'
  areaUsed?: Maybe<Scalars['float8']>
  commodityId?: Maybe<Scalars['uuid']>
  commodityName?: Maybe<Scalars['String']>
  commodityType?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmId?: Maybe<Scalars['uuid']>
  farmName?: Maybe<Scalars['String']>
  householdId?: Maybe<Scalars['uuid']>
  householdName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  produce?: Maybe<Scalars['float8']>
  produceInUnit?: Maybe<Scalars['float8']>
  unit?: Maybe<Scalars['String']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type ProduceMinFields = {
  __typename?: 'ProduceMinFields'
  areaUsed?: Maybe<Scalars['float8']>
  commodityId?: Maybe<Scalars['uuid']>
  commodityName?: Maybe<Scalars['String']>
  commodityType?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmId?: Maybe<Scalars['uuid']>
  farmName?: Maybe<Scalars['String']>
  householdId?: Maybe<Scalars['uuid']>
  householdName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  produce?: Maybe<Scalars['float8']>
  produceInUnit?: Maybe<Scalars['float8']>
  unit?: Maybe<Scalars['String']>
  year?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "produce". */
export type ProduceOrderBy = {
  areaUsed?: InputMaybe<OrderBy>
  commodityId?: InputMaybe<OrderBy>
  commodityName?: InputMaybe<OrderBy>
  commodityType?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  farmId?: InputMaybe<OrderBy>
  farmName?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  householdName?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  organicPractitioner?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  unit?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** select columns of table "produce" */
export enum ProduceSelectColumn {
  /** column name */
  AreaUsed = 'areaUsed',
  /** column name */
  CommodityId = 'commodityId',
  /** column name */
  CommodityName = 'commodityName',
  /** column name */
  CommodityType = 'commodityType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FarmId = 'farmId',
  /** column name */
  FarmName = 'farmName',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  HouseholdName = 'householdName',
  /** column name */
  Id = 'id',
  /** column name */
  OrganicPractitioner = 'organicPractitioner',
  /** column name */
  Produce = 'produce',
  /** column name */
  ProduceInUnit = 'produceInUnit',
  /** column name */
  Unit = 'unit',
  /** column name */
  Year = 'year',
}

/** aggregate stddev on columns */
export type ProduceStddevFields = {
  __typename?: 'ProduceStddevFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type ProduceStddev_PopFields = {
  __typename?: 'ProduceStddev_popFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type ProduceStddev_SampFields = {
  __typename?: 'ProduceStddev_sampFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type ProduceSumFields = {
  __typename?: 'ProduceSumFields'
  areaUsed?: Maybe<Scalars['float8']>
  produce?: Maybe<Scalars['float8']>
  produceInUnit?: Maybe<Scalars['float8']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type ProduceVar_PopFields = {
  __typename?: 'ProduceVar_popFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type ProduceVar_SampFields = {
  __typename?: 'ProduceVar_sampFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ProduceVarianceFields = {
  __typename?: 'ProduceVarianceFields'
  areaUsed?: Maybe<Scalars['Float']>
  produce?: Maybe<Scalars['Float']>
  produceInUnit?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** columns and relationships of "program" */
export type Program = {
  __typename?: 'Program'
  createdAt: Scalars['timestamp']
  dateEnd?: Maybe<Scalars['date']>
  dateStart: Scalars['date']
  description: Scalars['String']
  id: Scalars['uuid']
  name: Scalars['String']
  sponsoringAgency: Scalars['String']
  type: Scalars['String']
  updatedAt: Scalars['timestamp']
}

/** aggregated selection of "program" */
export type ProgramAggregate = {
  __typename?: 'ProgramAggregate'
  aggregate?: Maybe<ProgramAggregateFields>
  nodes: Array<Program>
}

/** aggregate fields of "program" */
export type ProgramAggregateFields = {
  __typename?: 'ProgramAggregateFields'
  count: Scalars['Int']
  max?: Maybe<ProgramMaxFields>
  min?: Maybe<ProgramMinFields>
}

/** aggregate fields of "program" */
export type ProgramAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProgramSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** columns and relationships of "programBeneficiaries" */
export type ProgramBeneficiaries = {
  __typename?: 'ProgramBeneficiaries'
  barangay: Scalars['String']
  commodities: Scalars['jsonb']
  commodityIds?: Maybe<Scalars['jsonb']>
  commodityNames?: Maybe<Scalars['jsonb']>
  createdAt: Scalars['timestamp']
  farmSize: Scalars['numeric']
  firstName: Scalars['String']
  grossAnnualIncomeFarming: Scalars['numeric']
  grossAnnualIncomeNonfarming: Scalars['numeric']
  householdId: Scalars['uuid']
  id: Scalars['uuid']
  lastName: Scalars['String']
  mainLivelihood?: Maybe<Scalars['jsonb']>
  programId: Scalars['uuid']
  referenceNo: Scalars['String']
}

/** columns and relationships of "programBeneficiaries" */
export type ProgramBeneficiariesCommoditiesArgs = {
  path?: InputMaybe<Scalars['Int']>
}

/** columns and relationships of "programBeneficiaries" */
export type ProgramBeneficiariesCommodityIdsArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "programBeneficiaries" */
export type ProgramBeneficiariesCommodityNamesArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "programBeneficiaries" */
export type ProgramBeneficiariesMainLivelihoodArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "programBeneficiaries" */
export type ProgramBeneficiariesAggregate = {
  __typename?: 'ProgramBeneficiariesAggregate'
  aggregate?: Maybe<ProgramBeneficiariesAggregateFields>
  nodes: Array<ProgramBeneficiaries>
}

/** aggregate fields of "programBeneficiaries" */
export type ProgramBeneficiariesAggregateFields = {
  __typename?: 'ProgramBeneficiariesAggregateFields'
  avg?: Maybe<ProgramBeneficiariesAvgFields>
  count: Scalars['Int']
  max?: Maybe<ProgramBeneficiariesMaxFields>
  min?: Maybe<ProgramBeneficiariesMinFields>
  stddev?: Maybe<ProgramBeneficiariesStddevFields>
  stddevPop?: Maybe<ProgramBeneficiariesStddev_PopFields>
  stddevSamp?: Maybe<ProgramBeneficiariesStddev_SampFields>
  sum?: Maybe<ProgramBeneficiariesSumFields>
  varPop?: Maybe<ProgramBeneficiariesVar_PopFields>
  varSamp?: Maybe<ProgramBeneficiariesVar_SampFields>
  variance?: Maybe<ProgramBeneficiariesVarianceFields>
}

/** aggregate fields of "programBeneficiaries" */
export type ProgramBeneficiariesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProgramBeneficiariesSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ProgramBeneficiariesAvgFields = {
  __typename?: 'ProgramBeneficiariesAvgFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "programBeneficiaries". All fields are combined with a logical 'AND'. */
export type ProgramBeneficiariesBoolExp = {
  _and?: InputMaybe<Array<ProgramBeneficiariesBoolExp>>
  _not?: InputMaybe<ProgramBeneficiariesBoolExp>
  _or?: InputMaybe<Array<ProgramBeneficiariesBoolExp>>
  barangay?: InputMaybe<StringComparisonExp>
  commodityIds?: InputMaybe<JsonbComparisonExp>
  commodityNames?: InputMaybe<JsonbComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  farmSize?: InputMaybe<NumericComparisonExp>
  firstName?: InputMaybe<StringComparisonExp>
  grossAnnualIncomeFarming?: InputMaybe<NumericComparisonExp>
  grossAnnualIncomeNonfarming?: InputMaybe<NumericComparisonExp>
  householdId?: InputMaybe<UuidComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  lastName?: InputMaybe<StringComparisonExp>
  mainLivelihood?: InputMaybe<JsonbComparisonExp>
  programId?: InputMaybe<UuidComparisonExp>
  referenceNo?: InputMaybe<StringComparisonExp>
}

/** aggregate max on columns */
export type ProgramBeneficiariesMaxFields = {
  __typename?: 'ProgramBeneficiariesMaxFields'
  barangay?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmSize?: Maybe<Scalars['numeric']>
  firstName?: Maybe<Scalars['String']>
  grossAnnualIncomeFarming?: Maybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['numeric']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  lastName?: Maybe<Scalars['String']>
  programId?: Maybe<Scalars['uuid']>
  referenceNo?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type ProgramBeneficiariesMinFields = {
  __typename?: 'ProgramBeneficiariesMinFields'
  barangay?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamp']>
  farmSize?: Maybe<Scalars['numeric']>
  firstName?: Maybe<Scalars['String']>
  grossAnnualIncomeFarming?: Maybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['numeric']>
  householdId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  lastName?: Maybe<Scalars['String']>
  programId?: Maybe<Scalars['uuid']>
  referenceNo?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "programBeneficiaries". */
export type ProgramBeneficiariesOrderBy = {
  barangay?: InputMaybe<OrderBy>
  commodityIds?: InputMaybe<OrderBy>
  commodityNames?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  firstName?: InputMaybe<OrderBy>
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lastName?: InputMaybe<OrderBy>
  mainLivelihood?: InputMaybe<OrderBy>
  programId?: InputMaybe<OrderBy>
  referenceNo?: InputMaybe<OrderBy>
}

/** select columns of table "programBeneficiaries" */
export enum ProgramBeneficiariesSelectColumn {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  CommodityIds = 'commodityIds',
  /** column name */
  CommodityNames = 'commodityNames',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FarmSize = 'farmSize',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GrossAnnualIncomeFarming = 'grossAnnualIncomeFarming',
  /** column name */
  GrossAnnualIncomeNonfarming = 'grossAnnualIncomeNonfarming',
  /** column name */
  HouseholdId = 'householdId',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MainLivelihood = 'mainLivelihood',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  ReferenceNo = 'referenceNo',
}

/** aggregate stddev on columns */
export type ProgramBeneficiariesStddevFields = {
  __typename?: 'ProgramBeneficiariesStddevFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type ProgramBeneficiariesStddev_PopFields = {
  __typename?: 'ProgramBeneficiariesStddev_popFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type ProgramBeneficiariesStddev_SampFields = {
  __typename?: 'ProgramBeneficiariesStddev_sampFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type ProgramBeneficiariesSumFields = {
  __typename?: 'ProgramBeneficiariesSumFields'
  farmSize?: Maybe<Scalars['numeric']>
  grossAnnualIncomeFarming?: Maybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['numeric']>
}

/** aggregate var_pop on columns */
export type ProgramBeneficiariesVar_PopFields = {
  __typename?: 'ProgramBeneficiariesVar_popFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type ProgramBeneficiariesVar_SampFields = {
  __typename?: 'ProgramBeneficiariesVar_sampFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ProgramBeneficiariesVarianceFields = {
  __typename?: 'ProgramBeneficiariesVarianceFields'
  farmSize?: Maybe<Scalars['Float']>
  grossAnnualIncomeFarming?: Maybe<Scalars['Float']>
  grossAnnualIncomeNonfarming?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "program". All fields are combined with a logical 'AND'. */
export type ProgramBoolExp = {
  _and?: InputMaybe<Array<ProgramBoolExp>>
  _not?: InputMaybe<ProgramBoolExp>
  _or?: InputMaybe<Array<ProgramBoolExp>>
  createdAt?: InputMaybe<TimestampComparisonExp>
  dateEnd?: InputMaybe<DateComparisonExp>
  dateStart?: InputMaybe<DateComparisonExp>
  description?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  sponsoringAgency?: InputMaybe<StringComparisonExp>
  type?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
}

/** unique or primary key constraints on table "program" */
export enum ProgramConstraint {
  /** unique or primary key constraint on columns "id" */
  ProgramPk = 'program_pk',
}

/** input type for inserting data into table "program" */
export type ProgramInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>
  dateEnd?: InputMaybe<Scalars['date']>
  dateStart?: InputMaybe<Scalars['date']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  sponsoringAgency?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type ProgramMaxFields = {
  __typename?: 'ProgramMaxFields'
  createdAt?: Maybe<Scalars['timestamp']>
  dateEnd?: Maybe<Scalars['date']>
  dateStart?: Maybe<Scalars['date']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  sponsoringAgency?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type ProgramMinFields = {
  __typename?: 'ProgramMinFields'
  createdAt?: Maybe<Scalars['timestamp']>
  dateEnd?: Maybe<Scalars['date']>
  dateStart?: Maybe<Scalars['date']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  sponsoringAgency?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "program" */
export type ProgramMutationResponse = {
  __typename?: 'ProgramMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Program>
}

/** on_conflict condition type for table "program" */
export type ProgramOnConflict = {
  constraint: ProgramConstraint
  update_columns?: Array<ProgramUpdateColumn>
  where?: InputMaybe<ProgramBoolExp>
}

/** Ordering options when selecting data from "program". */
export type ProgramOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  dateEnd?: InputMaybe<OrderBy>
  dateStart?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  sponsoringAgency?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: program */
export type ProgramPkColumnsInput = {
  id: Scalars['uuid']
}

/** select columns of table "program" */
export enum ProgramSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEnd = 'dateEnd',
  /** column name */
  DateStart = 'dateStart',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SponsoringAgency = 'sponsoringAgency',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "program" */
export type ProgramSetInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>
  dateEnd?: InputMaybe<Scalars['date']>
  dateStart?: InputMaybe<Scalars['date']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  sponsoringAgency?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** update columns of table "program" */
export enum ProgramUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEnd = 'dateEnd',
  /** column name */
  DateStart = 'dateStart',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SponsoringAgency = 'sponsoringAgency',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type ProgramUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProgramSetInput>
  where: ProgramBoolExp
}

/** columns and relationships of "registeredHouseholdPerYear" */
export type RegisteredHouseholdPerYear = {
  __typename?: 'RegisteredHouseholdPerYear'
  count?: Maybe<Scalars['bigint']>
  year?: Maybe<Scalars['Int']>
}

/** aggregated selection of "registeredHouseholdPerYear" */
export type RegisteredHouseholdPerYearAggregate = {
  __typename?: 'RegisteredHouseholdPerYearAggregate'
  aggregate?: Maybe<RegisteredHouseholdPerYearAggregateFields>
  nodes: Array<RegisteredHouseholdPerYear>
}

/** aggregate fields of "registeredHouseholdPerYear" */
export type RegisteredHouseholdPerYearAggregateFields = {
  __typename?: 'RegisteredHouseholdPerYearAggregateFields'
  avg?: Maybe<RegisteredHouseholdPerYearAvgFields>
  count: Scalars['Int']
  max?: Maybe<RegisteredHouseholdPerYearMaxFields>
  min?: Maybe<RegisteredHouseholdPerYearMinFields>
  stddev?: Maybe<RegisteredHouseholdPerYearStddevFields>
  stddevPop?: Maybe<RegisteredHouseholdPerYearStddev_PopFields>
  stddevSamp?: Maybe<RegisteredHouseholdPerYearStddev_SampFields>
  sum?: Maybe<RegisteredHouseholdPerYearSumFields>
  varPop?: Maybe<RegisteredHouseholdPerYearVar_PopFields>
  varSamp?: Maybe<RegisteredHouseholdPerYearVar_SampFields>
  variance?: Maybe<RegisteredHouseholdPerYearVarianceFields>
}

/** aggregate fields of "registeredHouseholdPerYear" */
export type RegisteredHouseholdPerYearAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RegisteredHouseholdPerYearSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type RegisteredHouseholdPerYearAvgFields = {
  __typename?: 'RegisteredHouseholdPerYearAvgFields'
  count?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "registeredHouseholdPerYear". All fields are combined with a logical 'AND'. */
export type RegisteredHouseholdPerYearBoolExp = {
  _and?: InputMaybe<Array<RegisteredHouseholdPerYearBoolExp>>
  _not?: InputMaybe<RegisteredHouseholdPerYearBoolExp>
  _or?: InputMaybe<Array<RegisteredHouseholdPerYearBoolExp>>
  count?: InputMaybe<BigintComparisonExp>
  year?: InputMaybe<IntComparisonExp>
}

/** aggregate max on columns */
export type RegisteredHouseholdPerYearMaxFields = {
  __typename?: 'RegisteredHouseholdPerYearMaxFields'
  count?: Maybe<Scalars['bigint']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type RegisteredHouseholdPerYearMinFields = {
  __typename?: 'RegisteredHouseholdPerYearMinFields'
  count?: Maybe<Scalars['bigint']>
  year?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "registeredHouseholdPerYear". */
export type RegisteredHouseholdPerYearOrderBy = {
  count?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** select columns of table "registeredHouseholdPerYear" */
export enum RegisteredHouseholdPerYearSelectColumn {
  /** column name */
  Count = 'count',
  /** column name */
  Year = 'year',
}

/** aggregate stddev on columns */
export type RegisteredHouseholdPerYearStddevFields = {
  __typename?: 'RegisteredHouseholdPerYearStddevFields'
  count?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type RegisteredHouseholdPerYearStddev_PopFields = {
  __typename?: 'RegisteredHouseholdPerYearStddev_popFields'
  count?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type RegisteredHouseholdPerYearStddev_SampFields = {
  __typename?: 'RegisteredHouseholdPerYearStddev_sampFields'
  count?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type RegisteredHouseholdPerYearSumFields = {
  __typename?: 'RegisteredHouseholdPerYearSumFields'
  count?: Maybe<Scalars['bigint']>
  year?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type RegisteredHouseholdPerYearVar_PopFields = {
  __typename?: 'RegisteredHouseholdPerYearVar_popFields'
  count?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type RegisteredHouseholdPerYearVar_SampFields = {
  __typename?: 'RegisteredHouseholdPerYearVar_sampFields'
  count?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type RegisteredHouseholdPerYearVarianceFields = {
  __typename?: 'RegisteredHouseholdPerYearVarianceFields'
  count?: Maybe<Scalars['Float']>
  year?: Maybe<Scalars['Float']>
}

/** columns and relationships of "session" */
export type Session = {
  __typename?: 'Session'
  expires?: Maybe<Scalars['timestamptz']>
  id: Scalars['uuid']
  sessionToken: Scalars['String']
  /** An object relationship */
  user: User
  userId: Scalars['uuid']
}

/** aggregated selection of "session" */
export type SessionAggregate = {
  __typename?: 'SessionAggregate'
  aggregate?: Maybe<SessionAggregateFields>
  nodes: Array<Session>
}

/** aggregate fields of "session" */
export type SessionAggregateFields = {
  __typename?: 'SessionAggregateFields'
  count: Scalars['Int']
  max?: Maybe<SessionMaxFields>
  min?: Maybe<SessionMinFields>
}

/** aggregate fields of "session" */
export type SessionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SessionSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "session". All fields are combined with a logical 'AND'. */
export type SessionBoolExp = {
  _and?: InputMaybe<Array<SessionBoolExp>>
  _not?: InputMaybe<SessionBoolExp>
  _or?: InputMaybe<Array<SessionBoolExp>>
  expires?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  sessionToken?: InputMaybe<StringComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userId?: InputMaybe<UuidComparisonExp>
}

/** unique or primary key constraints on table "session" */
export enum SessionConstraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey',
}

/** input type for inserting data into table "session" */
export type SessionInsertInput = {
  expires?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  sessionToken?: InputMaybe<Scalars['String']>
  user?: InputMaybe<UserObjRelInsertInput>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type SessionMaxFields = {
  __typename?: 'SessionMaxFields'
  expires?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  sessionToken?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type SessionMinFields = {
  __typename?: 'SessionMinFields'
  expires?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  sessionToken?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "session" */
export type SessionMutationResponse = {
  __typename?: 'SessionMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Session>
}

/** on_conflict condition type for table "session" */
export type SessionOnConflict = {
  constraint: SessionConstraint
  update_columns?: Array<SessionUpdateColumn>
  where?: InputMaybe<SessionBoolExp>
}

/** Ordering options when selecting data from "session". */
export type SessionOrderBy = {
  expires?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  sessionToken?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: session */
export type SessionPkColumnsInput = {
  id: Scalars['uuid']
}

/** select columns of table "session" */
export enum SessionSelectColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "session" */
export type SessionSetInput = {
  expires?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  sessionToken?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "session" */
export enum SessionUpdateColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId',
}

export type SessionUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SessionSetInput>
  where: SessionBoolExp
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _isNull?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']>
  _gt?: InputMaybe<Scalars['timestamp']>
  _gte?: InputMaybe<Scalars['timestamp']>
  _in?: InputMaybe<Array<Scalars['timestamp']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamp']>
  _lte?: InputMaybe<Scalars['timestamp']>
  _neq?: InputMaybe<Scalars['timestamp']>
  _nin?: InputMaybe<Array<Scalars['timestamp']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "user" */
export type User = {
  __typename?: 'User'
  /** An array relationship */
  accounts: Array<Account>
  /** An aggregate relationship */
  accountsAggregate: AccountAggregate
  active: Scalars['Boolean']
  createdAt: Scalars['timestamp']
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['timestamptz']>
  firstName: Scalars['String']
  id: Scalars['uuid']
  image?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  name?: Maybe<Scalars['String']>
  role: Scalars['userRoleEnum']
  updatedAt: Scalars['timestamp']
}

/** columns and relationships of "user" */
export type UserAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AccountOrderBy>>
  where?: InputMaybe<AccountBoolExp>
}

/** columns and relationships of "user" */
export type UserAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AccountOrderBy>>
  where?: InputMaybe<AccountBoolExp>
}

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'UserAggregate'
  aggregate?: Maybe<UserAggregateFields>
  nodes: Array<User>
}

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'UserAggregateFields'
  count: Scalars['Int']
  max?: Maybe<UserMaxFields>
  min?: Maybe<UserMinFields>
}

/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>
  _not?: InputMaybe<UserBoolExp>
  _or?: InputMaybe<Array<UserBoolExp>>
  accounts?: InputMaybe<AccountBoolExp>
  active?: InputMaybe<BooleanComparisonExp>
  createdAt?: InputMaybe<TimestampComparisonExp>
  email?: InputMaybe<StringComparisonExp>
  emailVerified?: InputMaybe<TimestamptzComparisonExp>
  firstName?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  image?: InputMaybe<StringComparisonExp>
  lastName?: InputMaybe<StringComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  role?: InputMaybe<UserRoleEnumComparisonExp>
  updatedAt?: InputMaybe<TimestampComparisonExp>
}

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  accounts?: InputMaybe<AccountArrRelInsertInput>
  active?: InputMaybe<Scalars['Boolean']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  email?: InputMaybe<Scalars['String']>
  emailVerified?: InputMaybe<Scalars['timestamptz']>
  firstName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  image?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['userRoleEnum']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'UserMaxFields'
  createdAt?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['timestamptz']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['userRoleEnum']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'UserMinFields'
  createdAt?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  emailVerified?: Maybe<Scalars['timestamptz']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['userRoleEnum']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'UserMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User>
}

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>
}

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint
  update_columns?: Array<UserUpdateColumn>
  where?: InputMaybe<UserBoolExp>
}

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  accountsAggregate?: InputMaybe<AccountAggregateOrderBy>
  active?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  email?: InputMaybe<OrderBy>
  emailVerified?: InputMaybe<OrderBy>
  firstName?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  image?: InputMaybe<OrderBy>
  lastName?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  role?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['uuid']
}

/** Boolean expression to compare columns of type "userRoleEnum". All fields are combined with logical 'AND'. */
export type UserRoleEnumComparisonExp = {
  _eq?: InputMaybe<Scalars['userRoleEnum']>
  _gt?: InputMaybe<Scalars['userRoleEnum']>
  _gte?: InputMaybe<Scalars['userRoleEnum']>
  _in?: InputMaybe<Array<Scalars['userRoleEnum']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['userRoleEnum']>
  _lte?: InputMaybe<Scalars['userRoleEnum']>
  _neq?: InputMaybe<Scalars['userRoleEnum']>
  _nin?: InputMaybe<Array<Scalars['userRoleEnum']>>
}

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  active?: InputMaybe<Scalars['Boolean']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  email?: InputMaybe<Scalars['String']>
  emailVerified?: InputMaybe<Scalars['timestamptz']>
  firstName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  image?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['userRoleEnum']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type UserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>
  where: UserBoolExp
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

/** columns and relationships of "verificationToken" */
export type VerificationToken = {
  __typename?: 'VerificationToken'
  expires?: Maybe<Scalars['timestamptz']>
  identifier: Scalars['String']
  token: Scalars['String']
}

/** aggregated selection of "verificationToken" */
export type VerificationTokenAggregate = {
  __typename?: 'VerificationTokenAggregate'
  aggregate?: Maybe<VerificationTokenAggregateFields>
  nodes: Array<VerificationToken>
}

/** aggregate fields of "verificationToken" */
export type VerificationTokenAggregateFields = {
  __typename?: 'VerificationTokenAggregateFields'
  count: Scalars['Int']
  max?: Maybe<VerificationTokenMaxFields>
  min?: Maybe<VerificationTokenMinFields>
}

/** aggregate fields of "verificationToken" */
export type VerificationTokenAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VerificationTokenSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "verificationToken". All fields are combined with a logical 'AND'. */
export type VerificationTokenBoolExp = {
  _and?: InputMaybe<Array<VerificationTokenBoolExp>>
  _not?: InputMaybe<VerificationTokenBoolExp>
  _or?: InputMaybe<Array<VerificationTokenBoolExp>>
  expires?: InputMaybe<TimestamptzComparisonExp>
  identifier?: InputMaybe<StringComparisonExp>
  token?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "verificationToken" */
export enum VerificationTokenConstraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = 'verification_tokens_pkey',
}

/** input type for inserting data into table "verificationToken" */
export type VerificationTokenInsertInput = {
  expires?: InputMaybe<Scalars['timestamptz']>
  identifier?: InputMaybe<Scalars['String']>
  token?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type VerificationTokenMaxFields = {
  __typename?: 'VerificationTokenMaxFields'
  expires?: Maybe<Scalars['timestamptz']>
  identifier?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type VerificationTokenMinFields = {
  __typename?: 'VerificationTokenMinFields'
  expires?: Maybe<Scalars['timestamptz']>
  identifier?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "verificationToken" */
export type VerificationTokenMutationResponse = {
  __typename?: 'VerificationTokenMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<VerificationToken>
}

/** on_conflict condition type for table "verificationToken" */
export type VerificationTokenOnConflict = {
  constraint: VerificationTokenConstraint
  update_columns?: Array<VerificationTokenUpdateColumn>
  where?: InputMaybe<VerificationTokenBoolExp>
}

/** Ordering options when selecting data from "verificationToken". */
export type VerificationTokenOrderBy = {
  expires?: InputMaybe<OrderBy>
  identifier?: InputMaybe<OrderBy>
  token?: InputMaybe<OrderBy>
}

/** primary key columns input for table: verificationToken */
export type VerificationTokenPkColumnsInput = {
  token: Scalars['String']
}

/** select columns of table "verificationToken" */
export enum VerificationTokenSelectColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
}

/** input type for updating data in table "verificationToken" */
export type VerificationTokenSetInput = {
  expires?: InputMaybe<Scalars['timestamptz']>
  identifier?: InputMaybe<Scalars['String']>
  token?: InputMaybe<Scalars['String']>
}

/** update columns of table "verificationToken" */
export enum VerificationTokenUpdateColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
}

export type VerificationTokenUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VerificationTokenSetInput>
  where: VerificationTokenBoolExp
}

/** order by avg() on columns of table "account" */
export type Account_Avg_Order_By = {
  expiresAt?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
}

/** order by max() on columns of table "account" */
export type Account_Max_Order_By = {
  accessToken?: InputMaybe<OrderBy>
  expiresAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idToken?: InputMaybe<OrderBy>
  oauthToken?: InputMaybe<OrderBy>
  oauthTokenSecret?: InputMaybe<OrderBy>
  provider?: InputMaybe<OrderBy>
  providerAccountId?: InputMaybe<OrderBy>
  refreshToken?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
  scope?: InputMaybe<OrderBy>
  sessionState?: InputMaybe<OrderBy>
  tokenType?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "account" */
export type Account_Min_Order_By = {
  accessToken?: InputMaybe<OrderBy>
  expiresAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idToken?: InputMaybe<OrderBy>
  oauthToken?: InputMaybe<OrderBy>
  oauthTokenSecret?: InputMaybe<OrderBy>
  provider?: InputMaybe<OrderBy>
  providerAccountId?: InputMaybe<OrderBy>
  refreshToken?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
  scope?: InputMaybe<OrderBy>
  sessionState?: InputMaybe<OrderBy>
  tokenType?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** order by stddev() on columns of table "account" */
export type Account_Stddev_Order_By = {
  expiresAt?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
}

/** order by stddev_pop() on columns of table "account" */
export type Account_Stddev_Pop_Order_By = {
  expiresAt?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
}

/** order by stddev_samp() on columns of table "account" */
export type Account_Stddev_Samp_Order_By = {
  expiresAt?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "account" */
export type Account_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Account_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Account_StreamCursorValueInput = {
  accessToken?: InputMaybe<Scalars['String']>
  expiresAt?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['uuid']>
  idToken?: InputMaybe<Scalars['String']>
  oauthToken?: InputMaybe<Scalars['String']>
  oauthTokenSecret?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  providerAccountId?: InputMaybe<Scalars['String']>
  refreshToken?: InputMaybe<Scalars['String']>
  refreshTokenExpiresIn?: InputMaybe<Scalars['bigint']>
  scope?: InputMaybe<Scalars['String']>
  sessionState?: InputMaybe<Scalars['String']>
  tokenType?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** order by sum() on columns of table "account" */
export type Account_Sum_Order_By = {
  expiresAt?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
}

/** order by var_pop() on columns of table "account" */
export type Account_Var_Pop_Order_By = {
  expiresAt?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
}

/** order by var_samp() on columns of table "account" */
export type Account_Var_Samp_Order_By = {
  expiresAt?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
}

/** order by variance() on columns of table "account" */
export type Account_Variance_Order_By = {
  expiresAt?: InputMaybe<OrderBy>
  refreshTokenExpiresIn?: InputMaybe<OrderBy>
}

/** order by avg() on columns of table "annualInfo" */
export type AnnualInfo_Avg_Order_By = {
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by max() on columns of table "annualInfo" */
export type AnnualInfo_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  highestFormalEducation?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "annualInfo" */
export type AnnualInfo_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  highestFormalEducation?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by stddev() on columns of table "annualInfo" */
export type AnnualInfo_Stddev_Order_By = {
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by stddev_pop() on columns of table "annualInfo" */
export type AnnualInfo_Stddev_Pop_Order_By = {
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by stddev_samp() on columns of table "annualInfo" */
export type AnnualInfo_Stddev_Samp_Order_By = {
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "annualInfo" */
export type AnnualInfo_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AnnualInfo_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type AnnualInfo_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmworkerActivityType?: InputMaybe<Scalars['jsonb']>
  fisherActivityType?: InputMaybe<Scalars['jsonb']>
  grossAnnualIncomeFarming?: InputMaybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: InputMaybe<Scalars['numeric']>
  highestFormalEducation?: InputMaybe<Scalars['String']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  is4PsBeneficiary?: InputMaybe<Scalars['Boolean']>
  mainLivelihood?: InputMaybe<Scalars['jsonb']>
  personWithDisability?: InputMaybe<Scalars['Boolean']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
  year?: InputMaybe<Scalars['Int']>
}

/** order by sum() on columns of table "annualInfo" */
export type AnnualInfo_Sum_Order_By = {
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by var_pop() on columns of table "annualInfo" */
export type AnnualInfo_Var_Pop_Order_By = {
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by var_samp() on columns of table "annualInfo" */
export type AnnualInfo_Var_Samp_Order_By = {
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by variance() on columns of table "annualInfo" */
export type AnnualInfo_Variance_Order_By = {
  grossAnnualIncomeFarming?: InputMaybe<OrderBy>
  grossAnnualIncomeNonfarming?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "associationBeneficiaries" */
export type AssociationBeneficiaries_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AssociationBeneficiaries_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type AssociationBeneficiaries_StreamCursorValueInput = {
  active?: InputMaybe<Scalars['Boolean']>
  associationId?: InputMaybe<Scalars['uuid']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  programId?: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "associationPrograms" */
export type AssociationPrograms_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AssociationPrograms_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type AssociationPrograms_StreamCursorValueInput = {
  active?: InputMaybe<Scalars['Boolean']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  programIds?: InputMaybe<Scalars['jsonb']>
}

/** Streaming cursor of the table "associationToProgram" */
export type AssociationToProgram_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AssociationToProgram_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type AssociationToProgram_StreamCursorValueInput = {
  associationId?: InputMaybe<Scalars['uuid']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  programId?: InputMaybe<Scalars['uuid']>
  remarks?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** Streaming cursor of the table "association" */
export type Association_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Association_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Association_StreamCursorValueInput = {
  active?: InputMaybe<Scalars['Boolean']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** Streaming cursor of the table "averageAnnualIncome" */
export type AverageAnnualIncome_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AverageAnnualIncome_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type AverageAnnualIncome_StreamCursorValueInput = {
  annualIncomeFarming?: InputMaybe<Scalars['numeric']>
  annualIncomeNonfarming?: InputMaybe<Scalars['numeric']>
  averageinfo?: InputMaybe<Scalars['numeric']>
  year?: InputMaybe<Scalars['Int']>
}

/** order by avg() on columns of table "commodityProduce" */
export type CommodityProduce_Avg_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by max() on columns of table "commodityProduce" */
export type CommodityProduce_Max_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  commodityId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  farmId?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  unit?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "commodityProduce" */
export type CommodityProduce_Min_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  commodityId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  farmId?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  unit?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by stddev() on columns of table "commodityProduce" */
export type CommodityProduce_Stddev_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by stddev_pop() on columns of table "commodityProduce" */
export type CommodityProduce_Stddev_Pop_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by stddev_samp() on columns of table "commodityProduce" */
export type CommodityProduce_Stddev_Samp_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "commodityProduce" */
export type CommodityProduce_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CommodityProduce_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type CommodityProduce_StreamCursorValueInput = {
  areaUsed?: InputMaybe<Scalars['float8']>
  commodityId?: InputMaybe<Scalars['uuid']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmId?: InputMaybe<Scalars['uuid']>
  farmSize?: InputMaybe<Scalars['float8']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  organicPractitioner?: InputMaybe<Scalars['Boolean']>
  produce?: InputMaybe<Scalars['float8']>
  produceInUnit?: InputMaybe<Scalars['float8']>
  unit?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
  year?: InputMaybe<Scalars['Int']>
}

/** order by sum() on columns of table "commodityProduce" */
export type CommodityProduce_Sum_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by var_pop() on columns of table "commodityProduce" */
export type CommodityProduce_Var_Pop_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by var_samp() on columns of table "commodityProduce" */
export type CommodityProduce_Var_Samp_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** order by variance() on columns of table "commodityProduce" */
export type CommodityProduce_Variance_Order_By = {
  areaUsed?: InputMaybe<OrderBy>
  farmSize?: InputMaybe<OrderBy>
  produce?: InputMaybe<OrderBy>
  produceInUnit?: InputMaybe<OrderBy>
  year?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "commodity" */
export type Commodity_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Commodity_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Commodity_StreamCursorValueInput = {
  commodityType?: InputMaybe<Scalars['String']>
  conversionFactor?: InputMaybe<Scalars['numeric']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  unit?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** Streaming cursor of the table "cropProduce" */
export type CropProduce_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CropProduce_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type CropProduce_StreamCursorValueInput = {
  areaUsed?: InputMaybe<Scalars['numeric']>
  commodityId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  produce?: InputMaybe<Scalars['numeric']>
  year?: InputMaybe<Scalars['Int']>
  yield?: InputMaybe<Scalars['numeric']>
}

/** Streaming cursor of the table "farmView" */
export type FarmView_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FarmView_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type FarmView_StreamCursorValueInput = {
  barangay?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  firstName?: InputMaybe<Scalars['String']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  lastName?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['jsonb']>
  name?: InputMaybe<Scalars['String']>
  ownerName?: InputMaybe<Scalars['String']>
  ownershipType?: InputMaybe<Scalars['String']>
  sizeInHaTotal?: InputMaybe<Scalars['numeric']>
}

/** order by avg() on columns of table "farm" */
export type Farm_Avg_Order_By = {
  sizeInHaTotal?: InputMaybe<OrderBy>
}

/** order by max() on columns of table "farm" */
export type Farm_Max_Order_By = {
  barangay?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  farmType?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  municipality?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  ownerName?: InputMaybe<OrderBy>
  ownershipDocument?: InputMaybe<OrderBy>
  ownershipType?: InputMaybe<OrderBy>
  sizeInHaTotal?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "farm" */
export type Farm_Min_Order_By = {
  barangay?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  farmType?: InputMaybe<OrderBy>
  householdId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  municipality?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  ownerName?: InputMaybe<OrderBy>
  ownershipDocument?: InputMaybe<OrderBy>
  ownershipType?: InputMaybe<OrderBy>
  sizeInHaTotal?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** order by stddev() on columns of table "farm" */
export type Farm_Stddev_Order_By = {
  sizeInHaTotal?: InputMaybe<OrderBy>
}

/** order by stddev_pop() on columns of table "farm" */
export type Farm_Stddev_Pop_Order_By = {
  sizeInHaTotal?: InputMaybe<OrderBy>
}

/** order by stddev_samp() on columns of table "farm" */
export type Farm_Stddev_Samp_Order_By = {
  sizeInHaTotal?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "farm" */
export type Farm_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Farm_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Farm_StreamCursorValueInput = {
  barangay?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmType?: InputMaybe<Scalars['String']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  isAgrarianReformBeneficiary?: InputMaybe<Scalars['Boolean']>
  location?: InputMaybe<Scalars['jsonb']>
  municipality?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  ownerName?: InputMaybe<Scalars['String']>
  ownershipDocument?: InputMaybe<Scalars['String']>
  ownershipType?: InputMaybe<Scalars['String']>
  sizeInHaTotal?: InputMaybe<Scalars['numeric']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
  withinAncestralDomain?: InputMaybe<Scalars['Boolean']>
}

/** order by sum() on columns of table "farm" */
export type Farm_Sum_Order_By = {
  sizeInHaTotal?: InputMaybe<OrderBy>
}

/** order by var_pop() on columns of table "farm" */
export type Farm_Var_Pop_Order_By = {
  sizeInHaTotal?: InputMaybe<OrderBy>
}

/** order by var_samp() on columns of table "farm" */
export type Farm_Var_Samp_Order_By = {
  sizeInHaTotal?: InputMaybe<OrderBy>
}

/** order by variance() on columns of table "farm" */
export type Farm_Variance_Order_By = {
  sizeInHaTotal?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "fisheriesProduce" */
export type FisheriesProduce_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FisheriesProduce_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type FisheriesProduce_StreamCursorValueInput = {
  commodityId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  produce?: InputMaybe<Scalars['float8']>
  year?: InputMaybe<Scalars['Int']>
}

/** Streaming cursor of the table "householdPrograms" */
export type HouseholdPrograms_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdPrograms_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type HouseholdPrograms_StreamCursorValueInput = {
  barangay?: InputMaybe<Scalars['String']>
  commodities?: InputMaybe<Scalars['jsonb']>
  commodityIds?: InputMaybe<Scalars['jsonb']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmSize?: InputMaybe<Scalars['numeric']>
  firstName?: InputMaybe<Scalars['String']>
  grossAnnualIncomeFarming?: InputMaybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: InputMaybe<Scalars['numeric']>
  id?: InputMaybe<Scalars['uuid']>
  lastName?: InputMaybe<Scalars['String']>
  mainLivelihood?: InputMaybe<Scalars['jsonb']>
  programIds?: InputMaybe<Scalars['jsonb']>
  referenceNo?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "householdToProgram" */
export type HouseholdToProgram_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdToProgram_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type HouseholdToProgram_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  programId?: InputMaybe<Scalars['uuid']>
  remarks?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** Streaming cursor of the table "householdView" */
export type HouseholdView_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdView_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type HouseholdView_StreamCursorValueInput = {
  barangay?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  mainLivelihood?: InputMaybe<Scalars['jsonb']>
  name?: InputMaybe<Scalars['String']>
  referenceNo?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "household" */
export type Household_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Household_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Household_StreamCursorValueInput = {
  barangay?: InputMaybe<Scalars['String']>
  civilStatus?: InputMaybe<Scalars['Int']>
  contactNumber?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  dateOfBirth?: InputMaybe<Scalars['date']>
  emergencyContactName?: InputMaybe<Scalars['String']>
  emergencyContactNumber?: InputMaybe<Scalars['String']>
  extensionName?: InputMaybe<Scalars['String']>
  femaleCount?: InputMaybe<Scalars['Int']>
  firstName?: InputMaybe<Scalars['String']>
  governmentIdNo?: InputMaybe<Scalars['String']>
  governmentIdType?: InputMaybe<Scalars['String']>
  houseLotBldgNo?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  ipMembership?: InputMaybe<Scalars['String']>
  is4psBeneficiary?: InputMaybe<Scalars['Boolean']>
  isHouseholdHead?: InputMaybe<Scalars['Boolean']>
  lastName?: InputMaybe<Scalars['String']>
  maleCount?: InputMaybe<Scalars['Int']>
  middleName?: InputMaybe<Scalars['String']>
  mothersMaidenName?: InputMaybe<Scalars['String']>
  municipality?: InputMaybe<Scalars['String']>
  nameOfHouseholdHead?: InputMaybe<Scalars['String']>
  nameOfSpouse?: InputMaybe<Scalars['String']>
  personWithDisability?: InputMaybe<Scalars['Boolean']>
  placeOfBirth?: InputMaybe<Scalars['String']>
  province?: InputMaybe<Scalars['String']>
  referenceNo?: InputMaybe<Scalars['String']>
  region?: InputMaybe<Scalars['String']>
  relationshipToHouseholdHead?: InputMaybe<Scalars['String']>
  religion?: InputMaybe<Scalars['String']>
  sex?: InputMaybe<Scalars['Int']>
  streetSitioSubdv?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** Streaming cursor of the table "inventoryOfLivestock" */
export type InventoryOfLivestock_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: InventoryOfLivestock_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type InventoryOfLivestock_StreamCursorValueInput = {
  commodityId?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  sum?: InputMaybe<Scalars['float8']>
  year?: InputMaybe<Scalars['Int']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "account" */
  deleteAccount?: Maybe<AccountMutationResponse>
  /** delete single row from the table: "account" */
  deleteAccountByPk?: Maybe<Account>
  /** delete data from the table: "annualInfo" */
  deleteAnnualInfo?: Maybe<AnnualInfoMutationResponse>
  /** delete single row from the table: "annualInfo" */
  deleteAnnualInfoByPk?: Maybe<AnnualInfo>
  /** delete data from the table: "association" */
  deleteAssociation?: Maybe<AssociationMutationResponse>
  /** delete single row from the table: "association" */
  deleteAssociationByPk?: Maybe<Association>
  /** delete data from the table: "associationToProgram" */
  deleteAssociationToProgram?: Maybe<AssociationToProgramMutationResponse>
  /** delete data from the table: "commodity" */
  deleteCommodity?: Maybe<CommodityMutationResponse>
  /** delete single row from the table: "commodity" */
  deleteCommodityByPk?: Maybe<Commodity>
  /** delete data from the table: "commodityProduce" */
  deleteCommodityProduce?: Maybe<CommodityProduceMutationResponse>
  /** delete single row from the table: "commodityProduce" */
  deleteCommodityProduceByPk?: Maybe<CommodityProduce>
  /** delete data from the table: "farm" */
  deleteFarm?: Maybe<FarmMutationResponse>
  /** delete single row from the table: "farm" */
  deleteFarmByPk?: Maybe<Farm>
  /** delete data from the table: "household" */
  deleteHousehold?: Maybe<HouseholdMutationResponse>
  /** delete single row from the table: "household" */
  deleteHouseholdByPk?: Maybe<Household>
  /** delete data from the table: "householdToProgram" */
  deleteHouseholdToProgram?: Maybe<HouseholdToProgramMutationResponse>
  /** delete data from the table: "program" */
  deleteProgram?: Maybe<ProgramMutationResponse>
  /** delete single row from the table: "program" */
  deleteProgramByPk?: Maybe<Program>
  /** delete data from the table: "session" */
  deleteSession?: Maybe<SessionMutationResponse>
  /** delete single row from the table: "session" */
  deleteSessionByPk?: Maybe<Session>
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>
  /** delete data from the table: "verificationToken" */
  deleteVerificationToken?: Maybe<VerificationTokenMutationResponse>
  /** delete single row from the table: "verificationToken" */
  deleteVerificationTokenByPk?: Maybe<VerificationToken>
  /** insert data into the table: "account" */
  insertAccount?: Maybe<AccountMutationResponse>
  /** insert a single row into the table: "account" */
  insertAccountOne?: Maybe<Account>
  /** insert data into the table: "annualInfo" */
  insertAnnualInfo?: Maybe<AnnualInfoMutationResponse>
  /** insert a single row into the table: "annualInfo" */
  insertAnnualInfoOne?: Maybe<AnnualInfo>
  /** insert data into the table: "association" */
  insertAssociation?: Maybe<AssociationMutationResponse>
  /** insert a single row into the table: "association" */
  insertAssociationOne?: Maybe<Association>
  /** insert data into the table: "associationToProgram" */
  insertAssociationToProgram?: Maybe<AssociationToProgramMutationResponse>
  /** insert a single row into the table: "associationToProgram" */
  insertAssociationToProgramOne?: Maybe<AssociationToProgram>
  /** insert data into the table: "commodity" */
  insertCommodity?: Maybe<CommodityMutationResponse>
  /** insert a single row into the table: "commodity" */
  insertCommodityOne?: Maybe<Commodity>
  /** insert data into the table: "commodityProduce" */
  insertCommodityProduce?: Maybe<CommodityProduceMutationResponse>
  /** insert a single row into the table: "commodityProduce" */
  insertCommodityProduceOne?: Maybe<CommodityProduce>
  /** insert data into the table: "farm" */
  insertFarm?: Maybe<FarmMutationResponse>
  /** insert a single row into the table: "farm" */
  insertFarmOne?: Maybe<Farm>
  /** insert data into the table: "household" */
  insertHousehold?: Maybe<HouseholdMutationResponse>
  /** insert a single row into the table: "household" */
  insertHouseholdOne?: Maybe<Household>
  /** insert data into the table: "householdToProgram" */
  insertHouseholdToProgram?: Maybe<HouseholdToProgramMutationResponse>
  /** insert a single row into the table: "householdToProgram" */
  insertHouseholdToProgramOne?: Maybe<HouseholdToProgram>
  /** insert data into the table: "program" */
  insertProgram?: Maybe<ProgramMutationResponse>
  /** insert a single row into the table: "program" */
  insertProgramOne?: Maybe<Program>
  /** insert data into the table: "session" */
  insertSession?: Maybe<SessionMutationResponse>
  /** insert a single row into the table: "session" */
  insertSessionOne?: Maybe<Session>
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>
  /** insert data into the table: "verificationToken" */
  insertVerificationToken?: Maybe<VerificationTokenMutationResponse>
  /** insert a single row into the table: "verificationToken" */
  insertVerificationTokenOne?: Maybe<VerificationToken>
  /** update data of the table: "account" */
  updateAccount?: Maybe<AccountMutationResponse>
  /** update single row of the table: "account" */
  updateAccountByPk?: Maybe<Account>
  /** update multiples rows of table: "account" */
  updateAccountMany?: Maybe<Array<Maybe<AccountMutationResponse>>>
  /** update data of the table: "annualInfo" */
  updateAnnualInfo?: Maybe<AnnualInfoMutationResponse>
  /** update single row of the table: "annualInfo" */
  updateAnnualInfoByPk?: Maybe<AnnualInfo>
  /** update multiples rows of table: "annualInfo" */
  updateAnnualInfoMany?: Maybe<Array<Maybe<AnnualInfoMutationResponse>>>
  /** update data of the table: "association" */
  updateAssociation?: Maybe<AssociationMutationResponse>
  /** update single row of the table: "association" */
  updateAssociationByPk?: Maybe<Association>
  /** update multiples rows of table: "association" */
  updateAssociationMany?: Maybe<Array<Maybe<AssociationMutationResponse>>>
  /** update data of the table: "associationToProgram" */
  updateAssociationToProgram?: Maybe<AssociationToProgramMutationResponse>
  /** update multiples rows of table: "associationToProgram" */
  updateAssociationToProgramMany?: Maybe<
    Array<Maybe<AssociationToProgramMutationResponse>>
  >
  /** update data of the table: "commodity" */
  updateCommodity?: Maybe<CommodityMutationResponse>
  /** update single row of the table: "commodity" */
  updateCommodityByPk?: Maybe<Commodity>
  /** update multiples rows of table: "commodity" */
  updateCommodityMany?: Maybe<Array<Maybe<CommodityMutationResponse>>>
  /** update data of the table: "commodityProduce" */
  updateCommodityProduce?: Maybe<CommodityProduceMutationResponse>
  /** update single row of the table: "commodityProduce" */
  updateCommodityProduceByPk?: Maybe<CommodityProduce>
  /** update multiples rows of table: "commodityProduce" */
  updateCommodityProduceMany?: Maybe<
    Array<Maybe<CommodityProduceMutationResponse>>
  >
  /** update data of the table: "farm" */
  updateFarm?: Maybe<FarmMutationResponse>
  /** update single row of the table: "farm" */
  updateFarmByPk?: Maybe<Farm>
  /** update multiples rows of table: "farm" */
  updateFarmMany?: Maybe<Array<Maybe<FarmMutationResponse>>>
  /** update data of the table: "household" */
  updateHousehold?: Maybe<HouseholdMutationResponse>
  /** update single row of the table: "household" */
  updateHouseholdByPk?: Maybe<Household>
  /** update multiples rows of table: "household" */
  updateHouseholdMany?: Maybe<Array<Maybe<HouseholdMutationResponse>>>
  /** update data of the table: "householdToProgram" */
  updateHouseholdToProgram?: Maybe<HouseholdToProgramMutationResponse>
  /** update multiples rows of table: "householdToProgram" */
  updateHouseholdToProgramMany?: Maybe<
    Array<Maybe<HouseholdToProgramMutationResponse>>
  >
  /** update data of the table: "program" */
  updateProgram?: Maybe<ProgramMutationResponse>
  /** update single row of the table: "program" */
  updateProgramByPk?: Maybe<Program>
  /** update multiples rows of table: "program" */
  updateProgramMany?: Maybe<Array<Maybe<ProgramMutationResponse>>>
  /** update data of the table: "session" */
  updateSession?: Maybe<SessionMutationResponse>
  /** update single row of the table: "session" */
  updateSessionByPk?: Maybe<Session>
  /** update multiples rows of table: "session" */
  updateSessionMany?: Maybe<Array<Maybe<SessionMutationResponse>>>
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>
  /** update multiples rows of table: "user" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>
  /** update data of the table: "verificationToken" */
  updateVerificationToken?: Maybe<VerificationTokenMutationResponse>
  /** update single row of the table: "verificationToken" */
  updateVerificationTokenByPk?: Maybe<VerificationToken>
  /** update multiples rows of table: "verificationToken" */
  updateVerificationTokenMany?: Maybe<
    Array<Maybe<VerificationTokenMutationResponse>>
  >
}

/** mutation root */
export type Mutation_RootDeleteAccountArgs = {
  where: AccountBoolExp
}

/** mutation root */
export type Mutation_RootDeleteAccountByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteAnnualInfoArgs = {
  where: AnnualInfoBoolExp
}

/** mutation root */
export type Mutation_RootDeleteAnnualInfoByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteAssociationArgs = {
  where: AssociationBoolExp
}

/** mutation root */
export type Mutation_RootDeleteAssociationByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteAssociationToProgramArgs = {
  where: AssociationToProgramBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCommodityArgs = {
  where: CommodityBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCommodityByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteCommodityProduceArgs = {
  where: CommodityProduceBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCommodityProduceByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteFarmArgs = {
  where: FarmBoolExp
}

/** mutation root */
export type Mutation_RootDeleteFarmByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteHouseholdArgs = {
  where: HouseholdBoolExp
}

/** mutation root */
export type Mutation_RootDeleteHouseholdByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteHouseholdToProgramArgs = {
  where: HouseholdToProgramBoolExp
}

/** mutation root */
export type Mutation_RootDeleteProgramArgs = {
  where: ProgramBoolExp
}

/** mutation root */
export type Mutation_RootDeleteProgramByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteSessionArgs = {
  where: SessionBoolExp
}

/** mutation root */
export type Mutation_RootDeleteSessionByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: UserBoolExp
}

/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDeleteVerificationTokenArgs = {
  where: VerificationTokenBoolExp
}

/** mutation root */
export type Mutation_RootDeleteVerificationTokenByPkArgs = {
  token: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsertAccountArgs = {
  objects: Array<AccountInsertInput>
  onConflict?: InputMaybe<AccountOnConflict>
}

/** mutation root */
export type Mutation_RootInsertAccountOneArgs = {
  object: AccountInsertInput
  onConflict?: InputMaybe<AccountOnConflict>
}

/** mutation root */
export type Mutation_RootInsertAnnualInfoArgs = {
  objects: Array<AnnualInfoInsertInput>
  onConflict?: InputMaybe<AnnualInfoOnConflict>
}

/** mutation root */
export type Mutation_RootInsertAnnualInfoOneArgs = {
  object: AnnualInfoInsertInput
  onConflict?: InputMaybe<AnnualInfoOnConflict>
}

/** mutation root */
export type Mutation_RootInsertAssociationArgs = {
  objects: Array<AssociationInsertInput>
  onConflict?: InputMaybe<AssociationOnConflict>
}

/** mutation root */
export type Mutation_RootInsertAssociationOneArgs = {
  object: AssociationInsertInput
  onConflict?: InputMaybe<AssociationOnConflict>
}

/** mutation root */
export type Mutation_RootInsertAssociationToProgramArgs = {
  objects: Array<AssociationToProgramInsertInput>
}

/** mutation root */
export type Mutation_RootInsertAssociationToProgramOneArgs = {
  object: AssociationToProgramInsertInput
}

/** mutation root */
export type Mutation_RootInsertCommodityArgs = {
  objects: Array<CommodityInsertInput>
  onConflict?: InputMaybe<CommodityOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCommodityOneArgs = {
  object: CommodityInsertInput
  onConflict?: InputMaybe<CommodityOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCommodityProduceArgs = {
  objects: Array<CommodityProduceInsertInput>
  onConflict?: InputMaybe<CommodityProduceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCommodityProduceOneArgs = {
  object: CommodityProduceInsertInput
  onConflict?: InputMaybe<CommodityProduceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertFarmArgs = {
  objects: Array<FarmInsertInput>
  onConflict?: InputMaybe<FarmOnConflict>
}

/** mutation root */
export type Mutation_RootInsertFarmOneArgs = {
  object: FarmInsertInput
  onConflict?: InputMaybe<FarmOnConflict>
}

/** mutation root */
export type Mutation_RootInsertHouseholdArgs = {
  objects: Array<HouseholdInsertInput>
  onConflict?: InputMaybe<HouseholdOnConflict>
}

/** mutation root */
export type Mutation_RootInsertHouseholdOneArgs = {
  object: HouseholdInsertInput
  onConflict?: InputMaybe<HouseholdOnConflict>
}

/** mutation root */
export type Mutation_RootInsertHouseholdToProgramArgs = {
  objects: Array<HouseholdToProgramInsertInput>
}

/** mutation root */
export type Mutation_RootInsertHouseholdToProgramOneArgs = {
  object: HouseholdToProgramInsertInput
}

/** mutation root */
export type Mutation_RootInsertProgramArgs = {
  objects: Array<ProgramInsertInput>
  onConflict?: InputMaybe<ProgramOnConflict>
}

/** mutation root */
export type Mutation_RootInsertProgramOneArgs = {
  object: ProgramInsertInput
  onConflict?: InputMaybe<ProgramOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSessionArgs = {
  objects: Array<SessionInsertInput>
  onConflict?: InputMaybe<SessionOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSessionOneArgs = {
  object: SessionInsertInput
  onConflict?: InputMaybe<SessionOnConflict>
}

/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<UserInsertInput>
  onConflict?: InputMaybe<UserOnConflict>
}

/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: UserInsertInput
  onConflict?: InputMaybe<UserOnConflict>
}

/** mutation root */
export type Mutation_RootInsertVerificationTokenArgs = {
  objects: Array<VerificationTokenInsertInput>
  onConflict?: InputMaybe<VerificationTokenOnConflict>
}

/** mutation root */
export type Mutation_RootInsertVerificationTokenOneArgs = {
  object: VerificationTokenInsertInput
  onConflict?: InputMaybe<VerificationTokenOnConflict>
}

/** mutation root */
export type Mutation_RootUpdateAccountArgs = {
  _inc?: InputMaybe<AccountIncInput>
  _set?: InputMaybe<AccountSetInput>
  where: AccountBoolExp
}

/** mutation root */
export type Mutation_RootUpdateAccountByPkArgs = {
  _inc?: InputMaybe<AccountIncInput>
  _set?: InputMaybe<AccountSetInput>
  pk_columns: AccountPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateAccountManyArgs = {
  updates: Array<AccountUpdates>
}

/** mutation root */
export type Mutation_RootUpdateAnnualInfoArgs = {
  _append?: InputMaybe<AnnualInfoAppendInput>
  _deleteAtPath?: InputMaybe<AnnualInfoDeleteAtPathInput>
  _deleteElem?: InputMaybe<AnnualInfoDeleteElemInput>
  _deleteKey?: InputMaybe<AnnualInfoDeleteKeyInput>
  _inc?: InputMaybe<AnnualInfoIncInput>
  _prepend?: InputMaybe<AnnualInfoPrependInput>
  _set?: InputMaybe<AnnualInfoSetInput>
  where: AnnualInfoBoolExp
}

/** mutation root */
export type Mutation_RootUpdateAnnualInfoByPkArgs = {
  _append?: InputMaybe<AnnualInfoAppendInput>
  _deleteAtPath?: InputMaybe<AnnualInfoDeleteAtPathInput>
  _deleteElem?: InputMaybe<AnnualInfoDeleteElemInput>
  _deleteKey?: InputMaybe<AnnualInfoDeleteKeyInput>
  _inc?: InputMaybe<AnnualInfoIncInput>
  _prepend?: InputMaybe<AnnualInfoPrependInput>
  _set?: InputMaybe<AnnualInfoSetInput>
  pk_columns: AnnualInfoPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateAnnualInfoManyArgs = {
  updates: Array<AnnualInfoUpdates>
}

/** mutation root */
export type Mutation_RootUpdateAssociationArgs = {
  _set?: InputMaybe<AssociationSetInput>
  where: AssociationBoolExp
}

/** mutation root */
export type Mutation_RootUpdateAssociationByPkArgs = {
  _set?: InputMaybe<AssociationSetInput>
  pk_columns: AssociationPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateAssociationManyArgs = {
  updates: Array<AssociationUpdates>
}

/** mutation root */
export type Mutation_RootUpdateAssociationToProgramArgs = {
  _set?: InputMaybe<AssociationToProgramSetInput>
  where: AssociationToProgramBoolExp
}

/** mutation root */
export type Mutation_RootUpdateAssociationToProgramManyArgs = {
  updates: Array<AssociationToProgramUpdates>
}

/** mutation root */
export type Mutation_RootUpdateCommodityArgs = {
  _inc?: InputMaybe<CommodityIncInput>
  _set?: InputMaybe<CommoditySetInput>
  where: CommodityBoolExp
}

/** mutation root */
export type Mutation_RootUpdateCommodityByPkArgs = {
  _inc?: InputMaybe<CommodityIncInput>
  _set?: InputMaybe<CommoditySetInput>
  pk_columns: CommodityPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateCommodityManyArgs = {
  updates: Array<CommodityUpdates>
}

/** mutation root */
export type Mutation_RootUpdateCommodityProduceArgs = {
  _inc?: InputMaybe<CommodityProduceIncInput>
  _set?: InputMaybe<CommodityProduceSetInput>
  where: CommodityProduceBoolExp
}

/** mutation root */
export type Mutation_RootUpdateCommodityProduceByPkArgs = {
  _inc?: InputMaybe<CommodityProduceIncInput>
  _set?: InputMaybe<CommodityProduceSetInput>
  pk_columns: CommodityProducePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateCommodityProduceManyArgs = {
  updates: Array<CommodityProduceUpdates>
}

/** mutation root */
export type Mutation_RootUpdateFarmArgs = {
  _append?: InputMaybe<FarmAppendInput>
  _deleteAtPath?: InputMaybe<FarmDeleteAtPathInput>
  _deleteElem?: InputMaybe<FarmDeleteElemInput>
  _deleteKey?: InputMaybe<FarmDeleteKeyInput>
  _inc?: InputMaybe<FarmIncInput>
  _prepend?: InputMaybe<FarmPrependInput>
  _set?: InputMaybe<FarmSetInput>
  where: FarmBoolExp
}

/** mutation root */
export type Mutation_RootUpdateFarmByPkArgs = {
  _append?: InputMaybe<FarmAppendInput>
  _deleteAtPath?: InputMaybe<FarmDeleteAtPathInput>
  _deleteElem?: InputMaybe<FarmDeleteElemInput>
  _deleteKey?: InputMaybe<FarmDeleteKeyInput>
  _inc?: InputMaybe<FarmIncInput>
  _prepend?: InputMaybe<FarmPrependInput>
  _set?: InputMaybe<FarmSetInput>
  pk_columns: FarmPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateFarmManyArgs = {
  updates: Array<FarmUpdates>
}

/** mutation root */
export type Mutation_RootUpdateHouseholdArgs = {
  _inc?: InputMaybe<HouseholdIncInput>
  _set?: InputMaybe<HouseholdSetInput>
  where: HouseholdBoolExp
}

/** mutation root */
export type Mutation_RootUpdateHouseholdByPkArgs = {
  _inc?: InputMaybe<HouseholdIncInput>
  _set?: InputMaybe<HouseholdSetInput>
  pk_columns: HouseholdPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateHouseholdManyArgs = {
  updates: Array<HouseholdUpdates>
}

/** mutation root */
export type Mutation_RootUpdateHouseholdToProgramArgs = {
  _set?: InputMaybe<HouseholdToProgramSetInput>
  where: HouseholdToProgramBoolExp
}

/** mutation root */
export type Mutation_RootUpdateHouseholdToProgramManyArgs = {
  updates: Array<HouseholdToProgramUpdates>
}

/** mutation root */
export type Mutation_RootUpdateProgramArgs = {
  _set?: InputMaybe<ProgramSetInput>
  where: ProgramBoolExp
}

/** mutation root */
export type Mutation_RootUpdateProgramByPkArgs = {
  _set?: InputMaybe<ProgramSetInput>
  pk_columns: ProgramPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateProgramManyArgs = {
  updates: Array<ProgramUpdates>
}

/** mutation root */
export type Mutation_RootUpdateSessionArgs = {
  _set?: InputMaybe<SessionSetInput>
  where: SessionBoolExp
}

/** mutation root */
export type Mutation_RootUpdateSessionByPkArgs = {
  _set?: InputMaybe<SessionSetInput>
  pk_columns: SessionPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateSessionManyArgs = {
  updates: Array<SessionUpdates>
}

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _set?: InputMaybe<UserSetInput>
  where: UserBoolExp
}

/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>
  pk_columns: UserPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateUserManyArgs = {
  updates: Array<UserUpdates>
}

/** mutation root */
export type Mutation_RootUpdateVerificationTokenArgs = {
  _set?: InputMaybe<VerificationTokenSetInput>
  where: VerificationTokenBoolExp
}

/** mutation root */
export type Mutation_RootUpdateVerificationTokenByPkArgs = {
  _set?: InputMaybe<VerificationTokenSetInput>
  pk_columns: VerificationTokenPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateVerificationTokenManyArgs = {
  updates: Array<VerificationTokenUpdates>
}

/** Streaming cursor of the table "produce" */
export type Produce_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Produce_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Produce_StreamCursorValueInput = {
  areaUsed?: InputMaybe<Scalars['float8']>
  commodityId?: InputMaybe<Scalars['uuid']>
  commodityName?: InputMaybe<Scalars['String']>
  commodityType?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmId?: InputMaybe<Scalars['uuid']>
  farmName?: InputMaybe<Scalars['String']>
  householdId?: InputMaybe<Scalars['uuid']>
  householdName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  organicPractitioner?: InputMaybe<Scalars['Boolean']>
  produce?: InputMaybe<Scalars['float8']>
  produceInUnit?: InputMaybe<Scalars['float8']>
  unit?: InputMaybe<Scalars['String']>
  year?: InputMaybe<Scalars['Int']>
}

/** Streaming cursor of the table "programBeneficiaries" */
export type ProgramBeneficiaries_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ProgramBeneficiaries_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type ProgramBeneficiaries_StreamCursorValueInput = {
  barangay?: InputMaybe<Scalars['String']>
  commodityIds?: InputMaybe<Scalars['jsonb']>
  commodityNames?: InputMaybe<Scalars['jsonb']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  farmSize?: InputMaybe<Scalars['numeric']>
  firstName?: InputMaybe<Scalars['String']>
  grossAnnualIncomeFarming?: InputMaybe<Scalars['numeric']>
  grossAnnualIncomeNonfarming?: InputMaybe<Scalars['numeric']>
  householdId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  lastName?: InputMaybe<Scalars['String']>
  mainLivelihood?: InputMaybe<Scalars['jsonb']>
  programId?: InputMaybe<Scalars['uuid']>
  referenceNo?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "program" */
export type Program_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Program_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Program_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamp']>
  dateEnd?: InputMaybe<Scalars['date']>
  dateStart?: InputMaybe<Scalars['date']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  sponsoringAgency?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "account" */
  account: Array<Account>
  /** fetch aggregated fields from the table: "account" */
  accountAggregate: AccountAggregate
  /** fetch data from the table: "account" using primary key columns */
  accountByPk?: Maybe<Account>
  /** fetch data from the table: "annualInfo" */
  annualInfo: Array<AnnualInfo>
  /** fetch aggregated fields from the table: "annualInfo" */
  annualInfoAggregate: AnnualInfoAggregate
  /** fetch data from the table: "annualInfo" using primary key columns */
  annualInfoByPk?: Maybe<AnnualInfo>
  /** fetch data from the table: "association" */
  association: Array<Association>
  /** fetch aggregated fields from the table: "association" */
  associationAggregate: AssociationAggregate
  /** fetch data from the table: "associationBeneficiaries" */
  associationBeneficiaries: Array<AssociationBeneficiaries>
  /** fetch aggregated fields from the table: "associationBeneficiaries" */
  associationBeneficiariesAggregate: AssociationBeneficiariesAggregate
  /** fetch data from the table: "association" using primary key columns */
  associationByPk?: Maybe<Association>
  /** fetch data from the table: "associationPrograms" */
  associationPrograms: Array<AssociationPrograms>
  /** fetch aggregated fields from the table: "associationPrograms" */
  associationProgramsAggregate: AssociationProgramsAggregate
  /** fetch data from the table: "associationToProgram" */
  associationToProgram: Array<AssociationToProgram>
  /** fetch aggregated fields from the table: "associationToProgram" */
  associationToProgramAggregate: AssociationToProgramAggregate
  /** fetch data from the table: "averageAnnualIncome" */
  averageAnnualIncome: Array<AverageAnnualIncome>
  /** fetch aggregated fields from the table: "averageAnnualIncome" */
  averageAnnualIncomeAggregate: AverageAnnualIncomeAggregate
  /** fetch data from the table: "commodity" */
  commodity: Array<Commodity>
  /** fetch aggregated fields from the table: "commodity" */
  commodityAggregate: CommodityAggregate
  /** fetch data from the table: "commodity" using primary key columns */
  commodityByPk?: Maybe<Commodity>
  /** fetch data from the table: "commodityProduce" */
  commodityProduce: Array<CommodityProduce>
  /** fetch aggregated fields from the table: "commodityProduce" */
  commodityProduceAggregate: CommodityProduceAggregate
  /** fetch data from the table: "commodityProduce" using primary key columns */
  commodityProduceByPk?: Maybe<CommodityProduce>
  /** fetch data from the table: "cropProduce" */
  cropProduce: Array<CropProduce>
  /** fetch aggregated fields from the table: "cropProduce" */
  cropProduceAggregate: CropProduceAggregate
  /** fetch data from the table: "farm" */
  farm: Array<Farm>
  /** fetch aggregated fields from the table: "farm" */
  farmAggregate: FarmAggregate
  /** fetch data from the table: "farm" using primary key columns */
  farmByPk?: Maybe<Farm>
  /** fetch data from the table: "farmView" */
  farmView: Array<FarmView>
  /** fetch aggregated fields from the table: "farmView" */
  farmViewAggregate: FarmViewAggregate
  /** fetch data from the table: "fisheriesProduce" */
  fisheriesProduce: Array<FisheriesProduce>
  /** fetch aggregated fields from the table: "fisheriesProduce" */
  fisheriesProduceAggregate: FisheriesProduceAggregate
  /** fetch data from the table: "household" */
  household: Array<Household>
  /** fetch aggregated fields from the table: "household" */
  householdAggregate: HouseholdAggregate
  /** fetch data from the table: "household" using primary key columns */
  householdByPk?: Maybe<Household>
  /** fetch data from the table: "householdPrograms" */
  householdPrograms: Array<HouseholdPrograms>
  /** fetch aggregated fields from the table: "householdPrograms" */
  householdProgramsAggregate: HouseholdProgramsAggregate
  /** fetch data from the table: "householdToProgram" */
  householdToProgram: Array<HouseholdToProgram>
  /** fetch aggregated fields from the table: "householdToProgram" */
  householdToProgramAggregate: HouseholdToProgramAggregate
  /** fetch data from the table: "householdView" */
  householdView: Array<HouseholdView>
  /** fetch aggregated fields from the table: "householdView" */
  householdViewAggregate: HouseholdViewAggregate
  /** fetch data from the table: "inventoryOfLivestock" */
  inventoryOfLivestock: Array<InventoryOfLivestock>
  /** fetch aggregated fields from the table: "inventoryOfLivestock" */
  inventoryOfLivestockAggregate: InventoryOfLivestockAggregate
  /** fetch data from the table: "produce" */
  produce: Array<Produce>
  /** fetch aggregated fields from the table: "produce" */
  produceAggregate: ProduceAggregate
  /** fetch data from the table: "program" */
  program: Array<Program>
  /** fetch aggregated fields from the table: "program" */
  programAggregate: ProgramAggregate
  /** fetch data from the table: "programBeneficiaries" */
  programBeneficiaries: Array<ProgramBeneficiaries>
  /** fetch aggregated fields from the table: "programBeneficiaries" */
  programBeneficiariesAggregate: ProgramBeneficiariesAggregate
  /** fetch data from the table: "program" using primary key columns */
  programByPk?: Maybe<Program>
  /** fetch data from the table: "registeredHouseholdPerYear" */
  registeredHouseholdPerYear: Array<RegisteredHouseholdPerYear>
  /** fetch aggregated fields from the table: "registeredHouseholdPerYear" */
  registeredHouseholdPerYearAggregate: RegisteredHouseholdPerYearAggregate
  /** fetch data from the table: "session" */
  session: Array<Session>
  /** fetch aggregated fields from the table: "session" */
  sessionAggregate: SessionAggregate
  /** fetch data from the table: "session" using primary key columns */
  sessionByPk?: Maybe<Session>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>
  /** fetch data from the table: "verificationToken" */
  verificationToken: Array<VerificationToken>
  /** fetch aggregated fields from the table: "verificationToken" */
  verificationTokenAggregate: VerificationTokenAggregate
  /** fetch data from the table: "verificationToken" using primary key columns */
  verificationTokenByPk?: Maybe<VerificationToken>
}

export type Query_RootAccountArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AccountOrderBy>>
  where?: InputMaybe<AccountBoolExp>
}

export type Query_RootAccountAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AccountOrderBy>>
  where?: InputMaybe<AccountBoolExp>
}

export type Query_RootAccountByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootAnnualInfoArgs = {
  distinctOn?: InputMaybe<Array<AnnualInfoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AnnualInfoOrderBy>>
  where?: InputMaybe<AnnualInfoBoolExp>
}

export type Query_RootAnnualInfoAggregateArgs = {
  distinctOn?: InputMaybe<Array<AnnualInfoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AnnualInfoOrderBy>>
  where?: InputMaybe<AnnualInfoBoolExp>
}

export type Query_RootAnnualInfoByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootAssociationArgs = {
  distinctOn?: InputMaybe<Array<AssociationSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationOrderBy>>
  where?: InputMaybe<AssociationBoolExp>
}

export type Query_RootAssociationAggregateArgs = {
  distinctOn?: InputMaybe<Array<AssociationSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationOrderBy>>
  where?: InputMaybe<AssociationBoolExp>
}

export type Query_RootAssociationBeneficiariesArgs = {
  distinctOn?: InputMaybe<Array<AssociationBeneficiariesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationBeneficiariesOrderBy>>
  where?: InputMaybe<AssociationBeneficiariesBoolExp>
}

export type Query_RootAssociationBeneficiariesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AssociationBeneficiariesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationBeneficiariesOrderBy>>
  where?: InputMaybe<AssociationBeneficiariesBoolExp>
}

export type Query_RootAssociationByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootAssociationProgramsArgs = {
  distinctOn?: InputMaybe<Array<AssociationProgramsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationProgramsOrderBy>>
  where?: InputMaybe<AssociationProgramsBoolExp>
}

export type Query_RootAssociationProgramsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AssociationProgramsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationProgramsOrderBy>>
  where?: InputMaybe<AssociationProgramsBoolExp>
}

export type Query_RootAssociationToProgramArgs = {
  distinctOn?: InputMaybe<Array<AssociationToProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationToProgramOrderBy>>
  where?: InputMaybe<AssociationToProgramBoolExp>
}

export type Query_RootAssociationToProgramAggregateArgs = {
  distinctOn?: InputMaybe<Array<AssociationToProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationToProgramOrderBy>>
  where?: InputMaybe<AssociationToProgramBoolExp>
}

export type Query_RootAverageAnnualIncomeArgs = {
  distinctOn?: InputMaybe<Array<AverageAnnualIncomeSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AverageAnnualIncomeOrderBy>>
  where?: InputMaybe<AverageAnnualIncomeBoolExp>
}

export type Query_RootAverageAnnualIncomeAggregateArgs = {
  distinctOn?: InputMaybe<Array<AverageAnnualIncomeSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AverageAnnualIncomeOrderBy>>
  where?: InputMaybe<AverageAnnualIncomeBoolExp>
}

export type Query_RootCommodityArgs = {
  distinctOn?: InputMaybe<Array<CommoditySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityOrderBy>>
  where?: InputMaybe<CommodityBoolExp>
}

export type Query_RootCommodityAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommoditySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityOrderBy>>
  where?: InputMaybe<CommodityBoolExp>
}

export type Query_RootCommodityByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootCommodityProduceArgs = {
  distinctOn?: InputMaybe<Array<CommodityProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityProduceOrderBy>>
  where?: InputMaybe<CommodityProduceBoolExp>
}

export type Query_RootCommodityProduceAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommodityProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityProduceOrderBy>>
  where?: InputMaybe<CommodityProduceBoolExp>
}

export type Query_RootCommodityProduceByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootCropProduceArgs = {
  distinctOn?: InputMaybe<Array<CropProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CropProduceOrderBy>>
  where?: InputMaybe<CropProduceBoolExp>
}

export type Query_RootCropProduceAggregateArgs = {
  distinctOn?: InputMaybe<Array<CropProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CropProduceOrderBy>>
  where?: InputMaybe<CropProduceBoolExp>
}

export type Query_RootFarmArgs = {
  distinctOn?: InputMaybe<Array<FarmSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmOrderBy>>
  where?: InputMaybe<FarmBoolExp>
}

export type Query_RootFarmAggregateArgs = {
  distinctOn?: InputMaybe<Array<FarmSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmOrderBy>>
  where?: InputMaybe<FarmBoolExp>
}

export type Query_RootFarmByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootFarmViewArgs = {
  distinctOn?: InputMaybe<Array<FarmViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmViewOrderBy>>
  where?: InputMaybe<FarmViewBoolExp>
}

export type Query_RootFarmViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<FarmViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmViewOrderBy>>
  where?: InputMaybe<FarmViewBoolExp>
}

export type Query_RootFisheriesProduceArgs = {
  distinctOn?: InputMaybe<Array<FisheriesProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FisheriesProduceOrderBy>>
  where?: InputMaybe<FisheriesProduceBoolExp>
}

export type Query_RootFisheriesProduceAggregateArgs = {
  distinctOn?: InputMaybe<Array<FisheriesProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FisheriesProduceOrderBy>>
  where?: InputMaybe<FisheriesProduceBoolExp>
}

export type Query_RootHouseholdArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdOrderBy>>
  where?: InputMaybe<HouseholdBoolExp>
}

export type Query_RootHouseholdAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdOrderBy>>
  where?: InputMaybe<HouseholdBoolExp>
}

export type Query_RootHouseholdByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootHouseholdProgramsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdProgramsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdProgramsOrderBy>>
  where?: InputMaybe<HouseholdProgramsBoolExp>
}

export type Query_RootHouseholdProgramsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdProgramsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdProgramsOrderBy>>
  where?: InputMaybe<HouseholdProgramsBoolExp>
}

export type Query_RootHouseholdToProgramArgs = {
  distinctOn?: InputMaybe<Array<HouseholdToProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdToProgramOrderBy>>
  where?: InputMaybe<HouseholdToProgramBoolExp>
}

export type Query_RootHouseholdToProgramAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdToProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdToProgramOrderBy>>
  where?: InputMaybe<HouseholdToProgramBoolExp>
}

export type Query_RootHouseholdViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdViewOrderBy>>
  where?: InputMaybe<HouseholdViewBoolExp>
}

export type Query_RootHouseholdViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdViewOrderBy>>
  where?: InputMaybe<HouseholdViewBoolExp>
}

export type Query_RootInventoryOfLivestockArgs = {
  distinctOn?: InputMaybe<Array<InventoryOfLivestockSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InventoryOfLivestockOrderBy>>
  where?: InputMaybe<InventoryOfLivestockBoolExp>
}

export type Query_RootInventoryOfLivestockAggregateArgs = {
  distinctOn?: InputMaybe<Array<InventoryOfLivestockSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InventoryOfLivestockOrderBy>>
  where?: InputMaybe<InventoryOfLivestockBoolExp>
}

export type Query_RootProduceArgs = {
  distinctOn?: InputMaybe<Array<ProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProduceOrderBy>>
  where?: InputMaybe<ProduceBoolExp>
}

export type Query_RootProduceAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProduceOrderBy>>
  where?: InputMaybe<ProduceBoolExp>
}

export type Query_RootProgramArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProgramOrderBy>>
  where?: InputMaybe<ProgramBoolExp>
}

export type Query_RootProgramAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProgramOrderBy>>
  where?: InputMaybe<ProgramBoolExp>
}

export type Query_RootProgramBeneficiariesArgs = {
  distinctOn?: InputMaybe<Array<ProgramBeneficiariesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProgramBeneficiariesOrderBy>>
  where?: InputMaybe<ProgramBeneficiariesBoolExp>
}

export type Query_RootProgramBeneficiariesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProgramBeneficiariesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProgramBeneficiariesOrderBy>>
  where?: InputMaybe<ProgramBeneficiariesBoolExp>
}

export type Query_RootProgramByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootRegisteredHouseholdPerYearArgs = {
  distinctOn?: InputMaybe<Array<RegisteredHouseholdPerYearSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RegisteredHouseholdPerYearOrderBy>>
  where?: InputMaybe<RegisteredHouseholdPerYearBoolExp>
}

export type Query_RootRegisteredHouseholdPerYearAggregateArgs = {
  distinctOn?: InputMaybe<Array<RegisteredHouseholdPerYearSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RegisteredHouseholdPerYearOrderBy>>
  where?: InputMaybe<RegisteredHouseholdPerYearBoolExp>
}

export type Query_RootSessionArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SessionOrderBy>>
  where?: InputMaybe<SessionBoolExp>
}

export type Query_RootSessionAggregateArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SessionOrderBy>>
  where?: InputMaybe<SessionBoolExp>
}

export type Query_RootSessionByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Query_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Query_RootUserByPkArgs = {
  id: Scalars['uuid']
}

export type Query_RootVerificationTokenArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokenSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VerificationTokenOrderBy>>
  where?: InputMaybe<VerificationTokenBoolExp>
}

export type Query_RootVerificationTokenAggregateArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokenSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VerificationTokenOrderBy>>
  where?: InputMaybe<VerificationTokenBoolExp>
}

export type Query_RootVerificationTokenByPkArgs = {
  token: Scalars['String']
}

/** Streaming cursor of the table "registeredHouseholdPerYear" */
export type RegisteredHouseholdPerYear_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RegisteredHouseholdPerYear_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type RegisteredHouseholdPerYear_StreamCursorValueInput = {
  count?: InputMaybe<Scalars['bigint']>
  year?: InputMaybe<Scalars['Int']>
}

/** Streaming cursor of the table "session" */
export type Session_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Session_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Session_StreamCursorValueInput = {
  expires?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  sessionToken?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['uuid']>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "account" */
  account: Array<Account>
  /** fetch aggregated fields from the table: "account" */
  accountAggregate: AccountAggregate
  /** fetch data from the table: "account" using primary key columns */
  accountByPk?: Maybe<Account>
  /** fetch data from the table in a streaming manner : "account" */
  accountStream: Array<Account>
  /** fetch data from the table: "annualInfo" */
  annualInfo: Array<AnnualInfo>
  /** fetch aggregated fields from the table: "annualInfo" */
  annualInfoAggregate: AnnualInfoAggregate
  /** fetch data from the table: "annualInfo" using primary key columns */
  annualInfoByPk?: Maybe<AnnualInfo>
  /** fetch data from the table in a streaming manner : "annualInfo" */
  annualInfoStream: Array<AnnualInfo>
  /** fetch data from the table: "association" */
  association: Array<Association>
  /** fetch aggregated fields from the table: "association" */
  associationAggregate: AssociationAggregate
  /** fetch data from the table: "associationBeneficiaries" */
  associationBeneficiaries: Array<AssociationBeneficiaries>
  /** fetch aggregated fields from the table: "associationBeneficiaries" */
  associationBeneficiariesAggregate: AssociationBeneficiariesAggregate
  /** fetch data from the table in a streaming manner : "associationBeneficiaries" */
  associationBeneficiariesStream: Array<AssociationBeneficiaries>
  /** fetch data from the table: "association" using primary key columns */
  associationByPk?: Maybe<Association>
  /** fetch data from the table: "associationPrograms" */
  associationPrograms: Array<AssociationPrograms>
  /** fetch aggregated fields from the table: "associationPrograms" */
  associationProgramsAggregate: AssociationProgramsAggregate
  /** fetch data from the table in a streaming manner : "associationPrograms" */
  associationProgramsStream: Array<AssociationPrograms>
  /** fetch data from the table in a streaming manner : "association" */
  associationStream: Array<Association>
  /** fetch data from the table: "associationToProgram" */
  associationToProgram: Array<AssociationToProgram>
  /** fetch aggregated fields from the table: "associationToProgram" */
  associationToProgramAggregate: AssociationToProgramAggregate
  /** fetch data from the table in a streaming manner : "associationToProgram" */
  associationToProgramStream: Array<AssociationToProgram>
  /** fetch data from the table: "averageAnnualIncome" */
  averageAnnualIncome: Array<AverageAnnualIncome>
  /** fetch aggregated fields from the table: "averageAnnualIncome" */
  averageAnnualIncomeAggregate: AverageAnnualIncomeAggregate
  /** fetch data from the table in a streaming manner : "averageAnnualIncome" */
  averageAnnualIncomeStream: Array<AverageAnnualIncome>
  /** fetch data from the table: "commodity" */
  commodity: Array<Commodity>
  /** fetch aggregated fields from the table: "commodity" */
  commodityAggregate: CommodityAggregate
  /** fetch data from the table: "commodity" using primary key columns */
  commodityByPk?: Maybe<Commodity>
  /** fetch data from the table: "commodityProduce" */
  commodityProduce: Array<CommodityProduce>
  /** fetch aggregated fields from the table: "commodityProduce" */
  commodityProduceAggregate: CommodityProduceAggregate
  /** fetch data from the table: "commodityProduce" using primary key columns */
  commodityProduceByPk?: Maybe<CommodityProduce>
  /** fetch data from the table in a streaming manner : "commodityProduce" */
  commodityProduceStream: Array<CommodityProduce>
  /** fetch data from the table in a streaming manner : "commodity" */
  commodityStream: Array<Commodity>
  /** fetch data from the table: "cropProduce" */
  cropProduce: Array<CropProduce>
  /** fetch aggregated fields from the table: "cropProduce" */
  cropProduceAggregate: CropProduceAggregate
  /** fetch data from the table in a streaming manner : "cropProduce" */
  cropProduceStream: Array<CropProduce>
  /** fetch data from the table: "farm" */
  farm: Array<Farm>
  /** fetch aggregated fields from the table: "farm" */
  farmAggregate: FarmAggregate
  /** fetch data from the table: "farm" using primary key columns */
  farmByPk?: Maybe<Farm>
  /** fetch data from the table in a streaming manner : "farm" */
  farmStream: Array<Farm>
  /** fetch data from the table: "farmView" */
  farmView: Array<FarmView>
  /** fetch aggregated fields from the table: "farmView" */
  farmViewAggregate: FarmViewAggregate
  /** fetch data from the table in a streaming manner : "farmView" */
  farmViewStream: Array<FarmView>
  /** fetch data from the table: "fisheriesProduce" */
  fisheriesProduce: Array<FisheriesProduce>
  /** fetch aggregated fields from the table: "fisheriesProduce" */
  fisheriesProduceAggregate: FisheriesProduceAggregate
  /** fetch data from the table in a streaming manner : "fisheriesProduce" */
  fisheriesProduceStream: Array<FisheriesProduce>
  /** fetch data from the table: "household" */
  household: Array<Household>
  /** fetch aggregated fields from the table: "household" */
  householdAggregate: HouseholdAggregate
  /** fetch data from the table: "household" using primary key columns */
  householdByPk?: Maybe<Household>
  /** fetch data from the table: "householdPrograms" */
  householdPrograms: Array<HouseholdPrograms>
  /** fetch aggregated fields from the table: "householdPrograms" */
  householdProgramsAggregate: HouseholdProgramsAggregate
  /** fetch data from the table in a streaming manner : "householdPrograms" */
  householdProgramsStream: Array<HouseholdPrograms>
  /** fetch data from the table in a streaming manner : "household" */
  householdStream: Array<Household>
  /** fetch data from the table: "householdToProgram" */
  householdToProgram: Array<HouseholdToProgram>
  /** fetch aggregated fields from the table: "householdToProgram" */
  householdToProgramAggregate: HouseholdToProgramAggregate
  /** fetch data from the table in a streaming manner : "householdToProgram" */
  householdToProgramStream: Array<HouseholdToProgram>
  /** fetch data from the table: "householdView" */
  householdView: Array<HouseholdView>
  /** fetch aggregated fields from the table: "householdView" */
  householdViewAggregate: HouseholdViewAggregate
  /** fetch data from the table in a streaming manner : "householdView" */
  householdViewStream: Array<HouseholdView>
  /** fetch data from the table: "inventoryOfLivestock" */
  inventoryOfLivestock: Array<InventoryOfLivestock>
  /** fetch aggregated fields from the table: "inventoryOfLivestock" */
  inventoryOfLivestockAggregate: InventoryOfLivestockAggregate
  /** fetch data from the table in a streaming manner : "inventoryOfLivestock" */
  inventoryOfLivestockStream: Array<InventoryOfLivestock>
  /** fetch data from the table: "produce" */
  produce: Array<Produce>
  /** fetch aggregated fields from the table: "produce" */
  produceAggregate: ProduceAggregate
  /** fetch data from the table in a streaming manner : "produce" */
  produceStream: Array<Produce>
  /** fetch data from the table: "program" */
  program: Array<Program>
  /** fetch aggregated fields from the table: "program" */
  programAggregate: ProgramAggregate
  /** fetch data from the table: "programBeneficiaries" */
  programBeneficiaries: Array<ProgramBeneficiaries>
  /** fetch aggregated fields from the table: "programBeneficiaries" */
  programBeneficiariesAggregate: ProgramBeneficiariesAggregate
  /** fetch data from the table in a streaming manner : "programBeneficiaries" */
  programBeneficiariesStream: Array<ProgramBeneficiaries>
  /** fetch data from the table: "program" using primary key columns */
  programByPk?: Maybe<Program>
  /** fetch data from the table in a streaming manner : "program" */
  programStream: Array<Program>
  /** fetch data from the table: "registeredHouseholdPerYear" */
  registeredHouseholdPerYear: Array<RegisteredHouseholdPerYear>
  /** fetch aggregated fields from the table: "registeredHouseholdPerYear" */
  registeredHouseholdPerYearAggregate: RegisteredHouseholdPerYearAggregate
  /** fetch data from the table in a streaming manner : "registeredHouseholdPerYear" */
  registeredHouseholdPerYearStream: Array<RegisteredHouseholdPerYear>
  /** fetch data from the table: "session" */
  session: Array<Session>
  /** fetch aggregated fields from the table: "session" */
  sessionAggregate: SessionAggregate
  /** fetch data from the table: "session" using primary key columns */
  sessionByPk?: Maybe<Session>
  /** fetch data from the table in a streaming manner : "session" */
  sessionStream: Array<Session>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>
  /** fetch data from the table in a streaming manner : "user" */
  userStream: Array<User>
  /** fetch data from the table: "verificationToken" */
  verificationToken: Array<VerificationToken>
  /** fetch aggregated fields from the table: "verificationToken" */
  verificationTokenAggregate: VerificationTokenAggregate
  /** fetch data from the table: "verificationToken" using primary key columns */
  verificationTokenByPk?: Maybe<VerificationToken>
  /** fetch data from the table in a streaming manner : "verificationToken" */
  verificationTokenStream: Array<VerificationToken>
}

export type Subscription_RootAccountArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AccountOrderBy>>
  where?: InputMaybe<AccountBoolExp>
}

export type Subscription_RootAccountAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AccountOrderBy>>
  where?: InputMaybe<AccountBoolExp>
}

export type Subscription_RootAccountByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootAccountStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Account_StreamCursorInput>>
  where?: InputMaybe<AccountBoolExp>
}

export type Subscription_RootAnnualInfoArgs = {
  distinctOn?: InputMaybe<Array<AnnualInfoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AnnualInfoOrderBy>>
  where?: InputMaybe<AnnualInfoBoolExp>
}

export type Subscription_RootAnnualInfoAggregateArgs = {
  distinctOn?: InputMaybe<Array<AnnualInfoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AnnualInfoOrderBy>>
  where?: InputMaybe<AnnualInfoBoolExp>
}

export type Subscription_RootAnnualInfoByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootAnnualInfoStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<AnnualInfo_StreamCursorInput>>
  where?: InputMaybe<AnnualInfoBoolExp>
}

export type Subscription_RootAssociationArgs = {
  distinctOn?: InputMaybe<Array<AssociationSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationOrderBy>>
  where?: InputMaybe<AssociationBoolExp>
}

export type Subscription_RootAssociationAggregateArgs = {
  distinctOn?: InputMaybe<Array<AssociationSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationOrderBy>>
  where?: InputMaybe<AssociationBoolExp>
}

export type Subscription_RootAssociationBeneficiariesArgs = {
  distinctOn?: InputMaybe<Array<AssociationBeneficiariesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationBeneficiariesOrderBy>>
  where?: InputMaybe<AssociationBeneficiariesBoolExp>
}

export type Subscription_RootAssociationBeneficiariesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AssociationBeneficiariesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationBeneficiariesOrderBy>>
  where?: InputMaybe<AssociationBeneficiariesBoolExp>
}

export type Subscription_RootAssociationBeneficiariesStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<AssociationBeneficiaries_StreamCursorInput>>
  where?: InputMaybe<AssociationBeneficiariesBoolExp>
}

export type Subscription_RootAssociationByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootAssociationProgramsArgs = {
  distinctOn?: InputMaybe<Array<AssociationProgramsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationProgramsOrderBy>>
  where?: InputMaybe<AssociationProgramsBoolExp>
}

export type Subscription_RootAssociationProgramsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AssociationProgramsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationProgramsOrderBy>>
  where?: InputMaybe<AssociationProgramsBoolExp>
}

export type Subscription_RootAssociationProgramsStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<AssociationPrograms_StreamCursorInput>>
  where?: InputMaybe<AssociationProgramsBoolExp>
}

export type Subscription_RootAssociationStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Association_StreamCursorInput>>
  where?: InputMaybe<AssociationBoolExp>
}

export type Subscription_RootAssociationToProgramArgs = {
  distinctOn?: InputMaybe<Array<AssociationToProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationToProgramOrderBy>>
  where?: InputMaybe<AssociationToProgramBoolExp>
}

export type Subscription_RootAssociationToProgramAggregateArgs = {
  distinctOn?: InputMaybe<Array<AssociationToProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociationToProgramOrderBy>>
  where?: InputMaybe<AssociationToProgramBoolExp>
}

export type Subscription_RootAssociationToProgramStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<AssociationToProgram_StreamCursorInput>>
  where?: InputMaybe<AssociationToProgramBoolExp>
}

export type Subscription_RootAverageAnnualIncomeArgs = {
  distinctOn?: InputMaybe<Array<AverageAnnualIncomeSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AverageAnnualIncomeOrderBy>>
  where?: InputMaybe<AverageAnnualIncomeBoolExp>
}

export type Subscription_RootAverageAnnualIncomeAggregateArgs = {
  distinctOn?: InputMaybe<Array<AverageAnnualIncomeSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AverageAnnualIncomeOrderBy>>
  where?: InputMaybe<AverageAnnualIncomeBoolExp>
}

export type Subscription_RootAverageAnnualIncomeStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<AverageAnnualIncome_StreamCursorInput>>
  where?: InputMaybe<AverageAnnualIncomeBoolExp>
}

export type Subscription_RootCommodityArgs = {
  distinctOn?: InputMaybe<Array<CommoditySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityOrderBy>>
  where?: InputMaybe<CommodityBoolExp>
}

export type Subscription_RootCommodityAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommoditySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityOrderBy>>
  where?: InputMaybe<CommodityBoolExp>
}

export type Subscription_RootCommodityByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootCommodityProduceArgs = {
  distinctOn?: InputMaybe<Array<CommodityProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityProduceOrderBy>>
  where?: InputMaybe<CommodityProduceBoolExp>
}

export type Subscription_RootCommodityProduceAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommodityProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommodityProduceOrderBy>>
  where?: InputMaybe<CommodityProduceBoolExp>
}

export type Subscription_RootCommodityProduceByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootCommodityProduceStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<CommodityProduce_StreamCursorInput>>
  where?: InputMaybe<CommodityProduceBoolExp>
}

export type Subscription_RootCommodityStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Commodity_StreamCursorInput>>
  where?: InputMaybe<CommodityBoolExp>
}

export type Subscription_RootCropProduceArgs = {
  distinctOn?: InputMaybe<Array<CropProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CropProduceOrderBy>>
  where?: InputMaybe<CropProduceBoolExp>
}

export type Subscription_RootCropProduceAggregateArgs = {
  distinctOn?: InputMaybe<Array<CropProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CropProduceOrderBy>>
  where?: InputMaybe<CropProduceBoolExp>
}

export type Subscription_RootCropProduceStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<CropProduce_StreamCursorInput>>
  where?: InputMaybe<CropProduceBoolExp>
}

export type Subscription_RootFarmArgs = {
  distinctOn?: InputMaybe<Array<FarmSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmOrderBy>>
  where?: InputMaybe<FarmBoolExp>
}

export type Subscription_RootFarmAggregateArgs = {
  distinctOn?: InputMaybe<Array<FarmSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmOrderBy>>
  where?: InputMaybe<FarmBoolExp>
}

export type Subscription_RootFarmByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootFarmStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Farm_StreamCursorInput>>
  where?: InputMaybe<FarmBoolExp>
}

export type Subscription_RootFarmViewArgs = {
  distinctOn?: InputMaybe<Array<FarmViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmViewOrderBy>>
  where?: InputMaybe<FarmViewBoolExp>
}

export type Subscription_RootFarmViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<FarmViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FarmViewOrderBy>>
  where?: InputMaybe<FarmViewBoolExp>
}

export type Subscription_RootFarmViewStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<FarmView_StreamCursorInput>>
  where?: InputMaybe<FarmViewBoolExp>
}

export type Subscription_RootFisheriesProduceArgs = {
  distinctOn?: InputMaybe<Array<FisheriesProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FisheriesProduceOrderBy>>
  where?: InputMaybe<FisheriesProduceBoolExp>
}

export type Subscription_RootFisheriesProduceAggregateArgs = {
  distinctOn?: InputMaybe<Array<FisheriesProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FisheriesProduceOrderBy>>
  where?: InputMaybe<FisheriesProduceBoolExp>
}

export type Subscription_RootFisheriesProduceStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<FisheriesProduce_StreamCursorInput>>
  where?: InputMaybe<FisheriesProduceBoolExp>
}

export type Subscription_RootHouseholdArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdOrderBy>>
  where?: InputMaybe<HouseholdBoolExp>
}

export type Subscription_RootHouseholdAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdOrderBy>>
  where?: InputMaybe<HouseholdBoolExp>
}

export type Subscription_RootHouseholdByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootHouseholdProgramsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdProgramsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdProgramsOrderBy>>
  where?: InputMaybe<HouseholdProgramsBoolExp>
}

export type Subscription_RootHouseholdProgramsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdProgramsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdProgramsOrderBy>>
  where?: InputMaybe<HouseholdProgramsBoolExp>
}

export type Subscription_RootHouseholdProgramsStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<HouseholdPrograms_StreamCursorInput>>
  where?: InputMaybe<HouseholdProgramsBoolExp>
}

export type Subscription_RootHouseholdStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Household_StreamCursorInput>>
  where?: InputMaybe<HouseholdBoolExp>
}

export type Subscription_RootHouseholdToProgramArgs = {
  distinctOn?: InputMaybe<Array<HouseholdToProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdToProgramOrderBy>>
  where?: InputMaybe<HouseholdToProgramBoolExp>
}

export type Subscription_RootHouseholdToProgramAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdToProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdToProgramOrderBy>>
  where?: InputMaybe<HouseholdToProgramBoolExp>
}

export type Subscription_RootHouseholdToProgramStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<HouseholdToProgram_StreamCursorInput>>
  where?: InputMaybe<HouseholdToProgramBoolExp>
}

export type Subscription_RootHouseholdViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdViewOrderBy>>
  where?: InputMaybe<HouseholdViewBoolExp>
}

export type Subscription_RootHouseholdViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdViewSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<HouseholdViewOrderBy>>
  where?: InputMaybe<HouseholdViewBoolExp>
}

export type Subscription_RootHouseholdViewStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<HouseholdView_StreamCursorInput>>
  where?: InputMaybe<HouseholdViewBoolExp>
}

export type Subscription_RootInventoryOfLivestockArgs = {
  distinctOn?: InputMaybe<Array<InventoryOfLivestockSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InventoryOfLivestockOrderBy>>
  where?: InputMaybe<InventoryOfLivestockBoolExp>
}

export type Subscription_RootInventoryOfLivestockAggregateArgs = {
  distinctOn?: InputMaybe<Array<InventoryOfLivestockSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InventoryOfLivestockOrderBy>>
  where?: InputMaybe<InventoryOfLivestockBoolExp>
}

export type Subscription_RootInventoryOfLivestockStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<InventoryOfLivestock_StreamCursorInput>>
  where?: InputMaybe<InventoryOfLivestockBoolExp>
}

export type Subscription_RootProduceArgs = {
  distinctOn?: InputMaybe<Array<ProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProduceOrderBy>>
  where?: InputMaybe<ProduceBoolExp>
}

export type Subscription_RootProduceAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProduceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProduceOrderBy>>
  where?: InputMaybe<ProduceBoolExp>
}

export type Subscription_RootProduceStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Produce_StreamCursorInput>>
  where?: InputMaybe<ProduceBoolExp>
}

export type Subscription_RootProgramArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProgramOrderBy>>
  where?: InputMaybe<ProgramBoolExp>
}

export type Subscription_RootProgramAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProgramOrderBy>>
  where?: InputMaybe<ProgramBoolExp>
}

export type Subscription_RootProgramBeneficiariesArgs = {
  distinctOn?: InputMaybe<Array<ProgramBeneficiariesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProgramBeneficiariesOrderBy>>
  where?: InputMaybe<ProgramBeneficiariesBoolExp>
}

export type Subscription_RootProgramBeneficiariesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProgramBeneficiariesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProgramBeneficiariesOrderBy>>
  where?: InputMaybe<ProgramBeneficiariesBoolExp>
}

export type Subscription_RootProgramBeneficiariesStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<ProgramBeneficiaries_StreamCursorInput>>
  where?: InputMaybe<ProgramBeneficiariesBoolExp>
}

export type Subscription_RootProgramByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootProgramStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Program_StreamCursorInput>>
  where?: InputMaybe<ProgramBoolExp>
}

export type Subscription_RootRegisteredHouseholdPerYearArgs = {
  distinctOn?: InputMaybe<Array<RegisteredHouseholdPerYearSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RegisteredHouseholdPerYearOrderBy>>
  where?: InputMaybe<RegisteredHouseholdPerYearBoolExp>
}

export type Subscription_RootRegisteredHouseholdPerYearAggregateArgs = {
  distinctOn?: InputMaybe<Array<RegisteredHouseholdPerYearSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RegisteredHouseholdPerYearOrderBy>>
  where?: InputMaybe<RegisteredHouseholdPerYearBoolExp>
}

export type Subscription_RootRegisteredHouseholdPerYearStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<RegisteredHouseholdPerYear_StreamCursorInput>>
  where?: InputMaybe<RegisteredHouseholdPerYearBoolExp>
}

export type Subscription_RootSessionArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SessionOrderBy>>
  where?: InputMaybe<SessionBoolExp>
}

export type Subscription_RootSessionAggregateArgs = {
  distinctOn?: InputMaybe<Array<SessionSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SessionOrderBy>>
  where?: InputMaybe<SessionBoolExp>
}

export type Subscription_RootSessionByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootSessionStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Session_StreamCursorInput>>
  where?: InputMaybe<SessionBoolExp>
}

export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Subscription_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Subscription_RootUserByPkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootUserStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<User_StreamCursorInput>>
  where?: InputMaybe<UserBoolExp>
}

export type Subscription_RootVerificationTokenArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokenSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VerificationTokenOrderBy>>
  where?: InputMaybe<VerificationTokenBoolExp>
}

export type Subscription_RootVerificationTokenAggregateArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokenSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VerificationTokenOrderBy>>
  where?: InputMaybe<VerificationTokenBoolExp>
}

export type Subscription_RootVerificationTokenByPkArgs = {
  token: Scalars['String']
}

export type Subscription_RootVerificationTokenStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<VerificationToken_StreamCursorInput>>
  where?: InputMaybe<VerificationTokenBoolExp>
}

/** Streaming cursor of the table "user" */
export type User_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: User_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type User_StreamCursorValueInput = {
  active?: InputMaybe<Scalars['Boolean']>
  createdAt?: InputMaybe<Scalars['timestamp']>
  email?: InputMaybe<Scalars['String']>
  emailVerified?: InputMaybe<Scalars['timestamptz']>
  firstName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  image?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['userRoleEnum']>
  updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** Streaming cursor of the table "verificationToken" */
export type VerificationToken_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: VerificationToken_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type VerificationToken_StreamCursorValueInput = {
  expires?: InputMaybe<Scalars['timestamptz']>
  identifier?: InputMaybe<Scalars['String']>
  token?: InputMaybe<Scalars['String']>
}
