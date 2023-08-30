import { useCallback, useState, forwardRef } from 'react'
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Button } from '@mui/base'

function PatientCard() {
  return (
    <div className={`bg-[white] flex justify-between items-center flex-row gap-2 min-w-[672px] h-[98px] box-border px-4`}>
        <div className={`flex justify-start items-end flex-row grow-0 shrink-0 basis-auto box-border`}>
            <div className={`flex justify-start items-start flex-row grow-0 shrink-0 basis-auto box-border`}>
                <div className={`grow-0 shrink-0 basis-auto box-border pb-6`}>
                    <div className={`bg-[#f2f4f7] flex justify-center items-stretch flex-col h-10 box-border px-[9.5px] rounded-[200px]`}>
                        <p className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-base font-medium text-[#475467]`}>OR</p>
                    </div>
                </div>
                <div className={`flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto box-border ml-4`}>
                    <div className={`grow-0 shrink-0 basis-auto box-border`}>
                        <p className={`box-border [font-family:Inter] text-sm font-medium text-[#344054]`}>[Nombre paciente]</p>
                        <p className={`box-border [font-family:Inter] text-xs font-normal text-[#344054]`}>[Sexo] - [Edad]</p>
                    </div>
                    <div className={`flex justify-start items-center flex-row grow-0 shrink-0 basis-auto box-border mt-2`}>
                    <div className={`flex justify-start items-center flex-row grow-0 shrink-0 basis-auto box-border`}>
                        <ScheduleIcon className="grow-0 shrink-0 basis-auto box-border w-4 h-4 text-[#344054] flex" />
                        <p className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-xs font-normal text-[#344054] ml-[5px]`}>[hora inicio] - [hora fin]</p>
                    </div>
                    <div className={`grow-0 shrink-0 basis-auto box-border h-3.5 ml-2 border-l-[#d0d5dd] border-l border-solid`} />
                    </div>
                </div>
            </div>
            <div className={`bg-[#f2f4f7] flex justify-center items-center flex-row h-[22px] grow-0 shrink-0 basis-auto box-border ml-2 pl-1.5 pr-2 rounded-2xl`}>
                <CalendarTodayIcon className="grow-0 shrink-0 basis-auto box-border w-3 h-3 text-[#667085] flex" />
                <p className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-xs font-medium text-[#344054] ml-1`}>[tipo cita]</p>
            </div>
        </div>
        <div className={`flex justify-start items-start flex-row grow-0 shrink-0 basis-auto box-border`}>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
            <Button className="w-[68px] h-9 grow-0 shrink-0 basis-auto box-border border bg-[white] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] [font-family:Inter] text-sm font-semibold text-[#344054] cursor-pointer block rounded-lg border-[#d0d5dd] border-solid">
            Editar
            </Button>

            {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
            <Button className="w-[83px] h-9 grow-0 shrink-0 basis-auto box-border border bg-[#fef3f2] [font-family:Inter] text-sm font-semibold text-[#b42318] cursor-pointer block ml-3 rounded-lg border-[#fef3f2] border-solid">
            Eliminar
            </Button>
        </div>
    </div>
  );
}
export default PatientCard