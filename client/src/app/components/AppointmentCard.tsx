import { useCallback, useState, forwardRef } from "react";
import { Select, Option, Button, Input, MenuItem } from "@mui/base";
import LaunchIcon from '@mui/icons-material/Launch';

export default function AppointmentCard() {
    const [age, setAge] = useState('');
    const handleChange = (event: any) => {
       console.log(event?.target?.value)
    };
    return (
        <div className="bg-white w-[622px] h-screen flex flex-col">
            <div className="h-[77px] flex items-center border-t-8 border-primary-700">
                <h1 className="font-inter text-left text-lg font-semibold leading-7 tracking-normal ml-[24px]">Nueva cita</h1>
            </div>
            <div className="border-t border-gray-200 p-[24px] flex-grow overflow-y-auto">
                <div className="flex flex-col space-y-2">
                    <p className="text-sm font-medium text-gray-700 block">Médico</p>
                    <button className="w-[156px] h-[44px] rounded-[8px] bg-white text-gray-700 border border-gray-300 font-semibold text-sm flex items-center justify-center gap-[8px]">
                        <div className="flex ">
                            <LaunchIcon className="w-[20px] h-[20px]"/>
                        </div>
                        <p>Seleccionar</p>
                    </button>
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