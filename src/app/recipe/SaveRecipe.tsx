'use client'
import { RecipeProps } from "./recipe.type"
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function SaveRecipe({ recipe }: RecipeProps) {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const savedRecipes = localStorage.getItem('Recipes')
        if (savedRecipes) {
            const recipes = JSON.parse(savedRecipes)
            setIsSaved(recipes.some((r: any) => r.idMeal === recipe.idMeal))
        }
    }, [recipe.idMeal])

    const handleSaveRecipe = () => {
        const savedRecipes = localStorage.getItem('Recipes')
        let recipes = savedRecipes ? JSON.parse(savedRecipes) : []

        if (isSaved) {
            recipes = recipes.filter((r: any) => r.idMeal !== recipe.idMeal)
            toast.success('Receita removida dos favoritos!')
        } else {
            const recipeToSave = {
                idMeal: recipe.idMeal,
                strMeal: recipe.strMeal,
                strMealThumb: recipe.strMealThumb,
                strCategory: recipe.strCategory,
                strArea: recipe.strArea
            }
            recipes.push(recipeToSave)
            toast.success('Receita salva com sucesso!')
        }

        localStorage.setItem('Recipes', JSON.stringify(recipes))
        setIsSaved(!isSaved)
    }

    return (
        <button className='px-4 py-2 text-lg rounded-md cursor-pointer font-bold shadow-lg text-white bg-amber-600  duration-500 ease-in-out hover:bg-amber-400 bottom-4 left-4 absolute'
        onClick={handleSaveRecipe}
        >
            Save Recipe
        </button>
    )
}