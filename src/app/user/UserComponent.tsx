import { signOut } from "@/auth";
import Image from 'next/image';
import { FaUserCircle } from "react-icons/fa";

export default function UserComponent({ userName, profilePic }: any) {
    return (
        <>
            <form action={async () => {
                "use server";
                await signOut();
            }} className=" rounded-lg border bg-white border-gray-400 shadow text-black flex flex-col p-5 w-full max-w-[500px]">
                {profilePic ? (
                    <Image
                        src={profilePic}
                        alt="User profile"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto"
                        priority={false}
                    />
                ) : (
                    <span className="text-4xl cursor-pointer">
                        <FaUserCircle />
                    </span>
                )}
                <span className="text-4xl font-semibold mt-2 mb-5 self-center">{userName}</span>
                <button className="px-6 py-2 bg-amber-600 text-white rounded-md cursor-pointer hover:bg-amber-400 duration-300 ease-in-out self-end">Logout</button>

            </form>
        </>
    )
}