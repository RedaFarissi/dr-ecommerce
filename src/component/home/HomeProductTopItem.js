import images from "../images.js"
import { Link } from 'react-router-dom';


export default function HomeProductTopitem(props){
  return(
  <Link to={`/product_detail/${props.slug}`}>

    <div className="showcase-container" style={{maxHeight:"150px"}}>
          <div className="showcase">
            <div className="showcase-img-box">
              <img src={(props.image===null)?images.no_image:props.image} alt="img" style={{width:"120px" ,height:"100px",objectFit:"cover"}} className="showcase-img"/>
            </div>
            <div className="showcase-content">
              <div><h4 className="showcase-title"> {(props.title.length>10)?(props.title).slice(0, 10)+"...":props.title} </h4></div>
              <div className="showcase-category"> {props.category} </div>
              <div className="price-box">
                <p className="price"> {props.price_reduction} درهم </p>
                <del>  {props.default_price}  درهم</del>
              </div>
            </div>
          </div>
    </div>
  </Link>
  )
}