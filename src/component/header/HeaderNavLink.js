export default function HeaderNavLink(props){
    return(
    <li className="menu-category">
      <a href={props.path} className="menu-title"> {props.value} </a>
    </li>
    )
}