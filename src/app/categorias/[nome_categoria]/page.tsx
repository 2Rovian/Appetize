
export default async function Categoria_Nome({
    params
}: {
    params: Promise<{ nome_categoria: string }>
}){

    const { nome_categoria } = await params;
    return(
        <div>
            <p>Você busca por: { nome_categoria }</p>
        </div>
    )
}