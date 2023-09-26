import {HomeDealDayItem} from "../path"
import languages from "../language";

export default function HomeDealDay(props){
    var result = props.deal_of_day.map(e=><HomeDealDayItem 
        key={e.id}
        slug={e.slug}
        image = { e.image}
        start = {e.start}
        description={e.description}
        title = {e.title}
        the_number_of_pieces={e.the_number_of_pieces}
        category={e.category_name}
        price_reduction={e.price_reduction}
        default_price={e.default_price}
      />);
    return(
    <div className="product-featured">
        <h2 className={`title ${(localStorage.getItem('language') !== "arabic")?"text-start":"text-end"}`}>{languages.dealDay.title}</h2>
        <div className="showcase-wrapper has-scrollbar">  
        {result}
        </div>
    </div>
    )
}