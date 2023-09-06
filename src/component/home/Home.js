import { Banner , HomeProductTop , HomeDealDay , HomeLastProdut , Aside } from '../path'
import "./Home.css";

export default function Home(props){

  return(
  <>
    <Banner />
    <div className="product-container" >
        <div className="container">
            <Aside  
              best_discount={props.best_discount} 
            />
            
            <div className="product-box">
                <HomeProductTop 
                  last_four_produit={props.last_four_produit} 
                  top_4_products_has_liked={props.top_4_products_has_liked}
                />
                <HomeDealDay 
                  deal_of_day={props.deal_of_day}
                />
                <HomeLastProdut 
                  last_produit_after_four={props.last_produit_after_four}
                  all_product={props.all_product}
                />
            </div>
        </div>
    </div>
  </>
  )
}