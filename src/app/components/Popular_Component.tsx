import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function Popular_Component() {
    const categorias_array = [
        { nome: 'Beef', img: 'https://www.themealdb.com/images/category/beef.png', id: 1 },
        { nome: 'Chicken', img: 'https://www.themealdb.com/images/category/chicken.png', id: 2 },
        { nome: 'Dessert', img: 'https://www.themealdb.com/images/category/dessert.png', id: 3 },
        { nome: 'Lamb', img: 'https://www.themealdb.com/images/category/lamb.png', id: 4 },
        { nome: 'Miscellaneous', img: 'https://www.themealdb.com/images/category/miscellaneous.png', id: 5 },
        // {nome: 'Pasta', img: 'https://www.themealdb.com/images/category/pasta.png', id: 6}
    ]
    return (
        <section className="mt-7 mb-3">
            <h2 className="text-2xl font-semibold font-serif">Popular Categories</h2>
            <ul className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 my-2">
                {categorias_array.map((categoriaItem) => (
                    <li
                        key={categoriaItem.id}
                        className="flex flex-col items-center gap-y-2 justify-center cursor-pointer duration-500 ease-in-out hover:scale-110"
                    >
                        <Link href={`/categories/${categoriaItem.nome}`} className="flex flex-col items-center justify-center gap-y-2 p-2">
                            <div className="h-[100px] rounded-full overflow-hidden">
                                <Image
                                    width={600}
                                    height={600}
                                    src={categoriaItem.img}
                                    alt={`${categoriaItem.nome} image`}
                                    className="size-full "
                                    loading='lazy'
                                />
                            </div>
                            <span className="text-lg font-semibold text-center">{categoriaItem.nome}</span>
                        </Link>
                    </li>
                ))}
               
                <li className="flex flex-col items-center gap-y-2 justify-center cursor-pointer ">
                    <Link href="/categories" className="flex flex-col items-center gap-y-2 p-2">
                        <div className="w-[100px] h-[100px] rounded-full text-amber-300 bg-amber-700 hover:border-4 duration-300 ease-in-out shadow-md flex items-center justify-center text-2xl">
                            <FaPlus />
                        </div>
                        <span className="text-lg font-semibold text-center">Categories</span>
                    </Link>
                </li>
            </ul>

        </section>
    )
}