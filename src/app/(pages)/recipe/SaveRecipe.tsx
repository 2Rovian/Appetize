'use client'
import { handleSaveRecipe } from "../../actions/handleSaveRecipe"
import { RecipeProps } from "../../types/recipe.type"

export default function SaveRecipe({ recipe }: RecipeProps) {

    return (
        <button className='px-4 py-2 text-lg rounded-md cursor-pointer font-bold shadow-lg text-white bg-amber-600  duration-500 ease-in-out hover:bg-amber-400 bottom-4 left-4 absolute'
        onClick={(e) => handleSaveRecipe(recipe, e)}
        >
            Save Recipe
        </button>
    )
}