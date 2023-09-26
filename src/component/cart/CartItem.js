import React, { useState } from 'react';
import axios from "axios";
import images from "../images.js"
import './Cart.css'

export default function CartItem(props){
    const [itemDelete,setItemdelete] = useState(false)
    const [quantity,setQuantity] = useState(parseInt(props.quantity))      

    const increaseNumber = () => { setQuantity(quantity + 1) };

    const decreaseNumber = () => { if(quantity > 1 ) setQuantity(quantity - 1); };

    const deleteCartItem  = async ()=>{
      try{
        const response = await axios.get(`${props.url}cart/remove/${props.id}/` , {withCredentials: true});
        if(response.data.cart)
          setItemdelete(response.data.cart)
      }catch(err){
        alert(err)
      }
      props.cart_length_remove_1()
    }

    const updateCartItem = async ()=>{
      try{
        await axios.get(`${props.url}cart/update_quantity/${props.id}/${quantity}/` , {withCredentials: true});
        alert("Update Success")
      }catch(err){
        alert(err)
      }
    }

   
    return(
    <div className={`border rounded-3 mb-4 ${(itemDelete)?"d-none": ""}`} >
      <div className="card-body p-4">
        <div className="cart-items-box">
          <div className="cart-item-img">
            <img
              src={(props.image_url===null)?images.no_image:props.image_url}
              className="img-fluid rounded-3" alt="img"
            />
          </div>
          <div className="cart-item-title"> {(props.product.title).slice(0,22)}  </div>
          <div className='cart-item-quantity-box'>
            <div className='cart-item-quantity'>
              <div className="d-flex">
                <button className="btn bg-white fa-plus-box" onClick={increaseNumber}><i className="fa-solid fa-plus"></i></button>
                <input type="number" value={quantity} className='cart-item-number-quantity'/>
                <button className="btn bg-white fa-minus-box" onClick={decreaseNumber}><i className="fa-solid fa-minus"></i></button> 
              </div>
              <div onClick={updateCartItem} className="btn-update mt-2"  >
                Update 
              </div>
            </div>
          </div>
          
          <h5 className="cart-item-price mb-0">{props.product.price_reduction*quantity} $</h5>
          <div className="cart-item-delete">
            <button onClick={deleteCartItem} className="text-danger"><i className="fas fa-trash fa-lg"></i></button>
          </div>
        </div>
      </div>
    </div>    
    )
}