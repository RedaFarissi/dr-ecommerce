import React from 'react';
import { handleColor } from '../function';
import { Link } from "react-router-dom";

export default function HeaderNavLink(props){
  
    return(
    <li className="menu-category" style={handleColor(localStorage.bg_color,props.color)}>
      <Link to={props.slug} className="menu-title">
        {props.name}
      </Link>
    </li>
    )
}