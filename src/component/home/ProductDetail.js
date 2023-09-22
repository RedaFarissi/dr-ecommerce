import {Start} from "../path.js"
import axios from "axios";
import { useParams , useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import images from "../images.js"

export default function ProductDetail(props){
    const navigate = useNavigate();
    const { slug } = useParams();
    const [productDetail,setProductDetail ] = useState([])
    const [quantity,setQuantity] = useState(1)

   
    useEffect(() => {
      const product_detail_function = async () =>{
         try{
           const response = await axios.get(`${props.url}produit_api/product/${slug}/`);
         
           setProductDetail(response.data.product_detail)
         }catch(err){
           alert(err)
         }
      }
      product_detail_function()
    },[props.url,slug])


  
    const add_to_cart = async () =>{
         try{
           const response = await axios.get(`${props.url}cart/add/${productDetail.id}/${productDetail.slug}/${quantity}/`, {withCredentials: true});    
           console.log(response.data)
         }catch(err){
           alert(err)
         }
         props.cart_length_add_1()
         navigate('/cart')
    }
  
  

    const handleSelectChange = (event) => {
      setQuantity(event.target.value);
    };
      
      
    
    let arr_num = Array.from({ length: 20 }, (_, index) => index + 1)

    return(
      <div className="product-detail container w-100" >
    
        <div className="row h-100">
          <div className="col-md-6 d-flex justifu-content-center align-items-center">
            <img src={(productDetail.image===null)?images.no_image:productDetail.image} className="w-100" alt="img" />
          </div>
          <div className="col-md-6 p-4 d-flex justifu-content-center align-items-center">
              <div>
                <div className="title"> {productDetail.title} </div>
                <div>  {productDetail.category_name} </div>
                <br/>
                <div>
                  <Start start={productDetail.start}/>
                </div>
                <br/>
                <div className="price-box">
                  <span className="fs-4"> {productDetail.price_reduction}  درهم </span> &nbsp;
                  <small><del>  {productDetail.default_price} درهم </del></small>
                </div>  
                <br/>
                <p className="mb-3">
                  {productDetail.description}
                </p>
                
                <select id="options" value={quantity} onChange={handleSelectChange}>
                  {arr_num.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                <br/><br/>
                <button onClick={add_to_cart} className="ADD-TO-CART btn btn-lg fs-5 text-light" >
                  ADD TO CART
                </button>
              </div> 
          </div>         
        </div>
    </div>
  )
}