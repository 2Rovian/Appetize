'use client'
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

import { FaGhost } from "react-icons/fa";
import Link from 'next/link';

export default function Discover_Component() {
    const [mealIngredients, setMealIngredients] = useState<string[]>([]);
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

    const handleSetInputValue = (meal: string) => {
        setInputValue(meal);
        setShowDropdown(false);
    }

    const handleSearchByIngredients = async (ingredient: string) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            setRecipes(data.meals || []);
        } catch (error) {
            console.error("Erro ao buscar receitas:", error);
        }
        setShowDropdownRecipes(true);
    };


    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold font-serif">Explore Delicious Recipes</h2>
            <p>Crave it. Cook it. Enjoy it. </p>
            <div className="flex flex-col w-full mt-4 bg-white rounded-md shadow p-5 max-w-3xl">
                <div className="flex gap-x-2">
                    <div className='grow outline-1 outline-gray-300 shadow rounded-md relative flex items-center'>
                        <input type="text" placeholder="Search ingredient..."
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

                        {inputValue && ShowDropdown && mealIngredientsFiltrados.length > 0 && (
                            <ul className="w-full flex flex-col absolute top-[45px] bg-white z-50 border-1 rounded-md border-gray-300 shadow-lg overflow-y-auto max-h-[150px]">
                                {mealIngredientsFiltrados.map((meal, index) => (
                                    <li key={index} className="px-3 py-1 cursor-pointer hover:bg-amber-600 hover:text-white"
                                        onClick={() => handleSetInputValue(meal)}
                                    >
                                        <span>{meal}</span>
                                    </li>
                                ))}

                            </ul>
                        )}

                        {inputValue && ShowDropdown && mealIngredientsFiltrados.length === 0 && (
                            <div className="w-full flex flex-col absolute top-[45px] bg-white z-50 border-1 rounded-md border-gray-300 shadow-lg h-[150px] justify-center items-center gap-y-2 text-amber-700 px-4">
                                <span className='text-6xl'>
                                    <FaGhost />
                                </span>
                                <span className="text-center">No ingredients match your search.</span>
                            </div>
                        )}
                    </div>
                    <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 font-semibold text-white rounded-md cursor-pointer duration-300 ease-in-out"
                        onClick={() => handleSearchByIngredients(inputValue)}
                    >Search Recipe</button>
                </div>
                <div className="flex mt-2 gap-x-2 items-center">
                    <span>Popular Tags: </span>
                    <ul className="flex gap-x-2">
                        <li className={`px-3 py-1 cursor-pointer  rounded-full outline-1 outline-gray-200 ${inputValue === 'Salmon' ? "bg-amber-600 text-white" : ""} shadow hover:bg-amber-400 duration-500 hover:text-white ease-in-out hover:outline-none`}
                            onClick={() => setInputValue('Salmon')}
                        >Salmon</li>
                        <li className={`px-3 py-1 cursor-pointer  rounded-full outline-1 outline-gray-200 ${inputValue === 'Chicken' ? "bg-amber-600 text-white" : ""} shadow hover:bg-amber-400 duration-500 hover:text-white ease-in-out hover:outline-none`}
                            onClick={() => setInputValue('Chicken')}
                        >Chicken</li>
                        <li className={`px-3 py-1 cursor-pointer  rounded-full outline-1 outline-gray-200 ${inputValue === 'Pork' ? "bg-amber-600 text-white" : ""} shadow hover:bg-amber-400 duration-500 hover:text-white ease-in-out hover:outline-none`}
                            onClick={() => setInputValue('Pork')}
                        >Pork</li>
                    </ul>
                </div>

                {ShowDropdownRecipes && (
                    <ul className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {recipes.slice(0, 3).map((meal: any) => (
                            <li key={meal.idMeal}>
                                <article className="rounded-md shadow flex flex-col overflow-hidden relative">
                                    <div className="h-full relative overflow-hidden">
                                        <Link href={`http://localhost:3000/recipe/${meal.idMeal}`} className='cursor-pointer'>
                                            <img src={meal.strMealThumb} alt=""
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
                        <li>
                            <Link href={`/ingredients/${inputValue}`}>
                                <div className='rounded-md shadow flex flex-col overflow-hidden relative bg-amber-800 text-amber-400 text-center h-full items-center justify-center gap-y-2'>
                                    <div className='size-[100px] border-4 border-amber-400 rounded-full flex items-center justify-center'>
                                        <span className='text-4xl'><FaPlus /></span>
                                    </div>
                                    <span className="font-bold text-xl">Other Recipes</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </section>
    )
}