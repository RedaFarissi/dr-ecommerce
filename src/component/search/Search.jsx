import { useLocation } from 'react-router-dom';
import React, {useState , useEffect} from 'react';
import { HomeLastProdutItem } from '../path'

export default function Search(props){
    const [search , setSearch] = useState([]);
    const [searchText , setSearchText] = useState([]);
    const location = useLocation();
    
    useEffect(()=>{
        const searchData = location.state && location.state.searchData;
        const search_about = location.state && location.state.searchText;
        setSearch(searchData);
        setSearchText(search_about)
    },[location.state])
    
    const search_items = search.map(e=><HomeLastProdutItem 
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
      />)

    return(
<div className="product-container" >
    <div className="container">
        <div className="product-main w-100">
            <h2 className={`title`} dir='ltr'> {searchText}  </h2>
            <div className="product-grid">
              { search_items }
            </div>
        </div>
    </div>
</div>
    )
}