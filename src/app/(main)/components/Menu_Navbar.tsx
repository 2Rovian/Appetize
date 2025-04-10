'use client';
import { NavItem } from './Navbar';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import * as motion from 'motion/react-client';

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

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 300,
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 300
            }
        }
    };

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300 }
        },
        closed: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div className="md:hidden relative" ref={menuRef}>
            <motion.button
                className='p-2 rounded-full outline-2 text-xl cursor-pointer'
                onClick={() => setMenuOpen(!MenuOpen)}
                aria-expanded={MenuOpen}
                aria-label="Menu"
                whileTap={{ scale: 0.9 }}
            >
                {MenuOpen ? <MdOutlineRestaurantMenu /> : <IoMenu />}
            </motion.button>

            <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[100] border border-gray-200 origin-top"
                initial="closed"
                animate={MenuOpen ? "open" : "closed"}
                variants={menuVariants}
                style={{ display: MenuOpen ? "block" : "none" }} // Evita interação quando fechado
            >
                <motion.ul className='flex flex-col justify-center px-2 py-1 space-y-1'>
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={index}
                            variants={itemVariants}
                        >
                            <Link
                                href={item.link_page}
                                className='block w-full py-2 px-4 hover:bg-amber-600 hover:text-white duration-300 ease-in-out rounded-md text-center'
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </div>
    );
}