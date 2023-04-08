import {Start} from "../index.js"

export default function AsideBottom(props){
    
    return(
    <div className="showcase">
        <a href="#" className="showcase-img-box">
          <img src={props.image}  width="75" height="75" className="showcase-img"/>
        </a>

        <div className="showcase-content">
            <a href="#"> 
                <h4 className="showcase-title"> {props.title} </h4> 
            </a>
            <div className="showcase-rating">
                
                <Start start={props.start}/>

            </div>
            <div className="price-box">
                <del> {props.default_price} درهم</del>
                <p className="price"> {props.price_reduction}  درهم</p>
            </div>
        </div>
    </div>
    )
}