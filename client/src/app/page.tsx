import Image from 'next/image'
import Header from './components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-[100px] h-screen items-center justify-between font-mono text-sm lg:flex bg-gray-900 text-white">
        hi
      </div>
      <div className="flex-grow flex-col h-screen bg-gray-50 divide-y divide-gray-200">
        <Header/>
        <div>hell</div>
      </div>
    </main>
  )
}
