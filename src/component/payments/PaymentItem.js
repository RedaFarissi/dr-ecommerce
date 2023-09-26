import images from "../images.js"

export default function PaymentItem(props){
    return(
    <div className='row alert alert-secondary'> 
        <div className='col-5 d-flex justify-content-center align-items-center'>
          <img 
            src={(props.product_info.image===null)?images.no_image:props.product_info.image}
            className="payment-img border border-light" alt="product img"
          />
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center'>
          <b>{props.price}</b>
        </div>
        <div className='col-3 d-flex justify-content-center align-items-center'>
          <b>{props.quantity}</b>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center'>
          <b>{(props.quantity*props.price).toFixed(2)}</b>
        </div>
    </div>
    )
}