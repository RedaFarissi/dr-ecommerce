import {HomeLastProdutItem} from '../path.js'


export default function HomeLastProdut(props){


    var result = props.all_product.map(e => 
          <HomeLastProdutItem
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
          />
    )

    
    return(
      <div className="product-main">
        <h2 className="title"> جميع المنتجات  </h2>
        <div id="product-grid"  className="product-grid">
             
          {result}

        </div>
      </div>
    )
}