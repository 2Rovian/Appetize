// app/about/page.tsx
import Image from 'next/image';
import { FaHeart, FaUtensils, FaUsers } from 'react-icons/fa';

export default function AboutPageProp() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-amber-600">Appetize</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your gateway to culinary inspiration powered by the MealDB API
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            At Appetize, we believe cooking should be accessible, fun, and creative for everyone.
          </p>
          <p className="text-lg mb-4">
            We've partnered with <span className="font-semibold">TheMealDB</span> to bring you:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 mt-1">•</span>
              <span>5,000+ international recipes</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 mt-1">•</span>
              <span>Step-by-step cooking guides</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2 mt-1">•</span>
              <span>Chef-curated meal ideas</span>
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

      {/* Features Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Appetize?</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
              {feature.icon}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team/API Section */}
      <section className="bg-amber-50 rounded-xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
          <p className="text-lg mb-6">
            Appetize is powered by the incredible <span className="font-semibold">MealDB API</span>, 
            which provides free access to thousands of recipes from around the world.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.themealdb.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full"
            >
              Visit MealDB
            </a>
            <a 
              href="/home" 
              className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-full"
            >
              Start Cooking
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}