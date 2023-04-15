import images from '../images.js'
import { useState } from 'react';
import './CreateStore.css'
import hundeleRequest from '../function.js'
import languages from '../language.js'


export default function CreateStore(props){ 
  const [message,setMessage] = useState({msg :"" , class:""})
  const [data , setData] = useState({ name:"" , image:null });
 
  const onchange =(event)=> { 
    setData({ ...data, [event.target.name]: event.target.type === "file" ? event.target.files[0] : event.target.value })
  }  

  const handleCreateStore = async (event)=>{
      event.preventDefault();
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('image', data.image); 
      try{
        const response = await hundeleRequest('http://localhost:8000/store/create/', 'POST' , formData , 'multipart/form-data' );
        alert("response " + response.data);
        setData({ name: "", image: null });
        setMessage({msg: languages.createStore.message_valid  , class: "text-success" });
      }catch(err){
        setMessage({msg: err , class: "text-danger" });
      }
  }
    

  return(
    <div className="row w-100 createStore">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={images.undraw_file_sync_ot38_svg} alt="" className="w-50"/>
        </div>
        <div className="col-md-6 createStore-div2" >
            <div className="row justify-content-center">
                  <div className="col-md-8">
                        <div className="mb-4">
                            <h3>{languages.createStore.text}</h3>
                        </div>
                        <form encType="multipart/form-data"  method="POST" onSubmit={handleCreateStore} >
                            <div className="form-floating mb-3 w-100">
                              <input id="floatingInput"
                                value={data.name}
                                type="text" className="form-control" name='name' 
                                placeholder={languages.createStore.placeholder_create_store} 
                                onChange={onchange} required
                              />
                              <label htmlFor="floatingInput"> {languages.createStore.store_name} </label>
                            </div>
                            
                            

                            <label htmlFor="image-upload"> Upload image : </label>
                            <input type="file" 
                                   name="image" id='image-upload' accept="image/png"
                                   onChange={onchange} 
                                   required
                              />
                            
                            
                            <div className='my-4'>
                              <span className={`${String(message.class)}`}> {String(message.msg)} </span>
                            </div>

                            <button type='submit' className='btn btn-outline-primary w-100 mt-1 p-2'>
                                <b>{languages.createStore.btn}</b>
                            </button>
                        </form>
                  </div>
            </div>
        </div>
    </div>
    )
}