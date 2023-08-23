export const CREATE_APPOINTMENT_REQUEST = 'CREATE_APPOINTMENT_REQUEST';
export const CREATE_APPOINTMENT_SUCCESS = 'CREATE_APPOINTMENT_SUCCESS';
export const CREATE_APPOINTMENT_ERROR = 'CREATE_APPOINTMENT_ERROR';

export const createAppointmentRequest = (data: any) => ({
  type: CREATE_APPOINTMENT_REQUEST,
  payload: data,
});

export const createAppointmentSuccess = (appointment: any) => ({
  type: CREATE_APPOINTMENT_SUCCESS,
  payload: appointment,
});

export const createAppointmentError = (error: string) => ({
  type: CREATE_APPOINTMENT_ERROR,
  error,
});
