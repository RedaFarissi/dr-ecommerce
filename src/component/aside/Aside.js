import images from "../images.js";
import {AsideTop , AsideBottom} from "../index.js";
import { handleColor } from '../function';
import './Aside.css';

export default function Aside(props){
    
  var aside_top = [
     {"id":1,"src": images.dress,"p":"ملابس قصيرة"},
     {"id":2,"src": images.shoes, "p":"الأحذية" },
     {"id":3,"src":images.sport, "p":"ملابس رياضية"},
     {"id":4,"src":images.cosmetics,"p":"مستحضرات التجميل" },
     {"id":5,"src": images.glasses,"p":"نظارات"},
     {"id":6,"src":images.bag.svg,"p":"حقائب"}
  ];
    
    var resul_aside_top = aside_top.map(e => <AsideTop key={e.id} src={e.src} p={e.p} />);
    var resul_aside_bottom = props.best_discount.map(e => <AsideBottom key={e.id}
        image={e.image} title={e.title} start={e.start} 
        default_price={e.default_price} price_reduction={e.price_reduction}
      />
    );
  
    return(
    <div className="sidebar has-scrollbar" style={handleColor(localStorage.bg_color)} data-mobile-menu>

            <div className="sidebar-category">
                <div className="sidebar-top">
                  <h2 className="sidebar-title">قائمة السلع  </h2>
                  <button className="sidebar-close-btn" data-mobile-menu-close-btn> 
                    <ion-icon name="close-outline"></ion-icon> 
                  </button>
                </div>
                <ul className="sidebar-menu-category-list">
                  {resul_aside_top}
                </ul>
            </div>

            <div className="product-showcase">
                <h3 className="showcase-heading"> أحسن تخفيضات </h3>
                <div className="showcase-wrapper">
                    <div className="showcase-container">
                      {resul_aside_bottom}
                    </div>
                </div>
            </div>

      </div>
    )
}