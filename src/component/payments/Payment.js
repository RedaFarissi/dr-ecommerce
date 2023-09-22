import images from "../images.js"
import {PaypalButton} from '../path.js';

import React , { useState , useEffect} from 'react';
import axios from 'axios';

export default function Payment(props){
 
   const [lastItems, setLastItems] = useState([]);

  useEffect(()=>{
    const get_last_orderItem = async () => {
        try {
          const response = await axios.get(`${props.url}payment/last_order_item/`);
          setLastItems(response.data.last_order_item);
        } catch (error) {
          console.error(error);
        }  
    };
    get_last_orderItem();
  },[props.url]);
 
  const last_items = lastItems.map(e=><div className='row alert alert-secondary'> 
        <div className='col-5 d-flex justify-content-center align-items-center'><img src={(e.product_info.image===null)?images.no_image:e.product_info.image} alt="product img" className='w-75 border border-light'/></div>
        <div className='col-2 d-flex justify-content-center align-items-center'><b>{e.price}</b></div>
        <div className='col-3 d-flex justify-content-center align-items-center'><b>{e.quantity}</b></div>
        <div className='col-2 d-flex justify-content-center align-items-center'><b>{(e.quantity*e.price).toFixed(2)}</b></div>
    </div>)

  return (
    <div className='container mt-5'>
    
          <div>
            <div className='row alert alert-secondary'> 
                <div className='col-5 d-flex justify-content-center align-items-center'><b>Image</b></div>
                <div className='col-2 d-flex justify-content-center align-items-center'><b>price</b></div>
                <div className='col-3 d-flex justify-content-center align-items-center'><b>quantity</b></div>
                <div className='col-2 d-flex justify-content-center align-items-center'><b>Total</b></div>
            </div>
            {last_items}
          </div>

        
        <PaypalButton />
      </div>
  );
};
