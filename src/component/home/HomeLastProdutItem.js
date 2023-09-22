import {Start} from "../path.js"
import images from "../images.js"
import axios from 'axios';
import React, { useState , useEffect , useMemo } from 'react';
import { Link , useNavigate} from 'react-router-dom';

export default function HomeLastProdutItem(props){
  const navigate = useNavigate()
  const [totalLike,setTotalLike] = useState(props.total_likes)

  const [isLike,setIsLike] = useState(false)
  
  const headers = useMemo(() => ({
    'Content-Type': 'application/json',
    'Authorization': `Token ${localStorage.getItem('auth_token')}`,
  }), []);

  useEffect(()=>{
    const checkAddLike = async ()=>{
      if(localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ){
        try{
          const response = await axios.get(`${props.url}produit_api/product_liked/${props.id}/`,{headers:headers})
          setIsLike(response.data.is_like)
        }catch(err){
          console.log(err)
        }
      }else{
        setIsLike(false)
      }
    }
    checkAddLike()
  },[props.url,props.id,headers]);
 


  const addLike = async (event)=>{
    event.preventDefault();
    if(localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== undefined ){
      try{
        const response = await axios.post(
          `${props.url}produit_api/add_like/${props.id}/${props.slug}/`, null , { headers: headers }
        );
        if (response.data.like === false) {
          setIsLike(false)
          setTotalLike(totalLike-1) 
        }else{
          setIsLike(true)
          setTotalLike(totalLike+1) 
        }
      }catch (error) {
        console.error(error);
        throw error;
      }
    }else{
      navigate("/login")
    }
  }




  return(
    <Link to={`/product_detail/${props.slug}`} className="showcase position-relative" style={{maxHeight:"360px"}} >
        <div onClick={addLike} className="like-btn rounded p-1 position-absolute" style={{bottom:"0rem",left:"0rem",borderTop:"0.3px solid #ededed",borderRight:"0.3px solid #ededed"}}>
          <i className={`fa-solid fa-thumbs-up fs-6 ${(isLike)?"text-primary":""}`}  style={{color:"gray",cursor:"pointer"}}></i> &nbsp;
          {totalLike}
          
        </div>
        <div className="showcase-banner">
          <img src={(props.image===null)?images.no_image:props.image} className="product-img" alt={props.title} style={{height:"160px"}}/>
          <p className="showcase-badge angle pink">new</p>
          <div className="showcase-actions">
            <button className="btn-action"><ion-icon name="heart-outline"></ion-icon></button>
            <button className="btn-action"><ion-icon name="eye-outline"></ion-icon></button>
            <button className="btn-action"><ion-icon name="repeat-outline"></ion-icon></button>
            <button className="btn-action"><ion-icon name="bag-add-outline"></ion-icon></button>
          </div>
        </div>
        
        <div className="showcase-content">
          <div className="showcase-category"> {props.category} </div>
          <h3><span className="showcase-title"> {(props.title.length>19)?(props.title).slice(0, 19)+"...":props.title} </span></h3>
          <div className="showcase-rating d-flex justify-content-between">
            
            <div>
              <Start start={props.start}/>
            </div>

          </div>
          <div className="price-box">
            <p className="price"> {props.price_reduction}  درهم </p>
            <del>  {props.default_price} درهم </del>
          </div>             
        </div>
    </Link>
    )
    }