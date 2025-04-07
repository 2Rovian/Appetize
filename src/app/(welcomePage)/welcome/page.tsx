import WelcomeNavbar from "../components/WelcomeNavbar";
import bgImg from "../../../../public/bgImg3.jpg";
import Image from "next/image";
import WelcomeRandomRecipe from "../components/WelcomeRandomRecipe";

export default function WelcomePage() {
    return (
        <div >
            <div className="max-w-7xl mx-auto px-4 bg-gray-200 xl:rounded-b-2xl xl:outline-3 xl:outline-t-0 shadow outline-b-3 outline-3 outline-amber-600">
                <WelcomeNavbar />
            </div>
            <Image
                src={bgImg}
                alt="Foto de Igor Starkov: https://www.pexels.com/pt-br/foto/conjunto-de-jantar-de-5-pecas-fora-da-frente-da-loja-1237073/"
                fill
                className="object-cover object-center -z-10"
                priority
            />  
            {/* melhor legibilidade */}
            <div className="absolute inset-0 bg-black/40 -z-10" />

            {/* <div className="absolute inset-0 -z-10 opacity-10 grain-noise" /> */}

            <main className="max-w-7xl mx-auto px-4 flex flex-col md:grid md:grid-cols-3 text-white">
                <div className="my-5 md:mt-16 font-serif md:col-span-2 max-w-2xl
                "
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Transform Ingredients<br />
                        <span className="text-amber-600">Into Masterpieces</span>
                    </h1>

                    <p className="text-lg font-normal font-sans mb-8 opacity-90">
                        Discover <span className="font-semibold">5,000+ chef-curated recipes </span>
                        and unlock the joy of cooking with our step-by-step guides.
                    </p>

                    <div className="flex gap-4 font-sans ">
                        <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-amber-600/20 cursor-pointer text-lg">
                            Start Cooking Now
                        </button>
                        
                        <button className="border-2 border-white/30 hover:border-amber-600 text-white px-4 py-2 rounded-full transition-all hover:text-amber-600 cursor-pointer text-lg">
                            Learn More
                        </button>
                    </div>
                </div>
                <WelcomeRandomRecipe />
            </main>

        </div>
    )
}