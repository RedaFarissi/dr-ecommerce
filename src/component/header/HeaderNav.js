import {HeaderNavLink} from '../path'


export default function HeaderNav(props){
   
    
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