import images from "../images"
import { Link } from "react-router-dom"
import './Login.css'
import { useState } from "react"

export default function Login(props){
  var obj = {}
  if(true){
    obj['h3'] = "تسجيل الدخول";
    obj['p'] = "قم بتسجيل الدخول لإنشاء متجر بسهولة";
    obj['username'] = "اسم المستخدم";
    obj['password'] = "كلمة المرور";
    obj['forgot_password'] ="هل نسيت كلمة السر";
    obj['sign_in_with'] = "أو تسجيل الدخول باستخدام";
    obj['Create_account'] = "قم بإنشاء حساب";
  }else{
    obj['h3'] = "Sign In"
    obj['p'] = "Sign in to easily create a store";
    obj['username'] = "Username";
    obj['password'] = "Password";
    obj['forgot_password'] ="Forgot your password";
    obj['sign_in_with'] = "or sign in with";
    obj['Create_account'] = "Create an account";
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
                                <h3>{obj.h3}</h3>
                                <p className="mb-4"> { obj.p }</p>
                            </div>
                            <form method="POST">
                                <div className="form-group first">
                                  <label htmlFor="username">{obj.username}</label>
                                  <input type="text" className="form-control mt-3" id="user_name"/>
                                </div>
                                <div className="form-group last mb-4">
                                  <label htmlFor="password">{obj.password}</label>
                                  <input type="password" className="form-control mt-3" id="password"/>
                                </div>
                                <div className="d-flex mb-3 align-items-center">
                                    <span className="ml-auto">
                                        <a href="#">{obj.forgot_password}</a>
                                    </span> 
                                </div>
                                <input type="submit" value={obj.h3} className="btn text-white btn-block btn-primary"/>
                                <Link to="/create_account" style={{marginTop:"0.8rem"}}> {obj.Create_account} </Link>
                                <span className="d-block text-left my-4 text-muted"> {obj.sign_in_with} </span>
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