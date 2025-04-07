import Link from 'next/link';

export default async function Ingredients_Page() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const data = await response.json();

    const ingredients_array = data.meals;
    return (
        <div>
            <div className="flex items-center w-full">
                <div className="bg-gray-400 h-[2px] grow" />
                <h1 className="text-2xl px-4  font-serif  whitespace-nowrap text-black font-bold">
                    All Ingredients
                </h1>
                <div className="bg-gray-400 h-[2px] grow" />
            </div>
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {ingredients_array.map((ingredienteItem: any) => (
                    <li key={ingredienteItem.idIngredient}>
                        <Link href={`/ingredients/${ingredienteItem.strIngredient}`}>
                            <div className="text-center hover:underline cursor-pointer text-amber-800">{ingredienteItem.strIngredient}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}