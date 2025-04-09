'use client'
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { useState } from "react";

export default function RecipeIngredients() { 
    const [activeColor, setActiveColor] = useState<string>('from-red-400 to-amber-300');

    const handleMouseEnter = (techName: string) => {
        switch(techName){
            case 'Next.js':
                setActiveColor('from-gray-900 to-gray-700');
                break;
            case 'Tailwind':
                setActiveColor('from-cyan-400 to-blue-500');
                break;
            case 'Vercel':
                setActiveColor('from-black to-gray-800');
                break;
            case 'TypeScript':
                setActiveColor('from-blue-600 to-blue-400');
                break;
            default:
                setActiveColor('from-red-400 to-amber-300');
        }

    }

    return (
        <div className={`relative h-80 rounded-xl shadow-lg bg-gradient-to-br ${activeColor} p-6 flex flex-col justify-center `}>
            <h3 className="text-center mb-6">
                <span className="text-white font-bold text-xl">
                    Recipe Ingredients
                </span>
            </h3>
            <div className="grid grid-cols-2 gap-4 px-8">
                {[
                    {
                        name: 'Next.js',
                        icon: <RiNextjsFill />,
                        color: 'text-[#000000]'
                    },
                    {
                        name: 'Tailwind',
                        icon: <RiTailwindCssFill />,
                        color: 'text-[#06B6D4]'
                    },
                    {
                        name: 'Vercel',
                        icon: <IoLogoVercel />,
                        color: 'text-[#000000]'
                    },
                    {
                        name: 'TypeScript',
                        icon: <SiTypescript />,
                        color: 'text-[#3178C6]'
                    }
                ].map((tech) => (
                    <div
                        key={tech.name}
                        className={`bg-white p-3 rounded-lg shadow-sm ${tech.color} border border-amber-100 hover:border-amber-300 transition-all flex items-center cursor-pointer gap-3 hover:scale-[1.02]`}
                        onMouseEnter={() => handleMouseEnter(tech.name)}
                        
                    >
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-medium">{tech.name}</span>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <p className="text-xs text-gray-400 inline-block px-3 py-1 bg-amber-50 rounded-full">
                    ...and probably too much coffee
                </p>
            </div>
        </div>
    )
}