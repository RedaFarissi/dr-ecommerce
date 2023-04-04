import images from '../images.js'
import { useState } from 'react';
import axios from 'axios';
import './CreateStore.css'
import hundeleRequest from '../decrypt.js'

export default function CreateStore(props){ 
  var language = { }
  if(true){
    language['dir'] = "rtl"
    language['text'] = "قم بإنشاء موقع إلكتروني بسرعة"
    language['placeholder_create_store'] = "قم بختيار الإسم بعناية لأنه غير قابل لتغيير"
    language['btn'] = "إرسال"
    language['store_name'] = "اسم المتجر"
    language['message_valid'] = "تم إنشاء متجر بنجاح"

  }else if(props.language === "english"){
    language['dir'] = "ltr"
    language['text'] = "Create a website quickly" 
    language['placeholder_create_store'] = "Choose the name carefully because it cannot be changed"
    language['btn'] = "submit"
    language['store_name'] = "Store Name"
    language['message'] = "Store created successfully"
  }

  const [store_name,setStore_name] = useState('')
  const [message,setMessage] = useState('')
    
  const onchange =(event)=> { setStore_name(event.target.value) }
    
  const handleSubmit = async (event)=>{
      event.preventDefault();
      try{
        let response = hundeleRequest('http://localhost:8000/store/create/', 'POST' , {name:store_name});
        //const response = await axios.post('http://localhost:8000/store/create/', {name:store_name});
        //console.log(response.data)
        console.log(response);
        setStore_name('')
        setMessage((<span className='text-success'> {language.message_valid} </span>));
      }catch(err){
        setMessage((<span className='text-danger'> {err} </span>));
      }
      setStore_name("");
  }

  return(
    <div className="row w-100 createStore">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={images.undraw_file_sync_ot38_svg} className="w-50"/>
        </div>
        <div className="col-md-6 createStore-div2" >
            <div className="row justify-content-center">
                  <div className="col-md-8">
                        <div className="mb-4">
                            <h3>{language.text}</h3>
                        </div>
                        <form action="#" method="POST" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3 w-100">
                              <input 
                                type="text" className="form-control" id="floatingInput" name='nameStore'
                                placeholder={language.placeholder_create_store} value={store_name} onChange={onchange} 
                              />
                              <label forhtml="floatingInput"> {language.store_name} </label>
                            </div>
                            <div className='my-4'>
                              {message}
                            </div>
                            <button className='btn btn-outline-primary w-100 mt-1 p-2'>
                                <b>{language.btn}</b>
                            </button>
                        </form>
                  </div>
            </div>
        </div>
    </div>
    )
}