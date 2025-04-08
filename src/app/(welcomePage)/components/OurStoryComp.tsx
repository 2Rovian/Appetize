import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";


export default function OurStoryComp() {
    return (
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="">
                <h2 className="text-3xl font-bold mb-6">
                    <span className="">
                        "Our" Story
                    </span>
                </h2>
                <p className="text-lg mb-4">
                    So... you may have noticed all the "our" and "we" on this site, but let's be honest - there's no team here.
                    It's just <span className="underline font-semibold">
                        <a href="https://github.com/2Rovian">me</a>
                    </span> and vscode.

                </p>
                <p className="text-lg mb-4">
                    Appetize has became one of my favorite passion projects - something I genuinely enjoyed
                    building. While I'm not looking to monetize it <s>(yet?</s>), I truly hope you find
                    some delicious inspiration here. Who knows? Maybe your next culinary masterpiece
                    is just a click away!
                </p>
                <div className="bg-amber-50 p-4 rounded-lg rounded-l-md border-l-4 border-amber-400">
                    <p className="italic">
                        "Good food tastes good." <span className="opacity-70">- Albert Einstein (probably)</span>
                    </p>
                </div>
            </div>
            <div className="relative h-80 rounded-xl shadow-lg  bg-gradient-to-br from-red-400 to-amber-300 p-6 flex flex-col justify-center">
                <h3 className="text-center mb-6">
                    <span className="text-white font-bold text-xl">
                    Recipe Ingredients
                    </span>
                </h3>
                <div className="grid grid-cols-2 gap-4 px-8">
                    {[
                        {
                            name: 'Next.js',
                            icon: <RiNextjsFill />,
                            color: 'text-[#000000]'
                        },
                        {
                            name: 'Tailwind',
                            icon: <RiTailwindCssFill />,
                            color: 'text-[#06B6D4]'
                        },
                        {
                            name: 'Vercel',
                            icon: <IoLogoVercel />,
                            color: 'text-[#000000]'
                        },
                        {
                            name: 'TypeScript',
                            icon: <SiTypescript />,
                            color: 'text-[#3178C6]'
                        }
                    ].map((tech) => (
                        <div
                            key={tech.name}
                            className={`bg-white p-3 rounded-lg shadow-sm ${tech.color} border border-amber-100 hover:border-amber-300 transition-all flex items-center gap-3 hover:scale-[1.02]`}
                        >
                            <span className="text-2xl">{tech.icon}</span>
                            <span className="font-medium">{tech.name}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-400 inline-block px-3 py-1 bg-amber-50 rounded-full">
                    ...and probably too much coffee
                    </p>
                </div>
            </div>
        </section>
    )
}