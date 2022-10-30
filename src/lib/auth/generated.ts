import * as Types from '@/lib/generated/graphql.types'

import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type CreateAccountMutationVariables = Types.Exact<{
  data: Types.AccountInsertInput
}>

export type CreateAccountMutation = {
  __typename?: 'mutation_root'
  insertAccountOne?:
    | {
        __typename: 'Account'
        id: any
        type: string
        scope?: string | null | undefined
        userId: any
        idToken?: string | null | undefined
        provider: string
        expiresAt?: any | null | undefined
        tokenType?: string | null | undefined
        oauthToken?: string | null | undefined
        accessToken?: string | null | undefined
        refreshToken?: string | null | undefined
        sessionState?: string | null | undefined
        providerAccountId: string
        oauthTokenSecret?: string | null | undefined
      }
    | null
    | undefined
}

export type DeleteAccountMutationVariables = Types.Exact<{
  provider: Types.Scalars['String']
  providerAccountId: Types.Scalars['String']
}>

export type DeleteAccountMutation = {
  __typename?: 'mutation_root'
  deleteAccount?:
    | {
        __typename?: 'AccountMutationResponse'
        returning: Array<{
          __typename: 'Account'
          id: any
          type: string
          scope?: string | null | undefined
          userId: any
          idToken?: string | null | undefined
          provider: string
          expiresAt?: any | null | undefined
          tokenType?: string | null | undefined
          oauthToken?: string | null | undefined
          accessToken?: string | null | undefined
          refreshToken?: string | null | undefined
          sessionState?: string | null | undefined
          providerAccountId: string
          oauthTokenSecret?: string | null | undefined
        }>
      }
    | null
    | undefined
}

export type UserFragment = {
  __typename: 'User'
  id: any
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
  emailVerified?: any | null | undefined
}

export type SessionFragment = {
  __typename: 'Session'
  id: any
  userId: any
  expires?: any | null | undefined
  sessionToken: string
}

export type AccountFragment = {
  __typename: 'Account'
  id: any
  type: string
  scope?: string | null | undefined
  userId: any
  idToken?: string | null | undefined
  provider: string
  expiresAt?: any | null | undefined
  tokenType?: string | null | undefined
  oauthToken?: string | null | undefined
  accessToken?: string | null | undefined
  refreshToken?: string | null | undefined
  sessionState?: string | null | undefined
  providerAccountId: string
  oauthTokenSecret?: string | null | undefined
}

export type VerificationTokenFragment = {
  __typename: 'VerificationToken'
  token: string
  expires?: any | null | undefined
  identifier: string
}

export type GetSessionQueryVariables = Types.Exact<{
  sessionToken?: Types.InputMaybe<Types.Scalars['String']>
}>

export type GetSessionQuery = {
  __typename?: 'query_root'
  session: Array<{
    __typename: 'Session'
    id: any
    userId: any
    expires?: any | null | undefined
    sessionToken: string
    user: {
      __typename: 'User'
      id: any
      name?: string | null | undefined
      email?: string | null | undefined
      image?: string | null | undefined
      emailVerified?: any | null | undefined
    }
  }>
}

export type CreateSessionMutationVariables = Types.Exact<{
  data: Types.SessionInsertInput
}>

export type CreateSessionMutation = {
  __typename?: 'mutation_root'
  insertSessionOne?:
    | {
        __typename: 'Session'
        id: any
        userId: any
        expires?: any | null | undefined
        sessionToken: string
      }
    | null
    | undefined
}

export type UpdateSessionMutationVariables = Types.Exact<{
  sessionToken?: Types.InputMaybe<Types.Scalars['String']>
  data: Types.SessionSetInput
}>

export type UpdateSessionMutation = {
  __typename?: 'mutation_root'
  updateSession?:
    | {
        __typename?: 'SessionMutationResponse'
        returning: Array<{
          __typename: 'Session'
          id: any
          userId: any
          expires?: any | null | undefined
          sessionToken: string
        }>
      }
    | null
    | undefined
}

export type DeleteSessionMutationVariables = Types.Exact<{
  sessionToken?: Types.InputMaybe<Types.Scalars['String']>
}>

export type DeleteSessionMutation = {
  __typename?: 'mutation_root'
  deleteSession?:
    | {
        __typename?: 'SessionMutationResponse'
        returning: Array<{
          __typename: 'Session'
          id: any
          userId: any
          expires?: any | null | undefined
          sessionToken: string
        }>
      }
    | null
    | undefined
}

export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type GetUserQuery = {
  __typename?: 'query_root'
  userByPk?:
    | {
        __typename: 'User'
        id: any
        name?: string | null | undefined
        email?: string | null | undefined
        image?: string | null | undefined
        emailVerified?: any | null | undefined
      }
    | null
    | undefined
}

export type GetUsersQueryVariables = Types.Exact<{
  where: Types.UserBoolExp
}>

export type GetUsersQuery = {
  __typename?: 'query_root'
  user: Array<{
    __typename: 'User'
    id: any
    name?: string | null | undefined
    email?: string | null | undefined
    image?: string | null | undefined
    emailVerified?: any | null | undefined
  }>
}

export type CreateAuthUserMutationVariables = Types.Exact<{
  data: Types.UserInsertInput
}>

export type CreateAuthUserMutation = {
  __typename?: 'mutation_root'
  insertUserOne?:
    | {
        __typename: 'User'
        id: any
        name?: string | null | undefined
        email?: string | null | undefined
        image?: string | null | undefined
        emailVerified?: any | null | undefined
      }
    | null
    | undefined
}

export type UpdateAuthUserMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']
  data: Types.UserSetInput
}>

export type UpdateAuthUserMutation = {
  __typename?: 'mutation_root'
  updateUserByPk?:
    | {
        __typename: 'User'
        id: any
        name?: string | null | undefined
        email?: string | null | undefined
        image?: string | null | undefined
        emailVerified?: any | null | undefined
      }
    | null
    | undefined
}

export type DeleteUserMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type DeleteUserMutation = {
  __typename?: 'mutation_root'
  deleteUserByPk?:
    | {
        __typename: 'User'
        id: any
        name?: string | null | undefined
        email?: string | null | undefined
        image?: string | null | undefined
        emailVerified?: any | null | undefined
      }
    | null
    | undefined
}

export type CreateVerificationTokenMutationVariables = Types.Exact<{
  data: Types.VerificationTokenInsertInput
}>

export type CreateVerificationTokenMutation = {
  __typename?: 'mutation_root'
  insertVerificationTokenOne?:
    | {
        __typename: 'VerificationToken'
        token: string
        expires?: any | null | undefined
        identifier: string
      }
    | null
    | undefined
}

export type DeleteVerificationTokenMutationVariables = Types.Exact<{
  identifier: Types.Scalars['String']
  token: Types.Scalars['String']
}>

export type DeleteVerificationTokenMutation = {
  __typename?: 'mutation_root'
  deleteVerificationToken?:
    | {
        __typename?: 'VerificationTokenMutationResponse'
        returning: Array<{
          __typename: 'VerificationToken'
          token: string
          expires?: any | null | undefined
          identifier: string
        }>
      }
    | null
    | undefined
}

export type CreateAnnualInfoMutationVariables = Types.Exact<{
  object: Types.AnnualInfoInsertInput
}>

export type CreateAnnualInfoMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'AnnualInfo'; id: any } | null | undefined
}

export type UpdateAnnualInfoMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.AnnualInfoSetInput>
  id: Types.AnnualInfoPkColumnsInput
}>

export type UpdateAnnualInfoMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'AnnualInfo'; id: any } | null | undefined
}

export type DeleteAnnualInfoMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type DeleteAnnualInfoMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'AnnualInfo'; id: any } | null | undefined
}

export type AnnualInfoListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AnnualInfoBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.AnnualInfoOrderBy> | Types.AnnualInfoOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AnnualInfoListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'AnnualInfo'
    id: any
    year: number
    grossAnnualIncomeNonfarming: any
    grossAnnualIncomeFarming: any
    mainLivelihood: any
  }>
  meta: {
    __typename?: 'AnnualInfoAggregate'
    aggregate?:
      | { __typename?: 'AnnualInfoAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type AnnualInfoDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type AnnualInfoDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'AnnualInfo'
        id: any
        mainLivelihood: any
        farmworkerActivityType: any
        grossAnnualIncomeFarming: any
        grossAnnualIncomeNonfarming: any
        highestFormalEducation: string
        fisherActivityType: any
        is4PsBeneficiary: boolean
        personWithDisability: boolean
        year: number
      }
    | null
    | undefined
}

export type AnnualInfoFragmentFragment = {
  __typename?: 'AnnualInfo'
  id: any
  mainLivelihood: any
  farmworkerActivityType: any
  grossAnnualIncomeFarming: any
  grossAnnualIncomeNonfarming: any
  highestFormalEducation: string
  fisherActivityType: any
  is4PsBeneficiary: boolean
  personWithDisability: boolean
  year: number
}

export type CreateAssociationMutationVariables = Types.Exact<{
  object: Types.AssociationInsertInput
}>

export type CreateAssociationMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Association'; id: any } | null | undefined
}

export type UpdateAssociationMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.AssociationSetInput>
  id: Types.AssociationPkColumnsInput
}>

export type UpdateAssociationMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Association'; id: any } | null | undefined
}

export type AssociationListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AssociationBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.AssociationOrderBy> | Types.AssociationOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AssociationListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Association'
    id: any
    name: string
    shortName: string
    description: string
    active: boolean
  }>
  meta: {
    __typename?: 'AssociationAggregate'
    aggregate?:
      | { __typename?: 'AssociationAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type AssociationDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type AssociationDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'Association'
        id: any
        name: string
        shortName: string
        description: string
        active: boolean
      }
    | null
    | undefined
}

export type CreateCommodityProduceMutationVariables = Types.Exact<{
  object: Types.CommodityProduceInsertInput
}>

export type CreateCommodityProduceMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'CommodityProduce'; id: any } | null | undefined
}

export type UpdateCommodityProduceMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.CommodityProduceSetInput>
  id: Types.CommodityProducePkColumnsInput
}>

export type UpdateCommodityProduceMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'CommodityProduce'; id: any } | null | undefined
}

export type CommodityOptionsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.CommodityBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.CommodityOrderBy> | Types.CommodityOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CommodityOptionsQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Commodity'
    id: any
    name: string
    commodityType: string
  }>
}

export type FarmOptionsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.FarmBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.FarmOrderBy> | Types.FarmOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type FarmOptionsQuery = {
  __typename?: 'query_root'
  list: Array<{ __typename?: 'Farm'; id: any; name: string }>
}

export type CommodityProduceListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProduceBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.ProduceOrderBy> | Types.ProduceOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CommodityProduceListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Produce'
    id: any
    areaUsed: any
    commodityName: string
    createdAt: any
    farmName: string
    organicPractitioner: boolean
    produce: any
    year: number
    commodityType: string
    householdName?: string | null | undefined
  }>
  meta: {
    __typename?: 'ProduceAggregate'
    aggregate?:
      | { __typename?: 'ProduceAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type CommodityProduceDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type CommodityProduceDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'CommodityProduce'
        id: any
        commodityId: any
        farmId: any
        produce?: any | null | undefined
        organicPractitioner: boolean
        householdId: any
        year: number
        areaUsed: any
      }
    | null
    | undefined
}

export type CreateCommodityMutationVariables = Types.Exact<{
  object: Types.CommodityInsertInput
}>

export type CreateCommodityMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Commodity'; id: any } | null | undefined
}

export type UpdateCommodityMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.CommoditySetInput>
  id: Types.CommodityPkColumnsInput
}>

export type UpdateCommodityMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Commodity'; id: any } | null | undefined
}

export type CommodityListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.CommodityBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.CommodityOrderBy> | Types.CommodityOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CommodityListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Commodity'
    id: any
    name: string
    commodityType: string
  }>
  meta: {
    __typename?: 'CommodityAggregate'
    aggregate?:
      | { __typename?: 'CommodityAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type CommodityDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type CommodityDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | { __typename?: 'Commodity'; id: any; name: string; commodityType: string }
    | null
    | undefined
}

export type AverageAnnualIncomeListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AverageAnnualIncomeBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.AverageAnnualIncomeOrderBy> | Types.AverageAnnualIncomeOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AverageAnnualIncomeListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'AverageAnnualIncome'
    year: number
    annualIncomeFarming?: any | null | undefined
    annualIncomeNonfarming?: any | null | undefined
    averageinfo: any
  }>
}

export type DashboardStatsQueryVariables = Types.Exact<{ [key: string]: never }>

export type DashboardStatsQuery = {
  __typename?: 'query_root'
  farms: {
    __typename?: 'FarmAggregate'
    aggregate?:
      | { __typename?: 'FarmAggregateFields'; count: number }
      | null
      | undefined
  }
  associations: {
    __typename?: 'AssociationAggregate'
    aggregate?:
      | { __typename?: 'AssociationAggregateFields'; count: number }
      | null
      | undefined
  }
  households: {
    __typename?: 'HouseholdAggregate'
    aggregate?:
      | { __typename?: 'HouseholdAggregateFields'; count: number }
      | null
      | undefined
  }
  programs: {
    __typename?: 'ProgramAggregate'
    aggregate?:
      | { __typename?: 'ProgramAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type InventoryOfLivestockListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.InventoryOfLivestockBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.InventoryOfLivestockOrderBy> | Types.InventoryOfLivestockOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type InventoryOfLivestockListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'InventoryOfLivestock'
    year: number
    name: string
    sum?: any | null | undefined
    commodityId?: any | null | undefined
  }>
}

export type CropProduceListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.CropProduceBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.CropProduceOrderBy> | Types.CropProduceOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type CropProduceListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'CropProduce'
    year: number
    name: string
    sum: any
    commodityId?: any | null | undefined
  }>
}

export type RegisteredHouseholdQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.RegisteredHouseholdPerYearBoolExp>
  orderBy?: Types.InputMaybe<
    | Array<Types.RegisteredHouseholdPerYearOrderBy>
    | Types.RegisteredHouseholdPerYearOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type RegisteredHouseholdQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'RegisteredHouseholdPerYear'
    year?: number | null | undefined
    count?: any | null | undefined
  }>
}

export type CreateFarmMutationVariables = Types.Exact<{
  object: Types.FarmInsertInput
}>

export type CreateFarmMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Farm'; id: any } | null | undefined
}

export type UpdateFarmMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.FarmSetInput>
  id: Types.FarmPkColumnsInput
}>

export type UpdateFarmMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Farm'; id: any } | null | undefined
}

export type HouseholdOptionsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.HouseholdOrderBy> | Types.HouseholdOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseholdOptionsQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Household'
    id: any
    firstName: string
    lastName: string
  }>
}

export type FarmListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.FarmBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.FarmOrderBy> | Types.FarmOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type FarmListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Farm'
    id: any
    location?: any | null | undefined
    name: string
    sizeInHaTotal: any
    ownerName: string
    ownershipType: string
    household: {
      __typename?: 'Household'
      id: any
      firstName: string
      lastName: string
    }
  }>
  meta: {
    __typename?: 'FarmAggregate'
    aggregate?:
      | { __typename?: 'FarmAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type FarmDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type FarmDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'Farm'
        id: any
        ownerName: string
        ownershipDocument: string
        ownershipType: string
        name: string
        barangay: string
        municipality: string
        farmType: string
        sizeInHaTotal: any
        isAgrarianReformBeneficiary: boolean
        withinAncestralDomain: boolean
        location?: any | null | undefined
        householdId: any
      }
    | null
    | undefined
}

export type CreateHouseholdMutationVariables = Types.Exact<{
  object: Types.HouseholdInsertInput
}>

export type CreateHouseholdMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Household'; id: any } | null | undefined
}

export type UpdateHouseholdMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.HouseholdSetInput>
  id: Types.HouseholdPkColumnsInput
}>

export type UpdateHouseholdMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Household'; id: any } | null | undefined
}

export type HouseholdListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.HouseholdOrderBy> | Types.HouseholdOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseholdListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'Household'
    id: any
    lastName: string
    firstName: string
    middleName: string
    referenceNo: string
    barangay: string
  }>
  meta: {
    __typename?: 'HouseholdAggregate'
    aggregate?:
      | { __typename?: 'HouseholdAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type HouseholdDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type HouseholdDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'Household'
        id: any
        firstName: string
        lastName: string
        middleName: string
        extensionName: string
        houseLotBldgNo: string
        referenceNo: string
        streetSitioSubdv: string
        barangay: string
        municipality: string
        province: string
        region: string
        contactNumber: string
        sex: number
        civilStatus: number
        nameOfSpouse: string
        mothersMaidenName: string
        religion: string
        dateOfBirth: any
        placeOfBirth: string
        nameOfHouseholdHead: string
        relationshipToHouseholdHead: string
        maleCount: number
        femaleCount: number
        governmentIdType: string
        governmentIdNo: string
        personWithDisability: boolean
        is4psBeneficiary: boolean
        isHouseholdHead: boolean
        ipMembership: string
        emergencyContactName: string
        emergencyContactNumber: string
      }
    | null
    | undefined
}

export type HouseholdFragmentFragment = {
  __typename?: 'Household'
  id: any
  firstName: string
  lastName: string
  middleName: string
  extensionName: string
  houseLotBldgNo: string
  referenceNo: string
  streetSitioSubdv: string
  barangay: string
  municipality: string
  province: string
  region: string
  contactNumber: string
  sex: number
  civilStatus: number
  nameOfSpouse: string
  mothersMaidenName: string
  religion: string
  dateOfBirth: any
  placeOfBirth: string
  nameOfHouseholdHead: string
  relationshipToHouseholdHead: string
  maleCount: number
  femaleCount: number
  governmentIdType: string
  governmentIdNo: string
  personWithDisability: boolean
  is4psBeneficiary: boolean
  isHouseholdHead: boolean
  ipMembership: string
  emergencyContactName: string
  emergencyContactNumber: string
}

export type CreateProgramMutationVariables = Types.Exact<{
  object: Types.ProgramInsertInput
}>

export type CreateProgramMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Program'; id: any } | null | undefined
}

export type UpdateProgramMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.ProgramSetInput>
  id: Types.ProgramPkColumnsInput
}>

export type UpdateProgramMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'Program'; id: any } | null | undefined
}

export type DeleteHouseholdProgramMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['uuid']> | Types.Scalars['uuid']
}>

export type DeleteHouseholdProgramMutation = {
  __typename?: 'mutation_root'
  deleteHouseholdToProgram?:
    | {
        __typename?: 'HouseholdToProgramMutationResponse'
        affected_rows: number
        returning: Array<{ __typename?: 'HouseholdToProgram'; id: any }>
      }
    | null
    | undefined
}

export type CreateHouseholdProgramMutationVariables = Types.Exact<{
  objects:
    | Array<Types.HouseholdToProgramInsertInput>
    | Types.HouseholdToProgramInsertInput
}>

export type CreateHouseholdProgramMutation = {
  __typename?: 'mutation_root'
  insertHouseholdToProgram?:
    | {
        __typename?: 'HouseholdToProgramMutationResponse'
        affected_rows: number
        returning: Array<{ __typename?: 'HouseholdToProgram'; id: any }>
      }
    | null
    | undefined
}

export type DeleteAssociationProgramMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['uuid']> | Types.Scalars['uuid']
}>

export type DeleteAssociationProgramMutation = {
  __typename?: 'mutation_root'
  deleteAssociationToProgram?:
    | {
        __typename?: 'AssociationToProgramMutationResponse'
        affected_rows: number
        returning: Array<{ __typename?: 'AssociationToProgram'; id: any }>
      }
    | null
    | undefined
}

export type CreateAssociationProgramMutationVariables = Types.Exact<{
  objects:
    | Array<Types.AssociationToProgramInsertInput>
    | Types.AssociationToProgramInsertInput
}>

export type CreateAssociationProgramMutation = {
  __typename?: 'mutation_root'
  insertAssociationToProgram?:
    | {
        __typename?: 'AssociationToProgramMutationResponse'
        affected_rows: number
        returning: Array<{ __typename?: 'AssociationToProgram'; id: any }>
      }
    | null
    | undefined
}

export type ProgramListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProgramBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.ProgramOrderBy> | Types.ProgramOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type ProgramListQuery = {
  __typename?: 'query_root'
  list: Array<{ __typename?: 'Program'; id: any; name: string; type: string }>
  meta: {
    __typename?: 'ProgramAggregate'
    aggregate?:
      | { __typename?: 'ProgramAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type ProgramDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type ProgramDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'Program'
        id: any
        name: string
        type: string
        sponsoringAgency: string
        description: string
        dateStart: any
        dateEnd?: any | null | undefined
      }
    | null
    | undefined
}

export type ProgramBeneficiariesListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProgramBeneficiariesBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.ProgramBeneficiariesOrderBy> | Types.ProgramBeneficiariesOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type ProgramBeneficiariesListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'ProgramBeneficiaries'
    createdAt: any
    farmSize: any
    firstName: string
    grossAnnualIncomeFarming: any
    grossAnnualIncomeNonfarming: any
    householdId: any
    id: any
    lastName: string
    programId: any
    barangay: string
    referenceNo: string
    commodities?: any | null | undefined
  }>
  meta: {
    __typename?: 'ProgramBeneficiariesAggregate'
    aggregate?:
      | { __typename?: 'ProgramBeneficiariesAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type HouseholdProgramsListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.HouseholdProgramsBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.HouseholdProgramsOrderBy> | Types.HouseholdProgramsOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type HouseholdProgramsListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'HouseholdPrograms'
    barangay: string
    farmSize: any
    firstName: string
    grossAnnualIncomeFarming: any
    grossAnnualIncomeNonfarming: any
    id: any
    lastName: string
    programIds: any
    referenceNo: string
    commodities?: any | null | undefined
  }>
  meta: {
    __typename?: 'HouseholdProgramsAggregate'
    aggregate?:
      | { __typename?: 'HouseholdProgramsAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type AssociationProgramsListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AssociationProgramsBoolExp>
  orderBy?: Types.InputMaybe<
    Array<Types.AssociationProgramsOrderBy> | Types.AssociationProgramsOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AssociationProgramsListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'AssociationPrograms'
    active: boolean
    id: any
    name: string
    programIds: any
  }>
  meta: {
    __typename?: 'AssociationProgramsAggregate'
    aggregate?:
      | { __typename?: 'AssociationProgramsAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type AssociationBeneficiariesListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AssociationBeneficiariesBoolExp>
  orderBy?: Types.InputMaybe<
    | Array<Types.AssociationBeneficiariesOrderBy>
    | Types.AssociationBeneficiariesOrderBy
  >
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type AssociationBeneficiariesListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'AssociationBeneficiaries'
    createdAt: any
    id: any
    name: string
    programId?: any | null | undefined
    active: boolean
    associationId: any
  }>
  meta: {
    __typename?: 'AssociationBeneficiariesAggregate'
    aggregate?:
      | {
          __typename?: 'AssociationBeneficiariesAggregateFields'
          count: number
        }
      | null
      | undefined
  }
}

export type CreateUserMutationVariables = Types.Exact<{
  object: Types.UserInsertInput
}>

export type CreateUserMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'User'; id: any } | null | undefined
}

export type UpdateUserMutationVariables = Types.Exact<{
  object?: Types.InputMaybe<Types.UserSetInput>
  id: Types.UserPkColumnsInput
}>

export type UpdateUserMutation = {
  __typename?: 'mutation_root'
  data?: { __typename?: 'User'; id: any } | null | undefined
}

export type UserListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.UserBoolExp>
  orderBy?: Types.InputMaybe<Array<Types.UserOrderBy> | Types.UserOrderBy>
  offset?: Types.InputMaybe<Types.Scalars['Int']>
  limit?: Types.InputMaybe<Types.Scalars['Int']>
}>

export type UserListQuery = {
  __typename?: 'query_root'
  list: Array<{
    __typename?: 'User'
    id: any
    firstName: string
    lastName: string
    email?: string | null | undefined
    role: any
    active: boolean
  }>
  meta: {
    __typename?: 'UserAggregate'
    aggregate?:
      | { __typename?: 'UserAggregateFields'; count: number }
      | null
      | undefined
  }
}

export type UserDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']
}>

export type UserDetailsQuery = {
  __typename?: 'query_root'
  details?:
    | {
        __typename?: 'User'
        id: any
        firstName: string
        lastName: string
        email?: string | null | undefined
        role: any
        active: boolean
      }
    | null
    | undefined
}

export const UserFragmentDoc = gql`
  fragment User on User {
    __typename
    id
    name
    email
    image
    emailVerified
  }
`
export const SessionFragmentDoc = gql`
  fragment Session on Session {
    __typename
    id
    userId
    expires
    sessionToken
  }
`
export const AccountFragmentDoc = gql`
  fragment Account on Account {
    __typename
    id
    type
    scope
    userId
    idToken
    provider
    expiresAt
    tokenType
    oauthToken
    accessToken
    refreshToken
    sessionState
    providerAccountId
    oauthTokenSecret
  }
`
export const VerificationTokenFragmentDoc = gql`
  fragment VerificationToken on VerificationToken {
    __typename
    token
    expires
    identifier
  }
`
export const AnnualInfoFragmentFragmentDoc = gql`
  fragment AnnualInfoFragment on AnnualInfo {
    id
    mainLivelihood
    farmworkerActivityType
    grossAnnualIncomeFarming
    grossAnnualIncomeNonfarming
    highestFormalEducation
    fisherActivityType
    is4PsBeneficiary
    personWithDisability
    year
  }
`
export const HouseholdFragmentFragmentDoc = gql`
  fragment HouseholdFragment on Household {
    id
    firstName
    lastName
    middleName
    extensionName
    houseLotBldgNo
    referenceNo
    streetSitioSubdv
    barangay
    municipality
    province
    region
    contactNumber
    sex
    civilStatus
    nameOfSpouse
    mothersMaidenName
    religion
    dateOfBirth
    placeOfBirth
    nameOfHouseholdHead
    relationshipToHouseholdHead
    maleCount
    femaleCount
    governmentIdType
    governmentIdNo
    personWithDisability
    is4psBeneficiary
    isHouseholdHead
    ipMembership
    emergencyContactName
    emergencyContactNumber
  }
`
export const CreateAccountDocument = gql`
  mutation CreateAccount($data: AccountInsertInput!) {
    insertAccountOne(object: $data) {
      ...Account
    }
  }
  ${AccountFragmentDoc}
`
export const DeleteAccountDocument = gql`
  mutation DeleteAccount($provider: String!, $providerAccountId: String!) {
    deleteAccount(
      where: {
        provider: { _eq: $provider }
        providerAccountId: { _eq: $providerAccountId }
      }
    ) {
      returning {
        ...Account
      }
    }
  }
  ${AccountFragmentDoc}
`
export const GetSessionDocument = gql`
  query GetSession($sessionToken: String) {
    session(where: { sessionToken: { _eq: $sessionToken } }) {
      ...Session
      user {
        ...User
      }
    }
  }
  ${SessionFragmentDoc}
  ${UserFragmentDoc}
`
export const CreateSessionDocument = gql`
  mutation CreateSession($data: SessionInsertInput!) {
    insertSessionOne(object: $data) {
      ...Session
    }
  }
  ${SessionFragmentDoc}
`
export const UpdateSessionDocument = gql`
  mutation UpdateSession($sessionToken: String, $data: SessionSetInput!) {
    updateSession(
      where: { sessionToken: { _eq: $sessionToken } }
      _set: $data
    ) {
      returning {
        ...Session
      }
    }
  }
  ${SessionFragmentDoc}
`
export const DeleteSessionDocument = gql`
  mutation DeleteSession($sessionToken: String) {
    deleteSession(where: { sessionToken: { _eq: $sessionToken } }) {
      returning {
        ...Session
      }
    }
  }
  ${SessionFragmentDoc}
`
export const GetUserDocument = gql`
  query GetUser($id: uuid!) {
    userByPk(id: $id) {
      ...User
    }
  }
  ${UserFragmentDoc}
`
export const GetUsersDocument = gql`
  query GetUsers($where: UserBoolExp!) {
    user(where: $where) {
      ...User
    }
  }
  ${UserFragmentDoc}
`
export const CreateAuthUserDocument = gql`
  mutation CreateAuthUser($data: UserInsertInput!) {
    insertUserOne(object: $data) {
      ...User
    }
  }
  ${UserFragmentDoc}
`
export const UpdateAuthUserDocument = gql`
  mutation UpdateAuthUser($id: uuid!, $data: UserSetInput!) {
    updateUserByPk(pk_columns: { id: $id }, _set: $data) {
      ...User
    }
  }
  ${UserFragmentDoc}
`
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: uuid!) {
    deleteUserByPk(id: $id) {
      ...User
    }
  }
  ${UserFragmentDoc}
`
export const CreateVerificationTokenDocument = gql`
  mutation CreateVerificationToken($data: VerificationTokenInsertInput!) {
    insertVerificationTokenOne(object: $data) {
      ...VerificationToken
    }
  }
  ${VerificationTokenFragmentDoc}
`
export const DeleteVerificationTokenDocument = gql`
  mutation DeleteVerificationToken($identifier: String!, $token: String!) {
    deleteVerificationToken(
      where: { token: { _eq: $token }, identifier: { _eq: $identifier } }
    ) {
      returning {
        ...VerificationToken
      }
    }
  }
  ${VerificationTokenFragmentDoc}
`
export const CreateAnnualInfoDocument = gql`
  mutation CreateAnnualInfo($object: AnnualInfoInsertInput!) {
    data: insertAnnualInfoOne(object: $object) {
      id
    }
  }
`
export const UpdateAnnualInfoDocument = gql`
  mutation UpdateAnnualInfo(
    $object: AnnualInfoSetInput
    $id: AnnualInfoPkColumnsInput!
  ) {
    data: updateAnnualInfoByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`
export const DeleteAnnualInfoDocument = gql`
  mutation DeleteAnnualInfo($id: uuid!) {
    data: deleteAnnualInfoByPk(id: $id) {
      id
    }
  }
`
export const AnnualInfoListDocument = gql`
  query AnnualInfoList(
    $where: AnnualInfoBoolExp
    $orderBy: [AnnualInfoOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: annualInfo(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      year
      grossAnnualIncomeNonfarming
      grossAnnualIncomeFarming
      mainLivelihood
    }
    meta: annualInfoAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const AnnualInfoDetailsDocument = gql`
  query AnnualInfoDetails($id: uuid!) {
    details: annualInfoByPk(id: $id) {
      ...AnnualInfoFragment
    }
  }
  ${AnnualInfoFragmentFragmentDoc}
`
export const CreateAssociationDocument = gql`
  mutation CreateAssociation($object: AssociationInsertInput!) {
    data: insertAssociationOne(object: $object) {
      id
    }
  }
`
export const UpdateAssociationDocument = gql`
  mutation UpdateAssociation(
    $object: AssociationSetInput
    $id: AssociationPkColumnsInput!
  ) {
    data: updateAssociationByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`
export const AssociationListDocument = gql`
  query AssociationList(
    $where: AssociationBoolExp
    $orderBy: [AssociationOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: association(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      shortName
      description
      active
    }
    meta: associationAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const AssociationDetailsDocument = gql`
  query AssociationDetails($id: uuid!) {
    details: associationByPk(id: $id) {
      id
      name
      shortName
      description
      active
    }
  }
`
export const CreateCommodityProduceDocument = gql`
  mutation CreateCommodityProduce($object: CommodityProduceInsertInput!) {
    data: insertCommodityProduceOne(object: $object) {
      id
    }
  }
`
export const UpdateCommodityProduceDocument = gql`
  mutation UpdateCommodityProduce(
    $object: CommodityProduceSetInput
    $id: CommodityProducePkColumnsInput!
  ) {
    data: updateCommodityProduceByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`
export const CommodityOptionsDocument = gql`
  query CommodityOptions(
    $where: CommodityBoolExp
    $orderBy: [CommodityOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: commodity(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      commodityType
    }
  }
`
export const FarmOptionsDocument = gql`
  query FarmOptions(
    $where: FarmBoolExp
    $orderBy: [FarmOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: farm(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
    }
  }
`
export const CommodityProduceListDocument = gql`
  query CommodityProduceList(
    $where: ProduceBoolExp
    $orderBy: [ProduceOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: produce(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      areaUsed
      commodityName
      createdAt
      farmName
      organicPractitioner
      produce
      year
      commodityType
      householdName
    }
    meta: produceAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const CommodityProduceDetailsDocument = gql`
  query CommodityProduceDetails($id: uuid!) {
    details: commodityProduceByPk(id: $id) {
      id
      commodityId
      farmId
      produce
      organicPractitioner
      householdId
      year
      areaUsed
    }
  }
`
export const CreateCommodityDocument = gql`
  mutation CreateCommodity($object: CommodityInsertInput!) {
    data: insertCommodityOne(object: $object) {
      id
    }
  }
`
export const UpdateCommodityDocument = gql`
  mutation UpdateCommodity(
    $object: CommoditySetInput
    $id: CommodityPkColumnsInput!
  ) {
    data: updateCommodityByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`
export const CommodityListDocument = gql`
  query CommodityList(
    $where: CommodityBoolExp
    $orderBy: [CommodityOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: commodity(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      commodityType
    }
    meta: commodityAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const CommodityDetailsDocument = gql`
  query CommodityDetails($id: uuid!) {
    details: commodityByPk(id: $id) {
      id
      name
      commodityType
    }
  }
`
export const AverageAnnualIncomeListDocument = gql`
  query AverageAnnualIncomeList(
    $where: AverageAnnualIncomeBoolExp
    $orderBy: [AverageAnnualIncomeOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: averageAnnualIncome(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      year
      annualIncomeFarming
      annualIncomeNonfarming
      averageinfo
    }
  }
`
export const DashboardStatsDocument = gql`
  query DashboardStats {
    farms: farmAggregate {
      aggregate {
        count
      }
    }
    associations: associationAggregate {
      aggregate {
        count
      }
    }
    households: householdAggregate {
      aggregate {
        count
      }
    }
    programs: programAggregate {
      aggregate {
        count
      }
    }
  }
`
export const InventoryOfLivestockListDocument = gql`
  query InventoryOfLivestockList(
    $where: InventoryOfLivestockBoolExp
    $orderBy: [InventoryOfLivestockOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: inventoryOfLivestock(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      year
      name
      sum
      commodityId
    }
  }
`
export const CropProduceListDocument = gql`
  query CropProduceList(
    $where: CropProduceBoolExp
    $orderBy: [CropProduceOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: cropProduce(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      year
      name
      sum
      commodityId
    }
  }
`
export const RegisteredHouseholdDocument = gql`
  query RegisteredHousehold(
    $where: RegisteredHouseholdPerYearBoolExp
    $orderBy: [RegisteredHouseholdPerYearOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: registeredHouseholdPerYear(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      year
      count
    }
  }
`
export const CreateFarmDocument = gql`
  mutation CreateFarm($object: FarmInsertInput!) {
    data: insertFarmOne(object: $object) {
      id
    }
  }
`
export const UpdateFarmDocument = gql`
  mutation UpdateFarm($object: FarmSetInput, $id: FarmPkColumnsInput!) {
    data: updateFarmByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`
export const HouseholdOptionsDocument = gql`
  query HouseholdOptions(
    $where: HouseholdBoolExp
    $orderBy: [HouseholdOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: household(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      firstName
      lastName
    }
  }
`
export const FarmListDocument = gql`
  query FarmList(
    $where: FarmBoolExp
    $orderBy: [FarmOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: farm(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      location
      name
      household {
        id
        firstName
        lastName
      }
      sizeInHaTotal
      ownerName
      ownershipType
    }
    meta: farmAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const FarmDetailsDocument = gql`
  query FarmDetails($id: uuid!) {
    details: farmByPk(id: $id) {
      id
      ownerName
      ownershipDocument
      ownershipType
      name
      barangay
      municipality
      farmType
      sizeInHaTotal
      isAgrarianReformBeneficiary
      withinAncestralDomain
      location
      householdId
    }
  }
`
export const CreateHouseholdDocument = gql`
  mutation CreateHousehold($object: HouseholdInsertInput!) {
    data: insertHouseholdOne(object: $object) {
      id
    }
  }
`
export const UpdateHouseholdDocument = gql`
  mutation UpdateHousehold(
    $object: HouseholdSetInput
    $id: HouseholdPkColumnsInput!
  ) {
    data: updateHouseholdByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`
export const HouseholdListDocument = gql`
  query HouseholdList(
    $where: HouseholdBoolExp
    $orderBy: [HouseholdOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: household(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      lastName
      firstName
      middleName
      referenceNo
      barangay
    }
    meta: householdAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const HouseholdDetailsDocument = gql`
  query HouseholdDetails($id: uuid!) {
    details: householdByPk(id: $id) {
      ...HouseholdFragment
    }
  }
  ${HouseholdFragmentFragmentDoc}
`
export const CreateProgramDocument = gql`
  mutation CreateProgram($object: ProgramInsertInput!) {
    data: insertProgramOne(object: $object) {
      id
    }
  }
`
export const UpdateProgramDocument = gql`
  mutation UpdateProgram(
    $object: ProgramSetInput
    $id: ProgramPkColumnsInput!
  ) {
    data: updateProgramByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`
export const DeleteHouseholdProgramDocument = gql`
  mutation DeleteHouseholdProgram($ids: [uuid!]!) {
    deleteHouseholdToProgram(where: { id: { _in: $ids } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export const CreateHouseholdProgramDocument = gql`
  mutation CreateHouseholdProgram($objects: [HouseholdToProgramInsertInput!]!) {
    insertHouseholdToProgram(objects: $objects) {
      returning {
        id
      }
      affected_rows
    }
  }
`
export const DeleteAssociationProgramDocument = gql`
  mutation DeleteAssociationProgram($ids: [uuid!]!) {
    deleteAssociationToProgram(where: { id: { _in: $ids } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`
export const CreateAssociationProgramDocument = gql`
  mutation CreateAssociationProgram(
    $objects: [AssociationToProgramInsertInput!]!
  ) {
    insertAssociationToProgram(objects: $objects) {
      returning {
        id
      }
      affected_rows
    }
  }
`
export const ProgramListDocument = gql`
  query ProgramList(
    $where: ProgramBoolExp
    $orderBy: [ProgramOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: program(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      type
    }
    meta: programAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const ProgramDetailsDocument = gql`
  query ProgramDetails($id: uuid!) {
    details: programByPk(id: $id) {
      id
      name
      type
      sponsoringAgency
      description
      dateStart
      dateEnd
    }
  }
`
export const ProgramBeneficiariesListDocument = gql`
  query ProgramBeneficiariesList(
    $where: ProgramBeneficiariesBoolExp
    $orderBy: [ProgramBeneficiariesOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: programBeneficiaries(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      createdAt
      farmSize
      firstName
      grossAnnualIncomeFarming
      grossAnnualIncomeNonfarming
      householdId
      id
      lastName
      programId
      barangay
      referenceNo
      commodities
    }
    meta: programBeneficiariesAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const HouseholdProgramsListDocument = gql`
  query HouseholdProgramsList(
    $where: HouseholdProgramsBoolExp
    $orderBy: [HouseholdProgramsOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: householdPrograms(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      barangay
      farmSize
      firstName
      grossAnnualIncomeFarming
      grossAnnualIncomeNonfarming
      id
      lastName
      programIds
      referenceNo
      commodities
    }
    meta: householdProgramsAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const AssociationProgramsListDocument = gql`
  query AssociationProgramsList(
    $where: AssociationProgramsBoolExp
    $orderBy: [AssociationProgramsOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: associationPrograms(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      active
      id
      name
      programIds
    }
    meta: associationProgramsAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const AssociationBeneficiariesListDocument = gql`
  query AssociationBeneficiariesList(
    $where: AssociationBeneficiariesBoolExp
    $orderBy: [AssociationBeneficiariesOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: associationBeneficiaries(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      createdAt
      id
      name
      programId
      active
      associationId
    }
    meta: associationBeneficiariesAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const CreateUserDocument = gql`
  mutation CreateUser($object: UserInsertInput!) {
    data: insertUserOne(object: $object) {
      id
    }
  }
`
export const UpdateUserDocument = gql`
  mutation UpdateUser($object: UserSetInput, $id: UserPkColumnsInput!) {
    data: updateUserByPk(_set: $object, pk_columns: $id) {
      id
    }
  }
`
export const UserListDocument = gql`
  query UserList(
    $where: UserBoolExp
    $orderBy: [UserOrderBy!]
    $offset: Int
    $limit: Int
  ) {
    list: user(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      firstName
      lastName
      email
      role
      active
    }
    meta: userAggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`
export const UserDetailsDocument = gql`
  query UserDetails($id: uuid!) {
    details: userByPk(id: $id) {
      id
      firstName
      lastName
      email
      role
      active
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    CreateAccount(
      variables: Types.CreateAccountMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateAccountMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateAccountMutation>(
            CreateAccountDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateAccount',
        'mutation'
      )
    },
    DeleteAccount(
      variables: Types.DeleteAccountMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.DeleteAccountMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.DeleteAccountMutation>(
            DeleteAccountDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteAccount',
        'mutation'
      )
    },
    GetSession(
      variables?: Types.GetSessionQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.GetSessionQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.GetSessionQuery>(GetSessionDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetSession',
        'query'
      )
    },
    CreateSession(
      variables: Types.CreateSessionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateSessionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateSessionMutation>(
            CreateSessionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateSession',
        'mutation'
      )
    },
    UpdateSession(
      variables: Types.UpdateSessionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateSessionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateSessionMutation>(
            UpdateSessionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateSession',
        'mutation'
      )
    },
    DeleteSession(
      variables?: Types.DeleteSessionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.DeleteSessionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.DeleteSessionMutation>(
            DeleteSessionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteSession',
        'mutation'
      )
    },
    GetUser(
      variables: Types.GetUserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.GetUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.GetUserQuery>(GetUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetUser',
        'query'
      )
    },
    GetUsers(
      variables: Types.GetUsersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.GetUsersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.GetUsersQuery>(GetUsersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetUsers',
        'query'
      )
    },
    CreateAuthUser(
      variables: Types.CreateAuthUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateAuthUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateAuthUserMutation>(
            CreateAuthUserDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateAuthUser',
        'mutation'
      )
    },
    UpdateAuthUser(
      variables: Types.UpdateAuthUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateAuthUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateAuthUserMutation>(
            UpdateAuthUserDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateAuthUser',
        'mutation'
      )
    },
    DeleteUser(
      variables: Types.DeleteUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.DeleteUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.DeleteUserMutation>(
            DeleteUserDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteUser',
        'mutation'
      )
    },
    CreateVerificationToken(
      variables: Types.CreateVerificationTokenMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateVerificationTokenMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateVerificationTokenMutation>(
            CreateVerificationTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateVerificationToken',
        'mutation'
      )
    },
    DeleteVerificationToken(
      variables: Types.DeleteVerificationTokenMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.DeleteVerificationTokenMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.DeleteVerificationTokenMutation>(
            DeleteVerificationTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteVerificationToken',
        'mutation'
      )
    },
    CreateAnnualInfo(
      variables: Types.CreateAnnualInfoMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateAnnualInfoMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateAnnualInfoMutation>(
            CreateAnnualInfoDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateAnnualInfo',
        'mutation'
      )
    },
    UpdateAnnualInfo(
      variables: Types.UpdateAnnualInfoMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateAnnualInfoMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateAnnualInfoMutation>(
            UpdateAnnualInfoDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateAnnualInfo',
        'mutation'
      )
    },
    DeleteAnnualInfo(
      variables: Types.DeleteAnnualInfoMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.DeleteAnnualInfoMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.DeleteAnnualInfoMutation>(
            DeleteAnnualInfoDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteAnnualInfo',
        'mutation'
      )
    },
    AnnualInfoList(
      variables?: Types.AnnualInfoListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.AnnualInfoListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.AnnualInfoListQuery>(
            AnnualInfoListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'AnnualInfoList',
        'query'
      )
    },
    AnnualInfoDetails(
      variables: Types.AnnualInfoDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.AnnualInfoDetailsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.AnnualInfoDetailsQuery>(
            AnnualInfoDetailsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'AnnualInfoDetails',
        'query'
      )
    },
    CreateAssociation(
      variables: Types.CreateAssociationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateAssociationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateAssociationMutation>(
            CreateAssociationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateAssociation',
        'mutation'
      )
    },
    UpdateAssociation(
      variables: Types.UpdateAssociationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateAssociationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateAssociationMutation>(
            UpdateAssociationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateAssociation',
        'mutation'
      )
    },
    AssociationList(
      variables?: Types.AssociationListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.AssociationListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.AssociationListQuery>(
            AssociationListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'AssociationList',
        'query'
      )
    },
    AssociationDetails(
      variables: Types.AssociationDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.AssociationDetailsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.AssociationDetailsQuery>(
            AssociationDetailsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'AssociationDetails',
        'query'
      )
    },
    CreateCommodityProduce(
      variables: Types.CreateCommodityProduceMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateCommodityProduceMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateCommodityProduceMutation>(
            CreateCommodityProduceDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateCommodityProduce',
        'mutation'
      )
    },
    UpdateCommodityProduce(
      variables: Types.UpdateCommodityProduceMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateCommodityProduceMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateCommodityProduceMutation>(
            UpdateCommodityProduceDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateCommodityProduce',
        'mutation'
      )
    },
    CommodityOptions(
      variables?: Types.CommodityOptionsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CommodityOptionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CommodityOptionsQuery>(
            CommodityOptionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CommodityOptions',
        'query'
      )
    },
    FarmOptions(
      variables?: Types.FarmOptionsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.FarmOptionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.FarmOptionsQuery>(
            FarmOptionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'FarmOptions',
        'query'
      )
    },
    CommodityProduceList(
      variables?: Types.CommodityProduceListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CommodityProduceListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CommodityProduceListQuery>(
            CommodityProduceListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CommodityProduceList',
        'query'
      )
    },
    CommodityProduceDetails(
      variables: Types.CommodityProduceDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CommodityProduceDetailsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CommodityProduceDetailsQuery>(
            CommodityProduceDetailsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CommodityProduceDetails',
        'query'
      )
    },
    CreateCommodity(
      variables: Types.CreateCommodityMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateCommodityMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateCommodityMutation>(
            CreateCommodityDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateCommodity',
        'mutation'
      )
    },
    UpdateCommodity(
      variables: Types.UpdateCommodityMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateCommodityMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateCommodityMutation>(
            UpdateCommodityDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateCommodity',
        'mutation'
      )
    },
    CommodityList(
      variables?: Types.CommodityListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CommodityListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CommodityListQuery>(
            CommodityListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CommodityList',
        'query'
      )
    },
    CommodityDetails(
      variables: Types.CommodityDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CommodityDetailsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CommodityDetailsQuery>(
            CommodityDetailsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CommodityDetails',
        'query'
      )
    },
    AverageAnnualIncomeList(
      variables?: Types.AverageAnnualIncomeListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.AverageAnnualIncomeListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.AverageAnnualIncomeListQuery>(
            AverageAnnualIncomeListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'AverageAnnualIncomeList',
        'query'
      )
    },
    DashboardStats(
      variables?: Types.DashboardStatsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.DashboardStatsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.DashboardStatsQuery>(
            DashboardStatsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DashboardStats',
        'query'
      )
    },
    InventoryOfLivestockList(
      variables?: Types.InventoryOfLivestockListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.InventoryOfLivestockListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.InventoryOfLivestockListQuery>(
            InventoryOfLivestockListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'InventoryOfLivestockList',
        'query'
      )
    },
    CropProduceList(
      variables?: Types.CropProduceListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CropProduceListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CropProduceListQuery>(
            CropProduceListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CropProduceList',
        'query'
      )
    },
    RegisteredHousehold(
      variables?: Types.RegisteredHouseholdQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.RegisteredHouseholdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.RegisteredHouseholdQuery>(
            RegisteredHouseholdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'RegisteredHousehold',
        'query'
      )
    },
    CreateFarm(
      variables: Types.CreateFarmMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateFarmMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateFarmMutation>(
            CreateFarmDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateFarm',
        'mutation'
      )
    },
    UpdateFarm(
      variables: Types.UpdateFarmMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateFarmMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateFarmMutation>(
            UpdateFarmDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateFarm',
        'mutation'
      )
    },
    HouseholdOptions(
      variables?: Types.HouseholdOptionsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.HouseholdOptionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.HouseholdOptionsQuery>(
            HouseholdOptionsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'HouseholdOptions',
        'query'
      )
    },
    FarmList(
      variables?: Types.FarmListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.FarmListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.FarmListQuery>(FarmListDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'FarmList',
        'query'
      )
    },
    FarmDetails(
      variables: Types.FarmDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.FarmDetailsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.FarmDetailsQuery>(
            FarmDetailsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'FarmDetails',
        'query'
      )
    },
    CreateHousehold(
      variables: Types.CreateHouseholdMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateHouseholdMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateHouseholdMutation>(
            CreateHouseholdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateHousehold',
        'mutation'
      )
    },
    UpdateHousehold(
      variables: Types.UpdateHouseholdMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateHouseholdMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateHouseholdMutation>(
            UpdateHouseholdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateHousehold',
        'mutation'
      )
    },
    HouseholdList(
      variables?: Types.HouseholdListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.HouseholdListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.HouseholdListQuery>(
            HouseholdListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'HouseholdList',
        'query'
      )
    },
    HouseholdDetails(
      variables: Types.HouseholdDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.HouseholdDetailsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.HouseholdDetailsQuery>(
            HouseholdDetailsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'HouseholdDetails',
        'query'
      )
    },
    CreateProgram(
      variables: Types.CreateProgramMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateProgramMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateProgramMutation>(
            CreateProgramDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateProgram',
        'mutation'
      )
    },
    UpdateProgram(
      variables: Types.UpdateProgramMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateProgramMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateProgramMutation>(
            UpdateProgramDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateProgram',
        'mutation'
      )
    },
    DeleteHouseholdProgram(
      variables: Types.DeleteHouseholdProgramMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.DeleteHouseholdProgramMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.DeleteHouseholdProgramMutation>(
            DeleteHouseholdProgramDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteHouseholdProgram',
        'mutation'
      )
    },
    CreateHouseholdProgram(
      variables: Types.CreateHouseholdProgramMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateHouseholdProgramMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateHouseholdProgramMutation>(
            CreateHouseholdProgramDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateHouseholdProgram',
        'mutation'
      )
    },
    DeleteAssociationProgram(
      variables: Types.DeleteAssociationProgramMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.DeleteAssociationProgramMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.DeleteAssociationProgramMutation>(
            DeleteAssociationProgramDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteAssociationProgram',
        'mutation'
      )
    },
    CreateAssociationProgram(
      variables: Types.CreateAssociationProgramMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateAssociationProgramMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateAssociationProgramMutation>(
            CreateAssociationProgramDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateAssociationProgram',
        'mutation'
      )
    },
    ProgramList(
      variables?: Types.ProgramListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.ProgramListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.ProgramListQuery>(
            ProgramListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'ProgramList',
        'query'
      )
    },
    ProgramDetails(
      variables: Types.ProgramDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.ProgramDetailsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.ProgramDetailsQuery>(
            ProgramDetailsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'ProgramDetails',
        'query'
      )
    },
    ProgramBeneficiariesList(
      variables?: Types.ProgramBeneficiariesListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.ProgramBeneficiariesListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.ProgramBeneficiariesListQuery>(
            ProgramBeneficiariesListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'ProgramBeneficiariesList',
        'query'
      )
    },
    HouseholdProgramsList(
      variables?: Types.HouseholdProgramsListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.HouseholdProgramsListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.HouseholdProgramsListQuery>(
            HouseholdProgramsListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'HouseholdProgramsList',
        'query'
      )
    },
    AssociationProgramsList(
      variables?: Types.AssociationProgramsListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.AssociationProgramsListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.AssociationProgramsListQuery>(
            AssociationProgramsListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'AssociationProgramsList',
        'query'
      )
    },
    AssociationBeneficiariesList(
      variables?: Types.AssociationBeneficiariesListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.AssociationBeneficiariesListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.AssociationBeneficiariesListQuery>(
            AssociationBeneficiariesListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'AssociationBeneficiariesList',
        'query'
      )
    },
    CreateUser(
      variables: Types.CreateUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.CreateUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.CreateUserMutation>(
            CreateUserDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateUser',
        'mutation'
      )
    },
    UpdateUser(
      variables: Types.UpdateUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UpdateUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UpdateUserMutation>(
            UpdateUserDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateUser',
        'mutation'
      )
    },
    UserList(
      variables?: Types.UserListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UserListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UserListQuery>(UserListDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'UserList',
        'query'
      )
    },
    UserDetails(
      variables: Types.UserDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.UserDetailsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.UserDetailsQuery>(
            UserDetailsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UserDetails',
        'query'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
