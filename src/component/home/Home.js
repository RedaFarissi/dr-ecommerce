import { Banner , HomeProductTop , HomeDealDay , HomeLastProdut , Aside } from '../path'
import "./Home.css";

export default function Home(props){

  return(
  <>
    <Banner />
    <div className="product-container">
        <div id='container-home' className="container">
            <Aside
              best_discount={props.best_discount}
              run_scroll_function={true}
            />
            <div className="product-box" id="product-box">
                <HomeProductTop 
                  url={props.url}
                  last_four_produit={props.last_four_produit} 
                  top_4_products_has_liked={props.top_4_products_has_liked}
                />
                <HomeDealDay 
                  url={props.url}
                  deal_of_day={props.deal_of_day}
                />
                <HomeLastProdut 
                  url={props.url}
                  last_produit_after_four={props.last_produit_after_four}
                  all_product={props.all_product}
                />
            </div>
        </div>
    </div>
  </>
  )
}