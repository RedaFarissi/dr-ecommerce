import React, { useEffect } from 'react';
import axios from 'axios';

export default function SuccessPage(props){    
    useEffect(()=>{ 
        const SuccessPayment = async () => {

                try{
                    const response = await axios.get(`${props.url}payment/success_payment/`);
                    console.log(response.data);
                }catch(error){
                    console.error('Error initiating payment:', error);
                }
                localStorage.removeItem('payment');
        };  
        SuccessPayment()  
    },[props.url]);
    
    return(
        <h2>Payment Successful</h2>
    )
}