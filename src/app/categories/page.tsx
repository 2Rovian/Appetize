import Link from 'next/link';

export default function Categorias_Page() {
    const categorias_array = [
        { id: 1, nome: 'Beef', img: 'https://www.themealdb.com/images/category/beef.png' },
        { id: 2, nome: 'Chicken', img: 'https://www.themealdb.com/images/category/chicken.png' },
        { id: 3, nome: 'Dessert', img: 'https://www.themealdb.com/images/category/dessert.png' },
        { id: 4, nome: 'Lamb', img: 'https://www.themealdb.com/images/category/lamb.png' },
        { id: 5, nome: 'Miscellaneous', img: 'https://www.themealdb.com/images/category/miscellaneous.png' },
        { id: 6, nome: 'Pasta', img: 'https://www.themealdb.com/images/category/pasta.png' },

        { id: 7, nome: 'Pork', img: 'https://www.themealdb.com/images/category/pork.png' },
        { id: 8, nome: 'Seafood', img: 'https://www.themealdb.com/images/category/seafood.png' },
        { id: 9, nome: 'Side', img: 'https://www.themealdb.com/images/category/side.png' },
        { id: 10, nome: 'Starter', img: 'https://www.themealdb.com/images/category/starter.png' },
        { id: 11, nome: 'Vegan', img: 'https://www.themealdb.com/images/category/vegan.png' },
        { id: 12, nome: 'Vegetarian', img: 'https://www.themealdb.com/images/category/vegetarian.png' },
        { id: 13, nome: 'Breakfast', img: 'https://www.themealdb.com/images/category/breakfast.png' },
        { id: 14, nome: 'Goat', img: 'https://www.themealdb.com/images/category/goat.png' },
    ]

    return (
        <section className="border-2 mt-4 border-slate-600 relative rounded-md">
            <div className="text-2xl text-center font-semibold font-serif w-fit absolute left-1/2 -translate-x-1/2 -top-[18px] z-50 bg-gray-100 px-4">
                <span className=''>All Categories</span>
                
            </div>
            <ul className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 my-2 p-2">
                {categorias_array.map((categoriaItem) => (
                    <li
                        key={categoriaItem.id}
                        className="flex flex-col items-center gap-y-2 justify-center cursor-pointer duration-500 ease-in-out hover:scale-110"
                    >
                        <Link href={`/categories/${categoriaItem.nome}`} className="flex flex-col items-center justify-center p-2">
                            <div className="h-[100px] rounded-full overflow-hidden">
                                <img
                                    src={categoriaItem.img}
                                    alt={`${categoriaItem.nome} image`}
                                    className="size-full object-cover object-center"
                                />
                            </div>
                            <span className="text-lg font-semibold text-center">{categoriaItem.nome}</span>
                        </Link>
                    </li>
                ))}

            </ul>
            
        </section>
    )
}