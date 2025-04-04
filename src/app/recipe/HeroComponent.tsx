import Image from "next/image";
import Expand_img from "./Expand_img";
import { RecipeProps } from "./recipe.type";
import SaveRecipe from "./SaveRecipe";

export default function HeroComponent({ recipe }: RecipeProps) {
    // Criar um array com os ingredientes e medidas filtrando os vazios
    const ingredientes = Array.from({ length: 20 }, (_, i) => ({
        ingrediente: recipe[`strIngredient${i + 1}` as keyof typeof recipe],
        medida: recipe[`strMeasure${i + 1}` as keyof typeof recipe],
    }))
    // Filtra os ingredientes e medidas vazias
    .filter(item => typeof item.ingrediente === 'string' && item.ingrediente.trim() !== "")

    return (
        <div className="w-full h-full sm:h-[550px] rounded-md overflow-hidden flex flex-col sm:flex-row shadow-lg bg-amber-100 relative">
            {/* Imagem da Receita */}
            <div className="h-[60%] sm:h-[100%] sm:grow relative">
                <Image
                    width={800}
                    height={800}
                    src={recipe.strMealThumb} 
                    alt={recipe.strMeal}
                    className="w-full h-full object-cover"
                />
                <Expand_img recipeImg={recipe.strMealThumb}/>
                <SaveRecipe recipe={recipe}/>
            </div>

            {/* Informações da Receita */}
            <div className="p-6 md:w-[40%] sm:overflow-y-auto xl:p-8 flex flex-col gap-4">
                <p className="text-sm uppercase text-gray-700">{recipe.strTags || "Sem tags"}</p>
                <h1 className="text-3xl font-bold font-serif">{recipe.strMeal}</h1>
                <p className="text-gray-600 text-sm">Category: {recipe.strCategory} | Origin: {recipe.strArea}</p>

                {/* Lista de Ingredientes */}
                <div className="bg-white p-4 rounded-lg shadow-md max-h-[400px] overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-2">Ingredients:</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {ingredientes.map((item, index) => (
                            <li key={index}>
                                <strong>{item.medida}</strong> {item.ingrediente}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
