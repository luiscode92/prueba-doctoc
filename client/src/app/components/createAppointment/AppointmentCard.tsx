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

    const practitioners = useAppSelector(state => state.practitionerReducer);
    const patients = useAppSelector(state => state.patientReducer);

    const [selectedPatientIsOpen, setSelectedPatientIsOpen] = useState<boolean>(false);
    const [selectedDoctorIsOpen, setSelectedDoctorIsOpen] = useState<boolean>(false);
    const [selectedPatientIsSelected, setSelectedPatientIsSelected] = useState<boolean>(false);
    const [selectedDoctorIsSelected, setSelectedDoctorIsSelected] = useState<boolean>(false);
    const [selectedDoctor, setSelectedDoctor] = useState<string>('');
    const [selectedPatient, setSelectedPatient] = useState<string>('');
    const [filteredPatients, setFilteredPatients] = useState(patients?.resourcesFound?.resourcesData || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [time, setTime] = useState('10:00');

    const [startDate, setStartDate] = useState('');

    useEffect(() => {
        dispatch(searchPatients("sm"));
        const filteredPt = patients?.resourcesFound?.resourcesData.filter(patient => 
            patient.resource.name[0].family.includes(searchTerm) || 
            patient.resource.name[0].given[0].includes(searchTerm)
        );
        setFilteredPatients(filteredPt);
     }, []);

    console.log("Drs", practitioners)
    console.log("patients", patients)
    const [age, setAge] = useState('');
    const handleSelectDrButton = (event: any) => {
      setSelectedDoctorIsOpen(!selectedDoctorIsOpen)
    };

    const handleSelectPatientButton = () => {
        setSelectedPatientIsOpen(!selectedPatientIsOpen)
    }

    const handleSubmit =() => {
        console.log(selectedPatient)
    }

    const handleSelectedDoctor = () => {
        setSelectedPatientIsSelected(true)
        handleSelectDrButton(false)
    }


    


    return (
        <div className="bg-white w-[622px] h-screen flex flex-col">
            <div className="h-[77px] flex items-center border-t-8 border-primary-700">
                <h1 className="font-inter text-left text-lg text-black font-semibold leading-7 tracking-normal ml-[24px]">Nueva cita</h1>
            </div>
            <div className="border-t border-gray-200 p-[24px] flex-grow overflow-y-auto">
                <div className="flex flex-col space-y-2">
                    <p className="text-sm font-medium text-black block">Médico</p>
                    {!selectedPatientIsSelected ? (
                        <button onClick={handleSelectDrButton} className="w-[156px] h-[44px] rounded-[8px] bg-white text-gray-700 border border-gray-300 font-semibold text-sm flex items-center justify-center gap-[8px]">
                            <div className="flex ">
                                <LaunchIcon className="w-[20px] h-[20px]"/>
                            </div>
                            <p>Seleccionar</p>
                        </button>
                            ) : (
                                <div className="bg-[white] flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto box-border">
                                    <div className="flex justify-start items-stretch flex-row h-11 grow-0 shrink-0 basis-auto box-border mt-1.5">
                                    <div
                                        className="border shadow-[0px_1px_2px_rgba(16,24,40,0.05)] bg-gray-50 flex justify-start items-center flex-row grow shrink-0 basis-auto box-border px-3.5 rounded-lg border-[#d0d5dd] border-solid"
                                        >  
                                    <p className="grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-base font-normal text-[#667085] ml-2">Pedro Perez</p>
                                    </div>
                                    
                                    <button
                                        className="w-[102px] h-11 grow-0 shrink-0 basis-auto box-border border bg-[white] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] [font-family:Inter] text-base font-semibold text-[#344054] cursor-pointer block ml-3 rounded-lg border-[#d0d5dd] border-solid"
                                    >
                                        Cambiar
                                    </button>
                                    </div>
                                </div>
                            )}

                    {selectedDoctorIsOpen && (
                        <div className="w-[574px] h-[500px] border border-gray-300 rounded-[8px] bg-white z-50 absolute">
                           <div className="flex w-full h-[74px] justify-between items-center px-4 py-2 border-b border-gray-300">
                                <h2 className="text-gray-900 font-semibold">Selecciona un médico</h2>
                                <button 
                                    onClick={handleSelectDrButton} 
                                    className="w-[108px] h-[30px] rounded-[4px] border border-gray-400 px-4 py-2 flex items-center justify-center gap-8">
                                    <span>X</span>
                                </button>
                            </div>

                            <div className="p-4 h-[74px] ">
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-stretch">
                                <div className="border bg-white">
                                    <div className="bg-gray-50 flex justify-center items-center h-10 px-6">
                                        <p className="text-xs font-medium tracking-wide uppercase text-gray-500">A</p>
                                    </div>
                                    {practitioners?.resourcesFound?.resourcesData.map((practitioner) => (
                                        <div className="flex flex-col">
                                            <div className="border-t border-solid"></div>
                                            <div className="flex justify-start items-start h-[73px] border-b border-solid pt-4 px-6 hover:bg-[#F0F5FA] cursor-pointer bg-lime-500" onClick={handleSelectedDoctor}>
                                                <img width={10} height={10} className="object-cover block rounded-[20px]"  src={`${practitioner.fullUrl}`} alt="dr img"/>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900">{`${practitioner.resource.name[0].prefix[0]} ${practitioner.resource.name[0].given[0]} ${practitioner.resource.name[0].family}`}</p>
                                                    <p className="text-sm text-gray-500">[Especialidad]</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-6">
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium text-gray-700 block">Paciente</p>
                        {!selectedDoctorIsSelected ? (
                            <div className="flex gap-[16px] ">
                            <select
                                className=' text-gray-700  w-[300px] border border-solid rounded-[8px]'
                                id="doctor-select"
                                value={selectedPatient}
                                onChange={(e) => setSelectedPatient(e.target.value)}
                            >
                                {patients?.resourcesFound?.resourcesData.map((patient) => (
                                    <option key={patient.resource.id} value={patient.resource.id}>
                                        {`${patient.resource.name[0].given[0]} ${patient.resource.name[0].family}`}
                                    </option>
                                ))}
                            </select>
                            <input 
                                className="w-[320px] text-gray-700  h-[44px] rounded-lg border"
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Button className="w-[90px] h-[44px] px-[18px] py-[10px] rounded-lg border gap-2 bg-white text-gray-700 font-semibold text-sm" onClick={handleSelectPatientButton}>Buscar</Button>
                        </div> 
                        ) : (
                            <div className={`flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto box-border`}>
                            <p className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-sm font-medium text-[#344054]`}>Paciente</p>
                            <div className={`bg-[white] flex justify-start items-stretch flex-row h-[72px] grow-0 shrink-0 basis-auto box-border mt-1.5`}>
                            <div className={`border flex justify-start items-start flex-row grow shrink-0 basis-auto box-border px-6 py-4 rounded-xl border-[#eaecf0] border-solid`}>
                                <div className={`grow-0 shrink-0 basis-auto box-border`}>
                                    <img
                                    className={`w-10 h-10 max-w-[initial] box-border object-cover block rounded-[200px] border-[none] content-[url('https://s3-alpha-sig.figma.com/img/2f11/9087/0d753151f58657595136f67c584b5c8c?Expires=1694390400&Signature=XkX1bGjHnkFapnRPSqo7oXWS8zAvsR7voJEr6220p96d2BF0Mslt7WEMYDH1OdpAP79VxXgWT6DXHX~fh4ZckXpM4OaK~EvQuEeSQ3~O9Fxwv0819e~KEVg1V~zLOJndMdTpYxB-A7Ba9DMFqVTO~1bzKokLF8THwHjaTo-D2rs-QrNOm-Z~fgd6~rokL8HcAMsjrFasFb6g8vChbq8ABMkSityWxlWGL9QpX4KFgw9lgozSWtqemq5dMhZN4~cajBdYqQDN02q8451Jb5Ccb9dV3BHPboMfD2KtBhcrZZZjd3hcaiBy~Fdv0OyuprWrDu-PAeJQZfSmN6BjuAOqOQ\_\_&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]`}
                                    />
                                </div>
                                <div className={`grow-0 shrink-0 basis-auto box-border ml-3`}>
                                    <p className={`box-border [font-family:Inter] text-sm font-medium text-[#101828]`}>[Nombre paciente]</p>
                                    <p className={`box-border [font-family:Inter] text-sm font-normal text-[#475467]`}>[Tipo y N° doc]</p>
                                </div>
                                </div>
                                <div className={`flex justify-center items-stretch flex-col grow-0 shrink-0 basis-auto box-border px-2`}>
                                    {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
                                    <button
                                    className={`w-[102px] h-11 grow-0 shrink-0 basis-auto box-border border bg-[white] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] [font-family:Inter] text-base font-semibold text-[#344054] cursor-pointer block rounded-lg border-[#d0d5dd] border-solid`}
                                    >
                                    Cambiar
                                    </button>
                                </div>
                                </div>
                          </div>
                        )}
                        {selectedPatientIsOpen && (
                            <div className="w-[574px] h-[500px] border border-gray-300 rounded-[8px] bg-white z-50 absolute">
                            <div className="flex w-full h-[74px] justify-between items-center px-4 py-2 border-b border-gray-300">
                                <h2 className="text-gray-900 font-semibold">Selecciona un paciente</h2>
                                <button 
                                    onClick={handleSelectPatientButton} 
                                    className="w-[108px] h-[30px] rounded-[4px] border border-gray-400 px-4 py-2 flex items-center justify-center gap-8">
                                    <span className="sr-only">Close</span> 
                                    <span>×</span>
                                </button>
                            </div>

                            <div className="p-4 h-[74px] ">
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-stretch">
                                <div className="border bg-white">
                                    <div className="bg-gray-50 flex justify-center items-center h-10 px-6">
                                        <p className="text-xs font-medium tracking-wide uppercase text-gray-500">{searchTerm}</p>
                                    </div>
                                    {practitioners?.resourcesFound?.resourcesData.map((practitioner) => (
                                    <div className="flex flex-col ">
                                        <div className="border-t border-solid"></div>
                                        <div className="flex justify-start items-start h-[73px] border-b border-solid pt-4 px-6">
                                            <img className="w-10 h-10 object-cover block rounded-[20px] content-[url('https://s3-alpha-sig.figma.com/img/...')]" />
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">{`${practitioner.resource.name[0].prefix[0]} ${practitioner.resource.name[0].given[0]} ${practitioner.resource.name[0].family}`}</p>
                                                <p className="text-sm text-gray-500">[Especialidad]</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        )}         
                    </div>

                    <div className="mt-6">
                        <label className="text-sm font-medium text-gray-700 block">Tipo de atención</label>
                        <select id="singleSelection" 
                                data-te-select-init 
                                className="w-[574px] text-gray-700  h-[44px] px-4 py-3 rounded-lg border gap-2">
                            <option value="remote-consultation">Consulta remota</option>
                            <option value="onsite-consultation">Consulta presencial</option>
                        </select>

                    </div>

                    <div className="flex  space-x-4 mt-6 gap-[21px]">
                        <div>
                            <label className="text-sm font-medium text-gray-700 block">Fecha</label>
                            <input type="date"  
                                value={startDate} 
                                onChange={date => setStartDate(date)}   
                                className="w-[276.5px] h-[44px] px-3.5 py-3 text-gray-700  rounded-lg border gap-2" 
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 ">Hora</label>
                            <div className="rounded-lg border w-[100px]">
                                <input className="text-gray-700 w-[276.5px] h-[44px] px-3.5 py-3 rounded-lg border gap-2" type="time" id="appt" name="appt"  value={time} onChange={(e) => setTime(e.target.value)}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-row items-center justify-between h-18 pr-6 pl-6 gap-2 box-border  mt-auto">
                <p className="flex-shrink-0 text-red-600 font-semibold text-sm">Cancelar</p>
                <Button onClick={handleSubmit} type="submit" className="flex-shrink-0 w-25 h-10 text-white font-semibold text-sm bg-teal-600 border border-teal-700 rounded-lg shadow-sm cursor-pointer">Confirmar</Button>
            </div>

        </div>

    )
}