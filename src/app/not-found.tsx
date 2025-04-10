import Link from 'next/link'
import { FaGhost } from "react-icons/fa";
import NoiseBackground from './NoiseBackground';

export default function NotFound() {
  return (
    <div className="w-full flex h-screen justify-center gap-y-2 ">
      <NoiseBackground />

      <div className='w-[80%] h-fit py-12 max-w-[500px] rounded-lg shadow-md flex flex-col items-center text-amber-600 bg-white mt-28'>
        <span className='text-9xl'>
          <FaGhost />
        </span>
        <p className="text-center text-xl mb-6">Sorry, page not found.</p>
        <Link href="/"
          className='px-6 py-2 bg-amber-600 text-white font-bold rounded-[6px] hover:bg-amber-500 duration-300 ease-in-out'
        >Return Home</Link>
      </div>

    </div>
  )
}