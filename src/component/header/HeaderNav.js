import {HeaderNavLink} from '../index'
import languages from '../language.js'

export default function HeaderNav(props){
   
    
    const links  = [
        {id:1,path:"/", value:languages.languages_link.home },
        {id:2,path:"/men", value:languages.languages_link.men},
        {id:3,path:"/jewellery", value:languages.languages_link.jewellery},
        {id:4,path:"/electronics", value:languages.languages_link.electronics},
        {id:5,path:"/women", value:languages.languages_link.women},
        {id:6,path:"/accessories", value:languages.languages_link.accessories},
        {id:7,path:"/kids", value:languages.languages_link.kids}
    ]

    const all_links = links.map(e=> <HeaderNavLink key={e.id} path={e.path} value={e.value} /> )
      
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