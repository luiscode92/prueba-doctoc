
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modalSlice'
import appointmentReducer from './features/appointmentSlice';
import patientReducer from './features/patientSlice';
import practitionerReducer from './features/practitionerSlice';
import appointmentsByDateSlice from './features/appointmentSlice'


export const store = configureStore({
    reducer: {
        modalReducer,
        appointmentReducer,
        patientReducer,
        practitionerReducer,
        appointmentsByDateSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch