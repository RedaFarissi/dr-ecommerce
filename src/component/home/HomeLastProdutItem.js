export default function HomeLastProdutItem(props){
    return(
    <div className="showcase" style={{maxHeight:"300px"}}>
        <div className="showcase-banner">
          <img src={props.image} className="product-img" width="300" style={{height:"160px"}}/>
          <p className="showcase-badge angle pink">new</p>
          <div className="showcase-actions">
            <button className="btn-action"><ion-icon name="heart-outline"></ion-icon></button>
            <button className="btn-action"><ion-icon name="eye-outline"></ion-icon></button>
            <button className="btn-action"><ion-icon name="repeat-outline"></ion-icon></button>
            <button className="btn-action"><ion-icon name="bag-add-outline"></ion-icon></button>
          </div>
        </div>
        
        <div className="showcase-content">
          <a href="#" className="showcase-category"> {props.category} </a>
          <h3><a href="#" className="showcase-title"> {props.title} </a></h3>
          <div className="showcase-rating">
            
                {props.start}
          
          </div>
          <div className="price-box">
            <p className="price"> {props.price_reduction}  درهم </p>
            <del>  {props.default_price} درهم </del>
          </div>             
        </div>
    </div>
    )
}