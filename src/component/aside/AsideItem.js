import {Start} from "../path.js"
import images from "../images.js"
import { Link } from 'react-router-dom';


export default function AsideItem(props){
    
    return(
    <Link to={`/product_detail/${props.slug}`}>
        <div className="showcase">
            <div className="showcase-img-box">
              <img src={(props.image===null)?images.no_image:props.image}  alt='img' width="75" height="75" className="showcase-img"/>
            </div>
        
            <div className="showcase-content">
                <div> 
                    <h4 className="showcase-title"> {(props.title.length>10)?(props.title).slice(0, 10)+" ...":props.title} </h4> 
                </div>
                <div className="showcase-rating">
                    
                    <Start start={props.start}/>
        
                </div>
                <div className="price-box">
                    <del> {props.default_price} درهم</del>
                    <p className="price"> {props.price_reduction}  درهم</p>
                </div>
            </div>
        </div>
    </Link>
    )
}