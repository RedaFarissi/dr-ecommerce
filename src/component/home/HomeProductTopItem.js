export default function HomeProductTopitem(props){
    return(
    <div className="showcase-container" style={{maxHeight:"150px"}}>
          <div className="showcase">
            <a href="#" className="showcase-img-box">
              <img src={props.image}  width="70" height="100" className="showcase-img"/>
            </a>
            <div className="showcase-content">
              <a href="#"><h4 className="showcase-title"> {props.title} </h4></a>
              <a href="#" className="showcase-category"> {props.category} </a>
              <div className="price-box">
                <p className="price"> {props.price_reduction} درهم </p>
                <del>  {props.default_price}  درهم</del>
              </div>
            </div>
          </div>
    </div>
)
}