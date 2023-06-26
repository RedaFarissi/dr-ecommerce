import axios from 'axios';
import { useState , useEffect} from 'react';
import '../../App.css';
import { CategoryItem } from '../index';

export default function CategoryItems(props){
  
  const [data , setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/produit_api/${props.slug}/`);
        setData(response.data.all_product);
          
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props.slug]);

  
  console.log(data)
  data.map(e=> console.log("id "+e.id))
  return (
  <div className="product-container" >
    <div className="container">
  
      <div className="product-main">
      <h2 className="title"> {props.name}  </h2>
        <div className="product-grid">

          { data.map( e => <CategoryItem 
            key={e.id} image={e.image} category={e.category_name} title={e.title} start={e.start} 
            price_reduction={e.price_reduction} default_price={e.default_price} 
          />)}

        </div>
      </div>
    
      </div>
  </div>
  );
}