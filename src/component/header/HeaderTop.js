import images from '../images.js'
import { Link } from "react-router-dom";


export default function HeaderTop(props){  
    return (
    <>
      <div className="header-main">
        <div className="container">
          <Link to='/' className="header-logo" onClick={props.clicklogo} style={{color:"black"}}>  
            <img src={images.logo} alt="Anon's logo" width="120" height="36"/> 
          </Link> 

          <div className="header-search-container">
            <form method="POST">
              <input type="search" name="search" className="search-field" placeholder="أدخل اسم المنتج الخاص بك ..."/>
              <button className="search-btn" name="search-btn" type="submit"> 
                  <ion-icon name="search-outline"></ion-icon> 
              </button>
            </form>
          </div>
          
          <div className="header-user-actions position-relative">
            <Link to='/login' style={{color:"black"}} >
              <div onClick={props.switchShop} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px"}} title='login'>  
                <div className="fas fa-user"></div>
              </div>
            </Link> 
            <Link to='/createstore' style={{color:"black"}} >
              <div onClick={props.switchShop} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px"}} title='create stored easily'>
                <div className="fa-solid fa-shop"></div>
              </div>
            </Link>
          </div>   
        </div> 
      </div>
    </>
    )
}