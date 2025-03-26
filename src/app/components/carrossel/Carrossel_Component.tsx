import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function Carrossel_Component() {
    return (
        <div className="border-0 rounded-md overflow-hidden relative shadow">
            <div className="h-[400px]">
                <img
                src="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg" alt="imagem-receita"
                className="size-full object-cover object-center"
                />
            </div>
            <div className='absolute top-[170px] w-full flex justify-between px-2'>
                <span className="p-2 rounded-lg bg-white/60 hover:bg-white/90 cursor-pointer duration-200 ease-in-out">
                    <FaChevronLeft />
                </span>
                <span className="p-2 rounded-lg bg-white/60 hover:bg-white/90 cursor-pointer duration-200 ease-in-out">
                    <FaChevronRight />
                </span>
            </div>
            <div className="absolute bottom-[15%] left-[10%] text-white">
                <h2 className="font-bold font-serif text-4xl md:text-5xl lg:text-6xl"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >Nome da Receita</h2>
            </div>
        </div>
    )
}