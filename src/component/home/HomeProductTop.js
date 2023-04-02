import {HomeProductTopitem} from '../index'
export default function HomeProductTop(props){
    const last_four_produit = props.last_four_produit.map(e=><HomeProductTopitem 
        key={e.id}
        image = {e.image}
        title = {e.title}
        category={e.category}
        price_reduction={e.price_reduction}
        default_price={e.default_price}
      />) 
    var start_five_last_four = props.start_five_last_four.map(e=><HomeProductTopitem 
      key={e.id}
      image = {e.image}
      title = {e.title}
      category={e.category}
      price_reduction={e.price_reduction}
      default_price={e.default_price}
    />)

    return (
    <div className="product-minimal">
        <div className="product-showcase" >
          <h2 className="title"> أخر المنتجات </h2>
            <div className="showcase-wrapper has-scrollbar" >
                {last_four_produit}
            </div>
        </div>
        <div className="product-showcase">            
            <h2 className="title"> الشائع </h2>
              <div className="showcase-wrapper has-scrollbar">
                {last_four_produit}
              </div>
        </div>                   
        <div className="product-showcase">
            <h2 className="title">الأعلى تقييما</h2>
            <div className="showcase-wrapper has-scrollbar">
                {start_five_last_four}
            </div>
        </div>
    </div>
    )
}