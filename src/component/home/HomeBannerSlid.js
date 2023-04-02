export default function HomeBannerSlid(props){
    return(
    <div className="slider-item">
        <img src={props.src} className="banner-img"/>
        <div className="banner-content">
          <h2 className="banner-title">  {props.h2} </h2>
          <p className="banner-text"> بتداءً من <b> {props.price} درهم </b> </p>
        </div>
    </div>
    )
}