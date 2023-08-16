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
    resourceId: ID!
    id: ID
    resourceType: String!
    status: String!
    serviceType: [ServiceType!]!
    start: String!
    end: String!
    participant: [Participant!]!
  }

  type DeleteAppointmentResponse {
    resourceType: String!
    resourceId: ID!
    status: String!
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
    appointment(id: ID!): Appointment
    appointmentsByDate(date: String!): [Appointment!]!
    searchPatients(family: String): [Actor!]!
    searchDoctors(family: String): [Actor!]!
  }

  type Mutation {
    createAppointment(appointment: AppointmentInput!): Appointment!
    updateAppointment(id: ID!, appointment: AppointmentInput!): Appointment!
    deleteAppointment(id: ID!): DeleteAppointmentResponse!
  }
`;

module.exports = typeDefs


