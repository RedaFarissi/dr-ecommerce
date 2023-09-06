import images from "../images"
import { useState } from "react"
import axios from 'axios';


export default function CreateAccount(props){
    let language = {}
    if(true){
        language['title'] = 'اشتراك'
        language['username'] = 'اسم المستخدم'
        language['email'] = 'البريد إلكتروني'
        language['password1'] = 'كلمة المرور'
        language['password2'] = 'تأكيد كلمة المرور'
    }else{
        language['title'] = 'Sign up'
        language['username'] = 'Username'
        language['email'] = 'Email'
        language['password1'] = 'Password'
        language['password2'] = 'Confirm Password'
    }

    const [formData, setFormData] = useState({username:'',email:'', password1:"" ,password2:""})
    
    const hundleSubmit = async (event)=> {
        event.preventDefault()
        try{
          const request = await axios.post(`${props.url}rest-auth/registration/`, formData);
          alert(request.data);
        }catch(err){
          alert(err);
        }
    }
    const changeValue = (event) => {
        setFormData({...formData , [event.target.name]: event.target.value})
    }
    return(
        <div className="container" style={{marginTop:"4rem"}}>
            <div className="row mt-5" dir="rtl">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img src={images.signupImage} alt="signup image" className="w-50"/>
                </div>
                <div className="col-md-6">
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                            <div className="mb-4">
                                <h3>{language.title}</h3>
                            </div>
                            <form  method="POST" onSubmit={hundleSubmit}>
                                <div>
                                    <label htmlFor="username">{language.username}</label>
                                    <input type="text" name="username" value={formData.username} onChange={changeValue} className="form-control mt-2" id="user_name"/>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="email">{language.email}</label>
                                    <input type="email" name="email" value={formData.email} onChange={changeValue} className="form-control mt-2" id="user_name"/>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="password1">{language.password1}</label>
                                    <input type="password" name="password1" value={formData.password1} onChange={changeValue} className="form-control mt-2" id="user_name"/>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="password2">{language.password2}</label>
                                    <input type="password" name="password2" value={formData.password2} onChange={changeValue} className="form-control mt-2" id="user_name"/>
                                </div>
                                <input type="submit" value={language.title} className="btn mt-4 text-white btn-block btn-primary"/>
                            </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
//achrafEl0606705646@
//9mosY2@3WJ9023(oP