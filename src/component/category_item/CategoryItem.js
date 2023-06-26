import { Start } from '../index';

export default function CategoryItem(props){
    return(
        
    <div className="showcase" style={{maxHeight:"300px"}}>
        <div className="showcase-banner">
          <img src={props.image} className="product-img" width="300" style={{height:"160px"}} alt="some images" />
          <p className="showcase-badge angle pink">new</p>
          <div className="showcase-actions">
            <button className="btn-action"><ion-icon name="heart-outline"></ion-icon></button>
            <button className="btn-action"><ion-icon name="eye-outline"></ion-icon></button>
            <button className="btn-action"><ion-icon name="repeat-outline"></ion-icon></button>
            <button className="btn-action"><ion-icon name="bag-add-outline"></ion-icon></button>
          </div>
        </div>
        
        <div className="showcase-content">
          <div className="showcase-category"> {props.category} </div>
          <h3><button  className="showcase-title"> {props.title} </button></h3>
          <div className="showcase-rating">
            
            <Start start={props.start}/>
            
          </div>
          <div className="price-box">
            <p className="price"> {props.price_reduction}  درهم </p>
            <del>  {props.default_price} درهم </del>
          </div>             
        </div>
    </div>
    
    )
}