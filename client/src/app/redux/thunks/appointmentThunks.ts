import axios from 'axios';
import {
  createAppointmentRequest,
  createAppointmentSuccess,
  createAppointmentError,
} from '../actions/appointmentActions';

const ENDPOINT = "http://localhost:4000/graphql";

export const createAppointment = (appointmentData: any) => async (dispatch: any) => {
  dispatch(createAppointmentRequest(appointmentData));

  try {
    const response = await axios.post(ENDPOINT, {
      query: `
        mutation CreateAppointment($input: AppointmentDataInput!) {
          createAppointment(input: $input) {
            operation
            resourceType
            resourceData {
              start
              end
              // ... other fields
            }
          }
        }
      `,
      variables: {
        input: appointmentData,
      },
    });

    const data = response.data.data.createAppointment;
    dispatch(createAppointmentSuccess(data));
  } catch (error) {
    dispatch(createAppointmentError(error.message));
  }
};
