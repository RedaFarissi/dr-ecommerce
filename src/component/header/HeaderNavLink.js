import { handleColor } from '../function';

export default function HeaderNavLink(props){
    return(
      <li className="menu-category" style={handleColor(localStorage.bg_color)}>
          <a href={props.path} className="menu-title">
              {props.value}
          </a>
      </li>
    )
}