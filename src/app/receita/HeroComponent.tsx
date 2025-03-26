import { ReceitaProps } from "./[id_receita]/page";

export default function HeroComponent({ receita }: ReceitaProps) {
    // Criar um array com os ingredientes e medidas filtrando os vazios
    const ingredientes = Array.from({ length: 20 }, (_, i) => ({
        ingrediente: receita[`strIngredient${i + 1}` as keyof typeof receita],
        medida: receita[`strMeasure${i + 1}` as keyof typeof receita],
    }))
    // Filtra os ingredientes e medidas vazias
    .filter(item => typeof item.ingrediente === 'string' && item.ingrediente.trim() !== "")

    return (
        <div className="w-full h-full sm:h-[550px] rounded-md overflow-hidden flex flex-col sm:flex-row shadow-lg bg-amber-100 relative">
            {/* Imagem da Receita */}
            <div className="h-[60%] sm:h-[100%] sm:grow">
                <img
                    src={receita.strMealThumb} 
                    alt={receita.strMeal}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Informações da Receita */}
            <div className="p-6 md:w-[40%] sm:overflow-y-auto xl:p-8 flex flex-col gap-4">
                <p className="text-sm uppercase text-gray-700">{receita.strTags || "Sem tags"}</p>
                <h1 className="text-3xl font-bold font-serif">{receita.strMeal}</h1>
                <p className="text-gray-600 text-sm">Category: {receita.strCategory} | Origin: {receita.strArea}</p>

                {/* Lista de Ingredientes */}
                <div className="bg-white p-4 rounded-lg shadow-md max-h-[400px] overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-2">Ingredients:</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {ingredientes.map((item, index) => (
                            <li key={index}>
                                <strong>{item.medida}</strong> {item.ingrediente}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
