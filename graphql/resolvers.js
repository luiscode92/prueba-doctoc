const axios = require('axios');
require('dotenv').config();
const AUTH_TOKEN = process.env['API_ACCESS_TOKEN'];
const HEADERS = {
  Authorization: `Bearer ${AUTH_TOKEN}`
};

const resolvers = {
  Query: {
    getAppointment: async (_, { id }) => {
      try {
        const response = await axios.post(
          'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/getResource',
          { resourceType: "Appointment", resourceId: id },
          { headers: HEADERS }
        ); 
        console.log(response.data);
        return response.data;
      } catch(error) {
        console.error("Error creating appointment:", error);
        throw new Error("Failed to create appointment in API");
      }
    },
    appointmentsByDate: async (_, { resourceType, date }) => {
      try {
          const response = await axios.post(
              'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
              { resourceType, params: { date } },
              { headers: HEADERS }
          );
          console.log(response.data)
          return response.data ;
      } catch(error) {
          console.error("Error fetching appointments:", error);
          throw new Error(`Failed to fetch ${resourceType}s for the given date`);
      }
  },
    searchPatients: async (_, { family }) => {
      try {
        const response = await axios.post(
          'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
          { resourceType: "Patient", params: { "family:contains": family } },
          { headers: HEADERS }
        );
        console.log(response.data);
        return response.data;
      } catch(error) {
        console.error("Error creating appointment:", error);
        throw new Error("Failed to create appointment in API");
      }
    },
    searchDoctors: async (_, { family }) => {
      try {
        const response = await axios.post(
          'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
          { resourceType: "Practitioner", params: { "family:contains": family } },
          { headers: HEADERS }
        );
        console.log(response.data);
        return response.data;
      } catch(error) {
        console.error("Error creating appointment:", error);
        throw new Error("Failed to create appointment in API");
      }
    }
  },
  Mutation: {
    createAppointment: async (_, { Appointment }) => {
      try {
          const response = await axios.post(
              'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/createResource',
              Appointment,
              { headers: HEADERS }
          );
          if (!response.data.resourceData) {
              throw new Error("Invalid API response");
          }
          console.log(response.data);
          return response.data;
      } catch(error) {
        console.error("Error updating appointment:", error);
        
        // Check if the error response from API contains a message and include that in the error thrown
        let errorMessage = error.message;
        if (error.response && error.response.data) {
            errorMessage += ` - ${error.response.data}`;
        }
        
        throw new Error(errorMessage);
      }
    },
    updateAppointment: async (_, { id, appointment }) => {
      try {
        const response = await axios.post(
            'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/updateResource',
            { ...appointment, resourceId: id },
            { headers: HEADERS }
        );
        console.log("API Response:", response.data);
        // Check if response.data.resourceData is valid before returning
        if (!response.data.resourceData) {
            throw new Error("Invalid API response");
        }
        return response.data;
      } catch(error) {
        console.error("Error updating appointment:", error);
        
        // Check if the error response from API contains a message and include that in the error thrown
        let errorMessage = error.message;
        if (error.response && error.response.data) {
            errorMessage += ` - ${error.response.data}`;
        }
        
        throw new Error(errorMessage);
      }
    },
    deleteAppointment: async (_, { id }) => {
      try {
        const response = await axios.post(
          'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/deleteResource',
          { resourceType: "Appointment", resourceId: id},
          { headers: HEADERS }
        );
        console.log("API Response:", response.data);
  
        return response.data;
      } catch (error) {
        console.error("Error deleting appointment:", error);
        
        // Check if the error response from API contains a message and include that in the error thrown
        let errorMessage = error.message;
        if (error.response && error.response.data) {
            errorMessage += ` - ${error.response.data}`;
        }
        
        throw new Error(errorMessage);
      }
    }
  },
};

module.exports = resolvers;
