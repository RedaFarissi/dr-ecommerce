import {PaypalButton , PaymentItem} from '../path.js';
import React , { useState , useEffect} from 'react';
import axios from 'axios';
import "./Payment.css"

export default function Payment(props){
 
  const [lastItems, setLastItems] = useState([]);
  const [totalPrice , setTotalPrice] = useState(0);
  useEffect(()=>{
    const get_last_orderItem = async () => {
        try {
          const response = await axios.get(`${props.url}payment/last_order_item/`);
          if(response.data.last_order_item !== false){
            setLastItems(response.data.last_order_item);
            setTotalPrice(response.data.total_like);
          }
        } catch (error) {
          console.error(error);
        }  
    };
    get_last_orderItem();
  },[props.url]);
 
  const last_items = lastItems.map(e=><PaymentItem 
    key={e.id}
    product_info={e.product_info}
    price={e.price}
    quantity={e.quantity}
  />)

  return (
    <div className='container mt-5'>
    
      
            <div className='row alert alert-secondary'> 
                <div className='col-5 d-flex justify-content-center align-items-center'><b>Image</b></div>
                <div className='col-2 d-flex justify-content-center align-items-center'><b>price</b></div>
                <div className='col-3 d-flex justify-content-center align-items-center'><b>quantity</b></div>
                <div className='col-2 d-flex justify-content-center align-items-center'><b>Total</b></div>
            </div>
            {last_items}
        
        <PaypalButton 
          totalPrice={totalPrice}
        />
      </div>
  );
};
