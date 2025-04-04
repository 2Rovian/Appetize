'use client'
// icones
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaGhost } from "react-icons/fa";
// ------
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function Search_Component({ CategoriaSelecionada }: any) {
    const [mealIngredients, setMealIngredients] = useState<string[]>([]);
    const [recipeNameSuggestions, setRecipeNameSuggestions] = useState<any[]>([]);

    const [inputValue, setInputValue] = useState<string>('');
    const [ShowDropdown, setShowDropdown] = useState<boolean>(false);
    const [recipes, setRecipes] = useState<any[]>([]);

    const [ShowDropdownRecipes, setShowDropdownRecipes] = useState<boolean>(false);

    const mealIngredientsFiltrados = mealIngredients.filter((meal) => meal.toLowerCase().includes(inputValue.toLowerCase()));

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
                const data = await response.json();
                const ingredients = data.meals.map((meal: any) => meal.strIngredient);
                setMealIngredients(ingredients);
            } catch (error) {
                console.error("Erro ao buscar ingredientes:", error);
            }
        };

        fetchIngredients();
    }, []);

    useEffect(() => {
        const fetchRecipeNames = async () => {
            if (CategoriaSelecionada === "By Recipe Name" && inputValue.trim()) {
                try {
                    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
                    const data = await res.json();
                    setRecipeNameSuggestions(data.meals || []);
                } catch (err) {
                    console.error("Erro ao buscar sugestões:", err);
                }
            } else {
                setRecipeNameSuggestions([]);
            }
        };

        fetchRecipeNames();
    }, [inputValue, CategoriaSelecionada]);


    const handleSetInputValue = (meal: string) => {
        setInputValue(meal);
        setShowDropdown(false);
    }

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;

        try {
            let url = "";
            if (CategoriaSelecionada === "By Recipe Name") {
                url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
            } else {
                url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setRecipes(data.meals || []);
        } catch (error) {
            console.error("Erro ao buscar receitas:", error);
        }
        setShowDropdownRecipes(true);
    };

    return (
        <div>
            <div className="flex gap-x-2 mx-auto">
                <div className='grow outline-1 outline-gray-300 shadow rounded-md relative flex items-center bg-white'>
                    <input type="text" placeholder={`Search ${CategoriaSelecionada.toLowerCase()}...`}
                        className='size-full outline-none rounded-md pl-3'
                        value={inputValue}
                        onChange={(e) => { setInputValue(e.target.value); setShowDropdown(true) }}
                    />
                    {inputValue && ShowDropdown && (
                        <span className="px-2 py-1 text-xl font-bold cursor-pointer duration-200 ease-in-out text-gray-600 hover:text-black"
                            onClick={() => setInputValue('')}
                        ><IoCloseCircleOutline />
                        </span>
                    )}
                    {inputValue && CategoriaSelecionada === 'By Ingredient' && ShowDropdown && mealIngredientsFiltrados.length > 0 && (
                        <ul className="w-full flex flex-col absolute top-[45px] bg-white z-50 border-1 rounded-md border-gray-300 shadow-lg overflow-y-auto max-h-[300px]">
                            {mealIngredientsFiltrados.map((meal, index) => (
                                <li key={index} className="px-3 py-1 cursor-pointer hover:bg-amber-600 hover:text-white"
                                    onClick={() => handleSetInputValue(meal)}
                                >
                                    <span>{meal}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {inputValue && CategoriaSelecionada === 'By Ingredient' && ShowDropdown && mealIngredientsFiltrados.length === 0 && (
                        <div className="w-full flex flex-col absolute top-[45px] bg-white z-50 border-1 rounded-md border-gray-300 shadow-lg h-[150px] justify-center items-center gap-y-2 text-amber-700 px-4">
                            <span className='text-6xl'>
                                <FaGhost />
                            </span>
                            <span className="text-center">No ingredients match your search.</span>
                        </div>
                    )}
                    {inputValue && CategoriaSelecionada === 'By Recipe Name' && ShowDropdown && recipeNameSuggestions.length > 0 && (
                        <ul className="w-full flex flex-col absolute top-[45px] bg-white z-50 border-1 rounded-md border-gray-300 shadow-lg overflow-y-auto max-h-[300px]">
                            {recipeNameSuggestions.map((meal, index) => (
                                <li key={index} className="px-3 py-1 cursor-pointer hover:bg-amber-600 hover:text-white"
                                    onClick={() => {
                                        setInputValue(meal.strMeal);
                                        setShowDropdown(false);
                                    }}
                                >
                                    {meal.strMeal}
                                </li>
                            ))}
                        </ul>
                    )}

                    {inputValue && CategoriaSelecionada === 'By Recipe Name' && ShowDropdown && recipeNameSuggestions.length === 0 && (
                        <div className="w-full flex flex-col absolute top-[45px] bg-white z-50 border-1 rounded-md border-gray-300 shadow-lg h-[150px] justify-center items-center gap-y-2 text-amber-700 px-4">
                            <span className='text-6xl'>
                                <FaGhost />
                            </span>
                            <span className="text-center">No recipe names match your search.</span>
                        </div>
                    )}

                </div>
                <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 font-semibold text-white rounded-md cursor-pointer duration-300 ease-in-out"
                    onClick={() => handleSearch(inputValue)}
                >Search Recipe</button>
            </div>

            {ShowDropdownRecipes && (
                <ul className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {recipes.map((meal: any) => (
                        <li key={meal.idMeal}>
                            <article className="rounded-md shadow flex flex-col overflow-hidden relative">
                                <div className="h-full relative overflow-hidden">
                                    <Link href={`http://localhost:3000/recipe/${meal.idMeal}`} className='cursor-pointer'>
                                        <Image
                                            width={600}
                                            height={600}
                                            src={meal.strMealThumb} alt=""
                                            className="object-cover object-center size-full max-h-[300px] hover:scale-105 duration-500 transition-transform"
                                        />
                                    </Link>

                                </div>
                                <div className='absolute top-0 w-full bg-amber-950/50 text-white p-2 flex flex-col justify-between font-semibold'>
                                    <Link href={`http://localhost:3000/recipe/${meal.idMeal}`}>
                                        <h2 className=' text-center cursor-pointer'>{meal.strMeal}</h2>
                                    </Link>

                                </div>

                                <div className='px-2 absolute bottom-0 py-2 w-full'>

                                    <Link href={`http://localhost:3000/recipe/${meal.idMeal}`} className='rounded-md'>
                                        <button className='px-2 py-1 rounded-md cursor-pointer font-bold shadow text-white bg-amber-600  duration-500 ease-in-out hover:bg-amber-400'>

                                            See More
                                        </button>

                                    </Link>

                                </div>

                            </article>
                        </li>
                    ))}

                </ul>
            )}

            {ShowDropdownRecipes && recipes.length === 0 && (
                <div className="w-full flex flex-col bg-white border-1 rounded-md border-gray-300 shadow-lg h-[150px] justify-center items-center gap-y-2 text-amber-700 px-4">
                    <span className='text-6xl'>
                        <FaGhost />
                    </span>
                    <span className="text-center">No recipes found.</span>
                </div>
            )}
        </div>

    )
}