import RecipeIngredients from "./RecipeIngredients";


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
            <RecipeIngredients />
        </section>
    )
}