const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Coding {
    system: String!
    code: String!
    display: String!
  }

  type ServiceType {
    coding: [Coding!]!
  }

  type Actor {
    reference: String!
  }

  type Participant {
    actor: Actor!
    status: String!
  }

  type Appointment {
    id: ID
    resourceType: String!
    status: String!
    serviceType: [ServiceType!]!
    start: String!
    end: String!
    participant: [Participant!]!
  }

  input AppointmentInput {
    resourceType: String!
    resourceData: ResourceDataInput!
}

  input ResourceDataInput {
    resourceType: String!
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

  type Query {
    cita(id: ID!): Appointment
    citasByDate(date: String!): [Appointment!]!
    searchPatients(family: String): [Actor!]!
    searchDoctors(family: String): [Actor!]!
  }

  type Mutation {
    createAppointment(appointment: AppointmentInput!): Appointment!
    updateCita(id: ID!, appointment: AppointmentInput!): Appointment!
    deleteCita(id: ID!): Boolean!
  }
`;

module.exports = typeDefs


