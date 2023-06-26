import {HeaderNavLink} from '../index'
//import languages from '../language.js'

export default function HeaderNav(props){
   
    
    // const links  = [
        // {id:1,slug:"/", name:languages.languages_link.home },
        // {id:2,slug:"/men", name:languages.languages_link.men},
        // {id:3,slug:"/jewellery", name:languages.languages_link.jewellery},
        // {id:4,slug:"/electronics", name:languages.languages_link.electronics},
        // {id:5,slug:"/women", name:languages.languages_link.women},
        // {id:6,slug:"/accessories", name:languages.languages_link.accessories},
        // {id:7,slug:"/kids", name:languages.languages_link.kids}
    // ]


    //const all_links = links.map(e=> <HeaderNavLink key={e.id} path={e.path} value={e.value} color={props.color} /> )
    const links = props.all_category.map(e=> <HeaderNavLink key={e.id} slug={e.slug} name={e.name} color={props.color} />)
    
    return(
      <nav className="desktop-navigation-menu" >
        <div className="container">
          <ul className="desktop-menu-category-list">
            

            { links  }

          </ul>
        </div>
      </nav>
    )
}