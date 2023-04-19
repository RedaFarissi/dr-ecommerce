import images from '../images.js'
import { useState  , useRef} from 'react';
import './CreateStore.css'

import hundeleRequest from '../function.js'
import languages from '../language.js'


export default function CreateStore(props){ 
  const [message,setMessage] = useState({msg: "" , class: ""})
  const [data , setData] = useState({ name: "" , image: null });
  const clickRef = useRef();
  const onchange =(event)=> { 
    setData({ ...data, [event.target.name]: event.target.type === "file" ? event.target.files[0] : event.target.value });
  }
  const handleCreateStore = async (event)=>{
      event.preventDefault();
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('image', data.image); 
      try{
        const response = await hundeleRequest('http://localhost:8000/store/create/', 'POST' , formData , 'multipart/form-data' );
        alert(response.data);
        setData({ name: "", image: null });
        setMessage({msg: languages.createStore.message_valid  , class: "text-success" });
      }catch(err){
        setMessage({msg: err , class: "text-danger" });
      }
  }
  const clickAddProfile =()=>{
    clickRef.current.click()
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
                            <h3> {languages.createStore.text} </h3>
                        </div>
                        <form encType="multipart/form-data"  method="POST" onSubmit={handleCreateStore}>
                              
                            <input type="file" style={{width:"0",height:"0"}} ref={clickRef}
                                name="image" accept="image/png, image/jpeg"
                                onChange={onchange}  required
                            />
                            
                            <div className='profile-store' onClick={clickAddProfile}>
                              <img src={images.addProfile} alt='' />
                            </div>
                        
                            <div className="form-floating m-2 w-100">
                              <input id="floatingInput"
                                value={data.name}
                                type="text" className="form-control" name='name' 
                                placeholder={languages.createStore.placeholder_create_store} 
                                onChange={onchange} required
                              />
                              <label htmlFor="floatingInput"> {languages.createStore.store_name} </label>
                            </div>
                            
                            
                            <div className='my-1'>
                              <span className={`${String(message.class)}`}> {String(message.msg)} </span>
                            </div>

                            <button type='submit' className='btn btn-outline-primary m-2 w-100 mt-1 p-2'>
                                <b>{languages.createStore.btn}</b>
                            </button>

                        </form>
                  </div>
            </div>
        </div>
    </div>
    )
}