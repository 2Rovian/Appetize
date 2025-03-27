import Link from 'next/link'

export default function Famous_Component() {
    const array_articles = [
        {
            id: 52776, nome: 'Chocolate Gateau', categoria: 'Dessert', regiao: 'French', tags: 'Cake,Chocolate,Desert,Pudding',
            img: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg/large'
        },
        {
            id: 52777, nome: 'Mediterranean Pasta Salad', categoria: 'Seafood', regiao: 'Italian', tags: 'Pasta,Baking',
            img: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg/large'
        },
        {
            id: 52779, nome: 'Cream Cheese Tart', categoria: 'Starter', regiao: 'American', tags: 'Tart,Savory',
            img: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg/large'
        },
        {
            id: 52783, nome: 'Rigatoni with fennel sausage sauce', categoria: 'Lamb', regiao: 'Italian', tags: 'Pasta',
            img: 'https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg/large'
        },
        {
            id: 52784, nome: 'Smoky Lentil Chili with Squash', categoria: 'Vegetarian', regiao: 'British', tags: 'Pulse',
            img: 'https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg/large'
        },
        {
            id: 52787, nome: 'Hot Chocolate Fudge', categoria: 'Dessert', regiao: 'American', tags: 'Snack,Chocolate',
            img: 'https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg/large'
        }
    ];
    return (
        <section >
            <h2 className="text-2xl font-semibold font-serif">Amazing Recipes</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
                {array_articles.map((articleItem) => (
                    <li key={articleItem.id}>
                        <article className="rounded-md shadow flex flex-col overflow-hidden">
                            <div className="h-[70%] relative overflow-hidden">
                                <Link href={`receita/${articleItem.id}`} className='cursor-pointer'>
                                    <img src={articleItem.img} alt=""
                                        className="object-cover object-center size-full max-h-[300px] hover:scale-110 duration-500 transition-transform"
                                    />
                                </Link>
                                <div className='absolute right-2 top-2 bg-slate-100 text-amber-500 font-bold px-2 py-1 rounded-xl shadow'>
                                    {articleItem.regiao}
                                </div>
                            </div>

                            <div className='grow lg:h-auto h-[140px] p-2 bg-white flex flex-col justify-between'>
                                <div>
                                    <Link href={`receita/${articleItem.id}`}>
                                        <h2 className="font-semibold text-xl lg:text-2xl">{articleItem.nome}</h2>
                                    </Link>
                                    <span className='text-lg'>
                                        {articleItem.tags
                                            .split(',')
                                            .slice(0, 2)
                                            .join(' | ')
                                        }
                                    </span>
                                </div>

                                <div className='lg:mt-2 flex lg:justify-start justify-between lg:gap-x-2'>

                                    <button className='px-3 py-1 font-semibold  hover:text-white 
                                    bg-amber-500 hover:bg-amber-600 text-white rounded-md cursor-pointer duration-300 ease-in-out
                                    '>Save Recipe</button>

                                    <Link href={`receita/${articleItem.id}`} className='rounded-md'>
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
        </section>
    )
}