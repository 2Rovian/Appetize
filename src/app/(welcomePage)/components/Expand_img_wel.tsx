'use client'
import { useState } from "react"
import { LuExpand, LuX } from "react-icons/lu";
import Image from 'next/image'

export default function Expand_img_wel({ receitaImg }: any) {
    const [MostrarImagem, setMostrarImagem] = useState<boolean>(false);
    return (
        <>
            <span className='absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out top-2 left-2 text-white bg-black/70 hover:text-xl p-[6px] hover:p-2 rounded-[4px] cursor-pointer '
            onClick={() => setMostrarImagem(true)}
            >
                <LuExpand />
            </span>

            {MostrarImagem && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                onClick={() => setMostrarImagem(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-2xl bg-black/80 p-2 rounded-full hover:bg-black duration-300 ease-in-out cursor-pointer"
                        onClick={() => setMostrarImagem(false)}
                    >
                        <LuX />
                    </button>

                    {/* Imagem expandida */}
                    <div className="max-w-full max-h-full rounded-md overflow-hidden z-50"
                    onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            width={600}
                            height={600}
                            src={receitaImg}
                            alt="Imagem expandida"
                            className="w-full max-h-[90vh] object-contain"
                        />
                    </div>
                    
                </div>

            )}
        </>
    )
}