import { AsideItem} from "../path.js";
import { handleColor } from '../function';
import './Aside.css';


export default function Aside(props){
    var resul_aside_bottom = props.best_discount.map(e => <AsideItem 
        key={e.id}
        slug={e.slug}
        image={e.image}
        title={e.title} 
        start={e.start} 
        default_price={e.default_price}
        price_reduction={e.price_reduction}
      />
    );

    return(
    <div id="sidebar" className="sidebar" style={handleColor(localStorage.bg_color)}>

            <div id="product-showcas" className="product-showcase">
                <h3 className="showcase-heading"> أحسن تخفيضات </h3>
                <div className="showcase-wrapper">
                    <div className="showcase-container">
                      {resul_aside_bottom}
                    </div>
                </div>
            </div>

      </div>
    )
}