import Image from 'next/image'

import Main from './components/MainContainer'

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
