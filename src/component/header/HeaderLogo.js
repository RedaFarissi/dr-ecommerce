import { Link } from "react-router-dom";
import images from '../images.js'

export default function HeaderLogo(props){
    return(
    <Link to='/' className="header-logo" onClick={props.clicklogo} >  
        <img src={images.logo} alt="Anon's logo" width="120" height="36"/> 
    </Link> 
    )
}