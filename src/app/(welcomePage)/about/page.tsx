import Image from "next/image"
import { FaHeart, FaUtensils, FaUsers } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <div>
            {/* background noise */}
            <div
                className="fixed inset-0 z-[-1] opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `url('/noise-bg1.jpg')`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto'
                }}
            />
            {/* background noise */}

            <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">

                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">Appetize</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your gateway to culinary inspiration powered by the MealDB API
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg mb-4">
                            At Appetize, we believe cooking should be accessible, fun, and creative for everyone.
                        </p>
                        <p className="text-lg mb-2">
                            What we offer to you:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <span className="text-amber-600 mr-2 mt-1">•</span>
                                <span><span className="font-semibold text-amber-600">5,000+</span> international recipes.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-amber-600 mr-2 mt-1">•</span>
                                <span><span className="font-semibold text-amber-600">Step-by-step</span> cooking guides.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-amber-600 mr-2 mt-1">•</span>
                                <span><span className="font-semibold text-amber-600">Chef-curated</span> meal ideas.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1547592180-85f173990554"
                            alt="Cooking ingredients"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Appetize?</h2>
                    <div className="grid md:grid-cols-3 gap-x-8 gap-y-4">
                        {[
                            {
                                icon: <FaUtensils className="text-4xl mb-4 text-amber-600" />,
                                title: "Diverse Recipes",
                                description: "From quick meals to gourmet dishes across all cuisines"
                            },
                            {
                                icon: <FaHeart className="text-4xl mb-4 text-amber-600" />,
                                title: "For All Skill Levels",
                                description: "Beginner-friendly guides to advanced techniques"
                            },
                            {
                                icon: <FaUsers className="text-4xl mb-4 text-amber-600" />,
                                title: "Community Driven",
                                description: "Powered by contributors worldwide via MealDB"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center">
                                <span >{feature.icon}</span>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-amber-50 rounded-xl p-8 md:p-12 mb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
                        <p className="text-lg mb-6">
                            Appetize is powered by the incredible <span className="font-semibold hover:underline text-[#f4722b]"><a href="https://www.themealdb.com/api.php">MealDB API</a></span>,
                            which provides free access to thousands of recipes from around the world.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://www.themealdb.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#f4722b] hover:bg-amber-600 text-white px-6 py-3 rounded-full duration-300 ease-in-out"
                            >
                                Visit MealDB
                            </a>
                            <a
                                href="/home"
                                className="border border-amber-600 text-amber-600 px-6 py-3 rounded-full duration-300 ease-in-out hover:bg-amber-600 hover:text-white"
                            >
                                Start Cooking
                            </a>
                        </div>
                    </div>
                </section>

                <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold mb-6">
                            <span className="">
                                "Our" Story
                            </span>
                        </h2>
                        {/* <p className="text-lg mb-4">
                            So... you may have noticed that i am using a lot of "our" or "we" in the web, but to be honest, there is no team behind this site, <span className="underline font-semibold"><a href="https://github.com/2Rovian">just me</a></span>.
                            
                        </p> */}
                        <p className="text-lg mb-4">
                            So... you may have noticed all the "our" and "we" on this site, but let's be honest -
                            there's no team here.
                            It's just <span className="underline font-semibold">
                                <a href="https://github.com/2Rovian">me</a></span> and my vscode.

                        </p>
                        <p className="text-lg mb-4">
                            Appetize became one of my favorite passion projects - something I genuinely enjoyed
                            building. While I'm not looking to monetize it <s>(yet?</s>), I truly hope you find
                            some delicious inspiration here. Who knows, maybe your next culinary masterpiece
                            is just a click away!
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                            <p className="italic">
                                "Good food tastes good." <span className="opacity-70">- Albert Einstein (probably)</span>
                            </p>
                        </div>
                    </div>
                    <div className="relative h-80 rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
                        <Image
                            src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
                            alt="Chef preparing ingredients in a kitchen"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>

                <section className="mb-20 bg-amber-50 rounded-xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Our <span className="text-amber-600">Recipe</span> Philosophy
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Quality Over Quantity",
                                content: "While we index thousands of recipes, each one is manually verified for clear instructions and realistic ingredients."
                            },
                            {
                                title: "Global Perspective",
                                content: "We prioritize authentic recipes from their cultures of origin, not Westernized versions."
                            },
                            {
                                title: "Practical First",
                                content: "Every recipe must be cookable by home chefs with standard kitchen equipment."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-3 text-amber-700">{item.title}</h3>
                                <p className="text-gray-600">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        What's <span className="text-amber-600">Coming Next</span>
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <ul className="space-y-6">
                            {[
                                {
                                    title: "Smart Shopping Lists",
                                    description: "Automatically generated from selected recipes",
                                    icon: "🛒"
                                },
                                {
                                    title: "Video Tutorials",
                                    description: "Step-by-step video guides for complex techniques",
                                    icon: "🎥"
                                },
                                {
                                    title: "Seasonal Collections",
                                    description: "Curated recipes based on local produce availability",
                                    icon: "🍂"
                                }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-2xl mr-4 mt-1">{item.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>

    )
}