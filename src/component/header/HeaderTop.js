import images from '../images.js'
import { Link } from "react-router-dom";
import languages from '../language.js'


export default function HeaderTop(props){  
  return (
    <div className="header-main">
        <div className="container">


          <Link to='/' className="header-logo" onClick={props.clicklogo} style={{color:"black"}}>  
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
            {/*<Link to='/login' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'none' }: {display:'block'}}>*/}
            <Link to='/login' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'block'}}>
              <div onClick={props.switchShop} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}} title={languages.headerTop.login_title}>  
                <div className="fas fa-user"></div>
              </div>
            </Link> 
        
            {/*<Link to='/createstore' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'none'}}>*/}
            <Link to='/createstore' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'block'}}>
              <div onClick={props.switchShop} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}} title={languages.headerTop.create_store_title}>
                <div className="fa-solid fa-shop"></div>
              </div>
            </Link>

            {/*<Link to='/' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'none'}}>*/}
            <Link to='/' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'block'}}>
              <div onClick={props.switchShop} className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"38px",height:"38px",color:"black"}} title={languages.headerTop.create_store_title}>
                <div className="fa-solid fa-heart"></div>
              </div>
            </Link>

            {/*<Link to='/' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'none'}}>*/}
            <Link to='/' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block' }: {display:'block'}}>
              <div  className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{width:"43px",height:"43px"}} title={languages.headerTop.create_store_title}>
                
              </div>
            </Link>
          </div>   

        </div> 
    </div>
  )
}