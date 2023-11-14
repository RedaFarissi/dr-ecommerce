import { 
  HeaderIconCart , HeaderIconCreatePost , HeaderIconLogin , 
  HeaderIconProfile , HeaderLogo , HeaderSearch , HeaderIconDarkOrSun
} from "../path.js"

export default function HeaderTop(props){  

  return (
    <div className="header-main">
        <div className="container">
            <HeaderLogo 
              clicklogo={props.clicklogo} 
              handleLanguage={props.handleLanguage} 
            /> 
            <div className="header-search-container">
              <HeaderSearch 
                url={props.url}
              />
            </div>

            <div className={`${(localStorage.getItem("bg_color") === "black")?"bg-black":"bg-white"} header-user-actions`} id="header-icon">          
                <HeaderIconLogin />
                <HeaderIconCreatePost />
                <HeaderIconDarkOrSun changeColor={props.changeColor} />
                <HeaderIconCart cart_length={props.cart_length} />
                <HeaderIconProfile
                  clickProfile={props.clickProfile}
                  clickProfileRef={props.clickProfileRef}
                  logout={props.logout}
                  changeColor={props.changeColor}
                />  
            </div>
        </div> 
    </div>
  )
}