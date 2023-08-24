'use client'
import { useAppDispatch, useAppSelector } from '@/redux2/hooks';
import { toggleModal } from '@/redux2/features/modalSlice'

export default function Header() {
  const isOpen = useAppSelector(state => state.modalReducer.isOpen)
  const modalDispatch = useAppDispatch()
  console.log(isOpen)
  return (
    <div className="flex justify-between items-center p-8 ">
        <div className="flex flex-col">
            {isOpen ? "true" : "false"}
            <h1 className="text-xl font-bold text-left text-[30px] font-inter font-semibold leading-[38px] tracking-normal">Agenda</h1>
            <h2 className="text-sm text-gray-600 text-left text-md font-inter font-normal leading-6 tracking-normal">Manage your team members and their account permissions here.</h2>
        </div>

        <div className="flex space-x-4">
            <button className="p-[10px] px-[16px] rounded-[8px] bg-primary-50 text-primary-700 rounded font-semibold text-sm">Día</button>
            <button className="p-[10px] px-[16px] rounded-[8px] bg-white text-gray-700 rounded border border-gray-300 font-semibold text-sm">Semana</button>
            <button className="p-[10px] px-[16px] rounded-[8px] bg-primary-700 text-white border border-primary-600 rounded font-semibold text-sm"
             onClick={() => {modalDispatch(toggleModal());}}>Nueva cita</button>
        </div>
    </div>

  )
}
