import Link from "next/link"
import Dropdown_wel from "../welcome/Dropdown"
export default function WelcomeNavbar() {
    return (
        <header className="h-[80px] w-full">
            <nav className="size-full flex justify-between items-center">
                <div>
                    <Link href='/'>
                        <span className="text-3xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">Appetize</span>
                    </Link>
                </div>

                <div className='sm:hidden'>
                    <Dropdown_wel />
                </div>

                <div className="text-xl hidden sm:block">
                    <Link
                        href="/about"
                        className="text-gray-800 duration-300 hover:text-amber-600 ease-in-out p-2"
                    >
                        Why Appetize?
                    </Link>
                </div>

                <div>
                    <Link href='/'>
                        <button className="border-2 border-amber-600 rounded-lg px-6 py-1 cursor-pointer bg-amber-600 hover:bg-amber-500 text-white font-bold duration-300 ease-in-out shadow">Home</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}