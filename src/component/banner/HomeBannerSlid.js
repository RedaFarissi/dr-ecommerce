export default function HomeBannerSlid(props){
    return(
    <div className="slider-item">
        <img src={props.src} alt='img' className="banner-img"/>
        <div className="banner-content">
          <h2 className="banner-title">  {props.h2} </h2>
        
        </div>
    </div>
    )
}