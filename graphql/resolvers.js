const axios = require('axios');
require('dotenv').config();
const token = process.env.API_ACCESS_TOKEN;


const resolvers = {
    Query: {
         getAppointment: async (_, { resourceId }) => {
            try {
                const response = await axios.post(
                    "https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/getResource",
                    {
                        resourceType: "Appointment",
                        resourceId
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}` 
                        }
                    }
                );
                return response.data;
            } catch (error) {
                console.error("Failed to fetch appointments:", error);
                throw new Error('Failed to fetch appointments.');
            }
        },
        searchAppointmentsByDate: async (_, { date }) => {
            try {
                const response = await axios.post(
                    'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
                    {
                        resourceType: "Appointment",
                        params: { date }
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );
                return response.data;
            } catch (error) {
                console.error("Failed to fetch appointments:", error);
                throw new Error('Failed to fetch appointments.');
            }
        },
        searchPatients: async (_, { familyContains }) => {
            try {
                const response = await axios({
                    method: 'POST',
                    url: 'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        resourceType: "Patient",
                        params: {
                            "family:contains": familyContains
                        }
                    }
                });
                console.log(response.data)
                return response.data

            } catch (error) {
                throw new Error(`Failed to fetch data: ${error.message}`);
            }
        },
        searchPractitioner:async (_, { familyContains }) => {
            try {
                const response = await axios({
                    method: 'POST',
                    url: 'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/searchResource',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        resourceType: 'Practitioner',
                        params: {
                            "family:contains": familyContains
                        }
                    }
                });
                console.log(response.data)
                return response.data
            } catch (error) {
              console.error('Failed to fetch from FHIR endpoint:', error);
              throw new Error('Failed to fetch from FHIR endpoint.');
            }
          }

    },
    Mutation: {
        createAppointment: async (_, { input }) => {
            try {
                const response = await axios({
                    method: 'POST',
                    url: 'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/createResource',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    data: input
                });
                console.log(response.data)
                return response.data;

            } catch (error) {
                console.error("Error creating appointment:", error);
                throw new Error("Failed to create appointment");
            }
        },
        updateAppointment: async (_, { input }) => {
            try {
                const response = await axios({
                    method: 'POST',
                    url: 'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/updateResource',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    data: input
                });
                console.log(response.data)
                return response.data;

            } catch (error) {
                console.error("Error creating appointment:", error);
                throw new Error("Failed to create appointment");
          }
        },
        deleteAppointment: async (_, { input }) => {
            try {
                const response = await axios({
                    method: 'POST',
                    url: 'https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/deleteResource',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    data: input
                });
                console.log(response.data)
                return response.data;

            } catch (error) {
                console.error("Error creating appointment:", error);
                throw new Error("Failed to create appointment");
          }
          }
    }
};

module.exports = resolvers;