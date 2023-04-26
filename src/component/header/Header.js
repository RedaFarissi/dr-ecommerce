import './Header.css'
import { HeaderTop , HeaderNav , HeaderMobile } from '../index.js'
import { handleColor } from '../function'

export default function Header(props){
    return (
    <header style={handleColor(localStorage.bg_color)} >
 
        <HeaderTop 

            language={props.language}
            shop_style={props.shop_style}
            switchShop={props.switchShop}
            clicklogo={props.clicklogo}
            changeColor={props.changeColor}
        />
        
        <HeaderNav  
            another_style={props.another_style}
        />

        <HeaderMobile 
            another_style={props.another_style}
        />

    </header>
    )
}