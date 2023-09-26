import "./Banner.css"
import {HomeBannerSlid } from '../path'
import images from '../images'
import languages from "../language"

export default function Banner(props){
    var banner = [
        {"id":1 , "src":images.banner1 , "h2":languages.banner.heading_1 }, 
        {"id":2 , "src":images.banner2 , "h2":languages.banner.heading_2 },
        {"id":3 , "src":images.banner3 , "h2":languages.banner.heading_3 },
    ]  
    var result_banner = banner.map(e => 
        <HomeBannerSlid   
            key={e.id}  
            src={e.src}  
            alt={e.alt} 
            h2={e.h2} 
            price={e.price} 
        />
    )
  
    return(
    <div className="banner" style={props.another_style}>
        <div className="container">
            <div className="slider-container has-scrollbar">
                {result_banner}
            </div>
        </div>
      </div>
    )
}
