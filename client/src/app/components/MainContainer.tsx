'use client'
import Header from './header'
import { useEffect, useState } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/redux2/hooks';
import { toggleModal } from '@/redux2/features/modalSlice'
import {
    fetchAppointment,
    searchAppointmentsByDate,
    // other hooks..
} from '@/redux2/features/appointmentSlice';
import {searchPractitioner} from '@/redux2/features/practitionerSlice'
import AppointmentCard from './AppointmentCard';
import PatientCard from './PatientCard';



export default function MainContainer() {
    const dispatch = useAppDispatch();


    const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
    const [appointmentsByDr, setAppointmentsByDr] = useState<string[]>([]);
    const [matchedPatientIds, setMatchedPatientIds] = useState<string[]>([]);
    const [tempSelectedDoctorId, setTempSelectedDoctorId] = useState<string>("");


    //console.log("appointments ", appointmentsByDr)

    const isOpen = useAppSelector(state => state.modalReducer.isOpen)
    const practitioners = useAppSelector(state => state.practitionerReducer);
    const todayAppointments = useAppSelector(state => state.appointmentsByDateSlice);
    //const appointments = useAppSelector(state => state.appointmentReducer);

    const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const doctorId = event?.target.value as string;
        console.log("dr id", doctorId)
        setTempSelectedDoctorId(doctorId);
    };

    const handleChangesDr = () => {
        setSelectedDoctorId(tempSelectedDoctorId);
        getAppointmentIdsByDrId(todayAppointments, tempSelectedDoctorId);
    };
    
    

    useEffect(() => {
        dispatch(searchAppointmentsByDate("2023-08-01"));
        dispatch(searchPractitioner("to"));
       // dispatch(fetchAppointment("30522cfd-6930-4c1f-87f6-3725e00e8f3b"));
     }, []);

    // console.log("all app", todayAppointments)
    const getAppointmentIdsByDrId = (todayAppointments, selectedDoctorId) => {
        if (!todayAppointments?.resourcesFound?.resourcesData) {
            console.error("Invalid data structure for todayAppointments:", todayAppointments);
            return [];  // Return an empty array
        }

        const matchedAppointmentIds: string[] = [];
        const patientIds: string[] = [];
    
        todayAppointments.resourcesFound.resourcesData.forEach(appointmentData => {
            const isMatch = appointmentData.resource.participant.some(participant => {
                if (participant.actor.reference.endsWith(selectedDoctorId)) {
                    // Extracting the patient ID from the "reference" field
                    const patientReference = appointmentData.resource.participant.find((p: any) => p.actor.reference.startsWith("Patient")).actor.reference;
                    const patientId = patientReference.split("/")[1];
                    patientIds.push(patientId);
                    return true;
                }
                return false;
            });
    
            if (isMatch) {
                matchedAppointmentIds.push(appointmentData.resource.id);
            }
        });

        console.log("matches", matchedAppointmentIds.length)
    
        setAppointmentsByDr(matchedAppointmentIds);
        setMatchedPatientIds(patientIds); 
        return matchedAppointmentIds;
    };

    return (
        <div className="flex w-full">
            <div className={`flex flex-col ${isOpen ? 'flex-grow' : 'w-full'}`}>
                <Header/>
                <div className="bg-white p-6 rounded-lg shadow-md  m-8 divide-y divide-gray-200">
                    <div className="flex justify-between items-center mb-4 ">
                        <div className="flex space-x-4">
                            <button className="w-[67px] h-[44px] p-[10px] px-[18px] text-gray-700 rounded-[8px] border border-solid space-x-[8px] space-y-[8px] text-left text-sm font-semibold leading-[20px] tracking-normal">Hoy</button>
                            <div className='inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50'></div>
                            <div className='flex items-center'>
                                <ArrowBackIosIcon className='w-[50] h-[50]'/>
                                    <div className='flex items-center p-[10px] px-[18px] w-[158px] h-[44px] rounded-[8px] border border-solid gap-2'>
                                        <CalendarTodayIcon className='w-[20px] h-[20px] text-gray-700'/>
                                        <button className="w-auto rounded-[8px] text-gray-700 whitespace-nowrap flex-shrink-0 text-left text-sm font-semibold leading-[20px] tracking-normal"> Agosto 2023</button>
                                    </div>
                                <ArrowBackIosIcon className="transform rotate-180"/>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <h3 className="font-inter text-md font-medium leading-6 tracking-normal text-left text-gray-700 ">Agenda del médico:</h3>
                            <div className=" flex items-center w-[300px] h-[44px] p-[10px] px-[18px] rounded-[8px] border border-solid space-x-[8px] flex overflow-hidden">
                                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" className='h-[24px] w-[24px] rounded-full' alt="" />   
                                <select
                                    className='w-[300px]'
                                    id="doctor-select"
                                    value={tempSelectedDoctorId}
                                    onChange={handleSelectChange}
                                >
                                    {practitioners?.resourcesFound?.resourcesData.map((practitioner) => (
                                        <option key={practitioner.resource.id} value={practitioner.resource.id}>
                                            {`${practitioner.resource.name[0].prefix[0]} ${practitioner.resource.name[0].given[0]} ${practitioner.resource.name[0].family}`}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button 
                                className="w-[102px] h-[44px] p-[10px] px-[18px] rounded-[8px] border border-solid space-x-[8px] text-gray-700"
                                onClick={handleChangesDr}
                            >
                                Cambiar
                            </button>
                        </div>
                    </div>
                    {appointmentsByDr.length > 0 ?   
                    (<div className="mt-4 max-h-[calc(6*105px)] overflow-y-auto overflow-scroll">
                        {
                            appointmentsByDr.map((appointmentId, idx) => (
                                <PatientCard key={idx} appointmentId={appointmentId} />
                            ))
                        }
                    </div>)  : 
                    (<div className='text-center py-6 space-x-[8px] space-y-[8px]'>
                        <p className="text-gray-900 text-center text-md font-inter font-semibold leading-6 tracking-normal">No se encontraron registros</p>
                        <p className="text-gray-600">El médico seleccionado no tiene ninguna cita el día de hoy.</p>
                    </div>)
                    }
                   
                </div>
            </div>
            {isOpen && <AppointmentCard/>}
            
        </div>
    )
}
