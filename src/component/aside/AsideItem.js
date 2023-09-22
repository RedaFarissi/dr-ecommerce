import {Start} from "../path.js"
import images from "../images.js"
import { Link } from 'react-router-dom';


export default function AsideItem(props){
    
    return(
    <Link to={`/product_detail/${props.slug}`} className="mb-4 asideItem">
        <div className="showcase">
            <div className="showcase-img-box">
              <img src={(props.image===null)?images.no_image:props.image}  alt='img' width="75" height="75" className="showcase-img"/>
            </div>
        
            <div className="showcase-content">
                <div className="showcase-rating">
                    
                    <Start start={props.start}/>
        
                </div>
                <h4 className="showcase-title aside-title-link"> {(props.title.length>30)?(props.title).slice(0, 30)+" ...":props.title} </h4> 
                <div className="price-box">
                    <span className="price"> {props.price_reduction}  درهم</span>
                    <del> {props.default_price} درهم</del>
                </div>
            </div>
        </div>
    </Link>
    )
}