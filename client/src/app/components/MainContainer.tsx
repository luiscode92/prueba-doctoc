'use client'
import Header from './header'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '@/redux2/hooks';
import { toggleModal } from '@/redux2/features/modalSlice'
import AppointmentCard from './AppointmentCard';


export default function MainContainer() {
    const isOpen = useAppSelector(state => state.modalReducer.isOpen)
    const modalDispatch = useAppDispatch()
    const o = false
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
                            <div className=" flex items-center w-[250px] h-[44px] p-[10px] px-[18px] rounded-[8px] border border-solid space-x-[8px] flex">
                                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" className='h-[24px] w-[24px] rounded-full' alt="" />
                                <div className="text-gray-900 text-left text-md font-inter font-medium tracking-normal ">Pedro Perez</div>
                            </div>
                            <button className="w-[102px] h-[44px] p-[10px] px-[18px] rounded-[8px] border border-solid space-x-[8px] text-gray-700 ">Cambiar</button>
                        </div>
                    </div>
                    <div className='text-center py-6 space-x-[8px] space-y-[8px]'>
                        <p className="text-gray-900 text-center text-md font-inter font-semibold leading-6 tracking-normal">No se encontraron registros</p>
                        <p className="text-gray-600">El médico seleccionado no tiene ninguna cita el día de hoy.</p>
                    </div>
                </div>
            </div>
            {isOpen && <AppointmentCard/>}
            
        </div>
    )
}
