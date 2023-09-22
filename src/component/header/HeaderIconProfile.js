import languages from '../language.js';
import images from '../images.js'

export default function HeaderIconProfile(props){
    return(
    <>
      <div onClick={props.clickProfile} className='position-relative' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block'} : {display:'none'}} >
        <div className='rounded-circle bg-dark d-flex justify-content-center align-items-center' style={{width:"43px",height:"43px",cursor:"pointer"}} title={languages.headerTop.create_store_title}>
          <img src={images.profile} className='w-100 border rounded-circle' alt="img"/>
        </div>
      </div>
    
      <div className='profile bg-secondary rounded  position-absolute' ref={props.clickProfileRef}> 
          <button className='btn border w-100 text-light black d-flex justify-content-around fs-5' onClick={props.changeColor}> color <i className={`fa-solid fa-${( localStorage.bg_color === undefined || localStorage.bg_color === null || localStorage.bg_color === "white")?"sun":"moon"} fs-3`}   style={( localStorage.bg_color === undefined || localStorage.bg_color === null || localStorage.bg_color === "white")?{color:"gold"}:{color:"black"}}></i></button>  
          <button className='btn border w-100 text-light logout' onClick={props.logout}> logout </button>
      </div>
    </>
    )
}