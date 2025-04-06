'use client'
import { handleSaveRecipe } from "@/app/actions/handleSaveRecipe";
import { RecipeProps } from "@/app/types/recipe.type";

export default function SaveBtn({ recipe }: RecipeProps) {

    return (
        <button className='px-3 py-1 font-semibold hover:text-white bg-amber-500 hover:bg-amber-600 text-white rounded-md cursor-pointer duration-300 ease-in-out '
            onClick={(e) => handleSaveRecipe(recipe, e)}
        >
            Save Recipe
        </button>
    )
}