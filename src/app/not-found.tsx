import Link from 'next/link'
import { FaGhost } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col h-[500px] justify-center items-center gap-y-2 text-amber-700">
      <span className='text-9xl'>
        <FaGhost />
      </span>
      <p className="text-center text-xl mb-4">Sorry, page not found.</p>
      <Link href="/"
        className='px-6 py-2 bg-amber-700 text-white font-bold rounded-[6px] hover:bg-amber-500 duration-300 ease-in-out'
      >Return Home</Link>
    </div>
  )
}