import { 
  HeaderIconCart , HeaderIconCreatePost , HeaderIconLogin ,
  HeaderIconProfile , HeaderLogo , HeaderSearch
} from "../path.js"

export default function HeaderTop(props){  

 
  return (
    <div className="header-main">
        <div className="container">
            <HeaderLogo clicklogo={props.clicklogo} /> 

            <div className="header-search-container">
              <HeaderSearch />
            </div>

            <div className="header-user-actions" id="header-icon">          
                <HeaderIconLogin />
                <HeaderIconCreatePost />
                <HeaderIconCart cart_length={props.cart_length} />
                <HeaderIconProfile
                  clickProfile={props.clickProfile}
                  clickProfileRef={props.clickProfileRef}
                  logout={props.logout}
                />  
            </div>
        </div> 
    </div>
  )
}