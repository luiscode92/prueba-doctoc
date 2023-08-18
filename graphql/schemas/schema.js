const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Meta {
  lastUpdated: String
  versionId: String
}

type Coding {
  system: String
  code: String
  display: String
}

type Name {
  family: String
  given: [String]
  use: String
}

type Address {
  city: String
  country: String
  line: [String]
  postalCode: String
  state: String
}

type Telecom {
  system: String
  use: String
  value: String
}

type Search {
  mode: String
}

type Patient {
  birthDate: String
  gender: String
  id: ID
  meta: Meta
  name: [Name]
  resourceType: String
}

type Practitioner {
  active: Boolean
  address: [Address]
  gender: String
  id: ID
  identifier: [Coding]
  meta: Meta
  name: [Name]
  resourceType: String
  telecom: [Telecom]
}

type Participant {
  actor: Actor
  status: String
}

type Actor {
  reference: String
}

type ServiceType {
  coding: [Coding]
}

type Appointment {
  end: String
  id: ID
  meta: Meta
  participant: [Participant]
  resourceType: String
  resourceId: String
  serviceType: [ServiceType]
  start: String
  status: String
}

type Query {
  getAppointment(id: ID): Appointment
  appointmentsByDate(resourceType: String, params: ParamsInput): [appointmentsByDateTypes]
  searchPatients(name: String): [Patient]
  searchDoctors(name: String): [Practitioner]
}

input ParamsInput {
  date: String!
}

type appointmentsByDateTypes {
  operation: String
  resourcesFound: resourcesFoundTypes
}


type resourcesFoundTypes {
  quantity: Int
  resourcesData: [resourceDataType]
}

type resourceDataType {
  fullUrl: String
  resource: Appointment
  search: Search
}

input DateFilter {
  date: String
}

type AppointmentResponse {
  resourceType: String
  resourceData: AppointmentData
}

type AppointmentData {
  status: String
  start: String
  end: String
  participant: [Participant]
}

type Participant {
  actor: Actor
  status: String
}

type Actor {
  reference: String
}

type Mutation {
  createAppointment(input: AppointmentInput): Appointment
  updateAppointment(id: ID, input: AppointmentInput): Appointment
  deleteAppointment(id: ID): DeletedResponse
}

input AppointmentInput {
  end: String
  start: String
  status: String
  participant: [ParticipantInput]
  serviceType: [ServiceTypeInput]
}

input ParticipantInput {
  actor: ActorInput
  status: String
}

input ActorInput {
  reference: String
}

input ServiceTypeInput {
  coding: [CodingInput]
}

input CodingInput {
  system: String
  code: String
  display: String
}

type DeletedResponse {
  operation: String
  resourceId: ID
  resourceType: String
}

`;

module.exports = typeDefs
