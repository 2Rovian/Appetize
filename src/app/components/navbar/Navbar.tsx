import InputNavbar from "./InputNavbar";
import Link from "next/link";

export default function Navbar(){
    return(
        <header className="h-[80px] ">
            <nav className="size-full flex justify-between items-center ">
                <div>
                    <Link href='/'>
                        <span className="text-3xl font-bold font-serif">Appetize</span>
                    </Link>
                </div>
                <ul className="flex gap-x-4 text-xl">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Recipes</li>
                    
                </ul>
                <InputNavbar />
            </nav>
        </header>
    )
}