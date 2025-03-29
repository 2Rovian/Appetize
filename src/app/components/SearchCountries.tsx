import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function SearchCountries() {
    const countries_array = [
        { id: 1, nome: 'American', img: 'https://www.federalflags.com/cdn/shop/products/Polyester-American-flag-closeup-angle_6647de24-6210-4bb8-a86f-2b0c5923c020_600x.jpg?v=1645022087' },
        { id: 2, nome: 'British', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjLlalCSZzL4HzBAD7KwTkBTEBrN7JdNhPA&s' },
        { id: 3, nome: 'Canadian', img: 'https://images.stockcake.com/public/0/2/e/02e89eff-5f90-45ba-bdd0-3ea00f05a8c8_large/proud-canadian-flag-stockcake.jpg' },
        { id: 4, nome: 'Chinese', img: 'https://img.freepik.com/fotos-gratis/foto-realista-da-bandeira-da-china-acenando-com-texturas-interessantes_181624-9285.jpg' },
        { id: 5, nome: 'Croatian', img: 'https://img.freepik.com/premium-vector/croatia-flag-design-waving-croatian-flag-made-satin-silk-fabric-vector-illustration_191567-1006.jpg' },
        
    ]
    return (
        <section className="my-5">
            <h2 className="text-2xl font-semibold font-serif">Countries Recipes</h2>
            <ul className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 my-2">
                {countries_array.map((countryItem) => (
                    <li
                        key={countryItem.id}
                        className="flex flex-col items-center gap-y-2 justify-center cursor-pointer duration-500 ease-in-out hover:scale-110"
                    >
                        <Link href={`/countries/${countryItem.nome}`} className="flex flex-col items-center justify-center gap-y-2 p-2">
                            <div className="h-[120px] rounded-md overflow-hidden">
                                <img
                                    src={countryItem.img}
                                    alt={`${countryItem.nome} image`}
                                    className="size-full object-cover object-center"
                                />
                            </div>
                            <span className="text-lg font-semibold text-center">{countryItem.nome}</span>
                        </Link>
                    </li>
                ))}
               
                <li className="flex flex-col items-center gap-y-2 justify-center cursor-pointer ">
                    <Link href="/countries" className="flex flex-col items-center gap-y-2 p-2">
                        <div className="size-[120px] rounded-full bg-slate-300 shadow-md flex items-center justify-center text-2xl">
                            <FaPlus />
                        </div>
                        <span className="text-lg font-semibold text-center">Countries</span>
                    </Link>
                </li>
            </ul>

        </section>
    )
}