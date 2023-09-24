import { useState , useRef , useEffect} from 'react';
import axios from 'axios';
import './CreatePost.css'
import { CreatePostItem , CreatePostForm} from '../path';
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
  const [imageSrc, setImageSrc] = useState('');
  const [productsCreatedByUser, setProductsCreatedByUser] = useState([]) 


  const handleInputChange = (event) => {
      setData({ ...data, [event.target.name]: event.target.type === "file" ? event.target.files[0] : event.target.value });
      if(event.target.type === "file"){
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            setImageSrc(e.target.result);
          };
    
          reader.readAsDataURL(file);
        } else {
          setImageSrc('');
        }
      }
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
      await axios.post(`${props.url}create_post/create/`, formData ,
        {
          headers : {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`,
          }
        }
      )
     
  };

  const display_create_post = () => {
    const element = myElementRef.current
    if(element.style.display === "none" ){
      element.style.display = "block"
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else{
      element.style.display = "none";
    } 

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
      <CreatePostForm 
        myElementRef={myElementRef} 
        display_create_post={display_create_post} 
        handleCreatePost={handleCreatePost}
        handleInputChange={handleInputChange}
        data={data}
        all_category={props.all_category}
        imageSrc={imageSrc}
      />

      <div className="container">
        <div className="row">
            <div className="col-lg-4 mb-2" style={{height:"400px"}}>
                <div onClick={display_create_post} style={{cursor:"pointer"}}
                  className="w-95 alert-secondary m-auto border h-100 d-flex justify-content-center align-items-center">
                    <i className="fa-sharp text fa-regular fa-image" style={{fontSize:"200px"}}></i>
                </div>
            </div>
            {post_items}
        </div>
      </div>
    </>
  )
}

