'use client'
import { NavItem } from './Navbar';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export default function Menu_Navbar({ navItems }: { navItems: NavItem[] }) {
    const [MenuOpen, setMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (MenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [MenuOpen]);

    return (
        <div className="md:hidden relative" ref={menuRef}>
            <button 
                className='p-2 rounded-full outline-2 text-xl cursor-pointer'
                onClick={() => setMenuOpen(!MenuOpen)}
                aria-expanded={MenuOpen}
                aria-label="Menu"
            >
                {MenuOpen ? <MdOutlineRestaurantMenu /> : <IoMenu />}
            </button>

            {MenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[100] border border-gray-200">
                    <ul className='flex flex-col justify-center px-2 py-1 space-y-1'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.link_page}
                                    className='block w-full py-2 px-4 hover:bg-amber-600 hover:text-white duration-300 ease-in-out rounded-md text-center'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}