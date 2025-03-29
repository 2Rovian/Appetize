import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

export default function InputNavbar(){
    return(
        <div className="flex gap-x-2 items-center">
            <div>
                <Link href='/search'>
                    <span className="text-3xl cursor-pointer">
                        <IoSearch />
                    </span>
                </Link>
            </div>
            <div className="">
                <Link href='/user'>
                    <span className="text-4xl cursor-pointer">
                        <FaUserCircle />
                    </span>
                </Link>
            </div>
        </div>
    )
}