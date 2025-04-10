'use client';
import { useState } from "react";
import { MdConstruction } from "react-icons/md";
import * as motion from 'motion/react-client';

export default function BuildingComponent() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className="absolute top-2 right-2">
            <span 
                className="p-3 bg-red-500 rounded-full text-white outline-2 flex items-center cursor-pointer text-lg"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <MdConstruction />
            </span>

            
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-red-500 p-2 rounded-md shadow-lg border border-gray-200 text-sm text-white z-[100]"
                >
                    This feature is under construction.
                </motion.div>
            )}

        </div>
    );
}