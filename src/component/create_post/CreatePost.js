import { useState , useRef , useEffect} from 'react';
import axios from 'axios';
import './CreatePost.css'
import { CreatePostItem} from '../path';
export default function CreatePost(props){
  const myElementRef = useRef(null);
  const [data, setData] = useState({   
      image: null,
      title: 'product name',
      description: 'Product name bla bla ...',
      start: '5',
      default_price: 120,
      price_reduction: 100,
      category: "",
  });
  const [productsCreatedByUser, setProductsCreatedByUser] = useState([]) 


  const handleInputChange = (event) => {
      setData({ ...data, [event.target.name]: event.target.type === "file" ? event.target.files[0] : event.target.value });
  };

  const handleCreatePost = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('image', data.image);
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('default_price', data.default_price);
      formData.append('price_reduction', data.price_reduction);
      formData.append('start', data.start);
      formData.append('category', data.category);
      const response = await axios.post(`${props.url}create_post/create/`, formData ,
        {
          headers : {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`,
          }
        }
      )
      console.log(response.data)
  };

  const display_create_post = () => {
    const element = myElementRef.current
    element.style.display = element.style.display === "none" ? "block" : "none";
  };

  useEffect(()=>{
    const list_product_created_by_user = async () => {
      const response = await axios.get(`${props.url}create_post/products_created_by_user/`,
        {
          headers : {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`,
          }
        }
      )
      setProductsCreatedByUser(response.data.produits_user)
    };
    list_product_created_by_user()
  },[props.url]);
  
  const post_items =  productsCreatedByUser.map(e=><CreatePostItem 

    key={e.id}
    url={props.url}
    id={e.id}
    slug={e.slug}
    image={e.image} 
    title={e.title} 
    total_likes={e.total_likes}
  />)
  return(
  <>

    <div ref={myElementRef} className="alert alert-dark" style={{display:"none",position:"relative"}}> 
      
      <i onClick={display_create_post} className="fa-solid fa-xmark position-absolute fs-3 text-danger" style={{left:"20px",cursor:"pointer"}}></i>
      
      <form onSubmit={handleCreatePost} encType="multipart/form-data"  method="POST"> 
         <label htmlFor="image"> Image:</label>
         <input type="file" name="image" onChange={handleInputChange} />
         
         <br/>

         <label htmlFor="title">Title:</label>
         <input type="text" name="title" value={data.title} onChange={handleInputChange}/><br/>
         
         <label htmlFor="description">Description:</label><br/>
         <textarea name="description" rows="4" cols="50" value={data.description} onChange={handleInputChange}></textarea>
         <br/>
         
         <label htmlFor="default_price">Default Price:</label>
         <input type="number"  value={data.default_price} name="default_price" onChange={handleInputChange} />
         <br/>
         
         <label htmlFor="price_reduction">Price Reduction:</label>
         <input type="number" name="price_reduction" value={data.price_reduction} onChange={handleInputChange}/>
         <br/>

         <label htmlFor="start">Start:</label>
         <select name="start"  value={data.start} onChange={handleInputChange}>
             <option value="5">Five</option>
             <option value="4">Four</option>
             <option value="3">Three</option>
             <option value="2">Two</option>
             <option value="1">One</option>
         </select>
         <br/>
         
         <label htmlFor="select_category">Category:</label>
         <select name="category" id='select_category' onChange={handleInputChange}>
            <option value=""> Select category </option>)
            { props.all_category.map(e=> <option key={e.id} value={e.name}> {e.name} </option>) }
         </select>
         <br/>
           
         <button type="submit" className='btn btn-primary mt-3'>Create Product</button>
      </form>
    </div>


    <div className="container">
    <div className="row">
        <div className="col-lg-4 mb-2" style={{height:"400px"}}>
            <div onClick={display_create_post} className="w-95 alert-secondary m-auto border h-100 d-flex justify-content-center align-items-center" style={{cursor:"pointer"}}>
                <i className="fa-sharp text fa-regular fa-image" style={{fontSize:"200px"}}></i>
            </div>
        </div>
        {post_items}
    </div>
  </div>
    
    </>
  )
}

