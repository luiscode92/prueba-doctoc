import { AppDispatch, RootState } from "./store";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import {
    fetchAppointment,
    searchAppointmentsByDate,
    createAppointment,
    updateAppointment,
    deleteAppointment
  } from './features/appointmentSlice';


export const useFetchAppointment = () => {
    const dispatch = useDispatch();
    return (resourceId: string) => dispatch(fetchAppointment(resourceId));
};

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:  TypedUseSelectorHook<RootState> = useSelector;