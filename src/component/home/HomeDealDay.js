import {HomeDealDayItem} from "../index"
//`<ion-icon name="star"></ion-icon><ion-icon name="star-half-outline"></ion-icon>`

export default function HomeDealDay(props){
    var result = props.deal_of_day.map(e=><HomeDealDayItem 
        key={e.id}
        image = {e.image}
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
        <h2 className="title">صفقة اليوم</h2>
        <div className="showcase-wrapper has-scrollbar">  
        {result}
        </div>
    </div>
    )
}