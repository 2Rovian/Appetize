export default function Footer() {
    return (
        <footer className="py-5 bg-slate-500 text-slate-100 my-5 rounded-md flex items-center justify-center">
            <div className="h-full flex flex-col items-center justify-center text-sm sm:text-base md:text-lg px-10">
                <div>
                    <p className="text-center">Appetize - Your gateway to thousands of delicious recipes. Find amazing dishes, try new flavors, and make every meal special.</p>
                </div>
                <div className="mt-2">
                    <p className="">Made by <span className="hover:underline text-white font-semibold"><a href="https://github.com/2Rovian">Rovian</a></span>.</p>
                </div>
            </div>
        </footer>
    )
}

{/* <footer className=" text-slate-600 my-5 rounded-md flex items-center">
    <div>
        <p className="text-lg">Made by <span className="hover:underline text-slate-800 font-semibold"><a href="https://github.com/2Rovian" >Rovian</a></span>.</p>
    </div>
</footer> */}