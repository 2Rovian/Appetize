import Link from 'next/link';

export default function Countries_Page() {
    const countries_array = [
        { id: 1, nome: 'American', img: 'https://www.federalflags.com/cdn/shop/products/Polyester-American-flag-closeup-angle_6647de24-6210-4bb8-a86f-2b0c5923c020_600x.jpg?v=1645022087' },
        { id: 2, nome: 'British', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjLlalCSZzL4HzBAD7KwTkBTEBrN7JdNhPA&s' },
        { id: 3, nome: 'Canadian', img: 'https://images.stockcake.com/public/0/2/e/02e89eff-5f90-45ba-bdd0-3ea00f05a8c8_large/proud-canadian-flag-stockcake.jpg' },
        { id: 4, nome: 'Chinese', img: 'https://img.freepik.com/fotos-gratis/foto-realista-da-bandeira-da-china-acenando-com-texturas-interessantes_181624-9285.jpg' },
        { id: 5, nome: 'Croatian', img: 'https://img.freepik.com/premium-vector/croatia-flag-design-waving-croatian-flag-made-satin-silk-fabric-vector-illustration_191567-1006.jpg' },

        { id: 6, nome: 'Dutch', img: 'https://bestswimming.swimchannel.net/wp-content/uploads/2020/12/thumb2-dutch-flag-silk-flag-of-holland-flags-holland-flag.jpg' },

        { id: 7, nome: 'Egyptian', img: 'https://media.gettyimages.com/id/1357713425/video/national-flag-of-egypt-animation-stock-video-egyptian-flag-waving-in-loop-and-textured-3d.jpg?s=640x640&k=20&c=akNBUIa9TcU7i8JRmRrAm6MMQixxlQqTEcr5ms61dzI=' },
        { id: 8, nome: 'Filipino', img: 'https://t3.ftcdn.net/jpg/09/12/79/00/360_F_912790097_HwDoxiywsqVE7guJsohbrUANLExOZqxR.jpg' },
        { id: 9, nome: 'French', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4Dq_Ia5nLG6snh4Nq_I4hymH0hoQK_ujOw&s' },
        { id: 10, nome: 'Greek', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRpBGK4AEHxDq5MY-Uy08IVMq0H2ALayjdQ&s' },
        { id: 11, nome: 'Indian', img: 'https://t4.ftcdn.net/jpg/08/28/77/17/360_F_828771716_naHgw8dAJ70t6rprV1Ms4ZQGkVw8q2mh.jpg' },
        { id: 12, nome: 'Irish', img: 'https://npr.brightspotcdn.com/dims4/default/b37310a/2147483647/strip/true/crop/3000x1575+0+151/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwdiy%2Ffiles%2F201709%2Firish-tricolour-flag_0.jpg' },
        { id: 13, nome: 'Italian', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRxe7jXSfA1jU5mXqOJ8dhtuGZusO_mBmwA&s' },

        { id: 14, nome: 'Jamaican', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJxuRD5bh-V_BiaZP8s2WiJJkNobJ2dnetw&s' },

        { id: 15, nome: 'Japanese', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKjdakGpg8gLhau5MOVdL-REmYoyiIzXccw&s' },
        { id: 16, nome: 'Kenyan', img: 'https://t3.ftcdn.net/jpg/00/62/18/62/360_F_62186259_DrgdRY8ytrYau1mdO2OKYTaWHIqo8q9C.jpg' },
        { id: 17, nome: 'Malaysian', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7Ozj2zHw7b-Z1upeZ5sVxjeMkjO4cpEcxw&s' },
        { id: 18, nome: 'Mexican', img: 'https://www.thecatrinashop.com/cdn/shop/articles/Screenshot_2024-09-05_at_4.03.37_PM_1200x1200.png?v=1725570329' },
        { id: 19, nome: 'Moroccan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOTInvyHEmmlt4r_YlXLXtjBa1vuz0lmCFA&s' },
        { id: 20, nome: 'Polish', img: 'https://t3.ftcdn.net/jpg/01/98/41/76/360_F_198417613_qioOwXPDW85YKgYxrQnRlbnuNvQ6vClb.jpg' },

        { id: 21, nome: 'Portuguese', img: 'https://i.pinimg.com/736x/61/f7/bf/61f7bf700f798f727574bda217686cc0.jpg' },
        { id: 22, nome: 'Russian', img: 'https://www.advantour.com/russia/images/symbolics/russia-flag.jpg' },
        { id: 23, nome: 'Spanish', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjCornLpukpt9cQ_d_NvRA14fv3h8Z3kilA&s' },
        { id: 24, nome: 'Thai', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EZ2hNDugyW-DVSLOZmA0j4d--WPFeKji_Q&s' },
        { id: 25, nome: 'Tunisian', img: 'https://t3.ftcdn.net/jpg/11/90/11/62/360_F_1190116201_IguTjYXv4TS6poHz5eeQIcbK9VBhxGJq.jpg' },

        { id: 26, nome: 'Turkish', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1_p2SSCDCJSX1y2cOOJk0wXvgRL9PEG0ew&s' },
        { id: 27, nome: 'Ukrainian', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCxqzS_-hfENzoo9LpJu6CcQJoVvs3ojUvg&s' },
        { id: 28, nome: 'Uruguayan', img: 'https://img.freepik.com/premium-photo/flag-uruguay-3d-illustration-uruguayan-flag-waving_2227-2402.jpg' },
        { id: 29, nome: 'Vietnamese', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNth3DN9mHLndoZB1DBALPfHE7LBoNqO2Ang&s' },
    ]

    return (
        <section className="border-2 mt-4 border-slate-600 relative rounded-md">
            <div className="sm:text-2xl text-lg text-center font-semibold font-serif w-fit absolute left-1/2 -translate-x-1/2 -top-[18px] z-50 bg-gray-200 px-4">
                <span className=''>All Countries</span>
                
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 my-2 p-2">
                {countries_array.map((countryItem) => (
                    <li
                        key={countryItem.id}
                        className="flex flex-col items-center gap-y-2 justify-center cursor-pointer duration-500 ease-in-out hover:scale-110"
                    >
                        <Link href={`/countries/${countryItem.nome}`} className="flex flex-col items-center justify-center gap-y-2 p-2">
                            <div className="h-[120px] rounded-md overflow-hidden">
                                <img
                                    src={countryItem.img}
                                    alt={`${countryItem.nome} image`}
                                    className="size-full object-cover object-center"
                                />
                            </div>
                            <span className="text-lg font-semibold text-center">{countryItem.nome}</span>
                        </Link>
                    </li>
                ))}

            </ul>
            
        </section>
    )
}