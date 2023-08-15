const axios = require('axios');
require('dotenv').config();
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
      console.log(response.data);
      return response.data.data;
    },
    citasByDate: async (_, { date }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
        { resourceType: "Appointment", params: { date } },
        { headers: HEADERS }
      );
      console.log(response.data);
      return response.data.data;
    },
    searchPatients: async (_, { family }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
        { resourceType: "Patient", params: { "family:contains": family } },
        { headers: HEADERS }
      );
      console.log(response.data);
      return response.data.data;
    },
    searchDoctors: async (_, { family }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
        { resourceType: "Practitioner", params: { "family:contains": family } },
        { headers: HEADERS }
      );
      console.log(response.data);
      return response.data.data;
    }
  },
  Mutation: {
    createAppointment: async (_, { appointment }) => {
      try {
          const response = await axios.post(
              'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/createResource',
              appointment,
              { headers: HEADERS }
          );
          console.log("API Response:", response.data);
          
          // Check if response.data.resourceData is valid before returning
          if (!response.data.resourceData) {
              throw new Error("Invalid API response");
          }
          
          return response.data.resourceData;
      } catch(error) {
          console.error("Error creating appointment:", error);
          throw new Error("Failed to create appointment in API");
      }
  },
    updateCita: async (_, { id, appointment }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/updateResource',
        { ...appointment, resourceId: id },
        { headers: HEADERS }
      );
      console.log(response.data);
      return response.data.data;
    },
    deleteCita: async (_, { id }) => {
      const response = await axios.post(
        'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/deleteResource',
        { resourceType: "Appointment", resourceId: id },
        { headers: HEADERS }
      );
      console.log(response.data);
      return response.data.data;
    }
  },
};

module.exports = resolvers;
