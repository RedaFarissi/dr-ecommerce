import { Link } from "react-router-dom";
import images from '../images.js'
import { HeaderIconLanguage } from "../path.js"
export default function HeaderLogo(props){
    return(
    <div className="d-flex justify-content-around">
      <Link to='/' className="header-logo" onClick={props.clicklogo} >  
        <img src={images.logo} alt="Anon's logo" width="100" height="36"/> 
      </Link> &nbsp;&nbsp;
      <HeaderIconLanguage handleLanguage={props.handleLanguage} />
    </div>
    )
}