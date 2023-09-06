import React, { useState } from 'react';
import axios from "axios";


export default function CartItem(props){
    
    const [itemDelete,setItemdelete] = useState(false)
    const [quantity,setQuantity] = useState(props.quantity)
    
    let arr_num = Array.from({ length: 20 }, (_, index) => index + 1)
    
    const handleSelectChange = (event) => {
      setQuantity(event.target.value);
    };

    const deleteCartItem  = async ()=>{
      try{
        const response = await axios.get(`http://localhost:8000/cart/remove/${props.id}/` , {withCredentials: true});
        if(response.data.cart)
          setItemdelete(response.data.cart)
      }catch(err){
        alert(err)
      }
      props.cart_length_remove_1()
    }

    const updateCartItem = async ()=>{
      try{
        const response = await axios.get(`http://localhost:8000/cart/update_quantity/${props.id}/${quantity}/` , {withCredentials: true});
        console.log(response.data)
      }catch(err){
        alert(err)
      }
    }
   
    return(
    <div className={`card rounded-3 mb-4 ${(itemDelete)?"d-none": ""}`} >
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={props.image_url}
              className="img-fluid rounded-3" alt={props.product.title}/>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{props.product.title}</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <select id="options" value={quantity} onChange={handleSelectChange}>
            {arr_num.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
            </select>  
            <button className='border rounded p-1 mx-1' onClick={updateCartItem}>Update</button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">{props.product.price_reduction} $</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <button onClick={deleteCartItem} className="text-danger"><i className="fas fa-trash fa-lg"></i></button>
          </div>
        </div>
      </div>
    </div>    
    )
}

