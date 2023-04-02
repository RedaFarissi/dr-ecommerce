import {HomeLastProdutItem} from '../index.js'
export default function HomeLastProdut(props){
    var result = props.last_produit_after_four.map(e=><HomeLastProdutItem
      key={e.id}
      image={e.image}
      category={e.category}
      title={e.title}
      start={e.start}
      price_reduction={e.price_reduction}
      default_price={e.default_price}
      />)
    return(
        <div className="product-main">
        <h2 className="title"> منتجات جديدة </h2>
        <div id="product-grid"  className="product-grid">
               
          {result}

        </div>
      </div>
    )
}