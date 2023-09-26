import { Link } from "react-router-dom";
import languages from '../language.js'

export default function HeaderCartIcon(props){
    return(
    <Link to='/cart' >
        <div className='rounded-circle d-flex justify-content-center align-items-center position-relative' style={{width:"38px",height:"38px",color:"black"}} title={languages.headerTop.icon_cart}>
          <div className={`fa-solid fa-cart-plus ${(localStorage.getItem("bg_color") === "white" || localStorage.getItem("bg_color") == null )?"text-black":"text-light"}`}></div>
          <small> <small><div className='badge bg-primary position-absolute' style={{top:"-3px",right:"-5px"}}>{props.cart_length}</div></small></small>
        </div>
    </Link>
    )
}