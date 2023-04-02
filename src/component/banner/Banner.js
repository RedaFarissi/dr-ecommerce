import {HomeBannerSlid } from '../index'
import images from '../images'


export default function Banner(props){
    var banner = [{"src":images.banner1, "h2":"بيع أحدث صيحات الموضة النسائية" , "price":"20.00"}, {"src":images.banner2,     "h2":"النظارات الشمسية الحديثة" ,     "price":"50.00"  },{     "src":images.banner3,     "h2":"بيع أزياء الصيف الجديدة" ,     "price":"80.00"  }]  
    var result_banner = banner.map(i=> <HomeBannerSlid src={i.src}  alt={i.alt} h2={i.h2} price={i.price}/>)
  
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
