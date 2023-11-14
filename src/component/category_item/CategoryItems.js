import axios from 'axios';
import { useState , useEffect} from 'react';
import '../../App.css';
import { HomeLastProdutItem } from '../path';

export default function CategoryItems(props){
  
  const [data , setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${props.url}produit_api/${props.slug}/`);
        setData(response.data.all_product);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props.url,props.slug]);

  
  console.log(data)
  return (
  <div className="product-container" >
    <div className="container">
  
      <div className="product-main w-100">
      <h2 className={`title`}  dir='ltr'> {props.name}  </h2>
        <div className="product-grid">

          { data.map( e => <HomeLastProdutItem 
            key={e.id} 
            id={e.id}
            url={props.url}
            slug={e.slug} 
            image={e.image} 
            category={e.category_name} 
            title={e.title} 
            start={e.start} 
            price_reduction={e.price_reduction} 
            default_price={e.default_price} 
            total_likes={e.total_likes}
          />)}
        </div>
      </div>
    
      </div>
  </div>
  );
}