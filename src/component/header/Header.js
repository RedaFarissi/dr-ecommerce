import { HeaderTop , HeaderNav , HeaderMobile } from '../index.js'
import './Header.css'

export default function Header(props){
  
    return (
    <header>  
    
        <HeaderTop 
            language={props.language} 
            shop_style={props.shop_style} 
            switchShop={props.switchShop}  
            clicklogo={props.clicklogo} 
        />
        
        <HeaderNav  
            another_style={props.another_style} 
        />
        
        <HeaderMobile  />

    </header>
    )
}