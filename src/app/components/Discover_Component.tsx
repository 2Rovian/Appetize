export default function Discover_Component(){
    return(
        <section className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold font-serif">Explore Delicious Recipes</h2>
            <p>Crave it. Cook it. Enjoy it. </p>
            <div className="flex flex-col w-full mt-4 bg-white rounded-md shadow p-5 max-w-3xl">
                <div className="flex gap-x-2">
                    <input type="text" placeholder="Search here"
                    className="grow outline-1 outline-gray-300 rounded-md pl-3 shadow"
                    />
                    <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 font-semibold text-white rounded-md cursor-pointer duration-300 ease-in-out">Search Recipe</button>
                </div>
                <div className="flex mt-2 gap-x-2 items-center">
                    <span>Popular Tags: </span>
                    <ul className="flex gap-x-2">
                        <li className="px-3 py-1 cursor-pointer  rounded-full outline-1 outline-gray-200 shadow hover:bg-amber-400 duration-500 hover:text-white ease-in-out hover:outline-none">Breakfast</li>
                        <li className="px-3 py-1 cursor-pointer  rounded-full outline-1 outline-gray-200 shadow hover:bg-amber-400 duration-500 hover:text-white ease-in-out hover:outline-none">Chicken</li>
                        <li className="px-3 py-1 cursor-pointer  rounded-full outline-1 outline-gray-200 shadow hover:bg-amber-400 duration-500 hover:text-white ease-in-out hover:outline-none">Pasta</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}