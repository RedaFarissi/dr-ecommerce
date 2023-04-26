import { Banner , HomeProductTop , HomeDealDay , HomeLastProdut , Aside , HomeBlog } from '../index'

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
                  start_five_last_four={props.start_five_last_four}
                />
                <HomeDealDay 
                  deal_of_day={props.deal_of_day}
                />
                <HomeLastProdut 
                  last_produit_after_four={props.last_produit_after_four}
                />
            </div>
        </div>
    </div>
    <HomeBlog  />
  </>
  )
}