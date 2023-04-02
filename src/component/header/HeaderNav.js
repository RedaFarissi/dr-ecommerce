import {HeaderNavLink} from '../index'

export default function HeaderNav(props){
    const links  = [
        {path:"/", value:"الصفحة الرئيسية"},
        {path:"/men", value:"الرجال"},
        {path:"/jewellery", value:"مجوهرات"},
        {path:"/electronics", value:"الكتروني"},
        {path:"/women", value:"النساء"},
        {path:"/accessories", value:"إكسسوارات"},
        {path:"/kids", value:"أطفال"}
    ]
    const all_links = links.map(e=> <HeaderNavLink path={e.path} value={e.value} /> )
    
      
    return(
      <nav className="desktop-navigation-menu" style={props.another_style}>
        <div className="container">
          <ul className="desktop-menu-category-list">
              {all_links}
          </ul>
        </div>
      </nav>
    )
}