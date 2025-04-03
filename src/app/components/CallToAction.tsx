import Link from 'next/link'
export default function CallToAction() {
    return (
        <section className="h-[150px] mt-5 w-full bg-amber-700 rounded-md text-gray-100 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center mx-10 text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold">Unleash Your Inner Chef!</h3>
                <p className="md:text-lg">Experiment, cook, and share your favorite recipes with food lovers worldwide.</p>
                <Link href='/login'
                className='mt-2 md:mt-3'
                >
                    <button className="px-6 py-2 bg-white text-amber-700 rounded-md font-bold cursor-pointer hover:bg-amber-500 hover:text-white hover:shadow-[0_0_10px_rgba(255,193,7,0.5)] transition duration-300 ease-in-out">
                        Sign Up Now
                    </button>
                </Link>
            </div>
        </section>
    )
}