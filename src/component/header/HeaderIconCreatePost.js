import { Link } from "react-router-dom";
import languages from '../language.js'

export default function HeaderIconCreatePost(props){
    return(
        <Link  to='/create_post' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'none'}}>
              <div className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}} title={languages.headerTop.create_store_title}>
                <div className={`fa-solid fa-shop ${(localStorage.getItem("bg_color") === "white" || localStorage.getItem("bg_color") == null )?"text-black":"text-light"}`}></div>
              </div>
        </Link>
    )
}