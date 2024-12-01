import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('../components/Scene'), { ssr: false })

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-black to-purple-900">
      <Scene />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to Our 3D World
        </h1>
        <p className="text-2xl mb-8 text-gray-300">Explore the future of web design</p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>
    </main>
  )
}

