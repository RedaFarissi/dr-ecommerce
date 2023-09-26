import languages from '../language.js';
import images from '../images.js'

export default function HeaderIconProfile(props){
    return(
    <>
      <div onClick={props.clickProfile} className='position-relative' style={localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ? {display:'block'} : {display:'none'}} >
        <div className='rounded-circle bg-dark d-flex justify-content-center align-items-center' style={{width:"43px",height:"43px",cursor:"pointer"}} title={languages.headerTop.profile}>
          <img src={images.profile} className='w-100 border rounded-circle' alt="img"/>
        </div>
      </div>
    
      <div className='profile bg-secondary rounded' ref={props.clickProfileRef}> 
          <button className='btn border w-100 text-light logout' onClick={props.logout}> logout </button>
      </div>
    </>
    )
}