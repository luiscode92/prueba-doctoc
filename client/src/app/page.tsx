import Image from 'next/image'
import Header from './components/header'

import Main from './components/MainContainer'

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="flex min-h-screen ">
      <div className="w-[100px] h-screen items-center justify-between font-mono text-sm lg:flex bg-gray-900 text-white">
        hi
      </div>
      <div className="flex-grow flex-col h-screen bg-gray-50 ">
        
        <Main/>
=======
    <main className="flex min-h-screen">
      <div className="w-[100px] h-screen items-center justify-between font-mono text-sm lg:flex bg-gray-900 text-white">
        hi
      </div>
      <div className="flex-grow flex-col h-screen bg-gray-50 divide-y divide-gray-200">
        <Header/>
        <div>hell</div>
>>>>>>> 7cd433964e8f32df8d371b29035755e2373f49dd
      </div>
    </main>
  )
}
