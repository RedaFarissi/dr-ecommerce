import React, { useState, useEffect } from 'react';
import axios from "axios";


import { CartItem } from '../../component/path';
import { Link } from 'react-router-dom';

export default function Cart(props){
    const [cart , setCart] = useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const cart_details = async () =>{
           try{
             const response = await axios.get(`${props.url}cart/details/` , {withCredentials: true});
             setCart(response.data.cart)
           }catch(err){
             alert(err)
           }
        }
        cart_details()
    },[props.url])
    
     //change object to array in JavaScript
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
      <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
      
 
          <div className="col-10">

             <div className="d-flex justify-content-between align-items-center mb-4">
               <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
               <div>
                 <p className="mb-0"><span className="text-muted">Sort by:</span> 
                     <a href="#!" className="text-body">price 
                         <i className="fas fa-angle-down mt-1"></i>
                     </a>
                 </p>
               </div>
             </div>


             {cart_details}



             <div className="card">
               <div className="card-body">
                 <Link to="/order" className="btn btn-warning btn-block btn-lg">Proceed to Pay</Link>&nbsp;&nbsp;
                 <Link to="/" className="btn btn-warning btn-block btn-lg">Continue Shopping</Link>
               </div>
             </div>

          </div>
        
 
        </div>
      </div>
    </section>
    )
}