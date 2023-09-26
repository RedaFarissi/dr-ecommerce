import React, { useEffect } from 'react';
import "./PaypalButton.css"


export default function PaypalButton() {
    useEffect(() => {
        // Load PayPal JavaScript SDK here
        const YOUR_PAYPAL_CLIENT_ID = 'AfILyKjspPjvt8p4rdHjB_PnX4IQcf_J4BLskhHZJF7ae8sxApDItgXzPqhBOUeYa1wYVQD5rHjjn7C9'; // Replace with your PayPal client ID
        
        // Create a PayPal button/form and handle payment initiation
        window.paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '210.00' // Amount to be paid
                        }
                    }]
                });
            },
            // Use the actual client ID here
            client: {
                sandbox: YOUR_PAYPAL_CLIENT_ID, // Replace with your actual client ID
                production: YOUR_PAYPAL_CLIENT_ID, // Replace with your actual client ID
            },
            onApprove: function(data, actions) {
                // Capture the payment on the frontend if needed
                return actions.order.capture().then(function(details) {
                    // Handle success (you can display a success message to the user)
                });
            }
        }).render('#paypal-button-container'); // Container element ID   

    }, []);

   

    return (
        <div className='d-flex justify-content-center'>
            <div id='box_paYpal_handler'>
                <div id="paypal-button-container"></div>
            </div>
        </div>    
    );
}



// // PayPalButton.js
// import React, { useEffect } from 'react';
// import "./PaypalButton.css"
// //import axios  from 'axios';


// export default function PaypalButton(props) {
    
//     useEffect(() => {
        
//         // Load PayPal JavaScript SDK here
//         const YOUR_PAYPAL_CLIENT_ID = 'ARC9EimTFv6eHfgZ-2cib8KaE3dzTVwyPuLkxxbmJArgO7jfQvtDXo9eoc7chCcYrR_Tc2hroOAfV-SF'; // Replace with your PayPal client ID
        
//         // Create a PayPal button/form and handle payment initiation
//         window.paypal.Buttons({
//             createOrder: function(data, actions) {
//                 return actions.order.create({
//                     purchase_units: [{
//                         amount: {
//                             value: '290.00' // Amount to be paid
//                         }
//                     }]
//                 });
//             },
//             // Use the actual client ID here
//             client: {
//                 sandbox: YOUR_PAYPAL_CLIENT_ID, // Replace with your actual client ID
//                 production: YOUR_PAYPAL_CLIENT_ID, // Replace with your actual client ID
//             },
//             onApprove:  function(data, actions) {
//                 // Capture the payment on the frontend if needed                
//                 return actions.order.capture().then(async function(details) {
//                 //    try{
//                 //         const response = await axios.post(`${props.url}payment/create/`,{paymentDetails: details})
//                 //         console.log(response.data);
//                 //     }catch(error){
//                 //         console.error(error);
//                 //     }
//                 });
//             }
//         }).render('#paypal-button-container'); // Container element ID   

//     }, [props.url]);

   

//     return (
//         <div className='d-flex justify-content-center'>
//             <div id='box_paYpal_handler'>
//                 <div id="paypal-button-container"></div>
//             </div>
//         </div>    
//     );
// }

