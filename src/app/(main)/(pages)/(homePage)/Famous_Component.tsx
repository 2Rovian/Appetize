import Image from 'next/image';
import Link from 'next/link'
import SaveBtn from '../../components/SaveBtn';
import * as motion from 'motion/react-client'

export default function Famous_Component() {
    const array_articles = [
        {
            idMeal: 52776, strMeal: 'Chocolate Gateau', strCategory: 'Dessert', strArea: 'French', strTags: 'Cake,Chocolate,Desert,Pudding',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg/large'
        },
        {
            idMeal: 52777, strMeal: 'Mediterranean Pasta Salad', strCategory: 'Seafood', strArea: 'Italian', strTags: 'Pasta,Baking',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg/large'
        },
        {
            idMeal: 52779, strMeal: 'Cream Cheese Tart', strCategory: 'Starter', strArea: 'American', strTags: 'Tart,Savory',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg/large'
        },
        {
            idMeal: 52783, strMeal: 'Rigatoni with fennel sausage sauce', strCategory: 'Lamb', strArea: 'Italian', strTags: 'Pasta',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg/large'
        },
        {
            idMeal: 52784, strMeal: 'Smoky Lentil Chili with Squash', strCategory: 'Vegetarian', strArea: 'British', strTags: 'Pulse',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg/large'
        },
        {
            idMeal: 52787, strMeal: 'Hot Chocolate Fudge', strCategory: 'Dessert', strArea: 'American', strTags: 'Snack,Chocolate',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg/large'
        }
    ];
    return (
        <motion.section className='mt-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-semibold font-serif">Amazing Recipes</h2>
            <ul className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
                {array_articles.map((articleItem: any) => (
                    <li key={articleItem.idMeal}>
                        <article className=" flex flex-col overflow-hidden bg-white rounded-xl shadow-md">
                            <div className="h-[70%] relative overflow-hidden">
                                <Link href={`recipe/${articleItem.idMeal}`} className='cursor-pointer'>
                                    <Image
                                        src={articleItem.strMealThumb}
                                        alt={`image of ${articleItem.strMeal}`}
                                        width={600}
                                        height={600}
                                        loading='lazy'
                                        className="object-cover object-center size-full max-h-[300px] hover:scale-110 duration-500 transition-transform"
                                    />
                                </Link>


                                <Link href={`countries/${articleItem.strArea}`} className='absolute right-2 top-2 bg-white text-amber-500 font-bold px-2 py-1 rounded-xl shadow'>
                                    <span >
                                        {articleItem.strArea}
                                    </span>
                                </Link>
                            </div>

                            <div className='grow lg:h-auto h-[140px] p-2 bg-white flex flex-col justify-between'>
                                <div>
                                    <Link href={`recipe/${articleItem.idMeal}`}>
                                        <h2 className="font-semibold text-xl lg:text-2xl">{articleItem.strMeal}</h2>
                                    </Link>
                                    <span className='text-lg'>
                                        {articleItem.strTags
                                            .split(',')
                                            .slice(0, 2)
                                            .join(' | ')
                                        }
                                    </span>
                                </div>

                                <div className='lg:mt-2 flex md:justify-start justify-between md:gap-x-2 items-center'>
                                    <SaveBtn recipe={articleItem} />

                                    <Link href={`recipe/${articleItem.idMeal}`} className='rounded-md'>
                                        <button className='border-2 hover:border-amber-600 text-gray-900/80 border-gray-900/80 px-1 md:px-2 lg:px-4 rounded-md transition-all hover:text-amber-600 cursor-pointer text-lg
                                        '>

                                            See More
                                        </button>

                                    </Link>

                                </div>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </motion.section>
    )
}