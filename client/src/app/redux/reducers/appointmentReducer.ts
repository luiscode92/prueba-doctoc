import {
    CREATE_APPOINTMENT_REQUEST,
    CREATE_APPOINTMENT_SUCCESS,
    CREATE_APPOINTMENT_ERROR,
  } from '../actions/appointmentActions';
  
  import { AppointmentState, AppointmentActionTypes } from '../types';
  
  const initialState: AppointmentState = {
    appointments: [],
    loading: false,
    error: null,
  };
  
  const appointmentReducer = (state = initialState, action: AppointmentActionTypes): AppointmentState => {
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
  