import { AsideItem} from "../path.js";
import { handleColor } from '../function';
import './Aside.css';

import React, { useEffect, useRef } from 'react';
export default function Aside(props){
    const isMountedRef = useRef(false);
    var resul_aside_bottom = props.best_discount.map(e => <AsideItem 
        key={e.id}
        slug={e.slug}
        image={e.image}
        title={e.title} 
        start={e.start} 
        default_price={e.default_price}
        price_reduction={e.price_reduction}
      />
    );
    const logicToHandleAsidePosition =()=>{
      var sidebar = document.getElementById("sidebar")
      var container_home = document.getElementById("container-home")
      var product_box = document.getElementById("product-box")
    
      //getBoundingClientRect is function to get distance between top of page and element
      if(container_home.getBoundingClientRect().top <= 0 && window.innerWidth > 1024){
        sidebar.style = "position:fixed;top:0px;padding-top:30px";
        product_box.style = "position:absolute;left:75px;"
      }else{
        sidebar.style = "position:static;padding-top:0px"
        product_box.style = "position:static;"    
      }
    }
    useEffect(() => {
      isMountedRef.current = true;

      if(isMountedRef.current){ 
          window.document.addEventListener('scroll', logicToHandleAsidePosition);
      }
      return () => {
        window.document.removeEventListener('scroll', logicToHandleAsidePosition);
      }
    }, []);
    
    

    return(
    <div id="sidebar" className="sidebar" style={handleColor(localStorage.bg_color)}>

            <div id="product-showcas" className="product-showcase">
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