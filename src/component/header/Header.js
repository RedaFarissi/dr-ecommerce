import './Header.css'
import { HeaderTop , HeaderNav , HeaderMobile } from '../index.js'
import { handleColor } from '../function'

export default function Header(props){
    return (
    <header style={handleColor(localStorage.bg_color)} >
 
        <HeaderTop 
            clickProfile={props.clickProfile}
            clickProfileRef={props.clickProfileRef}

            language={props.language}
           
            clicklogo={props.clicklogo}
            changeColor={props.changeColor}
        />
        
        <HeaderNav  
            color={props.color}
            all_category={props.all_category}
        />

        <HeaderMobile />

    </header>
    )
}