import Image from 'next/image'
import Header from './components/header'

import Main from './components/MainContainer'
import Sidebar from './components/Sidebar'
import { useAppDispatch, useAppSelector } from '@/redux2/hooks';


export default function Home() {



  return (
    <main className="flex min-h-screen ">
      <div className="w-[100px] h-screen items-center justify-between font-mono text-sm lg:flex bg-gray-900 text-white">
        hi
      </div>
      <div className="flex-grow flex-col h-screen bg-gray-50 ">
        <Main/>
      </div>
    </main>
  )
}
