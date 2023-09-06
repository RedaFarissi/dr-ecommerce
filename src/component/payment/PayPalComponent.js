import React, { useState } from 'react';
import axios from 'axios';

const PayPalPayment = () => {
  const [paymentUrl, setPaymentUrl] = useState(null);

  const initiatePayment = async () => {
    try {
      const response = await axios.post('http://localhost:8000/payment/create/');
      setPaymentUrl(response.data.redirect_url);
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  console.log(paymentUrl)
  return (
    <div>
      <h2>Pay with PayPal</h2>
      <button className='btn btn-primary' onClick={initiatePayment}>Initiate Payment</button>
      {paymentUrl && (
        <div>
          <p>Redirecting to PayPal...</p>
          <a href={paymentUrl}>Click here if you are not redirected.</a>
        </div>
      )}
    </div>
  );
};

export default PayPalPayment;