'use client'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

import Link from 'next/link';
import * as motion from 'motion/react-client'

export default function Carrossel_Component() {
    const receitas_array = [
        { id: 52821, nome: 'Laksa King Prawn Noodles', img: 'https://images.unsplash.com/photo-1633271332313-04df64c0105b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 52780, nome: 'Potato Gratin with Chicken', img: 'https://images.pexels.com/photos/10338427/pexels-photo-10338427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 52804, nome: 'Poutine', img: 'https://images.pexels.com/photos/6734552/pexels-photo-6734552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 52931, nome: 'Sugar Pie', img: 'https://images.unsplash.com/photo-1586766817711-50f2861ffcb5?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    ]

    const [indiceAtual, setIndiceAtual] = useState<number>(0);

    const handlePrev = () => {
        setIndiceAtual((prevIndex) => (prevIndex - 1 + receitas_array.length) % receitas_array.length);
    };

    const handleNext = () => {
        setIndiceAtual((prevIndex) => (prevIndex + 1) % receitas_array.length);
    };

    return (
        <motion.div className="border-0 overflow-hidden relative rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className="h-[500px]">
                {/* mudar pra image */}
                <Image
                    src={receitas_array[indiceAtual].img}
                    width={700}
                    height={700}
                    alt="recipe-img"
                    className="size-full object-cover object-center"
                    loading="lazy"
                />
            </div>
            <div className='absolute top-[200px] w-full flex justify-between px-0 text-lg'>
                <span className="p-4 rounded-r-md bg-white/60 hover:bg-white/90 cursor-pointer duration-200 ease-in-out"
                    onClick={handlePrev}
                >
                    <FaChevronLeft />
                </span>
                <span className="p-4 rounded-l-md bg-white/60 hover:bg-white/90 cursor-pointer duration-200 ease-in-out"
                    onClick={handleNext}
                >
                    <FaChevronRight />
                </span>
            </div>
            <div className="absolute bottom-[15%] left-[10%] text-white">
                <Link href={`/recipe/${receitas_array[indiceAtual].id}`}>
                    <h2 className="font-bold font-serif text-4xl md:text-5xl max-w-[550px] cursor-pointer"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                    >{receitas_array[indiceAtual].nome}</h2>
                </Link>
            </div>
        </motion.div>
    )
}