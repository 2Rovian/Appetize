import Link from 'next/link';

export default async function Ingredient_Name({
    params
}: {
    params: Promise<{ ingredient_name: string }>
}) {
    const { ingredient_name } = await params;
    
    // https://www.themealdb.com/api/json/v1/1/filter.php?i=Broccoli
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient_name}`);
    const data = await response.json();
    const recipes = data.meals;

    const decodedIngredient = decodeURIComponent(ingredient_name);

    return (
        <div>
            <div className="flex items-center w-full">
                <div className="bg-gray-400 h-[2px] grow" />
                <h1 className="text-2xl px-4  font-serif  whitespace-nowrap text-black font-bold">
                    { decodedIngredient } Recipes
                </h1>
                <div className="bg-gray-400 h-[2px] grow" />
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 mb-5">
                {recipes.map((meal: any) => (
                    <li key={meal.idMeal}>
                        <article className="rounded-md shadow-md flex flex-col overflow-hidden relative">
                            <div className="h-full relative overflow-hidden">
                                <Link href={`/recipe/${meal.idMeal}`} className='cursor-pointer'>
                                    <img src={meal.strMealThumb} alt=""
                                        className="object-cover object-center size-full max-h-[300px] hover:scale-105 duration-500 transition-transform"
                                    />
                                </Link>

                            </div>
                            <div className='absolute top-0 w-full bg-amber-950/50 text-white p-2 flex flex-col justify-between font-semibold'>
                                <Link href={`/recipe/${meal.idMeal}`}>
                                    <h2 className='text-lg text-center cursor-pointer'>{meal.strMeal}</h2>
                                </Link>

                            </div>

                            <div className='px-2 absolute bottom-0 py-2 w-full'>

                                <Link href={`/recipe/${meal.idMeal}`} className='rounded-md'>
                                    <button className='px-2 py-1 lg:px-4 lg:py-2 lg:text-lg rounded-md cursor-pointer font-bold shadow text-white bg-amber-600  duration-500 ease-in-out hover:bg-amber-400'>

                                        See More
                                    </button>

                                </Link>

                            </div>

                        </article>
                    </li>
                ))}
            </ul>

        </div>
    )
}