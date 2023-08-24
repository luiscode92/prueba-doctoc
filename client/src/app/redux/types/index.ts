import {
    CREATE_APPOINTMENT_REQUEST,
    CREATE_APPOINTMENT_SUCCESS,
    CREATE_APPOINTMENT_ERROR,
  } from '../actions/appointmentActions';

  // Types for the appointment state
export interface AppointmentState {
    appointments: Appointment[];
    loading: boolean;
    error: string | null;
  }
  
  export interface Appointment {
    resourceType: string;
    resourceData: {
      resourceType: string;
      status: string;
      serviceType: ServiceType[];
      start: string;
      end: string;
      participant: Participant[];
    };
  }
  
  interface ServiceType {
    coding: Coding[];
  }
  
  interface Coding {
    system: string;
    code: string;
    display: string;
  }
  
  interface Participant {
    actor: {
      reference: string;
    };
    status: string;
  }
  
  // Types for the appointment actions
  export interface CreateAppointmentRequestAction {
    type: typeof CREATE_APPOINTMENT_REQUEST;
    payload: any; // This can be further detailed based on your GraphQL input type
  }
  
  export interface CreateAppointmentSuccessAction {
    type: typeof CREATE_APPOINTMENT_SUCCESS;
    payload: Appointment;
  }
  
  export interface CreateAppointmentErrorAction {
    type: typeof CREATE_APPOINTMENT_ERROR;
    error: string;
  }
  
  export type AppointmentActionTypes =
    | CreateAppointmentRequestAction
    | CreateAppointmentSuccessAction
    | CreateAppointmentErrorAction;


//new appointment modal
 
  