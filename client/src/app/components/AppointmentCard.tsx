import { useCallback, useState, useEffect } from "react";
import { Select, Option, Button, Input, MenuItem } from "@mui/base";
import LaunchIcon from '@mui/icons-material/Launch';
import {
    fetchAppointment,
    searchAppointmentsByDate,
} from '@/redux2/features/appointmentSlice';
import {searchPatients} from '@/redux2/features/patientSlice'
import {searchPractitioner} from '@/redux2/features/practitionerSlice'
import { useAppDispatch, useAppSelector } from '@/redux2/hooks';

export default function AppointmentCard() {
    const dispatch = useAppDispatch();

    const [selectedDoctorIsOpen, setSelectedDoctorIsOpen] = useState<boolean>(false);
    const [selectedDoctor, setSelectedDoctor] = useState<string>('');

    const practitioners = useAppSelector(state => state.practitionerReducer);
    const patients = useAppSelector(state => state.patientReducer);

    useEffect(() => {
        dispatch(searchPatients("sm"));
     }, []);

    console.log("Drs", practitioners)
    console.log("patients", patients)
    const [age, setAge] = useState('');
    const handleSelectDrButton = (event: any) => {
      setSelectedDoctorIsOpen(!selectedDoctorIsOpen)
    };


    return (
        <div className="bg-white w-[622px] h-screen flex flex-col">
            <div className="h-[77px] flex items-center border-t-8 border-primary-700">
                <h1 className="font-inter text-left text-lg font-semibold leading-7 tracking-normal ml-[24px]">Nueva cita</h1>
            </div>
            <div className="border-t border-gray-200 p-[24px] flex-grow overflow-y-auto">
                <div className="flex flex-col space-y-2">
                    <p className="text-sm font-medium text-gray-700 block">Médico</p>
                    {!selectedDoctorIsOpen ? (
                        <button onClick={handleSelectDrButton} className="w-[156px] h-[44px] rounded-[8px] bg-white text-gray-700 border border-gray-300 font-semibold text-sm flex items-center justify-center gap-[8px]">
                            <div className="flex ">
                                <LaunchIcon className="w-[20px] h-[20px]"/>
                            </div>
                            <p>Seleccionar</p>
                        </button>
                    ) : (
                        <div className="w-[574px] border border-gray-300 rounded-[8px] bg-white">
                        <div className="flex flex-col justify-start items-stretch">
                            <div className="border bg-white mt-4">
                                <div className="bg-gray-50 flex justify-center items-center h-10 px-6">
                                    <p className="text-xs font-medium tracking-wide uppercase text-gray-500">A</p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="border-t border-solid"></div>
                                    <div className="flex justify-start items-start h-[73px] border-b border-solid pt-4 px-6">
                                        <img className="w-10 h-10 object-cover block rounded-[20px] content-[url('https://s3-alpha-sig.figma.com/img/...')]" />
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">[Nombre médico]</p>
                                            <p className="text-sm text-gray-500">[Especialidad]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    )}
                </div>
                <div className="mt-6">
                <div className="flex flex-col space-y-2">
                    <p className="text-sm font-medium text-gray-700 block">Paciente</p>
                    <div className="flex gap-[16px]">
                        <select id="singleSelection" data-te-select-init className="w-[132px] h-[44px] pl-4 pr-6 py-3 rounded-lg border gap-2">
                            <option value="1">Nombre</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                        </select>
                        <input className="w-[320px] h-[44px] rounded-lg border "></input>
                        <Button className="w-[90px] h-[44px] px-[18px] py-[10px] rounded-lg border gap-2 bg-white text-gray-700 font-semibold text-sm">Buscar</Button>
                    </div>        
                </div>
                <div className="mt-6">
                    <label className="text-sm font-medium text-gray-700 block">Tipo de atención</label>
                    <select id="singleSelection" 
                            data-te-select-init 
                            className="w-[574px] h-[44px] px-4 py-3 rounded-lg border gap-2">
                        <option value="1">Nombre</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                    </select>

                </div>
                <div className="flex space-x-4 mt-6 gap-[21px]">
                    <div>
                        <label className="text-sm font-medium text-gray-700 block">Fecha</label>
                        <Input
                            slotProps={{
                            root: { className: "border rounded-md p-2 flex items-center" },
                            input: {
                                className: "border-none focus:border-none focus:ring-0",
                                placeholder: "dd/mm/aaaa",
                                type: "text",
                            },
                            }}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 block">Hora</label>
                        <select id="singleSelection" 
                                data-te-select-init 
                                className="w-[276.5px] h-[44px] px-3.5 py-3 rounded-lg border gap-2">
                            <option value="1">Nombre</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                        </select>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between h-18 pr-6 pl-6 gap-2 box-border  mt-auto">
                <p className="flex-shrink-0 text-red-600 font-semibold text-sm">Cancelar</p>
                <Button className="flex-shrink-0 w-25 h-10 text-white font-semibold text-sm bg-teal-600 border border-teal-700 rounded-lg shadow-sm cursor-pointer">Confirmar</Button>
            </div>

        </div>

    )
}