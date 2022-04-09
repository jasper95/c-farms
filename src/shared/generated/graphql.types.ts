export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _jsonb: any;
  bpchar: any;
  date: any;
  numeric: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_jsonb". All fields are combined with logical 'AND'. */
export type _Jsonb_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_jsonb']>;
  _gt?: InputMaybe<Scalars['_jsonb']>;
  _gte?: InputMaybe<Scalars['_jsonb']>;
  _in?: InputMaybe<Array<Scalars['_jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_jsonb']>;
  _lte?: InputMaybe<Scalars['_jsonb']>;
  _neq?: InputMaybe<Scalars['_jsonb']>;
  _nin?: InputMaybe<Array<Scalars['_jsonb']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** columns and relationships of "crop_commodity" */
export type Crop_Commodity = {
  __typename?: 'crop_commodity';
  /** An object relationship */
  farm: Farm;
  farm_id: Scalars['Int'];
  ha_assigned: Scalars['numeric'];
  id: Scalars['Int'];
  is_organic: Scalars['Boolean'];
  name_type: Scalars['String'];
  no_of_heads?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "crop_commodity" */
export type Crop_Commodity_Aggregate = {
  __typename?: 'crop_commodity_aggregate';
  aggregate?: Maybe<Crop_Commodity_Aggregate_Fields>;
  nodes: Array<Crop_Commodity>;
};

/** aggregate fields of "crop_commodity" */
export type Crop_Commodity_Aggregate_Fields = {
  __typename?: 'crop_commodity_aggregate_fields';
  avg?: Maybe<Crop_Commodity_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Crop_Commodity_Max_Fields>;
  min?: Maybe<Crop_Commodity_Min_Fields>;
  stddev?: Maybe<Crop_Commodity_Stddev_Fields>;
  stddev_pop?: Maybe<Crop_Commodity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Crop_Commodity_Stddev_Samp_Fields>;
  sum?: Maybe<Crop_Commodity_Sum_Fields>;
  var_pop?: Maybe<Crop_Commodity_Var_Pop_Fields>;
  var_samp?: Maybe<Crop_Commodity_Var_Samp_Fields>;
  variance?: Maybe<Crop_Commodity_Variance_Fields>;
};


/** aggregate fields of "crop_commodity" */
export type Crop_Commodity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Crop_Commodity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "crop_commodity" */
export type Crop_Commodity_Aggregate_Order_By = {
  avg?: InputMaybe<Crop_Commodity_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Crop_Commodity_Max_Order_By>;
  min?: InputMaybe<Crop_Commodity_Min_Order_By>;
  stddev?: InputMaybe<Crop_Commodity_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Crop_Commodity_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Crop_Commodity_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Crop_Commodity_Sum_Order_By>;
  var_pop?: InputMaybe<Crop_Commodity_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Crop_Commodity_Var_Samp_Order_By>;
  variance?: InputMaybe<Crop_Commodity_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "crop_commodity" */
export type Crop_Commodity_Arr_Rel_Insert_Input = {
  data: Array<Crop_Commodity_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Crop_Commodity_On_Conflict>;
};

/** aggregate avg on columns */
export type Crop_Commodity_Avg_Fields = {
  __typename?: 'crop_commodity_avg_fields';
  farm_id?: Maybe<Scalars['Float']>;
  ha_assigned?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  no_of_heads?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "crop_commodity" */
export type Crop_Commodity_Avg_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "crop_commodity". All fields are combined with a logical 'AND'. */
export type Crop_Commodity_Bool_Exp = {
  _and?: InputMaybe<Array<Crop_Commodity_Bool_Exp>>;
  _not?: InputMaybe<Crop_Commodity_Bool_Exp>;
  _or?: InputMaybe<Array<Crop_Commodity_Bool_Exp>>;
  farm?: InputMaybe<Farm_Bool_Exp>;
  farm_id?: InputMaybe<Int_Comparison_Exp>;
  ha_assigned?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_organic?: InputMaybe<Boolean_Comparison_Exp>;
  name_type?: InputMaybe<String_Comparison_Exp>;
  no_of_heads?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "crop_commodity" */
export enum Crop_Commodity_Constraint {
  /** unique or primary key constraint */
  CropCommodityPk = 'crop_commodity_pk'
}

/** input type for incrementing numeric columns in table "crop_commodity" */
export type Crop_Commodity_Inc_Input = {
  farm_id?: InputMaybe<Scalars['Int']>;
  ha_assigned?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  no_of_heads?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "crop_commodity" */
export type Crop_Commodity_Insert_Input = {
  farm?: InputMaybe<Farm_Obj_Rel_Insert_Input>;
  farm_id?: InputMaybe<Scalars['Int']>;
  ha_assigned?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  is_organic?: InputMaybe<Scalars['Boolean']>;
  name_type?: InputMaybe<Scalars['String']>;
  no_of_heads?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Crop_Commodity_Max_Fields = {
  __typename?: 'crop_commodity_max_fields';
  farm_id?: Maybe<Scalars['Int']>;
  ha_assigned?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name_type?: Maybe<Scalars['String']>;
  no_of_heads?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "crop_commodity" */
export type Crop_Commodity_Max_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_type?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Crop_Commodity_Min_Fields = {
  __typename?: 'crop_commodity_min_fields';
  farm_id?: Maybe<Scalars['Int']>;
  ha_assigned?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name_type?: Maybe<Scalars['String']>;
  no_of_heads?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "crop_commodity" */
export type Crop_Commodity_Min_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name_type?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "crop_commodity" */
export type Crop_Commodity_Mutation_Response = {
  __typename?: 'crop_commodity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Crop_Commodity>;
};

/** on_conflict condition type for table "crop_commodity" */
export type Crop_Commodity_On_Conflict = {
  constraint: Crop_Commodity_Constraint;
  update_columns?: Array<Crop_Commodity_Update_Column>;
  where?: InputMaybe<Crop_Commodity_Bool_Exp>;
};

/** Ordering options when selecting data from "crop_commodity". */
export type Crop_Commodity_Order_By = {
  farm?: InputMaybe<Farm_Order_By>;
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_organic?: InputMaybe<Order_By>;
  name_type?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** primary key columns input for table: crop_commodity */
export type Crop_Commodity_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "crop_commodity" */
export enum Crop_Commodity_Select_Column {
  /** column name */
  FarmId = 'farm_id',
  /** column name */
  HaAssigned = 'ha_assigned',
  /** column name */
  Id = 'id',
  /** column name */
  IsOrganic = 'is_organic',
  /** column name */
  NameType = 'name_type',
  /** column name */
  NoOfHeads = 'no_of_heads'
}

/** input type for updating data in table "crop_commodity" */
export type Crop_Commodity_Set_Input = {
  farm_id?: InputMaybe<Scalars['Int']>;
  ha_assigned?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  is_organic?: InputMaybe<Scalars['Boolean']>;
  name_type?: InputMaybe<Scalars['String']>;
  no_of_heads?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Crop_Commodity_Stddev_Fields = {
  __typename?: 'crop_commodity_stddev_fields';
  farm_id?: Maybe<Scalars['Float']>;
  ha_assigned?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  no_of_heads?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "crop_commodity" */
export type Crop_Commodity_Stddev_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Crop_Commodity_Stddev_Pop_Fields = {
  __typename?: 'crop_commodity_stddev_pop_fields';
  farm_id?: Maybe<Scalars['Float']>;
  ha_assigned?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  no_of_heads?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "crop_commodity" */
export type Crop_Commodity_Stddev_Pop_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Crop_Commodity_Stddev_Samp_Fields = {
  __typename?: 'crop_commodity_stddev_samp_fields';
  farm_id?: Maybe<Scalars['Float']>;
  ha_assigned?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  no_of_heads?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "crop_commodity" */
export type Crop_Commodity_Stddev_Samp_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Crop_Commodity_Sum_Fields = {
  __typename?: 'crop_commodity_sum_fields';
  farm_id?: Maybe<Scalars['Int']>;
  ha_assigned?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  no_of_heads?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "crop_commodity" */
export type Crop_Commodity_Sum_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** update columns of table "crop_commodity" */
export enum Crop_Commodity_Update_Column {
  /** column name */
  FarmId = 'farm_id',
  /** column name */
  HaAssigned = 'ha_assigned',
  /** column name */
  Id = 'id',
  /** column name */
  IsOrganic = 'is_organic',
  /** column name */
  NameType = 'name_type',
  /** column name */
  NoOfHeads = 'no_of_heads'
}

/** aggregate var_pop on columns */
export type Crop_Commodity_Var_Pop_Fields = {
  __typename?: 'crop_commodity_var_pop_fields';
  farm_id?: Maybe<Scalars['Float']>;
  ha_assigned?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  no_of_heads?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "crop_commodity" */
export type Crop_Commodity_Var_Pop_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Crop_Commodity_Var_Samp_Fields = {
  __typename?: 'crop_commodity_var_samp_fields';
  farm_id?: Maybe<Scalars['Float']>;
  ha_assigned?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  no_of_heads?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "crop_commodity" */
export type Crop_Commodity_Var_Samp_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Crop_Commodity_Variance_Fields = {
  __typename?: 'crop_commodity_variance_fields';
  farm_id?: Maybe<Scalars['Float']>;
  ha_assigned?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  no_of_heads?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "crop_commodity" */
export type Crop_Commodity_Variance_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  ha_assigned?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_heads?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "farm" */
export type Farm = {
  __typename?: 'farm';
  /** An array relationship */
  crop_commodities: Array<Crop_Commodity>;
  /** An aggregate relationship */
  crop_commodities_aggregate: Crop_Commodity_Aggregate;
  farm_type: Scalars['String'];
  id: Scalars['Int'];
  is_ancestral: Scalars['Boolean'];
  is_arb: Scalars['Boolean'];
  location?: Maybe<Scalars['_jsonb']>;
  owner_name: Scalars['String'];
  ownership_document: Scalars['String'];
  size_ha_total: Scalars['numeric'];
};


/** columns and relationships of "farm" */
export type FarmCrop_CommoditiesArgs = {
  distinct_on?: InputMaybe<Array<Crop_Commodity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crop_Commodity_Order_By>>;
  where?: InputMaybe<Crop_Commodity_Bool_Exp>;
};


/** columns and relationships of "farm" */
export type FarmCrop_Commodities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crop_Commodity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crop_Commodity_Order_By>>;
  where?: InputMaybe<Crop_Commodity_Bool_Exp>;
};

/** aggregated selection of "farm" */
export type Farm_Aggregate = {
  __typename?: 'farm_aggregate';
  aggregate?: Maybe<Farm_Aggregate_Fields>;
  nodes: Array<Farm>;
};

/** aggregate fields of "farm" */
export type Farm_Aggregate_Fields = {
  __typename?: 'farm_aggregate_fields';
  avg?: Maybe<Farm_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Farm_Max_Fields>;
  min?: Maybe<Farm_Min_Fields>;
  stddev?: Maybe<Farm_Stddev_Fields>;
  stddev_pop?: Maybe<Farm_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Farm_Stddev_Samp_Fields>;
  sum?: Maybe<Farm_Sum_Fields>;
  var_pop?: Maybe<Farm_Var_Pop_Fields>;
  var_samp?: Maybe<Farm_Var_Samp_Fields>;
  variance?: Maybe<Farm_Variance_Fields>;
};


/** aggregate fields of "farm" */
export type Farm_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Farm_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Farm_Avg_Fields = {
  __typename?: 'farm_avg_fields';
  id?: Maybe<Scalars['Float']>;
  size_ha_total?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "farm". All fields are combined with a logical 'AND'. */
export type Farm_Bool_Exp = {
  _and?: InputMaybe<Array<Farm_Bool_Exp>>;
  _not?: InputMaybe<Farm_Bool_Exp>;
  _or?: InputMaybe<Array<Farm_Bool_Exp>>;
  crop_commodities?: InputMaybe<Crop_Commodity_Bool_Exp>;
  farm_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_ancestral?: InputMaybe<Boolean_Comparison_Exp>;
  is_arb?: InputMaybe<Boolean_Comparison_Exp>;
  location?: InputMaybe<_Jsonb_Comparison_Exp>;
  owner_name?: InputMaybe<String_Comparison_Exp>;
  ownership_document?: InputMaybe<String_Comparison_Exp>;
  size_ha_total?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "farm" */
export enum Farm_Constraint {
  /** unique or primary key constraint */
  FarmPk = 'farm_pk'
}

/** columns and relationships of "farm_household" */
export type Farm_Household = {
  __typename?: 'farm_household';
  barangay?: Maybe<Scalars['String']>;
  civil_status?: Maybe<Scalars['String']>;
  contact_no?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['date']>;
  emergency_contact_no?: Maybe<Scalars['String']>;
  emergency_contact_person: Scalars['String'];
  extname?: Maybe<Scalars['String']>;
  /** An array relationship */
  farm_household_assignments: Array<Farm_Household_Assignment>;
  /** An aggregate relationship */
  farm_household_assignments_aggregate: Farm_Household_Assignment_Aggregate;
  farmer_association: Scalars['String'];
  farming_activity_type: Scalars['String'];
  fname: Scalars['String'];
  gov_id_no: Scalars['String'];
  gross_ann_farming?: Maybe<Scalars['numeric']>;
  gross_ann_non_farm?: Maybe<Scalars['String']>;
  head_name?: Maybe<Scalars['String']>;
  highest_education: Scalars['String'];
  house_no: Scalars['String'];
  id: Scalars['Int'];
  ip_membership?: Maybe<Scalars['String']>;
  is_4ps: Scalars['Boolean'];
  is_pwd: Scalars['Boolean'];
  lname: Scalars['String'];
  main_livelihood: Scalars['String'];
  member_female: Scalars['Int'];
  member_male: Scalars['Int'];
  mname?: Maybe<Scalars['String']>;
  mothers_maiden?: Maybe<Scalars['String']>;
  municipality?: Maybe<Scalars['String']>;
  pob: Scalars['String'];
  /** An array relationship */
  previous_infos: Array<Previous_Info>;
  /** An aggregate relationship */
  previous_infos_aggregate: Previous_Info_Aggregate;
  province?: Maybe<Scalars['String']>;
  reference_no: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  relationship_head: Scalars['String'];
  religion: Scalars['String'];
  spouse?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  update_yr: Scalars['bpchar'];
};


/** columns and relationships of "farm_household" */
export type Farm_HouseholdFarm_Household_AssignmentsArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Assignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Assignment_Order_By>>;
  where?: InputMaybe<Farm_Household_Assignment_Bool_Exp>;
};


/** columns and relationships of "farm_household" */
export type Farm_HouseholdFarm_Household_Assignments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Assignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Assignment_Order_By>>;
  where?: InputMaybe<Farm_Household_Assignment_Bool_Exp>;
};


/** columns and relationships of "farm_household" */
export type Farm_HouseholdPrevious_InfosArgs = {
  distinct_on?: InputMaybe<Array<Previous_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Previous_Info_Order_By>>;
  where?: InputMaybe<Previous_Info_Bool_Exp>;
};


/** columns and relationships of "farm_household" */
export type Farm_HouseholdPrevious_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Previous_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Previous_Info_Order_By>>;
  where?: InputMaybe<Previous_Info_Bool_Exp>;
};

/** aggregated selection of "farm_household" */
export type Farm_Household_Aggregate = {
  __typename?: 'farm_household_aggregate';
  aggregate?: Maybe<Farm_Household_Aggregate_Fields>;
  nodes: Array<Farm_Household>;
};

/** aggregate fields of "farm_household" */
export type Farm_Household_Aggregate_Fields = {
  __typename?: 'farm_household_aggregate_fields';
  avg?: Maybe<Farm_Household_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Farm_Household_Max_Fields>;
  min?: Maybe<Farm_Household_Min_Fields>;
  stddev?: Maybe<Farm_Household_Stddev_Fields>;
  stddev_pop?: Maybe<Farm_Household_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Farm_Household_Stddev_Samp_Fields>;
  sum?: Maybe<Farm_Household_Sum_Fields>;
  var_pop?: Maybe<Farm_Household_Var_Pop_Fields>;
  var_samp?: Maybe<Farm_Household_Var_Samp_Fields>;
  variance?: Maybe<Farm_Household_Variance_Fields>;
};


/** aggregate fields of "farm_household" */
export type Farm_Household_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Farm_Household_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** columns and relationships of "farm_household_assignment" */
export type Farm_Household_Assignment = {
  __typename?: 'farm_household_assignment';
  /** An object relationship */
  farm_household: Farm_Household;
  farm_id: Scalars['Int'];
  household_id: Scalars['Int'];
  id: Scalars['Int'];
  role: Scalars['String'];
};

/** aggregated selection of "farm_household_assignment" */
export type Farm_Household_Assignment_Aggregate = {
  __typename?: 'farm_household_assignment_aggregate';
  aggregate?: Maybe<Farm_Household_Assignment_Aggregate_Fields>;
  nodes: Array<Farm_Household_Assignment>;
};

/** aggregate fields of "farm_household_assignment" */
export type Farm_Household_Assignment_Aggregate_Fields = {
  __typename?: 'farm_household_assignment_aggregate_fields';
  avg?: Maybe<Farm_Household_Assignment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Farm_Household_Assignment_Max_Fields>;
  min?: Maybe<Farm_Household_Assignment_Min_Fields>;
  stddev?: Maybe<Farm_Household_Assignment_Stddev_Fields>;
  stddev_pop?: Maybe<Farm_Household_Assignment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Farm_Household_Assignment_Stddev_Samp_Fields>;
  sum?: Maybe<Farm_Household_Assignment_Sum_Fields>;
  var_pop?: Maybe<Farm_Household_Assignment_Var_Pop_Fields>;
  var_samp?: Maybe<Farm_Household_Assignment_Var_Samp_Fields>;
  variance?: Maybe<Farm_Household_Assignment_Variance_Fields>;
};


/** aggregate fields of "farm_household_assignment" */
export type Farm_Household_Assignment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Farm_Household_Assignment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "farm_household_assignment" */
export type Farm_Household_Assignment_Aggregate_Order_By = {
  avg?: InputMaybe<Farm_Household_Assignment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Farm_Household_Assignment_Max_Order_By>;
  min?: InputMaybe<Farm_Household_Assignment_Min_Order_By>;
  stddev?: InputMaybe<Farm_Household_Assignment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Farm_Household_Assignment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Farm_Household_Assignment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Farm_Household_Assignment_Sum_Order_By>;
  var_pop?: InputMaybe<Farm_Household_Assignment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Farm_Household_Assignment_Var_Samp_Order_By>;
  variance?: InputMaybe<Farm_Household_Assignment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "farm_household_assignment" */
export type Farm_Household_Assignment_Arr_Rel_Insert_Input = {
  data: Array<Farm_Household_Assignment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Farm_Household_Assignment_On_Conflict>;
};

/** aggregate avg on columns */
export type Farm_Household_Assignment_Avg_Fields = {
  __typename?: 'farm_household_assignment_avg_fields';
  farm_id?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Avg_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "farm_household_assignment". All fields are combined with a logical 'AND'. */
export type Farm_Household_Assignment_Bool_Exp = {
  _and?: InputMaybe<Array<Farm_Household_Assignment_Bool_Exp>>;
  _not?: InputMaybe<Farm_Household_Assignment_Bool_Exp>;
  _or?: InputMaybe<Array<Farm_Household_Assignment_Bool_Exp>>;
  farm_household?: InputMaybe<Farm_Household_Bool_Exp>;
  farm_id?: InputMaybe<Int_Comparison_Exp>;
  household_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "farm_household_assignment" */
export enum Farm_Household_Assignment_Constraint {
  /** unique or primary key constraint */
  FarmHouseholdAssignmentPk = 'farm_household_assignment_pk'
}

/** input type for incrementing numeric columns in table "farm_household_assignment" */
export type Farm_Household_Assignment_Inc_Input = {
  farm_id?: InputMaybe<Scalars['Int']>;
  household_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "farm_household_assignment" */
export type Farm_Household_Assignment_Insert_Input = {
  farm_household?: InputMaybe<Farm_Household_Obj_Rel_Insert_Input>;
  farm_id?: InputMaybe<Scalars['Int']>;
  household_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Farm_Household_Assignment_Max_Fields = {
  __typename?: 'farm_household_assignment_max_fields';
  farm_id?: Maybe<Scalars['Int']>;
  household_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Max_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Farm_Household_Assignment_Min_Fields = {
  __typename?: 'farm_household_assignment_min_fields';
  farm_id?: Maybe<Scalars['Int']>;
  household_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Min_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "farm_household_assignment" */
export type Farm_Household_Assignment_Mutation_Response = {
  __typename?: 'farm_household_assignment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Farm_Household_Assignment>;
};

/** on_conflict condition type for table "farm_household_assignment" */
export type Farm_Household_Assignment_On_Conflict = {
  constraint: Farm_Household_Assignment_Constraint;
  update_columns?: Array<Farm_Household_Assignment_Update_Column>;
  where?: InputMaybe<Farm_Household_Assignment_Bool_Exp>;
};

/** Ordering options when selecting data from "farm_household_assignment". */
export type Farm_Household_Assignment_Order_By = {
  farm_household?: InputMaybe<Farm_Household_Order_By>;
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: farm_household_assignment */
export type Farm_Household_Assignment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "farm_household_assignment" */
export enum Farm_Household_Assignment_Select_Column {
  /** column name */
  FarmId = 'farm_id',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "farm_household_assignment" */
export type Farm_Household_Assignment_Set_Input = {
  farm_id?: InputMaybe<Scalars['Int']>;
  household_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Farm_Household_Assignment_Stddev_Fields = {
  __typename?: 'farm_household_assignment_stddev_fields';
  farm_id?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Stddev_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Farm_Household_Assignment_Stddev_Pop_Fields = {
  __typename?: 'farm_household_assignment_stddev_pop_fields';
  farm_id?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Stddev_Pop_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Farm_Household_Assignment_Stddev_Samp_Fields = {
  __typename?: 'farm_household_assignment_stddev_samp_fields';
  farm_id?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Stddev_Samp_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Farm_Household_Assignment_Sum_Fields = {
  __typename?: 'farm_household_assignment_sum_fields';
  farm_id?: Maybe<Scalars['Int']>;
  household_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Sum_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "farm_household_assignment" */
export enum Farm_Household_Assignment_Update_Column {
  /** column name */
  FarmId = 'farm_id',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** aggregate var_pop on columns */
export type Farm_Household_Assignment_Var_Pop_Fields = {
  __typename?: 'farm_household_assignment_var_pop_fields';
  farm_id?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Var_Pop_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Farm_Household_Assignment_Var_Samp_Fields = {
  __typename?: 'farm_household_assignment_var_samp_fields';
  farm_id?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Var_Samp_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Farm_Household_Assignment_Variance_Fields = {
  __typename?: 'farm_household_assignment_variance_fields';
  farm_id?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "farm_household_assignment" */
export type Farm_Household_Assignment_Variance_Order_By = {
  farm_id?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate avg on columns */
export type Farm_Household_Avg_Fields = {
  __typename?: 'farm_household_avg_fields';
  gross_ann_farming?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "farm_household". All fields are combined with a logical 'AND'. */
export type Farm_Household_Bool_Exp = {
  _and?: InputMaybe<Array<Farm_Household_Bool_Exp>>;
  _not?: InputMaybe<Farm_Household_Bool_Exp>;
  _or?: InputMaybe<Array<Farm_Household_Bool_Exp>>;
  barangay?: InputMaybe<String_Comparison_Exp>;
  civil_status?: InputMaybe<String_Comparison_Exp>;
  contact_no?: InputMaybe<String_Comparison_Exp>;
  dob?: InputMaybe<Date_Comparison_Exp>;
  emergency_contact_no?: InputMaybe<String_Comparison_Exp>;
  emergency_contact_person?: InputMaybe<String_Comparison_Exp>;
  extname?: InputMaybe<String_Comparison_Exp>;
  farm_household_assignments?: InputMaybe<Farm_Household_Assignment_Bool_Exp>;
  farmer_association?: InputMaybe<String_Comparison_Exp>;
  farming_activity_type?: InputMaybe<String_Comparison_Exp>;
  fname?: InputMaybe<String_Comparison_Exp>;
  gov_id_no?: InputMaybe<String_Comparison_Exp>;
  gross_ann_farming?: InputMaybe<Numeric_Comparison_Exp>;
  gross_ann_non_farm?: InputMaybe<String_Comparison_Exp>;
  head_name?: InputMaybe<String_Comparison_Exp>;
  highest_education?: InputMaybe<String_Comparison_Exp>;
  house_no?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ip_membership?: InputMaybe<String_Comparison_Exp>;
  is_4ps?: InputMaybe<Boolean_Comparison_Exp>;
  is_pwd?: InputMaybe<Boolean_Comparison_Exp>;
  lname?: InputMaybe<String_Comparison_Exp>;
  main_livelihood?: InputMaybe<String_Comparison_Exp>;
  member_female?: InputMaybe<Int_Comparison_Exp>;
  member_male?: InputMaybe<Int_Comparison_Exp>;
  mname?: InputMaybe<String_Comparison_Exp>;
  mothers_maiden?: InputMaybe<String_Comparison_Exp>;
  municipality?: InputMaybe<String_Comparison_Exp>;
  pob?: InputMaybe<String_Comparison_Exp>;
  previous_infos?: InputMaybe<Previous_Info_Bool_Exp>;
  province?: InputMaybe<String_Comparison_Exp>;
  reference_no?: InputMaybe<String_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  relationship_head?: InputMaybe<String_Comparison_Exp>;
  religion?: InputMaybe<String_Comparison_Exp>;
  spouse?: InputMaybe<String_Comparison_Exp>;
  street?: InputMaybe<String_Comparison_Exp>;
  update_yr?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "farm_household" */
export enum Farm_Household_Constraint {
  /** unique or primary key constraint */
  FarmHouseholdPk = 'farm_household_pk',
  /** unique or primary key constraint */
  FarmHouseholdUn = 'farm_household_un'
}

/** input type for incrementing numeric columns in table "farm_household" */
export type Farm_Household_Inc_Input = {
  gross_ann_farming?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  member_female?: InputMaybe<Scalars['Int']>;
  member_male?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "farm_household" */
export type Farm_Household_Insert_Input = {
  barangay?: InputMaybe<Scalars['String']>;
  civil_status?: InputMaybe<Scalars['String']>;
  contact_no?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['date']>;
  emergency_contact_no?: InputMaybe<Scalars['String']>;
  emergency_contact_person?: InputMaybe<Scalars['String']>;
  extname?: InputMaybe<Scalars['String']>;
  farm_household_assignments?: InputMaybe<Farm_Household_Assignment_Arr_Rel_Insert_Input>;
  farmer_association?: InputMaybe<Scalars['String']>;
  farming_activity_type?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  gov_id_no?: InputMaybe<Scalars['String']>;
  gross_ann_farming?: InputMaybe<Scalars['numeric']>;
  gross_ann_non_farm?: InputMaybe<Scalars['String']>;
  head_name?: InputMaybe<Scalars['String']>;
  highest_education?: InputMaybe<Scalars['String']>;
  house_no?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ip_membership?: InputMaybe<Scalars['String']>;
  is_4ps?: InputMaybe<Scalars['Boolean']>;
  is_pwd?: InputMaybe<Scalars['Boolean']>;
  lname?: InputMaybe<Scalars['String']>;
  main_livelihood?: InputMaybe<Scalars['String']>;
  member_female?: InputMaybe<Scalars['Int']>;
  member_male?: InputMaybe<Scalars['Int']>;
  mname?: InputMaybe<Scalars['String']>;
  mothers_maiden?: InputMaybe<Scalars['String']>;
  municipality?: InputMaybe<Scalars['String']>;
  pob?: InputMaybe<Scalars['String']>;
  previous_infos?: InputMaybe<Previous_Info_Arr_Rel_Insert_Input>;
  province?: InputMaybe<Scalars['String']>;
  reference_no?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  relationship_head?: InputMaybe<Scalars['String']>;
  religion?: InputMaybe<Scalars['String']>;
  spouse?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  update_yr?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Farm_Household_Max_Fields = {
  __typename?: 'farm_household_max_fields';
  barangay?: Maybe<Scalars['String']>;
  civil_status?: Maybe<Scalars['String']>;
  contact_no?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['date']>;
  emergency_contact_no?: Maybe<Scalars['String']>;
  emergency_contact_person?: Maybe<Scalars['String']>;
  extname?: Maybe<Scalars['String']>;
  farmer_association?: Maybe<Scalars['String']>;
  farming_activity_type?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  gov_id_no?: Maybe<Scalars['String']>;
  gross_ann_farming?: Maybe<Scalars['numeric']>;
  gross_ann_non_farm?: Maybe<Scalars['String']>;
  head_name?: Maybe<Scalars['String']>;
  highest_education?: Maybe<Scalars['String']>;
  house_no?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ip_membership?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  main_livelihood?: Maybe<Scalars['String']>;
  member_female?: Maybe<Scalars['Int']>;
  member_male?: Maybe<Scalars['Int']>;
  mname?: Maybe<Scalars['String']>;
  mothers_maiden?: Maybe<Scalars['String']>;
  municipality?: Maybe<Scalars['String']>;
  pob?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  reference_no?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  relationship_head?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  spouse?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  update_yr?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Farm_Household_Min_Fields = {
  __typename?: 'farm_household_min_fields';
  barangay?: Maybe<Scalars['String']>;
  civil_status?: Maybe<Scalars['String']>;
  contact_no?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['date']>;
  emergency_contact_no?: Maybe<Scalars['String']>;
  emergency_contact_person?: Maybe<Scalars['String']>;
  extname?: Maybe<Scalars['String']>;
  farmer_association?: Maybe<Scalars['String']>;
  farming_activity_type?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  gov_id_no?: Maybe<Scalars['String']>;
  gross_ann_farming?: Maybe<Scalars['numeric']>;
  gross_ann_non_farm?: Maybe<Scalars['String']>;
  head_name?: Maybe<Scalars['String']>;
  highest_education?: Maybe<Scalars['String']>;
  house_no?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ip_membership?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  main_livelihood?: Maybe<Scalars['String']>;
  member_female?: Maybe<Scalars['Int']>;
  member_male?: Maybe<Scalars['Int']>;
  mname?: Maybe<Scalars['String']>;
  mothers_maiden?: Maybe<Scalars['String']>;
  municipality?: Maybe<Scalars['String']>;
  pob?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  reference_no?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  relationship_head?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  spouse?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  update_yr?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "farm_household" */
export type Farm_Household_Mutation_Response = {
  __typename?: 'farm_household_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Farm_Household>;
};

/** input type for inserting object relation for remote table "farm_household" */
export type Farm_Household_Obj_Rel_Insert_Input = {
  data: Farm_Household_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Farm_Household_On_Conflict>;
};

/** on_conflict condition type for table "farm_household" */
export type Farm_Household_On_Conflict = {
  constraint: Farm_Household_Constraint;
  update_columns?: Array<Farm_Household_Update_Column>;
  where?: InputMaybe<Farm_Household_Bool_Exp>;
};

/** Ordering options when selecting data from "farm_household". */
export type Farm_Household_Order_By = {
  barangay?: InputMaybe<Order_By>;
  civil_status?: InputMaybe<Order_By>;
  contact_no?: InputMaybe<Order_By>;
  dob?: InputMaybe<Order_By>;
  emergency_contact_no?: InputMaybe<Order_By>;
  emergency_contact_person?: InputMaybe<Order_By>;
  extname?: InputMaybe<Order_By>;
  farm_household_assignments_aggregate?: InputMaybe<Farm_Household_Assignment_Aggregate_Order_By>;
  farmer_association?: InputMaybe<Order_By>;
  farming_activity_type?: InputMaybe<Order_By>;
  fname?: InputMaybe<Order_By>;
  gov_id_no?: InputMaybe<Order_By>;
  gross_ann_farming?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  head_name?: InputMaybe<Order_By>;
  highest_education?: InputMaybe<Order_By>;
  house_no?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_membership?: InputMaybe<Order_By>;
  is_4ps?: InputMaybe<Order_By>;
  is_pwd?: InputMaybe<Order_By>;
  lname?: InputMaybe<Order_By>;
  main_livelihood?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
  mname?: InputMaybe<Order_By>;
  mothers_maiden?: InputMaybe<Order_By>;
  municipality?: InputMaybe<Order_By>;
  pob?: InputMaybe<Order_By>;
  previous_infos_aggregate?: InputMaybe<Previous_Info_Aggregate_Order_By>;
  province?: InputMaybe<Order_By>;
  reference_no?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  relationship_head?: InputMaybe<Order_By>;
  religion?: InputMaybe<Order_By>;
  spouse?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  update_yr?: InputMaybe<Order_By>;
};

/** primary key columns input for table: farm_household */
export type Farm_Household_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "farm_household" */
export enum Farm_Household_Select_Column {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  CivilStatus = 'civil_status',
  /** column name */
  ContactNo = 'contact_no',
  /** column name */
  Dob = 'dob',
  /** column name */
  EmergencyContactNo = 'emergency_contact_no',
  /** column name */
  EmergencyContactPerson = 'emergency_contact_person',
  /** column name */
  Extname = 'extname',
  /** column name */
  FarmerAssociation = 'farmer_association',
  /** column name */
  FarmingActivityType = 'farming_activity_type',
  /** column name */
  Fname = 'fname',
  /** column name */
  GovIdNo = 'gov_id_no',
  /** column name */
  GrossAnnFarming = 'gross_ann_farming',
  /** column name */
  GrossAnnNonFarm = 'gross_ann_non_farm',
  /** column name */
  HeadName = 'head_name',
  /** column name */
  HighestEducation = 'highest_education',
  /** column name */
  HouseNo = 'house_no',
  /** column name */
  Id = 'id',
  /** column name */
  IpMembership = 'ip_membership',
  /** column name */
  Is_4ps = 'is_4ps',
  /** column name */
  IsPwd = 'is_pwd',
  /** column name */
  Lname = 'lname',
  /** column name */
  MainLivelihood = 'main_livelihood',
  /** column name */
  MemberFemale = 'member_female',
  /** column name */
  MemberMale = 'member_male',
  /** column name */
  Mname = 'mname',
  /** column name */
  MothersMaiden = 'mothers_maiden',
  /** column name */
  Municipality = 'municipality',
  /** column name */
  Pob = 'pob',
  /** column name */
  Province = 'province',
  /** column name */
  ReferenceNo = 'reference_no',
  /** column name */
  Region = 'region',
  /** column name */
  RelationshipHead = 'relationship_head',
  /** column name */
  Religion = 'religion',
  /** column name */
  Spouse = 'spouse',
  /** column name */
  Street = 'street',
  /** column name */
  UpdateYr = 'update_yr'
}

/** input type for updating data in table "farm_household" */
export type Farm_Household_Set_Input = {
  barangay?: InputMaybe<Scalars['String']>;
  civil_status?: InputMaybe<Scalars['String']>;
  contact_no?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['date']>;
  emergency_contact_no?: InputMaybe<Scalars['String']>;
  emergency_contact_person?: InputMaybe<Scalars['String']>;
  extname?: InputMaybe<Scalars['String']>;
  farmer_association?: InputMaybe<Scalars['String']>;
  farming_activity_type?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  gov_id_no?: InputMaybe<Scalars['String']>;
  gross_ann_farming?: InputMaybe<Scalars['numeric']>;
  gross_ann_non_farm?: InputMaybe<Scalars['String']>;
  head_name?: InputMaybe<Scalars['String']>;
  highest_education?: InputMaybe<Scalars['String']>;
  house_no?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ip_membership?: InputMaybe<Scalars['String']>;
  is_4ps?: InputMaybe<Scalars['Boolean']>;
  is_pwd?: InputMaybe<Scalars['Boolean']>;
  lname?: InputMaybe<Scalars['String']>;
  main_livelihood?: InputMaybe<Scalars['String']>;
  member_female?: InputMaybe<Scalars['Int']>;
  member_male?: InputMaybe<Scalars['Int']>;
  mname?: InputMaybe<Scalars['String']>;
  mothers_maiden?: InputMaybe<Scalars['String']>;
  municipality?: InputMaybe<Scalars['String']>;
  pob?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  reference_no?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  relationship_head?: InputMaybe<Scalars['String']>;
  religion?: InputMaybe<Scalars['String']>;
  spouse?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  update_yr?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Farm_Household_Stddev_Fields = {
  __typename?: 'farm_household_stddev_fields';
  gross_ann_farming?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Farm_Household_Stddev_Pop_Fields = {
  __typename?: 'farm_household_stddev_pop_fields';
  gross_ann_farming?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Farm_Household_Stddev_Samp_Fields = {
  __typename?: 'farm_household_stddev_samp_fields';
  gross_ann_farming?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Farm_Household_Sum_Fields = {
  __typename?: 'farm_household_sum_fields';
  gross_ann_farming?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  member_female?: Maybe<Scalars['Int']>;
  member_male?: Maybe<Scalars['Int']>;
};

/** update columns of table "farm_household" */
export enum Farm_Household_Update_Column {
  /** column name */
  Barangay = 'barangay',
  /** column name */
  CivilStatus = 'civil_status',
  /** column name */
  ContactNo = 'contact_no',
  /** column name */
  Dob = 'dob',
  /** column name */
  EmergencyContactNo = 'emergency_contact_no',
  /** column name */
  EmergencyContactPerson = 'emergency_contact_person',
  /** column name */
  Extname = 'extname',
  /** column name */
  FarmerAssociation = 'farmer_association',
  /** column name */
  FarmingActivityType = 'farming_activity_type',
  /** column name */
  Fname = 'fname',
  /** column name */
  GovIdNo = 'gov_id_no',
  /** column name */
  GrossAnnFarming = 'gross_ann_farming',
  /** column name */
  GrossAnnNonFarm = 'gross_ann_non_farm',
  /** column name */
  HeadName = 'head_name',
  /** column name */
  HighestEducation = 'highest_education',
  /** column name */
  HouseNo = 'house_no',
  /** column name */
  Id = 'id',
  /** column name */
  IpMembership = 'ip_membership',
  /** column name */
  Is_4ps = 'is_4ps',
  /** column name */
  IsPwd = 'is_pwd',
  /** column name */
  Lname = 'lname',
  /** column name */
  MainLivelihood = 'main_livelihood',
  /** column name */
  MemberFemale = 'member_female',
  /** column name */
  MemberMale = 'member_male',
  /** column name */
  Mname = 'mname',
  /** column name */
  MothersMaiden = 'mothers_maiden',
  /** column name */
  Municipality = 'municipality',
  /** column name */
  Pob = 'pob',
  /** column name */
  Province = 'province',
  /** column name */
  ReferenceNo = 'reference_no',
  /** column name */
  Region = 'region',
  /** column name */
  RelationshipHead = 'relationship_head',
  /** column name */
  Religion = 'religion',
  /** column name */
  Spouse = 'spouse',
  /** column name */
  Street = 'street',
  /** column name */
  UpdateYr = 'update_yr'
}

/** aggregate var_pop on columns */
export type Farm_Household_Var_Pop_Fields = {
  __typename?: 'farm_household_var_pop_fields';
  gross_ann_farming?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Farm_Household_Var_Samp_Fields = {
  __typename?: 'farm_household_var_samp_fields';
  gross_ann_farming?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Farm_Household_Variance_Fields = {
  __typename?: 'farm_household_variance_fields';
  gross_ann_farming?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "farm" */
export type Farm_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  size_ha_total?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "farm" */
export type Farm_Insert_Input = {
  crop_commodities?: InputMaybe<Crop_Commodity_Arr_Rel_Insert_Input>;
  farm_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_ancestral?: InputMaybe<Scalars['Boolean']>;
  is_arb?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['_jsonb']>;
  owner_name?: InputMaybe<Scalars['String']>;
  ownership_document?: InputMaybe<Scalars['String']>;
  size_ha_total?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Farm_Max_Fields = {
  __typename?: 'farm_max_fields';
  farm_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  owner_name?: Maybe<Scalars['String']>;
  ownership_document?: Maybe<Scalars['String']>;
  size_ha_total?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Farm_Min_Fields = {
  __typename?: 'farm_min_fields';
  farm_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  owner_name?: Maybe<Scalars['String']>;
  ownership_document?: Maybe<Scalars['String']>;
  size_ha_total?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "farm" */
export type Farm_Mutation_Response = {
  __typename?: 'farm_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Farm>;
};

/** input type for inserting object relation for remote table "farm" */
export type Farm_Obj_Rel_Insert_Input = {
  data: Farm_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Farm_On_Conflict>;
};

/** on_conflict condition type for table "farm" */
export type Farm_On_Conflict = {
  constraint: Farm_Constraint;
  update_columns?: Array<Farm_Update_Column>;
  where?: InputMaybe<Farm_Bool_Exp>;
};

/** Ordering options when selecting data from "farm". */
export type Farm_Order_By = {
  crop_commodities_aggregate?: InputMaybe<Crop_Commodity_Aggregate_Order_By>;
  farm_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_ancestral?: InputMaybe<Order_By>;
  is_arb?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  owner_name?: InputMaybe<Order_By>;
  ownership_document?: InputMaybe<Order_By>;
  size_ha_total?: InputMaybe<Order_By>;
};

/** primary key columns input for table: farm */
export type Farm_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "farm" */
export enum Farm_Select_Column {
  /** column name */
  FarmType = 'farm_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsAncestral = 'is_ancestral',
  /** column name */
  IsArb = 'is_arb',
  /** column name */
  Location = 'location',
  /** column name */
  OwnerName = 'owner_name',
  /** column name */
  OwnershipDocument = 'ownership_document',
  /** column name */
  SizeHaTotal = 'size_ha_total'
}

/** input type for updating data in table "farm" */
export type Farm_Set_Input = {
  farm_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_ancestral?: InputMaybe<Scalars['Boolean']>;
  is_arb?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['_jsonb']>;
  owner_name?: InputMaybe<Scalars['String']>;
  ownership_document?: InputMaybe<Scalars['String']>;
  size_ha_total?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Farm_Stddev_Fields = {
  __typename?: 'farm_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  size_ha_total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Farm_Stddev_Pop_Fields = {
  __typename?: 'farm_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  size_ha_total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Farm_Stddev_Samp_Fields = {
  __typename?: 'farm_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  size_ha_total?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Farm_Sum_Fields = {
  __typename?: 'farm_sum_fields';
  id?: Maybe<Scalars['Int']>;
  size_ha_total?: Maybe<Scalars['numeric']>;
};

/** update columns of table "farm" */
export enum Farm_Update_Column {
  /** column name */
  FarmType = 'farm_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsAncestral = 'is_ancestral',
  /** column name */
  IsArb = 'is_arb',
  /** column name */
  Location = 'location',
  /** column name */
  OwnerName = 'owner_name',
  /** column name */
  OwnershipDocument = 'ownership_document',
  /** column name */
  SizeHaTotal = 'size_ha_total'
}

/** aggregate var_pop on columns */
export type Farm_Var_Pop_Fields = {
  __typename?: 'farm_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  size_ha_total?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Farm_Var_Samp_Fields = {
  __typename?: 'farm_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  size_ha_total?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Farm_Variance_Fields = {
  __typename?: 'farm_variance_fields';
  id?: Maybe<Scalars['Float']>;
  size_ha_total?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "household_program_availment" */
export type Household_Program_Availment = {
  __typename?: 'household_program_availment';
  date_availed: Scalars['date'];
  id: Scalars['Int'];
  /** An object relationship */
  program: Program;
  program_id: Scalars['Int'];
  remarks?: Maybe<Scalars['String']>;
};

/** aggregated selection of "household_program_availment" */
export type Household_Program_Availment_Aggregate = {
  __typename?: 'household_program_availment_aggregate';
  aggregate?: Maybe<Household_Program_Availment_Aggregate_Fields>;
  nodes: Array<Household_Program_Availment>;
};

/** aggregate fields of "household_program_availment" */
export type Household_Program_Availment_Aggregate_Fields = {
  __typename?: 'household_program_availment_aggregate_fields';
  avg?: Maybe<Household_Program_Availment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Household_Program_Availment_Max_Fields>;
  min?: Maybe<Household_Program_Availment_Min_Fields>;
  stddev?: Maybe<Household_Program_Availment_Stddev_Fields>;
  stddev_pop?: Maybe<Household_Program_Availment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Household_Program_Availment_Stddev_Samp_Fields>;
  sum?: Maybe<Household_Program_Availment_Sum_Fields>;
  var_pop?: Maybe<Household_Program_Availment_Var_Pop_Fields>;
  var_samp?: Maybe<Household_Program_Availment_Var_Samp_Fields>;
  variance?: Maybe<Household_Program_Availment_Variance_Fields>;
};


/** aggregate fields of "household_program_availment" */
export type Household_Program_Availment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Household_Program_Availment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "household_program_availment" */
export type Household_Program_Availment_Aggregate_Order_By = {
  avg?: InputMaybe<Household_Program_Availment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Household_Program_Availment_Max_Order_By>;
  min?: InputMaybe<Household_Program_Availment_Min_Order_By>;
  stddev?: InputMaybe<Household_Program_Availment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Household_Program_Availment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Household_Program_Availment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Household_Program_Availment_Sum_Order_By>;
  var_pop?: InputMaybe<Household_Program_Availment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Household_Program_Availment_Var_Samp_Order_By>;
  variance?: InputMaybe<Household_Program_Availment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "household_program_availment" */
export type Household_Program_Availment_Arr_Rel_Insert_Input = {
  data: Array<Household_Program_Availment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Household_Program_Availment_On_Conflict>;
};

/** aggregate avg on columns */
export type Household_Program_Availment_Avg_Fields = {
  __typename?: 'household_program_availment_avg_fields';
  id?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "household_program_availment" */
export type Household_Program_Availment_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "household_program_availment". All fields are combined with a logical 'AND'. */
export type Household_Program_Availment_Bool_Exp = {
  _and?: InputMaybe<Array<Household_Program_Availment_Bool_Exp>>;
  _not?: InputMaybe<Household_Program_Availment_Bool_Exp>;
  _or?: InputMaybe<Array<Household_Program_Availment_Bool_Exp>>;
  date_availed?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  program?: InputMaybe<Program_Bool_Exp>;
  program_id?: InputMaybe<Int_Comparison_Exp>;
  remarks?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "household_program_availment" */
export enum Household_Program_Availment_Constraint {
  /** unique or primary key constraint */
  HouseholdProgramAvailmentPk = 'household_program_availment_pk'
}

/** input type for incrementing numeric columns in table "household_program_availment" */
export type Household_Program_Availment_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  program_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "household_program_availment" */
export type Household_Program_Availment_Insert_Input = {
  date_availed?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  program?: InputMaybe<Program_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['Int']>;
  remarks?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Household_Program_Availment_Max_Fields = {
  __typename?: 'household_program_availment_max_fields';
  date_availed?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  program_id?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "household_program_availment" */
export type Household_Program_Availment_Max_Order_By = {
  date_availed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Household_Program_Availment_Min_Fields = {
  __typename?: 'household_program_availment_min_fields';
  date_availed?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  program_id?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "household_program_availment" */
export type Household_Program_Availment_Min_Order_By = {
  date_availed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "household_program_availment" */
export type Household_Program_Availment_Mutation_Response = {
  __typename?: 'household_program_availment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Household_Program_Availment>;
};

/** on_conflict condition type for table "household_program_availment" */
export type Household_Program_Availment_On_Conflict = {
  constraint: Household_Program_Availment_Constraint;
  update_columns?: Array<Household_Program_Availment_Update_Column>;
  where?: InputMaybe<Household_Program_Availment_Bool_Exp>;
};

/** Ordering options when selecting data from "household_program_availment". */
export type Household_Program_Availment_Order_By = {
  date_availed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program?: InputMaybe<Program_Order_By>;
  program_id?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
};

/** primary key columns input for table: household_program_availment */
export type Household_Program_Availment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "household_program_availment" */
export enum Household_Program_Availment_Select_Column {
  /** column name */
  DateAvailed = 'date_availed',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  Remarks = 'remarks'
}

/** input type for updating data in table "household_program_availment" */
export type Household_Program_Availment_Set_Input = {
  date_availed?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  program_id?: InputMaybe<Scalars['Int']>;
  remarks?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Household_Program_Availment_Stddev_Fields = {
  __typename?: 'household_program_availment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "household_program_availment" */
export type Household_Program_Availment_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Household_Program_Availment_Stddev_Pop_Fields = {
  __typename?: 'household_program_availment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "household_program_availment" */
export type Household_Program_Availment_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Household_Program_Availment_Stddev_Samp_Fields = {
  __typename?: 'household_program_availment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "household_program_availment" */
export type Household_Program_Availment_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Household_Program_Availment_Sum_Fields = {
  __typename?: 'household_program_availment_sum_fields';
  id?: Maybe<Scalars['Int']>;
  program_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "household_program_availment" */
export type Household_Program_Availment_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** update columns of table "household_program_availment" */
export enum Household_Program_Availment_Update_Column {
  /** column name */
  DateAvailed = 'date_availed',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  Remarks = 'remarks'
}

/** aggregate var_pop on columns */
export type Household_Program_Availment_Var_Pop_Fields = {
  __typename?: 'household_program_availment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "household_program_availment" */
export type Household_Program_Availment_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Household_Program_Availment_Var_Samp_Fields = {
  __typename?: 'household_program_availment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "household_program_availment" */
export type Household_Program_Availment_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Household_Program_Availment_Variance_Fields = {
  __typename?: 'household_program_availment_variance_fields';
  id?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "household_program_availment" */
export type Household_Program_Availment_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "crop_commodity" */
  delete_crop_commodity?: Maybe<Crop_Commodity_Mutation_Response>;
  /** delete single row from the table: "crop_commodity" */
  delete_crop_commodity_by_pk?: Maybe<Crop_Commodity>;
  /** delete data from the table: "farm" */
  delete_farm?: Maybe<Farm_Mutation_Response>;
  /** delete single row from the table: "farm" */
  delete_farm_by_pk?: Maybe<Farm>;
  /** delete data from the table: "farm_household" */
  delete_farm_household?: Maybe<Farm_Household_Mutation_Response>;
  /** delete data from the table: "farm_household_assignment" */
  delete_farm_household_assignment?: Maybe<Farm_Household_Assignment_Mutation_Response>;
  /** delete single row from the table: "farm_household_assignment" */
  delete_farm_household_assignment_by_pk?: Maybe<Farm_Household_Assignment>;
  /** delete single row from the table: "farm_household" */
  delete_farm_household_by_pk?: Maybe<Farm_Household>;
  /** delete data from the table: "household_program_availment" */
  delete_household_program_availment?: Maybe<Household_Program_Availment_Mutation_Response>;
  /** delete single row from the table: "household_program_availment" */
  delete_household_program_availment_by_pk?: Maybe<Household_Program_Availment>;
  /** delete data from the table: "previous_info" */
  delete_previous_info?: Maybe<Previous_Info_Mutation_Response>;
  /** delete single row from the table: "previous_info" */
  delete_previous_info_by_pk?: Maybe<Previous_Info>;
  /** delete data from the table: "program" */
  delete_program?: Maybe<Program_Mutation_Response>;
  /** delete single row from the table: "program" */
  delete_program_by_pk?: Maybe<Program>;
  /** insert data into the table: "crop_commodity" */
  insert_crop_commodity?: Maybe<Crop_Commodity_Mutation_Response>;
  /** insert a single row into the table: "crop_commodity" */
  insert_crop_commodity_one?: Maybe<Crop_Commodity>;
  /** insert data into the table: "farm" */
  insert_farm?: Maybe<Farm_Mutation_Response>;
  /** insert data into the table: "farm_household" */
  insert_farm_household?: Maybe<Farm_Household_Mutation_Response>;
  /** insert data into the table: "farm_household_assignment" */
  insert_farm_household_assignment?: Maybe<Farm_Household_Assignment_Mutation_Response>;
  /** insert a single row into the table: "farm_household_assignment" */
  insert_farm_household_assignment_one?: Maybe<Farm_Household_Assignment>;
  /** insert a single row into the table: "farm_household" */
  insert_farm_household_one?: Maybe<Farm_Household>;
  /** insert a single row into the table: "farm" */
  insert_farm_one?: Maybe<Farm>;
  /** insert data into the table: "household_program_availment" */
  insert_household_program_availment?: Maybe<Household_Program_Availment_Mutation_Response>;
  /** insert a single row into the table: "household_program_availment" */
  insert_household_program_availment_one?: Maybe<Household_Program_Availment>;
  /** insert data into the table: "previous_info" */
  insert_previous_info?: Maybe<Previous_Info_Mutation_Response>;
  /** insert a single row into the table: "previous_info" */
  insert_previous_info_one?: Maybe<Previous_Info>;
  /** insert data into the table: "program" */
  insert_program?: Maybe<Program_Mutation_Response>;
  /** insert a single row into the table: "program" */
  insert_program_one?: Maybe<Program>;
  /** update data of the table: "crop_commodity" */
  update_crop_commodity?: Maybe<Crop_Commodity_Mutation_Response>;
  /** update single row of the table: "crop_commodity" */
  update_crop_commodity_by_pk?: Maybe<Crop_Commodity>;
  /** update data of the table: "farm" */
  update_farm?: Maybe<Farm_Mutation_Response>;
  /** update single row of the table: "farm" */
  update_farm_by_pk?: Maybe<Farm>;
  /** update data of the table: "farm_household" */
  update_farm_household?: Maybe<Farm_Household_Mutation_Response>;
  /** update data of the table: "farm_household_assignment" */
  update_farm_household_assignment?: Maybe<Farm_Household_Assignment_Mutation_Response>;
  /** update single row of the table: "farm_household_assignment" */
  update_farm_household_assignment_by_pk?: Maybe<Farm_Household_Assignment>;
  /** update single row of the table: "farm_household" */
  update_farm_household_by_pk?: Maybe<Farm_Household>;
  /** update data of the table: "household_program_availment" */
  update_household_program_availment?: Maybe<Household_Program_Availment_Mutation_Response>;
  /** update single row of the table: "household_program_availment" */
  update_household_program_availment_by_pk?: Maybe<Household_Program_Availment>;
  /** update data of the table: "previous_info" */
  update_previous_info?: Maybe<Previous_Info_Mutation_Response>;
  /** update single row of the table: "previous_info" */
  update_previous_info_by_pk?: Maybe<Previous_Info>;
  /** update data of the table: "program" */
  update_program?: Maybe<Program_Mutation_Response>;
  /** update single row of the table: "program" */
  update_program_by_pk?: Maybe<Program>;
};


/** mutation root */
export type Mutation_RootDelete_Crop_CommodityArgs = {
  where: Crop_Commodity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Crop_Commodity_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FarmArgs = {
  where: Farm_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Farm_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Farm_HouseholdArgs = {
  where: Farm_Household_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Farm_Household_AssignmentArgs = {
  where: Farm_Household_Assignment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Farm_Household_Assignment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Farm_Household_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Household_Program_AvailmentArgs = {
  where: Household_Program_Availment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Household_Program_Availment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Previous_InfoArgs = {
  where: Previous_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Previous_Info_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProgramArgs = {
  where: Program_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Program_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Crop_CommodityArgs = {
  objects: Array<Crop_Commodity_Insert_Input>;
  on_conflict?: InputMaybe<Crop_Commodity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Crop_Commodity_OneArgs = {
  object: Crop_Commodity_Insert_Input;
  on_conflict?: InputMaybe<Crop_Commodity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FarmArgs = {
  objects: Array<Farm_Insert_Input>;
  on_conflict?: InputMaybe<Farm_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Farm_HouseholdArgs = {
  objects: Array<Farm_Household_Insert_Input>;
  on_conflict?: InputMaybe<Farm_Household_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Farm_Household_AssignmentArgs = {
  objects: Array<Farm_Household_Assignment_Insert_Input>;
  on_conflict?: InputMaybe<Farm_Household_Assignment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Farm_Household_Assignment_OneArgs = {
  object: Farm_Household_Assignment_Insert_Input;
  on_conflict?: InputMaybe<Farm_Household_Assignment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Farm_Household_OneArgs = {
  object: Farm_Household_Insert_Input;
  on_conflict?: InputMaybe<Farm_Household_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Farm_OneArgs = {
  object: Farm_Insert_Input;
  on_conflict?: InputMaybe<Farm_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Household_Program_AvailmentArgs = {
  objects: Array<Household_Program_Availment_Insert_Input>;
  on_conflict?: InputMaybe<Household_Program_Availment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Household_Program_Availment_OneArgs = {
  object: Household_Program_Availment_Insert_Input;
  on_conflict?: InputMaybe<Household_Program_Availment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Previous_InfoArgs = {
  objects: Array<Previous_Info_Insert_Input>;
  on_conflict?: InputMaybe<Previous_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Previous_Info_OneArgs = {
  object: Previous_Info_Insert_Input;
  on_conflict?: InputMaybe<Previous_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProgramArgs = {
  objects: Array<Program_Insert_Input>;
  on_conflict?: InputMaybe<Program_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_OneArgs = {
  object: Program_Insert_Input;
  on_conflict?: InputMaybe<Program_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Crop_CommodityArgs = {
  _inc?: InputMaybe<Crop_Commodity_Inc_Input>;
  _set?: InputMaybe<Crop_Commodity_Set_Input>;
  where: Crop_Commodity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Crop_Commodity_By_PkArgs = {
  _inc?: InputMaybe<Crop_Commodity_Inc_Input>;
  _set?: InputMaybe<Crop_Commodity_Set_Input>;
  pk_columns: Crop_Commodity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FarmArgs = {
  _inc?: InputMaybe<Farm_Inc_Input>;
  _set?: InputMaybe<Farm_Set_Input>;
  where: Farm_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Farm_By_PkArgs = {
  _inc?: InputMaybe<Farm_Inc_Input>;
  _set?: InputMaybe<Farm_Set_Input>;
  pk_columns: Farm_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Farm_HouseholdArgs = {
  _inc?: InputMaybe<Farm_Household_Inc_Input>;
  _set?: InputMaybe<Farm_Household_Set_Input>;
  where: Farm_Household_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Farm_Household_AssignmentArgs = {
  _inc?: InputMaybe<Farm_Household_Assignment_Inc_Input>;
  _set?: InputMaybe<Farm_Household_Assignment_Set_Input>;
  where: Farm_Household_Assignment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Farm_Household_Assignment_By_PkArgs = {
  _inc?: InputMaybe<Farm_Household_Assignment_Inc_Input>;
  _set?: InputMaybe<Farm_Household_Assignment_Set_Input>;
  pk_columns: Farm_Household_Assignment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Farm_Household_By_PkArgs = {
  _inc?: InputMaybe<Farm_Household_Inc_Input>;
  _set?: InputMaybe<Farm_Household_Set_Input>;
  pk_columns: Farm_Household_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Household_Program_AvailmentArgs = {
  _inc?: InputMaybe<Household_Program_Availment_Inc_Input>;
  _set?: InputMaybe<Household_Program_Availment_Set_Input>;
  where: Household_Program_Availment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Household_Program_Availment_By_PkArgs = {
  _inc?: InputMaybe<Household_Program_Availment_Inc_Input>;
  _set?: InputMaybe<Household_Program_Availment_Set_Input>;
  pk_columns: Household_Program_Availment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Previous_InfoArgs = {
  _inc?: InputMaybe<Previous_Info_Inc_Input>;
  _set?: InputMaybe<Previous_Info_Set_Input>;
  where: Previous_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Previous_Info_By_PkArgs = {
  _inc?: InputMaybe<Previous_Info_Inc_Input>;
  _set?: InputMaybe<Previous_Info_Set_Input>;
  pk_columns: Previous_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProgramArgs = {
  _inc?: InputMaybe<Program_Inc_Input>;
  _set?: InputMaybe<Program_Set_Input>;
  where: Program_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Program_By_PkArgs = {
  _inc?: InputMaybe<Program_Inc_Input>;
  _set?: InputMaybe<Program_Set_Input>;
  pk_columns: Program_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "previous_info" */
export type Previous_Info = {
  __typename?: 'previous_info';
  extname?: Maybe<Scalars['String']>;
  /** An object relationship */
  farm_household: Farm_Household;
  farming_activity_type: Scalars['String'];
  fname: Scalars['String'];
  gross_ann_farm: Scalars['numeric'];
  gross_ann_non_farm: Scalars['numeric'];
  highest_education: Scalars['String'];
  household_id: Scalars['Int'];
  id: Scalars['Int'];
  ip_membership: Scalars['String'];
  is_4ps: Scalars['Boolean'];
  is_pwd: Scalars['Boolean'];
  lname: Scalars['String'];
  main_livelihood: Scalars['String'];
  member_female: Scalars['Int'];
  member_male: Scalars['Int'];
  mname?: Maybe<Scalars['String']>;
};

/** aggregated selection of "previous_info" */
export type Previous_Info_Aggregate = {
  __typename?: 'previous_info_aggregate';
  aggregate?: Maybe<Previous_Info_Aggregate_Fields>;
  nodes: Array<Previous_Info>;
};

/** aggregate fields of "previous_info" */
export type Previous_Info_Aggregate_Fields = {
  __typename?: 'previous_info_aggregate_fields';
  avg?: Maybe<Previous_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Previous_Info_Max_Fields>;
  min?: Maybe<Previous_Info_Min_Fields>;
  stddev?: Maybe<Previous_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Previous_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Previous_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Previous_Info_Sum_Fields>;
  var_pop?: Maybe<Previous_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Previous_Info_Var_Samp_Fields>;
  variance?: Maybe<Previous_Info_Variance_Fields>;
};


/** aggregate fields of "previous_info" */
export type Previous_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Previous_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "previous_info" */
export type Previous_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Previous_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Previous_Info_Max_Order_By>;
  min?: InputMaybe<Previous_Info_Min_Order_By>;
  stddev?: InputMaybe<Previous_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Previous_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Previous_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Previous_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Previous_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Previous_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Previous_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "previous_info" */
export type Previous_Info_Arr_Rel_Insert_Input = {
  data: Array<Previous_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Previous_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Previous_Info_Avg_Fields = {
  __typename?: 'previous_info_avg_fields';
  gross_ann_farm?: Maybe<Scalars['Float']>;
  gross_ann_non_farm?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "previous_info" */
export type Previous_Info_Avg_Order_By = {
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "previous_info". All fields are combined with a logical 'AND'. */
export type Previous_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Previous_Info_Bool_Exp>>;
  _not?: InputMaybe<Previous_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Previous_Info_Bool_Exp>>;
  extname?: InputMaybe<String_Comparison_Exp>;
  farm_household?: InputMaybe<Farm_Household_Bool_Exp>;
  farming_activity_type?: InputMaybe<String_Comparison_Exp>;
  fname?: InputMaybe<String_Comparison_Exp>;
  gross_ann_farm?: InputMaybe<Numeric_Comparison_Exp>;
  gross_ann_non_farm?: InputMaybe<Numeric_Comparison_Exp>;
  highest_education?: InputMaybe<String_Comparison_Exp>;
  household_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ip_membership?: InputMaybe<String_Comparison_Exp>;
  is_4ps?: InputMaybe<Boolean_Comparison_Exp>;
  is_pwd?: InputMaybe<Boolean_Comparison_Exp>;
  lname?: InputMaybe<String_Comparison_Exp>;
  main_livelihood?: InputMaybe<String_Comparison_Exp>;
  member_female?: InputMaybe<Int_Comparison_Exp>;
  member_male?: InputMaybe<Int_Comparison_Exp>;
  mname?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "previous_info" */
export enum Previous_Info_Constraint {
  /** unique or primary key constraint */
  PreviousInfoPk = 'previous_info_pk'
}

/** input type for incrementing numeric columns in table "previous_info" */
export type Previous_Info_Inc_Input = {
  gross_ann_farm?: InputMaybe<Scalars['numeric']>;
  gross_ann_non_farm?: InputMaybe<Scalars['numeric']>;
  household_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  member_female?: InputMaybe<Scalars['Int']>;
  member_male?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "previous_info" */
export type Previous_Info_Insert_Input = {
  extname?: InputMaybe<Scalars['String']>;
  farm_household?: InputMaybe<Farm_Household_Obj_Rel_Insert_Input>;
  farming_activity_type?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  gross_ann_farm?: InputMaybe<Scalars['numeric']>;
  gross_ann_non_farm?: InputMaybe<Scalars['numeric']>;
  highest_education?: InputMaybe<Scalars['String']>;
  household_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  ip_membership?: InputMaybe<Scalars['String']>;
  is_4ps?: InputMaybe<Scalars['Boolean']>;
  is_pwd?: InputMaybe<Scalars['Boolean']>;
  lname?: InputMaybe<Scalars['String']>;
  main_livelihood?: InputMaybe<Scalars['String']>;
  member_female?: InputMaybe<Scalars['Int']>;
  member_male?: InputMaybe<Scalars['Int']>;
  mname?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Previous_Info_Max_Fields = {
  __typename?: 'previous_info_max_fields';
  extname?: Maybe<Scalars['String']>;
  farming_activity_type?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  gross_ann_farm?: Maybe<Scalars['numeric']>;
  gross_ann_non_farm?: Maybe<Scalars['numeric']>;
  highest_education?: Maybe<Scalars['String']>;
  household_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ip_membership?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  main_livelihood?: Maybe<Scalars['String']>;
  member_female?: Maybe<Scalars['Int']>;
  member_male?: Maybe<Scalars['Int']>;
  mname?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "previous_info" */
export type Previous_Info_Max_Order_By = {
  extname?: InputMaybe<Order_By>;
  farming_activity_type?: InputMaybe<Order_By>;
  fname?: InputMaybe<Order_By>;
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  highest_education?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_membership?: InputMaybe<Order_By>;
  lname?: InputMaybe<Order_By>;
  main_livelihood?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
  mname?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Previous_Info_Min_Fields = {
  __typename?: 'previous_info_min_fields';
  extname?: Maybe<Scalars['String']>;
  farming_activity_type?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  gross_ann_farm?: Maybe<Scalars['numeric']>;
  gross_ann_non_farm?: Maybe<Scalars['numeric']>;
  highest_education?: Maybe<Scalars['String']>;
  household_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ip_membership?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  main_livelihood?: Maybe<Scalars['String']>;
  member_female?: Maybe<Scalars['Int']>;
  member_male?: Maybe<Scalars['Int']>;
  mname?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "previous_info" */
export type Previous_Info_Min_Order_By = {
  extname?: InputMaybe<Order_By>;
  farming_activity_type?: InputMaybe<Order_By>;
  fname?: InputMaybe<Order_By>;
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  highest_education?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_membership?: InputMaybe<Order_By>;
  lname?: InputMaybe<Order_By>;
  main_livelihood?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
  mname?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "previous_info" */
export type Previous_Info_Mutation_Response = {
  __typename?: 'previous_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Previous_Info>;
};

/** on_conflict condition type for table "previous_info" */
export type Previous_Info_On_Conflict = {
  constraint: Previous_Info_Constraint;
  update_columns?: Array<Previous_Info_Update_Column>;
  where?: InputMaybe<Previous_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "previous_info". */
export type Previous_Info_Order_By = {
  extname?: InputMaybe<Order_By>;
  farm_household?: InputMaybe<Farm_Household_Order_By>;
  farming_activity_type?: InputMaybe<Order_By>;
  fname?: InputMaybe<Order_By>;
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  highest_education?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_membership?: InputMaybe<Order_By>;
  is_4ps?: InputMaybe<Order_By>;
  is_pwd?: InputMaybe<Order_By>;
  lname?: InputMaybe<Order_By>;
  main_livelihood?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
  mname?: InputMaybe<Order_By>;
};

/** primary key columns input for table: previous_info */
export type Previous_Info_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "previous_info" */
export enum Previous_Info_Select_Column {
  /** column name */
  Extname = 'extname',
  /** column name */
  FarmingActivityType = 'farming_activity_type',
  /** column name */
  Fname = 'fname',
  /** column name */
  GrossAnnFarm = 'gross_ann_farm',
  /** column name */
  GrossAnnNonFarm = 'gross_ann_non_farm',
  /** column name */
  HighestEducation = 'highest_education',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  Id = 'id',
  /** column name */
  IpMembership = 'ip_membership',
  /** column name */
  Is_4ps = 'is_4ps',
  /** column name */
  IsPwd = 'is_pwd',
  /** column name */
  Lname = 'lname',
  /** column name */
  MainLivelihood = 'main_livelihood',
  /** column name */
  MemberFemale = 'member_female',
  /** column name */
  MemberMale = 'member_male',
  /** column name */
  Mname = 'mname'
}

/** input type for updating data in table "previous_info" */
export type Previous_Info_Set_Input = {
  extname?: InputMaybe<Scalars['String']>;
  farming_activity_type?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  gross_ann_farm?: InputMaybe<Scalars['numeric']>;
  gross_ann_non_farm?: InputMaybe<Scalars['numeric']>;
  highest_education?: InputMaybe<Scalars['String']>;
  household_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  ip_membership?: InputMaybe<Scalars['String']>;
  is_4ps?: InputMaybe<Scalars['Boolean']>;
  is_pwd?: InputMaybe<Scalars['Boolean']>;
  lname?: InputMaybe<Scalars['String']>;
  main_livelihood?: InputMaybe<Scalars['String']>;
  member_female?: InputMaybe<Scalars['Int']>;
  member_male?: InputMaybe<Scalars['Int']>;
  mname?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Previous_Info_Stddev_Fields = {
  __typename?: 'previous_info_stddev_fields';
  gross_ann_farm?: Maybe<Scalars['Float']>;
  gross_ann_non_farm?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "previous_info" */
export type Previous_Info_Stddev_Order_By = {
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Previous_Info_Stddev_Pop_Fields = {
  __typename?: 'previous_info_stddev_pop_fields';
  gross_ann_farm?: Maybe<Scalars['Float']>;
  gross_ann_non_farm?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "previous_info" */
export type Previous_Info_Stddev_Pop_Order_By = {
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Previous_Info_Stddev_Samp_Fields = {
  __typename?: 'previous_info_stddev_samp_fields';
  gross_ann_farm?: Maybe<Scalars['Float']>;
  gross_ann_non_farm?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "previous_info" */
export type Previous_Info_Stddev_Samp_Order_By = {
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Previous_Info_Sum_Fields = {
  __typename?: 'previous_info_sum_fields';
  gross_ann_farm?: Maybe<Scalars['numeric']>;
  gross_ann_non_farm?: Maybe<Scalars['numeric']>;
  household_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  member_female?: Maybe<Scalars['Int']>;
  member_male?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "previous_info" */
export type Previous_Info_Sum_Order_By = {
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
};

/** update columns of table "previous_info" */
export enum Previous_Info_Update_Column {
  /** column name */
  Extname = 'extname',
  /** column name */
  FarmingActivityType = 'farming_activity_type',
  /** column name */
  Fname = 'fname',
  /** column name */
  GrossAnnFarm = 'gross_ann_farm',
  /** column name */
  GrossAnnNonFarm = 'gross_ann_non_farm',
  /** column name */
  HighestEducation = 'highest_education',
  /** column name */
  HouseholdId = 'household_id',
  /** column name */
  Id = 'id',
  /** column name */
  IpMembership = 'ip_membership',
  /** column name */
  Is_4ps = 'is_4ps',
  /** column name */
  IsPwd = 'is_pwd',
  /** column name */
  Lname = 'lname',
  /** column name */
  MainLivelihood = 'main_livelihood',
  /** column name */
  MemberFemale = 'member_female',
  /** column name */
  MemberMale = 'member_male',
  /** column name */
  Mname = 'mname'
}

/** aggregate var_pop on columns */
export type Previous_Info_Var_Pop_Fields = {
  __typename?: 'previous_info_var_pop_fields';
  gross_ann_farm?: Maybe<Scalars['Float']>;
  gross_ann_non_farm?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "previous_info" */
export type Previous_Info_Var_Pop_Order_By = {
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Previous_Info_Var_Samp_Fields = {
  __typename?: 'previous_info_var_samp_fields';
  gross_ann_farm?: Maybe<Scalars['Float']>;
  gross_ann_non_farm?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "previous_info" */
export type Previous_Info_Var_Samp_Order_By = {
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Previous_Info_Variance_Fields = {
  __typename?: 'previous_info_variance_fields';
  gross_ann_farm?: Maybe<Scalars['Float']>;
  gross_ann_non_farm?: Maybe<Scalars['Float']>;
  household_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_female?: Maybe<Scalars['Float']>;
  member_male?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "previous_info" */
export type Previous_Info_Variance_Order_By = {
  gross_ann_farm?: InputMaybe<Order_By>;
  gross_ann_non_farm?: InputMaybe<Order_By>;
  household_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_female?: InputMaybe<Order_By>;
  member_male?: InputMaybe<Order_By>;
};

/** columns and relationships of "program" */
export type Program = {
  __typename?: 'program';
  date_end?: Maybe<Scalars['date']>;
  date_start: Scalars['date'];
  description: Scalars['String'];
  /** An array relationship */
  household_program_availments: Array<Household_Program_Availment>;
  /** An aggregate relationship */
  household_program_availments_aggregate: Household_Program_Availment_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  sponsoring_agency?: Maybe<Scalars['String']>;
};


/** columns and relationships of "program" */
export type ProgramHousehold_Program_AvailmentsArgs = {
  distinct_on?: InputMaybe<Array<Household_Program_Availment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Household_Program_Availment_Order_By>>;
  where?: InputMaybe<Household_Program_Availment_Bool_Exp>;
};


/** columns and relationships of "program" */
export type ProgramHousehold_Program_Availments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Household_Program_Availment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Household_Program_Availment_Order_By>>;
  where?: InputMaybe<Household_Program_Availment_Bool_Exp>;
};

/** aggregated selection of "program" */
export type Program_Aggregate = {
  __typename?: 'program_aggregate';
  aggregate?: Maybe<Program_Aggregate_Fields>;
  nodes: Array<Program>;
};

/** aggregate fields of "program" */
export type Program_Aggregate_Fields = {
  __typename?: 'program_aggregate_fields';
  avg?: Maybe<Program_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Program_Max_Fields>;
  min?: Maybe<Program_Min_Fields>;
  stddev?: Maybe<Program_Stddev_Fields>;
  stddev_pop?: Maybe<Program_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Program_Stddev_Samp_Fields>;
  sum?: Maybe<Program_Sum_Fields>;
  var_pop?: Maybe<Program_Var_Pop_Fields>;
  var_samp?: Maybe<Program_Var_Samp_Fields>;
  variance?: Maybe<Program_Variance_Fields>;
};


/** aggregate fields of "program" */
export type Program_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Program_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Program_Avg_Fields = {
  __typename?: 'program_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "program". All fields are combined with a logical 'AND'. */
export type Program_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Bool_Exp>>;
  _not?: InputMaybe<Program_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Bool_Exp>>;
  date_end?: InputMaybe<Date_Comparison_Exp>;
  date_start?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  household_program_availments?: InputMaybe<Household_Program_Availment_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sponsoring_agency?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "program" */
export enum Program_Constraint {
  /** unique or primary key constraint */
  ProgramPk = 'program_pk'
}

/** input type for incrementing numeric columns in table "program" */
export type Program_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "program" */
export type Program_Insert_Input = {
  date_end?: InputMaybe<Scalars['date']>;
  date_start?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  household_program_availments?: InputMaybe<Household_Program_Availment_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  sponsoring_agency?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Program_Max_Fields = {
  __typename?: 'program_max_fields';
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sponsoring_agency?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Program_Min_Fields = {
  __typename?: 'program_min_fields';
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sponsoring_agency?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "program" */
export type Program_Mutation_Response = {
  __typename?: 'program_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Program>;
};

/** input type for inserting object relation for remote table "program" */
export type Program_Obj_Rel_Insert_Input = {
  data: Program_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_On_Conflict>;
};

/** on_conflict condition type for table "program" */
export type Program_On_Conflict = {
  constraint: Program_Constraint;
  update_columns?: Array<Program_Update_Column>;
  where?: InputMaybe<Program_Bool_Exp>;
};

/** Ordering options when selecting data from "program". */
export type Program_Order_By = {
  date_end?: InputMaybe<Order_By>;
  date_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  household_program_availments_aggregate?: InputMaybe<Household_Program_Availment_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sponsoring_agency?: InputMaybe<Order_By>;
};

/** primary key columns input for table: program */
export type Program_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "program" */
export enum Program_Select_Column {
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SponsoringAgency = 'sponsoring_agency'
}

/** input type for updating data in table "program" */
export type Program_Set_Input = {
  date_end?: InputMaybe<Scalars['date']>;
  date_start?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  sponsoring_agency?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Program_Stddev_Fields = {
  __typename?: 'program_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Program_Stddev_Pop_Fields = {
  __typename?: 'program_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Program_Stddev_Samp_Fields = {
  __typename?: 'program_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Program_Sum_Fields = {
  __typename?: 'program_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "program" */
export enum Program_Update_Column {
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SponsoringAgency = 'sponsoring_agency'
}

/** aggregate var_pop on columns */
export type Program_Var_Pop_Fields = {
  __typename?: 'program_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Program_Var_Samp_Fields = {
  __typename?: 'program_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Program_Variance_Fields = {
  __typename?: 'program_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "crop_commodity" */
  crop_commodity: Array<Crop_Commodity>;
  /** fetch aggregated fields from the table: "crop_commodity" */
  crop_commodity_aggregate: Crop_Commodity_Aggregate;
  /** fetch data from the table: "crop_commodity" using primary key columns */
  crop_commodity_by_pk?: Maybe<Crop_Commodity>;
  /** fetch data from the table: "farm" */
  farm: Array<Farm>;
  /** fetch aggregated fields from the table: "farm" */
  farm_aggregate: Farm_Aggregate;
  /** fetch data from the table: "farm" using primary key columns */
  farm_by_pk?: Maybe<Farm>;
  /** fetch data from the table: "farm_household" */
  farm_household: Array<Farm_Household>;
  /** fetch aggregated fields from the table: "farm_household" */
  farm_household_aggregate: Farm_Household_Aggregate;
  /** fetch data from the table: "farm_household_assignment" */
  farm_household_assignment: Array<Farm_Household_Assignment>;
  /** fetch aggregated fields from the table: "farm_household_assignment" */
  farm_household_assignment_aggregate: Farm_Household_Assignment_Aggregate;
  /** fetch data from the table: "farm_household_assignment" using primary key columns */
  farm_household_assignment_by_pk?: Maybe<Farm_Household_Assignment>;
  /** fetch data from the table: "farm_household" using primary key columns */
  farm_household_by_pk?: Maybe<Farm_Household>;
  /** fetch data from the table: "household_program_availment" */
  household_program_availment: Array<Household_Program_Availment>;
  /** fetch aggregated fields from the table: "household_program_availment" */
  household_program_availment_aggregate: Household_Program_Availment_Aggregate;
  /** fetch data from the table: "household_program_availment" using primary key columns */
  household_program_availment_by_pk?: Maybe<Household_Program_Availment>;
  /** fetch data from the table: "previous_info" */
  previous_info: Array<Previous_Info>;
  /** fetch aggregated fields from the table: "previous_info" */
  previous_info_aggregate: Previous_Info_Aggregate;
  /** fetch data from the table: "previous_info" using primary key columns */
  previous_info_by_pk?: Maybe<Previous_Info>;
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch aggregated fields from the table: "program" */
  program_aggregate: Program_Aggregate;
  /** fetch data from the table: "program" using primary key columns */
  program_by_pk?: Maybe<Program>;
};


export type Query_RootCrop_CommodityArgs = {
  distinct_on?: InputMaybe<Array<Crop_Commodity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crop_Commodity_Order_By>>;
  where?: InputMaybe<Crop_Commodity_Bool_Exp>;
};


export type Query_RootCrop_Commodity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crop_Commodity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crop_Commodity_Order_By>>;
  where?: InputMaybe<Crop_Commodity_Bool_Exp>;
};


export type Query_RootCrop_Commodity_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFarmArgs = {
  distinct_on?: InputMaybe<Array<Farm_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Order_By>>;
  where?: InputMaybe<Farm_Bool_Exp>;
};


export type Query_RootFarm_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farm_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Order_By>>;
  where?: InputMaybe<Farm_Bool_Exp>;
};


export type Query_RootFarm_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFarm_HouseholdArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Order_By>>;
  where?: InputMaybe<Farm_Household_Bool_Exp>;
};


export type Query_RootFarm_Household_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Order_By>>;
  where?: InputMaybe<Farm_Household_Bool_Exp>;
};


export type Query_RootFarm_Household_AssignmentArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Assignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Assignment_Order_By>>;
  where?: InputMaybe<Farm_Household_Assignment_Bool_Exp>;
};


export type Query_RootFarm_Household_Assignment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Assignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Assignment_Order_By>>;
  where?: InputMaybe<Farm_Household_Assignment_Bool_Exp>;
};


export type Query_RootFarm_Household_Assignment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFarm_Household_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootHousehold_Program_AvailmentArgs = {
  distinct_on?: InputMaybe<Array<Household_Program_Availment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Household_Program_Availment_Order_By>>;
  where?: InputMaybe<Household_Program_Availment_Bool_Exp>;
};


export type Query_RootHousehold_Program_Availment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Household_Program_Availment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Household_Program_Availment_Order_By>>;
  where?: InputMaybe<Household_Program_Availment_Bool_Exp>;
};


export type Query_RootHousehold_Program_Availment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPrevious_InfoArgs = {
  distinct_on?: InputMaybe<Array<Previous_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Previous_Info_Order_By>>;
  where?: InputMaybe<Previous_Info_Bool_Exp>;
};


export type Query_RootPrevious_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Previous_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Previous_Info_Order_By>>;
  where?: InputMaybe<Previous_Info_Bool_Exp>;
};


export type Query_RootPrevious_Info_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProgramArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Query_RootProgram_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Query_RootProgram_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "crop_commodity" */
  crop_commodity: Array<Crop_Commodity>;
  /** fetch aggregated fields from the table: "crop_commodity" */
  crop_commodity_aggregate: Crop_Commodity_Aggregate;
  /** fetch data from the table: "crop_commodity" using primary key columns */
  crop_commodity_by_pk?: Maybe<Crop_Commodity>;
  /** fetch data from the table: "farm" */
  farm: Array<Farm>;
  /** fetch aggregated fields from the table: "farm" */
  farm_aggregate: Farm_Aggregate;
  /** fetch data from the table: "farm" using primary key columns */
  farm_by_pk?: Maybe<Farm>;
  /** fetch data from the table: "farm_household" */
  farm_household: Array<Farm_Household>;
  /** fetch aggregated fields from the table: "farm_household" */
  farm_household_aggregate: Farm_Household_Aggregate;
  /** fetch data from the table: "farm_household_assignment" */
  farm_household_assignment: Array<Farm_Household_Assignment>;
  /** fetch aggregated fields from the table: "farm_household_assignment" */
  farm_household_assignment_aggregate: Farm_Household_Assignment_Aggregate;
  /** fetch data from the table: "farm_household_assignment" using primary key columns */
  farm_household_assignment_by_pk?: Maybe<Farm_Household_Assignment>;
  /** fetch data from the table: "farm_household" using primary key columns */
  farm_household_by_pk?: Maybe<Farm_Household>;
  /** fetch data from the table: "household_program_availment" */
  household_program_availment: Array<Household_Program_Availment>;
  /** fetch aggregated fields from the table: "household_program_availment" */
  household_program_availment_aggregate: Household_Program_Availment_Aggregate;
  /** fetch data from the table: "household_program_availment" using primary key columns */
  household_program_availment_by_pk?: Maybe<Household_Program_Availment>;
  /** fetch data from the table: "previous_info" */
  previous_info: Array<Previous_Info>;
  /** fetch aggregated fields from the table: "previous_info" */
  previous_info_aggregate: Previous_Info_Aggregate;
  /** fetch data from the table: "previous_info" using primary key columns */
  previous_info_by_pk?: Maybe<Previous_Info>;
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch aggregated fields from the table: "program" */
  program_aggregate: Program_Aggregate;
  /** fetch data from the table: "program" using primary key columns */
  program_by_pk?: Maybe<Program>;
};


export type Subscription_RootCrop_CommodityArgs = {
  distinct_on?: InputMaybe<Array<Crop_Commodity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crop_Commodity_Order_By>>;
  where?: InputMaybe<Crop_Commodity_Bool_Exp>;
};


export type Subscription_RootCrop_Commodity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Crop_Commodity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Crop_Commodity_Order_By>>;
  where?: InputMaybe<Crop_Commodity_Bool_Exp>;
};


export type Subscription_RootCrop_Commodity_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFarmArgs = {
  distinct_on?: InputMaybe<Array<Farm_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Order_By>>;
  where?: InputMaybe<Farm_Bool_Exp>;
};


export type Subscription_RootFarm_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farm_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Order_By>>;
  where?: InputMaybe<Farm_Bool_Exp>;
};


export type Subscription_RootFarm_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFarm_HouseholdArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Order_By>>;
  where?: InputMaybe<Farm_Household_Bool_Exp>;
};


export type Subscription_RootFarm_Household_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Order_By>>;
  where?: InputMaybe<Farm_Household_Bool_Exp>;
};


export type Subscription_RootFarm_Household_AssignmentArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Assignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Assignment_Order_By>>;
  where?: InputMaybe<Farm_Household_Assignment_Bool_Exp>;
};


export type Subscription_RootFarm_Household_Assignment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Farm_Household_Assignment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Farm_Household_Assignment_Order_By>>;
  where?: InputMaybe<Farm_Household_Assignment_Bool_Exp>;
};


export type Subscription_RootFarm_Household_Assignment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFarm_Household_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootHousehold_Program_AvailmentArgs = {
  distinct_on?: InputMaybe<Array<Household_Program_Availment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Household_Program_Availment_Order_By>>;
  where?: InputMaybe<Household_Program_Availment_Bool_Exp>;
};


export type Subscription_RootHousehold_Program_Availment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Household_Program_Availment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Household_Program_Availment_Order_By>>;
  where?: InputMaybe<Household_Program_Availment_Bool_Exp>;
};


export type Subscription_RootHousehold_Program_Availment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPrevious_InfoArgs = {
  distinct_on?: InputMaybe<Array<Previous_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Previous_Info_Order_By>>;
  where?: InputMaybe<Previous_Info_Bool_Exp>;
};


export type Subscription_RootPrevious_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Previous_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Previous_Info_Order_By>>;
  where?: InputMaybe<Previous_Info_Bool_Exp>;
};


export type Subscription_RootPrevious_Info_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProgramArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Subscription_RootProgram_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Subscription_RootProgram_By_PkArgs = {
  id: Scalars['Int'];
};
