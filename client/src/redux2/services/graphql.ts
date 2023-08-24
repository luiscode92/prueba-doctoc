import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

createApi({
    reducerPath: 'ckreateAppointment',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/graphql'
    }),
    endpoints: (builder) => ({
        
    })
})