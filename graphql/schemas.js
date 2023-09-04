const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
    getAppointment(resourceId: ID!): AppointmentResponse
    searchAppointmentsByDate(date: String!): AppointmentResponse!
    searchPatients(familyContains: String!): searchPatientsResponse
    searchPractitioner(familyContains: String!): SearchPracticionerResponse!
}

type ResourcesFound {
    quantity: Int!
    resourcesData: [AppointmentData]
}


type AppointmentResponse {
    operation: String!
    resourceId: ID!
    resourceType: String!
    resourceData: AppointmentData
    resourcesFound: ResourcesFound!
}

type AppointmentData {
    end: String!
    id: ID!
    meta: Meta
    participant: [Participant!]
    resourceType: String!
    serviceType: [ServiceType!]
    start: String!
    status: String!
    fullUrl: String!
    resource: ResourceDetails!
    search: SearchDetails!
}

type ResourceDetails {
    end: String!
    id: String!
    meta: Meta!
    participant: [Participant!]!
    resourceType: String!
    serviceType: [ServiceType!]!
    start: String!
    status: String!
    name: Name
}

type Meta {
    lastUpdated: String!
    versionId: String!
}

type Participant {
    actor: Actor!
    status: String!
}

type Actor {
    reference: String!
}

type ServiceType {
    coding: [Coding!]
}

type Coding {
    code: String!
    display: String!
    system: String!
}

type SearchDetails {
    mode: String!
}


##searchPatients
type Patient {
    birthDate: String!
    gender: String!
    id: ID!
    meta: PatientMeta!
    name: [PatientName!]!
    resourceType: String!
}

type ResourcesData {
    fullUrl: String!
    resource: Patient!
    search: Search
}

####Patient####
type searchPatientsResponse {
    operation: String!
    resourcesFound: PatientResourcesFound!
}

type PatientResourcesFound {
    quantity: Int
    resourcesData: [PatientResoultData]
}

type PatientResoultData {
    fullUrl: String
    resource: PatientResult
    search: Search
}

type PatientResult {
    birthDate: String
    gender: String
    id: String
    meta: Meta
    name: [PatientName]
    resourceType: String
}

type PatientName {
    family: String!
    given: [String!]!
    use: String
}

type PatientMeta {
    lastUpdated: String!
    versionId: String!
}

type Search {
    mode: String
}


####Doctor####
type SearchPracticionerResponse {
    operation: String!
    resourcesFound: ResourcesFoundType!

}

type ResourcesFoundType {
    quantity: Int
    resourcesData: [PractitionerResoultData]
}

type PractitionerResoultData {
    fullUrl: String
    resource: PractitionerResult
    search: Search
}

type PractitionerResult {
    active: Boolean
    address: [Address]
    gender: String
    id: String
    identifier: [Identifier]
    meta: Meta
    name: [Name]
    resourceType: String
    telecom: [Telecom]
}

type Name {
    family: String
    given: [String]
    prefix: [String]
}
  
type Telecom {
    system: String
    use: String
    value: String
}

type Address {
    city: String
    country: String
    line: [String]
    postalCode: String
    state: String
}
  
type Identifier {
    system: String
    value: String
}


############### MUTATIONS ######################
type Mutation {
    createAppointment(input: createAppointmentInput!): createAppointmentResponse
    updateAppointment(input: updateAppointmentInput!): updateAppointmentResponse
    deleteAppointment(input: deleteAppointmentInput): deletedAppointmentResponse
}

input createAppointmentInput {
    resourceType: String!
    resourceData: AppointmentResourceDataInput!
}

input AppointmentResourceDataInput {
    resourceType: String!
    id: ID
    status: String!
    serviceType: [ServiceTypeInput!]!
    start: String!
    end: String!
    participant: [ParticipantInput!]!
}

input ServiceTypeInput {
    coding: [CodingInput!]!
}

input CodingInput {
    system: String!
    code: String!
    display: String!
}

input ParticipantInput {
    actor: ActorInput!
    status: String!
}

input ActorInput {
    reference: String!
}

type createAppointmentResponse {
    operation: String!
    resourceType: String!
    resourceId: String
    resourceData: AppointmentResourceData!
}

type AppointmentResourceData {
    resourceType: String!
    status: String!
    serviceType: [ServiceType!]!
    start: String!
    end: String!
    participant: [Participant!]!
    id: String
    meta: Meta
}

type ServiceType {
    coding: [Coding!]!
}

type Coding {
    system: String!
    code: String!
    display: String!
}

type Participant {
    actor: Actor!
    status: String!
}

type Actor {
    reference: String!
}

type Meta {
    lastUpdated: String!
    versionId: String!
}

##update

type updateAppointmentResponse {
    operation: String!
    resourceId: String!
    resourceType: String!
    resourceData: AppointmentResourceData!
}

input updateAppointmentInput {
    resourceType: String!
    resourceData: AppointmentResourceDataInput!
    resourceId: String!
}

####delete

input deleteAppointmentInput {
    resourceId: String!
    resourceType: String!
}

type deletedAppointmentResponse {
    operation: String
    resourceId: String!
    resourceType: String!
}
  



`;

module.exports = typeDefs