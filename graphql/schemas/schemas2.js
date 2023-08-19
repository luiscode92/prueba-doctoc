const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
    getAppointment(resourceId: ID!): AppointmentResponse
    searchAppointmentsByDate(date: String!): AppointmentResponse!
    searchPatients(familyContains: String!): SearchResponse
    searchPractitioner(familyContains: String!): SearchPracticionerResponse
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
type SearchResponse {
    operation: String!
    resourcesFound: Int!
    resourcesData: [ResourcesData!]!
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


##serachDoctor
type SearchPracticionerResponse {
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

`;

module.exports = typeDefs