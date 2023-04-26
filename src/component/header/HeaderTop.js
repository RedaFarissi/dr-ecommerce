import images from '../images.js'
import { Link } from "react-router-dom";
import languages from '../language.js'
import { useState , useRef } from 'react'

export default function HeaderTop(props){  
  const clickProfileRef = useRef()
  const [isAuth , setIsAuth] = useState( localStorage.getItem('auth_token') !== null )
  const logout=()=>{
    localStorage.removeItem('auth_token')
    setIsAuth(false)
    clickProfileRef.current.style.display = "none"
    console.log(isAuth)
  }

  const clickProfile =()=>{
    const display = getComputedStyle(clickProfileRef.current).getPropertyValue('display');
    (display==="none")? clickProfileRef.current.style.display = "block": clickProfileRef.current.style.display = "none";
  }
  
  
  
  return (
    <div className="header-main">
        <div className="container">
        {(true)?"":""}
          <Link to='/' className="header-logo" onClick={props.clicklogo} >  
            <img src={images.logo} alt="Anon's logo" width="120" height="36"/> 
          </Link> 

          <div className="header-search-container">
            <form method="POST">
              <input type="search" name="search" className="search-field" placeholder={languages.headerTop.placeholder}/>
              <button className="search-btn" name="search-btn" type="submit"> 
                  <ion-icon name="search-outline"></ion-icon> 
              </button>
            </form>
          </div>
          
          <div className="header-user-actions position-relative">
            <Link to='/login' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'none' }: {display:'block'}}>
              <div onClick={props.switchShop} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}} title={languages.headerTop.login_title}>
                <div className="fas fa-user"></div>
              </div>
            </Link> 
      
            <Link to='/createstore' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'none'}}>
              <div onClick={props.switchShop} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}} title={languages.headerTop.create_store_title}>
                <div className="fa-solid fa-shop"></div>
              </div>
            </Link>

            <Link to='/' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'none'}}>
              <div onClick={props.switchShop} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}} title={languages.headerTop.create_store_title}>
                <div className="fa-solid fa-heart"></div>
              </div>
            </Link>

            <div onClick={clickProfile} style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block'} : {display:'none'}}>
              <div className='rounded-circle bg-dark d-flex justify-content-center align-items-center' style={{width:"43px",height:"43px",cursor:"pointer"}} title={languages.headerTop.create_store_title}>
                <img src={images.profile} className='w-75 border  rounded-circle' alt=""/>
              </div>
            </div>
          
            <div className='profile bg-secondary rounded' ref={clickProfileRef}>
                <button className='btn border w-100 text-light black d-flex justify-content-around fs-5' onClick={props.changeColor}> color <i className={`fa-solid fa-${( localStorage.bg_color === undefined || localStorage.bg_color === null || localStorage.bg_color === "white")?"sun":"moon"} fs-3`}   style={( localStorage.bg_color === undefined || localStorage.bg_color === null || localStorage.bg_color === "white")?{color:"gold"}:{color:"black"}}></i></button>  
                <button className='btn border w-100 text-light logout' onClick={logout}> logout </button>
            </div>
             
          </div> 

        </div> 
    </div>
  )
}