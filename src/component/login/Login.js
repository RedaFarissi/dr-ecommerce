import images from "../images"
import { Link , useNavigate} from "react-router-dom"
import './Login.css'
import languages from '../language.js'
import { useState } from "react"
import axios from "axios"
import AES from 'crypto-js/aes';

export default function Login(props){
  
  const secretKey = 'your-secret-key';
  
  const [login , setLogin] = useState({ username:"" , password:"" });
  const navigate = useNavigate();

  const hundlelogin =(e)=>{
    setLogin({...login , [e.target.name]: e.target.value})
  }

  const hundleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/rest-auth/login/', login);
      localStorage.setItem('auth_token', AES.encrypt(response.data.key, secretKey).toString() );
      setLogin({ username:"" , password:"" }) ;
      navigate('/');
    }catch(err){
      alert(err);
    }
  }


  return (

    <div className="container" style={{marginTop:"4rem"}}>
        <div className="row" dir="rtl">

            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src={images.signinImage} alt="" className="w-75"/>
            </div>
          
            <div className="col-md-6">
                <div className="row justify-content-center">
                      <div className="col-md-8">
                            <div className="mb-4">
                                <h3>{languages.login.h3}</h3>
                                <p className="mb-4"> { languages.login.p }</p>
                            </div>
                            <form method="POST" onSubmit={hundleSubmit}>
                                <div className="form-group first">
                                  <label htmlFor="username">{languages.login.username}</label>
                                  <input type="text" name="username" onChange={hundlelogin} className="form-control mt-3" id="user_name"/>
                                </div>
                                <div className="form-group last mb-4">
                                  <label htmlFor="password">{languages.login.password}</label>
                                  <input type="password" name="password" onChange={hundlelogin} className="form-control mt-3" id="password"/>
                                </div>
                                <div className="d-flex mb-3 align-items-center">
                                    <span className="ml-auto">
                                        <Link to="/forgot_password">{languages.login.forgot_password}</Link>
                                    </span> 
                                </div>
                                
                                <input type="submit" value={languages.login.h3} className="btn text-white btn-block btn-primary"/>
                                
                                <Link to="/create_account" style={{marginTop:"0.8rem"}}> {languages.login.Create_account} </Link>

                                <span className="d-block text-left my-4 text-muted"> {languages.login.sign_in_with} </span>
                                
                                <div className="d-flex">
                                  <div className="facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                  </div>  
                                  <div className="twitter">
                                    <i className="fa-brands fa-twitter"></i>
                                  </div>
                                </div>
                            </form>
                      </div>
                </div>
            </div>   

        </div> 
    </div>
  
  )
}


//username =>  redaesskouni  &&  key => 5abf7c6a7e67fca939778fe0be61321bb1ac5d42 
//username =>  achrafEl  &&  password => achrafEl0606705646@   && key  => d4e50689c36205f4fac171feafa9125c50c46cc7
//
////////