import './Header.css'
import { HeaderTop , HeaderNav , HeaderMobile } from '../path.js'
import { handleColor } from '../function'

export default function Header(props){
    return (
    <header style={handleColor(localStorage.bg_color)} onClick={props.removeProfile}>
 
        <HeaderTop 
            url={props.url}
            clickProfile={props.clickProfile}
            clickProfileRef={props.clickProfileRef}

            language={props.language}
           
            clicklogo={props.clicklogo}
            changeColor={props.changeColor}
            cart_length={props.cart_length}
        />
        
        <HeaderNav  
            color={props.color}
            all_category={props.all_category}
        />

        <HeaderMobile />

    </header>
    )
}