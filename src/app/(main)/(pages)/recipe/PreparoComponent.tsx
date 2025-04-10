import { RecipeProps } from "../../types/recipe.type"

export default function PreparoComponent({ recipe }: RecipeProps) {
    return (
        <div className="bg-white rounded-xl shadow-md mt-5 p-2 flex flex-col md:flex-row gap-y-3 md:gap-x-3">
            <div className="md:w-[40%] md:px-[20px] overflow-y-auto max-h-[300px] md:max-h-[400px]">
                <h2 className="text-2xl text-center py-3 font-semibold">Instructions</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{recipe.strInstructions}</p>
            </div>

            {recipe.strYoutube && (<div className="md:grow rounded-md overflow-hidden">
                <iframe
                    className="w-full h-[400px]"
                    src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
                    title={recipe.strMeal}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>)}
            
        </div>
    )
}