const axios = require('axios');

const resolvers = {
    Query: {
         getAppointment: async (_, { resourceId }) => {
            const endpoint = "https://us-central1-doctoc-test-f0d7b.cloudfunctions.net/getResource";
            
            const requestBody = {
                resourceType: "Appointment",
                resourceId
            };

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb3NlNDU2bGh5b0BnbWFpbC5jb20iLCJpYXQiOjE2OTEyNjg1MTQ3MzMsImV4cCI6MTY5MTI2OTExOTUzM30.QUBRQX1cehzJywR_1ks0ak1LX5IuhY71hwdpGinpkNY' // Make sure to securely handle and store tokens in a real implementation
            };

            try {
                const { data } = await axios.post(endpoint, requestBody, { headers });
                return data;
            } catch (error) {
                throw new Error(`Failed to fetch from the endpoint: ${error.message}`);
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
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb3NlNDU2bGh5b0BnbWFpbC5jb20iLCJpYXQiOjE2OTEyNjg1MTQ3MzMsImV4cCI6MTY5MTI2OTExOTUzM30.QUBRQX1cehzJywR_1ks0ak1LX5IuhY71hwdpGinpkNY',
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
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb3NlNDU2bGh5b0BnbWFpbC5jb20iLCJpYXQiOjE2OTEyNjg1MTQ3MzMsImV4cCI6MTY5MTI2OTExOTUzM30.QUBRQX1cehzJywR_1ks0ak1LX5IuhY71hwdpGinpkNY',
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
                return {
                    operation: response.data.operation,
                    resourcesFound: response.data.resourcesFound.quantity,
                    resourcesData: response.data.resourcesFound.resourcesData
                };

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
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb3NlNDU2bGh5b0BnbWFpbC5jb20iLCJpYXQiOjE2OTEyNjg1MTQ3MzMsImV4cCI6MTY5MTI2OTExOTUzM30.QUBRQX1cehzJywR_1ks0ak1LX5IuhY71hwdpGinpkNY',
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
                return {
                    operation: response.data.operation,
                    resourcesFound: response.data.resourcesFound.quantity,
                    resourcesData: response.data.resourcesFound.resourcesData
                };
            } catch (error) {
              console.error('Failed to fetch from FHIR endpoint:', error);
              throw new Error('Failed to fetch from FHIR endpoint.');
            }
          }

    }
};

module.exports = resolvers;