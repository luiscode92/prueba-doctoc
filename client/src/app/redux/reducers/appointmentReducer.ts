import {
    CREATE_APPOINTMENT_REQUEST,
    CREATE_APPOINTMENT_SUCCESS,
    CREATE_APPOINTMENT_ERROR,
  } from '../actions/appointmentActions';
  
<<<<<<< HEAD
  import { AppointmentState, AppointmentActionTypes } from '../types';
  
  const initialState: AppointmentState = {
=======
  const initialState = {
>>>>>>> 7cd433964e8f32df8d371b29035755e2373f49dd
    appointments: [],
    loading: false,
    error: null,
  };
  
<<<<<<< HEAD
  const appointmentReducer = (state = initialState, action: AppointmentActionTypes): AppointmentState => {
=======
  const appointmentReducer = (state = initialState, action) => {
>>>>>>> 7cd433964e8f32df8d371b29035755e2373f49dd
    switch (action.type) {
      case CREATE_APPOINTMENT_REQUEST:
        return { ...state, loading: true };
      case CREATE_APPOINTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          appointments: [...state.appointments, action.payload],
        };
      case CREATE_APPOINTMENT_ERROR:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default appointmentReducer;
  