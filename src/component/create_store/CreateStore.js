import images from '../images.js'
import { useState } from 'react';
import './CreateStore.css'
import hundeleRequest from '../decrypt.js'
import languages from '../language.js'


export default function CreateStore(props){ 
  const [store_name,setStore_name] = useState('')
  const [message,setMessage] = useState('')    
  const onchange =(event)=> { setStore_name(event.target.value) }  

  const handleCreateStore = async (event)=>{
      event.preventDefault();
      try{
        let response = hundeleRequest('http://localhost:8000/store/create/', 'POST' , {name:store_name});
        console.log(response);
        setStore_name('')
        setMessage((<span className='text-success'> {languages.createStore.message_valid} </span>));
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
                            <h3>{languages.createStore.text}</h3>
                        </div>
                        <form action="#" method="POST" onSubmit={handleCreateStore}>
                            <div className="form-floating mb-3 w-100">
                              <input 
                                type="text" className="form-control" id="floatingInput" name='nameStore'
                                placeholder={languages.createStore.placeholder_create_store} value={store_name} onChange={onchange} 
                              />
                              <label forhtml="floatingInput"> {languages.createStore.store_name} </label>
                            </div>
                            <div className='my-4'>
                              {message}
                            </div>
                            <button className='btn btn-outline-primary w-100 mt-1 p-2'>
                                <b>{languages.createStore.btn}</b>
                            </button>
                        </form>
                  </div>
            </div>
        </div>
    </div>
    )
}