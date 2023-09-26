import "./Cart.css"
import { CartItem } from '../../component/path';
import languages from "../language";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Cart(props){
    const [cart , setCart] = useState([]);

    useEffect(()=> {
      async function fetchData(){
       try{
         const response = await axios.get(`${props.url}cart/details/` , {withCredentials: true});
         setCart(response.data.cart);
       }catch(err){
         alert(err)
       }
      }
      fetchData()
    },[props.url]);
    

    const cartArray = Object.values(cart)
    const cart_details = cartArray.map(e=> <CartItem 
      key={e.id} 
      id={e.id} 
      url={props.url}
      product={e.product} 
      quantity={e.quantity} 
      image_url={e.image_url}
      cart_length_remove_1={props.cart_length_remove_1}
    />)

    return (
    <section className="h-100">

      <div className="container w-100 h-100 py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">{languages.cart.h3}</h3>
         
        </div>

        {cart_details}
        
        <div className="div-btn rounded mb-5"> 
           <Link to="/order" className="div-btn-link btn btn-block btn-lg ms-2 me-2" >
             {languages.cart.btn1}
           </Link>
           <Link to="/" className="div-btn-link btn btn-block btn-lg ms-2 me-2" >
             {languages.cart.btn2}
           </Link>
        </div>
      </div>

    </section>
    )
}