import {HomeProductTopitem} from '../path'
export default function HomeProductTop(props){
    const last_four_produit = props.last_four_produit.map(e=><HomeProductTopitem 
        key={e.id}
        slug={e.slug}
        image = {e.image}
        title = {e.title}
        category={e.category}
        price_reduction={e.price_reduction}
        default_price={e.default_price}
      />) 
    
    const top_4_products_has_liked = props.top_4_products_has_liked.map(e=><HomeProductTopitem 
      key={e.id}
      slug={e.slug}
      image = {e.image}
      title = {e.title}
      category={e.category}
      price_reduction={e.price_reduction}
      default_price={e.default_price}
    />
      )

    return (
    <div className="product-minimal">
        <div className="product-showcase">
          <h2 className="title"> أخر المنتجات </h2>
            <div className="showcase-wrapper has-scrollbar">
                {last_four_produit}
            </div>
        </div>
               
        <div className="product-showcase">
            <h2 className="title">الأعلى تقييما</h2>
            <div className="showcase-wrapper has-scrollbar">
                {top_4_products_has_liked}
            </div>
        </div>
    </div>
    )
}