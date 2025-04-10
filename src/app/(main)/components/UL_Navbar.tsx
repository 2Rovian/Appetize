'use client'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { NavItem } from './Navbar';

export default function UL_Navbar({ navItems }: 
    { navItems: NavItem[] }) 
{
    const path_name = usePathname();
    
    return (
        <ul className="hidden md:flex gap-6 items-center text-xl font-semibold mx-auto">
            {navItems.map((item, index) => (
                <li key={index} className="hover:text-amber-600 transition-colors duration-300">
                    <Link href={item.link_page}
                        className={path_name === item.link_page ? "text-amber-600" : ""}
                    >
                        {item.title}</Link>
                </li>
            ))}

        </ul>
    )
}