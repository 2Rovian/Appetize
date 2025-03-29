import HeroComponent from "../HeroComponent";
import PreparoComponent from "../PreparoComponent";

export interface ReceitaProps {
    receita: {
        idMeal: number;
        strMeal: string;
        strCategory: string;
        strArea: string;
        strTags: string;
        strMealThumb: string;
        strInstructions: string;
        strYoutube: string;
    };
}

export default async function id_recipe({
    params
}: {
    params: Promise<{ id_recipe: string }>
}) {
    const { id_recipe } = await params;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id_recipe}`);
    const data = await response.json();

    const receita = data.meals[0];

    return (
        <div>
            <main className="flex flex-col">
                <HeroComponent receita={receita} />
                <PreparoComponent receita={receita} />
            </main>
        </div>
    )
}