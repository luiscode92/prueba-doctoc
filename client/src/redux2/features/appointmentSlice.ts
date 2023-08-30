import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../apolloClient';
import {
  GET_APPOINTMENT,
  SEARCH_APPOINTMENTS_BY_DATE,
  CREATE_APPOINTMENT,
  UPDATE_APPOINTMENT,
  DELETE_APPOINTMENT
} from '../graphqlQueries';

// Define thunks
export const fetchAppointment = createAsyncThunk(
  'appointments/fetchAppointment',
  async (resourceId: string) => {
    const response = await client.query({
      query: GET_APPOINTMENT,
      variables: { resourceId }
    });
    return response.data.getAppointment;
  }
);

export const searchAppointmentsByDate = createAsyncThunk(
  'appointments/searchAppointmentsByDate',
  async (date: string) => {
    const response = await client.query({
      query: SEARCH_APPOINTMENTS_BY_DATE,
      variables: { date }
    });
    return response.data.searchAppointmentsByDate;
  }
);

export const createAppointment = createAsyncThunk(
  'appointments/createAppointment',
  async (input: any) => {
    const response = await client.mutate({
      mutation: CREATE_APPOINTMENT,
      variables: { input }
    });
    return response.data.createAppointment;
  }
);

export const updateAppointment = createAsyncThunk(
  'appointments/updateAppointment',
  async (input: any) => {
    const response = await client.mutate({
      mutation: UPDATE_APPOINTMENT,
      variables: { input }
    });
    return response.data.updateAppointment;
  }
);

export const deleteAppointment = createAsyncThunk(
  'appointments/deleteAppointment',
  async (input: any) => {
    const response = await client.mutate({
      mutation: DELETE_APPOINTMENT,
      variables: { input }
    });
    return response.data.deleteAppointment;
  }
);

// Define slice
const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAppointment.fulfilled, (state, action) => {
      return action.payload;
    });
    // Handle other thunks similarly...
  },
});

export default appointmentSlice.reducer;
