import {Start} from "../index.js"

export default function HomeDealDayItem(props){
    return(
    <div className="showcase-container">
        <div className="showcase">
          <div className="showcase-banner">
            <img src={props.image} alt="Product" className="showcase-img"/>
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
              <p className="price"> {props.price_reduction} درهم  </p>
              <del>  {props.default_price}  درهم </del>
            </div>
            <h6 className="text-secondary m-0 pb-2">  {props.category}  </h6>
            <button className="add-cart-btn">add to cart</button>
            <div className="showcase-status">
              <div className="wrapper">
                <p> متوفرة : <b> {props.the_number_of_pieces} </b> </p>
              </div>
            </div>
            <div className="countdown-box">
              <p className="countdown-desc">أجل إنتهاء العرض </p>
              <div className="countdown">
                <div className="countdown-content">
                  <p className="display-number">00</p>
                  <p className="display-text">Sec</p>
                </div>
                <div className="countdown-content">
                  <p className="display-number">59</p>
                  <p className="display-text">Min</p>
                </div>
                <div className="countdown-content">
                  <p className="display-number">24</p>
                  <p className="display-text">Hours</p>
                </div>
                <div className="countdown-content">
                  <p className="display-number">360</p>
                  <p className="display-text">Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}