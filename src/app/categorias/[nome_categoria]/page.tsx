import Link from 'next/link';

export default async function Categoria_Nome({
    params
}: {
    params: Promise<{ nome_categoria: string }>
}) {
    // Busca por categoria:
    // https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
    // Busca por id:
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874
    const { nome_categoria } = await params;

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nome_categoria}`);
    const data = await response.json();

    const receitas = data.meals;

    console.log(receitas)
    return (
        <div>
            <p>Você busca por: {nome_categoria}</p>
            {/* <ul className="grid grid-cols-2">
                {receitas.map((meal: any) => (
                    <li key={meal.idMeal}>
                        <span>{meal.strMeal}</span>
                    </li>
                ))}
            </ul> */}

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
                {receitas.map((meal: any) => (
                    <li key={meal.idMeal}>
                        <article className="rounded-md shadow flex flex-col overflow-hidden">
                            <div className="h-[70%] relative overflow-hidden">
                                <Link href={`http://localhost:3000/receita/${meal.idMeal}`} className='cursor-pointer'>
                                    <img src={meal.strMealThumb} alt=""
                                        className="object-cover object-center size-full max-h-[300px] hover:scale-110 duration-500 transition-transform"
                                    />
                                </Link>
                                {/* <div className='absolute right-2 top-2 bg-slate-100 text-amber-500 font-bold px-2 py-1 rounded-xl shadow'>
                                    {meal.regiao}
                                </div> */}
                            </div>

                            <div className='grow lg:h-auto h-[140px] p-2 bg-white flex flex-col justify-between'>
                                <div>
                                    <Link href={`http://localhost:3000/receita/${meal.idMeal}`}>
                                        <h2 className="font-semibold text-xl lg:text-2xl">{meal.strMeal}</h2>
                                    </Link>
                                    {/* <span className='text-lg'>
                                        {meal.tags
                                            .split(',')
                                            .slice(0, 2)
                                            .join(' | ')
                                        }
                                    </span> */}
                                </div>

                                <div className='lg:mt-2 flex lg:justify-start justify-between lg:gap-x-2'>

                                    <button className='px-3 py-1 font-semibold  hover:text-white 
                                                bg-amber-500 hover:bg-amber-600 text-white rounded-md cursor-pointer duration-300 ease-in-out
                                                '>Save Recipe</button>

                                    <Link href={`http://localhost:3000/receita/${meal.idMeal}`} className='rounded-md'>
                                        <button className='outline-gray-400 outline-1 px-2 py-1 rounded-md cursor-pointer shadow hover:bg-amber-700 hover:text-white duration-500 ease-in-out'>

                                            See More
                                        </button>

                                    </Link>

                                </div>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}