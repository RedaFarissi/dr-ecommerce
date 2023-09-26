import {Start} from "../path.js"
import { Link } from "react-router-dom";
import images from "../images.js"

export default function HomeDealDayItem(props){
    return(
    <Link to={`/product_detail/${props.slug}`} className="showcase-container">
        <div className="showcase">
          <div className="showcase-banner">
            <img src={(props.image===null)?images.no_image:props.image} alt="Product" style={{maxHeight:"400px"}} className="showcase-img"/>
          </div>
          <div className="showcase-content">
            <div className="showcase-rating">

              <Start start={props.start}/>

            </div>
            <h3 className="showcase-title">
              <div className="showcase-title">  {props.title}  </div>
            </h3>
            <p className="showcase-desc">  {props.description}  </p>
            <div className="price-box">
              <p className="price"> {props.price_reduction} {(!localStorage.getItem('language') || localStorage.getItem('language') === "english")?"DH":"درهم"}  </p>
              <del>  {props.default_price}  {(!localStorage.getItem('language') || localStorage.getItem('language') === "english")?"DH":"درهم"} </del>
            </div>
            <h6 className="text-secondary m-0 pb-2">  {props.category}  </h6>
            <button className="add-cart-btn">add to cart</button>
           
          </div>
        </div>
      </Link>
    )
}