import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth'

export default async function InputNavbar() {
    const session = await auth();
    const profilePic = session?.user?.image;

    return (
        <div className="flex gap-x-2 items-center">
            <div>
                <Link href='/search'>
                    <span className="text-3xl cursor-pointer">
                        <IoSearch />
                    </span>
                </Link>
            </div>
            {session ?
                (<div className="">
                    <Link href='/user'>
                        {profilePic ? (
                            <Image
                                src={profilePic}
                                alt="User profile"
                                width={50}
                                height={50}
                                className="size-[35px] rounded-full"
                                priority={false}
                            />
                        ) : (
                            <span className="text-4xl cursor-pointer">
                                <FaUserCircle />
                            </span>
                        )}
                    </Link>
                </div>) :
                (
                    <Link href='/login'>
                        <button className="cursor-pointer px-4 py-2 bg-amber-500 hover:bg-amber-400 rounded-md text-white duration-300 ease-in-out">Login</button>
                    </Link>
                )}
        </div>
    )
}