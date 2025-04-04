import toast from "react-hot-toast";
import { RecipeProps } from "./recipe.type"

export function handleSaveRecipe(recipe: any, e?: React.MouseEvent){
    e?.stopPropagation();
    e?.preventDefault();

    const recipesSaved = localStorage.getItem("Recipes");

    let Recipes_localStorage: any[] = [];
    
    try {
        Recipes_localStorage = JSON.parse(recipesSaved || "[]");
        if (!Array.isArray(Recipes_localStorage)) {
            Recipes_localStorage = [];
        }
    } catch (error) {
        Recipes_localStorage = [];
    }

    const existingRecipe = Recipes_localStorage.some(rec => rec.id === recipe.id);

    if(existingRecipe){
        toast.error(`${recipe.strMeal} is already saved`)
        return
    }

    Recipes_localStorage.push(recipe);
    localStorage.setItem("Recipes", JSON.stringify(Recipes_localStorage));
    toast.success(`${recipe.strMeal} saved`, { duration: 2000 });
};