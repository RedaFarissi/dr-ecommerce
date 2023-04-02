export default function AsideTop(props){
    return(
    <li className="sidebar-menu-category">
        <button className="sidebar-accordion-menu" data-accordion-btn>
            <div className="menu-title-flex">
                <p className="menu-title"> 
                    {props.p} 
                </p>
            </div>
            <div>
                <img src={props.src} width="20" height="20" className="menu-title-img"/>
            </div>
        </button>
    </li>
    )
}