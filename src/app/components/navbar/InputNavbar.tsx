'use client'
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export default function InputNavbar(){
    return(
        <div className="flex gap-x-2 items-center">
            <div>
                <span className="text-3xl">
                    <IoSearch />
                </span>
            </div>
            <div className="text-4xl cursor-pointer">
                <FaUserCircle />
            </div>
        </div>
    )
}