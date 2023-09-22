import axios from 'axios';
import { useState } from 'react';
import images from "../images.js"

export default function CreatePostItem(props){
    const [display,setDisplay] = useState(false)
    const product_delete = async ()=>{
        const response = await axios.get(`${props.url}create_post/product_delete/${props.id}/${props.slug}/`, 
        { 
           headers : {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`,
          }
        });
        setDisplay(response.data.product_delete)
    }

    return(
        <div className={`col-lg-4 mb-2 ${(display)?"d-none ":""}`} style={{height:"400px"}}>
            <div className="card w-95 m-auto border h-100">
                <img src={(props.image===null)?images.no_image:props.image} className="card-img-top" alt="img" style={{height:"300px",objectFit:"cover"}}/>
                 <div className="card-body">
                 
                     <h6 className="card-title">{(props.title.length>20)?(props.title).slice(0, 20)+"...":props.title}</h6>
                     <div className="d-flex justify-content-between align-items-center card-text">
                        <div>likes : {props.total_likes}</div>
                        <div onClick={product_delete} className="rounded-circle d-flex justify-content-center align-items-center border" style={{width:"32px",height:"32px",cursor:"pointer"}}>
                            <i className="fa-solid fa-trash text-danger" style={{fontSize:"13px"}}></i>
                        </div>
                     </div>
                     
                </div>
           </div>
        </div>   
    )
}