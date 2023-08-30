import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../apolloClient';
import { SEARCH_PRACTITIONER } from '../graphqlQueries';

// Define thunks
export const searchPractitioner = createAsyncThunk(
  'practitioners/searchDoctor',
  async (familyContains: string) => {
    const response = await client.query({
      query: SEARCH_PRACTITIONER,
      variables: { familyContains }
    });
    return response.data.searchPractitioner;
  }
);

// Define slice
const practitionerSlice = createSlice({
  name: 'practitioners',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchPractitioner.fulfilled, (state, action) => {
      return action.payload;
    });
    // Handle other thunks similarly...
  },
});

export default practitionerSlice.reducer;
