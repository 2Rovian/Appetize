import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { GiBookmarklet } from "react-icons/gi";
import UL_Navbar from './UL_Navbar'
import Menu_Navbar from "./Menu_Navbar";
export interface NavItem{
    title: string,
    link_page: string
}

export default function Navbar() {
    
    const navItems: NavItem[] = [
        {title: "Home", link_page: "/"},
        {title: "Categories", link_page: "/categories"},
        {title: "Countries", link_page: "/countries"},
        {title: "About", link_page: "/about"}
    ]
    
    return (
        <header className="h-[80px] ">
            <nav className="size-full flex justify-between items-center ">
                <div>
                    <Link href='/'>
                        <span className="text-3xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">Appetize</span>
                    </Link>
                </div>

                <Menu_Navbar navItems={navItems} />

                <UL_Navbar navItems={navItems} />

                <div className="flex gap-x-2 items-center">
                    <div>
                        <Link href='/search'>
                            <span className="text-3xl cursor-pointer">
                                <IoSearch />
                            </span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/favorites'>
                            <span className="text-4xl cursor-pointer">
                                <GiBookmarklet />
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}