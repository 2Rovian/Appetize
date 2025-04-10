'use client'
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";

import Link from 'next/link';
import SpinRandom from "./SpinRandom";
import Expand_img_wel from "./Expand_img_wel";

import * as motion from 'motion/react-client'

export default function WelcomeRandomRecipe() {
    type Recipe = {
        idMeal: string;
        strMeal: string;
        strMealThumb: string;
        strCategory: string;
        strArea: string;
    };
    const [isLoading, setisLoading] = useState<boolean>(false);

    const [recipe, setRecipe] = useState<Recipe>({
        idMeal: "52777",
        strMeal: "Mediterranean Pasta Salad",
        strMealThumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        strCategory: "Seafood",
        strArea: "Italian"
    });

    const handleRandomRecipe = async () => {
        setisLoading(true);
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await response.json();
            setRecipe(data.meals[0]);
        } catch (error) {
            console.error("Error fetching random recipe:", error)
        } finally {
            setisLoading(false);
        }

    }

    return (
        <motion.div className="border-0 rounded-md overflow-hidden relative shadow-md shadow-amber-600/50 my-0 md:mt-16 bg-white text-black h-fit"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className="relative max-h-[250px] group">
                <Image
                    src={recipe.strMealThumb}
                    width={300}
                    height={300}
                    alt={`Image of ${recipe.strMeal}`}
                    className="w-full object-cover max-h-[250px] md:h-full "
                    loading="lazy"
                />
                <Expand_img_wel receitaImg={recipe.strMealThumb} />
                <button className={`absolute p-2 text-white rounded-md top-2 right-2 cursor-pointer text-lg hover:bg-amber-500 ease-in-out duration-200 shadow ${isLoading ? "bg-amber-500" : "bg-amber-600"}`}
                    onClick={handleRandomRecipe}
                    disabled={isLoading}
                >
                    {isLoading ?
                        (<SpinRandom />) :
                        (<GiPerspectiveDiceSixFacesRandom />)}

                </button>
            </div>
            <div className="p-4 pt-2">
                <Link href={`recipe/${recipe.idMeal}`}>
                    <h3 className="text-2xl font-semibold mb-1">{recipe.strMeal}</h3>
                </Link>
                <p className="text-gray-600 text-sm">
                    {recipe.strCategory} • <Link href={`http://localhost:3000/countries/${recipe.strArea}`}>{recipe.strArea}</Link>
                </p>
            </div>
        </motion.div>
    )
}