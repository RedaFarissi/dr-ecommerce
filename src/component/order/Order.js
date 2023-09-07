import React, {useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Order(props){
    const navigate = useNavigate()
    const [order,setOrder] = useState({
        first_name:"reda",
        last_name:"eskouni",
        email:"redaesskouni@gmail.com",
        address:"DR JDID RUE 55 N 23",
        postal_code:"14200",
        city:"Sidi Slimane",
    });

    const onchange =(event)=> {
        setOrder({ ...order, [event.target.id]: event.target.value });
    };

    const order_create = async (event) =>{
        event.preventDefault()
        const formData = new FormData();
        formData.append('first_name', order.first_name);
        formData.append('last_name', order.last_name);
        formData.append('email', order.email);
        formData.append('address', order.address);
        formData.append('postal_code', order.postal_code);
        formData.append('city', order.city);
        try{
            const response = await axios.post(`${props.url}order/create/` , formData , {
                withCredentials: true , 
            });
            console.log(response.data)
            props.cart_length_to_zero()
            navigate("/payment")
        }catch(err){
          alert(err)
        }
    }    

    return(       
<section>
    <div className="container-fluid pt-4">
        <div className="row">
            <div className="m-auto col-md-9 px-4">
                <h1>Your order</h1>
                <b>Total: $ (cart  get_total_price) </b>
                <hr className="mt-1 mb-5" />
            </div>

            <div className="m-auto col-md-9">
                <form method="POST" onSubmit={order_create}>
                    <div className="row mx-4">
                        <div className="col-md-6">
                            <div className="form-outline">
                                <input type="text" id="first_name" value={order.first_name} onChange={onchange} className="form-control order-form-input" />
                                <label className="form-label" htmlFor="first_name"><b>First Name</b></label>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2 mt-sm-0">
                            <div className="form-outline">
                                <input type="text" id="last_name" value={order.last_name} onChange={onchange} className="form-control order-form-input" />
                                <label className="form-label" htmlFor="last_name"><b>Last Name</b></label>
                            </div>
                        </div>
                    </div>

                    <div className="row  mt-3 mx-4">
                        <div className="col-12">
                            <div className="form-outline">
                                <input type="email" id="email" value={order.email} onChange={onchange} className="form-control order-form-input" />
                                <label className="form-label" htmlFor="email"><b>Email</b></label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-outline">                       
                                <input type="text" id="address" value={order.address} onChange={onchange} className="form-control order-form-input" />
                                <label className="form-label" htmlFor="address"><b>Address</b></label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-outline">
                                <input type="text" id="postal_code"  value={order.postal_code}  onChange={onchange} className="form-control order-form-input" />
                                <label className="form-label" htmlFor="postal_code"><b>Postal code</b></label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-outline">
                                <input type="text" id="city" value={order.city} onChange={onchange} className="form-control order-form-input" />
                                <label className="form-label" htmlFor="city"><b>City</b></label>
                            </div>
                        </div>  
                        <div className="col-12 mt-3">
                            <button type="submit" className="btn-submit w-100 btn btn-lg fs-4" style={{backgroundColor:"#ffd3b4"}} >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>  
        </div>  
    </div>
</section>
    )
}