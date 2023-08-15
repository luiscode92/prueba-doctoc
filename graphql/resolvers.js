const axios = require('axios');
const AUTH_TOKEN = process.env['API_ACCESS_TOKEN'];
const HEADERS = {
  Authorization: `Bearer ${AUTH_TOKEN}`
};

const resolvers = {
  Query: {
    cita: async (_, { id }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/getResource',
        { resourceType: "Appointment", resourceId: id },
        { headers: HEADERS }
      );
      return response.data;
    },
    citasByDate: async (_, { date }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
        { resourceType: "Appointment", params: { date } },
        { headers: HEADERS }
      );
      return response.data;
    },
    searchPatients: async (_, { family }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
        { resourceType: "Patient", params: { "family:contains": family } },
        { headers: HEADERS }
      );
      return response.data;
    },
    searchDoctors: async (_, { family }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
        { resourceType: "Practitioner", params: { "family:contains": family } },
        { headers: HEADERS }
      );
      return response.data;
    }
  },
  Mutation: {
    createCita: async (_, { appointment }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/createResource',
        appointment,
        { headers: HEADERS }
      );
      return response.data;
    },
    updateCita: async (_, { id, appointment }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/updateResource',
        { ...appointment, resourceId: id },
        { headers: HEADERS }
      );
      return response.data;
    },
    deleteCita: async (_, { id }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/deleteResource',
        { resourceType: "Appointment", resourceId: id },
        { headers: HEADERS }
      );
      return response.data;
    }
  },
};

module.exports = resolvers;
