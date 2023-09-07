import React, { useState , useEffect} from 'react';
import axios from 'axios';

const PayPalPayment = (props) => {
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [lastItems, setLastItems] = useState([]);

  

  useEffect(()=>{
    const get_last_orderItem = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/payment/last_order_item/`);
          setLastItems(response.data.last_order_item);
        } catch (error) {
          console.error(error);
        }  
    };
    get_last_orderItem();
  },[]);


  const initiatePayment = async () => {
    try {
      const response = await axios.post(`${props.url}payment/create/`);
      setPaymentUrl(response.data.redirect_url);
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };
  const last_items = lastItems.map(e=><div className='d-flex p-2 alert alert-secondary'> 
        <div className='w-25 d-flex justify-content-center align-items-center'><img src={e.product_info.image} alt="product img" className='w-50'/></div>
        <div className='w-25 d-flex justify-content-center align-items-center'><b>{e.price}</b></div>
        <div className='w-25 d-flex justify-content-center align-items-center'><b>{e.quantity}</b></div>
        <div className='w-25 d-flex justify-content-center align-items-center'><b>{(e.quantity*e.price).toFixed(2)}</b></div>
    </div>)

  return (

    <div className='container mt-5'>
    
          <div>
            <div className='d-flex p-2 alert alert-secondary'> 
                <div className='w-25 d-flex justify-content-center align-items-center'><b>Image</b></div>
                <div className='w-25 d-flex justify-content-center align-items-center'><b>price</b></div>
                <div className='w-25 d-flex justify-content-center align-items-center'><b>quantity</b></div>
                <div className='w-25 d-flex justify-content-center align-items-center'><b>Total</b></div>
            </div>
            {last_items}
          </div>


          <br/>
          <button className='btn btn-primary' onClick={initiatePayment}>Initiate Payment</button>
          {paymentUrl && (
            <div>
            <a href={paymentUrl}>Click here if you are not redirected.</a>
            </div>
            )}
      </div>
  );
};

export default PayPalPayment;