import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";

export default function Alt_Carrossel_Component(){
    return(
        <div className="w-full h-[400px] rounded-md overflow-hidden flex flex-col md:flex-row shadow relative">
            <div className="h-[60%] md:h-[100%] md:grow">
                <img
                src="https://placehold.co/1000x1000" alt="imagem-receita"
                className="size-full object-cover object-center"
                />
            </div>
            <div className="px-4 py-2 md:pt-[70px] md:px-[40px] md:w-[40%] xl:px-[55px] bg-blue-100 size-full flex flex-col md:gap-y-2">
                <p>texto</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif">Nome da Receita</h1>
                <p className="md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minus nobis ratione nihil dolore perferendis sit ducimus, distinctio id atque?</p>
            </div>
            <div className='absolute top-[110px] right-2 p-2 bg-white rounded-full cursor-pointer shadow md:hidden'>
                <FaArrowRight />
            </div>

            <div className='absolute bottom-[20px] right-4 p-2 bg-white rounded-full cursor-pointer shadow hidden md:block'>
                <FaArrowRight />
            </div>
        </div>
    )
}