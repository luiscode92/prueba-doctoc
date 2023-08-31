import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../apolloClient';
import { SEARCH_PATIENTS } from '../graphqlQueries';

// Define thunks
export const searchPatients = createAsyncThunk(
  'patients/searchPatients',
  async (familyContains: string) => {
    const response = await client.query({
      query: SEARCH_PATIENTS,
      variables: { familyContains }
    });
    return response.data.searchPatients;
  }
);

// Define slice
const patientSlice = createSlice({
  name: 'patients',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchPatients.fulfilled, (state, action) => {
      return action.payload;
    });

  },
});

export default patientSlice.reducer;
