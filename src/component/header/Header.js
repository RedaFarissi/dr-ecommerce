import './Header.css'
import { HeaderTop , HeaderNav } from '../path.js'
import { handleColor } from '../function'

export default function Header(props){
    const logout=()=>{
        localStorage.removeItem('auth_token');
        props.clickProfileRef.current.style.display = "none"; 
        window.location.reload()
    }
    
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
            logout={logout}
        />
        
        <HeaderNav  
            color={props.color}
            all_category={props.all_category}
        />
    </header>
    )
}