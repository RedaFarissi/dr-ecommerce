import { Link } from "react-router-dom";
import languages from '../language.js';

export default function HeaderIconLogin(props){
    return(
    <Link to='/login' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'none' }: {display:'block'}}>
        <div  className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}} title={languages.headerTop.login_title}>
          <div className={`fas fa-user ${(localStorage.getItem("bg_color") === "white" || localStorage.getItem("bg_color") == null )?"text-black":"text-light"}`}></div>
        </div>
    </Link> 
    )
}