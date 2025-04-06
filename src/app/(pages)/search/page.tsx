import Search_Component from "./Search_Component";
import Filter_Component from "./Filter_Component";

export default function Search_Page(){
    const filter_array = ['By Recipe Name', 'By Ingredient', 'Alphabetic Order (A → Z)', 'Alphabetic Order (Z → A)'];

    return(
        <div>
            <div>
                <Filter_Component />
                {/* <Search_Component /> */}
            </div>
        </div>
    )
}