'use client'
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
import Search_Component from "./Search_Component";

export default function Filter_Component() {
    const filter_array = ['By Recipe Name', 'By Ingredient'];
    const [ShowFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);
    const [CategoriaSelecionada, setCategoriaSelecionada] = useState<string>('By Recipe Name');

    return (
        <div>
            <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-serif font-semibold">Feed your curiosity (and your belly)</span>
                <span className="p-2 text-white bg-amber-500 rounded-md hover:bg-amber-400 cursor-pointer duration-300 ease-in-out"
                onClick={() => setShowFilterDropdown(!ShowFilterDropdown)}
                >
                    <FaFilter />
                </span>
            </div>
            {ShowFilterDropdown && (
                <ul className="mx-auto grid grid-cols-2 md:flex gap-1 md:gap-x-2 mb-3">
                {filter_array.map((categoriaItem: string, index: number) => (
                    <li key={index}>
                        <button className={`md:px-3 py-1 size-full border-2 text-amber-950 border-amber-700 rounded-[3px] cursor-pointer hover:bg-amber-600 active:bg-amber-500 hover:text-white duration-300 ease-in-out ${CategoriaSelecionada === categoriaItem ? "bg-amber-700 text-white" : ""}
                        `}
                        onClick={() => setCategoriaSelecionada(categoriaItem)}
                        >{categoriaItem}</button>
                    </li>
                ))}
                </ul>
            )}
            <Search_Component CategoriaSelecionada={CategoriaSelecionada}/>
        </div>
    )
}